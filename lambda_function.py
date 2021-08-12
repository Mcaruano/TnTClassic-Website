import boto3
from botocore.exceptions import ClientError
import json
import logging

"""
Queries the 'Recipient-Timestamp-index' Index of the 'TransactionHistory' DDB table
for the records pertaining to the given recipient.
"""
def query_ddb_index(recipientName, lootMode, contentTier, reverse=True):
    ddb_client = boto3.client('dynamodb')
    response = None

    filterExpression='ContentTier = :contentTier'
    expressionAttrValues = {
        ':recipient':{'S': recipientName},
        ':contentTier':{'S': contentTier}
    }
    if lootMode == 'PRIORITY':
        filterExpression = filterExpression + ' AND LootMode = :lootMode'
        expressionAttrValues[':lootMode'] = {'S': 'PRIORITY'}
    elif lootMode == 'LOTTERY':
        filterExpression = filterExpression + ' AND LootMode = :lootMode'
        expressionAttrValues[':lootMode'] = {'S': 'LOTTERY'}
    
    try:
        response = ddb_client.query(
            TableName='TransactionHistory',
            IndexName='Recipient-Timestamp-index',
            Select='ALL_PROJECTED_ATTRIBUTES', # This parameter is only availble if we specify an IndexName
            ScanIndexForward=not reverse, # If True, will return results Ascending (AKA - not reversed)
            KeyConditionExpression='Recipient = :recipient', # Can only reference Partition/Sort keys from Indexes
            FilterExpression=filterExpression,
            ExpressionAttributeValues= expressionAttrValues
        )
    except ClientError as e:
        # Disregard the errors thrown from the ConditionExpression check
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            logging.error(e)
    return response

def lambda_handler(event, context):
    playerName = event["queryStringParameters"]["playerName"]
    lootMode = event["queryStringParameters"]["lootMode"]
    contentTier = event["queryStringParameters"]["contentTier"] 
    ddbResults = query_ddb_index(playerName, lootMode, contentTier)
    
    # Format the Lambda response to adhere to the standard Response structure
    properlyFormattedResponse = {}
    properlyFormattedResponse['isBase64Encoded'] = False
    properlyFormattedResponse['headers'] = {'Access-Control-Allow-Origin': '*'}

    if ddbResults == None or 'Items' not in ddbResults or len(ddbResults['Items']) == 0:
        properlyFormattedResponse['statusCode'] = 500
        errorBody = {}
        errorBody['ErrorMessage'] = "No results found. Please be sure you're using proper case and special characters."
        properlyFormattedResponse['body'] = json.dumps(errorBody, indent = 2)
    else:
        properlyFormattedResponse['statusCode'] = 200    
        properlyFormattedResponse['body'] = json.dumps(ddbResults['Items'], indent = 2)

    return properlyFormattedResponse

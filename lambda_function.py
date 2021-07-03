import boto3
from botocore.exceptions import ClientError
import json
import logging

"""
Queries the 'Recipient-Timestamp-index' Index of the 'TransactionHistory' DDB table
for the records pertaining to the given recipient.
"""
def query_ddb_index(recipientName, reverse=True):
    ddb_client = boto3.client('dynamodb')
    response = None
    try:
        response = ddb_client.query(
            TableName='TransactionHistory',
            IndexName='Recipient-Timestamp-index',
            Select='ALL_PROJECTED_ATTRIBUTES', # This parameter is only availble if we specify an IndexName
            ScanIndexForward=not reverse, # If True, will return results Ascending (AKA - not reversed)
            KeyConditionExpression='Recipient = :recipient', # Can only reference Partition/Sort keys from Indexes
            ExpressionAttributeValues= { 
                ":recipient":{"S": recipientName}
            }
        )
    except ClientError as e:
        # Disregard the errors thrown from the ConditionExpression check
        if e.response['Error']['Code'] != 'ConditionalCheckFailedException':
            logging.error(e)
    return response

def lambda_handler(event, context):
    # TODO: Fetch the recipientName from the QueryParams
    ddbResults = query_ddb_index('Akaran')
    
    # Format the Lambda response to adhere to the standard Response structure
    properlyFormattedResponse = {}
    properlyFormattedResponse['isBase64Encoded'] = False
    properlyFormattedResponse['statusCode'] = 200
    properlyFormattedResponse['headers'] = {'Access-Control-Allow-Origin': '*'}
    properlyFormattedResponse['body'] = json.dumps(ddbResults['Items'], indent = 2)

    return properlyFormattedResponse

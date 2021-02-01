import logging
import boto3
from botocore.exceptions import ClientError
import os

AWS_WEBSITE_BUCKET_NAME = 'tntclassicwow.com'

IGNORE_FILES = ['push_assets.py']
IGNORE_DIRS = ['.git']

"""
Upload a file to an S3 bucket. Source taken directly from:
https://boto3.amazonaws.com/v1/documentation/api/latest/guide/s3-uploading-files.html

:param file_name: File to upload
:param bucket: Bucket to upload to
:param object_name: S3 object name. If not specified then file_name is used
:return: True if file was uploaded, else False
"""
def upload_file(file_name, bucket, object_name=None):
    
    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = file_name

    # Upload the file
    s3_client = boto3.client('s3')
    try:
        response = s3_client.upload_file(file_name, bucket, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True

if __name__ == "__main__":
    scriptPath = os.path.realpath(__file__)
    scriptDir = os.path.dirname(scriptPath)

    subDirs = next(os.walk(scriptDir))[1]

    # Upload all of the top-level files
    for fileName in os.listdir(scriptDir):
        if not os.path.isdir(os.path.join(scriptDir, fileName)):
            if fileName in IGNORE_FILES: continue
            # print("Would have uploaded file: {}".format(fileName))
            upload_file(os.path.join(scriptDir, fileName), AWS_WEBSITE_BUCKET_NAME, fileName)

    # For each subDir within the top-level directory, upload all files using an ObjectName of subdir/fileName
    # to recreate the folder structure within S3
    for subDir in subDirs:
        if subDir in IGNORE_DIRS: continue
        for fileName in os.listdir(os.path.join(scriptDir, subDir)):
            if fileName in IGNORE_FILES: continue
            # print("Would have uploaded file: {}".format(os.path.join(subDir, fileName)))
            upload_file(os.path.join(scriptDir, subDir, fileName), AWS_WEBSITE_BUCKET_NAME, os.path.join(subDir, fileName))            

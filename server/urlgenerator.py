import boto3
s3 = boto3.resource('s3')
bucketName = 'northerly-images'
bucket = s3.Bucket(bucketName)
urlMidfix = '.s3.amazonaws.com/'
output = open('northerlyURLs.txt', 'a')

for image in bucket.objects.all():
    url = '"' + bucketName + urlMidfix + image.key + '"\n'
    output.write(url)

output.close()
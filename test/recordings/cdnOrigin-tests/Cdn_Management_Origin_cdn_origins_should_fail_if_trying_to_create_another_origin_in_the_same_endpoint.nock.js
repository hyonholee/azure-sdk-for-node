// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810830\",\"not_before\":\"1459806930\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2OTMwLCJuYmYiOjE0NTk4MDY5MzAsImV4cCI6MTQ1OTgxMDgzMCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.h4oFLp8vs1ZNk_DnxwMWTOq5vwFNDOpoKh6LRQx_K6SIEesuD1it2bfsz9RlLWD6T4ZsOnnQ74l5CTi-CRLymFj70aIpGg4b2BjRB-O5Jqzwffc7rA77XQyOy4jpu8BIOzCzAmih_-JMSLNehICv65sWHc8FSVNUORJWMSUWGLqnadeuZ4di0N2oLHEaByT38Vss2qVuV_8KTD9Pm2vx3buhfNGKaZmqZhiv2CNCyn5MDcAkO5MG6dr1zINnDx8BUqxWd4whTZ16-EpFoq4eIoBOCDbrsMju4BwFzT2wdctD9lvcd8C27cZ0fU_CCbS6WU85o-8A9BHhKLwWUUOZDg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '8ff1b1a9-a498-493a-9fe6-6e51f1a96791',
  'client-request-id': 'aff60191-1d23-4a37-87e8-bf438a6c6d59',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_30',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:00:29 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810830\",\"not_before\":\"1459806930\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2OTMwLCJuYmYiOjE0NTk4MDY5MzAsImV4cCI6MTQ1OTgxMDgzMCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.h4oFLp8vs1ZNk_DnxwMWTOq5vwFNDOpoKh6LRQx_K6SIEesuD1it2bfsz9RlLWD6T4ZsOnnQ74l5CTi-CRLymFj70aIpGg4b2BjRB-O5Jqzwffc7rA77XQyOy4jpu8BIOzCzAmih_-JMSLNehICv65sWHc8FSVNUORJWMSUWGLqnadeuZ4di0N2oLHEaByT38Vss2qVuV_8KTD9Pm2vx3buhfNGKaZmqZhiv2CNCyn5MDcAkO5MG6dr1zINnDx8BUqxWd4whTZ16-EpFoq4eIoBOCDbrsMju4BwFzT2wdctD9lvcd8C27cZ0fU_CCbS6WU85o-8A9BHhKLwWUUOZDg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '8ff1b1a9-a498-493a-9fe6-6e51f1a96791',
  'client-request-id': 'aff60191-1d23-4a37-87e8-bf438a6c6d59',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_30',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:00:29 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/anotherName?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The number of profiles or endpoints created exceeds quota. Please contact support to increase quota.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '169',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '73d5aa18-c5da-4ecd-bf2f-df2adff7e2af',
  'x-ms-client-request-id': 'b53cc446-c70b-4b84-86bc-62b8935db74d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '3ac4f914-11db-4571-87e8-7c79318385db',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220031Z:3ac4f914-11db-4571-87e8-7c79318385db',
  date: 'Mon, 04 Apr 2016 22:00:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/anotherName?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"The number of profiles or endpoints created exceeds quota. Please contact support to increase quota.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '169',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '73d5aa18-c5da-4ecd-bf2f-df2adff7e2af',
  'x-ms-client-request-id': 'b53cc446-c70b-4b84-86bc-62b8935db74d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '3ac4f914-11db-4571-87e8-7c79318385db',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220031Z:3ac4f914-11db-4571-87e8-7c79318385db',
  date: 'Mon, 04 Apr 2016 22:00:30 GMT',
  connection: 'close' });
 return result; }]];
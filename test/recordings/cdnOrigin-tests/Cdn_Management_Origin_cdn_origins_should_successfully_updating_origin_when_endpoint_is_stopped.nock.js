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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810871\",\"not_before\":\"1459806971\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2OTcxLCJuYmYiOjE0NTk4MDY5NzEsImV4cCI6MTQ1OTgxMDg3MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.DmC_HrHObmAkTYJ8Dvc393DzlHqVeZRpxXsH-kTfRBitq4PgP5b0lzazJoaQMGmchj5h2Ww_ZIExJd3PWXtOCA6o_CoHDIovdmgicvdb_0CvhAELWBjSlUJQMbldfSworobKwqQMJVozGVUHorPjKT2IutdDe_8B-aD9Aplj57OAOIeJ0BaRQTa7IE5DXd9YUAEOILstPNx84n8ANIoEhTOddY1BGuyjJ0vxumW1LjhwkKPBgdvCmn5i2_Cua9ATW8Wl0GgOjTqGZE8PSFKoOTSvSpm-YYKtCii-RMLWLEQPiyf313bqplVgJ7ATNCXN3OAbubATq18diVHRDZOseg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a7e0f390-4834-4497-af3e-a5ffbec06e1f',
  'client-request-id': 'cbb184a5-67aa-438c-abd5-0921dfa809c8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_337',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:01:09 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810871\",\"not_before\":\"1459806971\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2OTcxLCJuYmYiOjE0NTk4MDY5NzEsImV4cCI6MTQ1OTgxMDg3MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.DmC_HrHObmAkTYJ8Dvc393DzlHqVeZRpxXsH-kTfRBitq4PgP5b0lzazJoaQMGmchj5h2Ww_ZIExJd3PWXtOCA6o_CoHDIovdmgicvdb_0CvhAELWBjSlUJQMbldfSworobKwqQMJVozGVUHorPjKT2IutdDe_8B-aD9Aplj57OAOIeJ0BaRQTa7IE5DXd9YUAEOILstPNx84n8ANIoEhTOddY1BGuyjJ0vxumW1LjhwkKPBgdvCmn5i2_Cua9ATW8Wl0GgOjTqGZE8PSFKoOTSvSpm-YYKtCii-RMLWLEQPiyf313bqplVgJ7ATNCXN3OAbubATq18diVHRDZOseg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'a7e0f390-4834-4497-af3e-a5ffbec06e1f',
  'client-request-id': 'cbb184a5-67aa-438c-abd5-0921dfa809c8',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_337',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:01:09 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/stop?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4247.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/operationresults/ade5fd98-f71a-447f-bbf5-625ede4c5f0e/profileresults/cdnTestProfile829/endpointresults/cdnTestEndpoint4247?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '343f4ed4-f716-444b-9960-7f554ac3f7ac',
  'x-ms-client-request-id': 'b7fa58a8-5f97-4394-b0f6-60b7f536bb75',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/operationresults/ade5fd98-f71a-447f-bbf5-625ede4c5f0e?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ce5d3b33-bcc9-4b44-aedb-74697107c7b4',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220112Z:ce5d3b33-bcc9-4b44-aedb-74697107c7b4',
  date: 'Mon, 04 Apr 2016 22:01:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/stop?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"cdnTestEndpoint4247.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '469',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/operationresults/ade5fd98-f71a-447f-bbf5-625ede4c5f0e/profileresults/cdnTestProfile829/endpointresults/cdnTestEndpoint4247?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '343f4ed4-f716-444b-9960-7f554ac3f7ac',
  'x-ms-client-request-id': 'b7fa58a8-5f97-4394-b0f6-60b7f536bb75',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/operationresults/ade5fd98-f71a-447f-bbf5-625ede4c5f0e?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ce5d3b33-bcc9-4b44-aedb-74697107c7b4',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220112Z:ce5d3b33-bcc9-4b44-aedb-74697107c7b4',
  date: 'Mon, 04 Apr 2016 22:01:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810902\",\"not_before\":\"1459807002\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MDAyLCJuYmYiOjE0NTk4MDcwMDIsImV4cCI6MTQ1OTgxMDkwMiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.MUFbqLYgwz-bsTQ_g_9YpPQFfz-72wL4ZVOtbKwoi38hxYYBXglYqxmaH2sXSZ_UlLD3i069f4d3PhaTdB6e8bFk8v3yzTTcG6WUw9L5H2TD9Uv6yNXppEKRu7UnTH_WqelhXcugBmfXckpGi2d9KsWh7LAulhSRtzeAfnca-qw7VaCYlb0ng-r23nooPlAtfIF0FX6ykA8shP9EFevdBBbhvTOQOUsvHmuXCHNtiHcHkUfmSa7UIdQ__GqaZ6og0E0cUhN85W9UePDsVgxYrM83JBRT3oWQa9mTcSJikeZ0Atvr3LrOz_hP3VVR8yoI7RFH3TFT7AX0gSh-sbbM7Q\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'caf1af20-c1a5-4578-9d10-06ebd1c1fe8b',
  'client-request-id': '918d935d-b6ba-4088-a9bc-a3c44f2996d5',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_125',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:01:42 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810902\",\"not_before\":\"1459807002\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MDAyLCJuYmYiOjE0NTk4MDcwMDIsImV4cCI6MTQ1OTgxMDkwMiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.MUFbqLYgwz-bsTQ_g_9YpPQFfz-72wL4ZVOtbKwoi38hxYYBXglYqxmaH2sXSZ_UlLD3i069f4d3PhaTdB6e8bFk8v3yzTTcG6WUw9L5H2TD9Uv6yNXppEKRu7UnTH_WqelhXcugBmfXckpGi2d9KsWh7LAulhSRtzeAfnca-qw7VaCYlb0ng-r23nooPlAtfIF0FX6ykA8shP9EFevdBBbhvTOQOUsvHmuXCHNtiHcHkUfmSa7UIdQ__GqaZ6og0E0cUhN85W9UePDsVgxYrM83JBRT3oWQa9mTcSJikeZ0Atvr3LrOz_hP3VVR8yoI7RFH3TFT7AX0gSh-sbbM7Q\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'caf1af20-c1a5-4578-9d10-06ebd1c1fe8b',
  'client-request-id': '918d935d-b6ba-4088-a9bc-a3c44f2996d5',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_125',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:01:42 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/operationresults/ade5fd98-f71a-447f-bbf5-625ede4c5f0e?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd988033b-c5d2-428c-aff7-044a8fedeaba',
  'x-ms-client-request-id': '75b9483a-78de-4235-8921-e84d110b406a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '469f0568-9b13-4f95-a234-4fd2dc785f69',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220143Z:469f0568-9b13-4f95-a234-4fd2dc785f69',
  date: 'Mon, 04 Apr 2016 22:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/operationresults/ade5fd98-f71a-447f-bbf5-625ede4c5f0e?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd988033b-c5d2-428c-aff7-044a8fedeaba',
  'x-ms-client-request-id': '75b9483a-78de-4235-8921-e84d110b406a',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '469f0568-9b13-4f95-a234-4fd2dc785f69',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220143Z:469f0568-9b13-4f95-a234-4fd2dc785f69',
  date: 'Mon, 04 Apr 2016 22:01:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810904\",\"not_before\":\"1459807004\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MDA0LCJuYmYiOjE0NTk4MDcwMDQsImV4cCI6MTQ1OTgxMDkwNCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.ZEnis1XH0yQ7l72Yr8V6Y98aiCtd6C_qI28Re3eejNHYcYYHy44AEro8Lyvwui1T40zUa0nA_uCBP_7ec2iXUgyAdB9gnkd_qRHR5u9izrTM34FPvqZhf-8qx5ZOd7JVdtBI05KwqLmRoAu94Ajnn0eGJgjB7t87pFSvrkxMSu8JT2MoYIK6nXs3OY2JyOR56YB5HF3lEKw3Idvyos0bypm-3tjuozFaBLtzDlUs1VsiHlbAXknX5bUlQndEF3UZVgvf1JLKzzPCvbIEMoQWESYy0JP8t4hbzn07_csGXbQ-DblRii2eg6WLmu0bkb8Qtot0-jVnM_0mzTSi11L1OA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e2d7790e-77d1-4caf-90d4-f61cb23bc571',
  'client-request-id': '24e822e9-4578-45e7-afc8-d7d3cd2317a4',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_295',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:01:43 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810904\",\"not_before\":\"1459807004\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MDA0LCJuYmYiOjE0NTk4MDcwMDQsImV4cCI6MTQ1OTgxMDkwNCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.ZEnis1XH0yQ7l72Yr8V6Y98aiCtd6C_qI28Re3eejNHYcYYHy44AEro8Lyvwui1T40zUa0nA_uCBP_7ec2iXUgyAdB9gnkd_qRHR5u9izrTM34FPvqZhf-8qx5ZOd7JVdtBI05KwqLmRoAu94Ajnn0eGJgjB7t87pFSvrkxMSu8JT2MoYIK6nXs3OY2JyOR56YB5HF3lEKw3Idvyos0bypm-3tjuozFaBLtzDlUs1VsiHlbAXknX5bUlQndEF3UZVgvf1JLKzzPCvbIEMoQWESYy0JP8t4hbzn07_csGXbQ-DblRii2eg6WLmu0bkb8Qtot0-jVnM_0mzTSi11L1OA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e2d7790e-77d1-4caf-90d4-f61cb23bc571',
  'client-request-id': '24e822e9-4578-45e7-afc8-d7d3cd2317a4',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_295',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:01:43 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/newname?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '411',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'c9c0e2ae-cf43-4463-bfc2-e7fab39e5cb9',
  'x-ms-client-request-id': '8445eeef-1080-4c04-8795-a3cca0638658',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '970755b9-f4f4-4ba4-a6d8-54f6b6312a94',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220145Z:970755b9-f4f4-4ba4-a6d8-54f6b6312a94',
  date: 'Mon, 04 Apr 2016 22:01:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/newname?api-version=2015-06-01', '*')
  .reply(200, "{\r\n  \"name\":\"newname\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/newname\",\"type\":\"Microsoft.Cdn/profiles/endpoints/origins\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"valid.helloworld.com\",\"httpPort\":9874,\"httpsPort\":9090\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '411',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'c9c0e2ae-cf43-4463-bfc2-e7fab39e5cb9',
  'x-ms-client-request-id': '8445eeef-1080-4c04-8795-a3cca0638658',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '970755b9-f4f4-4ba4-a6d8-54f6b6312a94',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220145Z:970755b9-f4f4-4ba4-a6d8-54f6b6312a94',
  date: 'Mon, 04 Apr 2016 22:01:44 GMT',
  connection: 'close' });
 return result; }]];
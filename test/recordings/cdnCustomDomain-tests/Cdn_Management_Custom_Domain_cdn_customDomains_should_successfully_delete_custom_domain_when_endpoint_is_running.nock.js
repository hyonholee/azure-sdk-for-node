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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459811225\",\"not_before\":\"1459807325\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzI1LCJuYmYiOjE0NTk4MDczMjUsImV4cCI6MTQ1OTgxMTIyNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.uirSNSDSihyFsNW9azv3Qtea37ZDVSOsudPsRfDt1bwNX9qVzORfBTjAR1KCvZp__j2fHiwGppFufm052Dqs7jRdqzx8XXxOraaCQT5eH7xmXBHsC0l_1VgT7NcX1k9LOKQwcilEQm2oP5XsBZPhZDKlJRxY6vLBKtkDQ1td1iN6py3LCm61QPOvvb52r5aRdO9c_jfNKLXQtD--LnirmSOzB9Ywl0uMiHlS0_QV7uttFk-mR_l4WSngNsJI22baknrfyP0f36mKiR0T6PTLQ7kQMqT5pqdUuwiDPEOqqY83lFjdJUEYD3mGBJYbMvUmgCskxBXJgdZNbmJngDOjmg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7772be21-bbc3-4c1b-9680-209d52c7bd1f',
  'client-request-id': '31239ba0-fc56-4c8d-a66f-0cbf69806286',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_362',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:07:05 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459811225\",\"not_before\":\"1459807325\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzI1LCJuYmYiOjE0NTk4MDczMjUsImV4cCI6MTQ1OTgxMTIyNSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.uirSNSDSihyFsNW9azv3Qtea37ZDVSOsudPsRfDt1bwNX9qVzORfBTjAR1KCvZp__j2fHiwGppFufm052Dqs7jRdqzx8XXxOraaCQT5eH7xmXBHsC0l_1VgT7NcX1k9LOKQwcilEQm2oP5XsBZPhZDKlJRxY6vLBKtkDQ1td1iN6py3LCm61QPOvvb52r5aRdO9c_jfNKLXQtD--LnirmSOzB9Ywl0uMiHlS0_QV7uttFk-mR_l4WSngNsJI22baknrfyP0f36mKiR0T6PTLQ7kQMqT5pqdUuwiDPEOqqY83lFjdJUEYD3mGBJYbMvUmgCskxBXJgdZNbmJngDOjmg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7772be21-bbc3-4c1b-9680-209d52c7bd1f',
  'client-request-id': '31239ba0-fc56-4c8d-a66f-0cbf69806286',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_362',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:07:05 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5028/providers/Microsoft.Cdn/profiles/cdnTestProfile2317/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/start?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '500',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/a866542e-59ea-4691-a0d9-c2a55411f1e9/profileresults/cdnTestProfile2317/endpointresults/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'a2bb3fbc-ef17-477b-9354-6627cf96eb88',
  'x-ms-client-request-id': 'a2763400-8a30-4fcf-8ae2-304d6a87c05a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/a866542e-59ea-4691-a0d9-c2a55411f1e9?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '14a4078f-216a-45ae-931e-0ddaedd6daf0',
  'x-ms-routing-request-id': 'WESTUS:20160404T220707Z:14a4078f-216a-45ae-931e-0ddaedd6daf0',
  date: 'Mon, 04 Apr 2016 22:07:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5028/providers/Microsoft.Cdn/profiles/cdnTestProfile2317/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/start?api-version=2015-06-01')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Starting\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '500',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/a866542e-59ea-4691-a0d9-c2a55411f1e9/profileresults/cdnTestProfile2317/endpointresults/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': 'a2bb3fbc-ef17-477b-9354-6627cf96eb88',
  'x-ms-client-request-id': 'a2763400-8a30-4fcf-8ae2-304d6a87c05a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/a866542e-59ea-4691-a0d9-c2a55411f1e9?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '14a4078f-216a-45ae-931e-0ddaedd6daf0',
  'x-ms-routing-request-id': 'WESTUS:20160404T220707Z:14a4078f-216a-45ae-931e-0ddaedd6daf0',
  date: 'Mon, 04 Apr 2016 22:07:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459811258\",\"not_before\":\"1459807358\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzU4LCJuYmYiOjE0NTk4MDczNTgsImV4cCI6MTQ1OTgxMTI1OCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.mgXZ_D-d3gXaLhBtnrE9NuhxmYegls6JvBCGNyiMVcSC15m-nJORETBSRooEx7uXkZChE5YaPlYg9K6JfYtCFWEsrF0UVQmujIIXNCA0E-bmTD64iCoam5SEgnwLJ7vnCRTATI5wiHLDNTfVuexDBQOczIaAjFHl05tLFpxNj2VcXPg_99ZAoxRylU5jusNsuOgReZ_kEZt1tAgjwCkN9uVCG0HVtOPKzCM4GpfdsCEpq7gxcEvt4TSl-_YXHps2bAR6H3Hx9b1Sh2PchSi2xx1xuhK3OuE_RDPAIn3gJLkj5Fn4hLAsdONCzE2fu9z2v5EzKLtCFQ1_3h54iiDshA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7a8d05d7-b184-4fdc-a881-44c348056cb7',
  'client-request-id': 'a436622e-9589-40f0-940a-52a7cb4140c0',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_55',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:07:37 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459811258\",\"not_before\":\"1459807358\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzU4LCJuYmYiOjE0NTk4MDczNTgsImV4cCI6MTQ1OTgxMTI1OCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.mgXZ_D-d3gXaLhBtnrE9NuhxmYegls6JvBCGNyiMVcSC15m-nJORETBSRooEx7uXkZChE5YaPlYg9K6JfYtCFWEsrF0UVQmujIIXNCA0E-bmTD64iCoam5SEgnwLJ7vnCRTATI5wiHLDNTfVuexDBQOczIaAjFHl05tLFpxNj2VcXPg_99ZAoxRylU5jusNsuOgReZ_kEZt1tAgjwCkN9uVCG0HVtOPKzCM4GpfdsCEpq7gxcEvt4TSl-_YXHps2bAR6H3Hx9b1Sh2PchSi2xx1xuhK3OuE_RDPAIn3gJLkj5Fn4hLAsdONCzE2fu9z2v5EzKLtCFQ1_3h54iiDshA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '7a8d05d7-b184-4fdc-a881-44c348056cb7',
  'client-request-id': 'a436622e-9589-40f0-940a-52a7cb4140c0',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_55',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:07:37 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/a866542e-59ea-4691-a0d9-c2a55411f1e9?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '7df172fe-4ccb-48fd-941f-d7222a18cddf',
  'x-ms-client-request-id': 'e351bd7f-4ce3-48a5-87d7-28ee0be2a232',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'c25aa2e6-e0e2-4b64-90da-cb59ab160e26',
  'x-ms-routing-request-id': 'WESTUS:20160404T220739Z:c25aa2e6-e0e2-4b64-90da-cb59ab160e26',
  date: 'Mon, 04 Apr 2016 22:07:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/a866542e-59ea-4691-a0d9-c2a55411f1e9?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '7df172fe-4ccb-48fd-941f-d7222a18cddf',
  'x-ms-client-request-id': 'e351bd7f-4ce3-48a5-87d7-28ee0be2a232',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'c25aa2e6-e0e2-4b64-90da-cb59ab160e26',
  'x-ms-routing-request-id': 'WESTUS:20160404T220739Z:c25aa2e6-e0e2-4b64-90da-cb59ab160e26',
  date: 'Mon, 04 Apr 2016 22:07:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459811259\",\"not_before\":\"1459807359\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzU5LCJuYmYiOjE0NTk4MDczNTksImV4cCI6MTQ1OTgxMTI1OSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.Xz-xVDCsY3o9DiuaVK1IoYGAwn7RlS-yfgWl2aHuf904tOIRY_oViVb0Hln7OX86YzHaK2sGxAlluvGb9Fo8fe_hjl3itRdmyXeQhIVFcEGq1BrDwayCYnYWw6BemlH1BZWW08qeyt366hQKPnRI4G1gjLnuJ0Ic2Jo3SiX6370h7Ct3IW_XW7Q327OprvdCciw0yf9BgslPD-fMwhfwnzNGKvEQ8EsKj3Fr6UR3SD69PNaqd5R-_q8KMRUElFRfkSoGhCCZpX6BcbtIbc_NfoOfIaDogEglr21V1eluJCpiSxnC8DAKF_89UFLclqjA2JtrMB5yfkDWmgxlRk78ug\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '028122e5-0f7b-41c0-9686-49ccf90be695',
  'client-request-id': '38ad00cf-4bdc-402d-9b8d-1d39221c5992',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_104',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:07:39 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459811259\",\"not_before\":\"1459807359\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzU5LCJuYmYiOjE0NTk4MDczNTksImV4cCI6MTQ1OTgxMTI1OSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.Xz-xVDCsY3o9DiuaVK1IoYGAwn7RlS-yfgWl2aHuf904tOIRY_oViVb0Hln7OX86YzHaK2sGxAlluvGb9Fo8fe_hjl3itRdmyXeQhIVFcEGq1BrDwayCYnYWw6BemlH1BZWW08qeyt366hQKPnRI4G1gjLnuJ0Ic2Jo3SiX6370h7Ct3IW_XW7Q327OprvdCciw0yf9BgslPD-fMwhfwnzNGKvEQ8EsKj3Fr6UR3SD69PNaqd5R-_q8KMRUElFRfkSoGhCCZpX6BcbtIbc_NfoOfIaDogEglr21V1eluJCpiSxnC8DAKF_89UFLclqjA2JtrMB5yfkDWmgxlRk78ug\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '028122e5-0f7b-41c0-9686-49ccf90be695',
  'client-request-id': '38ad00cf-4bdc-402d-9b8d-1d39221c5992',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_104',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:07:39 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5028/providers/Microsoft.Cdn/profiles/cdnTestProfile2317/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain1498?api-version=2015-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/2a1b7ef3-3fd2-4c9d-9e3f-ae44b0547abe/profileresults/cdnTestProfile2317/endpointresults/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomainresults/cdnTestCustomDomain1498?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '2aa25dd4-bfb3-4498-8734-7a671cd6fc8d',
  'x-ms-client-request-id': 'a8ca73d9-82db-4c4f-9365-38f3c270e87a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/2a1b7ef3-3fd2-4c9d-9e3f-ae44b0547abe?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '263b9bbe-3ec1-45b9-b107-cc37115a7caf',
  'x-ms-routing-request-id': 'WESTUS:20160404T220741Z:263b9bbe-3ec1-45b9-b107-cc37115a7caf',
  date: 'Mon, 04 Apr 2016 22:07:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5028/providers/Microsoft.Cdn/profiles/cdnTestProfile2317/endpoints/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customDomains/cdnTestCustomDomain1498?api-version=2015-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/2a1b7ef3-3fd2-4c9d-9e3f-ae44b0547abe/profileresults/cdnTestProfile2317/endpointresults/testEndpoint-1a5f6171-364f-49c5-9e09-27d07dac882b/customdomainresults/cdnTestCustomDomain1498?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '2aa25dd4-bfb3-4498-8734-7a671cd6fc8d',
  'x-ms-client-request-id': 'a8ca73d9-82db-4c4f-9365-38f3c270e87a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/2a1b7ef3-3fd2-4c9d-9e3f-ae44b0547abe?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '263b9bbe-3ec1-45b9-b107-cc37115a7caf',
  'x-ms-routing-request-id': 'WESTUS:20160404T220741Z:263b9bbe-3ec1-45b9-b107-cc37115a7caf',
  date: 'Mon, 04 Apr 2016 22:07:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459811291\",\"not_before\":\"1459807391\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzkxLCJuYmYiOjE0NTk4MDczOTEsImV4cCI6MTQ1OTgxMTI5MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.B4Essew6OYhDpn_G07UalqkowwgJiWVJJhT0QYu47LxuLXnZ_yc4ch1rHNxdmxmZdA9gmK53rndtadompZKz2Wq1r9956gTJGPmuEJxInDNUZrdQtXPAKFySZkzVfHB92wVo7tWL_oB0za6Yyja-znshgyS2TlDank1WMMzCpS8l18kdrxJrq5HSlvGsFT3LCh9IwiGFc__ocXPGsr5YLgVy77Ujplqerb22iSOeu4slN8zcAN1106EIamwGnSGYtiDAqkeF6nyhbiXV_TZyU53kVbDgJc6OI6yJ6gie2ZZBE_62kWkMYNhMpbo6jyjKXlvB8R8J5pC6dCj1q7fRFA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '1c2179a7-cf5d-4995-9ac3-7996e1954f8b',
  'client-request-id': 'd0d56672-6c46-4df5-8b1f-9480e6e670ff',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_29',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:08:12 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459811291\",\"not_before\":\"1459807391\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA3MzkxLCJuYmYiOjE0NTk4MDczOTEsImV4cCI6MTQ1OTgxMTI5MSwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.B4Essew6OYhDpn_G07UalqkowwgJiWVJJhT0QYu47LxuLXnZ_yc4ch1rHNxdmxmZdA9gmK53rndtadompZKz2Wq1r9956gTJGPmuEJxInDNUZrdQtXPAKFySZkzVfHB92wVo7tWL_oB0za6Yyja-znshgyS2TlDank1WMMzCpS8l18kdrxJrq5HSlvGsFT3LCh9IwiGFc__ocXPGsr5YLgVy77Ujplqerb22iSOeu4slN8zcAN1106EIamwGnSGYtiDAqkeF6nyhbiXV_TZyU53kVbDgJc6OI6yJ6gie2ZZBE_62kWkMYNhMpbo6jyjKXlvB8R8J5pC6dCj1q7fRFA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '1c2179a7-cf5d-4995-9ac3-7996e1954f8b',
  'client-request-id': 'd0d56672-6c46-4df5-8b1f-9480e6e670ff',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_29',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:08:12 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/2a1b7ef3-3fd2-4c9d-9e3f-ae44b0547abe?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'fd94b007-099c-4a32-94c4-87024d2ec83f',
  'x-ms-client-request-id': '150f3f9b-4ac2-49ba-9233-37963540e2c8',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'cd3c3746-7642-4ecb-a251-c63c058ea861',
  'x-ms-routing-request-id': 'WESTUS:20160404T220812Z:cd3c3746-7642-4ecb-a251-c63c058ea861',
  date: 'Mon, 04 Apr 2016 22:08:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup5028/providers/Microsoft.Cdn/operationresults/2a1b7ef3-3fd2-4c9d-9e3f-ae44b0547abe?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'fd94b007-099c-4a32-94c4-87024d2ec83f',
  'x-ms-client-request-id': '150f3f9b-4ac2-49ba-9233-37963540e2c8',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'cd3c3746-7642-4ecb-a251-c63c058ea861',
  'x-ms-routing-request-id': 'WESTUS:20160404T220812Z:cd3c3746-7642-4ecb-a251-c63c058ea861',
  date: 'Mon, 04 Apr 2016 22:08:12 GMT',
  connection: 'close' });
 return result; }]];
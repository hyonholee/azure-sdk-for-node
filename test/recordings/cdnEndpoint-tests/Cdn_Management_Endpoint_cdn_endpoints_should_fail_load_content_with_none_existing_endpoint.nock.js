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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459810548\",\"not_before\":\"1459806648\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2NjQ4LCJuYmYiOjE0NTk4MDY2NDgsImV4cCI6MTQ1OTgxMDU0OCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.nxlXkmXskfc2_ZQ9VAV_d9QP6fv-hOHkiycp9JZSXu2wPCxY8yiS7iHpOh5TTpXvMcZntgBrmL4Cl9WgMs6LuChph7Vgq7574LPtfNvN_8qDqjSJixTAx7hRDWgGK57V0PqzGycPCBpAscJZHIIkOZPvtAIA3zmziPojCoR6GXPZ8K9c6_QTUUJOXrJMM_e_tkiL61nW3WuRABTmkjleN6jONyNi4uxYtM5UcEIGMcs-A7zLGOQMpQhTBj_07LE_s-jSCjlu_LwRHEIL_ecb18aL9vLbNQXCYyKKUl5nuo7NlZFTJaIVSynLgZfFxQ2SPd0AcmD3zrZBYsEQhFo3Gw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'b5b7e4ff-ee3c-48a0-af15-89e6459af6ec',
  'client-request-id': 'ba2a1e21-e19e-4d67-8d4e-6a7cdbb51493',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_235',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:55:49 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3600\",\"expires_on\":\"1459810548\",\"not_before\":\"1459806648\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2NjQ4LCJuYmYiOjE0NTk4MDY2NDgsImV4cCI6MTQ1OTgxMDU0OCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.nxlXkmXskfc2_ZQ9VAV_d9QP6fv-hOHkiycp9JZSXu2wPCxY8yiS7iHpOh5TTpXvMcZntgBrmL4Cl9WgMs6LuChph7Vgq7574LPtfNvN_8qDqjSJixTAx7hRDWgGK57V0PqzGycPCBpAscJZHIIkOZPvtAIA3zmziPojCoR6GXPZ8K9c6_QTUUJOXrJMM_e_tkiL61nW3WuRABTmkjleN6jONyNi4uxYtM5UcEIGMcs-A7zLGOQMpQhTBj_07LE_s-jSCjlu_LwRHEIL_ecb18aL9vLbNQXCYyKKUl5nuo7NlZFTJaIVSynLgZfFxQ2SPd0AcmD3zrZBYsEQhFo3Gw\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'b5b7e4ff-ee3c-48a0-af15-89e6459af6ec',
  'client-request-id': 'ba2a1e21-e19e-4d67-8d4e-6a7cdbb51493',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_235',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:55:49 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6523/providers/Microsoft.Cdn/profiles/cdnTestProfile9804/endpoints/someFakeEndpoint/load?api-version=2015-06-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile9804/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup6523' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '79bf8b30-b2cd-45b8-b8f1-76a73c1c62fd',
  'x-ms-correlation-request-id': '79bf8b30-b2cd-45b8-b8f1-76a73c1c62fd',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T215550Z:79bf8b30-b2cd-45b8-b8f1-76a73c1c62fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 04 Apr 2016 21:55:50 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6523/providers/Microsoft.Cdn/profiles/cdnTestProfile9804/endpoints/someFakeEndpoint/load?api-version=2015-06-01', '*')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Cdn/profiles/cdnTestProfile9804/endpoints/someFakeEndpoint' under resource group 'cdnTestGroup6523' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '79bf8b30-b2cd-45b8-b8f1-76a73c1c62fd',
  'x-ms-correlation-request-id': '79bf8b30-b2cd-45b8-b8f1-76a73c1c62fd',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T215550Z:79bf8b30-b2cd-45b8-b8f1-76a73c1c62fd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 04 Apr 2016 21:55:50 GMT',
  connection: 'close',
  'content-length': '188' });
 return result; }]];
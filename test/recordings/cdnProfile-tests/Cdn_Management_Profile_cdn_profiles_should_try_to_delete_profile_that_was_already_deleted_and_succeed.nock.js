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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459809952\",\"not_before\":\"1459806052\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2MDUyLCJuYmYiOjE0NTk4MDYwNTIsImV4cCI6MTQ1OTgwOTk1MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.X7da87kcDI0_SxNxgFbxX2P0m_F9QH_CCC3DGFQkhDGgqEt0KfVq9TJplTMgkXxo-1bDknUCWj9hSYMV0zxTR3LaaA1uklXQK1HuGOWHbN76yPh_oGzxFASoK8KQWEkJPLfTPvI68-3CMeAbsMoGQ8i_Y-hgug3j1qZfa6ioQ7XikmlUx6Cik2iEQXx-2UC1F59LpCAk6S7VKeHkYVBgAfvAVIrF9pzs9NgU4xgfOIvXOj5dZyXRrtEFTOwhv824XIwO3e0WvR643haRVHPvmu06c82-GQhiZEmlzWS7-OvchFrsicVP6cgCkQcT1OVjVoqvFrDlvgYZxwS9QSCx-Q\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e957c1ef-10cd-42e0-9ab1-01682955a394',
  'client-request-id': 'e152565d-5c98-42b2-8214-39290e948aab',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_180',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:45:51 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459809952\",\"not_before\":\"1459806052\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2MDUyLCJuYmYiOjE0NTk4MDYwNTIsImV4cCI6MTQ1OTgwOTk1MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.X7da87kcDI0_SxNxgFbxX2P0m_F9QH_CCC3DGFQkhDGgqEt0KfVq9TJplTMgkXxo-1bDknUCWj9hSYMV0zxTR3LaaA1uklXQK1HuGOWHbN76yPh_oGzxFASoK8KQWEkJPLfTPvI68-3CMeAbsMoGQ8i_Y-hgug3j1qZfa6ioQ7XikmlUx6Cik2iEQXx-2UC1F59LpCAk6S7VKeHkYVBgAfvAVIrF9pzs9NgU4xgfOIvXOj5dZyXRrtEFTOwhv824XIwO3e0WvR643haRVHPvmu06c82-GQhiZEmlzWS7-OvchFrsicVP6cgCkQcT1OVjVoqvFrDlvgYZxwS9QSCx-Q\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e957c1ef-10cd-42e0-9ab1-01682955a394',
  'client-request-id': 'e152565d-5c98-42b2-8214-39290e948aab',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_180',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:45:51 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup1044/providers/Microsoft.Cdn/profiles/cdnTestProfile3477?api-version=2015-06-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '19c885f7-0ffa-4288-9b76-4fe2047ec4b7',
  'x-ms-correlation-request-id': '19c885f7-0ffa-4288-9b76-4fe2047ec4b7',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T214552Z:19c885f7-0ffa-4288-9b76-4fe2047ec4b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 04 Apr 2016 21:45:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup1044/providers/Microsoft.Cdn/profiles/cdnTestProfile3477?api-version=2015-06-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '19c885f7-0ffa-4288-9b76-4fe2047ec4b7',
  'x-ms-correlation-request-id': '19c885f7-0ffa-4288-9b76-4fe2047ec4b7',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T214552Z:19c885f7-0ffa-4288-9b76-4fe2047ec4b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 04 Apr 2016 21:45:52 GMT',
  connection: 'close' });
 return result; }]];
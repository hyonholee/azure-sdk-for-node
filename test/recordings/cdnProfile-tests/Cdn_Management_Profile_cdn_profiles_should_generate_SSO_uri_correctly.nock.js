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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459809842\",\"not_before\":\"1459805942\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA1OTQyLCJuYmYiOjE0NTk4MDU5NDIsImV4cCI6MTQ1OTgwOTg0MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.rfq8jZfKeRyEUAQGVS29A50ojALn5lL_hYmTXyixJdI3hiDA-yzkuvrgi2Y_CwdcZ--x1iHv_DbAabOuTVuz3ABuqsQR_rBpV_76KItdjLQeTQzJlApZbgV283JRPTbm2elkO7pnJ-z_RGU-K9hfebQf0fi2Qbiie_gpnaq0fHM8sQXv9bbc8ekgvkyPII41PFNINVjSlkUgXygXUCXLqdnxm0RFgyVfB4GBv98MRJrHscBENFqj2tjheBwyfU4mLPFqe_0frTRAjIW01fyKVG9yZBpRSW6GKEHpDMj9mLLpt2nU58aZGSCAsKxClUJPlvRJ7Yf7seISz8e__M8GeA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '98c63a62-3df8-4eb4-91f1-7620fff10d1e',
  'client-request-id': '1984327c-a348-44fb-b1df-f5d0c55d2cc4',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_56',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:44:01 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459809842\",\"not_before\":\"1459805942\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA1OTQyLCJuYmYiOjE0NTk4MDU5NDIsImV4cCI6MTQ1OTgwOTg0MiwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.rfq8jZfKeRyEUAQGVS29A50ojALn5lL_hYmTXyixJdI3hiDA-yzkuvrgi2Y_CwdcZ--x1iHv_DbAabOuTVuz3ABuqsQR_rBpV_76KItdjLQeTQzJlApZbgV283JRPTbm2elkO7pnJ-z_RGU-K9hfebQf0fi2Qbiie_gpnaq0fHM8sQXv9bbc8ekgvkyPII41PFNINVjSlkUgXygXUCXLqdnxm0RFgyVfB4GBv98MRJrHscBENFqj2tjheBwyfU4mLPFqe_0frTRAjIW01fyKVG9yZBpRSW6GKEHpDMj9mLLpt2nU58aZGSCAsKxClUJPlvRJ7Yf7seISz8e__M8GeA\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '98c63a62-3df8-4eb4-91f1-7620fff10d1e',
  'client-request-id': '1984327c-a348-44fb-b1df-f5d0c55d2cc4',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_56',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:44:01 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup1044/providers/Microsoft.Cdn/profiles/cdnTestProfile3477/generateSsoUri?api-version=2015-06-01')
  .reply(200, "{\r\n  \"ssoUriValue\":\"https://cdn.windowsazure.com/account/loginexternal/?token=z8mG8rMduhqoDGb2bg9HeZ6zDKWP6xjFXdbiRmWlv%2fM%3d&timestamp=2016-04-04T21:44:03.0852763Z&cdnAccountId=2DEA9&userCustomId=SSO-346b0f23-9139-4ff1-b38f-52c0992f3f83&restEndpointId=0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '259',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '1c8b7c4a-bd56-4451-8715-743d23e15bb0',
  'x-ms-client-request-id': 'f688b138-0edf-47ca-a6ee-949d1562c7cf',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '32acafe2-759d-4aa3-b777-0f941545148b',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T214403Z:32acafe2-759d-4aa3-b777-0f941545148b',
  date: 'Mon, 04 Apr 2016 21:44:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup1044/providers/Microsoft.Cdn/profiles/cdnTestProfile3477/generateSsoUri?api-version=2015-06-01')
  .reply(200, "{\r\n  \"ssoUriValue\":\"https://cdn.windowsazure.com/account/loginexternal/?token=z8mG8rMduhqoDGb2bg9HeZ6zDKWP6xjFXdbiRmWlv%2fM%3d&timestamp=2016-04-04T21:44:03.0852763Z&cdnAccountId=2DEA9&userCustomId=SSO-346b0f23-9139-4ff1-b38f-52c0992f3f83&restEndpointId=0\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '259',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': '1c8b7c4a-bd56-4451-8715-743d23e15bb0',
  'x-ms-client-request-id': 'f688b138-0edf-47ca-a6ee-949d1562c7cf',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '32acafe2-759d-4aa3-b777-0f941545148b',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T214403Z:32acafe2-759d-4aa3-b777-0f941545148b',
  date: 'Mon, 04 Apr 2016 21:44:02 GMT',
  connection: 'close' });
 return result; }]];
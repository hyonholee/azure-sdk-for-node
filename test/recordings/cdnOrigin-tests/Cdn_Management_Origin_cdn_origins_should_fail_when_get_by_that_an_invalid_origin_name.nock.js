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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810828\",\"not_before\":\"1459806928\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2OTI4LCJuYmYiOjE0NTk4MDY5MjgsImV4cCI6MTQ1OTgxMDgyOCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.cSXh8cG7kzlJ11hTeCa0X463jbZqO1SEyNGAaVKLq_G0udAzNEQkfapJrxmHLYpT4iXtZf9bZQCcIA_WPWwLfchE5DK9T348uAieTQVViGoJyVMn6z0MKlUOWFi7FuQ0CJfQTU_saAcjX_G3NQRmur3TBb8X6xVrRiMRTbEu7nPvDVJ4dfGaQM04Y5UCRHFuvUws64fwF5ZwymNqu2-woE-jegr4qM2sZ9AybP9RsQVDPX0izxsIn8F8Ny6u2qnXl5GbJJCrrmBkSrBq7JdQCtdeZI00MLPG5ocEIfvr-PjKywYvsQC8Ew_Q37m1Bbkg6XUMtDLeARdpfMGOn0GFEg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '01dcf562-e1ae-4206-80f8-f72f858cc951',
  'client-request-id': '0ec17837-7254-4ded-bd0b-0d97e1523c9f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_311',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:00:28 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810828\",\"not_before\":\"1459806928\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2OTI4LCJuYmYiOjE0NTk4MDY5MjgsImV4cCI6MTQ1OTgxMDgyOCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.cSXh8cG7kzlJ11hTeCa0X463jbZqO1SEyNGAaVKLq_G0udAzNEQkfapJrxmHLYpT4iXtZf9bZQCcIA_WPWwLfchE5DK9T348uAieTQVViGoJyVMn6z0MKlUOWFi7FuQ0CJfQTU_saAcjX_G3NQRmur3TBb8X6xVrRiMRTbEu7nPvDVJ4dfGaQM04Y5UCRHFuvUws64fwF5ZwymNqu2-woE-jegr4qM2sZ9AybP9RsQVDPX0izxsIn8F8Ny6u2qnXl5GbJJCrrmBkSrBq7JdQCtdeZI00MLPG5ocEIfvr-PjKywYvsQC8Ew_Q37m1Bbkg6XUMtDLeARdpfMGOn0GFEg\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '01dcf562-e1ae-4206-80f8-f72f858cc951',
  'client-request-id': '0ec17837-7254-4ded-bd0b-0d97e1523c9f',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_311',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 22:00:28 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/fakeOriginName?api-version=2015-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'e53e4e6d-8dd8-447f-bb81-b2d53fe86cf0',
  'x-ms-client-request-id': 'e9c94172-f1a8-4829-9ec7-6c13d059cb20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c89f86ae-0919-433f-9c34-be15afa10d19',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220029Z:c89f86ae-0919-433f-9c34-be15afa10d19',
  date: 'Mon, 04 Apr 2016 22:00:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6160/providers/Microsoft.Cdn/profiles/cdnTestProfile829/endpoints/cdnTestEndpoint4247/origins/fakeOriginName?api-version=2015-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': 'e53e4e6d-8dd8-447f-bb81-b2d53fe86cf0',
  'x-ms-client-request-id': 'e9c94172-f1a8-4829-9ec7-6c13d059cb20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c89f86ae-0919-433f-9c34-be15afa10d19',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T220029Z:c89f86ae-0919-433f-9c34-be15afa10d19',
  date: 'Mon, 04 Apr 2016 22:00:29 GMT',
  connection: 'close' });
 return result; }]];
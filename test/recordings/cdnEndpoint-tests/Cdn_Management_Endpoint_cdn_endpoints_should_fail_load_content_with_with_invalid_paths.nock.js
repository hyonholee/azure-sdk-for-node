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
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810550\",\"not_before\":\"1459806650\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2NjUwLCJuYmYiOjE0NTk4MDY2NTAsImV4cCI6MTQ1OTgxMDU1MCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.gsesFY7nph6OXcbNiSUH7mtFHGMkM9nj-G-8HgZZjdERtvNBtqczy9DdF2wq6lpCI_JKrN6-bHUCx6-V3A2P-CgAMHm1m7PRstpLkqsFhLWT0L4PEQB83w1o8pL708yX9gbqizFAHLFsdTGF0nehdWH9ayCz9ywTcMJLfwV85DohVOmPVp_AMQv0XY3FikrGN41cPlPKs0uwoqJccWXeAAfA7LFd4YjanlnMURdsSRHTsiYmm1dULokoYrEb2aXU3b-B3oEFJU4pPRfaGS59qo7JqznLEbhwbBHaXF-0ewRHqMXCj9mcECaQMv-yo8BLMHVSVatylqRqKwOyKuQpag\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '25328555-b97e-45e9-ae08-35d87107e5b1',
  'client-request-id': '5e6483d9-4eab-49a3-a44d-11f1c09970d2',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_298',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:55:50 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/879d1a2d-f429-40f7-9fa0-e3b898083d57/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"expires_in\":\"3599\",\"expires_on\":\"1459810550\",\"not_before\":\"1459806650\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwiaWF0IjoxNDU5ODA2NjUwLCJuYmYiOjE0NTk4MDY2NTAsImV4cCI6MTQ1OTgxMDU1MCwiYXBwaWQiOiJhYzk1OTFmOS1kM2M5LTQ2YzEtYTA0My1mNjdkODc2OGEwMDMiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NzlkMWEyZC1mNDI5LTQwZjctOWZhMC1lM2I4OTgwODNkNTcvIiwib2lkIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwic3ViIjoiNjI2NGU3ZDYtMjJiZi00NTdkLTljNWMtYzBiZGMxZjYwYzlmIiwidGlkIjoiODc5ZDFhMmQtZjQyOS00MGY3LTlmYTAtZTNiODk4MDgzZDU3IiwidmVyIjoiMS4wIn0.gsesFY7nph6OXcbNiSUH7mtFHGMkM9nj-G-8HgZZjdERtvNBtqczy9DdF2wq6lpCI_JKrN6-bHUCx6-V3A2P-CgAMHm1m7PRstpLkqsFhLWT0L4PEQB83w1o8pL708yX9gbqizFAHLFsdTGF0nehdWH9ayCz9ywTcMJLfwV85DohVOmPVp_AMQv0XY3FikrGN41cPlPKs0uwoqJccWXeAAfA7LFd4YjanlnMURdsSRHTsiYmm1dULokoYrEb2aXU3b-B3oEFJU4pPRfaGS59qo7JqznLEbhwbBHaXF-0ewRHqMXCj9mcECaQMv-yo8BLMHVSVatylqRqKwOyKuQpag\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '25328555-b97e-45e9-ae08-35d87107e5b1',
  'client-request-id': '5e6483d9-4eab-49a3-a44d-11f1c09970d2',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_298',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Mon, 04 Apr 2016 21:55:50 GMT',
  connection: 'close',
  'content-length': '1234' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6523/providers/Microsoft.Cdn/profiles/cdnTestProfile9804/endpoints/cdnTestEndpoint3061/load?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"/movies/*\\\". ContentPath for load action must be a relative path for a single resource \\\"/path/pic.jpg\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '196',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '9cdb1466-7953-46e1-ad3d-73aff12eac7e',
  'x-ms-client-request-id': '398022f9-fdf5-4e29-9364-2da24642728c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a46908f7-5fbc-4959-9ccd-5cff3d56b867',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T215552Z:a46908f7-5fbc-4959-9ccd-5cff3d56b867',
  date: 'Mon, 04 Apr 2016 21:55:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup6523/providers/Microsoft.Cdn/profiles/cdnTestProfile9804/endpoints/cdnTestEndpoint3061/load?api-version=2015-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"BadRequest\",\r\n    \"message\": \"Invalid ContentPath \\\"/movies/*\\\". ContentPath for load action must be a relative path for a single resource \\\"/path/pic.jpg\\\".\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '196',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '9cdb1466-7953-46e1-ad3d-73aff12eac7e',
  'x-ms-client-request-id': '398022f9-fdf5-4e29-9364-2da24642728c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'a46908f7-5fbc-4959-9ccd-5cff3d56b867',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160404T215552Z:a46908f7-5fbc-4959-9ccd-5cff3d56b867',
  date: 'Mon, 04 Apr 2016 21:55:52 GMT',
  connection: 'close' });
 return result; }]];
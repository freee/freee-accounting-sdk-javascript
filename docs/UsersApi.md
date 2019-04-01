# FreeeAccountingClient.UsersApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsersCapabilities**](UsersApi.md#getUsersCapabilities) | **GET** /users/capabilities | ログインユーザの権限の取得
[**getUsersMe**](UsersApi.md#getUsersMe) | **GET** /users/me | ログインユーザ情報の取得


<a name="getUsersCapabilities"></a>
# **getUsersCapabilities**
> UsersCapabilitiesResponse getUsersCapabilities(companyId)

ログインユーザの権限の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.UsersApi();

var companyId = 56; // Number | 事業所ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersCapabilities(companyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 

### Return type

[**UsersCapabilitiesResponse**](UsersCapabilitiesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getUsersMe"></a>
# **getUsersMe**
> UsersMeResponse getUsersMe(opts)

ログインユーザ情報の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.UsersApi();

var opts = { 
  'companies': true // Boolean | 取得情報にユーザが所属する事業所一覧を含める
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersMe(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companies** | **Boolean**| 取得情報にユーザが所属する事業所一覧を含める | [optional] 

### Return type

[**UsersMeResponse**](UsersMeResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


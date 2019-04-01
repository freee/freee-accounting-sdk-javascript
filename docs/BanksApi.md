# FreeeAccountingClient.BanksApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBanks**](BanksApi.md#getBanks) | **GET** /banks | 連携サービス一覧の取得


<a name="getBanks"></a>
# **getBanks**
> BanksIndexResponse getBanks(opts)

連携サービス一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.BanksApi();

var opts = { 
  'offset': 56, // Number | 開始位置
  'limit': 56, // Number | 取得上限数,最大500件
  'type': "type_example" // String | サービス種別
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBanks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| 開始位置 | [optional] 
 **limit** | **Number**| 取得上限数,最大500件 | [optional] 
 **type** | **String**| サービス種別 | [optional] 

### Return type

[**BanksIndexResponse**](BanksIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


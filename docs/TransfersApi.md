# FreeeAccountingClient.TransfersApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTransfer**](TransfersApi.md#createTransfer) | **POST** /transfers | 取引（振替）の作成
[**getTransfers**](TransfersApi.md#getTransfers) | **GET** /transfers | 取引（振替）一覧の取得


<a name="createTransfer"></a>
# **createTransfer**
> TransfersCreateResponse createTransfer(opts)

取引（振替）の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TransfersApi();

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter4() // Parameter4 | 取引（振替）の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTransfer(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameter** | [**Parameter4**](Parameter4.md)| 取引（振替）の作成 | [optional] 

### Return type

[**TransfersCreateResponse**](TransfersCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTransfers"></a>
# **getTransfers**
> TransfersIndexResponse getTransfers(companyId, opts)

取引（振替）一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TransfersApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'startDate': "startDate_example", // String | 振替日で絞込：開始日 (yyyy-mm-dd)
  'endDate': "endDate_example", // String | 振替日で絞込：終了日 (yyyy-mm-dd)
  'offset': 56, // Number | 取得レコードのオフセット (デフォルト: 0)
  'limit': 56 // Number | 取得レコードの件数 (デフォルト: 20, 最大: 100) 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransfers(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **startDate** | **String**| 振替日で絞込：開始日 (yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 振替日で絞込：終了日 (yyyy-mm-dd) | [optional] 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 20, 最大: 100)  | [optional] 

### Return type

[**TransfersIndexResponse**](TransfersIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


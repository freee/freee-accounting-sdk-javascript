# FreeeAccountingClient.WalletablesApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWalletable**](WalletablesApi.md#createWalletable) | **POST** /walletables | 口座の作成
[**getWalletables**](WalletablesApi.md#getWalletables) | **GET** /walletables | 口座一覧の取得


<a name="createWalletable"></a>
# **createWalletable**
> WalletablesCreateResponse createWalletable(opts)

口座の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.WalletablesApi();

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters5() // Parameters5 | 口座の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWalletable(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**Parameters5**](Parameters5.md)| 口座の作成 | [optional] 

### Return type

[**WalletablesCreateResponse**](WalletablesCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getWalletables"></a>
# **getWalletables**
> WalletablesIndexResponse getWalletables(companyId, opts)

口座一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.WalletablesApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'withBalance': "withBalance_example" // String | 残高情報を含める
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWalletables(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **withBalance** | **String**| 残高情報を含める | [optional] 

### Return type

[**WalletablesIndexResponse**](WalletablesIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


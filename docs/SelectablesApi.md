# FreeeAccountingClient.SelectablesApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormsSelectables**](SelectablesApi.md#getFormsSelectables) | **GET** /forms/selectables | フォーム用選択項目情報の取得


<a name="getFormsSelectables"></a>
# **getFormsSelectables**
> SelectablesIndexResponse getFormsSelectables(companyId, opts)

フォーム用選択項目情報の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SelectablesApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'includes': "includes_example" // String | 取得する項目(項目: account_item)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormsSelectables(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **includes** | **String**| 取得する項目(項目: account_item) | [optional] 

### Return type

[**SelectablesIndexResponse**](SelectablesIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


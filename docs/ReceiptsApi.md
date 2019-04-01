# FreeeAccountingClient.ReceiptsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReceipt**](ReceiptsApi.md#createReceipt) | **POST** /receipts | ファイルボックス 証憑ファイルアップロード


<a name="createReceipt"></a>
# **createReceipt**
> ReceiptCreateResponse createReceipt(companyId, receipt, opts)

ファイルボックス 証憑ファイルアップロード



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ReceiptsApi();

var companyId = 56; // Number | 事業所ID

var receipt = "/path/to/file.txt"; // File | 証憑ファイル

var opts = { 
  'description': "description_example", // String | メモ (255文字以内)
  'issueDate': "issueDate_example" // String | 取引日 (yyyy-mm-dd)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createReceipt(companyId, receipt, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **receipt** | **File**| 証憑ファイル | 
 **description** | **String**| メモ (255文字以内) | [optional] 
 **issueDate** | **String**| 取引日 (yyyy-mm-dd) | [optional] 

### Return type

[**ReceiptCreateResponse**](ReceiptCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


# FreeeAccountingClient.ExpenseApplicationLineTemplatesApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExpenseApplicationLineTemplates**](ExpenseApplicationLineTemplatesApi.md#getExpenseApplicationLineTemplates) | **GET** /expense_application_line_templates | 経費科目一覧の取得


<a name="getExpenseApplicationLineTemplates"></a>
# **getExpenseApplicationLineTemplates**
> ExpenseApplicationLineTemplatesIndexResponse getExpenseApplicationLineTemplates(companyId, opts)

経費科目一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ExpenseApplicationLineTemplatesApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
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
apiInstance.getExpenseApplicationLineTemplates(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 20, 最大: 100) | [optional] 

### Return type

[**ExpenseApplicationLineTemplatesIndexResponse**](ExpenseApplicationLineTemplatesIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


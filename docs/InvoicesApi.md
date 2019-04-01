# FreeeAccountingClient.InvoicesApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**destroyInvoice**](InvoicesApi.md#destroyInvoice) | **DELETE** /invoices/{id} | 請求書の削除
[**updateInvoice**](InvoicesApi.md#updateInvoice) | **PUT** /invoices/{id} | 請求書の更新


<a name="destroyInvoice"></a>
# **destroyInvoice**
> destroyInvoice(id, opts)

請求書の削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.InvoicesApi();

var id = 56; // Number | 

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter() // Parameter | 請求書の削除
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroyInvoice(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameter** | [**Parameter**](Parameter.md)| 請求書の削除 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateInvoice"></a>
# **updateInvoice**
> InvoicesResponse updateInvoice(id, opts)

請求書の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.InvoicesApi();

var id = 56; // Number | 請求書ID

var opts = { 
  'parameters': new FreeeAccountingClient.InvoicesUpdateParams() // InvoicesUpdateParams | 請求書の更新
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInvoice(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 請求書ID | 
 **parameters** | [**InvoicesUpdateParams**](InvoicesUpdateParams.md)| 請求書の更新 | [optional] 

### Return type

[**InvoicesResponse**](InvoicesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


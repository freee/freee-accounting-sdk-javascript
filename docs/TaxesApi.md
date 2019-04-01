# FreeeAccountingClient.TaxesApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTaxCodes**](TaxesApi.md#getTaxCodes) | **GET** /taxes/codes | 税区分コード一覧の取得
[**getTaxes**](TaxesApi.md#getTaxes) | **GET** /taxes | 税区分一覧の取得 (deprecated)


<a name="getTaxCodes"></a>
# **getTaxCodes**
> TaxesCodesResponse getTaxCodes()

税区分コード一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TaxesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxCodes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TaxesCodesResponse**](TaxesCodesResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTaxes"></a>
# **getTaxes**
> TaxesIndexResponse getTaxes(companyId)

税区分一覧の取得 (deprecated)



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TaxesApi();

var companyId = 56; // Number | 事業所ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaxes(companyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 

### Return type

[**TaxesIndexResponse**](TaxesIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


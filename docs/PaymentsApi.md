# FreeeAccountingClient.PaymentsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDealPayment**](PaymentsApi.md#createDealPayment) | **POST** /deals/{id}/payments | 取引（収入／支出）の支払行作成
[**destroyDealPayment**](PaymentsApi.md#destroyDealPayment) | **DELETE** /deals/{id}/payments/{payment_id} | 取引（収入／支出）の支払行削除
[**updateDealPayment**](PaymentsApi.md#updateDealPayment) | **PUT** /deals/{id}/payments/{payment_id} | 取引（収入／支出）の支払行更新


<a name="createDealPayment"></a>
# **createDealPayment**
> DealsResponse createDealPayment(id, parameters)

取引（収入／支出）の支払行作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.PaymentsApi();

var id = 56; // Number | 取引ID

var parameters = new FreeeAccountingClient.DealPaymentParams(); // DealPaymentParams | 取引（収入／支出）の支払行作成


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDealPayment(id, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **parameters** | [**DealPaymentParams**](DealPaymentParams.md)| 取引（収入／支出）の支払行作成 | 

### Return type

[**DealsResponse**](DealsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="destroyDealPayment"></a>
# **destroyDealPayment**
> destroyDealPayment(id, paymentId, opts)

取引（収入／支出）の支払行削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.PaymentsApi();

var id = 56; // Number | 取引ID

var paymentId = 56; // Number | 決済ID

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter2() // Parameter2 | 取引（収入／支出）の支払行削除
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroyDealPayment(id, paymentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **paymentId** | **Number**| 決済ID | 
 **parameter** | [**Parameter2**](Parameter2.md)| 取引（収入／支出）の支払行削除 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateDealPayment"></a>
# **updateDealPayment**
> DealsResponse updateDealPayment(id, paymentId, parameters)

取引（収入／支出）の支払行更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.PaymentsApi();

var id = 56; // Number | 取引ID

var paymentId = 56; // Number | 決済ID

var parameters = new FreeeAccountingClient.DealPaymentParams(); // DealPaymentParams | 取引（収入／支出）の支払行更新


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDealPayment(id, paymentId, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **paymentId** | **Number**| 決済ID | 
 **parameters** | [**DealPaymentParams**](DealPaymentParams.md)| 取引（収入／支出）の支払行更新 | 

### Return type

[**DealsResponse**](DealsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


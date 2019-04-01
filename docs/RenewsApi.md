# FreeeAccountingClient.RenewsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDealRenew**](RenewsApi.md#createDealRenew) | **POST** /deals/{id}/renews | 取引（収入／支出）に対する+更新の作成
[**deleteDealRenew**](RenewsApi.md#deleteDealRenew) | **DELETE** /deals/{id}/renews/{renew_id} | 取引（収入／支出）の+更新の削除
[**updateDealRenew**](RenewsApi.md#updateDealRenew) | **PUT** /deals/{id}/renews/{renew_id} | 取引（収入／支出）の+更新の更新


<a name="createDealRenew"></a>
# **createDealRenew**
> RenewsResponse createDealRenew(id, parameters)

取引（収入／支出）に対する+更新の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.RenewsApi();

var id = 56; // Number | 取引ID

var parameters = new FreeeAccountingClient.RenewsCreateParams(); // RenewsCreateParams | 取引（収入／支出）に対する+更新の情報


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDealRenew(id, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **parameters** | [**RenewsCreateParams**](RenewsCreateParams.md)| 取引（収入／支出）に対する+更新の情報 | 

### Return type

[**RenewsResponse**](RenewsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteDealRenew"></a>
# **deleteDealRenew**
> RenewsResponse deleteDealRenew(id, renewId, opts)

取引（収入／支出）の+更新の削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.RenewsApi();

var id = 56; // Number | 取引ID

var renewId = 56; // Number | +更新ID

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter1() // Parameter1 | 取引（収入／支出）に対する+更新の情報
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDealRenew(id, renewId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **renewId** | **Number**| +更新ID | 
 **parameter** | [**Parameter1**](Parameter1.md)| 取引（収入／支出）に対する+更新の情報 | [optional] 

### Return type

[**RenewsResponse**](RenewsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateDealRenew"></a>
# **updateDealRenew**
> RenewsResponse updateDealRenew(id, renewId, parameters)

取引（収入／支出）の+更新の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.RenewsApi();

var id = 56; // Number | 取引ID

var renewId = 56; // Number | +更新ID

var parameters = new FreeeAccountingClient.RenewsUpdateParams(); // RenewsUpdateParams | +更新の更新情報


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDealRenew(id, renewId, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **renewId** | **Number**| +更新ID | 
 **parameters** | [**RenewsUpdateParams**](RenewsUpdateParams.md)| +更新の更新情報 | 

### Return type

[**RenewsResponse**](RenewsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


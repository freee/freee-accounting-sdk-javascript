# FreeeAccountingClient.AccountItemsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccountItem**](AccountItemsApi.md#createAccountItem) | **POST** /account_items | 勘定科目の作成
[**getAccountItem**](AccountItemsApi.md#getAccountItem) | **GET** /account_items/{id} | 勘定科目の詳細情報の取得
[**getAccountItems**](AccountItemsApi.md#getAccountItems) | **GET** /account_items | 勘定科目一覧の取得
[**updateAccountItem**](AccountItemsApi.md#updateAccountItem) | **PUT** /account_items/{id} | 勘定科目の更新


<a name="createAccountItem"></a>
# **createAccountItem**
> AccountItemsCreateResponse createAccountItem(parameters)

勘定科目の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.AccountItemsApi();

var parameters = new FreeeAccountingClient.AccountItemParams(); // AccountItemParams | 勘定科目の作成


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccountItem(parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**AccountItemParams**](AccountItemParams.md)| 勘定科目の作成 | 

### Return type

[**AccountItemsCreateResponse**](AccountItemsCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getAccountItem"></a>
# **getAccountItem**
> AccountItemsShowResponse getAccountItem(companyId, id)

勘定科目の詳細情報の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.AccountItemsApi();

var companyId = 56; // Number | 事業所ID

var id = 56; // Number | 勘定科目ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountItem(companyId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **id** | **Number**| 勘定科目ID | 

### Return type

[**AccountItemsShowResponse**](AccountItemsShowResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getAccountItems"></a>
# **getAccountItems**
> AccountItemsIndexResponse getAccountItems(companyId, opts)

勘定科目一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.AccountItemsApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'baseDate': "baseDate_example" // String | 基準日
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountItems(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **baseDate** | **String**| 基準日 | [optional] 

### Return type

[**AccountItemsIndexResponse**](AccountItemsIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateAccountItem"></a>
# **updateAccountItem**
> AccountItemsUpdateResponse updateAccountItem(parameters, id)

勘定科目の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.AccountItemsApi();

var parameters = new FreeeAccountingClient.AccountItemParams(); // AccountItemParams | 勘定科目の更新

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAccountItem(parameters, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**AccountItemParams**](AccountItemParams.md)| 勘定科目の更新 | 
 **id** | **Number**|  | 

### Return type

[**AccountItemsUpdateResponse**](AccountItemsUpdateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


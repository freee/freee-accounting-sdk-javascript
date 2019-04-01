# FreeeAccountingClient.ExpenseApplicationsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExpenseApplication**](ExpenseApplicationsApi.md#createExpenseApplication) | **POST** /expense_applications | 経費申請の作成
[**destroyExpenseApplication**](ExpenseApplicationsApi.md#destroyExpenseApplication) | **DELETE** /expense_applications/{id} | 経費申請の削除
[**updateExpenseApplication**](ExpenseApplicationsApi.md#updateExpenseApplication) | **PUT** /expense_applications/{id} | 経費申請の更新


<a name="createExpenseApplication"></a>
# **createExpenseApplication**
> ExpenseApplicationsResponse createExpenseApplication(opts)

経費申請の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ExpenseApplicationsApi();

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters7() // Parameters7 | 経費申請の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createExpenseApplication(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**Parameters7**](Parameters7.md)| 経費申請の作成 | [optional] 

### Return type

[**ExpenseApplicationsResponse**](ExpenseApplicationsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="destroyExpenseApplication"></a>
# **destroyExpenseApplication**
> destroyExpenseApplication(id, opts)

経費申請の削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ExpenseApplicationsApi();

var id = 56; // Number | 

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter5() // Parameter5 | 経費申請の削除
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroyExpenseApplication(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameter** | [**Parameter5**](Parameter5.md)| 経費申請の削除 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateExpenseApplication"></a>
# **updateExpenseApplication**
> ExpenseApplicationsResponse updateExpenseApplication(id, opts)

経費申請の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ExpenseApplicationsApi();

var id = 56; // Number | 

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters8() // Parameters8 | 経費申請の更新
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateExpenseApplication(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameters** | [**Parameters8**](Parameters8.md)| 経費申請の更新 | [optional] 

### Return type

[**ExpenseApplicationsResponse**](ExpenseApplicationsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


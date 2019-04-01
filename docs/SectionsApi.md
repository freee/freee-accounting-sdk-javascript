# FreeeAccountingClient.SectionsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSection**](SectionsApi.md#createSection) | **POST** /sections | 部門の作成
[**destroySection**](SectionsApi.md#destroySection) | **DELETE** /sections/{id} | 部門の削除
[**getSections**](SectionsApi.md#getSections) | **GET** /sections | 部門一覧の取得
[**updateSection**](SectionsApi.md#updateSection) | **PUT** /sections/{id} | 部門の更新


<a name="createSection"></a>
# **createSection**
> SectionsCreateResponse createSection(opts)

部門の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SectionsApi();

var opts = { 
  'parameters': new FreeeAccountingClient.SectionParams() // SectionParams | 部門の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSection(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**SectionParams**](SectionParams.md)| 部門の作成 | [optional] 

### Return type

[**SectionsCreateResponse**](SectionsCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="destroySection"></a>
# **destroySection**
> destroySection(id, opts)

部門の削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SectionsApi();

var id = 56; // Number | 

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters1() // Parameters1 | 部門の削除
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroySection(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameters** | [**Parameters1**](Parameters1.md)| 部門の削除 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSections"></a>
# **getSections**
> SectionsIndexResponse getSections(companyId)

部門一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SectionsApi();

var companyId = 56; // Number | 事業所ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSections(companyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 

### Return type

[**SectionsIndexResponse**](SectionsIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateSection"></a>
# **updateSection**
> SectionsUpdateResponse updateSection(id, opts)

部門の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SectionsApi();

var id = 56; // Number | 

var opts = { 
  'parameters': new FreeeAccountingClient.SectionParams() // SectionParams | 部門の更新
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSection(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameters** | [**SectionParams**](SectionParams.md)| 部門の更新 | [optional] 

### Return type

[**SectionsUpdateResponse**](SectionsUpdateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


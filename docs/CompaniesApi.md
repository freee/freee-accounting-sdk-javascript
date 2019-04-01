# FreeeAccountingClient.CompaniesApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompanies**](CompaniesApi.md#getCompanies) | **GET** /companies | 事業所一覧の取得
[**getCompany**](CompaniesApi.md#getCompany) | **GET** /companies/{id} | 事業所の詳細情報の取得
[**updateCompany**](CompaniesApi.md#updateCompany) | **PUT** /companies/{id} | 事業所情報の更新


<a name="getCompanies"></a>
# **getCompanies**
> ERRORUNKNOWN getCompanies()

事業所一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.CompaniesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCompanies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ERRORUNKNOWN**](ERRORUNKNOWN.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCompany"></a>
# **getCompany**
> CompaniesShowResponse getCompany(id, opts)

事業所の詳細情報の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.CompaniesApi();

var id = 56; // Number | 事業所ID

var opts = { 
  'details': true, // Boolean | 取得情報に勘定科目・税区分コード・税区分・品目・取引先・部門・メモタグ・口座の一覧を含める
  'accountItems': true, // Boolean | 取得情報に勘定科目一覧を含める
  'taxes': true, // Boolean | 取得情報に税区分コード・税区分一覧を含める
  'items': true, // Boolean | 取得情報に品目一覧を含める
  'partners': true, // Boolean | 取得情報に取引先一覧を含める
  'sections': true, // Boolean | 取得情報に部門一覧を含める
  'tags': true, // Boolean | 取得情報にメモタグ一覧を含める
  'walletables': true // Boolean | 取得情報に口座一覧を含める
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCompany(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 事業所ID | 
 **details** | **Boolean**| 取得情報に勘定科目・税区分コード・税区分・品目・取引先・部門・メモタグ・口座の一覧を含める | [optional] 
 **accountItems** | **Boolean**| 取得情報に勘定科目一覧を含める | [optional] 
 **taxes** | **Boolean**| 取得情報に税区分コード・税区分一覧を含める | [optional] 
 **items** | **Boolean**| 取得情報に品目一覧を含める | [optional] 
 **partners** | **Boolean**| 取得情報に取引先一覧を含める | [optional] 
 **sections** | **Boolean**| 取得情報に部門一覧を含める | [optional] 
 **tags** | **Boolean**| 取得情報にメモタグ一覧を含める | [optional] 
 **walletables** | **Boolean**| 取得情報に口座一覧を含める | [optional] 

### Return type

[**CompaniesShowResponse**](CompaniesShowResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateCompany"></a>
# **updateCompany**
> CompaniesUpdateResponse updateCompany(id, opts)

事業所情報の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.CompaniesApi();

var id = 56; // Number | 事業所ID

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters3() // Parameters3 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCompany(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 事業所ID | 
 **parameters** | [**Parameters3**](Parameters3.md)|  | [optional] 

### Return type

[**CompaniesUpdateResponse**](CompaniesUpdateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


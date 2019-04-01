# FreeeAccountingClient.PartnersApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPartner**](PartnersApi.md#createPartner) | **POST** /partners | 取引先の作成
[**getPartners**](PartnersApi.md#getPartners) | **GET** /partners | 取引先一覧の取得
[**updatePartner**](PartnersApi.md#updatePartner) | **PUT** /partners/{id} | 取引先の更新


<a name="createPartner"></a>
# **createPartner**
> PartnersResponse createPartner(parameters)

取引先の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.PartnersApi();

var parameters = new FreeeAccountingClient.PartnerParams(); // PartnerParams | 取引先の作成


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPartner(parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**PartnerParams**](PartnerParams.md)| 取引先の作成 | 

### Return type

[**PartnersResponse**](PartnersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPartners"></a>
# **getPartners**
> PartnersIndexResponse getPartners(companyId, opts)

取引先一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.PartnersApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'offset': 56, // Number | 取得レコードのオフセット (デフォルト: 0)
  'limit': 56, // Number | 取得レコードの件数 (デフォルト: 50, 最大: 500)
  'keyword': "keyword_example" // String | 検索キーワード：取引先名・正式名称・カナ名称に対するあいまい検索で一致、またはショートカットキー1・2のいずれかに完全一致
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPartners(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 50, 最大: 500) | [optional] 
 **keyword** | **String**| 検索キーワード：取引先名・正式名称・カナ名称に対するあいまい検索で一致、またはショートカットキー1・2のいずれかに完全一致 | [optional] 

### Return type

[**PartnersIndexResponse**](PartnersIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updatePartner"></a>
# **updatePartner**
> PartnersResponse updatePartner(id, parameters)

取引先の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.PartnersApi();

var id = 56; // Number | 取引先ID

var parameters = new FreeeAccountingClient.PartnerParams(); // PartnerParams | 取引先の更新


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePartner(id, parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引先ID | 
 **parameters** | [**PartnerParams**](PartnerParams.md)| 取引先の更新 | 

### Return type

[**PartnersResponse**](PartnersResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


# FreeeAccountingClient.SegmentTagsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSegmentTag**](SegmentTagsApi.md#createSegmentTag) | **POST** /segments/{segment_id}/tags | セグメントの作成
[**destroySegmentsTag**](SegmentTagsApi.md#destroySegmentsTag) | **DELETE** /segments/{segment_id}/tags/{id} | セグメントタグの削除
[**getSegmentTags**](SegmentTagsApi.md#getSegmentTags) | **GET** /segments/{segment_id}/tags | セグメントタグ一覧の取得
[**updateSegmentTag**](SegmentTagsApi.md#updateSegmentTag) | **PUT** /segments/{segment_id}/tags/{id} | セグメントタグの更新


<a name="createSegmentTag"></a>
# **createSegmentTag**
> SegmentTagsResponse createSegmentTag(parameters, segmentId)

セグメントの作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SegmentTagsApi();

var parameters = new FreeeAccountingClient.SegmentTagParams(); // SegmentTagParams | セグメントタグの作成

var segmentId = 56; // Number | セグメントID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSegmentTag(parameters, segmentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**SegmentTagParams**](SegmentTagParams.md)| セグメントタグの作成 | 
 **segmentId** | **Number**| セグメントID | 

### Return type

[**SegmentTagsResponse**](SegmentTagsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="destroySegmentsTag"></a>
# **destroySegmentsTag**
> destroySegmentsTag(segmentId, id, opts)

セグメントタグの削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SegmentTagsApi();

var segmentId = 56; // Number | セグメントID

var id = 56; // Number | セグメントタグID

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter6() // Parameter6 | セグメントタグの削除
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroySegmentsTag(segmentId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentId** | **Number**| セグメントID | 
 **id** | **Number**| セグメントタグID | 
 **parameter** | [**Parameter6**](Parameter6.md)| セグメントタグの削除 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSegmentTags"></a>
# **getSegmentTags**
> SegmentTagsIndexResponse getSegmentTags(companyId, segmentId, opts)

セグメントタグ一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SegmentTagsApi();

var companyId = 56; // Number | 事業所ID

var segmentId = 56; // Number | セグメントID

var opts = { 
  'offset': 56, // Number | 取得レコードのオフセット (デフォルト: 0)
  'limit': 56 // Number | 取得レコードの件数 (デフォルト: 20, 最大: 500) 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentTags(companyId, segmentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **segmentId** | **Number**| セグメントID | 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 20, 最大: 500)  | [optional] 

### Return type

[**SegmentTagsIndexResponse**](SegmentTagsIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateSegmentTag"></a>
# **updateSegmentTag**
> SegmentTagsResponse updateSegmentTag(parameters, segmentId, id)

セグメントタグの更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.SegmentTagsApi();

var parameters = new FreeeAccountingClient.SegmentTagParams(); // SegmentTagParams | セグメントタグの作成

var segmentId = 56; // Number | セグメントID

var id = 56; // Number | セグメントタグID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSegmentTag(parameters, segmentId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**SegmentTagParams**](SegmentTagParams.md)| セグメントタグの作成 | 
 **segmentId** | **Number**| セグメントID | 
 **id** | **Number**| セグメントタグID | 

### Return type

[**SegmentTagsResponse**](SegmentTagsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


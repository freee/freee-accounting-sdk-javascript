# FreeeAccountingClient.JournalsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadJournal**](JournalsApi.md#downloadJournal) | **GET** /journals/reports/{id}/download | ダウンロード実行
[**getJournalStatus**](JournalsApi.md#getJournalStatus) | **GET** /journals/reports/{id}/status | ステータス確認
[**getJournals**](JournalsApi.md#getJournals) | **GET** /journals | ダウンロード要求


<a name="downloadJournal"></a>
# **downloadJournal**
> downloadJournal(id, companyId)

ダウンロード実行



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.JournalsApi();

var id = 56; // Number | 受け付けID

var companyId = 56; // Number | 事業所ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.downloadJournal(id, companyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 受け付けID | 
 **companyId** | **Number**| 事業所ID | 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/pdf, text/csv; charset=sjis; header=present

<a name="getJournalStatus"></a>
# **getJournalStatus**
> JournalsStatusResponse getJournalStatus(companyId, id, opts)

ステータス確認



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.JournalsApi();

var companyId = 56; // Number | 事業所ID

var id = 56; // Number | 受け付けID

var opts = { 
  'visibleTags': ["visibleTags_example"], // [String] | 補助科目やコメントとして出力する項目
  'startDate': "startDate_example", // String | 取得開始日 (yyyy-mm-dd)
  'endDate': "endDate_example" // String | 取得終了日 (yyyy-mm-dd)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJournalStatus(companyId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **id** | **Number**| 受け付けID | 
 **visibleTags** | [**[String]**](String.md)| 補助科目やコメントとして出力する項目 | [optional] 
 **startDate** | **String**| 取得開始日 (yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 取得終了日 (yyyy-mm-dd) | [optional] 

### Return type

[**JournalsStatusResponse**](JournalsStatusResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getJournals"></a>
# **getJournals**
> JournalsEnqueueJournalsResponse getJournals(downloadType, companyId, opts)

ダウンロード要求



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.JournalsApi();

var downloadType = "downloadType_example"; // String | ダウンロード形式

var companyId = 56; // Number | 事業所ID

var opts = { 
  'visibleTags': ["visibleTags_example"], // [String] | 補助科目やコメントとして出力する項目
  'startDate': "startDate_example", // String | 取得開始日 (yyyy-mm-dd)
  'endDate': "endDate_example" // String | 取得終了日 (yyyy-mm-dd)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJournals(downloadType, companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downloadType** | **String**| ダウンロード形式 | 
 **companyId** | **Number**| 事業所ID | 
 **visibleTags** | [**[String]**](String.md)| 補助科目やコメントとして出力する項目 | [optional] 
 **startDate** | **String**| 取得開始日 (yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 取得終了日 (yyyy-mm-dd) | [optional] 

### Return type

[**JournalsEnqueueJournalsResponse**](JournalsEnqueueJournalsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


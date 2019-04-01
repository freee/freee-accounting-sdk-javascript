# FreeeAccountingClient.ManualJournalsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createManualJournal**](ManualJournalsApi.md#createManualJournal) | **POST** /manual_journals | 振替伝票の作成
[**destroyManualJournal**](ManualJournalsApi.md#destroyManualJournal) | **DELETE** /manual_journals/{id} | 振替伝票の削除
[**getManualJournal**](ManualJournalsApi.md#getManualJournal) | **GET** /manual_journals/{id} | 振替伝票の取得
[**getManualJournals**](ManualJournalsApi.md#getManualJournals) | **GET** /manual_journals | 振替伝票一覧の取得
[**updateManualJournal**](ManualJournalsApi.md#updateManualJournal) | **PUT** /manual_journals/{id} | 振替伝票の更新


<a name="createManualJournal"></a>
# **createManualJournal**
> ManualJournalsCreateResponse createManualJournal(opts)

振替伝票の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ManualJournalsApi();

var opts = { 
  'parameters': new FreeeAccountingClient.ManualJournalsCreateParams() // ManualJournalsCreateParams | 振替伝票の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createManualJournal(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**ManualJournalsCreateParams**](ManualJournalsCreateParams.md)| 振替伝票の作成 | [optional] 

### Return type

[**ManualJournalsCreateResponse**](ManualJournalsCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="destroyManualJournal"></a>
# **destroyManualJournal**
> destroyManualJournal(id, opts)

振替伝票の削除



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ManualJournalsApi();

var id = 56; // Number | 

var opts = { 
  'parameter': new FreeeAccountingClient.Parameter3() // Parameter3 | 振替伝票の削除
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.destroyManualJournal(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameter** | [**Parameter3**](Parameter3.md)| 振替伝票の削除 | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getManualJournal"></a>
# **getManualJournal**
> ManualJournalsShowResponse getManualJournal(companyId, id)

振替伝票の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ManualJournalsApi();

var companyId = 56; // Number | 事業所ID

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManualJournal(companyId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **id** | **Number**|  | 

### Return type

[**ManualJournalsShowResponse**](ManualJournalsShowResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getManualJournals"></a>
# **getManualJournals**
> ManualJournalsIndexResponse getManualJournals(companyId, opts)

振替伝票一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ManualJournalsApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'startIssueDate': "startIssueDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endIssueDate': "endIssueDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'entrySide': "entrySide_example", // String | 貸借で絞込 (貸方: credit, 借方: debit)
  'accountItemId': 56, // Number | 勘定科目IDで絞込
  'minAmount': 56, // Number | 金額で絞込：下限
  'maxAmount': 56, // Number | 金額で絞込：上限
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択の貸借行を絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択の貸借行を絞り込めます）
  'sectionId': 56, // Number | 部門IDで絞込（0を指定すると、部門が未選択の貸借行を絞り込めます）
  'segment1TagId': 56, // Number | セグメント１IDで絞り込み（0を指定すると、セグメント１が未選択の貸借行を絞り込めます）
  'segment2TagId': 56, // Number | セグメント２IDで絞り込み（0を指定すると、セグメント２が未選択の貸借行を絞り込めます）
  'segment3TagId': 56, // Number | セグメント３IDで絞り込み（0を指定すると、セグメント３が未選択の貸借行を絞り込めます）
  'commentStatus': "commentStatus_example", // String | コメント状態で絞込（自分宛のコメント: posted_with_mention, 自分宛のコメント-未解決: raised_with_mention, 自分宛のコメント-解決済: resolved_with_mention, コメントあり: posted, 未解決: raised, 解決済: resolved, コメントなし: none）
  'commentImportant': true, // Boolean | 重要コメント付きの振替伝票を絞込
  'adjustment': "adjustment_example", // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
  'txnNumber': "txnNumber_example", // String | 仕訳番号で絞込（事業所の仕訳番号形式が有効な場合のみ）
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
apiInstance.getManualJournals(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **startIssueDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endIssueDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **entrySide** | **String**| 貸借で絞込 (貸方: credit, 借方: debit) | [optional] 
 **accountItemId** | **Number**| 勘定科目IDで絞込 | [optional] 
 **minAmount** | **Number**| 金額で絞込：下限 | [optional] 
 **maxAmount** | **Number**| 金額で絞込：上限 | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択の貸借行を絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択の貸借行を絞り込めます） | [optional] 
 **sectionId** | **Number**| 部門IDで絞込（0を指定すると、部門が未選択の貸借行を絞り込めます） | [optional] 
 **segment1TagId** | **Number**| セグメント１IDで絞り込み（0を指定すると、セグメント１が未選択の貸借行を絞り込めます） | [optional] 
 **segment2TagId** | **Number**| セグメント２IDで絞り込み（0を指定すると、セグメント２が未選択の貸借行を絞り込めます） | [optional] 
 **segment3TagId** | **Number**| セグメント３IDで絞り込み（0を指定すると、セグメント３が未選択の貸借行を絞り込めます） | [optional] 
 **commentStatus** | **String**| コメント状態で絞込（自分宛のコメント: posted_with_mention, 自分宛のコメント-未解決: raised_with_mention, 自分宛のコメント-解決済: resolved_with_mention, コメントあり: posted, 未解決: raised, 解決済: resolved, コメントなし: none） | [optional] 
 **commentImportant** | **Boolean**| 重要コメント付きの振替伝票を絞込 | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 
 **txnNumber** | **String**| 仕訳番号で絞込（事業所の仕訳番号形式が有効な場合のみ） | [optional] 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 20, 最大: 500)  | [optional] 

### Return type

[**ManualJournalsIndexResponse**](ManualJournalsIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateManualJournal"></a>
# **updateManualJournal**
> ManualJournalsUpdateResponse updateManualJournal(id, opts)

振替伝票の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.ManualJournalsApi();

var id = 56; // Number | 

var opts = { 
  'parameters': new FreeeAccountingClient.ManualJournalsUpdateParams() // ManualJournalsUpdateParams | 振替伝票の更新
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateManualJournal(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **parameters** | [**ManualJournalsUpdateParams**](ManualJournalsUpdateParams.md)| 振替伝票の更新 | [optional] 

### Return type

[**ManualJournalsUpdateResponse**](ManualJournalsUpdateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


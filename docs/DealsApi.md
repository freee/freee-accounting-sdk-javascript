# FreeeAccountingClient.DealsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeal**](DealsApi.md#createDeal) | **POST** /deals | 取引（収入／支出）の作成
[**getDeal**](DealsApi.md#getDeal) | **GET** /deals/{id} | 取引（収入／支出）の取得
[**getDeals**](DealsApi.md#getDeals) | **GET** /deals | 取引（収入／支出）一覧の取得
[**updateDeal**](DealsApi.md#updateDeal) | **PUT** /deals/{id} | 取引（収入／支出）の更新


<a name="createDeal"></a>
# **createDeal**
> DealsCreateResponse createDeal(opts)

取引（収入／支出）の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.DealsApi();

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters2() // Parameters2 | 取引（収入／支出）の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDeal(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**Parameters2**](Parameters2.md)| 取引（収入／支出）の作成 | [optional] 

### Return type

[**DealsCreateResponse**](DealsCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getDeal"></a>
# **getDeal**
> DealsResponse getDeal(companyId, id, opts)

取引（収入／支出）の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.DealsApi();

var companyId = 56; // Number | 事業所ID

var id = 56; // Number | 

var opts = { 
  'accruals': "accruals_example" // String | 取引の債権債務行の表示（without: 表示しない(デフォルト), with: 表示する）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeal(companyId, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **id** | **Number**|  | 
 **accruals** | **String**| 取引の債権債務行の表示（without: 表示しない(デフォルト), with: 表示する） | [optional] 

### Return type

[**DealsResponse**](DealsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getDeals"></a>
# **getDeals**
> DealsIndexResponse getDeals(companyId, opts)

取引（収入／支出）一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.DealsApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'partnerId': 56, // Number | 取引先IDで絞込
  'status': "status_example", // String | 決済状況で絞込 (未決済: unsettled, 完了: settled)
  'type': "type_example", // String | 収支区分 (収入: income, 支出: expense)
  'startIssueDate': "startIssueDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endIssueDate': "endIssueDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'startDueDate': "startDueDate_example", // String | 支払期日で絞込：開始日(yyyy-mm-dd)
  'endDueDate': "endDueDate_example", // String | 支払期日で絞込：終了日(yyyy-mm-dd)
  'offset': 56, // Number | 取得レコードのオフセット (デフォルト: 0)
  'limit': 56, // Number | 取得レコードの件数 (デフォルト: 20, 最大: 100) 
  'registeredFrom': "registeredFrom_example", // String | 取引登録元アプリで絞込（me: 本APIを叩くアプリ自身から登録した取引のみ）
  'accruals': "accruals_example" // String | 取引の債権債務行の表示（without: 表示しない(デフォルト), with: 表示する）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDeals(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **partnerId** | **Number**| 取引先IDで絞込 | [optional] 
 **status** | **String**| 決済状況で絞込 (未決済: unsettled, 完了: settled) | [optional] 
 **type** | **String**| 収支区分 (収入: income, 支出: expense) | [optional] 
 **startIssueDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endIssueDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **startDueDate** | **String**| 支払期日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDueDate** | **String**| 支払期日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 20, 最大: 100)  | [optional] 
 **registeredFrom** | **String**| 取引登録元アプリで絞込（me: 本APIを叩くアプリ自身から登録した取引のみ） | [optional] 
 **accruals** | **String**| 取引の債権債務行の表示（without: 表示しない(デフォルト), with: 表示する） | [optional] 

### Return type

[**DealsIndexResponse**](DealsIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateDeal"></a>
# **updateDeal**
> DealsResponse updateDeal(id, opts)

取引（収入／支出）の更新



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.DealsApi();

var id = 56; // Number | 取引ID

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters() // Parameters | 取引（収入／支出）の更新
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDeal(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| 取引ID | 
 **parameters** | [**Parameters**](Parameters.md)| 取引（収入／支出）の更新 | [optional] 

### Return type

[**DealsResponse**](DealsResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


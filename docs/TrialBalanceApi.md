# FreeeAccountingClient.TrialBalanceApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTrialBs**](TrialBalanceApi.md#getTrialBs) | **GET** /reports/trial_bs | 貸借対照表の取得
[**getTrialBsThreeYears**](TrialBalanceApi.md#getTrialBsThreeYears) | **GET** /reports/trial_bs_three_years | 貸借対照表(３期間比較)の取得
[**getTrialBsTwoYears**](TrialBalanceApi.md#getTrialBsTwoYears) | **GET** /reports/trial_bs_two_years | 貸借対照表(前年比較)の取得
[**getTrialPl**](TrialBalanceApi.md#getTrialPl) | **GET** /reports/trial_pl | 損益計算書の取得
[**getTrialPlSections**](TrialBalanceApi.md#getTrialPlSections) | **GET** /reports/trial_pl_sections | 損益計算書(部門比較)の取得
[**getTrialPlThreeYears**](TrialBalanceApi.md#getTrialPlThreeYears) | **GET** /reports/trial_pl_three_years | 損益計算書(３期間比較)の取得
[**getTrialPlTwoYears**](TrialBalanceApi.md#getTrialPlTwoYears) | **GET** /reports/trial_pl_two_years | 損益計算書(前年比較)の取得


<a name="getTrialBs"></a>
# **getTrialBs**
> getTrialBs(companyId, opts)

貸借対照表の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'adjustment': "adjustment_example" // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialBs(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTrialBsThreeYears"></a>
# **getTrialBsThreeYears**
> getTrialBsThreeYears(companyId, opts)

貸借対照表(３期間比較)の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'adjustment': "adjustment_example" // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialBsThreeYears(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTrialBsTwoYears"></a>
# **getTrialBsTwoYears**
> getTrialBsTwoYears(companyId, opts)

貸借対照表(前年比較)の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'adjustment': "adjustment_example" // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialBsTwoYears(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTrialPl"></a>
# **getTrialPl**
> getTrialPl(companyId, opts)

損益計算書の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'sectionId': 56, // Number | 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます）
  'adjustment': "adjustment_example", // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
  'costAllocation': "costAllocation_example" // String | 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialPl(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **sectionId** | **Number**| 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 
 **costAllocation** | **String**| 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTrialPlSections"></a>
# **getTrialPlSections**
> getTrialPlSections(companyId, sectionIds, opts)

損益計算書(部門比較)の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var sectionIds = "sectionIds_example"; // String | 出力する部門の指定（半角数字のidを半角カンマ区切りスペースなしで指定してください）

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'adjustment': "adjustment_example", // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
  'costAllocation': "costAllocation_example" // String | 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialPlSections(companyId, sectionIds, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **sectionIds** | **String**| 出力する部門の指定（半角数字のidを半角カンマ区切りスペースなしで指定してください） | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 
 **costAllocation** | **String**| 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTrialPlThreeYears"></a>
# **getTrialPlThreeYears**
> getTrialPlThreeYears(companyId, opts)

損益計算書(３期間比較)の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'sectionId': 56, // Number | 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます）
  'adjustment': "adjustment_example", // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
  'costAllocation': "costAllocation_example" // String | 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialPlThreeYears(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **sectionId** | **Number**| 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 
 **costAllocation** | **String**| 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTrialPlTwoYears"></a>
# **getTrialPlTwoYears**
> getTrialPlTwoYears(companyId, opts)

損益計算書(前年比較)の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.TrialBalanceApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'fiscalYear': 56, // Number | 会計年度
  'startMonth': 56, // Number | 発生月で絞込：開始会計月(mm)
  'endMonth': 56, // Number | 発生月で絞込：終了会計月(mm)
  'startDate': "startDate_example", // String | 発生日で絞込：開始日(yyyy-mm-dd)
  'endDate': "endDate_example", // String | 発生日で絞込：終了日(yyyy-mm-dd)
  'accountItemDisplayType': "accountItemDisplayType_example", // String | 勘定科目の表示（勘定科目: account_item, 決算書表示:group）
  'breakdownDisplayType': "breakdownDisplayType_example", // String | 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます
  'partnerId': 56, // Number | 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます）
  'itemId': 56, // Number | 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます）
  'sectionId': 56, // Number | 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます）
  'adjustment': "adjustment_example", // String | 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
  'costAllocation': "costAllocation_example" // String | 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without）
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTrialPlTwoYears(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **fiscalYear** | **Number**| 会計年度 | [optional] 
 **startMonth** | **Number**| 発生月で絞込：開始会計月(mm) | [optional] 
 **endMonth** | **Number**| 発生月で絞込：終了会計月(mm) | [optional] 
 **startDate** | **String**| 発生日で絞込：開始日(yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 発生日で絞込：終了日(yyyy-mm-dd) | [optional] 
 **accountItemDisplayType** | **String**| 勘定科目の表示（勘定科目: account_item, 決算書表示:group） | [optional] 
 **breakdownDisplayType** | **String**| 内訳の表示（取引先: partner, 品目: item, 部門: section, 勘定科目: account_item） ※勘定科目はaccount_item_display_typeが「group」の時のみ指定できます | [optional] 
 **partnerId** | **Number**| 取引先IDで絞込（0を指定すると、取引先が未選択で絞り込めます） | [optional] 
 **itemId** | **Number**| 品目IDで絞込（0を指定すると、品目が未選択で絞り込めます） | [optional] 
 **sectionId** | **Number**| 部門IDで絞込（0を指定すると、部門が未選択で絞り込めます） | [optional] 
 **adjustment** | **String**| 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without） | [optional] 
 **costAllocation** | **String**| 配賦仕訳で絞込（配賦仕訳のみ：only,配賦仕訳以外：without） | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


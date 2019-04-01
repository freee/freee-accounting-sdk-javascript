# FreeeAccountingClient.WalletTxnsApi

All URIs are relative to *https://api.freee.co.jp/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWalletTxn**](WalletTxnsApi.md#createWalletTxn) | **POST** /wallet_txns | 明細の作成
[**getWalletTxns**](WalletTxnsApi.md#getWalletTxns) | **GET** /wallet_txns | 明細一覧の取得


<a name="createWalletTxn"></a>
# **createWalletTxn**
> WalletTxnsCreateResponse createWalletTxn(opts)

明細の作成



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.WalletTxnsApi();

var opts = { 
  'parameters': new FreeeAccountingClient.Parameters6() // Parameters6 | 明細の作成
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWalletTxn(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**Parameters6**](Parameters6.md)| 明細の作成 | [optional] 

### Return type

[**WalletTxnsCreateResponse**](WalletTxnsCreateResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getWalletTxns"></a>
# **getWalletTxns**
> WalletTxnsIndexResponse getWalletTxns(companyId, opts)

明細一覧の取得



### Example
```javascript
var FreeeAccountingClient = require('freee-accounting-client');
var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken; // assign access token here.

var apiInstance = new FreeeAccountingClient.WalletTxnsApi();

var companyId = 56; // Number | 事業所ID

var opts = { 
  'walletableType': "walletableType_example", // String | 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet)
  'walletableId': 56, // Number | 口座ID
  'startDate': "startDate_example", // String | 取引日で絞込：開始日 (yyyy-mm-dd)
  'endDate': "endDate_example", // String | 取引日で絞込：終了日 (yyyy-mm-dd)
  'entrySide': "entrySide_example", // String | 入金／出金 (入金: income, 出金: expense)
  'offset': 56, // Number | 取得レコードのオフセット (デフォルト: 0)
  'limit': 56 // Number | 取得レコードの件数 (デフォルト: 20, 最大: 100) 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWalletTxns(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **Number**| 事業所ID | 
 **walletableType** | **String**| 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) | [optional] 
 **walletableId** | **Number**| 口座ID | [optional] 
 **startDate** | **String**| 取引日で絞込：開始日 (yyyy-mm-dd) | [optional] 
 **endDate** | **String**| 取引日で絞込：終了日 (yyyy-mm-dd) | [optional] 
 **entrySide** | **String**| 入金／出金 (入金: income, 出金: expense) | [optional] 
 **offset** | **Number**| 取得レコードのオフセット (デフォルト: 0) | [optional] 
 **limit** | **Number**| 取得レコードの件数 (デフォルト: 20, 最大: 100)  | [optional] 

### Return type

[**WalletTxnsIndexResponse**](WalletTxnsIndexResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


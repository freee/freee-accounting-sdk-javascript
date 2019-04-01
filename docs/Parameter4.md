# FreeeAccountingClient.Parameter4

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**toWalletableId** | **Number** | 振替先口座ID | 
**toWalletableType** | **String** | 振替先口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) | 
**fromWalletableId** | **Number** | 振替元口座ID | 
**fromWalletableType** | **String** | 振替元口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) | 
**amount** | **Number** | 金額 | 
**_date** | **String** | 振替日 (yyyy-mm-dd) | 
**companyId** | **Number** | 事業所ID | 
**description** | **String** | 備考 | [optional] 


<a name="ToWalletableTypeEnum"></a>
## Enum: ToWalletableTypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)




<a name="FromWalletableTypeEnum"></a>
## Enum: FromWalletableTypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





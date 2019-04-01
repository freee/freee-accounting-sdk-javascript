# FreeeAccountingClient.DealsPayments1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | 支払金額：payments指定時は必須 | 
**fromWalletableId** | **Number** | 口座ID：payments指定時は必須 | 
**fromWalletableType** | **String** | 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet)：payments指定時は必須 | 
**_date** | **String** | 支払日：payments指定時は必須 | 


<a name="FromWalletableTypeEnum"></a>
## Enum: FromWalletableTypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





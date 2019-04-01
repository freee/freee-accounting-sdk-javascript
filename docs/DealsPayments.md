# FreeeAccountingClient.DealsPayments

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 取引行ID | 
**_date** | **String** | 支払日 | 
**fromWalletableType** | **String** | 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, その他の決済口座: wallet) | [optional] 
**fromWalletableId** | **Number** | 口座ID | [optional] 
**amount** | **Number** | 支払金額 | 


<a name="FromWalletableTypeEnum"></a>
## Enum: FromWalletableTypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





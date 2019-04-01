# FreeeAccountingClient.Parameters6

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entrySide** | **String** | 入金／出金 (入金: income, 出金: expense) | 
**description** | **String** | 備考 | [optional] 
**amount** | **Number** | 取引金額 | 
**walletableId** | **Number** | 口座ID | 
**walletableType** | **String** | 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) | 
**_date** | **String** | 取引日 (yyyy-mm-dd) | 
**companyId** | **Number** | 事業所ID | 
**balance** | **Number** | 残高 (銀行口座等) | [optional] 


<a name="EntrySideEnum"></a>
## Enum: EntrySideEnum


* `income` (value: `"income"`)

* `expense` (value: `"expense"`)




<a name="WalletableTypeEnum"></a>
## Enum: WalletableTypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





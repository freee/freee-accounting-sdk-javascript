# FreeeAccountingClient.WalletTxns

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 明細ID | 
**companyId** | **Number** | 事業所ID | 
**_date** | **String** | 取引日(yyyy-mm-dd) | 
**amount** | **Number** | 取引金額 | 
**dueAmount** | **Number** | 未決済金額 | 
**balance** | **Number** | 残高(銀行口座等) | 
**entrySide** | **String** | 入金／出金 (入金: income, 出金: expense) | 
**walletableType** | **String** | 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) | 
**walletableId** | **Number** | 口座ID | 
**description** | **String** | 備考 | 


<a name="EntrySideEnum"></a>
## Enum: EntrySideEnum


* `income` (value: `"income"`)

* `expense` (value: `"expense"`)




<a name="WalletableTypeEnum"></a>
## Enum: WalletableTypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





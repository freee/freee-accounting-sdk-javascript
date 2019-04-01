# FreeeAccountingClient.WalletablesIndexResponseWalletables

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 口座ID | 
**name** | **String** | 口座名 (255文字以内) | 
**type** | **String** | 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet) | 
**walletableBalance** | **Number** | 登録残高 | [optional] 
**lastBalance** | **Number** | 同期残高 | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





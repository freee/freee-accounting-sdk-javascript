# FreeeAccountingClient.Parameters5

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | 口座名 | 
**type** | **String** | 口座種別（bank_account : 銀行口座, credit_card : クレジットカード, wallet : その他の決済口座） | 
**companyId** | **Number** | 事業所ID | 
**bankId** | **Number** | サービスID | [optional] 
**groupName** | **String** | 決算書表示名（小カテゴリー） 例：売掛金, 受取手形, 未収入金（法人のみ）, 買掛金, 支払手形, 未払金, 預り金, 前受金 | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `bank_account` (value: `"bank_account"`)

* `credit_card` (value: `"credit_card"`)

* `wallet` (value: `"wallet"`)





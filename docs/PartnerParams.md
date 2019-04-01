# FreeeAccountingClient.PartnerParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **Number** | 事業所ID | 
**name** | **String** | 取引先名 (30文字以内) | 
**shortcut1** | **String** | ショートカット１ (20文字以内) | [optional] 
**shortcut2** | **String** | ショートカット２ (20文字以内) | [optional] 
**longName** | **String** | 正式名称（255文字以内） | [optional] 
**nameKana** | **String** | カナ名称（255文字以内） | [optional] 
**defaultTitle** | **String** | 敬称（御中、様、(空白)の3つから選択） | [optional] 
**phone** | **String** | 電話番号 | [optional] 
**contactName** | **String** | 営業担当者名 | [optional] 
**email** | **String** | 営業担当者 メールアドレス | [optional] 
**addressAttributes** | [**PartnerParamsAddressAttributes**](PartnerParamsAddressAttributes.md) |  | [optional] 
**partnerDocSettingAttributes** | [**PartnerParamsPartnerDocSettingAttributes**](PartnerParamsPartnerDocSettingAttributes.md) |  | [optional] 
**partnerBankAccountAttributes** | [**PartnerParamsPartnerBankAccountAttributes**](PartnerParamsPartnerBankAccountAttributes.md) |  | [optional] 


<a name="DefaultTitleEnum"></a>
## Enum: DefaultTitleEnum


* `empty` (value: `""`)

* `(空白)` (value: `"(空白)"`)

* `御中` (value: `"御中"`)

* `様` (value: `"様"`)





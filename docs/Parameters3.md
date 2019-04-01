# FreeeAccountingClient.Parameters3

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | 事業所の正式名称 (100文字以内) | [optional] 
**nameKana** | **String** | 正式名称フリガナ (100文字以内) | [optional] 
**contactName** | **String** | user1 | [optional] 
**addressAttributes** | [**CompaniesidAddressAttributes**](CompaniesidAddressAttributes.md) |  | [optional] 
**phone1** | **String** | 電話番号１ | [optional] 
**phone2** | **String** | 電話番号２ | [optional] 
**fax** | **String** | FAX | [optional] 
**salesInformationAttributes** | [**CompaniesidSalesInformationAttributes**](CompaniesidSalesInformationAttributes.md) |  | [optional] 
**headCount** | **Number** | 従業員数（0: 経営者のみ、1: 2~5人、2: 6~10人、3: 11~20人、4: 21~30人、5: 31~40人、6: 41~100人、7: 100人以上 | [optional] 
**corporateNumber** | **String** | 法人番号 (半角数字13桁、法人のみ) | [optional] 
**fiscalYearsAttributes** | [**CompaniesidFiscalYearsAttributes**](CompaniesidFiscalYearsAttributes.md) |  | [optional] 
**docTemplate** | [**CompaniesidDocTemplate**](CompaniesidDocTemplate.md) |  | [optional] 
**txnNumberFormat** | **String** | 仕訳番号形式（not_used: 使用しない、digits: 数字（例：5091824）、alnum: 英数字（例：59J0P））Available values : not_used, digits, alnum | [optional] 
**privateSettlement** | **Number** | プライベート資金/役員資金（0: 使用しない、1: 使用する） | [optional] 


<a name="TxnNumberFormatEnum"></a>
## Enum: TxnNumberFormatEnum


* `not_used` (value: `"not_used"`)

* `digits` (value: `"digits"`)

* `alnum` (value: `"alnum"`)





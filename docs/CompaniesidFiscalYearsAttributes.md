# FreeeAccountingClient.CompaniesidFiscalYearsAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useIndustryTemplate** | **Number** | 製造業向け機能（0: 使用しない、1: 使用する） | [optional] 
**indirectWriteOffMethod** | **Number** | 固定資産の控除法（0: 直接控除法、1: 間接控除法） | [optional] 
**indirectWriteOffMethodType** | **Number** | 間接控除時の累計額（0: 共通、1: 資産分類別） | [optional] 
**startDate** | **String** | 期首日 | [optional] 
**endDate** | **String** | 期末日（決算日） | [optional] 
**accountingPeriod** | **Number** | 期 | [optional] 
**depreciationFraction** | **Number** | 減価償却端数処理法(法人のみ)(0: 切り捨て、1: 切り上げ) | [optional] 
**returnCode** | **Number** | 不動産所得使用区分(個人事業主のみ)（0: 使用しない、3: 使用する） | [optional] 
**taxFraction** | **Number** | 消費税端数処理方法（0: 切り上げ、1: 切り捨て, 2: 四捨五入） | [optional] 



# FreeeAccountingClient.SelectablesIndexResponseAccountCategories

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **String** | 収支 | 
**orgCode** | **String** | 事業形態（個人事業主: personal、法人: corporate） | 
**role** | **String** | カテゴリーコード | 
**title** | **String** | カテゴリー名 | 
**desc** | **String** | カテゴリーの説明 | [optional] 
**accountItems** | [**[SelectablesIndexResponseAccountItems]**](SelectablesIndexResponseAccountItems.md) | 勘定科目の一覧 | 


<a name="BalanceEnum"></a>
## Enum: BalanceEnum


* `expense` (value: `"expense"`)

* `income` (value: `"income"`)




<a name="OrgCodeEnum"></a>
## Enum: OrgCodeEnum


* `personal` (value: `"personal"`)

* `corporate` (value: `"corporate"`)





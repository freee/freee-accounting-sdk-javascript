# FreeeAccountingClient.DealsRenews

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | +更新行ID | 
**updateDate** | **String** | 更新日 (yyyy-mm-dd) | 
**renewTargetId** | **Number** | +更新の対象行ID | 
**renewTargetType** | **String** | +更新の対象行タイプ | 
**details** | [**[DealsRenewsDetails]**](DealsRenewsDetails.md) | +更新の明細行一覧（配列） | 


<a name="RenewTargetTypeEnum"></a>
## Enum: RenewTargetTypeEnum


* `detail` (value: `"detail"`)

* `accrual` (value: `"accrual"`)

* `renew` (value: `"renew"`)





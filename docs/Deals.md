# FreeeAccountingClient.Deals

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 取引ID | 
**companyId** | **Number** | 事業所ID | 
**issueDate** | **String** | 発生日 (yyyy-mm-dd) | 
**dueDate** | **String** | 支払期日 (yyyy-mm-dd) | [optional] 
**amount** | **Number** | 金額 | 
**dueAmount** | **Number** | 支払金額 | [optional] 
**type** | **String** | 収支区分 (収入: income, 支出: expense) | [optional] 
**partnerId** | **Number** | 取引先ID | 
**refNumber** | **String** | 管理番号 | [optional] 
**details** | [**[DealsDetails]**](DealsDetails.md) | 取引の明細行 | [optional] 
**renews** | [**[DealsRenews]**](DealsRenews.md) | 取引の+更新行 | [optional] 
**payments** | [**[DealsPayments]**](DealsPayments.md) | 取引の支払行 | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `income` (value: `"income"`)

* `expense` (value: `"expense"`)





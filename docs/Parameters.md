# FreeeAccountingClient.Parameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issueDate** | **String** | 発生日 (yyyy-mm-dd) | 
**type** | **String** | 収支区分 (収入: income, 支出: expense) | 
**companyId** | **Number** | 事業所ID | 
**dueDate** | **String** | 支払期日(yyyy-mm-dd) | [optional] 
**partnerId** | **Number** | 取引先ID | [optional] 
**refNumber** | **String** | 管理番号 | [optional] 
**details** | [**[DealsidDetails]**](DealsidDetails.md) |  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `income` (value: `"income"`)

* `expense` (value: `"expense"`)





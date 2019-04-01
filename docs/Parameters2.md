# FreeeAccountingClient.Parameters2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issueDate** | **String** | 発生日 (yyyy-mm-dd) | 
**type** | **String** | 収支区分 (収入: income, 支出: expense) | 
**companyId** | **Number** | 事業所ID | 
**dueDate** | **String** | 支払期日(yyyy-mm-dd) | [optional] 
**partnerId** | **Number** | 取引先ID | [optional] 
**refNumber** | **String** | 管理番号 | [optional] 
**details** | [**[DealsDetails1]**](DealsDetails1.md) |  | 
**payments** | [**[DealsPayments1]**](DealsPayments1.md) | 支払行一覧（配列）：未指定の場合、未決済の取引を作成します。 | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `income` (value: `"income"`)

* `expense` (value: `"expense"`)





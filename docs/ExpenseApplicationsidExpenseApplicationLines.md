# FreeeAccountingClient.ExpenseApplicationsidExpenseApplicationLines

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 経費申請の項目行ID: 既存項目行を更新する場合に指定します。IDを指定しない項目行は、新規行として扱われ追加されます。また、expense_application_linesに含まれない既存の項目行は削除されます。更新後も残したい行は、必ず経費申請の項目行IDを指定してexpense_application_linesに含めてください。 | [optional] 
**transactionDate** | **String** | 日付 (yyyy-mm-dd) | [optional] 
**description** | **String** | 内容 | [optional] 
**amount** | **Number** | 金額 | [optional] 
**expenseApplicationLineTemplateId** | **Number** | 経費科目ID | [optional] 
**receiptId** | **Number** | 証憑ID | [optional] 



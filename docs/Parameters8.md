# FreeeAccountingClient.Parameters8

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **Number** | 事業所ID | 
**title** | **String** | 申請タイトル | 
**issueDate** | **String** | 申請日 (yyyy-mm-dd) | [optional] 
**description** | **String** | 備考 | [optional] 
**editableOnWeb** | **Boolean** | 会計freeeのWeb画面から申請内容を編集可能：falseの場合、Web上からの項目行の追加／削除・金額の編集が出来なくなります。APIでの編集は可能です。 | [optional] 
**sectionId** | **Number** | 部門ID | [optional] 
**tagIds** | **[Number]** | メモタグID | [optional] 
**expenseApplicationLines** | [**[ExpenseApplicationsidExpenseApplicationLines]**](ExpenseApplicationsidExpenseApplicationLines.md) |  | 



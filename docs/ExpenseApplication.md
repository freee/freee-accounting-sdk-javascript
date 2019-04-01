# FreeeAccountingClient.ExpenseApplication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 経費申請ID | 
**companyId** | **Number** | 事業所ID | 
**title** | **String** | 申請タイトル | 
**issueDate** | **String** | 申請日 (yyyy-mm-dd) | 
**description** | **String** | 備考 | [optional] 
**editableOnWeb** | **Boolean** | 会計freeeのWeb画面から申請内容を編集可能：falseの場合、Web上からの項目行の追加／削除・金額の編集が出来なくなります。APIでの編集は可能です。 | 
**totalAmount** | **Number** | 合計金額 | [optional] 
**status** | **String** | 申請ステータス | 
**sectionId** | **Number** | 部門ID | [optional] 
**tagIds** | **[Number]** | メモタグID | [optional] 
**expenseApplicationLines** | [**[ExpenseApplicationExpenseApplicationLines]**](ExpenseApplicationExpenseApplicationLines.md) | 経費申請の項目行一覧（配列） | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)





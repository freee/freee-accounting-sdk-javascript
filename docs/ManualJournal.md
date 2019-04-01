# FreeeAccountingClient.ManualJournal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 振替伝票ID | 
**companyId** | **Number** | 事業所ID | 
**issueDate** | **String** | 発生日 (yyyy-mm-dd) | 
**adjustment** | **Boolean** | 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳） | 
**details** | [**[ManualJournalDetails]**](ManualJournalDetails.md) | 貸借行一覧（配列）: 貸借合わせて100行まで登録できます。 | 



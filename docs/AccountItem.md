# FreeeAccountingClient.AccountItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 勘定科目ID | 
**name** | **String** | 勘定科目名 (30文字以内) | [optional] 
**companyId** | **Number** | 事業所ID | [optional] 
**taxCode** | **Number** | 税区分ID | [optional] 
**accountCategoryId** | **Number** | 勘定科目のカテゴリーコード | [optional] 
**shortcut** | **String** | ショートカット1 (20文字以内) | [optional] 
**shortcutNum** | **String** | ショートカット2(勘定科目コード) (20文字以内) | [optional] 
**correspondingExpenseName** | **Number** | 支出取引相手勘定科目 | [optional] 
**correspondingIncomeName** | **Number** | 収入取引相手勘定科目 | [optional] 
**searchable** | **Number** | 検索可能:2, 検索不可：3 | [optional] 
**accumulatedDepAccountItemName** | **String** | 減価償却累計額勘定科目 | [optional] 
**items** | [**[AccountItemItems]**](AccountItemItems.md) |  | [optional] 
**partners** | [**[AccountItemPartners]**](AccountItemPartners.md) |  | [optional] 



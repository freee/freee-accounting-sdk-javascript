# FreeeAccountingClient.AccountItemParamsAccountItem

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | 勘定科目名 (30文字以内) | [optional] 
**shortcut** | **String** | ショートカット1 (20文字以内) | [optional] 
**shortcutNum** | **String** | ショートカット2(勘定科目コード)(20文字以内) | [optional] 
**taxName** | **String** | 税区分 | [optional] 
**groupName** | **String** | 決算書表示名 | [optional] 
**accountCategory** | **String** | 勘定科目カテゴリー | [optional] 
**correspondingIncomeName** | **String** | 収入取引相手勘定科目 | [optional] 
**correspondingExpenseName** | **String** | 支出取引相手勘定科目 | [optional] 
**accumulatedDepAccountItemName** | **String** | 減価償却累計額勘定科目 | [optional] 
**searchable** | **Number** | 検索可能:2, 検索不可：3 | [optional] 
**items** | [**[AccountItemParamsAccountItemItems]**](AccountItemParamsAccountItemItems.md) | 品目 | [optional] 
**partners** | [**[AccountItemParamsAccountItemItems]**](AccountItemParamsAccountItemItems.md) | 取引先 | [optional] 



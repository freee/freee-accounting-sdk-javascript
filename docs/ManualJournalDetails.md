# FreeeAccountingClient.ManualJournalDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 貸借行ID | 
**entrySide** | **String** | 貸借(貸方: credit, 借方: debit) | 
**accountItemId** | **Number** | 勘定科目ID | 
**taxCode** | **Number** | 税区分ID | 
**tagIds** | **[Number]** |  | 
**tagNames** | **[String]** |  | 
**segment1TagId** | **Number** | セグメント１ID | [optional] 
**segment1TagName** | **Number** | セグメント１ID | [optional] 
**segment2TagId** | **Number** | セグメント２ID | [optional] 
**segment2TagName** | **Number** | セグメント２ | [optional] 
**segment3TagId** | **Number** | セグメント３ID | [optional] 
**segment3TagName** | **Number** | セグメント３ | [optional] 
**amount** | **Number** | 金額（税込で指定してください） | 
**vat** | **Number** | 消費税額（指定しない場合は自動で計算されます） | 
**description** | **String** | 備考 | 


<a name="EntrySideEnum"></a>
## Enum: EntrySideEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)





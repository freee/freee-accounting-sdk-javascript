# FreeeAccountingClient.DealsDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 取引行ID | 
**accountItemId** | **Number** | 勘定科目ID | 
**taxId** | **Number** | 税区分ID（廃止予定） | [optional] 
**taxCode** | **Number** | 税区分コード | 
**tagIds** | **[Number]** | メモタグID | [optional] 
**amount** | **Number** | 取引金額 | 
**vat** | **Number** | 消費税額 | 
**description** | **String** | 備考 | [optional] 
**entrySide** | **String** | 貸借（貸方: credit, 借方: debit） | 


<a name="EntrySideEnum"></a>
## Enum: EntrySideEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)





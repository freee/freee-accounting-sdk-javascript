# FreeeAccountingClient.DealsRenewsDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | +更新の明細行ID | 
**entrySide** | **String** | 貸借(貸方: credit, 借方: debit) | 
**accountItemId** | **Number** | 勘定科目ID | 
**taxCode** | **Number** | 税区分ID | 
**itemId** | **Number** | 品目ID | 
**sectionId** | **Number** | 部門ID | 
**tagIds** | **[Number]** |  | 
**amount** | **Number** | 金額（税込で指定してください） | 
**vat** | **Number** | 消費税額（指定しない場合は自動で計算されます） | 
**description** | **String** | 備考 | 


<a name="EntrySideEnum"></a>
## Enum: EntrySideEnum


* `credit` (value: `"credit"`)

* `debit` (value: `"debit"`)





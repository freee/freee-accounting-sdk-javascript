# FreeeAccountingClient.InvoicesCreateParamsInvoiceContents

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **Number** | 順序 | 
**type** | **String** | 行の種類 | 
**qty** | **Number** | 数量 | [optional] 
**unit** | **String** | 単位 | [optional] 
**unitPrice** | **Number** | 単価 (tax_entry_method: inclusiveの場合は税込価格、tax_entry_method: exclusiveの場合は税抜価格となります) | [optional] 
**vat** | **Number** | 消費税額 | [optional] 
**description** | **String** | 備考 | [optional] 
**accountItemId** | **Number** | 勘定科目ID | [optional] 
**taxCode** | **Number** | 税区分ID | [optional] 
**itemId** | **Number** | 品目ID | [optional] 
**sectionId** | **Number** | 部門ID | [optional] 
**tagIds** | **[Number]** |  | [optional] 
**segment1TagId** | **Number** | セグメント１ID | [optional] 
**segment2TagId** | **Number** | セグメント２ID | [optional] 
**segment3TagId** | **Number** | セグメント３ID | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `normal` (value: `"normal"`)

* `discount` (value: `"discount"`)

* `text` (value: `"text"`)





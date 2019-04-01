# FreeeAccountingClient.DealsDetails1

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taxCode** | **Number** | 税区分コード | [optional] 
**taxId** | **Number** | 税区分ID（廃止予定。上記tax_codeを使用してください。tax_code, tax_idはどちらかの指定が必須です。） | [optional] 
**accountItemId** | **Number** | 勘定科目ID | 
**amount** | **Number** | 取引金額（税込で指定してください） | 
**itemId** | **Number** | 品目ID | [optional] 
**sectionId** | **Number** | 部門ID | [optional] 
**tagIds** | **[Number]** | メモタグID | [optional] 
**segment1TagId** | **Number** | セグメント１ID | [optional] 
**segment2TagId** | **Number** | セグメント２ID | [optional] 
**segment3TagId** | **Number** | セグメント３ID | [optional] 
**description** | **String** | 備考 | [optional] 
**vat** | **Number** | 消費税額（指定しない場合は自動で計算されます） | [optional] 



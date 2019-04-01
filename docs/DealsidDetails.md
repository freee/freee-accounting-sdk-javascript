# FreeeAccountingClient.DealsidDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 取引行ID: 既存取引行を更新する場合に指定します。IDを指定しない取引行は、新規行として扱われ追加されます。また、detailsに含まれない既存の取引行は削除されます。更新後も残したい行は、必ず取引行IDを指定してdetailsに含めてください。 | [optional] 
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



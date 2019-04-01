# FreeeAccountingClient.ManualJournalsUpdateParamsDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 貸借行ID: 既存貸借行を更新または削除する場合に指定します。IDを指定しない貸借行は、新規行として扱われ追加されます。 | [optional] 
**entrySide** | **String** | 貸借（貸方: credit, 借方: debit） | 
**taxCode** | **Number** | 税区分コード | 
**accountItemId** | **Number** | 勘定科目ID | 
**amount** | **Number** | 取引金額（税込で指定してください） | 
**vat** | **Number** | 消費税額（指定しない場合は自動で計算されます） | [optional] 
**partnerId** | **Number** | 取引先ID | [optional] 
**itemId** | **Number** | 品目ID | [optional] 
**sectionId** | **Number** | 部門ID | [optional] 
**tagIds** | **[Number]** | メモタグID | [optional] 
**segment1TagId** | **Number** | セグメント１ID | [optional] 
**segment2TagId** | **Number** | セグメント２ID | [optional] 
**segment3TagId** | **Number** | セグメント３ID | [optional] 
**description** | **String** | 備考 | [optional] 


<a name="EntrySideEnum"></a>
## Enum: EntrySideEnum


* `debit` (value: `"debit"`)

* `credit` (value: `"credit"`)





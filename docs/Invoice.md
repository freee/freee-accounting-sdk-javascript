# FreeeAccountingClient.Invoice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 請求書ID | 
**companyId** | **Number** | 事業所ID | 
**issueDate** | **String** | 請求日 (yyyy-mm-dd) | 
**invoiceNumber** | **String** | 請求書番号 | [optional] 
**dueDate** | **String** | 期日 (yyyy-mm-dd) | [optional] 
**totalAmount** | **Number** | 合計金額 | 
**totalVat** | **Number** | 合計金額 | [optional] 
**subTotal** | **Number** | 小計 | [optional] 
**invoiceStatus** | **String** | 請求書ステータス  (draft: 下書き, applying: 申請中, approved: 承認済み, issued: 発行済み) | [optional] 
**paymentStatus** | **String** | 入金ステータス  (unsettled: 入金待ち, settled: 入金済み) | [optional] 
**postingStatus** | **String** | 郵送ステータス(unrequested: リクエスト前, preview_registered: プレビュー登録, preview_failed: プレビュー登録失敗, ordered: 注文中, order_failed: 注文失敗, printing: 印刷中, canceled: キャンセル, posted: 投函済み) | [optional] 
**companyName** | **String** | 事業所名 | [optional] 
**paymentType** | **String** | 支払方法 (振込: transfer, 引き落とし: direct_debit) | [optional] 
**invoiceLayout** | **String** | レイアウト(default_classic: レイアウト１/クラシック, standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) | [optional] 
**taxEntryMethod** | **String** | 請求書の消費税計算方法(inclusive: 内税, exclusive: 外税) | [optional] 
**invoiceContents** | [**[InvoiceInvoiceContents]**](InvoiceInvoiceContents.md) | 請求内容 | [optional] 


<a name="InvoiceStatusEnum"></a>
## Enum: InvoiceStatusEnum


* `draft` (value: `"draft"`)

* `applying` (value: `"applying"`)

* `approved` (value: `"approved"`)

* `issued` (value: `"issued"`)




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `empty` (value: `""`)

* `unsettled` (value: `"unsettled"`)

* `settled` (value: `"settled"`)




<a name="PostingStatusEnum"></a>
## Enum: PostingStatusEnum


* `empty` (value: `""`)

* `unrequested` (value: `"unrequested"`)

* `preview_registered` (value: `"preview_registered"`)

* `preview_failed` (value: `"preview_failed"`)

* `ordered` (value: `"ordered"`)

* `order_failed` (value: `"order_failed"`)

* `printing` (value: `"printing"`)

* `canceled` (value: `"canceled"`)

* `posted` (value: `"posted"`)




<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum


* `empty` (value: `""`)

* `transfer` (value: `"transfer"`)

* `direct_debit` (value: `"direct_debit"`)




<a name="InvoiceLayoutEnum"></a>
## Enum: InvoiceLayoutEnum


* `default_classic` (value: `"default_classic"`)

* `standard_classic` (value: `"standard_classic"`)

* `envelope_classic` (value: `"envelope_classic"`)

* `carried_forward_standard_classic` (value: `"carried_forward_standard_classic"`)

* `carried_forward_envelope_classic` (value: `"carried_forward_envelope_classic"`)

* `default_modern` (value: `"default_modern"`)

* `standard_modern` (value: `"standard_modern"`)

* `envelope_modern` (value: `"envelope_modern"`)




<a name="TaxEntryMethodEnum"></a>
## Enum: TaxEntryMethodEnum


* `empty` (value: `""`)

* `inclusive` (value: `"inclusive"`)

* `exclusive` (value: `"exclusive"`)





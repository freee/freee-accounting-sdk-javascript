# FreeeAccountingClient.InvoicesUpdateParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companyId** | **Number** | 事業所ID | 
**issueDate** | **String** | 請求日 (yyyy-mm-dd) | [optional] 
**partnerId** | **Number** | 取引先ID | [optional] 
**invoiceNumber** | **String** | 請求書番号 (デフォルト: 自動採番されます) | [optional] 
**title** | **String** | タイトル (デフォルト: 請求書) | [optional] 
**dueDate** | **String** | 期日 (yyyy-mm-dd) | [optional] 
**bookingDate** | **String** | 売上計上日 | [optional] 
**description** | **String** | 概要 | [optional] 
**invoiceStatus** | **String** | 請求書ステータス  (draft: 下書き (デフォルト), issue: 発行(請求先WFを利用している場合はWFに乗ります)) | [optional] 
**partnerName** | **String** | 取引先名 | [optional] 
**partnerTitle** | **String** | 敬称（御中、様、(空白)の3つから選択） | [optional] 
**partnerContactInfo** | **String** | 取引先担当者名 | [optional] 
**companyName** | **String** | 事業所名 (デフォルトは事業所設定情報が補完されます) | [optional] 
**companyZipcode** | **String** | 郵便番号 (デフォルトは事業所設定情報が補完されます) | [optional] 
**companyPrefectureCode** | **Number** | 都道府県コード（0:北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄) (デフォルトは事業所設定情報が補完されます) | [optional] 
**companyAddress1** | **String** | 市区町村・番地 (デフォルトは事業所設定情報が補完されます) | [optional] 
**companyAddress2** | **String** | 建物名・部屋番号など (デフォルトは事業所設定情報が補完されます) | [optional] 
**companyContactInfo** | **String** | 事業所担当者名 (デフォルトは事業所設定情報が補完されます) | [optional] 
**paymentType** | **String** | 支払方法 (振込: transfer, 引き落とし: direct_debit) | [optional] 
**paymentBankInfo** | **String** | 支払口座 | [optional] 
**useVirtualTransferAccount** | **String** | 振込専用口座の利用(利用しない: not_use(デフォルト), 利用する: use) | [optional] 
**message** | **String** | メッセージ (デフォルト: 下記の通りご請求申し上げます。) | [optional] 
**notes** | **String** | 備考 | [optional] 
**invoiceLayout** | **String** | レイアウト(default_classic: レイアウト１/クラシック (デフォルト), standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン) | [optional] 
**taxEntryMethod** | **String** | 請求書の消費税計算方法(inclusive: 内税表示 (デフォルト), exclusive: 外税表示) | [optional] 
**invoiceContents** | [**[InvoicesUpdateParamsInvoiceContents]**](InvoicesUpdateParamsInvoiceContents.md) | 請求内容 | [optional] 


<a name="InvoiceStatusEnum"></a>
## Enum: InvoiceStatusEnum


* `draft` (value: `"draft"`)

* `issue` (value: `"issue"`)




<a name="PartnerTitleEnum"></a>
## Enum: PartnerTitleEnum


* `御中` (value: `"御中"`)

* `様` (value: `"様"`)

* `(空白)` (value: `"(空白)"`)




<a name="PaymentTypeEnum"></a>
## Enum: PaymentTypeEnum


* `transfer` (value: `"transfer"`)

* `direct_debit` (value: `"direct_debit"`)




<a name="UseVirtualTransferAccountEnum"></a>
## Enum: UseVirtualTransferAccountEnum


* `not_use` (value: `"not_use"`)

* `use` (value: `"use"`)




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


* `inclusive` (value: `"inclusive"`)

* `exclusive` (value: `"exclusive"`)





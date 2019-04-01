# FreeeAccountingClient.CompaniesUpdateResponseCompany

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 事業所ID | 
**displayName** | **String** | 事業所名 | 
**taxAtSourceCalcType** | **Number** | 源泉徴収税計算（0: 消費税を含める、1: 消費税を含めない） | 
**corporateNumber** | **String** | 法人番号 (半角数字13桁、法人のみ) | 
**txnNumberFormat** | **String** | 仕訳番号形式（not_used: 使用しない、digits: 数字（例：5091824）、alnum: 英数字（例：59J0P）） | 
**defaultWalletAccountId** | **Number** | 決済口座のデフォルト | [optional] 
**privateSettlement** | **Boolean** | プライベート資金/役員資金（false: 使用しない、true: 使用する） | 
**minusFormat** | **Number** | マイナスの表示方法（0: -、 1: △） | 
**role** | **String** | ユーザーの権限 | 
**phone1** | **String** | 電話番号１ | 
**zipcode** | **String** | 郵便番号 | 
**prefectureCode** | **Number** | 都道府県コード（0: 北海道、1:青森、2:岩手、3:宮城、4:秋田、5:山形、6:福島、7:茨城、8:栃木、9:群馬、10:埼玉、11:千葉、12:東京、13:神奈川、14:新潟、15:富山、16:石川、17:福井、18:山梨、19:長野お、20:岐阜、21:静岡、22:愛知、23:三重、24:滋賀、25:京都、26:大阪、27:兵庫、28:奈良、29:和歌山、30:鳥取、31:島根、32:岡山、33:広島、34:山口、35:徳島、36:香川、37:愛媛、38:高知、39:福岡、40:佐賀、41:長崎、42:熊本、43:大分、44:宮崎、45:鹿児島、46:沖縄 | 
**streetName1** | **String** | 市区町村・番地 | 
**streetName2** | **String** | 建物名・部屋番号など | 
**invoiceLayout** | **Number** | レイアウト(0: レイアウト1, 1:レイアウト2, 3:封筒1, 4:レイアウト3(繰越金額欄あり), 5: 封筒2(繰越金額欄あり)) | 
**invoiceStyle** | **Number** | スタイル(0: クラシック, 1: モダン) | 
**amountFraction** | **Number** | 金額端数処理方法（0: 切り捨て、1: 切り上げ、2: 四捨五入） | 
**industryClass** | **String** | 種別（agriculture_forestry_fisheries_ore: 農林水産業/鉱業、construction: 建設、manufacturing_processing: 製造/加工、it: IT、transportation_logistics: 運輸/物流、retail_wholesale: 小売/卸売、finance_insurance: 金融/保険、real_estate_rental: 不動産/レンタル、profession: 士業/学術/専門技術サービス、design_production: デザイン/制作、food: 飲食、leisure_entertainment: レジャー/娯楽、lifestyle: 生活関連サービス、education: 教育/学習支援、medical_welfare: 医療/福祉、other_services: その他サービス、other: その他） | 
**industryCode** | **String** | コード（transport_delivery: 輸送業/配送業、delivery: バイク便等の配達業、other_transportation_logistics: その他の運輸業、物流業） | 
**workflowSetting** | **String** | 仕訳承認フロー（enable: 有効、 disable: 無効） | 
**fiscalYears** | [**[FiscalYears]**](FiscalYears.md) |  | [optional] 


<a name="TxnNumberFormatEnum"></a>
## Enum: TxnNumberFormatEnum


* `not_used` (value: `"not_used"`)

* `digits` (value: `"digits"`)

* `alnum` (value: `"alnum"`)




<a name="RoleEnum"></a>
## Enum: RoleEnum


* `admin` (value: `"admin"`)

* `simple_accounting` (value: `"simple_accounting"`)

* `self_only` (value: `"self_only"`)

* `read_only` (value: `"read_only"`)




<a name="IndustryClassEnum"></a>
## Enum: IndustryClassEnum


* `empty` (value: `""`)

* `agriculture_forestry_fisheries_ore` (value: `"agriculture_forestry_fisheries_ore"`)

* `construction` (value: `"construction"`)

* `manufacturing_processing` (value: `"manufacturing_processing"`)

* `it` (value: `"it"`)

* `transportation_logistics` (value: `"transportation_logistics"`)

* `retail_wholesale` (value: `"retail_wholesale"`)

* `finance_insurance` (value: `"finance_insurance"`)

* `real_estate_rental` (value: `"real_estate_rental"`)

* `profession` (value: `"profession"`)

* `design_production` (value: `"design_production"`)

* `food` (value: `"food"`)

* `lifestyle` (value: `"lifestyle"`)

* `education` (value: `"education"`)

* `medical_welfare` (value: `"medical_welfare"`)

* `other_services` (value: `"other_services"`)

* `other` (value: `"other"`)




<a name="IndustryCodeEnum"></a>
## Enum: IndustryCodeEnum


* `empty` (value: `""`)

* `transport_delivery` (value: `"transport_delivery"`)

* `delivery` (value: `"delivery"`)

* `other_transportation_logistics` (value: `"other_transportation_logistics"`)




<a name="WorkflowSettingEnum"></a>
## Enum: WorkflowSettingEnum


* `enable` (value: `"enable"`)

* `disable` (value: `"disable"`)





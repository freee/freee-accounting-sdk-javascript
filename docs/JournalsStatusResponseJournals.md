# FreeeAccountingClient.JournalsStatusResponseJournals

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 受け付けID | 
**companyId** | **Number** | 事業所ID | 
**downloadType** | **String** | ダウンロード形式 | 
**status** | **String** | 事業所ID | 
**startDate** | **String** | 取得開始日 (yyyy-mm-dd) | 
**endDate** | **String** | 取得終了日 (yyyy-mm-dd) | 
**visibleTags** | **[String]** |  | 
**downloadUrl** | **String** | ダウンロードURL | [optional] 


<a name="DownloadTypeEnum"></a>
## Enum: DownloadTypeEnum


* `csv` (value: `"csv"`)

* `generic` (value: `"generic"`)

* `pdf` (value: `"pdf"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `enqueued` (value: `"enqueued"`)

* `working` (value: `"working"`)

* `uploaded` (value: `"uploaded"`)

* `failed` (value: `"failed"`)




<a name="[VisibleTagsEnum]"></a>
## Enum: [VisibleTagsEnum]


* `partner` (value: `"partner"`)

* `item` (value: `"item"`)

* `tag` (value: `"tag"`)

* `section` (value: `"section"`)

* `description` (value: `"description"`)

* `wallet_txn_description` (value: `"wallet_txn_description"`)

* `all` (value: `"all"`)





# FreeeAccountingClient.JournalsEnqueueJournalsResponseJournals

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 受け付けID | 
**messages** | **String** | 受け付けメッセージ | [optional] 
**companyId** | **Number** | 事業所ID | 
**downloadType** | **String** | ダウンロード形式 | [optional] 
**startDate** | **String** | 取得開始日 (yyyy-mm-dd) | [optional] 
**endDate** | **String** | 取得終了日 (yyyy-mm-dd) | [optional] 
**visibleTags** | **[String]** |  | [optional] 
**statusUrl** | **String** | ステータス確認用URL | [optional] 


<a name="DownloadTypeEnum"></a>
## Enum: DownloadTypeEnum


* `csv` (value: `"csv"`)

* `generic` (value: `"generic"`)

* `pdf` (value: `"pdf"`)




<a name="[VisibleTagsEnum]"></a>
## Enum: [VisibleTagsEnum]


* `partner` (value: `"partner"`)

* `item` (value: `"item"`)

* `tag` (value: `"tag"`)

* `section` (value: `"section"`)

* `description` (value: `"description"`)

* `wallet_txn_description` (value: `"wallet_txn_description"`)

* `all` (value: `"all"`)





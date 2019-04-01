# FreeeAccountingClient.ReceiptCreateResponseReceipt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | 証憑ID | 
**status** | **String** | ステータス | 
**issueDate** | **String** | 発生日 | [optional] 
**origin** | **String** | アップロード元種別 | 
**createdAt** | **String** | 作成日時（ISO8601形式） | 
**user** | [**ReceiptCreateResponseReceiptUser**](ReceiptCreateResponseReceiptUser.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `unconfirmed` (value: `"unconfirmed"`)

* `confirmed` (value: `"confirmed"`)

* `deleted` (value: `"deleted"`)

* `ignored` (value: `"ignored"`)




<a name="OriginEnum"></a>
## Enum: OriginEnum


* `unknown` (value: `"unknown"`)

* `web` (value: `"web"`)

* `mobile_camera` (value: `"mobile_camera"`)

* `mobile_album` (value: `"mobile_album"`)

* `scansnap` (value: `"scansnap"`)

* `scannable` (value: `"scannable"`)

* `dropbox` (value: `"dropbox"`)

* `mail` (value: `"mail"`)

* `safety_contact_file` (value: `"safety_contact_file"`)

* `public_api` (value: `"public_api"`)





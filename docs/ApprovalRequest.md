# FreeeAccountingClient.ApprovalRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | その他申請ID | 
**companyId** | **Number** | 事業所ID | 
**issueDate** | **String** | 申請日 (yyyy-mm-dd) | 
**title** | **String** | 申請タイトル | 
**applicantId** | **Number** | 申請者ID | 
**approverId** | **Number** | 承認者ID | 
**applicationNumber** | **String** | 申請No. | 
**status** | **String** | 申請ステータス | 
**requestItems** | [**[ApprovalRequestRequestItems]**](ApprovalRequestRequestItems.md) | その他申請の項目一覧（配列） | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `draft` (value: `"draft"`)





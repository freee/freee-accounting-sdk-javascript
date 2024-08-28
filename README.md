# このリポジトリは 2024 年 9 月にサポートを終了します。 詳細は「[freee 会計 SDK / freee-accounting-sdk-javascript のメンテナンス終了について](https://developer.freee.co.jp/news/7128)」をご覧ください。

## Installation

use npm

```shell
npm install freee-accounting-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false,
      },
    },
  ];
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var FreeeAccountingClient = require("freee-accounting-client");

var defaultClient = FreeeAccountingClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications["oauth2"];
oauth2.accessToken = accessToken; // assign access token here.

var api = new FreeeAccountingClient.AccountItemsApi();

var parameters = new FreeeAccountingClient.AccountItemParams(); // {AccountItemParams} 勘定科目の作成

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
api.createAccountItem(parameters, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.freee.co.jp/api/1*

| Class                                                      | Method                                                                                                                  | HTTP request                                 | Description                               |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------- |
| _FreeeAccountingClient.AccountItemsApi_                    | [**createAccountItem**](docs/AccountItemsApi.md#createAccountItem)                                                      | **POST** /account_items                      | 勘定科目の作成                            |
| _FreeeAccountingClient.AccountItemsApi_                    | [**getAccountItem**](docs/AccountItemsApi.md#getAccountItem)                                                            | **GET** /account_items/{id}                  | 勘定科目の詳細情報の取得                  |
| _FreeeAccountingClient.AccountItemsApi_                    | [**getAccountItems**](docs/AccountItemsApi.md#getAccountItems)                                                          | **GET** /account_items                       | 勘定科目一覧の取得                        |
| _FreeeAccountingClient.AccountItemsApi_                    | [**updateAccountItem**](docs/AccountItemsApi.md#updateAccountItem)                                                      | **PUT** /account_items/{id}                  | 勘定科目の更新                            |
| _FreeeAccountingClient.BanksApi_                           | [**getBanks**](docs/BanksApi.md#getBanks)                                                                               | **GET** /banks                               | 連携サービス一覧の取得                    |
| _FreeeAccountingClient.CompaniesApi_                       | [**getCompanies**](docs/CompaniesApi.md#getCompanies)                                                                   | **GET** /companies                           | 事業所一覧の取得                          |
| _FreeeAccountingClient.CompaniesApi_                       | [**getCompany**](docs/CompaniesApi.md#getCompany)                                                                       | **GET** /companies/{id}                      | 事業所の詳細情報の取得                    |
| _FreeeAccountingClient.CompaniesApi_                       | [**updateCompany**](docs/CompaniesApi.md#updateCompany)                                                                 | **PUT** /companies/{id}                      | 事業所情報の更新                          |
| _FreeeAccountingClient.DealsApi_                           | [**createDeal**](docs/DealsApi.md#createDeal)                                                                           | **POST** /deals                              | 取引（収入／支出）の作成                  |
| _FreeeAccountingClient.DealsApi_                           | [**getDeal**](docs/DealsApi.md#getDeal)                                                                                 | **GET** /deals/{id}                          | 取引（収入／支出）の取得                  |
| _FreeeAccountingClient.DealsApi_                           | [**getDeals**](docs/DealsApi.md#getDeals)                                                                               | **GET** /deals                               | 取引（収入／支出）一覧の取得              |
| _FreeeAccountingClient.DealsApi_                           | [**updateDeal**](docs/DealsApi.md#updateDeal)                                                                           | **PUT** /deals/{id}                          | 取引（収入／支出）の更新                  |
| _FreeeAccountingClient.ExpenseApplicationLineTemplatesApi_ | [**getExpenseApplicationLineTemplates**](docs/ExpenseApplicationLineTemplatesApi.md#getExpenseApplicationLineTemplates) | **GET** /expense_application_line_templates  | 経費科目一覧の取得                        |
| _FreeeAccountingClient.ExpenseApplicationsApi_             | [**createExpenseApplication**](docs/ExpenseApplicationsApi.md#createExpenseApplication)                                 | **POST** /expense_applications               | 経費申請の作成                            |
| _FreeeAccountingClient.ExpenseApplicationsApi_             | [**destroyExpenseApplication**](docs/ExpenseApplicationsApi.md#destroyExpenseApplication)                               | **DELETE** /expense_applications/{id}        | 経費申請の削除                            |
| _FreeeAccountingClient.ExpenseApplicationsApi_             | [**updateExpenseApplication**](docs/ExpenseApplicationsApi.md#updateExpenseApplication)                                 | **PUT** /expense_applications/{id}           | 経費申請の更新                            |
| _FreeeAccountingClient.InvoicesApi_                        | [**destroyInvoice**](docs/InvoicesApi.md#destroyInvoice)                                                                | **DELETE** /invoices/{id}                    | 請求書の削除                              |
| _FreeeAccountingClient.InvoicesApi_                        | [**updateInvoice**](docs/InvoicesApi.md#updateInvoice)                                                                  | **PUT** /invoices/{id}                       | 請求書の更新                              |
| _FreeeAccountingClient.ItemsApi_                           | [**createItem**](docs/ItemsApi.md#createItem)                                                                           | **POST** /items                              | 品目の作成                                |
| _FreeeAccountingClient.ItemsApi_                           | [**getItems**](docs/ItemsApi.md#getItems)                                                                               | **GET** /items                               | 品目一覧の取得                            |
| _FreeeAccountingClient.JournalsApi_                        | [**downloadJournal**](docs/JournalsApi.md#downloadJournal)                                                              | **GET** /journals/reports/{id}/download      | ダウンロード実行                          |
| _FreeeAccountingClient.JournalsApi_                        | [**getJournalStatus**](docs/JournalsApi.md#getJournalStatus)                                                            | **GET** /journals/reports/{id}/status        | ステータス確認                            |
| _FreeeAccountingClient.JournalsApi_                        | [**getJournals**](docs/JournalsApi.md#getJournals)                                                                      | **GET** /journals                            | ダウンロード要求                          |
| _FreeeAccountingClient.ManualJournalsApi_                  | [**createManualJournal**](docs/ManualJournalsApi.md#createManualJournal)                                                | **POST** /manual_journals                    | 振替伝票の作成                            |
| _FreeeAccountingClient.ManualJournalsApi_                  | [**destroyManualJournal**](docs/ManualJournalsApi.md#destroyManualJournal)                                              | **DELETE** /manual_journals/{id}             | 振替伝票の削除                            |
| _FreeeAccountingClient.ManualJournalsApi_                  | [**getManualJournal**](docs/ManualJournalsApi.md#getManualJournal)                                                      | **GET** /manual_journals/{id}                | 振替伝票の取得                            |
| _FreeeAccountingClient.ManualJournalsApi_                  | [**getManualJournals**](docs/ManualJournalsApi.md#getManualJournals)                                                    | **GET** /manual_journals                     | 振替伝票一覧の取得                        |
| _FreeeAccountingClient.ManualJournalsApi_                  | [**updateManualJournal**](docs/ManualJournalsApi.md#updateManualJournal)                                                | **PUT** /manual_journals/{id}                | 振替伝票の更新                            |
| _FreeeAccountingClient.PartnersApi_                        | [**createPartner**](docs/PartnersApi.md#createPartner)                                                                  | **POST** /partners                           | 取引先の作成                              |
| _FreeeAccountingClient.PartnersApi_                        | [**getPartners**](docs/PartnersApi.md#getPartners)                                                                      | **GET** /partners                            | 取引先一覧の取得                          |
| _FreeeAccountingClient.PartnersApi_                        | [**updatePartner**](docs/PartnersApi.md#updatePartner)                                                                  | **PUT** /partners/{id}                       | 取引先の更新                              |
| _FreeeAccountingClient.PaymentsApi_                        | [**createDealPayment**](docs/PaymentsApi.md#createDealPayment)                                                          | **POST** /deals/{id}/payments                | 取引（収入／支出）の支払行作成            |
| _FreeeAccountingClient.PaymentsApi_                        | [**destroyDealPayment**](docs/PaymentsApi.md#destroyDealPayment)                                                        | **DELETE** /deals/{id}/payments/{payment_id} | 取引（収入／支出）の支払行削除            |
| _FreeeAccountingClient.PaymentsApi_                        | [**updateDealPayment**](docs/PaymentsApi.md#updateDealPayment)                                                          | **PUT** /deals/{id}/payments/{payment_id}    | 取引（収入／支出）の支払行更新            |
| _FreeeAccountingClient.ReceiptsApi_                        | [**createReceipt**](docs/ReceiptsApi.md#createReceipt)                                                                  | **POST** /receipts                           | ファイルボックス 証憑ファイルアップロード |
| _FreeeAccountingClient.RenewsApi_                          | [**createDealRenew**](docs/RenewsApi.md#createDealRenew)                                                                | **POST** /deals/{id}/renews                  | 取引（収入／支出）に対する+更新の作成     |
| _FreeeAccountingClient.RenewsApi_                          | [**deleteDealRenew**](docs/RenewsApi.md#deleteDealRenew)                                                                | **DELETE** /deals/{id}/renews/{renew_id}     | 取引（収入／支出）の+更新の削除           |
| _FreeeAccountingClient.RenewsApi_                          | [**updateDealRenew**](docs/RenewsApi.md#updateDealRenew)                                                                | **PUT** /deals/{id}/renews/{renew_id}        | 取引（収入／支出）の+更新の更新           |
| _FreeeAccountingClient.SectionsApi_                        | [**createSection**](docs/SectionsApi.md#createSection)                                                                  | **POST** /sections                           | 部門の作成                                |
| _FreeeAccountingClient.SectionsApi_                        | [**destroySection**](docs/SectionsApi.md#destroySection)                                                                | **DELETE** /sections/{id}                    | 部門の削除                                |
| _FreeeAccountingClient.SectionsApi_                        | [**getSections**](docs/SectionsApi.md#getSections)                                                                      | **GET** /sections                            | 部門一覧の取得                            |
| _FreeeAccountingClient.SectionsApi_                        | [**updateSection**](docs/SectionsApi.md#updateSection)                                                                  | **PUT** /sections/{id}                       | 部門の更新                                |
| _FreeeAccountingClient.SegmentTagsApi_                     | [**createSegmentTag**](docs/SegmentTagsApi.md#createSegmentTag)                                                         | **POST** /segments/{segment_id}/tags         | セグメントの作成                          |
| _FreeeAccountingClient.SegmentTagsApi_                     | [**destroySegmentsTag**](docs/SegmentTagsApi.md#destroySegmentsTag)                                                     | **DELETE** /segments/{segment_id}/tags/{id}  | セグメントタグの削除                      |
| _FreeeAccountingClient.SegmentTagsApi_                     | [**getSegmentTags**](docs/SegmentTagsApi.md#getSegmentTags)                                                             | **GET** /segments/{segment_id}/tags          | セグメントタグ一覧の取得                  |
| _FreeeAccountingClient.SegmentTagsApi_                     | [**updateSegmentTag**](docs/SegmentTagsApi.md#updateSegmentTag)                                                         | **PUT** /segments/{segment_id}/tags/{id}     | セグメントタグの更新                      |
| _FreeeAccountingClient.SelectablesApi_                     | [**getFormsSelectables**](docs/SelectablesApi.md#getFormsSelectables)                                                   | **GET** /forms/selectables                   | フォーム用選択項目情報の取得              |
| _FreeeAccountingClient.TagsApi_                            | [**createTag**](docs/TagsApi.md#createTag)                                                                              | **POST** /tags                               | メモタグの作成                            |
| _FreeeAccountingClient.TagsApi_                            | [**getTags**](docs/TagsApi.md#getTags)                                                                                  | **GET** /tags                                | メモタグ一覧の取得                        |
| _FreeeAccountingClient.TaxesApi_                           | [**getTaxCodes**](docs/TaxesApi.md#getTaxCodes)                                                                         | **GET** /taxes/codes                         | 税区分コード一覧の取得                    |
| _FreeeAccountingClient.TaxesApi_                           | [**getTaxes**](docs/TaxesApi.md#getTaxes)                                                                               | **GET** /taxes                               | 税区分一覧の取得 (deprecated)             |
| _FreeeAccountingClient.TransfersApi_                       | [**createTransfer**](docs/TransfersApi.md#createTransfer)                                                               | **POST** /transfers                          | 取引（振替）の作成                        |
| _FreeeAccountingClient.TransfersApi_                       | [**getTransfers**](docs/TransfersApi.md#getTransfers)                                                                   | **GET** /transfers                           | 取引（振替）一覧の取得                    |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialBs**](docs/TrialBalanceApi.md#getTrialBs)                                                                    | **GET** /reports/trial_bs                    | 貸借対照表の取得                          |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialBsThreeYears**](docs/TrialBalanceApi.md#getTrialBsThreeYears)                                                | **GET** /reports/trial_bs_three_years        | 貸借対照表(３期間比較)の取得              |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialBsTwoYears**](docs/TrialBalanceApi.md#getTrialBsTwoYears)                                                    | **GET** /reports/trial_bs_two_years          | 貸借対照表(前年比較)の取得                |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialPl**](docs/TrialBalanceApi.md#getTrialPl)                                                                    | **GET** /reports/trial_pl                    | 損益計算書の取得                          |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialPlSections**](docs/TrialBalanceApi.md#getTrialPlSections)                                                    | **GET** /reports/trial_pl_sections           | 損益計算書(部門比較)の取得                |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialPlThreeYears**](docs/TrialBalanceApi.md#getTrialPlThreeYears)                                                | **GET** /reports/trial_pl_three_years        | 損益計算書(３期間比較)の取得              |
| _FreeeAccountingClient.TrialBalanceApi_                    | [**getTrialPlTwoYears**](docs/TrialBalanceApi.md#getTrialPlTwoYears)                                                    | **GET** /reports/trial_pl_two_years          | 損益計算書(前年比較)の取得                |
| _FreeeAccountingClient.UsersApi_                           | [**getUsersCapabilities**](docs/UsersApi.md#getUsersCapabilities)                                                       | **GET** /users/capabilities                  | ログインユーザの権限の取得                |
| _FreeeAccountingClient.UsersApi_                           | [**getUsersMe**](docs/UsersApi.md#getUsersMe)                                                                           | **GET** /users/me                            | ログインユーザ情報の取得                  |
| _FreeeAccountingClient.WalletTxnsApi_                      | [**createWalletTxn**](docs/WalletTxnsApi.md#createWalletTxn)                                                            | **POST** /wallet_txns                        | 明細の作成                                |
| _FreeeAccountingClient.WalletTxnsApi_                      | [**getWalletTxns**](docs/WalletTxnsApi.md#getWalletTxns)                                                                | **GET** /wallet_txns                         | 明細一覧の取得                            |
| _FreeeAccountingClient.WalletablesApi_                     | [**createWalletable**](docs/WalletablesApi.md#createWalletable)                                                         | **POST** /walletables                        | 口座の作成                                |
| _FreeeAccountingClient.WalletablesApi_                     | [**getWalletables**](docs/WalletablesApi.md#getWalletables)                                                             | **GET** /walletables                         | 口座一覧の取得                            |

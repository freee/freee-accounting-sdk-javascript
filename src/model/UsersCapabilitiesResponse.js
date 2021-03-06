/**
 * freee API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UsersCapability'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UsersCapability'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.UsersCapabilitiesResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.UsersCapability);
  }
}(this, function(ApiClient, UsersCapability) {
  'use strict';




  /**
   * The UsersCapabilitiesResponse model module.
   * @module model/UsersCapabilitiesResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>UsersCapabilitiesResponse</code>.
   * @alias module:model/UsersCapabilitiesResponse
   * @class
   * @param walletTxns {module:model/UsersCapability} 
   * @param deals {module:model/UsersCapability} 
   * @param transfers {module:model/UsersCapability} 
   * @param docs {module:model/UsersCapability} 
   * @param docPostings {module:model/UsersCapability} 
   * @param receipts {module:model/UsersCapability} 
   * @param receiptStreamEditor {module:model/UsersCapability} 
   * @param expenseApplications {module:model/UsersCapability} 
   * @param spreadsheets {module:model/UsersCapability} 
   * @param paymentRequests {module:model/UsersCapability} 
   * @param requestForms {module:model/UsersCapability} 
   * @param approvalRequests {module:model/UsersCapability} 
   * @param reports {module:model/UsersCapability} 
   * @param reportsIncomeExpense {module:model/UsersCapability} 
   * @param reportsReceivables {module:model/UsersCapability} 
   * @param reportsPayables {module:model/UsersCapability} 
   * @param reportsCashBalance {module:model/UsersCapability} 
   * @param reportsCrosstabs {module:model/UsersCapability} 
   * @param reportsGeneralLedgers {module:model/UsersCapability} 
   * @param reportsPl {module:model/UsersCapability} 
   * @param reportsBs {module:model/UsersCapability} 
   * @param reportsJournals {module:model/UsersCapability} 
   * @param reportsManagementsPlanning {module:model/UsersCapability} 
   * @param reportsManagementsNavigation {module:model/UsersCapability} 
   * @param manualJournals {module:model/UsersCapability} 
   * @param fixedAssets {module:model/UsersCapability} 
   * @param inventoryRefreshes {module:model/UsersCapability} 
   * @param bizAllocations {module:model/UsersCapability} 
   * @param paymentRecords {module:model/UsersCapability} 
   * @param annualReports {module:model/UsersCapability} 
   * @param taxReports {module:model/UsersCapability} 
   * @param consumptionEntries {module:model/UsersCapability} 
   * @param taxReturn {module:model/UsersCapability} 
   * @param accountItemStatements {module:model/UsersCapability} 
   * @param monthEnd {module:model/UsersCapability} 
   * @param yearEnd {module:model/UsersCapability} 
   * @param walletables {module:model/UsersCapability} 
   * @param companies {module:model/UsersCapability} 
   * @param invitations {module:model/UsersCapability} 
   * @param signInLogs {module:model/UsersCapability} 
   * @param backups {module:model/UsersCapability} 
   * @param openingBalances {module:model/UsersCapability} 
   * @param systemConversion {module:model/UsersCapability} 
   * @param resets {module:model/UsersCapability} 
   * @param partners {module:model/UsersCapability} 
   * @param items {module:model/UsersCapability} 
   * @param sections {module:model/UsersCapability} 
   * @param tags {module:model/UsersCapability} 
   * @param accountItems {module:model/UsersCapability} 
   * @param taxes {module:model/UsersCapability} 
   * @param userMatchers {module:model/UsersCapability} 
   * @param dealTemplates {module:model/UsersCapability} 
   * @param manualJournalTemplates {module:model/UsersCapability} 
   * @param costAllocations {module:model/UsersCapability} 
   * @param approvalFlowRoutes {module:model/UsersCapability} 
   * @param expenseApplicationTemplates {module:model/UsersCapability} 
   * @param workflows {module:model/UsersCapability} 
   * @param oauthApplications {module:model/UsersCapability} 
   * @param oauthAuthorizations {module:model/UsersCapability} 
   * @param bankAccountantStaffUsers {module:model/UsersCapability} 
   */
  var exports = function(walletTxns, deals, transfers, docs, docPostings, receipts, receiptStreamEditor, expenseApplications, spreadsheets, paymentRequests, requestForms, approvalRequests, reports, reportsIncomeExpense, reportsReceivables, reportsPayables, reportsCashBalance, reportsCrosstabs, reportsGeneralLedgers, reportsPl, reportsBs, reportsJournals, reportsManagementsPlanning, reportsManagementsNavigation, manualJournals, fixedAssets, inventoryRefreshes, bizAllocations, paymentRecords, annualReports, taxReports, consumptionEntries, taxReturn, accountItemStatements, monthEnd, yearEnd, walletables, companies, invitations, signInLogs, backups, openingBalances, systemConversion, resets, partners, items, sections, tags, accountItems, taxes, userMatchers, dealTemplates, manualJournalTemplates, costAllocations, approvalFlowRoutes, expenseApplicationTemplates, workflows, oauthApplications, oauthAuthorizations, bankAccountantStaffUsers) {
    var _this = this;

    _this['wallet_txns'] = walletTxns;
    _this['deals'] = deals;
    _this['transfers'] = transfers;
    _this['docs'] = docs;
    _this['doc_postings'] = docPostings;
    _this['receipts'] = receipts;
    _this['receipt_stream_editor'] = receiptStreamEditor;
    _this['expense_applications'] = expenseApplications;
    _this['spreadsheets'] = spreadsheets;
    _this['payment_requests'] = paymentRequests;
    _this['request_forms'] = requestForms;
    _this['approval_requests'] = approvalRequests;
    _this['reports'] = reports;
    _this['reports_income_expense'] = reportsIncomeExpense;
    _this['reports_receivables'] = reportsReceivables;
    _this['reports_payables'] = reportsPayables;
    _this['reports_cash_balance'] = reportsCashBalance;
    _this['reports_crosstabs'] = reportsCrosstabs;
    _this['reports_general_ledgers'] = reportsGeneralLedgers;
    _this['reports_pl'] = reportsPl;
    _this['reports_bs'] = reportsBs;
    _this['reports_journals'] = reportsJournals;
    _this['reports_managements_planning'] = reportsManagementsPlanning;
    _this['reports_managements_navigation'] = reportsManagementsNavigation;
    _this['manual_journals'] = manualJournals;
    _this['fixed_assets'] = fixedAssets;
    _this['inventory_refreshes'] = inventoryRefreshes;
    _this['biz_allocations'] = bizAllocations;
    _this['payment_records'] = paymentRecords;
    _this['annual_reports'] = annualReports;
    _this['tax_reports'] = taxReports;
    _this['consumption_entries'] = consumptionEntries;
    _this['tax_return'] = taxReturn;
    _this['account_item_statements'] = accountItemStatements;
    _this['month_end'] = monthEnd;
    _this['year_end'] = yearEnd;
    _this['walletables'] = walletables;
    _this['companies'] = companies;
    _this['invitations'] = invitations;
    _this['sign_in_logs'] = signInLogs;
    _this['backups'] = backups;
    _this['opening_balances'] = openingBalances;
    _this['system_conversion'] = systemConversion;
    _this['resets'] = resets;
    _this['partners'] = partners;
    _this['items'] = items;
    _this['sections'] = sections;
    _this['tags'] = tags;
    _this['account_items'] = accountItems;
    _this['taxes'] = taxes;
    _this['user_matchers'] = userMatchers;
    _this['deal_templates'] = dealTemplates;
    _this['manual_journal_templates'] = manualJournalTemplates;
    _this['cost_allocations'] = costAllocations;
    _this['approval_flow_routes'] = approvalFlowRoutes;
    _this['expense_application_templates'] = expenseApplicationTemplates;
    _this['workflows'] = workflows;
    _this['oauth_applications'] = oauthApplications;
    _this['oauth_authorizations'] = oauthAuthorizations;
    _this['bank_accountant_staff_users'] = bankAccountantStaffUsers;
  };

  /**
   * Constructs a <code>UsersCapabilitiesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersCapabilitiesResponse} obj Optional instance to populate.
   * @return {module:model/UsersCapabilitiesResponse} The populated <code>UsersCapabilitiesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wallet_txns')) {
        obj['wallet_txns'] = UsersCapability.constructFromObject(data['wallet_txns']);
      }
      if (data.hasOwnProperty('deals')) {
        obj['deals'] = UsersCapability.constructFromObject(data['deals']);
      }
      if (data.hasOwnProperty('transfers')) {
        obj['transfers'] = UsersCapability.constructFromObject(data['transfers']);
      }
      if (data.hasOwnProperty('docs')) {
        obj['docs'] = UsersCapability.constructFromObject(data['docs']);
      }
      if (data.hasOwnProperty('doc_postings')) {
        obj['doc_postings'] = UsersCapability.constructFromObject(data['doc_postings']);
      }
      if (data.hasOwnProperty('receipts')) {
        obj['receipts'] = UsersCapability.constructFromObject(data['receipts']);
      }
      if (data.hasOwnProperty('receipt_stream_editor')) {
        obj['receipt_stream_editor'] = UsersCapability.constructFromObject(data['receipt_stream_editor']);
      }
      if (data.hasOwnProperty('expense_applications')) {
        obj['expense_applications'] = UsersCapability.constructFromObject(data['expense_applications']);
      }
      if (data.hasOwnProperty('spreadsheets')) {
        obj['spreadsheets'] = UsersCapability.constructFromObject(data['spreadsheets']);
      }
      if (data.hasOwnProperty('payment_requests')) {
        obj['payment_requests'] = UsersCapability.constructFromObject(data['payment_requests']);
      }
      if (data.hasOwnProperty('request_forms')) {
        obj['request_forms'] = UsersCapability.constructFromObject(data['request_forms']);
      }
      if (data.hasOwnProperty('approval_requests')) {
        obj['approval_requests'] = UsersCapability.constructFromObject(data['approval_requests']);
      }
      if (data.hasOwnProperty('reports')) {
        obj['reports'] = UsersCapability.constructFromObject(data['reports']);
      }
      if (data.hasOwnProperty('reports_income_expense')) {
        obj['reports_income_expense'] = UsersCapability.constructFromObject(data['reports_income_expense']);
      }
      if (data.hasOwnProperty('reports_receivables')) {
        obj['reports_receivables'] = UsersCapability.constructFromObject(data['reports_receivables']);
      }
      if (data.hasOwnProperty('reports_payables')) {
        obj['reports_payables'] = UsersCapability.constructFromObject(data['reports_payables']);
      }
      if (data.hasOwnProperty('reports_cash_balance')) {
        obj['reports_cash_balance'] = UsersCapability.constructFromObject(data['reports_cash_balance']);
      }
      if (data.hasOwnProperty('reports_crosstabs')) {
        obj['reports_crosstabs'] = UsersCapability.constructFromObject(data['reports_crosstabs']);
      }
      if (data.hasOwnProperty('reports_general_ledgers')) {
        obj['reports_general_ledgers'] = UsersCapability.constructFromObject(data['reports_general_ledgers']);
      }
      if (data.hasOwnProperty('reports_pl')) {
        obj['reports_pl'] = UsersCapability.constructFromObject(data['reports_pl']);
      }
      if (data.hasOwnProperty('reports_bs')) {
        obj['reports_bs'] = UsersCapability.constructFromObject(data['reports_bs']);
      }
      if (data.hasOwnProperty('reports_journals')) {
        obj['reports_journals'] = UsersCapability.constructFromObject(data['reports_journals']);
      }
      if (data.hasOwnProperty('reports_managements_planning')) {
        obj['reports_managements_planning'] = UsersCapability.constructFromObject(data['reports_managements_planning']);
      }
      if (data.hasOwnProperty('reports_managements_navigation')) {
        obj['reports_managements_navigation'] = UsersCapability.constructFromObject(data['reports_managements_navigation']);
      }
      if (data.hasOwnProperty('manual_journals')) {
        obj['manual_journals'] = UsersCapability.constructFromObject(data['manual_journals']);
      }
      if (data.hasOwnProperty('fixed_assets')) {
        obj['fixed_assets'] = UsersCapability.constructFromObject(data['fixed_assets']);
      }
      if (data.hasOwnProperty('inventory_refreshes')) {
        obj['inventory_refreshes'] = UsersCapability.constructFromObject(data['inventory_refreshes']);
      }
      if (data.hasOwnProperty('biz_allocations')) {
        obj['biz_allocations'] = UsersCapability.constructFromObject(data['biz_allocations']);
      }
      if (data.hasOwnProperty('payment_records')) {
        obj['payment_records'] = UsersCapability.constructFromObject(data['payment_records']);
      }
      if (data.hasOwnProperty('annual_reports')) {
        obj['annual_reports'] = UsersCapability.constructFromObject(data['annual_reports']);
      }
      if (data.hasOwnProperty('tax_reports')) {
        obj['tax_reports'] = UsersCapability.constructFromObject(data['tax_reports']);
      }
      if (data.hasOwnProperty('consumption_entries')) {
        obj['consumption_entries'] = UsersCapability.constructFromObject(data['consumption_entries']);
      }
      if (data.hasOwnProperty('tax_return')) {
        obj['tax_return'] = UsersCapability.constructFromObject(data['tax_return']);
      }
      if (data.hasOwnProperty('account_item_statements')) {
        obj['account_item_statements'] = UsersCapability.constructFromObject(data['account_item_statements']);
      }
      if (data.hasOwnProperty('month_end')) {
        obj['month_end'] = UsersCapability.constructFromObject(data['month_end']);
      }
      if (data.hasOwnProperty('year_end')) {
        obj['year_end'] = UsersCapability.constructFromObject(data['year_end']);
      }
      if (data.hasOwnProperty('walletables')) {
        obj['walletables'] = UsersCapability.constructFromObject(data['walletables']);
      }
      if (data.hasOwnProperty('companies')) {
        obj['companies'] = UsersCapability.constructFromObject(data['companies']);
      }
      if (data.hasOwnProperty('invitations')) {
        obj['invitations'] = UsersCapability.constructFromObject(data['invitations']);
      }
      if (data.hasOwnProperty('sign_in_logs')) {
        obj['sign_in_logs'] = UsersCapability.constructFromObject(data['sign_in_logs']);
      }
      if (data.hasOwnProperty('backups')) {
        obj['backups'] = UsersCapability.constructFromObject(data['backups']);
      }
      if (data.hasOwnProperty('opening_balances')) {
        obj['opening_balances'] = UsersCapability.constructFromObject(data['opening_balances']);
      }
      if (data.hasOwnProperty('system_conversion')) {
        obj['system_conversion'] = UsersCapability.constructFromObject(data['system_conversion']);
      }
      if (data.hasOwnProperty('resets')) {
        obj['resets'] = UsersCapability.constructFromObject(data['resets']);
      }
      if (data.hasOwnProperty('partners')) {
        obj['partners'] = UsersCapability.constructFromObject(data['partners']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = UsersCapability.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('sections')) {
        obj['sections'] = UsersCapability.constructFromObject(data['sections']);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = UsersCapability.constructFromObject(data['tags']);
      }
      if (data.hasOwnProperty('account_items')) {
        obj['account_items'] = UsersCapability.constructFromObject(data['account_items']);
      }
      if (data.hasOwnProperty('taxes')) {
        obj['taxes'] = UsersCapability.constructFromObject(data['taxes']);
      }
      if (data.hasOwnProperty('user_matchers')) {
        obj['user_matchers'] = UsersCapability.constructFromObject(data['user_matchers']);
      }
      if (data.hasOwnProperty('deal_templates')) {
        obj['deal_templates'] = UsersCapability.constructFromObject(data['deal_templates']);
      }
      if (data.hasOwnProperty('manual_journal_templates')) {
        obj['manual_journal_templates'] = UsersCapability.constructFromObject(data['manual_journal_templates']);
      }
      if (data.hasOwnProperty('cost_allocations')) {
        obj['cost_allocations'] = UsersCapability.constructFromObject(data['cost_allocations']);
      }
      if (data.hasOwnProperty('approval_flow_routes')) {
        obj['approval_flow_routes'] = UsersCapability.constructFromObject(data['approval_flow_routes']);
      }
      if (data.hasOwnProperty('expense_application_templates')) {
        obj['expense_application_templates'] = UsersCapability.constructFromObject(data['expense_application_templates']);
      }
      if (data.hasOwnProperty('workflows')) {
        obj['workflows'] = UsersCapability.constructFromObject(data['workflows']);
      }
      if (data.hasOwnProperty('oauth_applications')) {
        obj['oauth_applications'] = UsersCapability.constructFromObject(data['oauth_applications']);
      }
      if (data.hasOwnProperty('oauth_authorizations')) {
        obj['oauth_authorizations'] = UsersCapability.constructFromObject(data['oauth_authorizations']);
      }
      if (data.hasOwnProperty('bank_accountant_staff_users')) {
        obj['bank_accountant_staff_users'] = UsersCapability.constructFromObject(data['bank_accountant_staff_users']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UsersCapability} wallet_txns
   */
  exports.prototype['wallet_txns'] = undefined;
  /**
   * @member {module:model/UsersCapability} deals
   */
  exports.prototype['deals'] = undefined;
  /**
   * @member {module:model/UsersCapability} transfers
   */
  exports.prototype['transfers'] = undefined;
  /**
   * @member {module:model/UsersCapability} docs
   */
  exports.prototype['docs'] = undefined;
  /**
   * @member {module:model/UsersCapability} doc_postings
   */
  exports.prototype['doc_postings'] = undefined;
  /**
   * @member {module:model/UsersCapability} receipts
   */
  exports.prototype['receipts'] = undefined;
  /**
   * @member {module:model/UsersCapability} receipt_stream_editor
   */
  exports.prototype['receipt_stream_editor'] = undefined;
  /**
   * @member {module:model/UsersCapability} expense_applications
   */
  exports.prototype['expense_applications'] = undefined;
  /**
   * @member {module:model/UsersCapability} spreadsheets
   */
  exports.prototype['spreadsheets'] = undefined;
  /**
   * @member {module:model/UsersCapability} payment_requests
   */
  exports.prototype['payment_requests'] = undefined;
  /**
   * @member {module:model/UsersCapability} request_forms
   */
  exports.prototype['request_forms'] = undefined;
  /**
   * @member {module:model/UsersCapability} approval_requests
   */
  exports.prototype['approval_requests'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports
   */
  exports.prototype['reports'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_income_expense
   */
  exports.prototype['reports_income_expense'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_receivables
   */
  exports.prototype['reports_receivables'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_payables
   */
  exports.prototype['reports_payables'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_cash_balance
   */
  exports.prototype['reports_cash_balance'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_crosstabs
   */
  exports.prototype['reports_crosstabs'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_general_ledgers
   */
  exports.prototype['reports_general_ledgers'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_pl
   */
  exports.prototype['reports_pl'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_bs
   */
  exports.prototype['reports_bs'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_journals
   */
  exports.prototype['reports_journals'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_managements_planning
   */
  exports.prototype['reports_managements_planning'] = undefined;
  /**
   * @member {module:model/UsersCapability} reports_managements_navigation
   */
  exports.prototype['reports_managements_navigation'] = undefined;
  /**
   * @member {module:model/UsersCapability} manual_journals
   */
  exports.prototype['manual_journals'] = undefined;
  /**
   * @member {module:model/UsersCapability} fixed_assets
   */
  exports.prototype['fixed_assets'] = undefined;
  /**
   * @member {module:model/UsersCapability} inventory_refreshes
   */
  exports.prototype['inventory_refreshes'] = undefined;
  /**
   * @member {module:model/UsersCapability} biz_allocations
   */
  exports.prototype['biz_allocations'] = undefined;
  /**
   * @member {module:model/UsersCapability} payment_records
   */
  exports.prototype['payment_records'] = undefined;
  /**
   * @member {module:model/UsersCapability} annual_reports
   */
  exports.prototype['annual_reports'] = undefined;
  /**
   * @member {module:model/UsersCapability} tax_reports
   */
  exports.prototype['tax_reports'] = undefined;
  /**
   * @member {module:model/UsersCapability} consumption_entries
   */
  exports.prototype['consumption_entries'] = undefined;
  /**
   * @member {module:model/UsersCapability} tax_return
   */
  exports.prototype['tax_return'] = undefined;
  /**
   * @member {module:model/UsersCapability} account_item_statements
   */
  exports.prototype['account_item_statements'] = undefined;
  /**
   * @member {module:model/UsersCapability} month_end
   */
  exports.prototype['month_end'] = undefined;
  /**
   * @member {module:model/UsersCapability} year_end
   */
  exports.prototype['year_end'] = undefined;
  /**
   * @member {module:model/UsersCapability} walletables
   */
  exports.prototype['walletables'] = undefined;
  /**
   * @member {module:model/UsersCapability} companies
   */
  exports.prototype['companies'] = undefined;
  /**
   * @member {module:model/UsersCapability} invitations
   */
  exports.prototype['invitations'] = undefined;
  /**
   * @member {module:model/UsersCapability} sign_in_logs
   */
  exports.prototype['sign_in_logs'] = undefined;
  /**
   * @member {module:model/UsersCapability} backups
   */
  exports.prototype['backups'] = undefined;
  /**
   * @member {module:model/UsersCapability} opening_balances
   */
  exports.prototype['opening_balances'] = undefined;
  /**
   * @member {module:model/UsersCapability} system_conversion
   */
  exports.prototype['system_conversion'] = undefined;
  /**
   * @member {module:model/UsersCapability} resets
   */
  exports.prototype['resets'] = undefined;
  /**
   * @member {module:model/UsersCapability} partners
   */
  exports.prototype['partners'] = undefined;
  /**
   * @member {module:model/UsersCapability} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:model/UsersCapability} sections
   */
  exports.prototype['sections'] = undefined;
  /**
   * @member {module:model/UsersCapability} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {module:model/UsersCapability} account_items
   */
  exports.prototype['account_items'] = undefined;
  /**
   * @member {module:model/UsersCapability} taxes
   */
  exports.prototype['taxes'] = undefined;
  /**
   * @member {module:model/UsersCapability} user_matchers
   */
  exports.prototype['user_matchers'] = undefined;
  /**
   * @member {module:model/UsersCapability} deal_templates
   */
  exports.prototype['deal_templates'] = undefined;
  /**
   * @member {module:model/UsersCapability} manual_journal_templates
   */
  exports.prototype['manual_journal_templates'] = undefined;
  /**
   * @member {module:model/UsersCapability} cost_allocations
   */
  exports.prototype['cost_allocations'] = undefined;
  /**
   * @member {module:model/UsersCapability} approval_flow_routes
   */
  exports.prototype['approval_flow_routes'] = undefined;
  /**
   * @member {module:model/UsersCapability} expense_application_templates
   */
  exports.prototype['expense_application_templates'] = undefined;
  /**
   * @member {module:model/UsersCapability} workflows
   */
  exports.prototype['workflows'] = undefined;
  /**
   * @member {module:model/UsersCapability} oauth_applications
   */
  exports.prototype['oauth_applications'] = undefined;
  /**
   * @member {module:model/UsersCapability} oauth_authorizations
   */
  exports.prototype['oauth_authorizations'] = undefined;
  /**
   * @member {module:model/UsersCapability} bank_accountant_staff_users
   */
  exports.prototype['bank_accountant_staff_users'] = undefined;



  return exports;
}));



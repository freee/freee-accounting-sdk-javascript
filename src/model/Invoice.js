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
    define(['ApiClient', 'model/InvoiceInvoiceContents'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InvoiceInvoiceContents'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.Invoice = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.InvoiceInvoiceContents);
  }
}(this, function(ApiClient, InvoiceInvoiceContents) {
  'use strict';




  /**
   * The Invoice model module.
   * @module model/Invoice
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>Invoice</code>.
   * @alias module:model/Invoice
   * @class
   * @param id {Number} 請求書ID
   * @param companyId {Number} 事業所ID
   * @param issueDate {String} 請求日 (yyyy-mm-dd)
   * @param totalAmount {Number} 合計金額
   */
  var exports = function(id, companyId, issueDate, totalAmount) {
    var _this = this;

    _this['id'] = id;
    _this['company_id'] = companyId;
    _this['issue_date'] = issueDate;


    _this['total_amount'] = totalAmount;










  };

  /**
   * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoice} obj Optional instance to populate.
   * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
      }
      if (data.hasOwnProperty('issue_date')) {
        obj['issue_date'] = ApiClient.convertToType(data['issue_date'], 'String');
      }
      if (data.hasOwnProperty('invoice_number')) {
        obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
      }
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
      }
      if (data.hasOwnProperty('total_amount')) {
        obj['total_amount'] = ApiClient.convertToType(data['total_amount'], 'Number');
      }
      if (data.hasOwnProperty('total_vat')) {
        obj['total_vat'] = ApiClient.convertToType(data['total_vat'], 'Number');
      }
      if (data.hasOwnProperty('sub_total')) {
        obj['sub_total'] = ApiClient.convertToType(data['sub_total'], 'Number');
      }
      if (data.hasOwnProperty('invoice_status')) {
        obj['invoice_status'] = ApiClient.convertToType(data['invoice_status'], 'String');
      }
      if (data.hasOwnProperty('payment_status')) {
        obj['payment_status'] = ApiClient.convertToType(data['payment_status'], 'String');
      }
      if (data.hasOwnProperty('posting_status')) {
        obj['posting_status'] = ApiClient.convertToType(data['posting_status'], 'String');
      }
      if (data.hasOwnProperty('company_name')) {
        obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
      }
      if (data.hasOwnProperty('payment_type')) {
        obj['payment_type'] = ApiClient.convertToType(data['payment_type'], 'String');
      }
      if (data.hasOwnProperty('invoice_layout')) {
        obj['invoice_layout'] = ApiClient.convertToType(data['invoice_layout'], 'String');
      }
      if (data.hasOwnProperty('tax_entry_method')) {
        obj['tax_entry_method'] = ApiClient.convertToType(data['tax_entry_method'], 'String');
      }
      if (data.hasOwnProperty('invoice_contents')) {
        obj['invoice_contents'] = ApiClient.convertToType(data['invoice_contents'], [InvoiceInvoiceContents]);
      }
    }
    return obj;
  }

  /**
   * 請求書ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 事業所ID
   * @member {Number} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * 請求日 (yyyy-mm-dd)
   * @member {String} issue_date
   */
  exports.prototype['issue_date'] = undefined;
  /**
   * 請求書番号
   * @member {String} invoice_number
   */
  exports.prototype['invoice_number'] = undefined;
  /**
   * 期日 (yyyy-mm-dd)
   * @member {String} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * 合計金額
   * @member {Number} total_amount
   */
  exports.prototype['total_amount'] = undefined;
  /**
   * 合計金額
   * @member {Number} total_vat
   */
  exports.prototype['total_vat'] = undefined;
  /**
   * 小計
   * @member {Number} sub_total
   */
  exports.prototype['sub_total'] = undefined;
  /**
   * 請求書ステータス  (draft: 下書き, applying: 申請中, approved: 承認済み, issued: 発行済み)
   * @member {module:model/Invoice.InvoiceStatusEnum} invoice_status
   */
  exports.prototype['invoice_status'] = undefined;
  /**
   * 入金ステータス  (unsettled: 入金待ち, settled: 入金済み)
   * @member {module:model/Invoice.PaymentStatusEnum} payment_status
   */
  exports.prototype['payment_status'] = undefined;
  /**
   * 郵送ステータス(unrequested: リクエスト前, preview_registered: プレビュー登録, preview_failed: プレビュー登録失敗, ordered: 注文中, order_failed: 注文失敗, printing: 印刷中, canceled: キャンセル, posted: 投函済み)
   * @member {module:model/Invoice.PostingStatusEnum} posting_status
   */
  exports.prototype['posting_status'] = undefined;
  /**
   * 事業所名
   * @member {String} company_name
   */
  exports.prototype['company_name'] = undefined;
  /**
   * 支払方法 (振込: transfer, 引き落とし: direct_debit)
   * @member {module:model/Invoice.PaymentTypeEnum} payment_type
   */
  exports.prototype['payment_type'] = undefined;
  /**
   * レイアウト(default_classic: レイアウト１/クラシック, standard_classic: レイアウト２/クラシック, envelope_classic: 封筒１/クラシック, carried_forward_standard_classic: レイアウト３（繰越金額欄あり）/クラシック, carried_forward_envelope_classic: 封筒２（繰越金額欄あり）/クラシック, default_modern: レイアウト１/モダン, standard_modern: レイアウト２/モダン, envelope_modern: 封筒/モダン)
   * @member {module:model/Invoice.InvoiceLayoutEnum} invoice_layout
   */
  exports.prototype['invoice_layout'] = undefined;
  /**
   * 請求書の消費税計算方法(inclusive: 内税, exclusive: 外税)
   * @member {module:model/Invoice.TaxEntryMethodEnum} tax_entry_method
   */
  exports.prototype['tax_entry_method'] = undefined;
  /**
   * 請求内容
   * @member {Array.<module:model/InvoiceInvoiceContents>} invoice_contents
   */
  exports.prototype['invoice_contents'] = undefined;


  /**
   * Allowed values for the <code>invoice_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvoiceStatusEnum = {
    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",
    /**
     * value: "applying"
     * @const
     */
    "applying": "applying",
    /**
     * value: "approved"
     * @const
     */
    "approved": "approved",
    /**
     * value: "issued"
     * @const
     */
    "issued": "issued"  };

  /**
   * Allowed values for the <code>payment_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentStatusEnum = {
    /**
     * value: ""
     * @const
     */
    "empty": "",
    /**
     * value: "unsettled"
     * @const
     */
    "unsettled": "unsettled",
    /**
     * value: "settled"
     * @const
     */
    "settled": "settled"  };

  /**
   * Allowed values for the <code>posting_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PostingStatusEnum = {
    /**
     * value: ""
     * @const
     */
    "empty": "",
    /**
     * value: "unrequested"
     * @const
     */
    "unrequested": "unrequested",
    /**
     * value: "preview_registered"
     * @const
     */
    "preview_registered": "preview_registered",
    /**
     * value: "preview_failed"
     * @const
     */
    "preview_failed": "preview_failed",
    /**
     * value: "ordered"
     * @const
     */
    "ordered": "ordered",
    /**
     * value: "order_failed"
     * @const
     */
    "order_failed": "order_failed",
    /**
     * value: "printing"
     * @const
     */
    "printing": "printing",
    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",
    /**
     * value: "posted"
     * @const
     */
    "posted": "posted"  };

  /**
   * Allowed values for the <code>payment_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentTypeEnum = {
    /**
     * value: ""
     * @const
     */
    "empty": "",
    /**
     * value: "transfer"
     * @const
     */
    "transfer": "transfer",
    /**
     * value: "direct_debit"
     * @const
     */
    "direct_debit": "direct_debit"  };

  /**
   * Allowed values for the <code>invoice_layout</code> property.
   * @enum {String}
   * @readonly
   */
  exports.InvoiceLayoutEnum = {
    /**
     * value: "default_classic"
     * @const
     */
    "default_classic": "default_classic",
    /**
     * value: "standard_classic"
     * @const
     */
    "standard_classic": "standard_classic",
    /**
     * value: "envelope_classic"
     * @const
     */
    "envelope_classic": "envelope_classic",
    /**
     * value: "carried_forward_standard_classic"
     * @const
     */
    "carried_forward_standard_classic": "carried_forward_standard_classic",
    /**
     * value: "carried_forward_envelope_classic"
     * @const
     */
    "carried_forward_envelope_classic": "carried_forward_envelope_classic",
    /**
     * value: "default_modern"
     * @const
     */
    "default_modern": "default_modern",
    /**
     * value: "standard_modern"
     * @const
     */
    "standard_modern": "standard_modern",
    /**
     * value: "envelope_modern"
     * @const
     */
    "envelope_modern": "envelope_modern"  };

  /**
   * Allowed values for the <code>tax_entry_method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TaxEntryMethodEnum = {
    /**
     * value: ""
     * @const
     */
    "empty": "",
    /**
     * value: "inclusive"
     * @const
     */
    "inclusive": "inclusive",
    /**
     * value: "exclusive"
     * @const
     */
    "exclusive": "exclusive"  };


  return exports;
}));



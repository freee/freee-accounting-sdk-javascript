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
    define(['ApiClient', 'model/ManualJournalDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManualJournalDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ManualJournal = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ManualJournalDetails);
  }
}(this, function(ApiClient, ManualJournalDetails) {
  'use strict';




  /**
   * The ManualJournal model module.
   * @module model/ManualJournal
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>ManualJournal</code>.
   * @alias module:model/ManualJournal
   * @class
   * @param id {Number} 振替伝票ID
   * @param companyId {Number} 事業所ID
   * @param issueDate {String} 発生日 (yyyy-mm-dd)
   * @param adjustment {Boolean} 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳）
   * @param details {Array.<module:model/ManualJournalDetails>} 貸借行一覧（配列）: 貸借合わせて100行まで登録できます。
   */
  var exports = function(id, companyId, issueDate, adjustment, details) {
    var _this = this;

    _this['id'] = id;
    _this['company_id'] = companyId;
    _this['issue_date'] = issueDate;
    _this['adjustment'] = adjustment;
    _this['details'] = details;
  };

  /**
   * Constructs a <code>ManualJournal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManualJournal} obj Optional instance to populate.
   * @return {module:model/ManualJournal} The populated <code>ManualJournal</code> instance.
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
      if (data.hasOwnProperty('adjustment')) {
        obj['adjustment'] = ApiClient.convertToType(data['adjustment'], 'Boolean');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [ManualJournalDetails]);
      }
    }
    return obj;
  }

  /**
   * 振替伝票ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 事業所ID
   * @member {Number} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * 発生日 (yyyy-mm-dd)
   * @member {String} issue_date
   */
  exports.prototype['issue_date'] = undefined;
  /**
   * 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳）
   * @member {Boolean} adjustment
   */
  exports.prototype['adjustment'] = undefined;
  /**
   * 貸借行一覧（配列）: 貸借合わせて100行まで登録できます。
   * @member {Array.<module:model/ManualJournalDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));



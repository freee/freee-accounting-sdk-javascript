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
    define(['ApiClient', 'model/DealsDetails', 'model/DealsPayments', 'model/DealsRenews'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DealsDetails'), require('./DealsPayments'), require('./DealsRenews'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.Deals = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.DealsDetails, root.FreeeAccountingClient.DealsPayments, root.FreeeAccountingClient.DealsRenews);
  }
}(this, function(ApiClient, DealsDetails, DealsPayments, DealsRenews) {
  'use strict';




  /**
   * The Deals model module.
   * @module model/Deals
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>Deals</code>.
   * @alias module:model/Deals
   * @class
   * @param id {Number} 取引ID
   * @param companyId {Number} 事業所ID
   * @param issueDate {String} 発生日 (yyyy-mm-dd)
   * @param amount {Number} 金額
   * @param partnerId {Number} 取引先ID
   */
  var exports = function(id, companyId, issueDate, amount, partnerId) {
    var _this = this;

    _this['id'] = id;
    _this['company_id'] = companyId;
    _this['issue_date'] = issueDate;

    _this['amount'] = amount;


    _this['partner_id'] = partnerId;




  };

  /**
   * Constructs a <code>Deals</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Deals} obj Optional instance to populate.
   * @return {module:model/Deals} The populated <code>Deals</code> instance.
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
      if (data.hasOwnProperty('due_date')) {
        obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('due_amount')) {
        obj['due_amount'] = ApiClient.convertToType(data['due_amount'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('partner_id')) {
        obj['partner_id'] = ApiClient.convertToType(data['partner_id'], 'Number');
      }
      if (data.hasOwnProperty('ref_number')) {
        obj['ref_number'] = ApiClient.convertToType(data['ref_number'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [DealsDetails]);
      }
      if (data.hasOwnProperty('renews')) {
        obj['renews'] = ApiClient.convertToType(data['renews'], [DealsRenews]);
      }
      if (data.hasOwnProperty('payments')) {
        obj['payments'] = ApiClient.convertToType(data['payments'], [DealsPayments]);
      }
    }
    return obj;
  }

  /**
   * 取引ID
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
   * 支払期日 (yyyy-mm-dd)
   * @member {String} due_date
   */
  exports.prototype['due_date'] = undefined;
  /**
   * 金額
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * 支払金額
   * @member {Number} due_amount
   */
  exports.prototype['due_amount'] = undefined;
  /**
   * 収支区分 (収入: income, 支出: expense)
   * @member {module:model/Deals.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 取引先ID
   * @member {Number} partner_id
   */
  exports.prototype['partner_id'] = undefined;
  /**
   * 管理番号
   * @member {String} ref_number
   */
  exports.prototype['ref_number'] = undefined;
  /**
   * 取引の明細行
   * @member {Array.<module:model/DealsDetails>} details
   */
  exports.prototype['details'] = undefined;
  /**
   * 取引の+更新行
   * @member {Array.<module:model/DealsRenews>} renews
   */
  exports.prototype['renews'] = undefined;
  /**
   * 取引の支払行
   * @member {Array.<module:model/DealsPayments>} payments
   */
  exports.prototype['payments'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "income"
     * @const
     */
    "income": "income",
    /**
     * value: "expense"
     * @const
     */
    "expense": "expense"  };


  return exports;
}));



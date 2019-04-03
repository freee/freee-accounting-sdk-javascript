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
    define(['ApiClient', 'model/SelectablesIndexResponseAccountItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SelectablesIndexResponseAccountItems'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.SelectablesIndexResponseAccountCategories = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.SelectablesIndexResponseAccountItems);
  }
}(this, function(ApiClient, SelectablesIndexResponseAccountItems) {
  'use strict';




  /**
   * The SelectablesIndexResponseAccountCategories model module.
   * @module model/SelectablesIndexResponseAccountCategories
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>SelectablesIndexResponseAccountCategories</code>.
   * @alias module:model/SelectablesIndexResponseAccountCategories
   * @class
   * @param balance {module:model/SelectablesIndexResponseAccountCategories.BalanceEnum} 収支
   * @param orgCode {module:model/SelectablesIndexResponseAccountCategories.OrgCodeEnum} 事業形態（個人事業主: personal、法人: corporate）
   * @param role {String} カテゴリーコード
   * @param title {String} カテゴリー名
   * @param accountItems {Array.<module:model/SelectablesIndexResponseAccountItems>} 勘定科目の一覧
   */
  var exports = function(balance, orgCode, role, title, accountItems) {
    var _this = this;

    _this['balance'] = balance;
    _this['org_code'] = orgCode;
    _this['role'] = role;
    _this['title'] = title;

    _this['account_items'] = accountItems;
  };

  /**
   * Constructs a <code>SelectablesIndexResponseAccountCategories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelectablesIndexResponseAccountCategories} obj Optional instance to populate.
   * @return {module:model/SelectablesIndexResponseAccountCategories} The populated <code>SelectablesIndexResponseAccountCategories</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('balance')) {
        obj['balance'] = ApiClient.convertToType(data['balance'], 'String');
      }
      if (data.hasOwnProperty('org_code')) {
        obj['org_code'] = ApiClient.convertToType(data['org_code'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('desc')) {
        obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
      }
      if (data.hasOwnProperty('account_items')) {
        obj['account_items'] = ApiClient.convertToType(data['account_items'], [SelectablesIndexResponseAccountItems]);
      }
    }
    return obj;
  }

  /**
   * 収支
   * @member {module:model/SelectablesIndexResponseAccountCategories.BalanceEnum} balance
   */
  exports.prototype['balance'] = undefined;
  /**
   * 事業形態（個人事業主: personal、法人: corporate）
   * @member {module:model/SelectablesIndexResponseAccountCategories.OrgCodeEnum} org_code
   */
  exports.prototype['org_code'] = undefined;
  /**
   * カテゴリーコード
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * カテゴリー名
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * カテゴリーの説明
   * @member {String} desc
   */
  exports.prototype['desc'] = undefined;
  /**
   * 勘定科目の一覧
   * @member {Array.<module:model/SelectablesIndexResponseAccountItems>} account_items
   */
  exports.prototype['account_items'] = undefined;


  /**
   * Allowed values for the <code>balance</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BalanceEnum = {
    /**
     * value: "expense"
     * @const
     */
    "expense": "expense",
    /**
     * value: "income"
     * @const
     */
    "income": "income"  };

  /**
   * Allowed values for the <code>org_code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrgCodeEnum = {
    /**
     * value: "personal"
     * @const
     */
    "personal": "personal",
    /**
     * value: "corporate"
     * @const
     */
    "corporate": "corporate"  };


  return exports;
}));



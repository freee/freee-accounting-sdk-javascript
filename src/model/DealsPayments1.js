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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.DealsPayments1 = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DealsPayments1 model module.
   * @module model/DealsPayments1
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>DealsPayments1</code>.
   * @alias module:model/DealsPayments1
   * @class
   * @param amount {Number} 支払金額：payments指定時は必須
   * @param fromWalletableId {Number} 口座ID：payments指定時は必須
   * @param fromWalletableType {module:model/DealsPayments1.FromWalletableTypeEnum} 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet)：payments指定時は必須
   * @param _date {String} 支払日：payments指定時は必須
   */
  var exports = function(amount, fromWalletableId, fromWalletableType, _date) {
    var _this = this;

    _this['amount'] = amount;
    _this['from_walletable_id'] = fromWalletableId;
    _this['from_walletable_type'] = fromWalletableType;
    _this['date'] = _date;
  };

  /**
   * Constructs a <code>DealsPayments1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealsPayments1} obj Optional instance to populate.
   * @return {module:model/DealsPayments1} The populated <code>DealsPayments1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('from_walletable_id')) {
        obj['from_walletable_id'] = ApiClient.convertToType(data['from_walletable_id'], 'Number');
      }
      if (data.hasOwnProperty('from_walletable_type')) {
        obj['from_walletable_type'] = ApiClient.convertToType(data['from_walletable_type'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
    }
    return obj;
  }

  /**
   * 支払金額：payments指定時は必須
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * 口座ID：payments指定時は必須
   * @member {Number} from_walletable_id
   */
  exports.prototype['from_walletable_id'] = undefined;
  /**
   * 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet)：payments指定時は必須
   * @member {module:model/DealsPayments1.FromWalletableTypeEnum} from_walletable_type
   */
  exports.prototype['from_walletable_type'] = undefined;
  /**
   * 支払日：payments指定時は必須
   * @member {String} date
   */
  exports.prototype['date'] = undefined;


  /**
   * Allowed values for the <code>from_walletable_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FromWalletableTypeEnum = {
    /**
     * value: "bank_account"
     * @const
     */
    "bank_account": "bank_account",
    /**
     * value: "credit_card"
     * @const
     */
    "credit_card": "credit_card",
    /**
     * value: "wallet"
     * @const
     */
    "wallet": "wallet"  };


  return exports;
}));



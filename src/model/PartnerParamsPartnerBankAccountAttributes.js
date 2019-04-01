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
    root.FreeeAccountingClient.PartnerParamsPartnerBankAccountAttributes = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PartnerParamsPartnerBankAccountAttributes model module.
   * @module model/PartnerParamsPartnerBankAccountAttributes
   * @version v1.0
   */

  /**
   * Constructs a new <code>PartnerParamsPartnerBankAccountAttributes</code>.
   * @alias module:model/PartnerParamsPartnerBankAccountAttributes
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>PartnerParamsPartnerBankAccountAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartnerParamsPartnerBankAccountAttributes} obj Optional instance to populate.
   * @return {module:model/PartnerParamsPartnerBankAccountAttributes} The populated <code>PartnerParamsPartnerBankAccountAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bank_name')) {
        obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
      }
      if (data.hasOwnProperty('bank_name_kana')) {
        obj['bank_name_kana'] = ApiClient.convertToType(data['bank_name_kana'], 'String');
      }
      if (data.hasOwnProperty('bank_code')) {
        obj['bank_code'] = ApiClient.convertToType(data['bank_code'], 'String');
      }
      if (data.hasOwnProperty('branch_name')) {
        obj['branch_name'] = ApiClient.convertToType(data['branch_name'], 'String');
      }
      if (data.hasOwnProperty('branch_kana')) {
        obj['branch_kana'] = ApiClient.convertToType(data['branch_kana'], 'String');
      }
      if (data.hasOwnProperty('branch_code')) {
        obj['branch_code'] = ApiClient.convertToType(data['branch_code'], 'String');
      }
      if (data.hasOwnProperty('account_type')) {
        obj['account_type'] = ApiClient.convertToType(data['account_type'], 'String');
      }
      if (data.hasOwnProperty('account_number')) {
        obj['account_number'] = ApiClient.convertToType(data['account_number'], 'String');
      }
      if (data.hasOwnProperty('long_account_name')) {
        obj['long_account_name'] = ApiClient.convertToType(data['long_account_name'], 'String');
      }
      if (data.hasOwnProperty('account_name')) {
        obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
      }
    }
    return obj;
  }

  /**
   * 銀行名
   * @member {String} bank_name
   */
  exports.prototype['bank_name'] = undefined;
  /**
   * 銀行名（カナ）
   * @member {String} bank_name_kana
   */
  exports.prototype['bank_name_kana'] = undefined;
  /**
   * 銀行番号
   * @member {String} bank_code
   */
  exports.prototype['bank_code'] = undefined;
  /**
   * 支店名
   * @member {String} branch_name
   */
  exports.prototype['branch_name'] = undefined;
  /**
   * 支店名（カナ）
   * @member {String} branch_kana
   */
  exports.prototype['branch_kana'] = undefined;
  /**
   * 支店番号
   * @member {String} branch_code
   */
  exports.prototype['branch_code'] = undefined;
  /**
   * 口座種別(ordinary:普通、checking：当座、earmarked：納税準備預金、savings：貯蓄、other:その他)
   * @member {String} account_type
   */
  exports.prototype['account_type'] = undefined;
  /**
   * 口座番号
   * @member {String} account_number
   */
  exports.prototype['account_number'] = undefined;
  /**
   * 受取人名
   * @member {String} long_account_name
   */
  exports.prototype['long_account_name'] = undefined;
  /**
   * 受取人名（カナ）
   * @member {String} account_name
   */
  exports.prototype['account_name'] = undefined;



  return exports;
}));


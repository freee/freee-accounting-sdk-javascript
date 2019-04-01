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
    root.FreeeAccountingClient.ReceiptCreateResponseReceiptUser = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReceiptCreateResponseReceiptUser model module.
   * @module model/ReceiptCreateResponseReceiptUser
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>ReceiptCreateResponseReceiptUser</code>.
   * @alias module:model/ReceiptCreateResponseReceiptUser
   * @class
   * @param id {Number} ユーザID
   * @param email {String} メールアドレス
   */
  var exports = function(id, email) {
    var _this = this;

    _this['id'] = id;
    _this['email'] = email;
  };

  /**
   * Constructs a <code>ReceiptCreateResponseReceiptUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptCreateResponseReceiptUser} obj Optional instance to populate.
   * @return {module:model/ReceiptCreateResponseReceiptUser} The populated <code>ReceiptCreateResponseReceiptUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * ユーザID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * メールアドレス
   * @member {String} email
   */
  exports.prototype['email'] = undefined;



  return exports;
}));



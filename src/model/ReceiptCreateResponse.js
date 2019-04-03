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
    define(['ApiClient', 'model/ReceiptCreateResponseReceipt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReceiptCreateResponseReceipt'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ReceiptCreateResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ReceiptCreateResponseReceipt);
  }
}(this, function(ApiClient, ReceiptCreateResponseReceipt) {
  'use strict';




  /**
   * The ReceiptCreateResponse model module.
   * @module model/ReceiptCreateResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>ReceiptCreateResponse</code>.
   * @alias module:model/ReceiptCreateResponse
   * @class
   * @param receipt {module:model/ReceiptCreateResponseReceipt} 
   */
  var exports = function(receipt) {
    var _this = this;

    _this['receipt'] = receipt;
  };

  /**
   * Constructs a <code>ReceiptCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptCreateResponse} obj Optional instance to populate.
   * @return {module:model/ReceiptCreateResponse} The populated <code>ReceiptCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('receipt')) {
        obj['receipt'] = ReceiptCreateResponseReceipt.constructFromObject(data['receipt']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ReceiptCreateResponseReceipt} receipt
   */
  exports.prototype['receipt'] = undefined;



  return exports;
}));



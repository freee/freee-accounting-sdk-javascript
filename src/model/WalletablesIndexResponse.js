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
    define(['ApiClient', 'model/WalletablesIndexResponseWalletables'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WalletablesIndexResponseWalletables'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.WalletablesIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.WalletablesIndexResponseWalletables);
  }
}(this, function(ApiClient, WalletablesIndexResponseWalletables) {
  'use strict';




  /**
   * The WalletablesIndexResponse model module.
   * @module model/WalletablesIndexResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>WalletablesIndexResponse</code>.
   * @alias module:model/WalletablesIndexResponse
   * @class
   * @param walletables {Array.<module:model/WalletablesIndexResponseWalletables>} 
   */
  var exports = function(walletables) {
    var _this = this;

    _this['walletables'] = walletables;
  };

  /**
   * Constructs a <code>WalletablesIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WalletablesIndexResponse} obj Optional instance to populate.
   * @return {module:model/WalletablesIndexResponse} The populated <code>WalletablesIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('walletables')) {
        obj['walletables'] = ApiClient.convertToType(data['walletables'], [WalletablesIndexResponseWalletables]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/WalletablesIndexResponseWalletables>} walletables
   */
  exports.prototype['walletables'] = undefined;



  return exports;
}));



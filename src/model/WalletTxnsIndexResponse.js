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
    define(['ApiClient', 'model/WalletTxns'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WalletTxns'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.WalletTxnsIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.WalletTxns);
  }
}(this, function(ApiClient, WalletTxns) {
  'use strict';




  /**
   * The WalletTxnsIndexResponse model module.
   * @module model/WalletTxnsIndexResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>WalletTxnsIndexResponse</code>.
   * @alias module:model/WalletTxnsIndexResponse
   * @class
   * @param walletTxns {Array.<module:model/WalletTxns>} 
   */
  var exports = function(walletTxns) {
    var _this = this;

    _this['wallet_txns'] = walletTxns;
  };

  /**
   * Constructs a <code>WalletTxnsIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WalletTxnsIndexResponse} obj Optional instance to populate.
   * @return {module:model/WalletTxnsIndexResponse} The populated <code>WalletTxnsIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('wallet_txns')) {
        obj['wallet_txns'] = ApiClient.convertToType(data['wallet_txns'], [WalletTxns]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/WalletTxns>} wallet_txns
   */
  exports.prototype['wallet_txns'] = undefined;



  return exports;
}));



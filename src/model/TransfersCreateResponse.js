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
    define(['ApiClient', 'model/Transfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Transfer'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.TransfersCreateResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.Transfer);
  }
}(this, function(ApiClient, Transfer) {
  'use strict';




  /**
   * The TransfersCreateResponse model module.
   * @module model/TransfersCreateResponse
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>TransfersCreateResponse</code>.
   * @alias module:model/TransfersCreateResponse
   * @class
   * @param transfer {module:model/Transfer} 
   */
  var exports = function(transfer) {
    var _this = this;

    _this['transfer'] = transfer;
  };

  /**
   * Constructs a <code>TransfersCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransfersCreateResponse} obj Optional instance to populate.
   * @return {module:model/TransfersCreateResponse} The populated <code>TransfersCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('transfer')) {
        obj['transfer'] = Transfer.constructFromObject(data['transfer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Transfer} transfer
   */
  exports.prototype['transfer'] = undefined;



  return exports;
}));



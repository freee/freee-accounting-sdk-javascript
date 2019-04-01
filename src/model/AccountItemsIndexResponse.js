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
    define(['ApiClient', 'model/AccountItemsIndexResponseAccountItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountItemsIndexResponseAccountItems'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.AccountItemsIndexResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.AccountItemsIndexResponseAccountItems);
  }
}(this, function(ApiClient, AccountItemsIndexResponseAccountItems) {
  'use strict';




  /**
   * The AccountItemsIndexResponse model module.
   * @module model/AccountItemsIndexResponse
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>AccountItemsIndexResponse</code>.
   * @alias module:model/AccountItemsIndexResponse
   * @class
   * @param accountItems {Array.<module:model/AccountItemsIndexResponseAccountItems>} 
   */
  var exports = function(accountItems) {
    var _this = this;

    _this['account_items'] = accountItems;
  };

  /**
   * Constructs a <code>AccountItemsIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountItemsIndexResponse} obj Optional instance to populate.
   * @return {module:model/AccountItemsIndexResponse} The populated <code>AccountItemsIndexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_items')) {
        obj['account_items'] = ApiClient.convertToType(data['account_items'], [AccountItemsIndexResponseAccountItems]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AccountItemsIndexResponseAccountItems>} account_items
   */
  exports.prototype['account_items'] = undefined;



  return exports;
}));



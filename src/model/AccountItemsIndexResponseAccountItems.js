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
    root.FreeeAccountingClient.AccountItemsIndexResponseAccountItems = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountItemsIndexResponseAccountItems model module.
   * @module model/AccountItemsIndexResponseAccountItems
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>AccountItemsIndexResponseAccountItems</code>.
   * @alias module:model/AccountItemsIndexResponseAccountItems
   * @class
   * @param id {Number} 勘定科目ID
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;



  };

  /**
   * Constructs a <code>AccountItemsIndexResponseAccountItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountItemsIndexResponseAccountItems} obj Optional instance to populate.
   * @return {module:model/AccountItemsIndexResponseAccountItems} The populated <code>AccountItemsIndexResponseAccountItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('default_tax_id')) {
        obj['default_tax_id'] = ApiClient.convertToType(data['default_tax_id'], 'Number');
      }
      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 勘定科目ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 勘定科目名 (30文字以内)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * デフォルト設定がされている税区分ID
   * @member {Number} default_tax_id
   */
  exports.prototype['default_tax_id'] = undefined;
  /**
   * @member {Array.<String>} categories
   */
  exports.prototype['categories'] = undefined;



  return exports;
}));



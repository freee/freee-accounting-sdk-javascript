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
    root.FreeeAccountingClient.Parameters4 = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Parameters4 model module.
   * @module model/Parameters4
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>Parameters4</code>.
   * @alias module:model/Parameters4
   * @class
   * @param companyId {Number} 事業所ID
   * @param name {String} 品目名 (30文字以内)
   */
  var exports = function(companyId, name) {
    var _this = this;

    _this['company_id'] = companyId;
    _this['name'] = name;


  };

  /**
   * Constructs a <code>Parameters4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Parameters4} obj Optional instance to populate.
   * @return {module:model/Parameters4} The populated <code>Parameters4</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('shortcut1')) {
        obj['shortcut1'] = ApiClient.convertToType(data['shortcut1'], 'String');
      }
      if (data.hasOwnProperty('shortcut2')) {
        obj['shortcut2'] = ApiClient.convertToType(data['shortcut2'], 'String');
      }
    }
    return obj;
  }

  /**
   * 事業所ID
   * @member {Number} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * 品目名 (30文字以内)
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * ショートカット１ (20文字以内)
   * @member {String} shortcut1
   */
  exports.prototype['shortcut1'] = undefined;
  /**
   * ショートカット２ (20文字以内)
   * @member {String} shortcut2
   */
  exports.prototype['shortcut2'] = undefined;



  return exports;
}));



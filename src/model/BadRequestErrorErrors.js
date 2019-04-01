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
    root.FreeeAccountingClient.BadRequestErrorErrors = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BadRequestErrorErrors model module.
   * @module model/BadRequestErrorErrors
   * @version v1.0
   */

  /**
   * Constructs a new <code>BadRequestErrorErrors</code>.
   * @alias module:model/BadRequestErrorErrors
   * @class
   * @param messages {Array.<String>} 
   * @param type {module:model/BadRequestErrorErrors.TypeEnum} 
   */
  var exports = function(messages, type) {
    var _this = this;

    _this['messages'] = messages;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>BadRequestErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadRequestErrorErrors} obj Optional instance to populate.
   * @return {module:model/BadRequestErrorErrors} The populated <code>BadRequestErrorErrors</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('messages')) {
        obj['messages'] = ApiClient.convertToType(data['messages'], ['String']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} messages
   */
  exports.prototype['messages'] = undefined;
  /**
   * @member {module:model/BadRequestErrorErrors.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "status"
     * @const
     */
    "status": "status",
    /**
     * value: "validation"
     * @const
     */
    "validation": "validation"  };


  return exports;
}));


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
    root.FreeeAccountingClient.JournalsDownloadNotFoundError = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JournalsDownloadNotFoundError model module.
   * @module model/JournalsDownloadNotFoundError
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>JournalsDownloadNotFoundError</code>.
   * @alias module:model/JournalsDownloadNotFoundError
   * @class
   * @param message {module:model/JournalsDownloadNotFoundError.MessageEnum} 
   */
  var exports = function(message) {
    var _this = this;

    _this['message'] = message;
  };

  /**
   * Constructs a <code>JournalsDownloadNotFoundError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JournalsDownloadNotFoundError} obj Optional instance to populate.
   * @return {module:model/JournalsDownloadNotFoundError} The populated <code>JournalsDownloadNotFoundError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/JournalsDownloadNotFoundError.MessageEnum} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>message</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MessageEnum = {
    /**
     * value: "レポートが見つかりません。"
     * @const
     */
    "レポートが見つかりません。": "レポートが見つかりません。",
    /**
     * value: "不正な形式のレポートです。"
     * @const
     */
    "不正な形式のレポートです。": "不正な形式のレポートです。"  };


  return exports;
}));



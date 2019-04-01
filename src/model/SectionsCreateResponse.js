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
    define(['ApiClient', 'model/SectionsIndexResponseSections'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SectionsIndexResponseSections'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.SectionsCreateResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.SectionsIndexResponseSections);
  }
}(this, function(ApiClient, SectionsIndexResponseSections) {
  'use strict';




  /**
   * The SectionsCreateResponse model module.
   * @module model/SectionsCreateResponse
   * @version v1.0
   */

  /**
   * Constructs a new <code>SectionsCreateResponse</code>.
   * @alias module:model/SectionsCreateResponse
   * @class
   * @param section {module:model/SectionsIndexResponseSections} 
   */
  var exports = function(section) {
    var _this = this;

    _this['section'] = section;
  };

  /**
   * Constructs a <code>SectionsCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SectionsCreateResponse} obj Optional instance to populate.
   * @return {module:model/SectionsCreateResponse} The populated <code>SectionsCreateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('section')) {
        obj['section'] = SectionsIndexResponseSections.constructFromObject(data['section']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SectionsIndexResponseSections} section
   */
  exports.prototype['section'] = undefined;



  return exports;
}));


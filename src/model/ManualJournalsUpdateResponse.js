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
    define(['ApiClient', 'model/ManualJournal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManualJournal'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ManualJournalsUpdateResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ManualJournal);
  }
}(this, function(ApiClient, ManualJournal) {
  'use strict';




  /**
   * The ManualJournalsUpdateResponse model module.
   * @module model/ManualJournalsUpdateResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>ManualJournalsUpdateResponse</code>.
   * @alias module:model/ManualJournalsUpdateResponse
   * @class
   * @param manualJournal {module:model/ManualJournal} 
   */
  var exports = function(manualJournal) {
    var _this = this;

    _this['manual_journal'] = manualJournal;
  };

  /**
   * Constructs a <code>ManualJournalsUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManualJournalsUpdateResponse} obj Optional instance to populate.
   * @return {module:model/ManualJournalsUpdateResponse} The populated <code>ManualJournalsUpdateResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('manual_journal')) {
        obj['manual_journal'] = ManualJournal.constructFromObject(data['manual_journal']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ManualJournal} manual_journal
   */
  exports.prototype['manual_journal'] = undefined;



  return exports;
}));



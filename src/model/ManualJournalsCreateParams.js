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
    define(['ApiClient', 'model/ManualJournalsCreateParamsDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ManualJournalsCreateParamsDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ManualJournalsCreateParams = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.ManualJournalsCreateParamsDetails);
  }
}(this, function(ApiClient, ManualJournalsCreateParamsDetails) {
  'use strict';




  /**
   * The ManualJournalsCreateParams model module.
   * @module model/ManualJournalsCreateParams
   * @version v1.0
   */

  /**
   * Constructs a new <code>ManualJournalsCreateParams</code>.
   * @alias module:model/ManualJournalsCreateParams
   * @class
   * @param companyId {Number} 事業所ID
   * @param issueDate {String} 発生日 (yyyy-mm-dd)
   * @param details {Array.<module:model/ManualJournalsCreateParamsDetails>} 
   */
  var exports = function(companyId, issueDate, details) {
    var _this = this;

    _this['company_id'] = companyId;
    _this['issue_date'] = issueDate;

    _this['details'] = details;
  };

  /**
   * Constructs a <code>ManualJournalsCreateParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManualJournalsCreateParams} obj Optional instance to populate.
   * @return {module:model/ManualJournalsCreateParams} The populated <code>ManualJournalsCreateParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
      }
      if (data.hasOwnProperty('issue_date')) {
        obj['issue_date'] = ApiClient.convertToType(data['issue_date'], 'String');
      }
      if (data.hasOwnProperty('adjustment')) {
        obj['adjustment'] = ApiClient.convertToType(data['adjustment'], 'Boolean');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [ManualJournalsCreateParamsDetails]);
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
   * 発生日 (yyyy-mm-dd)
   * @member {String} issue_date
   */
  exports.prototype['issue_date'] = undefined;
  /**
   * 決算整理仕訳フラグ（falseまたは未指定の場合: 日常仕訳）
   * @member {Boolean} adjustment
   */
  exports.prototype['adjustment'] = undefined;
  /**
   * @member {Array.<module:model/ManualJournalsCreateParamsDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));


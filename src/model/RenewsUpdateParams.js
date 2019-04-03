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
    define(['ApiClient', 'model/RenewsUpdateDetailParams'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenewsUpdateDetailParams'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.RenewsUpdateParams = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.RenewsUpdateDetailParams);
  }
}(this, function(ApiClient, RenewsUpdateDetailParams) {
  'use strict';




  /**
   * The RenewsUpdateParams model module.
   * @module model/RenewsUpdateParams
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>RenewsUpdateParams</code>.
   * @alias module:model/RenewsUpdateParams
   * @class
   * @param companyId {Number} 事業所ID
   * @param updateDate {String} 更新日 (yyyy-mm-dd)
   * @param details {Array.<module:model/RenewsUpdateDetailParams>} +更新の明細行
   */
  var exports = function(companyId, updateDate, details) {
    var _this = this;

    _this['company_id'] = companyId;
    _this['update_date'] = updateDate;
    _this['details'] = details;
  };

  /**
   * Constructs a <code>RenewsUpdateParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenewsUpdateParams} obj Optional instance to populate.
   * @return {module:model/RenewsUpdateParams} The populated <code>RenewsUpdateParams</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'Number');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [RenewsUpdateDetailParams]);
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
   * 更新日 (yyyy-mm-dd)
   * @member {String} update_date
   */
  exports.prototype['update_date'] = undefined;
  /**
   * +更新の明細行
   * @member {Array.<module:model/RenewsUpdateDetailParams>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));



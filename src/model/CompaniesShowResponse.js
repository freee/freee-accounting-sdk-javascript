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
    define(['ApiClient', 'model/CompaniesShowResponseCompany'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompaniesShowResponseCompany'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.CompaniesShowResponse = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.CompaniesShowResponseCompany);
  }
}(this, function(ApiClient, CompaniesShowResponseCompany) {
  'use strict';




  /**
   * The CompaniesShowResponse model module.
   * @module model/CompaniesShowResponse
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>CompaniesShowResponse</code>.
   * @alias module:model/CompaniesShowResponse
   * @class
   * @param company {module:model/CompaniesShowResponseCompany} 
   */
  var exports = function(company) {
    var _this = this;

    _this['company'] = company;
  };

  /**
   * Constructs a <code>CompaniesShowResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompaniesShowResponse} obj Optional instance to populate.
   * @return {module:model/CompaniesShowResponse} The populated <code>CompaniesShowResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('company')) {
        obj['company'] = CompaniesShowResponseCompany.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CompaniesShowResponseCompany} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));



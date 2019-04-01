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
    root.FreeeAccountingClient.CompaniesidDocTemplate = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompaniesidDocTemplate model module.
   * @module model/CompaniesidDocTemplate
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>CompaniesidDocTemplate</code>.
   * @alias module:model/CompaniesidDocTemplate
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CompaniesidDocTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompaniesidDocTemplate} obj Optional instance to populate.
   * @return {module:model/CompaniesidDocTemplate} The populated <code>CompaniesidDocTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoice_layout')) {
        obj['invoice_layout'] = ApiClient.convertToType(data['invoice_layout'], 'Number');
      }
      if (data.hasOwnProperty('invoice_style')) {
        obj['invoice_style'] = ApiClient.convertToType(data['invoice_style'], 'Number');
      }
      if (data.hasOwnProperty('amount_fraction')) {
        obj['amount_fraction'] = ApiClient.convertToType(data['amount_fraction'], 'Number');
      }
    }
    return obj;
  }

  /**
   * レイアウト(0: レイアウト1, 1:レイアウト2, 3:封筒1, 4:レイアウト3(繰越金額欄あり), 5: 封筒2(繰越金額欄あり))
   * @member {Number} invoice_layout
   */
  exports.prototype['invoice_layout'] = undefined;
  /**
   * スタイル(0: クラシック, 1: モダン)
   * @member {Number} invoice_style
   */
  exports.prototype['invoice_style'] = undefined;
  /**
   * 金額端数処理方法（0: 切り上げ、1: 切り捨て, 2: 四捨五入）
   * @member {Number} amount_fraction
   */
  exports.prototype['amount_fraction'] = undefined;



  return exports;
}));



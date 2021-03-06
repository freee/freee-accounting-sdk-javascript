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
    root.FreeeAccountingClient.InvoiceInvoiceContents = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvoiceInvoiceContents model module.
   * @module model/InvoiceInvoiceContents
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>InvoiceInvoiceContents</code>.
   * @alias module:model/InvoiceInvoiceContents
   * @class
   * @param id {Number} 請求内容ID
   * @param order {Number} 順序
   * @param type {module:model/InvoiceInvoiceContents.TypeEnum} 行の種類
   * @param qty {Number} 数量
   * @param unitPrice {Number} 単価
   * @param amount {Number} 金額
   * @param vat {Number} 消費税額
   * @param tagIds {Array.<Number>} 
   * @param tagNames {Array.<String>} 
   */
  var exports = function(id, order, type, qty, unitPrice, amount, vat, tagIds, tagNames) {
    var _this = this;

    _this['id'] = id;
    _this['order'] = order;
    _this['type'] = type;
    _this['qty'] = qty;
    _this['unit_price'] = unitPrice;
    _this['amount'] = amount;
    _this['vat'] = vat;
    _this['tag_ids'] = tagIds;
    _this['tag_names'] = tagNames;
  };

  /**
   * Constructs a <code>InvoiceInvoiceContents</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvoiceInvoiceContents} obj Optional instance to populate.
   * @return {module:model/InvoiceInvoiceContents} The populated <code>InvoiceInvoiceContents</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('qty')) {
        obj['qty'] = ApiClient.convertToType(data['qty'], 'Number');
      }
      if (data.hasOwnProperty('unit_price')) {
        obj['unit_price'] = ApiClient.convertToType(data['unit_price'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('vat')) {
        obj['vat'] = ApiClient.convertToType(data['vat'], 'Number');
      }
      if (data.hasOwnProperty('tag_ids')) {
        obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['Number']);
      }
      if (data.hasOwnProperty('tag_names')) {
        obj['tag_names'] = ApiClient.convertToType(data['tag_names'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 請求内容ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 順序
   * @member {Number} order
   */
  exports.prototype['order'] = undefined;
  /**
   * 行の種類
   * @member {module:model/InvoiceInvoiceContents.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * 数量
   * @member {Number} qty
   */
  exports.prototype['qty'] = undefined;
  /**
   * 単価
   * @member {Number} unit_price
   */
  exports.prototype['unit_price'] = undefined;
  /**
   * 金額
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * 消費税額
   * @member {Number} vat
   */
  exports.prototype['vat'] = undefined;
  /**
   * @member {Array.<Number>} tag_ids
   */
  exports.prototype['tag_ids'] = undefined;
  /**
   * @member {Array.<String>} tag_names
   */
  exports.prototype['tag_names'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "normal"
     * @const
     */
    "normal": "normal",
    /**
     * value: "discount"
     * @const
     */
    "discount": "discount",
    /**
     * value: "text"
     * @const
     */
    "text": "text"  };


  return exports;
}));



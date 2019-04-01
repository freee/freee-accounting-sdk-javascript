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
    root.FreeeAccountingClient.DealsRenewsDetails = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DealsRenewsDetails model module.
   * @module model/DealsRenewsDetails
   * @version v0.0.1
   */

  /**
   * Constructs a new <code>DealsRenewsDetails</code>.
   * @alias module:model/DealsRenewsDetails
   * @class
   * @param id {Number} +更新の明細行ID
   * @param entrySide {module:model/DealsRenewsDetails.EntrySideEnum} 貸借(貸方: credit, 借方: debit)
   * @param accountItemId {Number} 勘定科目ID
   * @param taxCode {Number} 税区分ID
   * @param itemId {Number} 品目ID
   * @param sectionId {Number} 部門ID
   * @param tagIds {Array.<Number>} 
   * @param amount {Number} 金額（税込で指定してください）
   * @param vat {Number} 消費税額（指定しない場合は自動で計算されます）
   * @param description {String} 備考
   */
  var exports = function(id, entrySide, accountItemId, taxCode, itemId, sectionId, tagIds, amount, vat, description) {
    var _this = this;

    _this['id'] = id;
    _this['entry_side'] = entrySide;
    _this['account_item_id'] = accountItemId;
    _this['tax_code'] = taxCode;
    _this['item_id'] = itemId;
    _this['section_id'] = sectionId;
    _this['tag_ids'] = tagIds;
    _this['amount'] = amount;
    _this['vat'] = vat;
    _this['description'] = description;
  };

  /**
   * Constructs a <code>DealsRenewsDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DealsRenewsDetails} obj Optional instance to populate.
   * @return {module:model/DealsRenewsDetails} The populated <code>DealsRenewsDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('entry_side')) {
        obj['entry_side'] = ApiClient.convertToType(data['entry_side'], 'String');
      }
      if (data.hasOwnProperty('account_item_id')) {
        obj['account_item_id'] = ApiClient.convertToType(data['account_item_id'], 'Number');
      }
      if (data.hasOwnProperty('tax_code')) {
        obj['tax_code'] = ApiClient.convertToType(data['tax_code'], 'Number');
      }
      if (data.hasOwnProperty('item_id')) {
        obj['item_id'] = ApiClient.convertToType(data['item_id'], 'Number');
      }
      if (data.hasOwnProperty('section_id')) {
        obj['section_id'] = ApiClient.convertToType(data['section_id'], 'Number');
      }
      if (data.hasOwnProperty('tag_ids')) {
        obj['tag_ids'] = ApiClient.convertToType(data['tag_ids'], ['Number']);
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('vat')) {
        obj['vat'] = ApiClient.convertToType(data['vat'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * +更新の明細行ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * 貸借(貸方: credit, 借方: debit)
   * @member {module:model/DealsRenewsDetails.EntrySideEnum} entry_side
   */
  exports.prototype['entry_side'] = undefined;
  /**
   * 勘定科目ID
   * @member {Number} account_item_id
   */
  exports.prototype['account_item_id'] = undefined;
  /**
   * 税区分ID
   * @member {Number} tax_code
   */
  exports.prototype['tax_code'] = undefined;
  /**
   * 品目ID
   * @member {Number} item_id
   */
  exports.prototype['item_id'] = undefined;
  /**
   * 部門ID
   * @member {Number} section_id
   */
  exports.prototype['section_id'] = undefined;
  /**
   * @member {Array.<Number>} tag_ids
   */
  exports.prototype['tag_ids'] = undefined;
  /**
   * 金額（税込で指定してください）
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * 消費税額（指定しない場合は自動で計算されます）
   * @member {Number} vat
   */
  exports.prototype['vat'] = undefined;
  /**
   * 備考
   * @member {String} description
   */
  exports.prototype['description'] = undefined;


  /**
   * Allowed values for the <code>entry_side</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EntrySideEnum = {
    /**
     * value: "credit"
     * @const
     */
    "credit": "credit",
    /**
     * value: "debit"
     * @const
     */
    "debit": "debit"  };


  return exports;
}));



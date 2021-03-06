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
    root.FreeeAccountingClient.ManualJournalsCreateParamsDetails = factory(root.FreeeAccountingClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ManualJournalsCreateParamsDetails model module.
   * @module model/ManualJournalsCreateParamsDetails
   * @version v0.0.2
   */

  /**
   * Constructs a new <code>ManualJournalsCreateParamsDetails</code>.
   * 貸借行一覧（配列）: 貸借合わせて100行まで登録できます。
   * @alias module:model/ManualJournalsCreateParamsDetails
   * @class
   * @param entrySide {module:model/ManualJournalsCreateParamsDetails.EntrySideEnum} 貸借（貸方: credit, 借方: debit）
   * @param taxCode {Number} 税区分コード
   * @param accountItemId {Number} 勘定科目ID
   * @param amount {Number} 取引金額（税込で指定してください）
   */
  var exports = function(entrySide, taxCode, accountItemId, amount) {
    var _this = this;

    _this['entry_side'] = entrySide;
    _this['tax_code'] = taxCode;
    _this['account_item_id'] = accountItemId;
    _this['amount'] = amount;









  };

  /**
   * Constructs a <code>ManualJournalsCreateParamsDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManualJournalsCreateParamsDetails} obj Optional instance to populate.
   * @return {module:model/ManualJournalsCreateParamsDetails} The populated <code>ManualJournalsCreateParamsDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry_side')) {
        obj['entry_side'] = ApiClient.convertToType(data['entry_side'], 'String');
      }
      if (data.hasOwnProperty('tax_code')) {
        obj['tax_code'] = ApiClient.convertToType(data['tax_code'], 'Number');
      }
      if (data.hasOwnProperty('account_item_id')) {
        obj['account_item_id'] = ApiClient.convertToType(data['account_item_id'], 'Number');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('vat')) {
        obj['vat'] = ApiClient.convertToType(data['vat'], 'Number');
      }
      if (data.hasOwnProperty('partner_id')) {
        obj['partner_id'] = ApiClient.convertToType(data['partner_id'], 'Number');
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
      if (data.hasOwnProperty('segment_1_tag_id')) {
        obj['segment_1_tag_id'] = ApiClient.convertToType(data['segment_1_tag_id'], 'Number');
      }
      if (data.hasOwnProperty('segment_2_tag_id')) {
        obj['segment_2_tag_id'] = ApiClient.convertToType(data['segment_2_tag_id'], 'Number');
      }
      if (data.hasOwnProperty('segment_3_tag_id')) {
        obj['segment_3_tag_id'] = ApiClient.convertToType(data['segment_3_tag_id'], 'Number');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * 貸借（貸方: credit, 借方: debit）
   * @member {module:model/ManualJournalsCreateParamsDetails.EntrySideEnum} entry_side
   */
  exports.prototype['entry_side'] = undefined;
  /**
   * 税区分コード
   * @member {Number} tax_code
   */
  exports.prototype['tax_code'] = undefined;
  /**
   * 勘定科目ID
   * @member {Number} account_item_id
   */
  exports.prototype['account_item_id'] = undefined;
  /**
   * 取引金額（税込で指定してください）
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * 消費税額（指定しない場合は自動で計算されます）
   * @member {Number} vat
   */
  exports.prototype['vat'] = undefined;
  /**
   * 取引先ID
   * @member {Number} partner_id
   */
  exports.prototype['partner_id'] = undefined;
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
   * メモタグID
   * @member {Array.<Number>} tag_ids
   */
  exports.prototype['tag_ids'] = undefined;
  /**
   * セグメント１ID
   * @member {Number} segment_1_tag_id
   */
  exports.prototype['segment_1_tag_id'] = undefined;
  /**
   * セグメント２ID
   * @member {Number} segment_2_tag_id
   */
  exports.prototype['segment_2_tag_id'] = undefined;
  /**
   * セグメント３ID
   * @member {Number} segment_3_tag_id
   */
  exports.prototype['segment_3_tag_id'] = undefined;
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
     * value: "debit"
     * @const
     */
    "debit": "debit",
    /**
     * value: "credit"
     * @const
     */
    "credit": "credit"  };


  return exports;
}));



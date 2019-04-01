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
    define(['ApiClient', 'model/BadRequestError', 'model/ManualJournalsCreateParams', 'model/ManualJournalsCreateResponse', 'model/ManualJournalsIndexResponse', 'model/ManualJournalsShowResponse', 'model/ManualJournalsUpdateParams', 'model/ManualJournalsUpdateResponse', 'model/Parameter3', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ManualJournalsCreateParams'), require('../model/ManualJournalsCreateResponse'), require('../model/ManualJournalsIndexResponse'), require('../model/ManualJournalsShowResponse'), require('../model/ManualJournalsUpdateParams'), require('../model/ManualJournalsUpdateResponse'), require('../model/Parameter3'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ManualJournalsApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.ManualJournalsCreateParams, root.FreeeAccountingClient.ManualJournalsCreateResponse, root.FreeeAccountingClient.ManualJournalsIndexResponse, root.FreeeAccountingClient.ManualJournalsShowResponse, root.FreeeAccountingClient.ManualJournalsUpdateParams, root.FreeeAccountingClient.ManualJournalsUpdateResponse, root.FreeeAccountingClient.Parameter3, root.FreeeAccountingClient.UnauthorizedError);
  }
}(this, function(ApiClient, BadRequestError, ManualJournalsCreateParams, ManualJournalsCreateResponse, ManualJournalsIndexResponse, ManualJournalsShowResponse, ManualJournalsUpdateParams, ManualJournalsUpdateResponse, Parameter3, UnauthorizedError) {
  'use strict';

  /**
   * ManualJournals service.
   * @module api/ManualJournalsApi
   * @version v0.0.1
   */

  /**
   * Constructs a new ManualJournalsApi. 
   * @alias module:api/ManualJournalsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createManualJournal operation.
     * @callback module:api/ManualJournalsApi~createManualJournalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManualJournalsCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振替伝票の作成
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/ManualJournalsCreateParams} opts.parameters 振替伝票の作成
     * @param {module:api/ManualJournalsApi~createManualJournalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManualJournalsCreateResponse}
     */
    this.createManualJournal = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['parameters'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ManualJournalsCreateResponse;

      return this.apiClient.callApi(
        '/manual_journals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the destroyManualJournal operation.
     * @callback module:api/ManualJournalsApi~destroyManualJournalCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振替伝票の削除
     * 
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/Parameter3} opts.parameter 振替伝票の削除
     * @param {module:api/ManualJournalsApi~destroyManualJournalCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.destroyManualJournal = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['parameter'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling destroyManualJournal");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/manual_journals/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManualJournal operation.
     * @callback module:api/ManualJournalsApi~getManualJournalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManualJournalsShowResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振替伝票の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Number} id 
     * @param {module:api/ManualJournalsApi~getManualJournalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManualJournalsShowResponse}
     */
    this.getManualJournal = function(companyId, id, callback) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getManualJournal");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getManualJournal");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'company_id': companyId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ManualJournalsShowResponse;

      return this.apiClient.callApi(
        '/manual_journals/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManualJournals operation.
     * @callback module:api/ManualJournalsApi~getManualJournalsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManualJournalsIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振替伝票一覧の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.startIssueDate 発生日で絞込：開始日(yyyy-mm-dd)
     * @param {String} opts.endIssueDate 発生日で絞込：終了日(yyyy-mm-dd)
     * @param {module:model/String} opts.entrySide 貸借で絞込 (貸方: credit, 借方: debit)
     * @param {Number} opts.accountItemId 勘定科目IDで絞込
     * @param {Number} opts.minAmount 金額で絞込：下限
     * @param {Number} opts.maxAmount 金額で絞込：上限
     * @param {Number} opts.partnerId 取引先IDで絞込（0を指定すると、取引先が未選択の貸借行を絞り込めます）
     * @param {Number} opts.itemId 品目IDで絞込（0を指定すると、品目が未選択の貸借行を絞り込めます）
     * @param {Number} opts.sectionId 部門IDで絞込（0を指定すると、部門が未選択の貸借行を絞り込めます）
     * @param {Number} opts.segment1TagId セグメント１IDで絞り込み（0を指定すると、セグメント１が未選択の貸借行を絞り込めます）
     * @param {Number} opts.segment2TagId セグメント２IDで絞り込み（0を指定すると、セグメント２が未選択の貸借行を絞り込めます）
     * @param {Number} opts.segment3TagId セグメント３IDで絞り込み（0を指定すると、セグメント３が未選択の貸借行を絞り込めます）
     * @param {module:model/String} opts.commentStatus コメント状態で絞込（自分宛のコメント: posted_with_mention, 自分宛のコメント-未解決: raised_with_mention, 自分宛のコメント-解決済: resolved_with_mention, コメントあり: posted, 未解決: raised, 解決済: resolved, コメントなし: none）
     * @param {Boolean} opts.commentImportant 重要コメント付きの振替伝票を絞込
     * @param {module:model/String} opts.adjustment 決算整理仕訳で絞込（決算整理仕訳のみ: only, 決算整理仕訳以外: without）
     * @param {String} opts.txnNumber 仕訳番号で絞込（事業所の仕訳番号形式が有効な場合のみ）
     * @param {Number} opts.offset 取得レコードのオフセット (デフォルト: 0)
     * @param {Number} opts.limit 取得レコードの件数 (デフォルト: 20, 最大: 500) 
     * @param {module:api/ManualJournalsApi~getManualJournalsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManualJournalsIndexResponse}
     */
    this.getManualJournals = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getManualJournals");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'start_issue_date': opts['startIssueDate'],
        'end_issue_date': opts['endIssueDate'],
        'entry_side': opts['entrySide'],
        'account_item_id': opts['accountItemId'],
        'min_amount': opts['minAmount'],
        'max_amount': opts['maxAmount'],
        'partner_id': opts['partnerId'],
        'item_id': opts['itemId'],
        'section_id': opts['sectionId'],
        'segment_1_tag_id': opts['segment1TagId'],
        'segment_2_tag_id': opts['segment2TagId'],
        'segment_3_tag_id': opts['segment3TagId'],
        'comment_status': opts['commentStatus'],
        'comment_important': opts['commentImportant'],
        'adjustment': opts['adjustment'],
        'txn_number': opts['txnNumber'],
        'offset': opts['offset'],
        'limit': opts['limit'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ManualJournalsIndexResponse;

      return this.apiClient.callApi(
        '/manual_journals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateManualJournal operation.
     * @callback module:api/ManualJournalsApi~updateManualJournalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManualJournalsUpdateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 振替伝票の更新
     * 
     * @param {Number} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/ManualJournalsUpdateParams} opts.parameters 振替伝票の更新
     * @param {module:api/ManualJournalsApi~updateManualJournalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManualJournalsUpdateResponse}
     */
    this.updateManualJournal = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['parameters'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateManualJournal");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = ManualJournalsUpdateResponse;

      return this.apiClient.callApi(
        '/manual_journals/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

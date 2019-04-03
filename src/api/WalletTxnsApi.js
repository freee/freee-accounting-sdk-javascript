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
    define(['ApiClient', 'model/BadRequestError', 'model/Parameters6', 'model/UnauthorizedError', 'model/WalletTxnsCreateResponse', 'model/WalletTxnsIndexResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/Parameters6'), require('../model/UnauthorizedError'), require('../model/WalletTxnsCreateResponse'), require('../model/WalletTxnsIndexResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.WalletTxnsApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.Parameters6, root.FreeeAccountingClient.UnauthorizedError, root.FreeeAccountingClient.WalletTxnsCreateResponse, root.FreeeAccountingClient.WalletTxnsIndexResponse);
  }
}(this, function(ApiClient, BadRequestError, Parameters6, UnauthorizedError, WalletTxnsCreateResponse, WalletTxnsIndexResponse) {
  'use strict';

  /**
   * WalletTxns service.
   * @module api/WalletTxnsApi
   * @version v0.0.2
   */

  /**
   * Constructs a new WalletTxnsApi. 
   * @alias module:api/WalletTxnsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createWalletTxn operation.
     * @callback module:api/WalletTxnsApi~createWalletTxnCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletTxnsCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 明細の作成
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/Parameters6} opts.parameters 明細の作成
     * @param {module:api/WalletTxnsApi~createWalletTxnCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletTxnsCreateResponse}
     */
    this.createWalletTxn = function(opts, callback) {
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
      var returnType = WalletTxnsCreateResponse;

      return this.apiClient.callApi(
        '/wallet_txns', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletTxns operation.
     * @callback module:api/WalletTxnsApi~getWalletTxnsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletTxnsIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 明細一覧の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.walletableType 口座区分 (銀行口座: bank_account, クレジットカード: credit_card, 現金: wallet)
     * @param {Number} opts.walletableId 口座ID
     * @param {String} opts.startDate 取引日で絞込：開始日 (yyyy-mm-dd)
     * @param {String} opts.endDate 取引日で絞込：終了日 (yyyy-mm-dd)
     * @param {module:model/String} opts.entrySide 入金／出金 (入金: income, 出金: expense)
     * @param {Number} opts.offset 取得レコードのオフセット (デフォルト: 0)
     * @param {Number} opts.limit 取得レコードの件数 (デフォルト: 20, 最大: 100) 
     * @param {module:api/WalletTxnsApi~getWalletTxnsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletTxnsIndexResponse}
     */
    this.getWalletTxns = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getWalletTxns");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'walletable_type': opts['walletableType'],
        'walletable_id': opts['walletableId'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'entry_side': opts['entrySide'],
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
      var returnType = WalletTxnsIndexResponse;

      return this.apiClient.callApi(
        '/wallet_txns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

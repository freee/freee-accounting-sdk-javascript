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
    define(['ApiClient', 'model/BadRequestError', 'model/Parameters5', 'model/UnauthorizedError', 'model/WalletablesCreateResponse', 'model/WalletablesIndexResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/Parameters5'), require('../model/UnauthorizedError'), require('../model/WalletablesCreateResponse'), require('../model/WalletablesIndexResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.WalletablesApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.Parameters5, root.FreeeAccountingClient.UnauthorizedError, root.FreeeAccountingClient.WalletablesCreateResponse, root.FreeeAccountingClient.WalletablesIndexResponse);
  }
}(this, function(ApiClient, BadRequestError, Parameters5, UnauthorizedError, WalletablesCreateResponse, WalletablesIndexResponse) {
  'use strict';

  /**
   * Walletables service.
   * @module api/WalletablesApi
   * @version v0.0.2
   */

  /**
   * Constructs a new WalletablesApi. 
   * @alias module:api/WalletablesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createWalletable operation.
     * @callback module:api/WalletablesApi~createWalletableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletablesCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 口座の作成
     * 
     * @param {Object} opts Optional parameters
     * @param {module:model/Parameters5} opts.parameters 口座の作成
     * @param {module:api/WalletablesApi~createWalletableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletablesCreateResponse}
     */
    this.createWalletable = function(opts, callback) {
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
      var returnType = WalletablesCreateResponse;

      return this.apiClient.callApi(
        '/walletables', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWalletables operation.
     * @callback module:api/WalletablesApi~getWalletablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WalletablesIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 口座一覧の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.withBalance 残高情報を含める
     * @param {module:api/WalletablesApi~getWalletablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WalletablesIndexResponse}
     */
    this.getWalletables = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getWalletables");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
        'with_balance': opts['withBalance'],
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
      var returnType = WalletablesIndexResponse;

      return this.apiClient.callApi(
        '/walletables', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

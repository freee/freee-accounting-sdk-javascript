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
    define(['ApiClient', 'model/BadRequestError', 'model/TaxesCodesResponse', 'model/TaxesIndexResponse', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/TaxesCodesResponse'), require('../model/TaxesIndexResponse'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.TaxesApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.TaxesCodesResponse, root.FreeeAccountingClient.TaxesIndexResponse, root.FreeeAccountingClient.UnauthorizedError);
  }
}(this, function(ApiClient, BadRequestError, TaxesCodesResponse, TaxesIndexResponse, UnauthorizedError) {
  'use strict';

  /**
   * Taxes service.
   * @module api/TaxesApi
   * @version v0.0.1
   */

  /**
   * Constructs a new TaxesApi. 
   * @alias module:api/TaxesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTaxCodes operation.
     * @callback module:api/TaxesApi~getTaxCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxesCodesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 税区分コード一覧の取得
     * 
     * @param {module:api/TaxesApi~getTaxCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxesCodesResponse}
     */
    this.getTaxCodes = function(callback) {
      var postBody = null;


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
      var returnType = TaxesCodesResponse;

      return this.apiClient.callApi(
        '/taxes/codes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaxes operation.
     * @callback module:api/TaxesApi~getTaxesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaxesIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 税区分一覧の取得 (deprecated)
     * 
     * @param {Number} companyId 事業所ID
     * @param {module:api/TaxesApi~getTaxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaxesIndexResponse}
     */
    this.getTaxes = function(companyId, callback) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getTaxes");
      }


      var pathParams = {
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
      var returnType = TaxesIndexResponse;

      return this.apiClient.callApi(
        '/taxes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

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
    define(['ApiClient', 'model/BadRequestError', 'model/ExpenseApplicationLineTemplatesIndexResponse', 'model/UnauthorizedError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ExpenseApplicationLineTemplatesIndexResponse'), require('../model/UnauthorizedError'));
  } else {
    // Browser globals (root is window)
    if (!root.FreeeAccountingClient) {
      root.FreeeAccountingClient = {};
    }
    root.FreeeAccountingClient.ExpenseApplicationLineTemplatesApi = factory(root.FreeeAccountingClient.ApiClient, root.FreeeAccountingClient.BadRequestError, root.FreeeAccountingClient.ExpenseApplicationLineTemplatesIndexResponse, root.FreeeAccountingClient.UnauthorizedError);
  }
}(this, function(ApiClient, BadRequestError, ExpenseApplicationLineTemplatesIndexResponse, UnauthorizedError) {
  'use strict';

  /**
   * ExpenseApplicationLineTemplates service.
   * @module api/ExpenseApplicationLineTemplatesApi
   * @version v1.0
   */

  /**
   * Constructs a new ExpenseApplicationLineTemplatesApi. 
   * @alias module:api/ExpenseApplicationLineTemplatesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getExpenseApplicationLineTemplates operation.
     * @callback module:api/ExpenseApplicationLineTemplatesApi~getExpenseApplicationLineTemplatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExpenseApplicationLineTemplatesIndexResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 経費科目一覧の取得
     * 
     * @param {Number} companyId 事業所ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset 取得レコードのオフセット (デフォルト: 0)
     * @param {Number} opts.limit 取得レコードの件数 (デフォルト: 20, 最大: 100)
     * @param {module:api/ExpenseApplicationLineTemplatesApi~getExpenseApplicationLineTemplatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExpenseApplicationLineTemplatesIndexResponse}
     */
    this.getExpenseApplicationLineTemplates = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling getExpenseApplicationLineTemplates");
      }


      var pathParams = {
      };
      var queryParams = {
        'company_id': companyId,
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
      var returnType = ExpenseApplicationLineTemplatesIndexResponse;

      return this.apiClient.callApi(
        '/expense_application_line_templates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
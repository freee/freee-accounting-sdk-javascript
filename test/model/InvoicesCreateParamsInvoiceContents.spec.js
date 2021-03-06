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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FreeeAccountingClient);
  }
}(this, function(expect, FreeeAccountingClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InvoicesCreateParamsInvoiceContents', function() {
    it('should create an instance of InvoicesCreateParamsInvoiceContents', function() {
      // uncomment below and update the code to test InvoicesCreateParamsInvoiceContents
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be.a(FreeeAccountingClient.InvoicesCreateParamsInvoiceContents);
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property qty (base name: "qty")', function() {
      // uncomment below and update the code to test the property qty
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property unit (base name: "unit")', function() {
      // uncomment below and update the code to test the property unit
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unit_price")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property vat (base name: "vat")', function() {
      // uncomment below and update the code to test the property vat
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property accountItemId (base name: "account_item_id")', function() {
      // uncomment below and update the code to test the property accountItemId
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property taxCode (base name: "tax_code")', function() {
      // uncomment below and update the code to test the property taxCode
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item_id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property sectionId (base name: "section_id")', function() {
      // uncomment below and update the code to test the property sectionId
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property tagIds (base name: "tag_ids")', function() {
      // uncomment below and update the code to test the property tagIds
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property segment1TagId (base name: "segment_1_tag_id")', function() {
      // uncomment below and update the code to test the property segment1TagId
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property segment2TagId (base name: "segment_2_tag_id")', function() {
      // uncomment below and update the code to test the property segment2TagId
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

    it('should have the property segment3TagId (base name: "segment_3_tag_id")', function() {
      // uncomment below and update the code to test the property segment3TagId
      //var instance = new FreeeAccountingClient.InvoicesCreateParamsInvoiceContents();
      //expect(instance).to.be();
    });

  });

}));

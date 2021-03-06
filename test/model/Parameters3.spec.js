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
    instance = new FreeeAccountingClient.Parameters3();
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

  describe('Parameters3', function() {
    it('should create an instance of Parameters3', function() {
      // uncomment below and update the code to test Parameters3
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be.a(FreeeAccountingClient.Parameters3);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property nameKana (base name: "name_kana")', function() {
      // uncomment below and update the code to test the property nameKana
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property contactName (base name: "contact_name")', function() {
      // uncomment below and update the code to test the property contactName
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property addressAttributes (base name: "address_attributes")', function() {
      // uncomment below and update the code to test the property addressAttributes
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property phone1 (base name: "phone1")', function() {
      // uncomment below and update the code to test the property phone1
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property phone2 (base name: "phone2")', function() {
      // uncomment below and update the code to test the property phone2
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property fax (base name: "fax")', function() {
      // uncomment below and update the code to test the property fax
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property salesInformationAttributes (base name: "sales_information_attributes")', function() {
      // uncomment below and update the code to test the property salesInformationAttributes
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property headCount (base name: "head_count")', function() {
      // uncomment below and update the code to test the property headCount
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property corporateNumber (base name: "corporate_number")', function() {
      // uncomment below and update the code to test the property corporateNumber
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property fiscalYearsAttributes (base name: "fiscal_years_attributes")', function() {
      // uncomment below and update the code to test the property fiscalYearsAttributes
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property docTemplate (base name: "doc_template")', function() {
      // uncomment below and update the code to test the property docTemplate
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property txnNumberFormat (base name: "txn_number_format")', function() {
      // uncomment below and update the code to test the property txnNumberFormat
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

    it('should have the property privateSettlement (base name: "private_settlement")', function() {
      // uncomment below and update the code to test the property privateSettlement
      //var instance = new FreeeAccountingClient.Parameters3();
      //expect(instance).to.be();
    });

  });

}));

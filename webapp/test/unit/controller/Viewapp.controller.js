/*global QUnit*/

sap.ui.define([
	"comexample/maps/controller/Viewapp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Viewapp Controller");

	QUnit.test("I should test the Viewapp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

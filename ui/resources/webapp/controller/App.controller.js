sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("ui.ui.controller.App", {
		onInit: function(oEvent){
			var oModel = this.getOwnerComponent().getModel();
			this.getView().setModel(oModel);
			
			var oNewUserModel = new JSONModel({
				userid: "",
				firstname: "",
				lastname: ""
			});
			this.getView().setModel(oNewUserModel, "new");
		},
		
		onSavePress: function(oEvent){
			var oModel = this.getView().getModel();
			var oNewUser = this.getView().getModel("new").getData();
			
			oModel.create("/users", oNewUser, {
				success: function(oData, oResponse){
					MessageBox.show(JSON.stringify(oResponse));
				},
				error: function(oError){
					MessageBox.error(JSON.stringify(oError));
				}
			});
		}
	});
});
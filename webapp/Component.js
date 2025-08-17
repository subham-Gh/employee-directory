sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/myorg/employeedirectory/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("com.myorg.employeedirectory.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // //set employee model
            // var oModel = new JSONModel(jQuery.sap.getModulePath("com.myorg.employee-directory.model", "/employees.json"));
            // this.getView().setModel(oModel, "employeeModel");

            // enable routing
            this.getRouter().initialize();
        }
    });
});
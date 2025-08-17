/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/myorg/employeedirectory/test/integration/AllJourneys"
], function () {
	QUnit.start();
});

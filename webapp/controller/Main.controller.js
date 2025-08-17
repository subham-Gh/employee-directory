sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/table/Column",
    "sap/m/Text",
    "sap/m/BusyDialog",
    "sap/ui/export/Spreadsheet",
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
], (BaseController, JSONModel, Filter, FilterOperator, Column, Text, BusyDialog, Spreadsheet, ChartFormatter, Format) => {
    "use strict";

    return BaseController.extend("com.myorg.employeedirectory.controller.Main", {
        onInit() {
            var oModel = new JSONModel({
                "employees": [
                    {
                        "id": "1",
                        "name": "John Doe",
                        "role": "Software Engineer",
                        "key": "SE",
                        "email": "john@example.com",
                        "experience": 5,
                        "phone": "123-456-7890",
                        "skills": ["React", "Node.js", "SQL"]
                    },
                    {
                        "id": "2",
                        "name": "Jane Smith",
                        "role": "Product Manager",
                        "key": "PM",
                        "email": "jane@example.com",
                        "experience": 10,
                        "phone": "987-654-3210",
                        "skills": ["Agile", "Scrum", "UX"]
                    },
                    {
                        "id": "3",
                        "name": "Alice Johnson",
                        "role": "Data Scientist",
                        "key": "DS",
                        "email": "alice.johnson@company.com",
                        "experience": 7,
                        "phone": "564-783-1982",
                        "skills": ["Python", "SQL", "Machine Learning"]
                    },
                    {
                        "id": "4",
                        "name": "Bob Anderson",
                        "role": "DevOps Engineer",
                        "key": "DE",
                        "email": "bob.anderson@techcorp.com",
                        "experience": 4,
                        "phone": "892-456-7893",
                        "skills": ["AWS", "Docker", "Kubernetes"]
                    },
                    {
                        "id": "5",
                        "name": "Charlie Evans",
                        "role": "UX Designer",
                        "key": "UX",
                        "email": "charlie.evans@example.com",
                        "experience": 6,
                        "phone": "451-678-9032",
                        "skills": ["Figma", "Sketch", "User Research"]
                    },
                    {
                        "id": "6",
                        "name": "Diana Brown",
                        "role": "QA Tester",
                        "key": "QA",
                        "email": "diana.brown@company.com",
                        "experience": 3,
                        "phone": "212-678-9802",
                        "skills": ["Selenium", "TestRail", "JIRA"]
                    },
                    {
                        "id": "7",
                        "name": "Ethan Garcia",
                        "role": "Software Engineer",
                        "key": "SE",
                        "email": "ethan.garcia@techcorp.com",
                        "experience": 8,
                        "phone": "325-987-1023",
                        "skills": ["JavaScript", "Node.js", "MongoDB"]
                    },
                    {
                        "id": "8",
                        "name": "Fiona Clark",
                        "role": "Product Manager",
                        "key": "PM",
                        "email": "fiona.clark@example.com",
                        "experience": 9,
                        "phone": "198-456-7890",
                        "skills": ["Agile", "Stakeholder Management", "Roadmapping"]
                    },
                    {
                        "id": "9",
                        "name": "George Hill",
                        "role": "Software Engineer",
                        "key": "SE",
                        "email": "george.hill@company.com",
                        "experience": 2,
                        "phone": "445-223-1123",
                        "skills": ["Java", "Spring Boot", "MySQL"]
                    },
                    {
                        "id": "10",
                        "name": "Hannah Davis",
                        "role": "UX Designer",
                        "key": "UX",
                        "email": "hannah.davis@techcorp.com",
                        "experience": 5,
                        "phone": "883-238-2943",
                        "skills": ["Figma", "HTML", "CSS"]
                    },
                    {
                        "id": "11",
                        "name": "Ian Franklin",
                        "role": "DevOps Engineer",
                        "key": "DE",
                        "email": "ian.franklin@example.com",
                        "experience": 6,
                        "phone": "478-125-6721",
                        "skills": ["Terraform", "AWS", "CI/CD"]
                    },
                    {
                        "id": "12",
                        "name": "Julia Ingram",
                        "role": "Data Scientist",
                        "key": "DS",
                        "email": "julia.ingram@company.com",
                        "experience": 4,
                        "phone": "910-673-9087",
                        "skills": ["R", "Python", "Statistics"]
                    },
                    {
                        "id": "13",
                        "name": "Kyle Morgan",
                        "role": "QA Tester",
                        "key": "QA",
                        "email": "kyle.morgan@techcorp.com",
                        "experience": 3,
                        "phone": "392-104-3948",
                        "skills": ["Postman", "JIRA", "Automation"]
                    },
                    {
                        "id": "14",
                        "name": "Laura Scott",
                        "role": "Software Engineer",
                        "key": "SE",
                        "email": "laura.scott@example.com",
                        "experience": 7,
                        "phone": "820-938-1284",
                        "skills": ["C#", ".NET", "Azure"]
                    },
                    {
                        "id": "15",
                        "name": "Michael Young",
                        "role": "Product Manager",
                        "key": "PM",
                        "email": "michael.young@company.com",
                        "experience": 11,
                        "phone": "847-128-8372",
                        "skills": ["Product Strategy", "Analytics", "Agile"]
                    },
                    {
                        "id": "16",
                        "name": "Nina Lewis",
                        "role": "UX Designer",
                        "key": "UX",
                        "email": "nina.lewis@techcorp.com",
                        "experience": 5,
                        "phone": "564-839-2934",
                        "skills": ["Wireframes", "Figma", "User Flows"]
                    },
                    {
                        "id": "17",
                        "name": "Oscar Bennett",
                        "role": "DevOps Engineer",
                        "key": "DE",
                        "email": "oscar.bennett@example.com",
                        "experience": 6,
                        "phone": "291-847-5632",
                        "skills": ["Ansible", "Jenkins", "Docker"]
                    },
                    {
                        "id": "18",
                        "name": "Paula Reed",
                        "role": "Data Scientist",
                        "key": "DS",
                        "email": "paula.reed@company.com",
                        "experience": 8,
                        "phone": "782-394-6723",
                        "skills": ["Pandas", "Data Analysis", "Python"]
                    },
                    {
                        "id": "19",
                        "name": "Quentin Howard",
                        "role": "QA Tester",
                        "key": "QA",
                        "email": "quentin.howard@techcorp.com",
                        "experience": 2,
                        "phone": "982-374-9103",
                        "skills": ["Bug Tracking", "Test Cases", "Selenium"]
                    },
                    {
                        "id": "20",
                        "name": "Rachel Knight",
                        "role": "Product Manager",
                        "key": "PM",
                        "email": "rachel.knight@example.com",
                        "experience": 10,
                        "phone": "582-934-7102",
                        "skills": ["Scrum", "Kanban", "Backlog Grooming"]
                    }
                ],
                "roles": [
                    { "key": "SE", "text": "Software Engineer" },
                    { "key": "PM", "text": "Product Manager" },
                    { "key": "DS", "text": "Data Scientist" },
                    { "key": "UX", "text": "UX Designer" },
                    { "key": "DE", "text": "DevOps Engineer" },
                    { "key": "QA", "text": "QA Tester" }
                ],
                "MAXDATE": new Date(),
                "bPDFButtonFlag": true,
                "bEXPORTButtonFlag": false,
                "oFilter": {}
            });
            this.setModel(oModel, "employeeModel");
        },
        //Chart Container change event
        attachContentChange: function (oEvent, Type) {
            var oBusyDialogReport = new sap.m.BusyDialog({}),
                oViewModel = this.getModel('employeeModel');
            oBusyDialogReport.open();
            var sIconID = oEvent.getParameters().selectedItemId;
            jQuery.sap.delayedCall(500, this, function (oEvent) {
                if (sIconID.indexOf(Type) >= 0) {
                    oViewModel.setProperty("/bPDFButtonFlag", true);
                    oViewModel.setProperty("/bEXPORTButtonFlag", false);
                } else {
                    oViewModel.setProperty("/bPDFButtonFlag", false);
                    oViewModel.setProperty("/bEXPORTButtonFlag", true);
                }
                oBusyDialogReport.close();
            });
        },

        //Filterbar search
        onFilterSearch: function (oEvent) {
            var oViewModel = this.getModel('employeeModel'),
                aNavFilter = [],
                oFilter = structuredClone(oViewModel.getProperty('/oFilter'));

            if (!!oFilter.name) { //Name
                aNavFilter.push(new Filter('name', 'Contains', oFilter.name));
            }
            if (!!oFilter.roles) { //Roles
                aNavFilter.push(new Filter('key', 'EQ', oFilter.roles));
            }
            if (!!oFilter.email) { //Email
                aNavFilter.push(new Filter('email', 'Contains', oFilter.email));
            }
            if (!!oFilter.skill) { //Skill
                aNavFilter.push(new Filter('skill', 'Contains', oFilter.skill));
            }
            this.byId("idDataTemp").getBinding('data').filter(aNavFilter);
            this.byId("idEmpTable").getBinding('rows').filter(aNavFilter);
        },

        //Clear Filter search
        onFilterClear: function (oEvent) {
            var oViewModel = this.getModel('employeeModel');

            oViewModel.setProperty("/oFilter", {});
            this.onFilterSearch();
        },

        //Function to export
		onPressExport: function (oEvent, id, SheetName) {
			var oViewModel = this.getModel('employeeModel'),
				aTableFilter = oViewModel.getProperty('/aTableFilter'),
				oRB = this.getResourceBundle(),
				oViewName = this.getOwnerComponent().getMetadata().getRootView().viewName;
			var that = this;
			var oTable = this.getView().byId(id);
			
			jQuery.sap.delayedCall(500, this, function () {
				var oBinding = oTable.getBinding('rows'),
					getContexts = oBinding.getContexts(),
					oModel = oBinding.getModel();

				var aColumn = [],
					visiblecolumn = oTable._getVisibleColumns();

				for (var k = 0; k < visiblecolumn.length; k++) {
					var visiblecolumnName = visiblecolumn[k].getLabel().getText();
					if (visiblecolumn[k].getTemplate().getBindingInfo('text') !== undefined) {
						var path = visiblecolumn[k].getTemplate().getBindingInfo("text").parts[0].path;
						if (path === 'EVDDT') {
							aColumn.push({
								label: visiblecolumnName,
								property: path,
								type: "Date",
								// type: 'string',
		                        format: 'dd-mm-yyyy',
		                        textAlign: 'left',
		                        utc: false,
								width: 20
							});
						} else {
							aColumn.push({
								label: visiblecolumnName,
								property: path,
								type: 'string',
								width: 20
							});
						}
					}
				}
				
				if (id === 'idEmpTable') {
					var oSettings = {
						workbook: {
							columns: aColumn,
							context: {
								sheetName: SheetName
							},
							filters: false
						},
						dataSource: oTable.getBinding("rows").oList,
						fileName: SheetName
					};
				} else {
					var oSettings = {
						workbook: {
							columns: aColumn,
							context: {
								sheetName: SheetName
							}
						},
						dataSource: location.host.split('-')[0] === 'webidetesting6154741' ? oBinding : {
							type: 'odata',
							dataUrl: '/sap/fiori/' + oViewName.split('.')[1].replace(/\_/g, '').toLowerCase() + (oBinding.getDownloadUrl ? oBinding.getDownloadUrl() :
								null),
							serviceUrl: '/sap/fiori/' + oViewName.split('.')[1].replace(/\_/g, '').toLowerCase() + oModel.sServiceUrl,
							headers: oModel.getHeaders ? oModel.getHeaders() : null,
							count: oBinding.getLength ? oBinding.getLength() : null,
							useBatch: true // Default for ODataModel V2
						},
						fileName: SheetName + ".xlsx",
						showProgress: true
					};
					
				}
				var oSheet = new Spreadsheet(oSettings);
				oSheet.build().then(_ => sap.m.MessageToast.show(oRB.getText("successExported"))).finally(_ => oSheet.destroy());

				// new Spreadsheet(oSettings)
				// 	.build()
				// 	.then(function () {
				// 		sap.m.MessageToast.show(that.getResourceBundle().getText("successExported"));
				// 	});
			});
		},
		
		//Function to print PDF
		onPressPrintPdf: function (oEvent, idChart, aTableData, sFileName) {
			var oBusyDialogReport = new BusyDialog(),
				oViewModel = this.getModel('employeeModel');
			oBusyDialogReport.open();
			var that = this;
			that.ActDataArr = [];
			var reqArr = oViewModel.getProperty(aTableData);
			var arr = reqArr;
			that.iFlag = arr.length > 0 ? true : false;
			var aKeys = arr.length > 0 ? Object.keys(arr[0]) : [];
			if (idChart === 'idEmpChart') {
				var tableData = arr.map(function (obj) {
					return [obj.SORCE === null ? "" : obj.SORCE, obj.COUNT.toString()];
				});
				that.ActDataArr = tableData;
				that.ActDataArr.unshift(['Employee Name', 'Experience']);
			} 
			that.CMHeight = 120;
			var oVizFrame = this.getView().byId(idChart),
				PdfName = sFileName;
			if (that.iFlag === true) {
				var chart = oVizFrame;
				var svg = chart.getDomRef().getElementsByTagName("svg")[0];
				var canvas = document.createElement("canvas");
				var bBox = svg.getBBox();
				canvas.width = bBox.width;
				canvas.height = bBox.height;
				var context = canvas.getContext("2d");
				var imageObj = new Image();
				imageObj.src = "data:image/svg+xml," + jQuery.sap.encodeURL(svg.outerHTML.replace(/^<svg/,
					'<svg xmlns="http://www.w3.org/2000/svg" version="1.1"'));
				imageObj.onload = function () {
					context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
					var dataURL = canvas.toDataURL('base64');

					var doc = new jsPDF('p', 'mm', 'a3');
					var tableData = that.ActDataArr;
					var columnWidth = [80];
					for (var i = 0; i < that.ActDataArr[0].length - 1; i++) {
						columnWidth.push(40);
					}
					// Set the starting position of the chart
					var chartStartX = 10;
					var chartStartY = 10;

					// Set the column widths and row heights for the table
					// var columnWidth = [100, 50, 50, 50, 50, 50, 50];
					var rowHeight = 10;

					// Draw the chart (Assuming you have code to draw the chart here)
					// ...

					// Calculate the height of the chart
					// var chartHeight = 120; // Replace with the actual height of your chart
					var chartHeight = that.CMHeight;
					// Set the starting position of the table below the chart
					var tableStartX = 20;
					var tableStartY = chartStartY + chartHeight + 20; // Adjust the vertical spacing as needed

					// var imgProps = doc.getImageProperties(dataURL); 
					var imgProps = doc.getImageProperties ? doc.getImageProperties(dataURL) : 
						{
						    "fileType": "PNG",
						    "width": 726,
						    "height": 480,
						    "colorSpace": "DeviceRGB",
						    "compressionMode": "FlateDecode",
						    "bitsPerComponent": 8
						};
					// var pdfWidth = doc.internal.pageSize.getWidth();
					var pdfWidth = Object.keys(doc.internal.pageSize).length > 2 ? doc.internal.pageSize.getWidth() : 297.0000833333333; 
					var pdfHeight = Object.keys(doc.internal.pageSize).length > 2 ? doc.internal.pageSize.getHeight() : 419.99958333333325; 
					var pdfHeight1 = (imgProps.height * pdfWidth) / imgProps.width;
					if (pdfHeight1 > pdfWidth) {
						pdfHeight = pdfWidth;
					}

					// Add the chart image
					context.clearRect(0, 0, pdfWidth, pdfHeight1);
					doc.addImage(dataURL, 'jpg', 0, 0, pdfWidth, pdfHeight1);

					// Set the table headers' background color
					doc.setFillColor(41, 128, 185); // Header color
					doc.setTextColor(255); // Header text color

					// Set the table headers' text styles
					// doc.setFontStyle("bold");

					// Loop through the table data and create the table
					// for (var i = 0; i < tableData.length; i++) {
					// 	var rowData = tableData[i];
					// 	for (var j = 0; j < rowData.length; j++) {
					// 		var cellData = rowData[j].toString();
					// 		var isColumnHeader = j === 0; // Check if it is the first row (column headers)
					// 		var fillColor = isColumnHeader ? [192, 192, 192] : [255, 255, 255];
					// 		if (tableStartY + rowHeight > doc.internal.pageSize.getHeight()) {
					// 			doc.addPage(); // Add a new page if there is insufficient space
					// 			tableStartY = 10; // Reset the table start position on the new page
					// 		}
					// 		doc.setDrawColor(0);
					// 		if (i === 0) {
					// 			doc.setFillColor(238, 238, 228);
					// 		} else {
					// 			doc.setFillColor(255, 255, 255);
					// 		}
					// 		doc.rect(tableStartX, tableStartY, columnWidth[j], rowHeight, "FD");
					// 		doc.setTextColor(0);
					// 		doc.setFontSize(10);
					// 		doc.text(tableStartX + 2, tableStartY + 8, cellData, {
					// 			maxWidth: 80
					// 		});
					// 		tableStartX += columnWidth[j];
					// 	}
					// 	tableStartX = 20;
					// 	tableStartY += rowHeight;
					// }
					doc.save(PdfName);
					oBusyDialogReport.close();
				};
			} else {
				sap.m.MessageToast.show("No data");
				oBusyDialogReport.close();
			}
		},

    });
});
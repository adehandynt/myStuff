(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getCategoricalSource = function () {
        return [
            { country: "Germany", amount: 15, secondVal: 14, thirdVal: 24, impact: 0, year: 0 },
            { country: "France", amount: 13, secondVal: 23, thirdVal: 25, impact: 0, year: 0 },
            { country: "Bulgaria", amount: 24, secondVal: 17, thirdVal: 23, impact: 0, year: 0 },
            { country: "Spain", amount: 11, secondVal: 19, thirdVal: 24, impact: 0, year: 0 },
            { country: "USA", amount: 18, secondVal: 8, thirdVal: 21, impact: 0, year: 0 }
        ];
    };
    DataService.prototype.getPieSource = function () {
        return [
            { brand: "Audi", amount: 10 },
            { brand: "Mercedes", amount: 76 },
            { brand: "Fiat", amount: 60 },
            { brand: "BMW", amount: 24 },
            { brand: "Crysler", amount: 40 }
        ];
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".page {\r\n    background-color: rgb(237, 237, 237);\r\n}\r\n\r\n.cardStyle {\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(24, 20, 20);\r\n}\r\n\r\n.cardContent {\r\n    padding: 20;\r\n    color: rgb(126, 126, 126);\r\n    font-weight: 500;\r\n    font-size: 16;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.assetWorth {\r\n    text-align: center;\r\n    font-size: 30;\r\n    color: rgb(170, 169, 169);\r\n    margin-top: 10;\r\n}\r\n\r\n.stuffFont {\r\n    font-weight: bold;\r\n    color: rgb(156, 156, 156);\r\n    font-size: 10;\r\n}"

/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label text=\"Home\"></Label>\r\n</ActionBar>\r\n<ScrollView orientation=\"vertical\">\r\n    <GridLayout class=\"m-15\">\r\n        <StackLayout class=\"p-20\">\r\n            <Card:CardView class=\"cardStyle\" margin=\"10\" elevation=\"30\" radius=\"40\">\r\n                <StackLayout class=\"cardContent\">\r\n                    <Label text=\"Asset Worth\" />\r\n                    <Label class=\"assetWorth\" text=\"$ 450.00,00\" />\r\n                    <GridLayout columns=\"*,*\" rows=\"*,*\" class=\"m-15\">\r\n\r\n                        <Card:CardView class=\"cardStyle\" col=\"0\" row=\"0\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Stored\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"1\" row=\"0\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Miss\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"0\" row=\"1\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Maintenance\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"1\" row=\"1\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Lend\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n\r\n                    </GridLayout>\r\n                </StackLayout>\r\n\r\n            </Card:CardView>\r\n            <Card:CardView class=\"cardStyle\" margin=\"10\" elevation=\"30\" radius=\"40\">\r\n                <StackLayout class=\"cardContent\">\r\n                    <Label text=\"Graph\" class=\"m-b-10\" />\r\n                    <GridLayout rows=\"*\" height=\"500px\">\r\n                        <RadPieChart allowAnimation=\"true\" row=\"0\">\r\n                            <PieSeries tkPieSeries selectionMode=\"DataPoint\" expandRadius=\"0.08\" outerRadiusFactor=\"0.9\" [items]=\"pieSource\" valueProperty=\"Amount\" legendLabel=\"Brand\"></PieSeries>\r\n                            <RadLegendView tkPieLegend position=\"Right\" title=\"Brands\" offsetOrigin=\"TopRight\" width=\"90\" enableSelection=\"true\">\r\n                            </RadLegendView>\r\n                        </RadPieChart>\r\n                    </GridLayout>\r\n                </StackLayout>\r\n            </Card:CardView>\r\n        </StackLayout>\r\n    </GridLayout>\r\n\r\n</ScrollView>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/element-registry");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/data.service.ts");



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])("CardView", function () { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js").CardView; });

var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dataService) {
        this._dataService = _dataService;
        // tslint:disable-next-line:array-type
        this.pieSource = [
            { Brand: "Audi", Amount: 10 },
            { Brand: "Mercedes", Amount: 76 },
            { Brand: "Fiat", Amount: 60 },
            { Brand: "BMW", Amount: 24 },
            { Brand: "Crysler", Amount: 40 }
        ];
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        // this._pieSource = new ObservableArray(this._dataService.getPieSource());
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-chart/angular");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4__);





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUIChartModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZGF0YS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFLM0M7SUFBQTtJQW9CQSxDQUFDO0lBbEJDLDBDQUFvQixHQUFwQjtRQUNFLE9BQU87WUFDSCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ25GLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7WUFDbEYsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNwRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxF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TTtZQUVoQiwrREFBb0M7WUFFcEMsU0FBUyxFQUFFLENBQUMseURBQVcsQ0FBQzs7U0FDM0IsQ0FBQzt5Q0FXb0MseURBQVc7T0FWcEMsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBO0FBdEJ5Qjs7Ozs7Ozs7O0FDbEIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNEO0FBRWI7QUFDVDtBQUN5QjtBQWlCMUU7SUFBQTtJQUF5QixDQUFDO0lBQWIsVUFBVTtRQWhCdEIsZ0VBQVUsRUFBRTtRQUNaLDhEQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsb0ZBQXdCO2dCQUN4QixzRUFBaUI7Z0JBQ2pCLHVGQUF5QjtnQkFDekIsb0ZBQXdCO2dCQUN4QixzRUFBaUI7YUFDcEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNkRBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBRztJQUFELGlCQUFDO0NBQUE7QUFBSCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSBcIi4vY291bnRyeVwiO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vY2FyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG4gIFxuICBnZXRDYXRlZ29yaWNhbFNvdXJjZSgpOiBBcnJheTxDb3VudHJ5PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyBjb3VudHJ5OiBcIkdlcm1hbnlcIiwgYW1vdW50OiAxNSwgc2Vjb25kVmFsOiAxNCwgdGhpcmRWYWw6IDI0LCBpbXBhY3Q6IDAsIHllYXI6IDAgfSxcbiAgICAgICAgeyBjb3VudHJ5OiBcIkZyYW5jZVwiLCBhbW91bnQ6IDEzLCBzZWNvbmRWYWw6IDIzLCB0aGlyZFZhbDogMjUsIGltcGFjdDogMCwgeWVhcjogMCB9LFxuICAgICAgICB7IGNvdW50cnk6IFwiQnVsZ2FyaWFcIiwgYW1vdW50OiAyNCwgc2Vjb25kVmFsOiAxNywgdGhpcmRWYWw6IDIzLCBpbXBhY3Q6IDAsIHllYXI6IDAgfSxcbiAgICAgICAgeyBjb3VudHJ5OiBcIlNwYWluXCIsIGFtb3VudDogMTEsIHNlY29uZFZhbDogMTksIHRoaXJkVmFsOiAyNCwgaW1wYWN0OiAwLCB5ZWFyOiAwIH0sXG4gICAgICAgIHsgY291bnRyeTogXCJVU0FcIiwgYW1vdW50OiAxOCwgc2Vjb25kVmFsOiA4LCB0aGlyZFZhbDogMjEsIGltcGFjdDogMCwgeWVhcjogMCB9XG4gICAgXTtcbn1cbiAgZ2V0UGllU291cmNlKCk6IEFycmF5PENhcj4ge1xuICByZXR1cm4gW1xuICAgICAgeyBicmFuZDogXCJBdWRpXCIsIGFtb3VudDogMTAgfSxcbiAgICAgIHsgYnJhbmQ6IFwiTWVyY2VkZXNcIiwgYW1vdW50OiA3NiB9LFxuICAgICAgeyBicmFuZDogXCJGaWF0XCIsIGFtb3VudDogNjAgfSxcbiAgICAgIHsgYnJhbmQ6IFwiQk1XXCIsIGFtb3VudDogMjQgfSxcbiAgICAgIHsgYnJhbmQ6IFwiQ3J5c2xlclwiLCBhbW91bnQ6IDQwIH1cbiAgXTtcbn1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCIucGFnZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNywgMjM3KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRTdHlsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgY29sb3I6IHJnYigyNCwgMjAsIDIwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRDb250ZW50IHtcXHJcXG4gICAgcGFkZGluZzogMjA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTY7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFzc2V0V29ydGgge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzA7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTcwLCAxNjksIDE2OSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3R1ZmZGb250IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGNvbG9yOiByZ2IoMTU2LCAxNTYsIDE1Nik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTA7XFxyXFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXI+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBBbmRyb2lkXFxyXFxuICAgIGJlY2F1c2UgQWN0aW9uSXRlbXMgYXJlIHNob3duIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBBY3Rpb25CYXJcXHJcXG4gICAgLS0+XFxyXFxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGlvczp2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiIGljb249XFxcInJlczovL21lbnVcXFwiICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgpXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxyXFxuICAgIDwhLS0gXFxyXFxuICAgIFVzZSB0aGUgQWN0aW9uSXRlbSBmb3IgSU9TIHdpdGggcG9zaXRpb24gc2V0IHRvIGxlZnQuIFVzaW5nIHRoZVxcclxcbiAgICBOYXZpZ2F0aW9uQnV0dG9uIGFzIGEgc2lkZS1kcmF3ZXIgYnV0dG9uIGluIGlPUyBpcyBub3QgcG9zc2libGUsXFxyXFxuICAgIGJlY2F1c2UgaXRzIGZ1bmN0aW9uIGlzIHRvIGFsd2F5cyBuYXZpZ2F0ZSBiYWNrIGluIHRoZSBhcHBsaWNhdGlvbi5cXHJcXG4gICAgLS0+XFxyXFxuICAgIDxBY3Rpb25JdGVtIGljb249XFxcInJlczovL21lbnVcXFwiIGFuZHJvaWQ6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCIgaW9zLnBvc2l0aW9uPVxcXCJsZWZ0XFxcIj5cXHJcXG4gICAgPC9BY3Rpb25JdGVtPlxcclxcbiAgICA8TGFiZWwgdGV4dD1cXFwiSG9tZVxcXCI+PC9MYWJlbD5cXHJcXG48L0FjdGlvbkJhcj5cXHJcXG48U2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcclxcbiAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibS0xNVxcXCI+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMjBcXFwiPlxcclxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIG1hcmdpbj1cXFwiMTBcXFwiIGVsZXZhdGlvbj1cXFwiMzBcXFwiIHJhZGl1cz1cXFwiNDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBc3NldCBXb3J0aFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiYXNzZXRXb3J0aFxcXCIgdGV4dD1cXFwiJCA0NTAuMDAsMDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCpcXFwiIHJvd3M9XFxcIiosKlxcXCIgY2xhc3M9XFxcIm0tMTVcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjEwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInN0dWZmRm9udFxcXCIgdGV4dD1cXFwiU3RvcmVkXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMFxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIk1pc3NcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjEwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInN0dWZmRm9udFxcXCIgdGV4dD1cXFwiTWFpbnRlbmFuY2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIxXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjEwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcInN0dWZmRm9udFxcXCIgdGV4dD1cXFwiTGVuZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcbiAgICAgICAgICAgIDxDYXJkOkNhcmRWaWV3IGNsYXNzPVxcXCJjYXJkU3R5bGVcXFwiIG1hcmdpbj1cXFwiMTBcXFwiIGVsZXZhdGlvbj1cXFwiMzBcXFwiIHJhZGl1cz1cXFwiNDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJHcmFwaFxcXCIgY2xhc3M9XFxcIm0tYi0xMFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIipcXFwiIGhlaWdodD1cXFwiNTAwcHhcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRQaWVDaGFydCBhbGxvd0FuaW1hdGlvbj1cXFwidHJ1ZVxcXCIgcm93PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpZVNlcmllcyB0a1BpZVNlcmllcyBzZWxlY3Rpb25Nb2RlPVxcXCJEYXRhUG9pbnRcXFwiIGV4cGFuZFJhZGl1cz1cXFwiMC4wOFxcXCIgb3V0ZXJSYWRpdXNGYWN0b3I9XFxcIjAuOVxcXCIgW2l0ZW1zXT1cXFwicGllU291cmNlXFxcIiB2YWx1ZVByb3BlcnR5PVxcXCJBbW91bnRcXFwiIGxlZ2VuZExhYmVsPVxcXCJCcmFuZFxcXCI+PC9QaWVTZXJpZXM+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRMZWdlbmRWaWV3IHRrUGllTGVnZW5kIHBvc2l0aW9uPVxcXCJSaWdodFxcXCIgdGl0bGU9XFxcIkJyYW5kc1xcXCIgb2Zmc2V0T3JpZ2luPVxcXCJUb3BSaWdodFxcXCIgd2lkdGg9XFxcIjkwXFxcIiBlbmFibGVTZWxlY3Rpb249XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhZExlZ2VuZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRQaWVDaGFydD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuPC9TY3JvbGxWaWV3PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFBpZVNlcmllcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnRcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSBcIi4uL2NvdW50cnlcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL2NhclwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmFycmF5LXR5cGVcclxuICAgIHBpZVNvdXJjZTogeyBCcmFuZDogc3RyaW5nLCBBbW91bnQ6IG51bWJlciB9W10gPSBbXHJcbiAgICAgICAgeyBCcmFuZDogXCJBdWRpXCIsIEFtb3VudDogMTAgfSxcclxuICAgICAgICB7IEJyYW5kOiBcIk1lcmNlZGVzXCIsIEFtb3VudDogNzYgfSxcclxuICAgICAgICB7IEJyYW5kOiBcIkZpYXRcIiwgQW1vdW50OiA2MCB9LFxyXG4gICAgICAgIHsgQnJhbmQ6IFwiQk1XXCIsIEFtb3VudDogMjQgfSxcclxuICAgICAgICB7IEJyYW5kOiBcIkNyeXNsZXJcIiwgQW1vdW50OiA0MCB9XHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBfcGllU291cmNlOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICAvLyB0aGlzLl9waWVTb3VyY2UgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFTZXJ2aWNlLmdldFBpZVNvdXJjZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEsIEluamVjdGFibGUgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XHJcbkBJbmplY3RhYmxlKClcclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSG9tZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIb21lQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge31cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[2],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/router/index.js");
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

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar>\r\n    <!-- \r\n    Use the NavigationButton as a side-drawer button in Android\r\n    because ActionItems are shown on the right side of the ActionBar\r\n    -->\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <!-- \r\n    Use the ActionItem for IOS with position set to left. Using the\r\n    NavigationButton as a side-drawer button in iOS is not possible,\r\n    because its function is to always navigate back in the application.\r\n    -->\r\n    <ActionItem icon=\"res://menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label text=\"Home\"></Label>\r\n</ActionBar>\r\n<ScrollView orientation=\"vertical\">\r\n    <GridLayout class=\"m-15\">\r\n        <StackLayout class=\"p-20\">\r\n            <Card:CardView class=\"cardStyle\" margin=\"10\" elevation=\"30\" radius=\"40\">\r\n                <StackLayout class=\"cardContent\">\r\n                    <Label text=\"Asset Worth\" />\r\n                    <Label class=\"assetWorth\" text=\"$ 450.00,00\" />\r\n                    <GridLayout columns=\"*,*\" rows=\"*,*\" class=\"m-15\">\r\n\r\n                        <Card:CardView class=\"cardStyle\" col=\"0\" row=\"0\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Stored\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"1\" row=\"0\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Miss\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"0\" row=\"1\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Maintenance\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n                        <Card:CardView class=\"cardStyle\" col=\"1\" row=\"1\" margin=\"10\" elevation=\"10\" radius=\"40\">\r\n                            <StackLayout class=\"cardContent\">\r\n                                <Label class=\"stuffFont\" text=\"Lend\" />\r\n                            </StackLayout>\r\n                        </Card:CardView>\r\n\r\n                    </GridLayout>\r\n                </StackLayout>\r\n\r\n            </Card:CardView>\r\n            <Card:CardView class=\"cardStyle\" margin=\"10\" elevation=\"30\" radius=\"40\">\r\n                <StackLayout class=\"cardContent\">\r\n                    <Label text=\"Hello Kitteh!\" class=\"m-b-10\" />\r\n                    <Image src=\"https://placekitten.com/200/200\" />\r\n                </StackLayout>\r\n            </Card:CardView>\r\n        </StackLayout>\r\n    </GridLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/angular/element-registry.js");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__);



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])("CardView", function () { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js").CardView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_1__["getRootView"]();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/angular/common.js");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2hvbWUvaG9tZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlDO0FBRThCO0FBRXRCO0FBRWpELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNkRBQWEsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkOUIseXFHOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFDb0I7QUFDeEUsNkZBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSwwQkFBTyxDQUFDLG1EQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFNN0U7SUFFSTtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQWJRLGFBQWE7UUFKekIsK0RBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLCtEQUFvQztTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBO0FBZHlCOzs7Ozs7Ozs7QUNWMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUViO0FBQ1Q7QUFjakQ7SUFBQTtJQUF5QixDQUFDO0lBQWIsVUFBVTtRQVp0Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG9GQUF3QjtnQkFDeEIsc0VBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDZEQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFBO0FBQUgiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyPlxcclxcbiAgICA8IS0tIFxcclxcbiAgICBVc2UgdGhlIE5hdmlnYXRpb25CdXR0b24gYXMgYSBzaWRlLWRyYXdlciBidXR0b24gaW4gQW5kcm9pZFxcclxcbiAgICBiZWNhdXNlIEFjdGlvbkl0ZW1zIGFyZSBzaG93biBvbiB0aGUgcmlnaHQgc2lkZSBvZiB0aGUgQWN0aW9uQmFyXFxyXFxuICAgIC0tPlxcclxcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiBpb3M6dmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIiBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiAodGFwKT1cXFwib25EcmF3ZXJCdXR0b25UYXAoKVxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcclxcbiAgICA8IS0tIFxcclxcbiAgICBVc2UgdGhlIEFjdGlvbkl0ZW0gZm9yIElPUyB3aXRoIHBvc2l0aW9uIHNldCB0byBsZWZ0LiBVc2luZyB0aGVcXHJcXG4gICAgTmF2aWdhdGlvbkJ1dHRvbiBhcyBhIHNpZGUtZHJhd2VyIGJ1dHRvbiBpbiBpT1MgaXMgbm90IHBvc3NpYmxlLFxcclxcbiAgICBiZWNhdXNlIGl0cyBmdW5jdGlvbiBpcyB0byBhbHdheXMgbmF2aWdhdGUgYmFjayBpbiB0aGUgYXBwbGljYXRpb24uXFxyXFxuICAgIC0tPlxcclxcbiAgICA8QWN0aW9uSXRlbSBpY29uPVxcXCJyZXM6Ly9tZW51XFxcIiBhbmRyb2lkOnZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCIgKHRhcCk9XFxcIm9uRHJhd2VyQnV0dG9uVGFwKClcXFwiIGlvcy5wb3NpdGlvbj1cXFwibGVmdFxcXCI+XFxyXFxuICAgIDwvQWN0aW9uSXRlbT5cXHJcXG4gICAgPExhYmVsIHRleHQ9XFxcIkhvbWVcXFwiPjwvTGFiZWw+XFxyXFxuPC9BY3Rpb25CYXI+XFxyXFxuPFNjcm9sbFZpZXcgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIj5cXHJcXG4gICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcIm0tMTVcXFwiPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTIwXFxcIj5cXHJcXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjMwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXQgV29ydGhcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImFzc2V0V29ydGhcXFwiIHRleHQ9XFxcIiQgNDUwLjAwLDAwXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwqXFxcIiByb3dzPVxcXCIqLCpcXFwiIGNsYXNzPVxcXCJtLTE1XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIlN0b3JlZFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ6Q2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQ6Q2FyZFZpZXcgY2xhc3M9XFxcImNhcmRTdHlsZVxcXCIgY29sPVxcXCIxXFxcIiByb3c9XFxcIjBcXFwiIG1hcmdpbj1cXFwiMTBcXFwiIGVsZXZhdGlvbj1cXFwiMTBcXFwiIHJhZGl1cz1cXFwiNDBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImNhcmRDb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic3R1ZmZGb250XFxcIiB0ZXh0PVxcXCJNaXNzXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIk1haW50ZW5hbmNlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMVxcXCIgbWFyZ2luPVxcXCIxMFxcXCIgZWxldmF0aW9uPVxcXCIxMFxcXCIgcmFkaXVzPVxcXCI0MFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiY2FyZENvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzdHVmZkZvbnRcXFwiIHRleHQ9XFxcIkxlbmRcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgIDwvQ2FyZDpDYXJkVmlldz5cXHJcXG4gICAgICAgICAgICA8Q2FyZDpDYXJkVmlldyBjbGFzcz1cXFwiY2FyZFN0eWxlXFxcIiBtYXJnaW49XFxcIjEwXFxcIiBlbGV2YXRpb249XFxcIjMwXFxcIiByYWRpdXM9XFxcIjQwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSGVsbG8gS2l0dGVoIVxcXCIgY2xhc3M9XFxcIm0tYi0xMFxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcImh0dHBzOi8vcGxhY2VraXR0ZW4uY29tLzIwMC8yMDBcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9DYXJkOkNhcmRWaWV3PlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcbjwvU2Nyb2xsVmlldz5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHt9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
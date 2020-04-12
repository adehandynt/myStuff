webpackHotUpdate(0,{

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
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/data/observable-array");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__);



Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_2__["registerElement"])("CardView", function () { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js").CardView; });


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_dataService) {
        this._dataService = _dataService;
        // Use the component constructor to inject providers.
    }
    Object.defineProperty(HomeComponent.prototype, "pieSource", {
        get: function () {
            return this._pieSource;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this._pieSource = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_4__["ObservableArray"](this._dataService.getPieSource());
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
            selector: "tk-chart-series-pie",
            template: __webpack_require__("./app/home/home.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]],
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBRUU7QUFDb0I7QUFDeEUsNkZBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSwwQkFBTyxDQUFDLG1EQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFHL0I7QUFDMkI7QUFTekU7SUFFSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekMscURBQXFEO0lBQ3pELENBQUM7SUFDRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0ZBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQix3RUFBZSxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7O2dCQWRpQyx5REFBVzs7SUFGcEMsYUFBYTtRQVB6QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQiwrREFBb0M7WUFHcEMsU0FBUyxFQUFFLENBQUMseURBQVcsQ0FBQzs7U0FDM0IsQ0FBQzt5Q0FHb0MseURBQVc7T0FGcEMsYUFBYSxDQWlCekI7SUFBRCxvQkFBQztDQUFBO0FBakJ5QiIsImZpbGUiOiIwLmU0Yzg1MTk5MmI5NTA4MDQxMjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5pbXBvcnQgeyBDb3VudHJ5IH0gZnJvbSBcIi4uL2NvdW50cnlcIjtcclxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL2NhclwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInRrLWNoYXJ0LXNlcmllcy1waWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHJpdmF0ZSBfcGllU291cmNlOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcbiAgICBnZXQgcGllU291cmNlKCk6IE9ic2VydmFibGVBcnJheTxDYXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGllU291cmNlO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgICAgdGhpcy5fcGllU291cmNlID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLl9kYXRhU2VydmljZS5nZXRQaWVTb3VyY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
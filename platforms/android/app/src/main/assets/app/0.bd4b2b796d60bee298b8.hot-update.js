webpackHotUpdate(0,{

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/element-registry");
/* harmony import */ var nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/data.service.ts");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/data/observable-array");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_3__);


Object(nativescript_angular_element_registry__WEBPACK_IMPORTED_MODULE_1__["registerElement"])("CardView", function () { return __webpack_require__("../node_modules/nativescript-cardview/cardview.js").CardView; });


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
        this._pieSource = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_3__["ObservableArray"](this._dataService.getPieSource());
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]],
            styles: [__webpack_require__("./app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFJc0I7QUFDeEUsNkZBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSwwQkFBTyxDQUFDLG1EQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFHL0I7QUFDMkI7QUFTekU7SUFFSSx1QkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekMscURBQXFEO0lBQ3pELENBQUM7SUFDRCxzQkFBSSxvQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBQ0QsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0ZBQWUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFFNUUsQ0FBQzs7Z0JBVmlDLHlEQUFXOztJQUZwQyxhQUFhO1FBUHpCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQiwrREFBb0M7WUFHcEMsU0FBUyxFQUFFLENBQUMseURBQVcsQ0FBQzs7U0FDM0IsQ0FBQzt5Q0FHb0MseURBQVc7T0FGcEMsYUFBYSxDQWtCekI7SUFBRCxvQkFBQztDQUFBO0FBbEJ5QiIsImZpbGUiOiIwLmJkNGIyYjc5NmQ2MGJlZTI5OGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUGllU2VyaWVzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydFwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi4vY291bnRyeVwiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vY2FyXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwcml2YXRlIF9waWVTb3VyY2U6IE9ic2VydmFibGVBcnJheTxDYXI+O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuICAgIGdldCBwaWVTb3VyY2UoKTogT2JzZXJ2YWJsZUFycmF5PENhcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9waWVTb3VyY2U7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICB0aGlzLl9waWVTb3VyY2UgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuX2RhdGFTZXJ2aWNlLmdldFBpZVNvdXJjZSgpKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgIC8vICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAvLyAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICAvLyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
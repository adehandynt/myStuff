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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFHRTtBQUNvQjtBQUN4RSw2RkFBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLDBCQUFPLENBQUMsbURBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUcvQjtBQVU5QztJQVVJLHVCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVQ3QyxzQ0FBc0M7UUFDdEMsY0FBUyxHQUF3QztZQUM3QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUNqQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtTQUNuQyxDQUFDO1FBR0UscURBQXFEO0lBQ3pELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO1FBQ3ZDLDJFQUEyRTtJQUMvRSxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLHdFQUFlLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Z0JBWGlDLHlEQUFXOztJQVZwQyxhQUFhO1FBUHpCLCtEQUFTLENBQUM7WUFFUCxRQUFRLEVBQUUsTUFBTTtZQUNoQiwrREFBb0M7WUFFcEMsU0FBUyxFQUFFLENBQUMseURBQVcsQ0FBQzs7U0FDM0IsQ0FBQzt5Q0FXb0MseURBQVc7T0FWcEMsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBO0FBdEJ5QiIsImZpbGUiOiIwLmQxOTIyODhlZGZjYjdlZjI0MzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUGllU2VyaWVzIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydFwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi4vY291bnRyeVwiO1xyXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vY2FyXCI7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL2RhdGEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczogW0RhdGFTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YXJyYXktdHlwZVxyXG4gICAgcGllU291cmNlOiB7IEJyYW5kOiBzdHJpbmcsIEFtb3VudDogbnVtYmVyIH1bXSA9IFtcclxuICAgICAgICB7IEJyYW5kOiBcIkF1ZGlcIiwgQW1vdW50OiAxMCB9LFxyXG4gICAgICAgIHsgQnJhbmQ6IFwiTWVyY2VkZXNcIiwgQW1vdW50OiA3NiB9LFxyXG4gICAgICAgIHsgQnJhbmQ6IFwiRmlhdFwiLCBBbW91bnQ6IDYwIH0sXHJcbiAgICAgICAgeyBCcmFuZDogXCJCTVdcIiwgQW1vdW50OiAyNCB9LFxyXG4gICAgICAgIHsgQnJhbmQ6IFwiQ3J5c2xlclwiLCBBbW91bnQ6IDQwIH1cclxuICAgIF07XHJcbiAgICBwcml2YXRlIF9waWVTb3VyY2U6IE9ic2VydmFibGVBcnJheTxDYXI+O1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgIC8vIHRoaXMuX3BpZVNvdXJjZSA9IG5ldyBPYnNlcnZhYmxlQXJyYXkodGhpcy5fZGF0YVNlcnZpY2UuZ2V0UGllU291cmNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
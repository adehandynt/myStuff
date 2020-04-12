(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["vendor"],{

/***/ "../node_modules/nativescript-cardview/cardview-common.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = __webpack_require__("tns-core-modules/color");
var content_view_1 = __webpack_require__("tns-core-modules/ui/content-view");
var view_1 = __webpack_require__("tns-core-modules/ui/core/view");
exports.backgroundColorProperty = view_1.backgroundColorProperty;
exports.backgroundInternalProperty = view_1.backgroundInternalProperty;
var CardViewCommon = (function (_super) {
    __extends(CardViewCommon, _super);
    function CardViewCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CardViewCommon;
}(content_view_1.ContentView));
exports.CardViewCommon = CardViewCommon;
exports.radiusProperty = new content_view_1.Property({
    name: 'radius',
    valueConverter: function (value) { return +value; }
});
exports.radiusProperty.register(CardViewCommon);
exports.elevationProperty = new content_view_1.Property({
    name: 'elevation',
    valueConverter: function (value) { return +value; }
});
exports.elevationProperty.register(CardViewCommon);
exports.rippleProperty = new content_view_1.Property({
    name: 'ripple',
    valueConverter: function (value) { return value === 'true'; }
});
exports.rippleProperty.register(CardViewCommon);
exports.shadowRadiusProperty = new content_view_1.Property({
    name: 'shadowRadius',
    valueConverter: function (value) { return +value; }
});
exports.shadowRadiusProperty.register(CardViewCommon);
exports.shadowOffsetWidthProperty = new content_view_1.Property({
    name: 'shadowOffsetWidth',
    valueConverter: function (value) { return +value; }
});
exports.shadowOffsetWidthProperty.register(CardViewCommon);
exports.shadowOffsetHeightProperty = new content_view_1.Property({
    name: 'shadowOffsetHeight',
    valueConverter: function (value) { return +value; }
});
exports.shadowOffsetHeightProperty.register(CardViewCommon);
exports.shadowColorProperty = new content_view_1.Property({
    name: 'shadowColor',
    valueConverter: function (value) { return new color_1.Color(value); }
});
exports.shadowColorProperty.register(CardViewCommon);
exports.shadowOpacityProperty = new content_view_1.Property({
    name: 'shadowOpacity',
    valueConverter: function (value) { return +value; }
});
exports.shadowOpacityProperty.register(CardViewCommon);


/***/ }),

/***/ "../node_modules/nativescript-cardview/cardview.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });
var application = __webpack_require__("tns-core-modules/application");
var color_1 = __webpack_require__("tns-core-modules/color");
var cardview_common_1 = __webpack_require__("../node_modules/nativescript-cardview/cardview-common.js");
var CardViewNamespace = useAndroidX() ? global.androidx.cardview.widget : android.support.v7.widget;
var AppCompatResourcesNamespace = useAndroidX() ? 'androidx.appcompat' : 'android.support.v7.appcompat';
function useAndroidX() {
    return global.androidx && global.androidx.cardview;
}
var CardView = (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    CardView.prototype[cardview_common_1.radiusProperty.setNative] = function (value) {
        this.nativeView.setRadius(value);
    };
    CardView.prototype[cardview_common_1.elevationProperty.setNative] = function (value) {
        this.nativeView.setCardElevation(value);
    };
    CardView.prototype[cardview_common_1.rippleProperty.setNative] = function (value) {
        if (!value) {
            this.nativeView.setClickable(false);
        }
        else {
            var resourcesUri = AppCompatResourcesNamespace + '.R$attr';
            var attr = java.lang.Class.forName(resourcesUri);
            var field = attr.getField('selectableItemBackground');
            if (field && android.os.Build.VERSION.SDK_INT >= 23) {
                var resId = field.getInt(null);
                var attrs = Array.create('int', 1);
                attrs[0] = resId;
                var activity = application.android.foregroundActivity;
                var typedValue = activity.obtainStyledAttributes(attrs);
                var selectedItemDrawable = typedValue.getDrawable(0);
                this.nativeView.setForeground(selectedItemDrawable);
                this.nativeView.setClickable(true);
            }
        }
    };
    CardView.prototype.createNativeView = function () {
        return new CardViewNamespace.CardView(this._context);
    };
    CardView.prototype.initNativeView = function () {
        this._androidViewId = android.view.View.generateViewId();
        this.nativeView.setId(this._androidViewId);
    };
    CardView.prototype[cardview_common_1.backgroundColorProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(value !== undefined ? value.android : new color_1.Color('#FFFFFF').android);
            }
            catch (error) {
                console.log('NativeScript-Cardview --- invalid background-color value ', error);
            }
        }
    };
    CardView.prototype[cardview_common_1.backgroundInternalProperty.setNative] = function (value) {
        if (value) {
            try {
                this.nativeView.setCardBackgroundColor(new color_1.Color(value.color !== undefined ? value.color + '' : '#FFFFFF').android);
            }
            catch (error) {
                console.log('NativeScript-Cardview --- invalid background-color value:', error);
            }
        }
    };
    return CardView;
}(cardview_common_1.CardViewCommon));
exports.CardView = CardView;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/hmr-update.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hot = __webpack_require__("../node_modules/nativescript-dev-webpack/hot.js");
const file_system_1 = __webpack_require__("tns-core-modules/file-system");
function hmrUpdate() {
    const currentAppFolder = file_system_1.knownFolders.currentApp();
    const latestHash = __webpack_require__["h"]();
    return hot(latestHash, filename => {
        const fullFilePath = file_system_1.path.join(currentAppFolder.path, filename);
        return file_system_1.File.exists(fullFilePath) ? currentAppFolder.getFile(filename) : null;
    });
}
exports.hmrUpdate = hmrUpdate;
//# sourceMappingURL=hmr-update.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hmr/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hmr_update_1 = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/hmr-update.js");
exports.hmrUpdate = hmr_update_1.hmrUpdate;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/hot.js":
/***/ (function(module, exports, __webpack_require__) {

const hmrPrefix = 'HMR:';
const log = {
    info: (message) => console.info(`${hmrPrefix} ${message}`),
    warn: (message) => console.warn(`${hmrPrefix} ${message}`),
    error: (message) => console.error(`${hmrPrefix} ${message}`),
};
const refresh = 'Application needs to be restarted in order to apply the changes.';
const hotOptions = {
    ignoreUnaccepted: false,
    ignoreDeclined: false,
    ignoreErrored: false,
    onUnaccepted(data) {
        const chain = [].concat(data.chain);
        const last = chain[chain.length - 1];

        if (last === 0) {
            chain.pop();
        }

        log.warn(`Ignored an update to unaccepted module: `);
        chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onDeclined(data) {
        log.warn(`Ignored an update to declined module:`);
        data.chain.forEach(mod => log.warn(`         ➭ ${mod}`));
    },
    onErrored(data) {
        log.warn(
            `Ignored an error while updating module ${data.moduleId} <${data.type}>`
        );
        log.warn(data.error);
    },
};

let nextHash;
let currentHash;

function upToDate() {
    return nextHash.indexOf(__webpack_require__.h()) >= 0;
}

function result(modules, appliedModules) {
    const unaccepted = modules.filter(
        (moduleId) => appliedModules && appliedModules.indexOf(moduleId) < 0
    );

    if (unaccepted.length > 0) {
        log.warn('The following modules could not be updated:');

        for (const moduleId of unaccepted) {
            log.warn(`          ⦻ ${moduleId}`);
        }
    }

    if (!(appliedModules || []).length) {
        log.info('No Modules Updated.');
    } else {
        log.info('The following modules were updated:');

        for (const moduleId of appliedModules) {
            log.info(`         ↻ ${moduleId}`);
        }

        const numberIds = appliedModules.every(
            (moduleId) => typeof moduleId === 'number'
        );
        if (numberIds) {
            log.info(
                'Please consider using the NamedModulesPlugin for module names.'
            );
        }
    }
}

function check(options) {
    return module.hot
        .check()
        .then((modules) => {
            if (!modules) {
                log.warn(
                    `Cannot find update. ${refresh}`
                );
                return null;
            }

            return module.hot
                .apply(hotOptions)
                .then((appliedModules) => {
                    let nextCheck;
                    if (!upToDate()) {
                        nextCheck = check(options);
                    }

                    result(modules, appliedModules);

                    if (upToDate()) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.info(`Successfully applied update with hmr hash ${currentHash}. App is up to date.`);
                    }

                    return nextCheck || null;
                })
                .catch((err) => {
                    const status = module.hot.status();
                    if (['abort', 'fail'].indexOf(status) >= 0) {
                        // Do not modify message - CLI depends on this exact content to determine hmr operation status.
                        log.error(`Cannot apply update with hmr hash ${currentHash}.`);
                        log.error(err.message || err.stack);
                    } else {
                        log.error(`Update failed: ${err.message || err.stack}`);
                    }
                });
        })
        .catch((err) => {
            const status = module.hot.status();
            if (['abort', 'fail'].indexOf(status) >= 0) {
                log.error(`Cannot check for update. ${refresh}`);
                log.error(err.message || err.stack);
            } else {
                log.error(`Update check failed: ${err.message || err.stack}`);
            }
        });
}

if (true) {
    log.info('Hot Module Replacement Enabled. Waiting for signal.');
} else {}

function update(latestHash, options) {
    nextHash = latestHash;
    if (!upToDate()) {
        const status = module.hot.status();

        if (status === 'idle') {
            //Do not modify message - CLI depends on this exact content to determine hmr operation status.
            log.info(`Checking for updates to the bundle with hmr hash ${currentHash}.`);
            return check(options);
        } else if (['abort', 'fail'].indexOf(status) >= 0) {
            log.warn(
                `Cannot apply update. A previous update ${status}ed. ${refresh}`
            );
        }
    }
};

function getNextHash(hash, getFileContent) {
    const file = getFileContent(`${hash}.hot-update.json`);
    if (!file) {
        return Promise.resolve(hash);
    }

    return file.readText().then(hotUpdateContent => {
        if (hotUpdateContent) {
            const manifest = JSON.parse(hotUpdateContent);
            const newHash = manifest.h;
            return getNextHash(newHash, getFileContent);
        } else {
            return Promise.resolve(hash);
        }
    }).catch(error => Promise.reject(error));
}

module.exports = function checkState(initialHash, getFileContent) {
    currentHash = initialHash;
    return getNextHash(initialHash, getFileContent).then(nextHash => {
        if (nextHash != initialHash) {
            return update(nextHash, {});
        }
    })
}


/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css-angular.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const loadCss = __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css.js");

module.exports = function() {
    loadCss(function() {
        global.registerModule("./app.css", () => __webpack_require__("./app.scss"));
        global.registerModule("app.css", () => __webpack_require__("./app.scss"));
    });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/load-application-css.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (loadModuleFn) {
    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    loadModuleFn();

    application.loadAppCss();
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1jYXJkdmlldy9jYXJkdmlldy1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtY2FyZHZpZXcvY2FyZHZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yL2htci11cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2hvdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1hbmd1bGFyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUE4QyxjQUFjO0FBQzVELGNBQWMsbUJBQU8sQ0FBQyx3QkFBd0I7QUFDOUMscUJBQXFCLG1CQUFPLENBQUMsa0NBQWtDO0FBQy9ELGFBQWEsbUJBQU8sQ0FBQywrQkFBK0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx5QkFBeUI7QUFDL0QsQ0FBQztBQUNEO0FB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LFNBQVM7QUFDVDs7QUFFQSxJQUFJLElBQVU7QUFDZDtBQUNBLENBQUMsTUFBTSxFQUVOOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsWUFBWTtBQUNyRjtBQUNBLFNBQVM7QUFDVDtBQUNBLDBEQUEwRCxPQUFPLE1BQU0sUUFBUTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxLQUFLO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O0FDM0tBLDhEQUFnQixtQkFBTyxDQUFDLGtFQUF3Qjs7QUFFaEQ7QUFDQTtBQUNBLGlEQUFpRCxtQkFBTyxDQUFDLFlBQU87QUFDaEUsK0NBQStDLG1CQUFPLENBQUMsWUFBTztBQUM5RCxLQUFLO0FBQ0w7Ozs7Ozs7OztBQ1BBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsOEJBQThCO0FBQzlELElBQUksbUJBQU8sQ0FBQyx5Q0FBeUM7O0FBRXJEOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvY29sb3JcIik7XG52YXIgY29udGVudF92aWV3XzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb250ZW50LXZpZXdcIik7XG52YXIgdmlld18xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIpO1xuZXhwb3J0cy5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eSA9IHZpZXdfMS5iYWNrZ3JvdW5kQ29sb3JQcm9wZXJ0eTtcbmV4cG9ydHMuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHkgPSB2aWV3XzEuYmFja2dyb3VuZEludGVybmFsUHJvcGVydHk7XG52YXIgQ2FyZFZpZXdDb21tb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDYXJkVmlld0NvbW1vbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDYXJkVmlld0NvbW1vbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQ2FyZFZpZXdDb21tb247XG59KGNvbnRlbnRfdmlld18xLkNvbnRlbnRWaWV3KSk7XG5leHBvcnRzLkNhcmRWaWV3Q29tbW9uID0gQ2FyZFZpZXdDb21tb247XG5leHBvcnRzLnJhZGl1c1Byb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAncmFkaXVzJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5yYWRpdXNQcm9wZXJ0eS5yZWdpc3RlcihDYXJkVmlld0NvbW1vbik7XG5leHBvcnRzLmVsZXZhdGlvblByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnZWxldmF0aW9uJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5lbGV2YXRpb25Qcm9wZXJ0eS5yZWdpc3RlcihDYXJkVmlld0NvbW1vbik7XG5leHBvcnRzLnJpcHBsZVByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAncmlwcGxlJyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnOyB9XG59KTtcbmV4cG9ydHMucmlwcGxlUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dSYWRpdXNQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd1JhZGl1cycsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93UmFkaXVzUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRXaWR0aFByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93T2Zmc2V0V2lkdGgnLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICt2YWx1ZTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd09mZnNldFdpZHRoUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPZmZzZXRIZWlnaHRQcm9wZXJ0eSA9IG5ldyBjb250ZW50X3ZpZXdfMS5Qcm9wZXJ0eSh7XG4gICAgbmFtZTogJ3NoYWRvd09mZnNldEhlaWdodCcsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gK3ZhbHVlOyB9XG59KTtcbmV4cG9ydHMuc2hhZG93T2Zmc2V0SGVpZ2h0UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dDb2xvclByb3BlcnR5ID0gbmV3IGNvbnRlbnRfdmlld18xLlByb3BlcnR5KHtcbiAgICBuYW1lOiAnc2hhZG93Q29sb3InLFxuICAgIHZhbHVlQ29udmVydGVyOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIG5ldyBjb2xvcl8xLkNvbG9yKHZhbHVlKTsgfVxufSk7XG5leHBvcnRzLnNoYWRvd0NvbG9yUHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkgPSBuZXcgY29udGVudF92aWV3XzEuUHJvcGVydHkoe1xuICAgIG5hbWU6ICdzaGFkb3dPcGFjaXR5JyxcbiAgICB2YWx1ZUNvbnZlcnRlcjogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiArdmFsdWU7IH1cbn0pO1xuZXhwb3J0cy5zaGFkb3dPcGFjaXR5UHJvcGVydHkucmVnaXN0ZXIoQ2FyZFZpZXdDb21tb24pO1xuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCIpO1xudmFyIGNhcmR2aWV3X2NvbW1vbl8xID0gcmVxdWlyZShcIi4vY2FyZHZpZXctY29tbW9uXCIpO1xudmFyIENhcmRWaWV3TmFtZXNwYWNlID0gdXNlQW5kcm9pZFgoKSA/IGdsb2JhbC5hbmRyb2lkeC5jYXJkdmlldy53aWRnZXQgOiBhbmRyb2lkLnN1cHBvcnQudjcud2lkZ2V0O1xudmFyIEFwcENvbXBhdFJlc291cmNlc05hbWVzcGFjZSA9IHVzZUFuZHJvaWRYKCkgPyAnYW5kcm9pZHguYXBwY29tcGF0JyA6ICdhbmRyb2lkLnN1cHBvcnQudjcuYXBwY29tcGF0JztcbmZ1bmN0aW9uIHVzZUFuZHJvaWRYKCkge1xuICAgIHJldHVybiBnbG9iYWwuYW5kcm9pZHggJiYgZ2xvYmFsLmFuZHJvaWR4LmNhcmR2aWV3O1xufVxudmFyIENhcmRWaWV3ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2FyZFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2FyZFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcmRWaWV3LnByb3RvdHlwZSwgXCJhbmRyb2lkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYXRpdmVWaWV3O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBDYXJkVmlldy5wcm90b3R5cGVbY2FyZHZpZXdfY29tbW9uXzEucmFkaXVzUHJvcGVydHkuc2V0TmF0aXZlXSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0UmFkaXVzKHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5lbGV2YXRpb25Qcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYXJkRWxldmF0aW9uKHZhbHVlKTtcbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5yaXBwbGVQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDbGlja2FibGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc291cmNlc1VyaSA9IEFwcENvbXBhdFJlc291cmNlc05hbWVzcGFjZSArICcuUiRhdHRyJztcbiAgICAgICAgICAgIHZhciBhdHRyID0gamF2YS5sYW5nLkNsYXNzLmZvck5hbWUocmVzb3VyY2VzVXJpKTtcbiAgICAgICAgICAgIHZhciBmaWVsZCA9IGF0dHIuZ2V0RmllbGQoJ3NlbGVjdGFibGVJdGVtQmFja2dyb3VuZCcpO1xuICAgICAgICAgICAgaWYgKGZpZWxkICYmIGFuZHJvaWQub3MuQnVpbGQuVkVSU0lPTi5TREtfSU5UID49IDIzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc0lkID0gZmllbGQuZ2V0SW50KG51bGwpO1xuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IEFycmF5LmNyZWF0ZSgnaW50JywgMSk7XG4gICAgICAgICAgICAgICAgYXR0cnNbMF0gPSByZXNJZDtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHkgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eTtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZWRWYWx1ZSA9IGFjdGl2aXR5Lm9idGFpblN0eWxlZEF0dHJpYnV0ZXMoYXR0cnMpO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZEl0ZW1EcmF3YWJsZSA9IHR5cGVkVmFsdWUuZ2V0RHJhd2FibGUoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldEZvcmVncm91bmQoc2VsZWN0ZWRJdGVtRHJhd2FibGUpO1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDbGlja2FibGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZS5jcmVhdGVOYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IENhcmRWaWV3TmFtZXNwYWNlLkNhcmRWaWV3KHRoaXMuX2NvbnRleHQpO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlLmluaXROYXRpdmVWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9hbmRyb2lkVmlld0lkID0gYW5kcm9pZC52aWV3LlZpZXcuZ2VuZXJhdGVWaWV3SWQoKTtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3LnNldElkKHRoaXMuX2FuZHJvaWRWaWV3SWQpO1xuICAgIH07XG4gICAgQ2FyZFZpZXcucHJvdG90eXBlW2NhcmR2aWV3X2NvbW1vbl8xLmJhY2tncm91bmRDb2xvclByb3BlcnR5LnNldE5hdGl2ZV0gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYXJkQmFja2dyb3VuZENvbG9yKHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5hbmRyb2lkIDogbmV3IGNvbG9yXzEuQ29sb3IoJyNGRkZGRkYnKS5hbmRyb2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOYXRpdmVTY3JpcHQtQ2FyZHZpZXcgLS0tIGludmFsaWQgYmFja2dyb3VuZC1jb2xvciB2YWx1ZSAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhcmRWaWV3LnByb3RvdHlwZVtjYXJkdmlld19jb21tb25fMS5iYWNrZ3JvdW5kSW50ZXJuYWxQcm9wZXJ0eS5zZXROYXRpdmVdID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXcuc2V0Q2FyZEJhY2tncm91bmRDb2xvcihuZXcgY29sb3JfMS5Db2xvcih2YWx1ZS5jb2xvciAhPT0gdW5kZWZpbmVkID8gdmFsdWUuY29sb3IgKyAnJyA6ICcjRkZGRkZGJykuYW5kcm9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTmF0aXZlU2NyaXB0LUNhcmR2aWV3IC0tLSBpbnZhbGlkIGJhY2tncm91bmQtY29sb3IgdmFsdWU6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2FyZFZpZXc7XG59KGNhcmR2aWV3X2NvbW1vbl8xLkNhcmRWaWV3Q29tbW9uKSk7XG5leHBvcnRzLkNhcmRWaWV3ID0gQ2FyZFZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGhvdCA9IHJlcXVpcmUoXCIuLi9ob3RcIik7XG5jb25zdCBmaWxlX3N5c3RlbV8xID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7XG5mdW5jdGlvbiBobXJVcGRhdGUoKSB7XG4gICAgY29uc3QgY3VycmVudEFwcEZvbGRlciA9IGZpbGVfc3lzdGVtXzEua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcbiAgICBjb25zdCBsYXRlc3RIYXNoID0gX193ZWJwYWNrX3JlcXVpcmVfX1tcImhcIl0oKTtcbiAgICByZXR1cm4gaG90KGxhdGVzdEhhc2gsIGZpbGVuYW1lID0+IHtcbiAgICAgICAgY29uc3QgZnVsbEZpbGVQYXRoID0gZmlsZV9zeXN0ZW1fMS5wYXRoLmpvaW4oY3VycmVudEFwcEZvbGRlci5wYXRoLCBmaWxlbmFtZSk7XG4gICAgICAgIHJldHVybiBmaWxlX3N5c3RlbV8xLkZpbGUuZXhpc3RzKGZ1bGxGaWxlUGF0aCkgPyBjdXJyZW50QXBwRm9sZGVyLmdldEZpbGUoZmlsZW5hbWUpIDogbnVsbDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuaG1yVXBkYXRlID0gaG1yVXBkYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG1yLXVwZGF0ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBobXJfdXBkYXRlXzEgPSByZXF1aXJlKFwiLi9obXItdXBkYXRlXCIpO1xuZXhwb3J0cy5obXJVcGRhdGUgPSBobXJfdXBkYXRlXzEuaG1yVXBkYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiY29uc3QgaG1yUHJlZml4ID0gJ0hNUjonO1xuY29uc3QgbG9nID0ge1xuICAgIGluZm86IChtZXNzYWdlKSA9PiBjb25zb2xlLmluZm8oYCR7aG1yUHJlZml4fSAke21lc3NhZ2V9YCksXG4gICAgd2FybjogKG1lc3NhZ2UpID0+IGNvbnNvbGUud2FybihgJHtobXJQcmVmaXh9ICR7bWVzc2FnZX1gKSxcbiAgICBlcnJvcjogKG1lc3NhZ2UpID0+IGNvbnNvbGUuZXJyb3IoYCR7aG1yUHJlZml4fSAke21lc3NhZ2V9YCksXG59O1xuY29uc3QgcmVmcmVzaCA9ICdBcHBsaWNhdGlvbiBuZWVkcyB0byBiZSByZXN0YXJ0ZWQgaW4gb3JkZXIgdG8gYXBwbHkgdGhlIGNoYW5nZXMuJztcbmNvbnN0IGhvdE9wdGlvbnMgPSB7XG4gICAgaWdub3JlVW5hY2NlcHRlZDogZmFsc2UsXG4gICAgaWdub3JlRGVjbGluZWQ6IGZhbHNlLFxuICAgIGlnbm9yZUVycm9yZWQ6IGZhbHNlLFxuICAgIG9uVW5hY2NlcHRlZChkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gW10uY29uY2F0KGRhdGEuY2hhaW4pO1xuICAgICAgICBjb25zdCBsYXN0ID0gY2hhaW5bY2hhaW4ubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgaWYgKGxhc3QgPT09IDApIHtcbiAgICAgICAgICAgIGNoYWluLnBvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLndhcm4oYElnbm9yZWQgYW4gdXBkYXRlIHRvIHVuYWNjZXB0ZWQgbW9kdWxlOiBgKTtcbiAgICAgICAgY2hhaW4uZm9yRWFjaChtb2QgPT4gbG9nLndhcm4oYCAgICAgICAgIOKerSAke21vZH1gKSk7XG4gICAgfSxcbiAgICBvbkRlY2xpbmVkKGRhdGEpIHtcbiAgICAgICAgbG9nLndhcm4oYElnbm9yZWQgYW4gdXBkYXRlIHRvIGRlY2xpbmVkIG1vZHVsZTpgKTtcbiAgICAgICAgZGF0YS5jaGFpbi5mb3JFYWNoKG1vZCA9PiBsb2cud2FybihgICAgICAgICAg4p6tICR7bW9kfWApKTtcbiAgICB9LFxuICAgIG9uRXJyb3JlZChkYXRhKSB7XG4gICAgICAgIGxvZy53YXJuKFxuICAgICAgICAgICAgYElnbm9yZWQgYW4gZXJyb3Igd2hpbGUgdXBkYXRpbmcgbW9kdWxlICR7ZGF0YS5tb2R1bGVJZH0gPCR7ZGF0YS50eXBlfT5gXG4gICAgICAgICk7XG4gICAgICAgIGxvZy53YXJuKGRhdGEuZXJyb3IpO1xuICAgIH0sXG59O1xuXG5sZXQgbmV4dEhhc2g7XG5sZXQgY3VycmVudEhhc2g7XG5cbmZ1bmN0aW9uIHVwVG9EYXRlKCkge1xuICAgIHJldHVybiBuZXh0SGFzaC5pbmRleE9mKF9fd2VicGFja19oYXNoX18pID49IDA7XG59XG5cbmZ1bmN0aW9uIHJlc3VsdChtb2R1bGVzLCBhcHBsaWVkTW9kdWxlcykge1xuICAgIGNvbnN0IHVuYWNjZXB0ZWQgPSBtb2R1bGVzLmZpbHRlcihcbiAgICAgICAgKG1vZHVsZUlkKSA9PiBhcHBsaWVkTW9kdWxlcyAmJiBhcHBsaWVkTW9kdWxlcy5pbmRleE9mKG1vZHVsZUlkKSA8IDBcbiAgICApO1xuXG4gICAgaWYgKHVuYWNjZXB0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2cud2FybignVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkIG5vdCBiZSB1cGRhdGVkOicpO1xuXG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlSWQgb2YgdW5hY2NlcHRlZCkge1xuICAgICAgICAgICAgbG9nLndhcm4oYCAgICAgICAgICDiprsgJHttb2R1bGVJZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKGFwcGxpZWRNb2R1bGVzIHx8IFtdKS5sZW5ndGgpIHtcbiAgICAgICAgbG9nLmluZm8oJ05vIE1vZHVsZXMgVXBkYXRlZC4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2cuaW5mbygnVGhlIGZvbGxvd2luZyBtb2R1bGVzIHdlcmUgdXBkYXRlZDonKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZUlkIG9mIGFwcGxpZWRNb2R1bGVzKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhgICAgICAgICAg4oa7ICR7bW9kdWxlSWR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBudW1iZXJJZHMgPSBhcHBsaWVkTW9kdWxlcy5ldmVyeShcbiAgICAgICAgICAgIChtb2R1bGVJZCkgPT4gdHlwZW9mIG1vZHVsZUlkID09PSAnbnVtYmVyJ1xuICAgICAgICApO1xuICAgICAgICBpZiAobnVtYmVySWRzKSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcbiAgICAgICAgICAgICAgICAnUGxlYXNlIGNvbnNpZGVyIHVzaW5nIHRoZSBOYW1lZE1vZHVsZXNQbHVnaW4gZm9yIG1vZHVsZSBuYW1lcy4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjaGVjayhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG1vZHVsZS5ob3RcbiAgICAgICAgLmNoZWNrKClcbiAgICAgICAgLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgICAgICAgIGlmICghbW9kdWxlcykge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFxuICAgICAgICAgICAgICAgICAgICBgQ2Fubm90IGZpbmQgdXBkYXRlLiAke3JlZnJlc2h9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuaG90XG4gICAgICAgICAgICAgICAgLmFwcGx5KGhvdE9wdGlvbnMpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGFwcGxpZWRNb2R1bGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0Q2hlY2s7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXBUb0RhdGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dENoZWNrID0gY2hlY2sob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHQobW9kdWxlcywgYXBwbGllZE1vZHVsZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cFRvRGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgbW9kaWZ5IG1lc3NhZ2UgLSBDTEkgZGVwZW5kcyBvbiB0aGlzIGV4YWN0IGNvbnRlbnQgdG8gZGV0ZXJtaW5lIGhtciBvcGVyYXRpb24gc3RhdHVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oYFN1Y2Nlc3NmdWxseSBhcHBsaWVkIHVwZGF0ZSB3aXRoIGhtciBoYXNoICR7Y3VycmVudEhhc2h9LiBBcHAgaXMgdXAgdG8gZGF0ZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0Q2hlY2sgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChbJ2Fib3J0JywgJ2ZhaWwnXS5pbmRleE9mKHN0YXR1cykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gbm90IG1vZGlmeSBtZXNzYWdlIC0gQ0xJIGRlcGVuZHMgb24gdGhpcyBleGFjdCBjb250ZW50IHRvIGRldGVybWluZSBobXIgb3BlcmF0aW9uIHN0YXR1cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihgQ2Fubm90IGFwcGx5IHVwZGF0ZSB3aXRoIGhtciBoYXNoICR7Y3VycmVudEhhc2h9LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGVyci5tZXNzYWdlIHx8IGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFVwZGF0ZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuICAgICAgICAgICAgaWYgKFsnYWJvcnQnLCAnZmFpbCddLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDYW5ub3QgY2hlY2sgZm9yIHVwZGF0ZS4gJHtyZWZyZXNofWApO1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihlcnIubWVzc2FnZSB8fCBlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFVwZGF0ZSBjaGVjayBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2UgfHwgZXJyLnN0YWNrfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICBsb2cuaW5mbygnSG90IE1vZHVsZSBSZXBsYWNlbWVudCBFbmFibGVkLiBXYWl0aW5nIGZvciBzaWduYWwuJyk7XG59IGVsc2Uge1xuICAgIGxvZy5lcnJvcignSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC4nKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKGxhdGVzdEhhc2gsIG9wdGlvbnMpIHtcbiAgICBuZXh0SGFzaCA9IGxhdGVzdEhhc2g7XG4gICAgaWYgKCF1cFRvRGF0ZSgpKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2lkbGUnKSB7XG4gICAgICAgICAgICAvL0RvIG5vdCBtb2RpZnkgbWVzc2FnZSAtIENMSSBkZXBlbmRzIG9uIHRoaXMgZXhhY3QgY29udGVudCB0byBkZXRlcm1pbmUgaG1yIG9wZXJhdGlvbiBzdGF0dXMuXG4gICAgICAgICAgICBsb2cuaW5mbyhgQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgdG8gdGhlIGJ1bmRsZSB3aXRoIGhtciBoYXNoICR7Y3VycmVudEhhc2h9LmApO1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrKG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKFsnYWJvcnQnLCAnZmFpbCddLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG4gICAgICAgICAgICBsb2cud2FybihcbiAgICAgICAgICAgICAgICBgQ2Fubm90IGFwcGx5IHVwZGF0ZS4gQSBwcmV2aW91cyB1cGRhdGUgJHtzdGF0dXN9ZWQuICR7cmVmcmVzaH1gXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gZ2V0TmV4dEhhc2goaGFzaCwgZ2V0RmlsZUNvbnRlbnQpIHtcbiAgICBjb25zdCBmaWxlID0gZ2V0RmlsZUNvbnRlbnQoYCR7aGFzaH0uaG90LXVwZGF0ZS5qc29uYCk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaGFzaCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGUucmVhZFRleHQoKS50aGVuKGhvdFVwZGF0ZUNvbnRlbnQgPT4ge1xuICAgICAgICBpZiAoaG90VXBkYXRlQ29udGVudCkge1xuICAgICAgICAgICAgY29uc3QgbWFuaWZlc3QgPSBKU09OLnBhcnNlKGhvdFVwZGF0ZUNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgbmV3SGFzaCA9IG1hbmlmZXN0Lmg7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TmV4dEhhc2gobmV3SGFzaCwgZ2V0RmlsZUNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShoYXNoKTtcbiAgICAgICAgfVxuICAgIH0pLmNhdGNoKGVycm9yID0+IFByb21pc2UucmVqZWN0KGVycm9yKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2hlY2tTdGF0ZShpbml0aWFsSGFzaCwgZ2V0RmlsZUNvbnRlbnQpIHtcbiAgICBjdXJyZW50SGFzaCA9IGluaXRpYWxIYXNoO1xuICAgIHJldHVybiBnZXROZXh0SGFzaChpbml0aWFsSGFzaCwgZ2V0RmlsZUNvbnRlbnQpLnRoZW4obmV4dEhhc2ggPT4ge1xuICAgICAgICBpZiAobmV4dEhhc2ggIT0gaW5pdGlhbEhhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGUobmV4dEhhc2gsIHt9KTtcbiAgICAgICAgfVxuICAgIH0pXG59XG4iLCJjb25zdCBsb2FkQ3NzID0gcmVxdWlyZShcIi4vbG9hZC1hcHBsaWNhdGlvbi1jc3NcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgbG9hZENzcyhmdW5jdGlvbigpIHtcbiAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwiLi9hcHAuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJ+L2FwcFwiKSk7XG4gICAgICAgIGdsb2JhbC5yZWdpc3Rlck1vZHVsZShcImFwcC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIn4vYXBwXCIpKTtcbiAgICB9KTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxvYWRNb2R1bGVGbikge1xuICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblxuICAgIGxvYWRNb2R1bGVGbigpO1xuXG4gICAgYXBwbGljYXRpb24ubG9hZEFwcENzcygpO1xufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/component/Popup.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Popup
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$checkSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/checkSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Popup() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('cards');
    const check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Popup.useSelector[check]": (state)=>state.checkReducer.value
    }["Popup.useSelector[check]"]);
    const allBooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "Popup.useSelector[allBooks]": (state)=>state.checkReducer.books
    }["Popup.useSelector[allBooks]"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const arr = Object.entries(check || []);
    const toCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Popup.useCallback[toCSV]": ()=>{
            const arr = Object.entries(check || []);
            const arrBooks = Object.entries(allBooks || []);
            const csvString = [
                [
                    'id:',
                    'Title:',
                    'Authors:'
                ],
                ...arrBooks.filter({
                    "Popup.useCallback[toCSV].csvString": (item)=>[
                            ...new Set(arr.join(',').split(','))
                        ].includes(String(item[0]))
                }["Popup.useCallback[toCSV].csvString"]).map({
                    "Popup.useCallback[toCSV].csvString": (item)=>{
                        var _item__authors_;
                        return [
                            item[1].id,
                            item[1].title,
                            (_item__authors_ = item[1].authors[0]) === null || _item__authors_ === void 0 ? void 0 : _item__authors_.name
                        ];
                    }
                }["Popup.useCallback[toCSV].csvString"])
            ].map({
                "Popup.useCallback[toCSV].csvString": (row)=>row.join(';')
            }["Popup.useCallback[toCSV].csvString"]).join('\n');
            const url = 'data:text/csv;charset=utf-8,' + csvString;
            return url;
        }
    }["Popup.useCallback[toCSV]"], [
        check,
        allBooks
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed ".concat(arr.length > 0 ? '' : 'invisible', " bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg dark:bg-white bg-gray-800 p-2 drop-shadow-2xl"),
        id: "gdpr",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-between gap-6 text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-left pl-2 dark:text-black text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative right-2 bottom-4 -mr-6 inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-2xs font-semibold leading-4 bg-blue-500 text-white",
                            children: arr.length
                        }, void 0, false, {
                            fileName: "[project]/src/component/Popup.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: " rounded-lg w-auto bg-gray-800 text-white dark:bg-white dark:text-gray-900 ",
                                children: arr.map((item, idx)=>{
                                    var _obj_authors_;
                                    const obj = allBooks[Number(item[0])];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "px-2 py-2 border-b border-gray-200 w-full items-center flex hover:bg-gray-700 dark:hover:bg-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: 'g' + idx,
                                                type: "checkbox",
                                                className: "w-4 h-4 accent-blue-600 mr-2",
                                                onChange: ()=>{
                                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$checkSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCheck"])({
                                                        id: item[0]
                                                    }));
                                                },
                                                checked: check[Number(item[0])]
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Popup.tsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                title: "selected book",
                                                className: "inline-flex items-center mr-2",
                                                htmlFor: 'g' + idx,
                                                children: t('book')
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/Popup.tsx",
                                                lineNumber: 72,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold",
                                                children: [
                                                    "id: ",
                                                    item[0]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Popup.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    ": ",
                                                    obj === null || obj === void 0 ? void 0 : (_obj_authors_ = obj.authors[0]) === null || _obj_authors_ === void 0 ? void 0 : _obj_authors_.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/Popup.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, 's' + idx, true, {
                                        fileName: "[project]/src/component/Popup.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/component/Popup.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/component/Popup.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/Popup.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "content-right  justify-center gap-1 flex flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: arr.length == 0,
                            onClick: ()=>{
                                arr.forEach((item)=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$checkSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCheck"])({
                                        id: item[0]
                                    })));
                            },
                            className: " hover:opacity-80 disabled:opacity-30 active:cursor-pointer m-1 rounded-full dark:bg-gray-800 dark:text-white bg-gray-200 px-4 py-2 text-black",
                            children: t('unselect')
                        }, void 0, false, {
                            fileName: "[project]/src/component/Popup.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            download: "".concat(arr.length, "-books.csv"),
                            className: "hover:opacity-80 disabled:opacity-30 active:cursor-pointer m-1 rounded-full dark:bg-gray-800 dark:text-white bg-gray-200 px-4 py-2 text-black",
                            href: toCSV(),
                            children: t('download')
                        }, void 0, false, {
                            fileName: "[project]/src/component/Popup.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/Popup.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/Popup.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/component/Popup.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Popup, "N3jkoY+nwEIkSJkCs28anind8kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Popup;
var _c;
__turbopack_context__.k.register(_c, "Popup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/component/Popup.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/component/Popup.tsx [app-client] (ecmascript)"));
}),
}]);

//# sourceMappingURL=src_component_Popup_tsx_99be25a6._.js.map
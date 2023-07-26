exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 1083:
/***/ (() => {

"use strict";
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/splash.f5c39896.jpg","height":1870,"width":2803,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApYP/xAAYEAACAwAAAAAAAAAAAAAAAAAAAQIDUf/aAAgBAQABPwB3T0//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3139);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Footer({ children, home }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [showCollapseMenu, setShowCollapseMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    let showCollapse = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.up("md"));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
                backgroundColor: theme.palette.primary.char,
                display: "flex",
                flexWrap: "wrap",
                width: "100%"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                container: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 6,
                        sx: {
                            p: 2
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                align: "left",
                                sx: {
                                    // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                    // backgroundClip: "text",
                                    width: "100%",
                                    color: theme.palette.primary.white,
                                    fontFamily: "Inter",
                                    fontWeight: 200,
                                    fontSize: 15,
                                    mb: 1,
                                    transition: "all .15s",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        textDecoration: "underline"
                                    }
                                },
                                onClick: ()=>{
                                    color: theme.palette.primary.main, router.push("/resume");
                                },
                                children: "Resume"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                align: "left",
                                sx: {
                                    // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                    // backgroundClip: "text",
                                    width: "100%",
                                    color: theme.palette.primary.white,
                                    fontFamily: "Inter",
                                    fontWeight: 200,
                                    fontSize: 15,
                                    mb: 1,
                                    transition: "all .15s",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        textDecoration: "underline"
                                    }
                                },
                                onClick: ()=>{
                                    router.push("/about-this-site");
                                },
                                children: "About this site"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                align: "left",
                                sx: {
                                    // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                    // backgroundClip: "text",
                                    width: "100%",
                                    color: theme.palette.primary.white,
                                    fontFamily: "Inter",
                                    fontWeight: 200,
                                    fontSize: 15,
                                    mb: 1,
                                    transition: "all .15s",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        textDecoration: "underline"
                                    }
                                },
                                onClick: ()=>{
                                    router.push("/about-me");
                                },
                                children: "About me"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                align: "left",
                                sx: {
                                    // background: `linear-gradient(110deg, ${theme.palette.primary.main} , ${theme.palette.primary.secondary} )`,
                                    // backgroundClip: "text",
                                    width: "100%",
                                    color: theme.palette.primary.white,
                                    fontFamily: "Inter",
                                    fontWeight: 200,
                                    fontSize: 15,
                                    mb: 1,
                                    transition: "all .15s",
                                    "&:hover": {
                                        color: theme.palette.primary.main,
                                        textDecoration: "underline"
                                    }
                                },
                                onClick: ()=>{
                                    router.push("/links-and-contact");
                                },
                                children: "Links and Contact"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                        item: true,
                        xs: 6,
                        sx: {
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "end",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                sx: {
                                    maxHeight: 60,
                                    "&:hover": {
                                        backgroundColor: theme.palette.background.transparentish
                                    }
                                },
                                onClick: ()=>{
                                    window.open("https://linkedin.com/in/maxm-akins", "_blank");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/funLinkedIn.png",
                                    style: {
                                        maxHeight: 36
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                sx: {
                                    maxHeight: 60,
                                    "&:hover": {
                                        backgroundColor: theme.palette.background.transparentish
                                    }
                                },
                                onClick: ()=>{
                                    window.open("https://github.com/maxm-akins", "_blank");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/funGitHub.png",
                                    style: {
                                        maxHeight: 36
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                sx: {
                                    maxHeight: 60,
                                    "&:hover": {
                                        backgroundColor: theme.palette.background.transparentish
                                    }
                                },
                                onClick: ()=>{
                                    window.open("https://twitter.com/maxmakins", "_blank");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/funTwitter.png",
                                    style: {
                                        maxHeight: 36
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "end"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/MA_logo_alt.png",
                                    style: {
                                        maxHeight: 60
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 869:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3139);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function NavBar({ children, home }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [showCollapseMenu, setShowCollapseMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    let showCollapse = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.up("md"));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                children: showCollapse && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                    initial: {
                        opacity: 0,
                        scale: 0
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0
                    },
                    transition: {
                        duration: .15,
                        type: "spring"
                    },
                    position: "fixed",
                    sx: {
                        boxShadow: router.pathname === "/" ? 0 : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        transition: "all .3s",
                        background: router.pathname === "/" ? theme.palette.background.transparent : theme.palette.primary.char,
                        display: "flex",
                        justifyContent: "start",
                        width: "100%",
                        alignItems: "center",
                        alignContent: "center",
                        color: router.pathname === "/" ? theme.palette.primary.white : theme.palette.primary.white,
                        zIndex: 1000,
                        "&:hover": {
                            backgroundColor: router.pathname === "/" ? theme.palette.background.transparentish : theme.palette.primary.char
                        }
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "start",
                                width: "10%",
                                alignItems: "start"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                sx: {
                                    mt: 1,
                                    ml: 1,
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: router.pathname === "/" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: "/images/purpleSig.png",
                                    width: 200,
                                    height: 50,
                                    alt: "nothing",
                                    unoptimized: true,
                                    onClick: ()=>{
                                        router.push("/about-me");
                                    },
                                    style: {
                                        minWidth: 200
                                    }
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    src: "/images/lightBlueSig.png",
                                    width: 200,
                                    height: 50,
                                    alt: "nothing",
                                    unoptimized: true,
                                    onClick: ()=>{
                                        router.push("/about-me");
                                    },
                                    style: {
                                        minWidth: 200
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "end",
                                width: "90%",
                                alignItems: "start"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    onClick: ()=>{
                                        router.push("/");
                                    },
                                    sx: {
                                        m: 3
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                        whileHover: {
                                            scale: 1.3
                                        },
                                        whileTap: {
                                            scale: 0.9
                                        },
                                        sx: {
                                            fontSize: "0.8em",
                                            fontWeight: 300
                                        },
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    onMouseEnter: ()=>setShowMenu(true),
                                    onMouseLeave: ()=>setShowMenu(false),
                                    sx: {
                                        m: 3
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                            component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                            whileHover: {
                                                scale: 1.1
                                            },
                                            whileTap: {
                                                scale: 0.9
                                            },
                                            sx: {
                                                fontSize: "0.8em",
                                                fontWeight: 300,
                                                height: "100%"
                                            },
                                            children: "Resume"
                                        }),
                                        showMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                            component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                            initial: {
                                                y: "-100%"
                                            },
                                            animate: {
                                                y: 0
                                            },
                                            transition: {
                                                duration: .15
                                            },
                                            sx: {
                                                position: "fixed",
                                                pt: 3
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
                                                sx: {
                                                    backgroundColor: router.pathname === "/" ? theme.palette.background.transparentish : theme.palette.primary.char,
                                                    color: theme.palette.primary.white,
                                                    fontWeight: 300,
                                                    zIndex: 1001,
                                                    p: 0,
                                                    borderRadius: "0px 0px 10px 10px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                                        disablePadding: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/resume",
                                                                    query: {
                                                                        "q": "0"
                                                                    }
                                                                });
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                                        className: "material-symbols-outlined",
                                                                        sx: {
                                                                            color: theme.palette.primary.white,
                                                                            fontSize: 30,
                                                                            fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;"
                                                                        },
                                                                        children: "work"
                                                                    })
                                                                }),
                                                                "Work Experience"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                                        disablePadding: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/resume",
                                                                    query: {
                                                                        "q": "1"
                                                                    }
                                                                });
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                                        className: "material-symbols-outlined",
                                                                        sx: {
                                                                            color: theme.palette.primary.white,
                                                                            fontSize: 30,
                                                                            fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;"
                                                                        },
                                                                        children: "task"
                                                                    })
                                                                }),
                                                                "Projects"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                                        disablePadding: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/resume",
                                                                    query: {
                                                                        "q": "2"
                                                                    }
                                                                });
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                                        className: "material-symbols-outlined",
                                                                        sx: {
                                                                            color: theme.palette.primary.white,
                                                                            fontSize: 30,
                                                                            fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;"
                                                                        },
                                                                        children: "school"
                                                                    })
                                                                }),
                                                                "Degree Progress"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                                        disablePadding: true,
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                            onClick: ()=>{
                                                                router.push({
                                                                    pathname: "/resume",
                                                                    query: {
                                                                        "q": "3"
                                                                    }
                                                                });
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemIcon, {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                                                        className: "material-symbols-outlined",
                                                                        sx: {
                                                                            color: theme.palette.primary.white,
                                                                            fontSize: 30,
                                                                            fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;"
                                                                        },
                                                                        children: "star_rate"
                                                                    })
                                                                }),
                                                                "Skills and Achievements"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }, "menu")
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        m: 3
                                    },
                                    onClick: ()=>{
                                        router.push("/about-this-site");
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                        whileHover: {
                                            scale: 1.3
                                        },
                                        whileTap: {
                                            scale: 0.9
                                        },
                                        sx: {
                                            fontSize: "0.8em",
                                            fontWeight: 300
                                        },
                                        children: "About this site"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        m: 3
                                    },
                                    onClick: ()=>{
                                        router.push("/about-me");
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                        whileHover: {
                                            scale: 1.3
                                        },
                                        whileTap: {
                                            scale: 0.9
                                        },
                                        sx: {
                                            fontSize: "0.8em",
                                            fontWeight: 300
                                        },
                                        children: "About Me"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    sx: {
                                        m: 3
                                    },
                                    onClick: ()=>{
                                        router.push("/links-and-contact");
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                        whileHover: {
                                            scale: 1.3
                                        },
                                        whileTap: {
                                            scale: 0.9
                                        },
                                        sx: {
                                            fontSize: "0.8em",
                                            fontWeight: 300
                                        },
                                        children: "Links and Contact"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                children: !showCollapse && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                    exit: {
                        opacity: 0
                    },
                    position: "absolute",
                    sx: {
                        zIndex: 1000,
                        backgroundColor: router.pathname === "/" ? theme.palette.background.transparent : theme.palette.background.char,
                        boxShadow: 0,
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "start",
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
                            children: showCollapseMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                                initial: {
                                    y: "-100%"
                                },
                                animate: {
                                    y: 0
                                },
                                transition: {
                                    duration: .15
                                },
                                exit: {
                                    y: "-100%"
                                },
                                position: "absolute",
                                sx: {
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.List, {
                                    sx: {
                                        backdropFilter: "blur(3px)",
                                        color: theme.palette.primary.char,
                                        backgroundColor: router.pathname === "/" ? theme.palette.background.white : theme.palette.background.barelyTransparent,
                                        fontWeight: 300,
                                        pt: 7,
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            sx: {
                                                color: theme.palette.primary.secondary
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push("/");
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push({
                                                        pathname: "/resume",
                                                        query: {
                                                            "q": "0"
                                                        }
                                                    });
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "Work Experience"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push({
                                                        pathname: "/resume",
                                                        query: {
                                                            "q": "1"
                                                        }
                                                    });
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push({
                                                        pathname: "/resume",
                                                        query: {
                                                            "q": "2"
                                                        }
                                                    });
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "Degree Progress"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push({
                                                        pathname: "/resume",
                                                        query: {
                                                            "q": "3"
                                                        }
                                                    });
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "Skills and Achievements"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            sx: {
                                                color: theme.palette.primary.main
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push("/about-this-site");
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "About this site"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            sx: {
                                                color: theme.palette.primary.main
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push("/about-me");
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "About Me"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
                                            disablePadding: true,
                                            sx: {
                                                color: theme.palette.primary.main
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.ListItemButton, {
                                                onClick: ()=>{
                                                    router.push("/links-and-contact");
                                                    setShowCollapseMenu(false);
                                                },
                                                children: "Links and Contact"
                                            })
                                        })
                                    ]
                                })
                            }, "12312")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            component: framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div,
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                rotate: 360
                            },
                            transition: {
                                duration: .5
                            },
                            exit: {
                                rotate: 0,
                                opacity: 0
                            },
                            sx: {
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                size: "large",
                                edge: "start",
                                color: "inherit",
                                "aria-label": "menu",
                                sx: {
                                    mr: 2,
                                    ml: 2
                                },
                                onClick: ()=>setShowCollapseMenu((prev)=>!prev),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                                    className: "material-symbols-outlined",
                                    sx: {
                                        color: router.pathname === "/" ? theme.palette.primary.char : theme.palette.primary.white,
                                        fontSize: 30,
                                        fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48;"
                                    },
                                    children: "menu"
                                })
                            })
                        }, "modal")
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8769:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony export siteTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3139);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(869);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(765);
/* harmony import */ var _public_images_splash_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1083);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _NavBar__WEBPACK_IMPORTED_MODULE_6__, _Footer__WEBPACK_IMPORTED_MODULE_7__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_5__, _NavBar__WEBPACK_IMPORTED_MODULE_6__, _Footer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const name = "Maxm Akins";
const siteTitle = "Next.js Sample Website";
function Layout({ children, home }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const theme = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [showCollapseMenu, setShowCollapseMenu] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    let showCollapse = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)(theme.breakpoints.up("md"));
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NavBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                    width: "100%",
                    minHeight: "100vh",
                    // position: "absolute",
                    background: router.pathname === "/" ? `linear-gradient(110deg, ${theme.palette.primary.main}  20%, ${theme.palette.primary.secondary} 20%)` : theme.palette.background.white
                },
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9605);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3139);
/* harmony import */ var _styles_MUITheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3073);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8769);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, _components_layout__WEBPACK_IMPORTED_MODULE_5__]);
([_emotion_react__WEBPACK_IMPORTED_MODULE_2__, _components_layout__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
        theme: _styles_MUITheme__WEBPACK_IMPORTED_MODULE_3__/* .lightTheme */ .W,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/images/MA_logo_verySmall.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ lightTheme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);

const lightTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        primary: {
            main: "#80d8ff",
            secondary: "#6369D1",
            white: "#FFFFFF",
            nav: "#FF8C42",
            char: "#464655"
        },
        background: {
            main: "#7D8491",
            transparentish: " rgba(255, 255, 255, 0.2)",
            barelyTransparent: " rgba(255, 255, 255, 0.8)",
            almostTransparent: " rgba(243, 244, 249, 0.2)",
            transparent: " rgba(243, 244, 249, 0.0)",
            white: "#FFFFFF",
            char: "#464655"
        }
    },
    typography: {
        fontFamily: " 'Poppins', sans-serif"
    }
});



/***/ }),

/***/ 9605:
/***/ (() => {



/***/ })

};
;
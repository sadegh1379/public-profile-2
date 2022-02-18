(function() {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./assets/index.ts":
/*!*************************!*\
  !*** ./assets/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlLogo": function() { return /* reexport safe */ _logos_htmlLogo_png__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "htmlLogoHover": function() { return /* reexport safe */ _logos_htmlLogoHover_png__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "cssLogo": function() { return /* reexport safe */ _logos_cssLogo_png__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "cssLogoHover": function() { return /* reexport safe */ _logos_cssLogoHover_png__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "sassLogo": function() { return /* reexport safe */ _logos_sassLogo_png__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "sassLogoHover": function() { return /* reexport safe */ _logos_sassLogoHover_png__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "jsLogo": function() { return /* reexport safe */ _logos_jsLogo_png__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "jsLogoHover": function() { return /* reexport safe */ _logos_jsLogoHover_png__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "reactLogo": function() { return /* reexport safe */ _logos_reactLogo_png__WEBPACK_IMPORTED_MODULE_8__.default; },
/* harmony export */   "reactLogoHover": function() { return /* reexport safe */ _logos_reactLogoHover_png__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "tsLogo": function() { return /* reexport safe */ _logos_tsLogo_png__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "tsLogoHover": function() { return /* reexport safe */ _logos_tsLogoHover_png__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "angularLogo": function() { return /* reexport safe */ _logos_angularLogo_png__WEBPACK_IMPORTED_MODULE_12__.default; },
/* harmony export */   "angularLogoHover": function() { return /* reexport safe */ _logos_angularLogoHover_png__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "lessLogo": function() { return /* reexport safe */ _logos_lessLogo_png__WEBPACK_IMPORTED_MODULE_14__.default; },
/* harmony export */   "lessLogoHover": function() { return /* reexport safe */ _logos_lessLogoHover_png__WEBPACK_IMPORTED_MODULE_15__.default; },
/* harmony export */   "gmailLogo": function() { return /* reexport safe */ _logos_gmail_svg__WEBPACK_IMPORTED_MODULE_16__.default; },
/* harmony export */   "gmailLogoHover": function() { return /* reexport safe */ _logos_gmailHover_svg__WEBPACK_IMPORTED_MODULE_17__.default; },
/* harmony export */   "npmLogo": function() { return /* reexport safe */ _logos_npmLogo_png__WEBPACK_IMPORTED_MODULE_18__.default; },
/* harmony export */   "npmLogoHover": function() { return /* reexport safe */ _logos_npmLogoHover_png__WEBPACK_IMPORTED_MODULE_19__.default; },
/* harmony export */   "yarnLogo": function() { return /* reexport safe */ _logos_yarnLogo_png__WEBPACK_IMPORTED_MODULE_20__.default; },
/* harmony export */   "yarnLogoHover": function() { return /* reexport safe */ _logos_yarnLogoHover_png__WEBPACK_IMPORTED_MODULE_21__.default; },
/* harmony export */   "gitHubLogo": function() { return /* reexport safe */ _logos_github_svg__WEBPACK_IMPORTED_MODULE_22__.default; },
/* harmony export */   "gitHubLogoHover": function() { return /* reexport safe */ _logos_githubHover_svg__WEBPACK_IMPORTED_MODULE_23__.default; },
/* harmony export */   "gitLogo": function() { return /* reexport safe */ _logos_gitLogo_png__WEBPACK_IMPORTED_MODULE_24__.default; },
/* harmony export */   "gitLogoHover": function() { return /* reexport safe */ _logos_gitLogoHover_png__WEBPACK_IMPORTED_MODULE_25__.default; },
/* harmony export */   "jestLogo": function() { return /* reexport safe */ _logos_jestLogo_png__WEBPACK_IMPORTED_MODULE_26__.default; },
/* harmony export */   "jestLogoHover": function() { return /* reexport safe */ _logos_jestLogoHover_png__WEBPACK_IMPORTED_MODULE_27__.default; },
/* harmony export */   "linkedInLogo": function() { return /* reexport safe */ _logos_linkedin_svg__WEBPACK_IMPORTED_MODULE_28__.default; },
/* harmony export */   "linkedInLogoHover": function() { return /* reexport safe */ _logos_linkedinHover_svg__WEBPACK_IMPORTED_MODULE_29__.default; },
/* harmony export */   "mysqlLogo": function() { return /* reexport safe */ _logos_mysqlLogo_png__WEBPACK_IMPORTED_MODULE_30__.default; },
/* harmony export */   "mysqlLogoHover": function() { return /* reexport safe */ _logos_mysqlLogoHover_png__WEBPACK_IMPORTED_MODULE_31__.default; },
/* harmony export */   "pythonLogo": function() { return /* reexport safe */ _logos_pythonLogo_png__WEBPACK_IMPORTED_MODULE_32__.default; },
/* harmony export */   "pythonLogoHover": function() { return /* reexport safe */ _logos_pythonLogoHover_png__WEBPACK_IMPORTED_MODULE_33__.default; },
/* harmony export */   "vsLogo": function() { return /* reexport safe */ _logos_vsLogo_png__WEBPACK_IMPORTED_MODULE_34__.default; },
/* harmony export */   "vsLogoHover": function() { return /* reexport safe */ _logos_vsLogoHover_png__WEBPACK_IMPORTED_MODULE_35__.default; },
/* harmony export */   "affinityLogo": function() { return /* reexport safe */ _logos_affinityLogo_png__WEBPACK_IMPORTED_MODULE_36__.default; },
/* harmony export */   "affinityLogoHover": function() { return /* reexport safe */ _logos_affinityLogoHover_png__WEBPACK_IMPORTED_MODULE_37__.default; },
/* harmony export */   "davinciLogo": function() { return /* reexport safe */ _logos_davinciLogo_png__WEBPACK_IMPORTED_MODULE_38__.default; },
/* harmony export */   "davinciLogoHover": function() { return /* reexport safe */ _logos_davinciLogoHover_png__WEBPACK_IMPORTED_MODULE_39__.default; },
/* harmony export */   "windowsLogo": function() { return /* reexport safe */ _logos_windowsLogo_png__WEBPACK_IMPORTED_MODULE_40__.default; },
/* harmony export */   "windowsLogoHover": function() { return /* reexport safe */ _logos_windowsLogoHover_png__WEBPACK_IMPORTED_MODULE_41__.default; },
/* harmony export */   "linuxLogo": function() { return /* reexport safe */ _logos_linuxLogo_png__WEBPACK_IMPORTED_MODULE_42__.default; },
/* harmony export */   "linuxLogoHover": function() { return /* reexport safe */ _logos_linuxLogoHover_png__WEBPACK_IMPORTED_MODULE_43__.default; },
/* harmony export */   "nobleLogo": function() { return /* reexport safe */ _logos_nobleLogo_png__WEBPACK_IMPORTED_MODULE_44__.default; },
/* harmony export */   "waskoLogo": function() { return /* reexport safe */ _logos_waskoLogo_png__WEBPACK_IMPORTED_MODULE_45__.default; },
/* harmony export */   "usLogo": function() { return /* reexport safe */ _logos_usLogo_png__WEBPACK_IMPORTED_MODULE_46__.default; },
/* harmony export */   "cssTricksLogo": function() { return /* reexport safe */ _logos_cssTricksLogo_png__WEBPACK_IMPORTED_MODULE_47__.default; },
/* harmony export */   "belayTheCppLogo": function() { return /* reexport safe */ _logos_belayTheCppLogo_png__WEBPACK_IMPORTED_MODULE_48__.default; },
/* harmony export */   "bonoboPressLogo": function() { return /* reexport safe */ _logos_bonoboPressLogo_png__WEBPACK_IMPORTED_MODULE_49__.default; },
/* harmony export */   "dribbbleLogo": function() { return /* reexport safe */ _logos_dribbbleLogo_png__WEBPACK_IMPORTED_MODULE_50__.default; },
/* harmony export */   "freeCodeCampLogo": function() { return /* reexport safe */ _logos_freeCodeCampLogo_png__WEBPACK_IMPORTED_MODULE_51__.default; },
/* harmony export */   "hashnodeLogo": function() { return /* reexport safe */ _logos_hashnodeLogo_png__WEBPACK_IMPORTED_MODULE_52__.default; },
/* harmony export */   "sitePointLogo": function() { return /* reexport safe */ _logos_sitePointLogo_png__WEBPACK_IMPORTED_MODULE_53__.default; },
/* harmony export */   "profilePicture": function() { return /* reexport safe */ _profilePicture_jpg__WEBPACK_IMPORTED_MODULE_54__.default; },
/* harmony export */   "chevronDown": function() { return /* reexport safe */ _chevronDown_svg__WEBPACK_IMPORTED_MODULE_55__.default; },
/* harmony export */   "posterCommission": function() { return /* reexport safe */ _graphiccommissions_posterCommison_png__WEBPACK_IMPORTED_MODULE_56__.default; },
/* harmony export */   "logoCommission": function() { return /* reexport safe */ _graphiccommissions_logoCommission_png__WEBPACK_IMPORTED_MODULE_57__.default; },
/* harmony export */   "comicCommission1": function() { return /* reexport safe */ _graphiccommissions_comicCommission1_png__WEBPACK_IMPORTED_MODULE_58__.default; },
/* harmony export */   "comicCommission2": function() { return /* reexport safe */ _graphiccommissions_comicCommission2_png__WEBPACK_IMPORTED_MODULE_59__.default; },
/* harmony export */   "schemeCommission": function() { return /* reexport safe */ _graphiccommissions_schemeCommission_png__WEBPACK_IMPORTED_MODULE_60__.default; },
/* harmony export */   "barcelonaSagradaPhoto": function() { return /* reexport safe */ _photos_barcelonaSagradaPhoto_png__WEBPACK_IMPORTED_MODULE_61__.default; },
/* harmony export */   "bowlingPhoto": function() { return /* reexport safe */ _photos_bowlingPhoto_png__WEBPACK_IMPORTED_MODULE_62__.default; },
/* harmony export */   "climbingTopPhoto": function() { return /* reexport safe */ _photos_climbingTopPhoto_png__WEBPACK_IMPORTED_MODULE_63__.default; },
/* harmony export */   "cop24Photo": function() { return /* reexport safe */ _photos_cop24Photo_png__WEBPACK_IMPORTED_MODULE_64__.default; },
/* harmony export */   "franceLaSalttePhoto": function() { return /* reexport safe */ _photos_franceLaSalettePhoto_png__WEBPACK_IMPORTED_MODULE_65__.default; },
/* harmony export */   "giewontPhoto": function() { return /* reexport safe */ _photos_giewontPhoto_png__WEBPACK_IMPORTED_MODULE_66__.default; },
/* harmony export */   "icelandWaterfallPhoto": function() { return /* reexport safe */ _photos_icelandWaterfallPhoto_png__WEBPACK_IMPORTED_MODULE_67__.default; },
/* harmony export */   "londonArsenalPhoto": function() { return /* reexport safe */ _photos_londonArsenalPhoto_png__WEBPACK_IMPORTED_MODULE_68__.default; },
/* harmony export */   "londonChelsea": function() { return /* reexport safe */ _photos_londonChelseaPhoto_png__WEBPACK_IMPORTED_MODULE_69__.default; },
/* harmony export */   "londonTowerBridgePhoto": function() { return /* reexport safe */ _photos_londonTowerBridgePhoto_png__WEBPACK_IMPORTED_MODULE_70__.default; },
/* harmony export */   "londonVictoryPhoto": function() { return /* reexport safe */ _photos_londonVictoriaPhoto_png__WEBPACK_IMPORTED_MODULE_71__.default; },
/* harmony export */   "manchesterUnitedPhoto": function() { return /* reexport safe */ _photos_manchesterUnitedPhoto_png__WEBPACK_IMPORTED_MODULE_72__.default; },
/* harmony export */   "mazuryDawnPhoto": function() { return /* reexport safe */ _photos_mazuryDownPhoto_png__WEBPACK_IMPORTED_MODULE_73__.default; },
/* harmony export */   "mclarenPhoto": function() { return /* reexport safe */ _photos_mclarenPhoto_png__WEBPACK_IMPORTED_MODULE_74__.default; },
/* harmony export */   "notreDamePhoto": function() { return /* reexport safe */ _photos_notreDamePhoto_png__WEBPACK_IMPORTED_MODULE_75__.default; },
/* harmony export */   "parisEiffelPhoto": function() { return /* reexport safe */ _photos_parisEiffelPhoto_png__WEBPACK_IMPORTED_MODULE_76__.default; },
/* harmony export */   "playingIEMPhoto": function() { return /* reexport safe */ _photos_playingIEMPhoto_png__WEBPACK_IMPORTED_MODULE_77__.default; },
/* harmony export */   "rysiankaPhoto": function() { return /* reexport safe */ _photos_rysiankaPhoto_png__WEBPACK_IMPORTED_MODULE_78__.default; },
/* harmony export */   "skiSwissPhoto": function() { return /* reexport safe */ _photos_skiSwissPhoto_png__WEBPACK_IMPORTED_MODULE_79__.default; },
/* harmony export */   "sushiPhoto": function() { return /* reexport safe */ _photos_sushiPhoto_png__WEBPACK_IMPORTED_MODULE_80__.default; },
/* harmony export */   "swissMurrenPhoto": function() { return /* reexport safe */ _photos_swissMurrenPhoto_png__WEBPACK_IMPORTED_MODULE_81__.default; },
/* harmony export */   "swissPizGloriaPhoto": function() { return /* reexport safe */ _photos_swissPizGloriaPhoto_png__WEBPACK_IMPORTED_MODULE_82__.default; },
/* harmony export */   "walesPhoto": function() { return /* reexport safe */ _photos_walesPhoto_png__WEBPACK_IMPORTED_MODULE_83__.default; },
/* harmony export */   "londonCanaryPhoto": function() { return /* reexport safe */ _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_84__.default; },
/* harmony export */   "sadeghLogo": function() { return /* reexport safe */ _new_photo_sadegh_jpg__WEBPACK_IMPORTED_MODULE_85__.default; },
/* harmony export */   "sadeghLogo_2": function() { return /* reexport safe */ _new_photo_sadegh_1_jpg__WEBPACK_IMPORTED_MODULE_86__.default; },
/* harmony export */   "nextLogo": function() { return /* reexport safe */ _new_photo_next_js_png__WEBPACK_IMPORTED_MODULE_87__.default; },
/* harmony export */   "reactNativeLogo": function() { return /* reexport safe */ _new_photo_react_native_png__WEBPACK_IMPORTED_MODULE_88__.default; },
/* harmony export */   "apiLogo": function() { return /* reexport safe */ _new_photo_api_png__WEBPACK_IMPORTED_MODULE_89__.default; }
/* harmony export */ });
/* harmony import */ var _logos_htmlLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/htmlLogo.png */ "./assets/logos/htmlLogo.png");
/* harmony import */ var _logos_htmlLogoHover_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logos/htmlLogoHover.png */ "./assets/logos/htmlLogoHover.png");
/* harmony import */ var _logos_cssLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos/cssLogo.png */ "./assets/logos/cssLogo.png");
/* harmony import */ var _logos_cssLogoHover_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logos/cssLogoHover.png */ "./assets/logos/cssLogoHover.png");
/* harmony import */ var _logos_sassLogo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logos/sassLogo.png */ "./assets/logos/sassLogo.png");
/* harmony import */ var _logos_sassLogoHover_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logos/sassLogoHover.png */ "./assets/logos/sassLogoHover.png");
/* harmony import */ var _logos_jsLogo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logos/jsLogo.png */ "./assets/logos/jsLogo.png");
/* harmony import */ var _logos_jsLogoHover_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logos/jsLogoHover.png */ "./assets/logos/jsLogoHover.png");
/* harmony import */ var _logos_reactLogo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logos/reactLogo.png */ "./assets/logos/reactLogo.png");
/* harmony import */ var _logos_reactLogoHover_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logos/reactLogoHover.png */ "./assets/logos/reactLogoHover.png");
/* harmony import */ var _logos_tsLogo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logos/tsLogo.png */ "./assets/logos/tsLogo.png");
/* harmony import */ var _logos_tsLogoHover_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logos/tsLogoHover.png */ "./assets/logos/tsLogoHover.png");
/* harmony import */ var _logos_angularLogo_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logos/angularLogo.png */ "./assets/logos/angularLogo.png");
/* harmony import */ var _logos_angularLogoHover_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logos/angularLogoHover.png */ "./assets/logos/angularLogoHover.png");
/* harmony import */ var _logos_lessLogo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logos/lessLogo.png */ "./assets/logos/lessLogo.png");
/* harmony import */ var _logos_lessLogoHover_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logos/lessLogoHover.png */ "./assets/logos/lessLogoHover.png");
/* harmony import */ var _logos_gmail_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logos/gmail.svg */ "./assets/logos/gmail.svg");
/* harmony import */ var _logos_gmailHover_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logos/gmailHover.svg */ "./assets/logos/gmailHover.svg");
/* harmony import */ var _logos_npmLogo_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logos/npmLogo.png */ "./assets/logos/npmLogo.png");
/* harmony import */ var _logos_npmLogoHover_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./logos/npmLogoHover.png */ "./assets/logos/npmLogoHover.png");
/* harmony import */ var _logos_yarnLogo_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logos/yarnLogo.png */ "./assets/logos/yarnLogo.png");
/* harmony import */ var _logos_yarnLogoHover_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./logos/yarnLogoHover.png */ "./assets/logos/yarnLogoHover.png");
/* harmony import */ var _logos_github_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./logos/github.svg */ "./assets/logos/github.svg");
/* harmony import */ var _logos_githubHover_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./logos/githubHover.svg */ "./assets/logos/githubHover.svg");
/* harmony import */ var _logos_gitLogo_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./logos/gitLogo.png */ "./assets/logos/gitLogo.png");
/* harmony import */ var _logos_gitLogoHover_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./logos/gitLogoHover.png */ "./assets/logos/gitLogoHover.png");
/* harmony import */ var _logos_jestLogo_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./logos/jestLogo.png */ "./assets/logos/jestLogo.png");
/* harmony import */ var _logos_jestLogoHover_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logos/jestLogoHover.png */ "./assets/logos/jestLogoHover.png");
/* harmony import */ var _logos_linkedin_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./logos/linkedin.svg */ "./assets/logos/linkedin.svg");
/* harmony import */ var _logos_linkedinHover_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./logos/linkedinHover.svg */ "./assets/logos/linkedinHover.svg");
/* harmony import */ var _logos_mysqlLogo_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./logos/mysqlLogo.png */ "./assets/logos/mysqlLogo.png");
/* harmony import */ var _logos_mysqlLogoHover_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./logos/mysqlLogoHover.png */ "./assets/logos/mysqlLogoHover.png");
/* harmony import */ var _logos_pythonLogo_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./logos/pythonLogo.png */ "./assets/logos/pythonLogo.png");
/* harmony import */ var _logos_pythonLogoHover_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./logos/pythonLogoHover.png */ "./assets/logos/pythonLogoHover.png");
/* harmony import */ var _logos_vsLogo_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./logos/vsLogo.png */ "./assets/logos/vsLogo.png");
/* harmony import */ var _logos_vsLogoHover_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./logos/vsLogoHover.png */ "./assets/logos/vsLogoHover.png");
/* harmony import */ var _logos_affinityLogo_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./logos/affinityLogo.png */ "./assets/logos/affinityLogo.png");
/* harmony import */ var _logos_affinityLogoHover_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./logos/affinityLogoHover.png */ "./assets/logos/affinityLogoHover.png");
/* harmony import */ var _logos_davinciLogo_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./logos/davinciLogo.png */ "./assets/logos/davinciLogo.png");
/* harmony import */ var _logos_davinciLogoHover_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./logos/davinciLogoHover.png */ "./assets/logos/davinciLogoHover.png");
/* harmony import */ var _logos_windowsLogo_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./logos/windowsLogo.png */ "./assets/logos/windowsLogo.png");
/* harmony import */ var _logos_windowsLogoHover_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./logos/windowsLogoHover.png */ "./assets/logos/windowsLogoHover.png");
/* harmony import */ var _logos_linuxLogo_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./logos/linuxLogo.png */ "./assets/logos/linuxLogo.png");
/* harmony import */ var _logos_linuxLogoHover_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./logos/linuxLogoHover.png */ "./assets/logos/linuxLogoHover.png");
/* harmony import */ var _logos_nobleLogo_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./logos/nobleLogo.png */ "./assets/logos/nobleLogo.png");
/* harmony import */ var _logos_waskoLogo_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./logos/waskoLogo.png */ "./assets/logos/waskoLogo.png");
/* harmony import */ var _logos_usLogo_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./logos/usLogo.png */ "./assets/logos/usLogo.png");
/* harmony import */ var _logos_cssTricksLogo_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./logos/cssTricksLogo.png */ "./assets/logos/cssTricksLogo.png");
/* harmony import */ var _logos_belayTheCppLogo_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./logos/belayTheCppLogo.png */ "./assets/logos/belayTheCppLogo.png");
/* harmony import */ var _logos_bonoboPressLogo_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./logos/bonoboPressLogo.png */ "./assets/logos/bonoboPressLogo.png");
/* harmony import */ var _logos_dribbbleLogo_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./logos/dribbbleLogo.png */ "./assets/logos/dribbbleLogo.png");
/* harmony import */ var _logos_freeCodeCampLogo_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./logos/freeCodeCampLogo.png */ "./assets/logos/freeCodeCampLogo.png");
/* harmony import */ var _logos_hashnodeLogo_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./logos/hashnodeLogo.png */ "./assets/logos/hashnodeLogo.png");
/* harmony import */ var _logos_sitePointLogo_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./logos/sitePointLogo.png */ "./assets/logos/sitePointLogo.png");
/* harmony import */ var _profilePicture_jpg__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./profilePicture.jpg */ "./assets/profilePicture.jpg");
/* harmony import */ var _chevronDown_svg__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./chevronDown.svg */ "./assets/chevronDown.svg");
/* harmony import */ var _graphiccommissions_posterCommison_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./graphiccommissions/posterCommison.png */ "./assets/graphiccommissions/posterCommison.png");
/* harmony import */ var _graphiccommissions_logoCommission_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./graphiccommissions/logoCommission.png */ "./assets/graphiccommissions/logoCommission.png");
/* harmony import */ var _graphiccommissions_comicCommission1_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./graphiccommissions/comicCommission1.png */ "./assets/graphiccommissions/comicCommission1.png");
/* harmony import */ var _graphiccommissions_comicCommission2_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./graphiccommissions/comicCommission2.png */ "./assets/graphiccommissions/comicCommission2.png");
/* harmony import */ var _graphiccommissions_schemeCommission_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./graphiccommissions/schemeCommission.png */ "./assets/graphiccommissions/schemeCommission.png");
/* harmony import */ var _photos_barcelonaSagradaPhoto_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./photos/barcelonaSagradaPhoto.png */ "./assets/photos/barcelonaSagradaPhoto.png");
/* harmony import */ var _photos_bowlingPhoto_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./photos/bowlingPhoto.png */ "./assets/photos/bowlingPhoto.png");
/* harmony import */ var _photos_climbingTopPhoto_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./photos/climbingTopPhoto.png */ "./assets/photos/climbingTopPhoto.png");
/* harmony import */ var _photos_cop24Photo_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./photos/cop24Photo.png */ "./assets/photos/cop24Photo.png");
/* harmony import */ var _photos_franceLaSalettePhoto_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./photos/franceLaSalettePhoto.png */ "./assets/photos/franceLaSalettePhoto.png");
/* harmony import */ var _photos_giewontPhoto_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./photos/giewontPhoto.png */ "./assets/photos/giewontPhoto.png");
/* harmony import */ var _photos_icelandWaterfallPhoto_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./photos/icelandWaterfallPhoto.png */ "./assets/photos/icelandWaterfallPhoto.png");
/* harmony import */ var _photos_londonArsenalPhoto_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./photos/londonArsenalPhoto.png */ "./assets/photos/londonArsenalPhoto.png");
/* harmony import */ var _photos_londonChelseaPhoto_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./photos/londonChelseaPhoto.png */ "./assets/photos/londonChelseaPhoto.png");
/* harmony import */ var _photos_londonTowerBridgePhoto_png__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./photos/londonTowerBridgePhoto.png */ "./assets/photos/londonTowerBridgePhoto.png");
/* harmony import */ var _photos_londonVictoriaPhoto_png__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./photos/londonVictoriaPhoto.png */ "./assets/photos/londonVictoriaPhoto.png");
/* harmony import */ var _photos_manchesterUnitedPhoto_png__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./photos/manchesterUnitedPhoto.png */ "./assets/photos/manchesterUnitedPhoto.png");
/* harmony import */ var _photos_mazuryDownPhoto_png__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./photos/mazuryDownPhoto.png */ "./assets/photos/mazuryDownPhoto.png");
/* harmony import */ var _photos_mclarenPhoto_png__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./photos/mclarenPhoto.png */ "./assets/photos/mclarenPhoto.png");
/* harmony import */ var _photos_notreDamePhoto_png__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./photos/notreDamePhoto.png */ "./assets/photos/notreDamePhoto.png");
/* harmony import */ var _photos_parisEiffelPhoto_png__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./photos/parisEiffelPhoto.png */ "./assets/photos/parisEiffelPhoto.png");
/* harmony import */ var _photos_playingIEMPhoto_png__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./photos/playingIEMPhoto.png */ "./assets/photos/playingIEMPhoto.png");
/* harmony import */ var _photos_rysiankaPhoto_png__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./photos/rysiankaPhoto.png */ "./assets/photos/rysiankaPhoto.png");
/* harmony import */ var _photos_skiSwissPhoto_png__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./photos/skiSwissPhoto.png */ "./assets/photos/skiSwissPhoto.png");
/* harmony import */ var _photos_sushiPhoto_png__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./photos/sushiPhoto.png */ "./assets/photos/sushiPhoto.png");
/* harmony import */ var _photos_swissMurrenPhoto_png__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./photos/swissMurrenPhoto.png */ "./assets/photos/swissMurrenPhoto.png");
/* harmony import */ var _photos_swissPizGloriaPhoto_png__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./photos/swissPizGloriaPhoto.png */ "./assets/photos/swissPizGloriaPhoto.png");
/* harmony import */ var _photos_walesPhoto_png__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./photos/walesPhoto.png */ "./assets/photos/walesPhoto.png");
/* harmony import */ var _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./photos/londonCanaryPhoto.png */ "./assets/photos/londonCanaryPhoto.png");
/* harmony import */ var _new_photo_sadegh_jpg__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./new-photo/sadegh.jpg */ "./assets/new-photo/sadegh.jpg");
/* harmony import */ var _new_photo_sadegh_1_jpg__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./new-photo/sadegh-1.jpg */ "./assets/new-photo/sadegh-1.jpg");
/* harmony import */ var _new_photo_next_js_png__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./new-photo/next-js.png */ "./assets/new-photo/next-js.png");
/* harmony import */ var _new_photo_react_native_png__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./new-photo/react-native.png */ "./assets/new-photo/react-native.png");
/* harmony import */ var _new_photo_api_png__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./new-photo/api.png */ "./assets/new-photo/api.png");



























































































/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/about/about.tsx":
/*!*******************************!*\
  !*** ./pages/about/about.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VAbout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-awesome-reveal */ "react-awesome-reveal");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about.module.scss */ "./pages/about/about.module.scss");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\pages\\about\\about.tsx";







function VAbout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().aboutContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "About me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Karolina Hudziec Portfolio Page"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "author",
        content: "Karolina Hudziec"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "keywords",
        content: "Karolina, Hudziec, Portfolio, Frontend"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico?",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VMenuBar, {
      activeTab: "About"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().summary),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Long story short about me"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: "I have two leading passions in my life: one is to create, and the other one is to explore the world. I love to create software, especially web applications. Graphic design, drawing and making animations give me a lot of fun as well. I try to lead an active lifestyle. Whenever I have some spare time, I try to dedicate it to learning new languages, spending my time with friends and family, and traveling. I'm a huge sports fan, as well, especially football. Besides that I love hiking and rock climbing. I feel extremely good in the mountains. In winter I ski. To relax I usually play video games or watch movies/tv series. I also pay high attention to my self-development in the IT field, in order to be up to date with current trends on the market. Beneath you can find all of the newsletters I subscribe currently."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hobbies),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().newsletters),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Newsletters I subscribe to:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://css-tricks.com/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "CSS-Tricks logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.cssTricksLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://belaycpp.com/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Belay the CPP logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.belayTheCppLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://dribbble.com/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Dribbble logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.dribbbleLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://hashnode.com/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Hashnode logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.hashnodeLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://bonobopress.com/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Bonobopress logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.bonoboPressLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.sitepoint.com/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Site Point logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.sitePointLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.freecodecamp.org/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "FreeCodeCamp logo",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.freeCodeCampLogo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().commissions),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Graphic commisions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              children: "Besides computer programming I love to create graphics. Drawing has been my passion since I can remember. When I was younger, I used to have hundreds of notebooks, all of them filled with my sketches. Later on I moved more into digital art work and now I treat it as my hobby, taking  small graphical project from time to time."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().scrollGallery),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hint),
                children: "Sroll right to see more"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Camera logo commission",
                layout: "fixed",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.logoCommission
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Breathing scheme commission",
                layout: "fixed",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.schemeCommission
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Woman poster commision",
                layout: "fixed",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.posterCommission
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Comic commission 1",
                layout: "fixed",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.comicCommission1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "Comic commission 2",
                layout: "fixed",
                src: _assets__WEBPACK_IMPORTED_MODULE_6__.comicCommission2
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_4__.Fade, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_7___default().photoGallery),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Photo Gallery"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: ["I do believe that ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("s", {
              children: "actions"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 33
            }, this), " images speak louder than words. By looking at the pictures below, you can get a little grasp of what person I am outside of work.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), "Hover on photo in order to get more details."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VPhotoGrid, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VFooter, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/about/index.ts":
/*!******************************!*\
  !*** ./pages/about/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _about__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./pages/about/about.tsx");


/***/ }),

/***/ "./utils/about/index.ts":
/*!******************************!*\
  !*** ./utils/about/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPhotoGrid": function() { return /* reexport safe */ _photogrid__WEBPACK_IMPORTED_MODULE_0__.VPhotoGrid; }
/* harmony export */ });
/* harmony import */ var _photogrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./photogrid */ "./utils/about/photogrid.tsx");


/***/ }),

/***/ "./utils/about/photogrid.tsx":
/*!***********************************!*\
  !*** ./utils/about/photogrid.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPhotoGrid": function() { return /* binding */ VPhotoGrid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ "./utils/index.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photogrid.module.scss */ "./utils/about/photogrid.module.scss");
/* harmony import */ var _photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\about\\photogrid.tsx";





function VPhotoGrid() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoGrid),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().barca),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Sagrada Familia, Barcelona', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Sagrada Familia",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.barcelonaSagradaPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bridge),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Tower Bridge, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 09.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Tower Bridge",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonTowerBridgePhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().climb),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Comic Con, Warsaw', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 10.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of climbing Karolina",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.climbingTopPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().eiffel),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Eiffel Tower, Paris', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Eiffel Tower",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.parisEiffelPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().murren),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Mürren, Switzerland', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Murren",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.swissMurrenPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().church),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Notre-Dame, Paris', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Notre-Dame",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.notreDamePhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().alps),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: La Salette-Fallavaux, France', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Alps in La Salette-Fallavaux",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.franceLaSalttePhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wales),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Cardiff, Wales', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Cardiff",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.walesPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().chelsea),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Stamford Bridge, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Stamford Bridge",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonChelsea,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().arsenal),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Emirates Stadium, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Emirates Stadium",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonArsenalPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().manchester),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Old Trafford, Manchester', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Old Trafford",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.manchesterUnitedPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bowling),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Bowling Club, Żywiec', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 07.2018', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Karolina bowling",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.bowlingPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cross),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Giewont 1895 m MSL, Zakopane', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 04.021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of climbing on Giewont in winter",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.giewontPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().waterfall),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Selijalandsfoss, Iceland', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 08.2017', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of waterfall in Selijalandsfoss",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.icelandWaterfallPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().boots),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Rysianka 1290 m MSL, Beskid Żywiecki', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 06.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of mountains seen from Rysianka",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.rysiankaPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().sushi),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Momo Cafe, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 10.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of sushi",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.sushiPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().monument),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Victoria Memorial, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 07.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Victoria Memorial",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonVictoryPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().lake),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Tajty Lake, Wilkasy', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 05.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of lake",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.mazuryDawnPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().skyscrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Canary Wharf, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 01.2020', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Canary Wharf",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.londonCanaryPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().car),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: McLaren, London', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 06.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Formula One car",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.mclarenPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ski),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Eiger, Switzerland', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 02.2021', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Karolina skiing",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.skiSwissPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().game),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_photogrid_module_scss__WEBPACK_IMPORTED_MODULE_5___default().photoInfo),
        children: [(0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Place: Intel Extreme Masters, Katowice', 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }, this), (0,___WEBPACK_IMPORTED_MODULE_3__.useTypedText)('Date: 03.2019', 50)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "Photo of Karolina plaing game",
        src: _assets__WEBPACK_IMPORTED_MODULE_4__.playingIEMPhoto,
        layout: "fill"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
} //TO-DO refactoring of VPhotoGrid

/***/ }),

/***/ "./utils/date.ts":
/*!***********************!*\
  !*** ./utils/date.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": function() { return /* binding */ getDate; }
/* harmony export */ });
function getDate() {
  const date = new Date();
  const year = String(date.getFullYear());
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());
  if (day.length === 1) day = '0' + day;
  if (month.length === 1) month = '0' + month;
  return `${day}.${month}.${year}`;
}

/***/ }),

/***/ "./utils/footer.tsx":
/*!**************************!*\
  !*** ./utils/footer.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VFooter": function() { return /* binding */ VFooter; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./utils/icon.tsx");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets */ "./assets/index.ts");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.module.scss */ "./utils/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\footer.tsx";



function VFooter() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().goUpSquare)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().copyrights),
      children: ["\xA92022", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), "Build with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Next.js/TypeSript"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 20
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icons),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.linkedInLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.linkedInLogoHover,
        href: "https://www.linkedin.com/in/sadegh-akbari-788207197/",
        height: "30px",
        width: "30px",
        name: "LinkedIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gmailLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gmailLogoHover,
        href: "mailto:akbarisadegh382@gmail.com",
        height: "30px",
        width: "30px",
        name: "Gmail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_1__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gitHubLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_2__.gitHubLogoHover,
        href: "https://github.com/sadegh1379",
        height: "30px",
        width: "30px",
        name: "GitHub"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/home/index.ts":
/*!*****************************!*\
  !*** ./utils/home/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMainHeader": function() { return /* reexport safe */ _mainheader__WEBPACK_IMPORTED_MODULE_0__.VMainHeader; },
/* harmony export */   "VToolsTech": function() { return /* reexport safe */ _toolstech__WEBPACK_IMPORTED_MODULE_1__.VToolsTech; }
/* harmony export */ });
/* harmony import */ var _mainheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainheader */ "./utils/home/mainheader.tsx");
/* harmony import */ var _toolstech__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolstech */ "./utils/home/toolstech.tsx");



/***/ }),

/***/ "./utils/home/mainheader.tsx":
/*!***********************************!*\
  !*** ./utils/home/mainheader.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMainHeader": function() { return /* binding */ VMainHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainheader.module.scss */ "./utils/home/mainheader.module.scss");
/* harmony import */ var _mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typingtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typingtext */ "./utils/typingtext.tsx");

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\home\\mainheader.tsx";



function VMainHeader() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().aboutInfo),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_mainheader_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
      children: [(0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("Hello everyone!", 50), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), (0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("I'm Sadegh Akbari.", 50, 200)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: (0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("Welcome on my portfolio page! I'm a Creative Junior Front-end Developer with 2 year of experience leveraging JavaScript to build responsive websites, and interactive features . Interested in Js Freamworks like ReactJs, nextjs and learning more and more .", 30, 350)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/home/toolstech.tsx":
/*!**********************************!*\
  !*** ./utils/home/toolstech.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VToolsTech": function() { return /* binding */ VToolsTech; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./utils/icon.tsx");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolstech.module.scss */ "./utils/home/toolstech.module.scss");
/* harmony import */ var _toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\home\\toolstech.tsx";




function VToolsTech() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIcons),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIconsRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.htmlLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.htmlLogoHover,
        height: "46px",
        width: "46px",
        name: "HTML",
        tooltipID: "html-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.cssLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.cssLogoHover,
        height: "65px",
        width: "65px",
        name: "CSS",
        tooltipID: "css-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jsLogoHover,
        height: "55px",
        width: "55px",
        name: "JavaScript",
        tooltipID: "js-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.reactLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.reactLogoHover,
        height: "55px",
        width: "55px",
        name: "React",
        tooltipID: "react-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.tsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.tsLogoHover,
        height: "65px",
        width: "65px",
        name: "TypeScript",
        tooltipID: "ts-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.sassLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.sassLogoHover,
        height: "60px",
        width: "60px",
        name: "Sass",
        tooltipID: "sass-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.lessLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.lessLogoHover,
        height: "65px",
        width: "65px",
        name: "Less",
        tooltipID: "less-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIconsRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.npmLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.npmLogoHover,
        height: "65px",
        width: "65px",
        name: "Node Package Manager",
        tooltipID: "npm-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.yarnLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.yarnLogoHover,
        height: "65px",
        width: "65px",
        name: "yarn",
        tooltipID: "yarn-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.gitLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.gitLogoHover,
        height: "65px",
        width: "65px",
        name: "Git",
        tooltipID: "git-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_toolstech_module_scss__WEBPACK_IMPORTED_MODULE_4___default().technologiesIconsRow),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.vsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.vsLogoHover,
        height: "50px",
        width: "50px",
        name: "Visual Studio Code",
        tooltipID: "vs-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.windowsLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.windowsLogoHover,
        height: "50px",
        width: "50px",
        name: "Windows 10",
        tooltipID: "windows-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.nextLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.nextLogo,
        height: "50px",
        width: "50px",
        name: "next js",
        tooltipID: "nextjs-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 12
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.reactNativeLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.reactNativeLogo,
        height: "50px",
        width: "50px",
        name: "react native",
        tooltipID: "reactnative-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.apiLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.apiLogo,
        height: "50px",
        width: "50px",
        name: "rest api",
        tooltipID: "restapi-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/icon.tsx":
/*!************************!*\
  !*** ./utils/icon.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VIcon": function() { return /* binding */ VIcon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon.module.scss */ "./utils/icon.module.scss");
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\icon.tsx";




function VIcon(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    "data-tip": props.tooltipID ? true : false,
    "data-for": props.tooltipID,
    href: props.href,
    className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconContainer),
    style: {
      height: props.height,
      width: props.width
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iconActive),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        alt: `On hover ${props.name} icon.`,
        src: props.onHoverIcon,
        width: props.width,
        height: props.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), props.tooltipID && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_tooltip__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: props.tooltipID,
      type: "light",
      effect: "solid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: props.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        alt: `Default ${props.name} icon.`,
        src: props.defaulIcon,
        width: props.width,
        height: props.height
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./utils/date.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _date__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _date__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./utils/footer.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _footer__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _footer__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./utils/icon.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _icon__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _menubar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menubar */ "./utils/menubar.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menubar__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _menubar__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _typingtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typingtext */ "./utils/typingtext.tsx");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _typingtext__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _typingtext__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about */ "./utils/about/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _about__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _about__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./utils/home/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _home__WEBPACK_IMPORTED_MODULE_6__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work */ "./utils/work/index.ts");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _work__WEBPACK_IMPORTED_MODULE_7__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _work__WEBPACK_IMPORTED_MODULE_7__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);









/***/ }),

/***/ "./utils/menubar.tsx":
/*!***************************!*\
  !*** ./utils/menubar.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VMenuBar": function() { return /* binding */ VMenuBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menubar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menubar.module.scss */ "./utils/menubar.module.scss");
/* harmony import */ var _menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\menubar.tsx";


function VMenuBar(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().menuBar),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().squareInitials),
          children: "SA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: "Sadegh Akbari"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tab),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          style: props.activeTab === "Home" ? {
            color: "#E76161"
          } : {
            color: "#D5D5D5"
          },
          children: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tab),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        style: props.activeTab === "Work" ? {
          color: "#E76161"
        } : {
          color: "#D5D5D5"
        },
        children: "Work"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tab),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        style: props.activeTab === "About" ? {
          color: "#E76161"
        } : {
          color: "#D5D5D5"
        },
        children: "About"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./utils/typingtext.tsx":
/*!******************************!*\
  !*** ./utils/typingtext.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTypedText": function() { return /* binding */ useTypedText; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useTypedText(text, speed, delayTime) {
  const [textState, setTextState] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("");
  const chars = text.split("");
  let interval = speed;
  if (textState.length === 0 && delayTime) interval = speed + delayTime;
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const timer = setTimeout(() => {
      setTextState(prevText => {
        if (prevText.length !== chars.length) {
          const newText = prevText.concat(chars[prevText.length]);
          return newText;
        }

        return prevText;
      });
    }, interval);
    return () => clearTimeout(timer);
  });
  return textState;
}

/***/ }),

/***/ "./utils/work/index.ts":
/*!*****************************!*\
  !*** ./utils/work/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VTimelineGrid": function() { return /* reexport safe */ _timelinegrid__WEBPACK_IMPORTED_MODULE_0__.VTimelineGrid; }
/* harmony export */ });
/* harmony import */ var _timelinegrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timelinegrid */ "./utils/work/timelinegrid.tsx");


/***/ }),

/***/ "./utils/work/timelinegrid.tsx":
/*!*************************************!*\
  !*** ./utils/work/timelinegrid.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VTimelineGrid": function() { return /* binding */ VTimelineGrid; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../date */ "./utils/date.ts");
/* harmony import */ var _timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timelinegrid.module.scss */ "./utils/work/timelinegrid.module.scss");
/* harmony import */ var _timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\utils\\work\\timelinegrid.tsx";




function VTimelineGrid() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGrid),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemWide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "2016"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelinePoint)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemCard),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hoverTip),
        children: "Hover to zoom."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyLogo),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              alt: "University of Silesia logo.",
              src: _assets__WEBPACK_IMPORTED_MODULE_2__.usLogo,
              height: 50,
              width: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyTitle),
              children: "Uniwersytet \u015Al\u0105ski"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "Katowice"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "10.2015 - 03.2019"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDescription),
          children: ["Modules included:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 30
          }, this), "1st Year: Mathematical Analysis, Basic Course of C++ Programming Language.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 87
          }, this), "2nd Year: Operating Systems, Computer Networks.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 60
          }, this), "3rd Year: Advanced Course of C++ Programming Language, Using C# to Design Graphic Applications, The Basics of Building of Neural Network.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 89
          }, this), "4th Year: Computer Simulation Methods, Oracle Databases.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 69
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemAdjoiningCard)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemWide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "03.2019 - 03.2020"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "Working & learning Web Development in London"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemAdjoiningCard)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemCard),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyLogo),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              alt: "Wasko company logo.",
              src: _assets__WEBPACK_IMPORTED_MODULE_2__.waskoLogo,
              height: 13,
              width: 55
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyTitle),
              children: "Wasko"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "Gliwice"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "08.2020 - 10.2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDescription),
          children: ["Building on my own a responsive web application, which had a catalogue of all company's servers, displayed in the tree structure. Server's data was taken and parsed from XML file to JSON. Anyone logged could browse through lists of servers. Search and sort by name function were applied. App had system of accounts as well. Admins, technical and user ones. Admins could manage accounts by editing them, deleting and authorize (every new user had to be authorized by admin). Admins could also see what user is logged at the moment.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 51
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this), "Main responsibilities:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 35
          }, this), "- designing both frontend and backend side of the app,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 67
          }, this), "- creating an asynchronous communication between client and server via ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "REST API"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 84
          }, this), ",", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 100
          }, this), "- setting up server with database.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 47
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), "Languages: JavaScript, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "React"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 36
          }, this), ", ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "PHP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 50
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 61
          }, this), "Database: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "MySQL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 23
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 36
          }, this), "Styling: Ant Design UI, CSS.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 41
          }, this), "Version Control System: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "GitHub."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 37
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 51
          }, this), "Issue trancing: Trello."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemCard),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContent),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentHeader),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyLogo),
            style: {
              backgroundColor: "#0E2245"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              alt: "Noble Systems company logo.",
              src: _assets__WEBPACK_IMPORTED_MODULE_2__.nobleLogo,
              height: 50,
              width: 50
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyInfo),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().companyTitle),
              children: "Noble Systems"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "Krak\xF3w"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDetails),
              children: "10.2020 - 09.2020"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cardContentDescription),
          children: ["Building from scratch a complete WebRTC Phone web application, based on SIP.js library. Major functionalities:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 123
          }, this), "- making new, answering, and holding calls (conferences as well),", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 78
          }, this), "- contacts list with functionality of adding, deleting, and editing contacts. Search and sort options applied as well,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 131
          }, this), "- history of calls with summarized data,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 53
          }, this), "- voicemail and DTMF sending,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 42
          }, this), "- account and phone input/output audio settings.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 61
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, this), "My main responsibilities on the front-end side of the project:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 75
          }, this), "-working collaboratively in team environment, resolving conflicts,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 79
          }, this), "-writing a clean and high-quality codebase,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 56
          }, this), "-refactoring of codebase,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 38
          }, this), "-writing the documentation,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 40
          }, this), "-implementation of the functionalities from the documentation, given previously by PM,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 99
          }, this), "-creating responsive, accessible and efficient web views, based on previously given mockups,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 105
          }, this), "-reviewing pull requests of my less experienced peers, and helping them with styling/creating components,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 118
          }, this), "-writing efficient unit tests.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 43
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), "Achievements I am most proud of:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 45
          }, this), "-building a 'light' version of main application that could be inserted into an iframe and creating an API via those two elements could communicate,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 160
          }, this), "-helping my peer with fixing up commit history on main branch in out project, after his mistaken merging,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 118
          }, this), "-creating documentation with code standards of codebase of our project,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 84
          }, this), "-implementing CSS modules into our main project, which improved team workflow noticeably,", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 102
          }, this), "-constructing complete translation system which let the user to change language of application (if not chosen, language was detected automatically).", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this), "Agile management: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Scrum, Agile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 31
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 51
          }, this), "Version control system: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Azure DevOps, Bitbucket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 37
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 68
          }, this), "Issue tracking tool: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Jira, Trelllo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 34
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 55
          }, this), "Knowledge repository: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Confluence"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 35
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 53
          }, this), "Styling: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "SCSS, LESS, Semantic UI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 22
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 53
          }, this), "Testing: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "React Testing Library, JEST"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 22
          }, this), ".", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 57
          }, this), "Communication tool: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "Microsoft Teams, Zoom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 33
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemAdjoiningCard)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItem)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelineGridItemWide),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_timelinegrid_module_scss__WEBPACK_IMPORTED_MODULE_4___default().timelinePoint)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: (0,_date__WEBPACK_IMPORTED_MODULE_3__.getDate)()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./assets/chevronDown.svg":
/*!********************************!*\
  !*** ./assets/chevronDown.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/chevronDown.ddade2f1de63bb6b2de521901ae318fc.svg","height":1440,"width":2560});

/***/ }),

/***/ "./assets/graphiccommissions/comicCommission1.png":
/*!********************************************************!*\
  !*** ./assets/graphiccommissions/comicCommission1.png ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/comicCommission1.c12af260b4864f9b8bb8d8a929be2ec2.png","height":500,"width":688,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAApklEQVR42mP4BwX/IeAfGEMBSJgBKvnvxd2r/y8e2PjvwNYN/66dPw1XzABifXj76t+e9Yv/L+kv/b9jRvX/5e3Z/7esmvMfBBjevHjyb1qF17/e1vL/01rT/82tTv03qyL+/4op5f//gqx4+fTBv5mNcf96gRILu7L/LZva8G9afdy/7cunQKz4+/fvv2/fvv37+vXL/+9A+vu3r/++fvkMYoOtAAD5CKP/BfeuwQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/graphiccommissions/comicCommission2.png":
/*!********************************************************!*\
  !*** ./assets/graphiccommissions/comicCommission2.png ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/comicCommission2.5a7de9ba4e9223f3cc27ebb594a9c5dc.png","height":500,"width":680,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42m2KTwsBYRjEnw/h8/garm5Krg6OrlIu5CApxSonF8W2ByQHHNi0Ww7rsrKb1b7b61/aZ3hrj341M8005HsXDFtNyEjgH7RczLmdIUQiVJ3fzxfbWwuBf8ND3pmCwwrjbArCsSDFFebaQjWdQ69Ug67poM9vDI87yLMDxaQ7QqOQx8aYYVDRQABYiZM8mXvu1+vcKZbZ0KZMrIjj5KIMDI7h2jY818MXBWGou7wdTyAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/graphiccommissions/logoCommission.png":
/*!******************************************************!*\
  !*** ./assets/graphiccommissions/logoCommission.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/logoCommission.b9ee736e17568c3871c3ff3dd147d2df.png","height":500,"width":889,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfUlEQVR42mNgYGT8z8LA8J9BTfW/l1vkv0jvtH8aZm7/GRgY/jOzcvxjYGJkBnPUXYL+Zala/0u3cP3H5ur5jwmkiZnlHwMDBydYQUpWwb/s5tZ/RfXt/7ITi/6BxNi4+P4xMLCygRU4ewb8145P+OekbP8vWCMAooCR/R8Ap0Euuplr2ZcAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/graphiccommissions/posterCommison.png":
/*!******************************************************!*\
  !*** ./assets/graphiccommissions/posterCommison.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/posterCommison.cb239c457d6fa3cb371b05a35dd59fd0.png","height":500,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAyElEQVR42hXKv0pCYRjA4d/7eeykHiinDlIIFZRjY4PQVbR0Nd1BW2s1uBQ06aqDODiI4xnUUQQV8e/Hdzz6qvPzyO/fv/qZLC4GVHDOoihe6aGo69mM6aROrAZnE3Jph8d8QL7Xkptii1TwqFH6i8Qh5vriQ3LZkHwYEhR88d2rLBMw/UVZ36YvtKMnzHiht5eBPt+dINpLo9blvWIYRVeiw41kVuCdrZtKtSmdkvDpHXewpXBfFqn8fKtNDLttjPjnpIC9tRwA3WZPtOknY+YAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/graphiccommissions/schemeCommission.png":
/*!********************************************************!*\
  !*** ./assets/graphiccommissions/schemeCommission.png ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/graphiccommissions/schemeCommission.8b38fe5a3f756bb9316dd95d3580e57b.png","height":500,"width":846,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAgklEQVR42iWNSwrCQBBE5/6HcaErQQW3gkt/4MKNkhAxMJ+eztBTbTpTUFAUD57TFpRSwMywbUfOBBGBqyIKAGPXI4WIBWbW7/sDqRWOYlRKEd3tgefhCEoJFLzet3v4YWiA9XU+4bpeIfqAMP70stvMQK/OfKZhSqhVmmKalDOZWf+GRpiwoi8hQQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/affinityLogo.png":
/*!***************************************!*\
  !*** ./assets/logos/affinityLogo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/affinityLogo.1a5b4d86a2a2ddb4c13fe7dd52f124b6.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAgUlEQVR42g3HIQ8BcQDG4fc/Np9BFCXVx1AExSewmyAoEttVRDfVFMEmUJhRJMHvzb7C3S7drtw97ZEDou07O1qIIDctxpScvKGe3LC48fCVl3tIFkP/veBDwsESfResCcz4cfFAzvgSe8nEW895ioQpR86snJL7LYsOESP2xER0K60EUVEf3jeTAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/affinityLogoHover.png":
/*!********************************************!*\
  !*** ./assets/logos/affinityLogoHover.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/affinityLogoHover.4bd7c306503126cb7aa7d8624a3277e5.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAr0lEQVR42jWNoQoCURBF5+GC32A0mqx+hsVgkXldxGCwmBSsanSxisUgGLQoosVk8ANsu1UxiWXPLG8fHO7MnTtvJPXeJaoCFeoTukxVy8FzQhOFpgN/2BKcJ94LRDYoERI4Up/hQH1F62IvbLfYeqEjuEMM6yLQYPhDZ+DYHqBPdI/ftMCH5oFOMcbc7VIvYIh/sdsx9DE2DHfoBN54X7gJW0YVs0egDav8N+tVaxlhSoKjXYCOigAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/angularLogo.png":
/*!**************************************!*\
  !*** ./assets/logos/angularLogo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/angularLogo.ac9c31b485bfec368258dc46558c6143.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcElEQVR42g3Guw2DUBAF0VsDVdADsmRnboCY3M7cAantFmiDTw2kc0sgI3jkSMvqSKOR5ZqeLfXUljxwEoxMhE8P8kLk3v3IBov4Ecx80uzwV7wJWm6pJfwSHbufHJTsTicq/hQilbxKJBpWr26QdQGnq1pGr4FGCwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/angularLogoHover.png":
/*!*******************************************!*\
  !*** ./assets/logos/angularLogoHover.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/angularLogoHover.0060a73c27fd4d7aec1cff7767467517.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuElEQVR4nBWPMQrCQBBFZ/AAgpVH8A5WNtETiIKQDdilEbTyADZBsLCMhSCIXkCSws47eAJj6wFk8/7Ay/w/+3c3600IRg2i2dzdl2izGEv81dzfCpwwKeMOPMBhAn82nBWoolnCQCsjNfzTEVTtnxAKxAYqqEGVEBjTC52Qs+OImXLkF61/6PO9E8oVSDF7WESzGz2yMENf6Gtd0UNsGegFXVD9oISdN1nGnmgEhgwOXCO/wr9Q1gIbajr+fLEYLgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/belayTheCppLogo.png":
/*!******************************************!*\
  !*** ./assets/logos/belayTheCppLogo.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/belayTheCppLogo.00bc7af51070ab4848446c523a5046cf.png","height":245,"width":540,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAiElEQVR4nGM0MNT5zyJu+N/OQInx+OEd/z98/sHAwc7GwAgE////Z2C08Y7+b+4Y9J+D6R8j88cr/799/87w9etXBi4uLsYP798zMFZU1fz/xSj0f/a+m4whWn/+c7CzM1y4fJmBhYWF4f+/fwyMkdGR/7l4RP4fPnaMkYsdaCYDE8h4BiAAEwB6ejMbEcMQSAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/bonoboPressLogo.png":
/*!******************************************!*\
  !*** ./assets/logos/bonoboPressLogo.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/bonoboPressLogo.71c8803aa8a801194570cf81f78e4d43.png","height":90,"width":485,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGklEQVR42mNw+xf7v/Vf3b/6/8X/Gv/F/QcAXa4La+AF30gAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/cssLogo.png":
/*!**********************************!*\
  !*** ./assets/logos/cssLogo.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/cssLogo.01cdfcf1a8b686cc276eb7d2bd5d3b4b.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42m3NsQ1AUBRGYbGMORQ6UdLTibwNRNSi1JlBTSQKM5yfxA5iBcVt3ym/5gSeKICDU49yg5qLTo4dZ5Byq1XGRGEQs6hXw0xiEPEyMOojMgip2FhVKvQ8fxhXMB9Ty7GNAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/cssLogoHover.png":
/*!***************************************!*\
  !*** ./assets/logos/cssLogoHover.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/cssLogoHover.7a497b7c230be08b2dae84287ecc5c0c.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAqUlEQVR4nEWMMQ4BURCG/9k4hBtolVqVhpZ2n1K4ASfQOYCoJLutUqfQi8oFbELhBsY3T8Qk8+bNNzOfNSkpwt15/2FkELuXZTQTmpXMHrCWubepS1htDQsMZhjm1ErSC92IowP/TTYwGALXkvbkhRywcMJQZQOfPnBBXk16UruwsB2zAdgBnDFtgQW2KawHu+UFoiATcEyFq+bZcfD+LXzDLGwIGEfQfwBPdD0+3ph26wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/cssTricksLogo.png":
/*!****************************************!*\
  !*** ./assets/logos/cssTricksLogo.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/cssTricksLogo.6bfdf0d30faf2b1732670be2b92ed34f.png","height":64,"width":374,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAQAAABJCSfIAAAAGElEQVR42mOo/1fxv+l/0f/6/w1AOvMfAGKfC8ygt849AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/davinciLogo.png":
/*!**************************************!*\
  !*** ./assets/logos/davinciLogo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/davinciLogo.b988a4089825ceedbfecdc94857a1cea.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42h3HsQ2DQBAF0S9Ouj5I3QUBGcIOCI0IsXtwDwSkphlq+FPPsiJ5mpHk6qcHD7yo3LvwYGNLF6o80VIJR9p6Em/k4t07hTx55Ofw4b8jaxQdJ+EP3/SkEw2rZ8tKVxpJLu5zZnoX6wILUUhF6jUwGQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/davinciLogoHover.png":
/*!*******************************************!*\
  !*** ./assets/logos/davinciLogoHover.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/davinciLogoHover.016450629e35cefdcbb37001c023e314.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAvElEQVR4nBWNMQrCUAyGE5UKnkDwDi7i6KCbi5OLUOEV6eDmBUTECzi5FFwUvIGji6O4eAdbTyAolPRL4CN5//+/RIsQxEQiFRnTS6GYG6Z6VbO/ByK0GTwgBa8M+nDRPIQpP56i+hazH1t8Q5PWYe75hhjzjFA3sz2dp66YS4KxByYoXYQd3hH4KAvMNf2lRZIMMbcIA4QlMMqB1J1NGw/UuJ0ifDFO4DUn1aJnmofABfX7I4Q2eH3gBmUFeAJDiFeeis0AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/dribbbleLogo.png":
/*!***************************************!*\
  !*** ./assets/logos/dribbbleLogo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/dribbbleLogo.842ea519d64368ec4238d8a8568a7aac.png","height":94,"width":251,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR4nB3KsQ3AIBAEwTveIiWlBMv9t2PXQECA4OGMyFbaoaQ154JZgLtzt0ggxoj9cMD7fiilcIyB3rvcJ5/nVs75ANVa0VpDCIbrsg2cZqaUEn80UDTzUkRJdgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/freeCodeCampLogo.png":
/*!*******************************************!*\
  !*** ./assets/logos/freeCodeCampLogo.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/freeCodeCampLogo.31df15002b4d3c4bd78d9a22367b8587.png","height":82,"width":504,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nAVAsQ0AMAiCxbV+59T/nxAwnPnufthdVBWTgGRsQxIP20cPMjwQJUUAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/gitLogo.png":
/*!**********************************!*\
  !*** ./assets/logos/gitLogo.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gitLogo.fd7bec1d86f01f442e3ea1bb2f19ac71.png","height":367,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42jWMQQoBYQBGvyIbMyVKKY7gAk7iMG7gEDaSrQOwtmPx3nZKFo4gpUbTn937Xn0vCf3EFctCoZdYceLtLLFTTvmwYWvrOAkTG1vurNn5dBSGXm05s/fCzSrdzxdHDn4d/KO1DQ/qsmKn5iwK/QAHGDwSfXf7wwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/gitLogoHover.png":
/*!***************************************!*\
  !*** ./assets/logos/gitLogoHover.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gitLogoHover.d8f817705b656fce96889a1c7398aa66.png","height":367,"width":386,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlUlEQVR42mMAgecJCSxgOjHRCsjWBbGfAcVgksxQSR4g3giU+A4Uk4QrgkqKATk/gbgGKNkN5P8HYiEGqCphIOcekP4PlLwApCOeJSbOB9KPgViAASjIDVRwAqQAiPcC8RIgfx+QPg+keWBWsAAVPgcKrgDiZUD8ByjGBrMC5kheoKJ7QPwQKMYL9wAyAyghA8SyyGIAjdhjkPxOwHAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/github.svg":
/*!*********************************!*\
  !*** ./assets/logos/github.svg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/github.838637adb764cb43bf7ed69abefed9bc.svg","height":512,"width":512});

/***/ }),

/***/ "./assets/logos/githubHover.svg":
/*!**************************************!*\
  !*** ./assets/logos/githubHover.svg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/githubHover.9054f79c4d0a06372ecb001d3342b65b.svg","height":512,"width":512});

/***/ }),

/***/ "./assets/logos/gmail.svg":
/*!********************************!*\
  !*** ./assets/logos/gmail.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gmail.90119edd85e7f9803d92669dd25436cb.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/gmailHover.svg":
/*!*************************************!*\
  !*** ./assets/logos/gmailHover.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/gmailHover.728ba27b745cf33e92651ec41d5217f3.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/hashnodeLogo.png":
/*!***************************************!*\
  !*** ./assets/logos/hashnodeLogo.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/hashnodeLogo.d40ced78157df3c243275e8f9e265a86.png","height":89,"width":307,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARElEQVR4nAWAKw6AMAxAX0mZHEEg2P3PgwOF4gwL2Ye1RI5zmE4v25ppHURAVam1EOOCXPdwt4y1x/sHIcy4Qy2FPSV+qmAcg5W8iSwAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/htmlLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/htmlLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/htmlLogo.9bb4d01353889182be1a41bf9d781a6f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42jXGoQ5BYQCG4a/rFDKqQxfNTCPobsAd0LgC4cx1iDbTBOH9gp1gJmk2w85m+89fzp7yiDWh5MBGXpLRphe1yLwSC840eXLz1cFzMeNOhTGjuLencp8/Rw7sXePhgdzh6yEpW1f9oivX+XBiEl34uSHLCTtycqdOrAJ1MFkT9O+1DQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/htmlLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/htmlLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/htmlLogoHover.3b11002cdd1602e2a12d961a7cec47bb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApklEQVR42kXMoQrCYBTF8dPtWjSr1Wk3iohNg2lf8AV8A236BIbhcxgFsRmssiAiOGyCqAwG2/+OwQY/7j1nd9PT99dIc84B5b4RYYkQ7ci5HtO0EJJXYlngjCZfvHDjxTXiL5jbwYzlzqzwcoyRdfjQT8V1n5DgiAP2dDXmg4OBWDoUP8KQPWBuyVXmm9y1gzrhyzxhUrjQ/dGQPSwe5Q5xIYAnSRl4tYpj2wz5HQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/jestLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/jestLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jestLogo.8bb1378d414651c6208e1d3664120476.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42hXBsQoBAQDG8S8WMZIH8ACyKINJMXkB6TJc5FKyWOhCXcyklO6Gm267p/l/73Pd7yc3LI8p2RDw8V3UO+zoMfLUMyGGiCMFP6c05SUXYp948+fJXF6REfAl5uyESA7JfWONEJG38sN9BnQd+sqetrzg5QMJE7eQVAGY9EjUESoX/AAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/jestLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/jestLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jestLogoHover.1571adec481f28f98f57a2035a1b8337.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArElEQVR42mN4npDAxAAEQNr0eWLiumcJCfFAHAvkTwLiBgYYAApyAwXSgLQIEBsAsQ1QgxNMUg9K5wHxciCeDpScA6SZQYI+QJ1VzxITa4F0AZA/EYhnAdltQNqVAagyEsiZC8SxQPYUoGAtEJcC2S1AOhNkQjJQciGQrgfiaCQ3ZQLFU0GubwSqFgPSSkBBYaiGaiDOALK5QCrdgJx2IJ0NxC1AbAHUwAEzCQAcgm9oJJoMHAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/jsLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/jsLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jsLogo.c182b7e3746519169bbca8e84ed32104.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcklEQVR42jWLIQ6DQBRE/7V6lJ5gVQ26orKirmnStKIbUkEW8AgcR+DNAVBcAQcfCHkZMW8ypkAikjuRRDAl5h2tKU3Ry7QJh58p3/aBkY6e4hAfrpxcVX7ZhZ76k/E2Cq8NZ1oeyvQ1BWpe3Cm5EXVZAA3NYyvlUCfuAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/jsLogoHover.png":
/*!**************************************!*\
  !*** ./assets/logos/jsLogoHover.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/jsLogoHover.f3d669e642739682459eb04226127759.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtUlEQVR4nF2PMQrCQBBF/1goWOkNBEHwHII3ECtxg0Xu4hXSRCsRL2CRIyg26axSJFoLQhrHt6UuzMyf///O7FodQippZtLbzTpgmfvHpT6wsCZJju6+wCDIn2NmJ2tCyBHW9C3Rg5QDmEKyPBr29CvaSFTkrtzv1AFTy39DhliBCsQt3DMacsAaMp6MaFkzxHgFT+IvDriXLp0Rdjx4g3CDq6nTOCFFnNM8WPGijrldUkeYLl8FXEboULJCcQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/lessLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/lessLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/lessLogo.2e78b4a7325f0fb2b1307645180c3da4.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXElEQVR42mXGsQ1AUBhF4f81hhBRsoB9sIBERalQCa1GJdFYwA76c/fxopDI+05xr8nh7ON/gEbdu5GZYtWmlZODyTfQazTNXNy0nGzsWoySnEQxmVIKKgvI8esB7kstkoWCxwAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/lessLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/lessLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/lessLogoHover.fce30751f14cb2d652932a858f6b5f18.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAnklEQVR4nDWPwQmDQBBFdy5CwJuQQ0oIKSAdpIysDaSPQM6pIaWkEr14EhRRcHx/0A87/8/Mn9lda3M2TwE3BY44GdHdZEgCkuDUYeDSsAwv+MTkm646BfmMusAPGb40KiYWCg1HGDkT20oZPiRXNlTwj8k7ukcX6M6anJ+IP8WBTStXlOQT+Rm+WVvXujdejyG0gCJYPDJ0/ELYDQc2A1M7GJRYa8oAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/linkedin.svg":
/*!***********************************!*\
  !*** ./assets/logos/linkedin.svg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linkedin.83bc2d966c2fff4443ad593fca91eb0b.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/linkedinHover.svg":
/*!****************************************!*\
  !*** ./assets/logos/linkedinHover.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linkedinHover.cf2525f8c32ab079d955e856b2493505.svg","height":510,"width":510});

/***/ }),

/***/ "./assets/logos/linuxLogo.png":
/*!************************************!*\
  !*** ./assets/logos/linuxLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linuxLogo.c1d57cb8fab484006119f20b56286ac7.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42h3IOw4BYQBG0e9Hq5BINGQ6jyimmcQWZPqpxC6oRGUJopbQWYcl3LsWLXHKE4pxwgcZGUroERoevm0J/fgLa/ZcPBkGMYQjFWNxbkJsPfz7ztPE2NERw9UXCSsLWzesaZw5DRVLa87c2LFg+AX94UNr6W/99AAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/linuxLogoHover.png":
/*!*****************************************!*\
  !*** ./assets/logos/linuxLogoHover.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/linuxLogoHover.35b90e39657c33dab5bc6d037bf7007b.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmUlEQVR42mN4npjIyAAEzxISxIH4OxBffZ6QIAgSA8sBOUxQBSZAvAiIjwDFvEBiQJoZrgBI6wMlY4G4GYiroWIsDDAA5JQCJeSBWATIvgI0Xg0uCeR4AQVLYHygovlAvBhZQShQQSiSgslA/iqY0ZpAzAjEHkCF5kBJbSDbBIhlgVgGpFoeyNCAOrIWiKcCcTQQqz9LSOAFALedW/H64SR/AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/mysqlLogo.png":
/*!************************************!*\
  !*** ./assets/logos/mysqlLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/mysqlLogo.b8f22682024b1d2da1ab85a70123fe28.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAX0lEQVR42mPAAFcZGRiugLDwFYsrvCgSV9SuKF9hZbgqdFUAyGW7InHF4Yr+VVuGK9OvTLuScyX+Sg2QnHHVheGq1hXVK1FXvK8oXjG54nBFEZstVxiBmOkKCDNdZQQARaooMug0uNsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/mysqlLogoHover.png":
/*!*****************************************!*\
  !*** ./assets/logos/mysqlLogoHover.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/mysqlLogoHover.aa9841bf37b028115940582ef31821de.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlElEQVR4nG3OMQ7CQAwEwHNDhShITRkJIVr+k7yKT/Ad0kNBSkApERxjhZJVNmuf13sX5Yex60qlJaJEVdFCwyC0NaCC40bfas90irHvrc0wL2HXoKVves2EtbiP4YNngWvc4l3KKg1HTl8ZcMINpnkv5ZSGnebFcaBPHAwaunR2iZvX/4P4+U0SLMx3QNZZpuavfgF8WTvpPu+c3gAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/nobleLogo.png":
/*!************************************!*\
  !*** ./assets/logos/nobleLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/nobleLogo.f7f476403e08faf56da35471c350e003.png","height":223,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2UlEQVR42g2G20rDQBQA52w3G2NNShVR8QLxH/RNwYd+ueAPiAVFEVpEbLW0sU1jkt1jYIYZIbtd0u8NYme8MyKuZ/CqdFAHDfbm+tTMFmtWZWOKqpWf1w0cRRAZjvsRdnR3pednJ8y/F1TbSvP8gun0g7pu5OVtgnl6fpev+ZLh/gFl7aXxSNxPcZ1tEOxlGPN5/8DEpCRJzOP4F2N3yfYcYabY1cbr4TCjKBXjt5okESJ/xJRktnuXj4p6TUqMEhAsUAEI7GiwMYRBprQqwYhKV1yqgNKohH+aq2JiFtIS6wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/npmLogo.png":
/*!**********************************!*\
  !*** ./assets/logos/npmLogo.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/npmLogo.f7509b5e9b295a6a82466325c8c95adc.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAXUlEQVR42m2NsQ1AYBgFv/zmEZRKGq0RFLTUgqjoVGzADCa5t4+IqHgv196ZPBwvTp59pp5KAxUdNQWt0SjXqJSJRKU208rOQsbBzMlpigipaYkJ8PF/pO5O3tHnF1WjNWBK6BhBAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/npmLogoHover.png":
/*!***************************************!*\
  !*** ./assets/logos/npmLogoHover.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/npmLogoHover.a2c0786ec5a22062b6d215e77be470ab.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoElEQVR4nEWPuw0CQQxEPRCSECGIKYCjARLqQNqrgAbogm4QARKVQMAvBIkQ8+YQd6Md2WPPer26ltKPiMwIhZRksoaGbGiVIdHH/q/ZsEHcycfwBkfwBZ9YJ7qUsubWKTNnxCNxSXNPc8q4yhO2TBhSfFDcka/Iz7CCPFHXc255swV6gOEQEW/0h9gY2Cn5wg8YGlg7t6FnA/D+LnI6fAEaPj4z3q7ESwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/pythonLogo.png":
/*!*************************************!*\
  !*** ./assets/logos/pythonLogo.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/pythonLogo.b8f4ed91339f5650cc7f58f1ec5bb5cb.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbklEQVR42iWMsQmDABQFH+gMDqFDuI37WCWd4ASmELdImnsQbGwEsbC1Er6o190VJ6cSpQdaZxKJLmjA4eqRnDdfFge9axfyh+BgY+HvoJM7wiMTMztXoKCmJ1j58XL+fCrC0NziRHJG64FSIj0BOKZMBPozK9QAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/pythonLogoHover.png":
/*!******************************************!*\
  !*** ./assets/logos/pythonLogoHover.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/pythonLogoHover.38a40eecb5cd1d9e9f51edc91e511e38.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR4nB2OoQ7CQBBEd9NWYEkg4ElIqAaLR8AvXE1xKASfgMChqOEXOIPHkaBRoNukKCyhOd5yyWRuZudmT0vnYlH9SghTEdmAF1jj1XiRVlkmXPDkiDmGU/QSLtBiDSPECkww+irSCyGc4Se60Mo5z/s5gQbjDX9oMB4CbytOvFggHgQSOCHQhlu0eFuRcslpGRCYMawZluCKv7cVwtBODg6Yd/hGOKP5/8kIowFdsAMdsFXVC4H4B8EQRf1uk0IyAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/reactLogo.png":
/*!************************************!*\
  !*** ./assets/logos/reactLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/reactLogo.2ff78cc39b4ac81f8b6e6187a9f6ae15.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAd0lEQVR42iWMMQ6CUBiD//XthnsYTNQ4sRsZ0EncYTAmEliBCzCzwkrCab7eBx60SYevac0MR6IDgV5y5qWzQgr+nLhsgEwlLTUVme9TIjoNjGtGSk0xD3omZnrdFfvJh5xajXK999MbIT++Ouq6ARxPgtUJzmwBRTg8+iSvfxsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/reactLogoHover.png":
/*!*****************************************!*\
  !*** ./assets/logos/reactLogoHover.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/reactLogoHover.f6dc304cc458dc127c3ce9bd5bc4a65e.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR42k3OsQqDMBDG8VuzF9+jWGhLJ/dSB9upFpKtHYqg6Kq+gLOrroKPpa/hPxLBwI+7fJ5HxJ5JazUZE81aH+DNxryoCrIegjMXHxlS7ifqBbJt+CJnS00tUbhs/TumCdAw0FF7NOQBYmFNSPBAiwEjWj7eEQrHDn0IfwQlfWV76huyDdzgI8EfR1z3j1R4wnMil8kCVVFxqeycpdMAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/sassLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/sassLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/sassLogo.e8351b219b0da5b4c1010075e33fd2dc.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoUlEQVR4nB2OMQ4BURRF76OSqDQiUVJS2IFYgehtwyYUKolO1OzGV6gFO1BMxptz5/+c/+/7c/LmRbmXrqQalJGcUrDlyGXBH4aRseGpR36Rr+Q6sSzMKbZwlvSAHdKeu0IMCweKI3xhDW/4IBWEtDDiYQV9mIDnmcIFioUxwb+YQQVPcJcbDQYWlhQLOMEP3KFdCO2QzEpgt8tXqsP5t9AAoH9HPL49GfIAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/sassLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/sassLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/sassLogoHover.233f970c6280e87e6a7eb5e7da27efa9.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAoUlEQVR4nC2PMQ4BURRF76OSqDQiUVJS2IFYgeiFVdiEQiXRiZrljEItxg4Uk/Gci5c58+/7c/Lm/yhX66akGpSR4vlXAD0CObt8XbDTQrpHxplc27UwZl3CUdIVNkhb1goxLOxo9vCEOTygRCoQ0kKPjRm0YQA+zxBOUFjoE/yLEVRwA0+5MKBjYUozgQO8wBN+xZUscBkyfMsh1eD9ZoI+18Y9jHiSW40AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/sitePointLogo.png":
/*!****************************************!*\
  !*** ./assets/logos/sitePointLogo.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/sitePointLogo.707841c9ccb5c58cff7e558f02d9a48d.png","height":86,"width":269,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZ0lEQVR4nBXLwQ1AMBQG4P8d6aUcWABxZw826mIdQUzQAUibHivV5D0xwEf7tnNKiWKM0jYtee+lqisopXBfN5ExRsZhhHMOXd+hvAU5ZzAzrLWgeZp5WRc6jxO/1FojhCBPeiAQ+gAFiC2+uVxVowAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/tsLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/tsLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/tsLogo.8be8b48cc0f47c6774ef3b30ea3080a5.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42iWNMQrCQBQFf47w94uIpd5KsPMeHsBDWOYYiqW287QUQWziBnKCTZYw7QxjNDhBIilwGsN5kvnyo5NwU5ApFRUGpWr0fDhz5cZLS5Pzn9hx4sCbhRFkFY502qtlWxORufCg1Z0wzds1KzYENgKbzVP5BiTybAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/tsLogoHover.png":
/*!**************************************!*\
  !*** ./assets/logos/tsLogoHover.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/tsLogoHover.88ef19c52189bbe82ba7b4cda6d8523f.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmElEQVR42kXPQQrCMBCF4ckRbETEpd5KEBrwHh7AQ7j0GIpLXVeXUiiZRZtCT9D+Q1u6+MjLmzAQiXnusIKPIWRGydaRnVjQEL6ciaJCJNd0hTITgickyp5hb6cCHTKxV2gZlLjhiRd+9BuJ44PGkI+44sz9j7Vt8EjT+gtq7ifccZg3FJwJD3ym4RteKJwu39xhS97DvioDIL6In7gCdlsAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/logos/usLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/usLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/usLogo.91f8ef51b018c8b96320f6ba5788ab5d.png","height":750,"width":750,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8ElEQVR4nGP8BwT///9nYGJiYgDRjIyMDMiAESj4D0gz/Pr1h4GNjYXhw8evDI+fvWWQlhBiYGFhYmD88PHLvxlLDjFwsLMw5ie7Mhw5eYPh2csP/7cfucfAwgw07/CJ6/9sLaYzHDqewailJsOw69AVhqjuE//5hFkZ1pc5MDK2T9n6r3LdbYZIPSHGUDcNhtW7bjAs3/r8/6MDSQyyUiKMjG2Tt/6ryj3C4JWuwhDpqs4QG7KJoaLDgqG9PJAB6H4Gxo+fvv67cuMxg7K8OMOpC3cZLt96wRDuY8ygrCABVAD0FcwXQIDsP6AwUBIIAFq4ZpA7FHV5AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/vsLogo.png":
/*!*********************************!*\
  !*** ./assets/logos/vsLogo.png ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/vsLogo.de5d7ba8c216c0b69b646f94b5a23a3a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42k2NsQnCYBhEr3AFN8goOoDWBhQrK8EB7G1sFCE7CAopkgX+Dd4tk+bLR9Kkecc7OE6SxYokJ9dOXVNN+qQQbuRLxo462RIU8eXDQOHB3uFedNz5EbzYJrO4Ej77RvCfJxUbhHhTHDRa3B59sEaFUlGyBCO5eQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/vsLogoHover.png":
/*!**************************************!*\
  !*** ./assets/logos/vsLogoHover.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/vsLogoHover.6a5afac2e3f99b34579359953682dc2c.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuklEQVR4nCWPMQrCQBBFZ8BSSGVv4QVSCZ5BUDzBLqSx8iSKhVikVEstFEEUS4mIV7CO4BkC45tk4edn/7yd3dEyBFFVMbOWilQmIngk9P+tAx2yhPBD4GuB+mjAwVzLGKdqtqY4IWyjDfAZH5IV3mEP+eOKjLZvCg8OvPAD+6t+Q7hAPglSgjG+4kEn/EanGpixWQJleILm6IhGqHCgR7ErInfECOodUuWR7HIHxBdQMyYjAwS+FfHuD1xRRHDfwfHBAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/waskoLogo.png":
/*!************************************!*\
  !*** ./assets/logos/waskoLogo.png ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/waskoLogo.8a8e5c67f482522f459c49add2f51896.png","height":252,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAPUlEQVR4nGOUmHQ6k4GR4SUDA8MXhv//uYA0MwMjIyuQZmJg+P8JqODUNaDAFaDkP6DgNyAWAvJBNAisAgBCmBCKKPQsgwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/logos/windowsLogo.png":
/*!**************************************!*\
  !*** ./assets/logos/windowsLogo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/windowsLogo.c810bf810099e1cc32be824faef9ea09.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAY0lEQVR42mNAgCt8VzSv8DFcEb6SfaXzSsSVU1ceXflxxZrhqvOV/1f/X5kAJEG0PcMV9Strriy5EnplNZBed1WD4SpY4CpU4IoGwxWgliv/rwK1gGl7hqsgQztghl61xrAWAH3uSdUHF8nHAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/windowsLogoHover.png":
/*!*******************************************!*\
  !*** ./assets/logos/windowsLogoHover.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/windowsLogoHover.99ee48712ac4c5e18f3a413d679918c9.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAn0lEQVR4nGWPsQ2DMBBF/zFAmkgRUpS0rBHJO0QpzQRIlOkzAKOkZ4dkCZiB7niHgAZLh/3/PR/fNta1zF1uJrEbu7ufJF1xBhtzPiNe1B3jB9hClOgLOsWEhNGvNzsaDY1tPWJChfFBTNSXCU9IcBXod0yoyHAAOBd8AHJOiJ50EbYDaACwJIDlF1vIG8afVsu5pPaQcVM0lrWG3Z85A5FMQqG8TxKoAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/yarnLogo.png":
/*!***********************************!*\
  !*** ./assets/logos/yarnLogo.png ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/yarnLogo.6434508ed51a906a7584c992c570801a.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42g3JsQnCUAAG4YO3gMYd3CAOEDCQxhgDgsPYijYWERzDae6fJz4OrvlICW6cneqxALZZ7B1c0oaqLpIhXfDjhkwZQ1YfkpsjznaZXf2K15zJrtrJX+7ufbsFPORp7zEvW8EiNl5qjaT8Ae59Q8BVSu4qAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/logos/yarnLogoHover.png":
/*!****************************************!*\
  !*** ./assets/logos/yarnLogoHover.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/logos/yarnLogoHover.dd5578731762001a8cb4ee54237556d8.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAv0lEQVR4nCWPrQoCURCFZ7gv4M+zaBa0GFUQDMLdJgaLTbBo8AEMPoBJsAjm1Shs8C3cpiZBwR2/wQvDOXe+c8+ymscYRORrIiW0yRTMSVWfYhY0TxLB1AgMAUcVCfg2uuWe6S3GEukFywnBNv4NSPFrUZ37JzqYwswOvDKCKwIzggN2L2/oAR6mWgbvgRvgGNhHP95QZTnl5YVgRK/cd8yIWXqDcOrALjDFG76F97bMGwLGf7OCNuR/zoTuaPgBTN9LCJ3ltEYAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/new-photo/api.png":
/*!**********************************!*\
  !*** ./assets/new-photo/api.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/new-photo/api.ff8243353c237bf9b2ca8ccbe388fc63.png","height":859,"width":840,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42jXNqxKCUBRG4f3+D+ELaDPJJTgkBzUeTwTHII5Kgjmb8C8IUFZcnyWcSEnBAydhLWcCiYlIRYOd9Gfky5MfHRl24cOBG3tyXtTYXVE7HRVUq+Uqy3gz0uH0S3OsUUXAGbZpkhMpKFd2BlxUdiBrV9amAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/new-photo/next-js.png":
/*!**************************************!*\
  !*** ./assets/new-photo/next-js.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/new-photo/next-js.a36dac0e468df46a4f79fb093263b6b6.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42i3LsQkCQQBE0deENRyL3QkWYWAgmAmGFmAo3KFgBzZgrLJG6mXjBsdnYPjwhWIwNnpdULxk4qnjLE7tVr20+YmlhbuV+DCKvY2to/hy0YRq7SYG5t4iHg6qIpq6aqGdWfwBEzMw/yK+GtoAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/new-photo/react-native.png":
/*!*******************************************!*\
  !*** ./assets/new-photo/react-native.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/new-photo/react-native.c518edbc567acb8fc120afa3a63819c6.png","height":225,"width":225,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsElEQVR4nE1PMQqDQBCcLS6gVmJAsLlgE///m1jICVFMZ+OhoLvZvTRZWG4YZuZ2SH4DIhIApGujlChFQsxsCDFGWdfVDCjLUvI8N5wEbIJhGBBCsCR479G2rcUgqdSNV9/LPM10uzlU1V267kmakhLSF8vykXEMpBF4eC91XZsZdJ4n7/sOFWLbor4XsixDURRwziWBvKcJfF2iJB3HAV1RETVNk25grWX1rKbNP8YXaipz1M+PzTYAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/new-photo/sadegh-1.jpg":
/*!***************************************!*\
  !*** ./assets/new-photo/sadegh-1.jpg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/new-photo/sadegh-1.1111d4361a01cbf17e2c5418e636a009.jpg","height":1280,"width":1044,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABwMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAADP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAeEAABBAEFAAAAAAAAAAAAAAADAQIEBREAEhNCcv/aAAgBAQABPwCS+rlnGS1I4D5Q+Ua5XAx9d3rX/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/AEy//8QAFhEAAwAAAAAAAAAAAAAAAAAAABES/9oACAEDAQE/AKZ//9k="});

/***/ }),

/***/ "./assets/new-photo/sadegh.jpg":
/*!*************************************!*\
  !*** ./assets/new-photo/sadegh.jpg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/new-photo/sadegh.eb230ce5adcc3d8b259398b5c1601803.jpg","height":1280,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAGP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAE//xAAaEAACAgMAAAAAAAAAAAAAAAABAgMSABET/9oACAEBAAE/AJJ17FZShRUFaqSNnP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwCUf//EABcRAAMBAAAAAAAAAAAAAAAAAAABEmH/2gAIAQMBAT8At4f/2Q=="});

/***/ }),

/***/ "./assets/photos/barcelonaSagradaPhoto.png":
/*!*************************************************!*\
  !*** ./assets/photos/barcelonaSagradaPhoto.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/barcelonaSagradaPhoto.58864fc67a4b83eea0416f98128194b1.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AU9sXP4oOmIBEx00APn7+gAQAfsA+gMI//7+/gAGBP8BAVyHl/4eDhwAENLTAAVFTwAOCfYACv/1APMOJQDv/QcAAWmq2f8L594A+W9JAC6RnAD4DgsACfHXAB0pM//v/w8BAafG3/7GwccBJ+G4AA84VAAIBe4A7PPz/zIqIgDs8fIBAbOpnP7m5/IA6gIiAAodKgAm8sIA5QMLACUZDQDx7eYAAZCMjv5NU1QB4Ob0/8TrAAEN2bMACQX5//kFCQAoIBcBOHxRovKgGo0AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/bowlingPhoto.png":
/*!****************************************!*\
  !*** ./assets/photos/bowlingPhoto.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/bowlingPhoto.4afb3e88d9a37c8e93a86ddaa7c0f93e.png","height":667,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAx0lEQVR42gVAb4vBcBz/fH9+dxs7s3jgXFiTugfXrru6ujySeAVKPPBylaR4ppRWJJGymf+2+YpKhcrj09RQsZKYDVQ4MoATz0Po6pG8/QJGbEtFrU+nO4Mii8Rhs2XlkYIbaphnkhin89C1EVO702X2QrwKC365AVf94L27I2HaNWR/qzwZ9uCnsjCKJVziBYjLNeBzREj8/SDhrZGRB3y/g6WZE3CmS7SadZaKDl+5IUzHIPkOKn/9s23naDV3EAXEL28GPQG+OEmqQBCw3wAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/climbingTopPhoto.png":
/*!********************************************!*\
  !*** ./assets/photos/climbingTopPhoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/climbingTopPhoto.4a512acde3af0768a71df58b70c7c4d9.png","height":889,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AXyGi//u4dD/3OLnASIcGQABc3l///Xl0AD5AgkAEg8OAAGAak//AP8GAO8BDQAAAP8AAaOKa/738fEA0eb7AOzz9AABqIpo/gwD/ADF2ewA4vD+AAGsiGH+CgX9AO4OMgDj6/IAAaqDW/8HAO0ADUeOAB0iIgABpHlO/hMN9wAIOoYAGiYqALJHOZ6zesJNAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/cop24Photo.png":
/*!**************************************!*\
  !*** ./assets/photos/cop24Photo.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/cop24Photo.08e03b178b8b7c7808f5a0bb4f15ed6e.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42gVAS07CQBj+/mYslTb4SnRDookR4gFcuHbjDbyIN/ACnsYDuCO6cmE01AfvlFdgmDBDW+Yj8vz06KOoIkoluLxq4KNjcXbe5MP9NcaDoag4SRBWqqxGB3ALg9+uxnydot+MYZ2lCkIlECDcC/H91oI2R1i5LdKff8b7gSiQ9N6L0wa9vx5aozZO6rfMsgy1JEBQ5iWKvOQobfPr9YWf72Tj2AJbg+lkRuWsA/1GllIwq1/I3c0hTms5jdbYFIXsALEHYWYBEll4AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/franceLaSalettePhoto.png":
/*!************************************************!*\
  !*** ./assets/photos/franceLaSalettePhoto.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/franceLaSalettePhoto.2f8a629a6ea1b81354173ac5f292fbd4.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwklEQVR42gVAvWrCQAD+vpqfQZIqpVSwHQpdKv6gbuIijq7i4/kALoL4AiI4Kjg4BwQhIKK5JMacdyecLvfasm02fnyQQHjL8JTK5I8cRklav2VCqdzEIkLBcZCmKS6xhEgeuIvIWNP5mn5+xudfDY5XQpJmECLBLQzMNdiTpdZE++GB1XYXtnsHmSE4Lky1+A6vUCdH4762kcFFDG2dUPkaotscYLvbYLWe4a3oRtBKUtGDlN8c9MZs/Hfw4VdQ9jRf/GRTWeEmVFQAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/giewontPhoto.png":
/*!****************************************!*\
  !*** ./assets/photos/giewontPhoto.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/giewontPhoto.492cf8c232b8922e997553cce8223df9.png","height":667,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAiElEQVR42hXNQY4CMQxE0V+O0yPg/oeZ7RxgDoOgoZ2ODVl+qZ5Kv3//WYgYyf15cMRgjIk3dyGVNXQmpFRwys2sendiTFDhzWiXn3ITWvy57/QVHY74itc7aO61bV0GXK4b9tgxyWrEsc4ojCq43a7l4zxZtQbNjZyTiIGTKWtLhWYmJpUq9QEd/EsJPMh9hgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/icelandWaterfallPhoto.png":
/*!*************************************************!*\
  !*** ./assets/photos/icelandWaterfallPhoto.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/icelandWaterfallPhoto.520c9fefefdb4b2aea089af836b78330.png","height":500,"width":889,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AZuMhP9IUkYAFRkWAP39/f/e2+AAwbjCAQUF/gASFxX/Aa2hl/8WGBMACQoI//Hx9ADFv8gA5d3ZAAEE/gHh3Of/AbKmnP8MDgoA8e/y/+fm6wAE9O4A1NrWAPL26QH7/Qb/AaSVjP8ICwkA6ubrAM7k8P8U+vEA5ePdAP//+AH/Avj//LJHLko/oZ4AAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/londonArsenalPhoto.png":
/*!**********************************************!*\
  !*** ./assets/photos/londonArsenalPhoto.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonArsenalPhoto.2f4954742b8fc4c287560d3eb4adb4ba.png","height":500,"width":1029,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAjklEQVR4nAVAsQnCQBR9P4cECYegCIoDqNgp4gIipLSwsbG0cIgULuQGTpARAqYQMYF4GgnnkfBEoujMyhjkSYrK+tCatOULg/EEjQBy3IXsdPtsw8pirnB7BMwzD8XnCecayP60ZekMxV7lsAbcb8pLPMK3dijeCWQTrgh4VL6WoQRYzu6M0xayugcF4g9zDjvw/6paVgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/londonCanaryPhoto.png":
/*!*********************************************!*\
  !*** ./assets/photos/londonCanaryPhoto.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonCanaryPhoto.47bee99ebc8d7f43d5e3890b3e058ce0.png","height":500,"width":1029,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAjUlEQVR4nAVAMQ7BUBj+/mie0KqnpTroUEsraSMhYjOYmBxCHMD5bC5gthlMhlaVkNB8IsvVlnnVwUVPMXENzAZfHs8f5MpD1HhBhmFCp6dpzPeyiWvQ6s7DqQD6Y6ROCbH9mL71Y7reyWLkQlUFH+UTNR0iewukabWp6oqeF0gSBbBbJkGiaxq43jL8AaiVK8WVwAEtAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/londonChelseaPhoto.png":
/*!**********************************************!*\
  !*** ./assets/photos/londonChelseaPhoto.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonChelseaPhoto.3441bc191121f3950a2b02a2bb93fc41.png","height":500,"width":1029,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AXVhMv8MGT0AJz9bABUWFQAVExL//Pj2AN7UyQDz59EAAWpcPP/39hT/DxYaAQUNEwA3Pj3/7ebfAL+5vADW4vcAAS5AY//+/eL/AAf8Aff79wDd28j/ABUtADEbKgAFAQMAAWJfXf/U6t3/8vnGAQgJCgAFAh7/+vnxAPr55wAD/wMATLg5qI3HUbEAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/londonTowerBridgePhoto.png":
/*!**************************************************!*\
  !*** ./assets/photos/londonTowerBridgePhoto.png ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonTowerBridgePhoto.b7815eb448a82dbaabee3d0676bf71d9.png","height":500,"width":755,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAnUlEQVR42g3MSQ7BUACA4f81r8RQ0YqFhTNIuAj3tHICK8LS3qy0tDqrDkn5DvAJy3Yr7+1UslYnjkKajQZtTUMIRZRFjtxu1riOxWg84WGa6HqXVqfN/Xpif7kiF4s5se8QRvF/8OkbOq/bgd1qSagayNl0SuAH1NUa6nBAhSLcp10VZYHR05BpkpBnGZfzkShK+OQQeC5KYJI6X37L201As5fbMQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/londonVictoriaPhoto.png":
/*!***********************************************!*\
  !*** ./assets/photos/londonVictoriaPhoto.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/londonVictoriaPhoto.a0fcb8bfe8794f89a836e20b2e6b49be.png","height":799,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAqElEQVR42gVAQQvBUAD+3jystWykyKLIwmFxc3P0U/w0/8J1NaVZHBQuS2IzWjHby9sTmS2W+S9lmGgBnLiFguCg02GdSCxGdDyLuTUgltkE1TUFMk+gGCoZjyow+w1IVk8DT5/gWYoouMA+vCCd/Kso5ZHIiSw8bytqMhMSu7vIvgk03cDnzbCxV6B7d42bH0Ct6niEIdk5GShBCe1uB5xzFClFsazgD5XyRyxtDfRLAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/manchesterUnitedPhoto.png":
/*!*************************************************!*\
  !*** ./assets/photos/manchesterUnitedPhoto.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/manchesterUnitedPhoto.6feed334fd096bbc4f58b83d7b547f5b.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42hXMQQ7BQBQG4P9lXqdoNQgVNm7hsk4gDmDhGhYScQAhQtNWOzN9T+2/fHQ67MU6IXEtiscdnKYYz+aajBKEKCbeXR6om0adCt73CqAKw+wFqh3G1ipP85wS6dAI4E0JMgb5MoXvRIMwsfpW1QsNbYTNzGA6UFhTaxk62PYNXoUn4gGrANCywL8ykxEmTGi+N+Xr8QTn236O1GVbirtPj84aECNbrOkHtFJUUKZtQpMAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/mazuryDownPhoto.png":
/*!*******************************************!*\
  !*** ./assets/photos/mazuryDownPhoto.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/mazuryDownPhoto.094fa25867b3faaa2c789daf44f1398a.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42g3MO04CURSA4f8Ml5kLM8PDCPGZ2PhgDcaCRCutrd2GCzCxdxkuwcaSSnsrbdSgNhIY4D4OfAv45O7hMfq0IWLq5M2UMrdsFFb3O5ZWLYjZrlXMDVpsWnaLlG4G7WbgafTM+ONNZXBypMz/GJ6dMzw+pNdp8D7x3Nze6/XpgcjVxWV0ItLf6jPoluyUdV6+Zvr6z3pLxLR6e7ioWvmE0XeF/V0i3tFG8NOlms+fMZlJJc8yNSFISBIWzmlE8VFlBXL+RU0aCdzzAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/mclarenPhoto.png":
/*!****************************************!*\
  !*** ./assets/photos/mclarenPhoto.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/mclarenPhoto.ec4f610d5c1ea2eedc554d25e233eb67.png","height":890,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAk0lEQVR4nAGIAHf/AXp7cf4PDQ4ABgcHAN7g5AABjpaU/gUFBgAEAgIAzs3MAAHQw67/5fD2APb08wDT1dcAAa+Yf//3BRT/Bg0JAOPo8QEBjIJ7/9vJzwAXFg4A2/H1AAFdV1D+4NzhAO3c4gD+FA4AAT45Mv/3/QD//f7/Afn4+gABMi8s/v39/gD5+/wA/P7/AA3EQuR1B2o5AAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/notreDamePhoto.png":
/*!******************************************!*\
  !*** ./assets/photos/notreDamePhoto.png ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/notreDamePhoto.caac0d7991c224abe904d440ab731a49.png","height":667,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAw0lEQVR42gVAzUoCQRz//WbGbWzdUSK6dSgQ6lQP0Bt06QG79ghePEV0LwqkCBJ0/YBB3fUD19XZv/D5pVMxbECpYE9jXLVvcd5yUBo7ZqMefPrLSJORTbDallQXrROJVIFyOYDVBzRsDdO0L8b/fzMUBVDukPsB/nofeHvt0vjhFLPDTBrJGfP5BOM0Q1x3MNu6k7ube9Q0ESmi033H1+ePmMvrNjQ1lnMviyyHNcDT4wNUYjVlv0YV9pQQ2ExiuKbjEYixT7GcvvwXAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/parisEiffelPhoto.png":
/*!********************************************!*\
  !*** ./assets/photos/parisEiffelPhoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/parisEiffelPhoto.f5df52c2fb5d78cffbdb8e658c9719e3.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAw0lEQVR42gWAvy8DURzAP9/X93rXa694J3WDAYmERNhtBvE/2mxGi9UqEhGEWAwWaYgLPb3r9cfdt5HDo4Pm+elFLi6v2d/d4vzqlY8f1Xk1YVxOxa50YlLQm9t7cpdiehHeWH4zQ9SyagdhKO9AYGtMqyFZdaSbA4ZDp3k+Edvf2dbjJBbfC+jWGfXXG3tedM1XfJoKOTs9aaKgjTPCeuIpyyl3D4+kGzGz2Ryb/S0Yt5FO4PS/+BZQwm5fs1FFUYxkCWuVR/kQoOnZAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./assets/photos/playingIEMPhoto.png":
/*!*******************************************!*\
  !*** ./assets/photos/playingIEMPhoto.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/playingIEMPhoto.2f5f4fc5f41266e34dbf5d79b0d45c74.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwUlEQVR42gVA32sBcQD/fMw2t+t7NyPWbrub3HabFE+KPIryVysvyoNS6vyMuBAd3YtOua/Y+C1FVe1GEZ7RFT8QiTekUkkZJIDrxxfjzGTxGKxkWlFhbAPozTzKlQIWmoMw68hYbTbgw3DMk/rOzb9J0zb4XXQo/TnihznZs/6ijufSrTfhWSawHOPTeJU7PwQVnWzl7EjIC5LaM3KKwDmmYjJz4R189AEwDURHgG0rI62XJ/q6jXzBltf9GsF0xDsrP0GeKUZ37AAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/rysiankaPhoto.png":
/*!*****************************************!*\
  !*** ./assets/photos/rysiankaPhoto.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/rysiankaPhoto.b8b5036140573423913a703bf8d99b67.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAzklEQVR4nA3KvUpCYRjA8f9zztv7mlYSdCpBm2qIbIhuokuIhugOatGlubto7DraoiCiD3KQkjTFbzhy0EGU99Hpt/zk7v7NS2gktAaXtqytO+agu1nHOIlFHh5/vbEW41ZIZxyppTO/HF4JBeS6fKt7+Tz9acBOFJHLRaRWM1jrNEBFCtv44tGBZDc2SSYBle93GgOj+8UTmr1EpHRz4Z+ePzg9PGarYGj3hry+/DGKBygWKZfOfKcey+X5lVYrn1KvVal1Z9potfn6+ZcFFc5HwlpC1ygAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/skiSwissPhoto.png":
/*!*****************************************!*\
  !*** ./assets/photos/skiSwissPhoto.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/skiSwissPhoto.d5f3bb9c96ef3ec1276ffe3e208362f2.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAo0lEQVR4nA2Ouw4BQRiFz5kZWSJB4eElOhGljmhEpdQpPIJqs5NdZs3l/017rh+3h5NMZw1Jg5gyYgGQkzpLTJwhj+ebDCGCVVfX4N390OiI9WqOrhvAx/OlORe0bYeUE0oR+D6gCNX7vi5c7uImjtYaGK0X44hUqH1IUFFyd7wKSKgCn2+A9wOWqwU0Sw1Ua7M/S21TRNVY0lmLGLOGMaEi8g/zU2GCw6Y/tAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/sushiPhoto.png":
/*!**************************************!*\
  !*** ./assets/photos/sushiPhoto.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/sushiPhoto.f9950c487e8454e24eb3712dd23dc34e.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwklEQVR42g3KTasBURwH4N9/zpnRmRv3jjsKIYS8lLLBykeQlW+sFLEiC+VlgRJGXpqGcw6LZ/dQt5VWdvyH+JFDSgv/ThjETC39AAYx4uF0CfLp68NygJAdg/IjSGaLUNWvb+TG9krmUyJ4WdjsjqhGXeSbHZyciH6EBFEvASX/XOo3C7AhYDbamE4W+p4q4LdSJ+4ZUQipNBI1OLky4MaQ8W6YjcZIibfm70DhbDEazte6YTLKsytsTtq47OGtBH0AYZJDr9QjiLAAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/swissMurrenPhoto.png":
/*!********************************************!*\
  !*** ./assets/photos/swissMurrenPhoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/swissMurrenPhoto.652d8e3310a96391e89d7cc9ba2fa034.png","height":500,"width":1057,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR4nAGEAHv/AWGb2f8UCwP/CQL9AAQC/gD26uMB/vr3/xMMBAAwLigBAWSJu/8CBgj/+ffzAAjw2AALDhIB9vPv//8BBQAFDBQAAcPHzP+Lmr3/5AgWAEX/1gD7CBEB7gsX/wL7+QD28/AAAbWuq//M0dv/9w4XAByyqAD8NkABCzo//wb9+QD3+fwBLrs9Msbtd5AAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/photos/swissPizGloriaPhoto.png":
/*!***********************************************!*\
  !*** ./assets/photos/swissPizGloriaPhoto.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/swissPizGloriaPhoto.6d4d98a86bcbb0a091febd5e09949063.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxElEQVR4nB3OvQ7BUBgG4PdrtdRfIylSkdDBJnZGkwuwugexMdvF7AbEbjNYJFyCwWjCQf+0pecQN/DkoWJvxoXrkxT4iMMXZB4h5hBvLkMkU0St4ZrfmIvz1QbCAPAjIKNCN3JIqwqoPVqJQlpD1cj+BUNP4eM8YZ+OIt9qEnX7Ez7od0jVNLDbBYxdEXiS0BUJZqNCtFiueeB7cGwP7P6AVa+hZJrYbHeQIwc0ns55uWSQnEgKIoksy4KqQBz2Bzx/+S9+eFFnOXQ3AAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./assets/photos/walesPhoto.png":
/*!**************************************!*\
  !*** ./assets/photos/walesPhoto.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/photos/walesPhoto.273b2181abe6cc761e299e73dac41e5e.png","height":500,"width":667,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR4nAHGADn/AczR3P4DBgUBAQMCAAkGCAD6+fkA/v////7//wACAAEBAc7V3/788fEA57u9ABE9OwAOGhkA9fP1AP4BAADf3twAAcLIz//hxMMA3HRuABd1ZAArVGsA8/DwAOns6//W1s8BAYiGif71u7kBz+3AABomSAAdLzoA9ejg/wQLEAAA/PoBAWZxev4N19gA8rvIAPQ3KgAVHhAAIhINAAkZIADu4doAAT5UYP457uoBL+fp//sFCAHYMCUAGw4C/wIJDgADBAMBNltUFiN1kYYAAAAASUVORK5CYII="});

/***/ }),

/***/ "./assets/profilePicture.jpg":
/*!***********************************!*\
  !*** ./assets/profilePicture.jpg ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/profilePicture.437003481cf037238dec9fcadbb23268.jpg","height":822,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAF//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAdEAACAQQDAAAAAAAAAAAAAAABAgQAAwUhEhQy/9oACAEBAAE/AJGTi9+OQb2n4Bk8k7Uiv//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});

/***/ }),

/***/ "./pages/about/about.module.scss":
/*!***************************************!*\
  !*** ./pages/about/about.module.scss ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"aboutContainer": "about_aboutContainer__1yo-I",
	"content": "about_content__1sWDL",
	"summary": "about_summary__j3ku1",
	"hobbies": "about_hobbies__10aNK",
	"newsletters": "about_newsletters__1Xe4N",
	"commissions": "about_commissions__10oCB",
	"scrollGallery": "about_scrollGallery__ZQC2e",
	"hint": "about_hint__1O8Ru",
	"pulse": "about_pulse__1xHnF",
	"photoGallery": "about_photoGallery__nekjM"
};


/***/ }),

/***/ "./utils/about/photogrid.module.scss":
/*!*******************************************!*\
  !*** ./utils/about/photogrid.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"photoGrid": "photogrid_photoGrid__36m2N",
	"game": "photogrid_game__2hy1_",
	"ski": "photogrid_ski__37w0j",
	"car": "photogrid_car__4LVa5",
	"skyscrapper": "photogrid_skyscrapper__3yaXj",
	"lake": "photogrid_lake__1PJ4H",
	"monument": "photogrid_monument__3rz-0",
	"sushi": "photogrid_sushi___XISc",
	"boots": "photogrid_boots__2es8w",
	"waterfall": "photogrid_waterfall__1tVOg",
	"cross": "photogrid_cross__2mR6P",
	"bowling": "photogrid_bowling__oZj6V",
	"manchester": "photogrid_manchester__H-noc",
	"arsenal": "photogrid_arsenal__3TdGE",
	"chelsea": "photogrid_chelsea__125Bd",
	"wales": "photogrid_wales__187eH",
	"alps": "photogrid_alps__IorrL",
	"church": "photogrid_church__1gXMk",
	"murren": "photogrid_murren__1R0mi",
	"eiffel": "photogrid_eiffel__V62Sq",
	"bridge": "photogrid_bridge__3LWJh",
	"climb": "photogrid_climb__-Am9D",
	"barca": "photogrid_barca__26pP2",
	"colorUp": "photogrid_colorUp__3wZ-D",
	"photoInfo": "photogrid_photoInfo__1AiVz",
	"fadeIn": "photogrid_fadeIn__35jtp"
};


/***/ }),

/***/ "./utils/footer.module.scss":
/*!**********************************!*\
  !*** ./utils/footer.module.scss ***!
  \**********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "footer_footer__xKIqH",
	"goUpSquare": "footer_goUpSquare__2PcKR",
	"copyrights": "footer_copyrights__2-imo",
	"icons": "footer_icons__2Ux__"
};


/***/ }),

/***/ "./utils/home/mainheader.module.scss":
/*!*******************************************!*\
  !*** ./utils/home/mainheader.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"aboutInfo": "mainheader_aboutInfo__1w6u-",
	"header": "mainheader_header__2dw81"
};


/***/ }),

/***/ "./utils/home/toolstech.module.scss":
/*!******************************************!*\
  !*** ./utils/home/toolstech.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"technologiesIcons": "toolstech_technologiesIcons__3nd1s",
	"technologiesIconsRow": "toolstech_technologiesIconsRow__1qmSM"
};


/***/ }),

/***/ "./utils/icon.module.scss":
/*!********************************!*\
  !*** ./utils/icon.module.scss ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"iconContainer": "icon_iconContainer__3jUI4",
	"icon": "icon_icon__17TqY",
	"iconActive": "icon_iconActive__1F462",
	"fadeIn": "icon_fadeIn__epWss"
};


/***/ }),

/***/ "./utils/menubar.module.scss":
/*!***********************************!*\
  !*** ./utils/menubar.module.scss ***!
  \***********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"menuBar": "menubar_menuBar__2XW6k",
	"title": "menubar_title__3yKQj",
	"squareInitials": "menubar_squareInitials__2fIc3",
	"name": "menubar_name__3Yewu",
	"tab": "menubar_tab__mHo0l"
};


/***/ }),

/***/ "./utils/work/timelinegrid.module.scss":
/*!*********************************************!*\
  !*** ./utils/work/timelinegrid.module.scss ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"timelineGrid": "timelinegrid_timelineGrid__FNCNI",
	"timelineGridItem": "timelinegrid_timelineGridItem__3Bq9q",
	"timelineGridItemCard": "timelinegrid_timelineGridItemCard__3jwSb",
	"timelineGridItemAdjoiningCard": "timelinegrid_timelineGridItemAdjoiningCard__3PbMr",
	"timelineGridItemWide": "timelinegrid_timelineGridItemWide__1Lt0J",
	"timelinePoint": "timelinegrid_timelinePoint__19Oc0",
	"hoverTip": "timelinegrid_hoverTip__Eu51E",
	"pulse": "timelinegrid_pulse__1CzPq",
	"cardContent": "timelinegrid_cardContent__3RCRy",
	"cardContentHeader": "timelinegrid_cardContentHeader__1NGK5",
	"companyInfo": "timelinegrid_companyInfo__M7LIf",
	"companyTitle": "timelinegrid_companyTitle__2HJUM",
	"companyLogo": "timelinegrid_companyLogo__35q4j",
	"cardContentDetails": "timelinegrid_cardContentDetails__3Vwrb",
	"cardContentDescription": "timelinegrid_cardContentDescription__2BiKT"
};


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-awesome-reveal":
/*!***************************************!*\
  !*** external "react-awesome-reveal" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-awesome-reveal");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-tooltip");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/about/index.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vcGFnZXMvYWJvdXQvYWJvdXQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9hYm91dC9waG90b2dyaWQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9kYXRlLnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9mb290ZXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL21haW5oZWFkZXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL3Rvb2xzdGVjaC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2ljb24udHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvbWVudWJhci50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL3R5cGluZ3RleHQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy93b3JrL3RpbWVsaW5lZ3JpZC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9jaGV2cm9uRG93bi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMi5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvbG9nb0NvbW1pc3Npb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2FmZmluaXR5TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2JlbGF5VGhlQ3BwTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ib25vYm9QcmVzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9jc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzVHJpY2tzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ2l0TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9naXRodWJIb3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9nbWFpbC5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9nbWFpbEhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2hhc2hub2RlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9odG1sTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9odG1sTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2plc3RMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvanNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2pzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xlc3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xlc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGlua2VkaW4uc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGlua2VkaW5Ib3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9saW51eExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGludXhMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL215c3FsTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25vYmxlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ucG1Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25wbUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3B5dGhvbkxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvcmVhY3RMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2Fzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9zaXRlUG9pbnRMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3RzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy90c0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy91c0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdnNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3dhc2tvTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3lhcm5Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3lhcm5Mb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbmV3LXBob3RvL2FwaS5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9uZXctcGhvdG8vbmV4dC1qcy5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9uZXctcGhvdG8vcmVhY3QtbmF0aXZlLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL25ldy1waG90by9zYWRlZ2gtMS5qcGciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9uZXctcGhvdG8vc2FkZWdoLmpwZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9iYXJjZWxvbmFTYWdyYWRhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2Jvd2xpbmdQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvY2xpbWJpbmdUb3BQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvY29wMjRQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvZnJhbmNlTGFTYWxldHRlUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2dpZXdvbnRQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvaWNlbGFuZFdhdGVyZmFsbFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25BcnNlbmFsUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvbkNhbmFyeVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvblRvd2VyQnJpZGdlUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvblZpY3RvcmlhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL21hbmNoZXN0ZXJVbml0ZWRQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbWF6dXJ5RG93blBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9tY2xhcmVuUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL25vdHJlRGFtZVBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9wYXJpc0VpZmZlbFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9wbGF5aW5nSUVNUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3J5c2lhbmthUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3NraVN3aXNzUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3N1c2hpUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3N3aXNzTXVycmVuUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3N3aXNzUGl6R2xvcmlhUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3dhbGVzUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcHJvZmlsZVBpY3R1cmUuanBnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9wYWdlcy9hYm91dC9hYm91dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvYWJvdXQvcGhvdG9ncmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9mb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2hvbWUvbWFpbmhlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS90b29sc3RlY2gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL21lbnViYXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL3dvcmsvdGltZWxpbmVncmlkLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcInJlYWN0LXRvb2x0aXBcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9pZ25vcmVkfEU6XFx3ZWIgZGVzaWduZXJcXG5leHQganNcXG15X3Byb2plY3RzXFxQb3J0Zm9saW8tc2FkZWdoXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50IiwibGVuZ3RoIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJmaWx0ZXIiLCJzIiwia2luZCIsIlNldCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3JvdXRlciIsIl9yb3V0ZXIyIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJMaW5rIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIndpbmRvdyIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwiY3Jvc3NPcmlnaW4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImRlZmluZVByb3BlcnR5IiwiYXBwZW5kU2NyaXB0Iiwic2NyaXB0IiwicmVqZWN0IiwiYm9keSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcCIsIl9zZWxmJF9fTkVYVF9EQVRBX18kcDIiLCJfb3B0aW9ucyRzY3JvbGwiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiVkFib3V0IiwiY3NzVHJpY2tzTG9nbyIsImJlbGF5VGhlQ3BwTG9nbyIsImRyaWJiYmxlTG9nbyIsImhhc2hub2RlTG9nbyIsImJvbm9ib1ByZXNzTG9nbyIsInNpdGVQb2ludExvZ28iLCJmcmVlQ29kZUNhbXBMb2dvIiwibG9nb0NvbW1pc3Npb24iLCJzY2hlbWVDb21taXNzaW9uIiwicG9zdGVyQ29tbWlzc2lvbiIsImNvbWljQ29tbWlzc2lvbjEiLCJjb21pY0NvbW1pc3Npb24yIiwiVlBob3RvR3JpZCIsInVzZVR5cGVkVGV4dCIsImJhcmNlbG9uYVNhZ3JhZGFQaG90byIsImxvbmRvblRvd2VyQnJpZGdlUGhvdG8iLCJjbGltYmluZ1RvcFBob3RvIiwicGFyaXNFaWZmZWxQaG90byIsInN3aXNzTXVycmVuUGhvdG8iLCJub3RyZURhbWVQaG90byIsImZyYW5jZUxhU2FsdHRlUGhvdG8iLCJ3YWxlc1Bob3RvIiwibG9uZG9uQ2hlbHNlYSIsImxvbmRvbkFyc2VuYWxQaG90byIsIm1hbmNoZXN0ZXJVbml0ZWRQaG90byIsImJvd2xpbmdQaG90byIsImdpZXdvbnRQaG90byIsImljZWxhbmRXYXRlcmZhbGxQaG90byIsInJ5c2lhbmthUGhvdG8iLCJzdXNoaVBob3RvIiwibG9uZG9uVmljdG9yeVBob3RvIiwibWF6dXJ5RGF3blBob3RvIiwibG9uZG9uQ2FuYXJ5UGhvdG8iLCJtY2xhcmVuUGhvdG8iLCJza2lTd2lzc1Bob3RvIiwicGxheWluZ0lFTVBob3RvIiwiZ2V0RGF0ZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiVkZvb3RlciIsImdvVXBTcXVhcmUiLCJsaW5rZWRJbkxvZ28iLCJsaW5rZWRJbkxvZ29Ib3ZlciIsImdtYWlsTG9nbyIsImdtYWlsTG9nb0hvdmVyIiwiZ2l0SHViTG9nbyIsImdpdEh1YkxvZ29Ib3ZlciIsIlZNYWluSGVhZGVyIiwiVlRvb2xzVGVjaCIsImh0bWxMb2dvIiwiaHRtbExvZ29Ib3ZlciIsImNzc0xvZ28iLCJjc3NMb2dvSG92ZXIiLCJqc0xvZ28iLCJqc0xvZ29Ib3ZlciIsInJlYWN0TG9nbyIsInJlYWN0TG9nb0hvdmVyIiwidHNMb2dvIiwidHNMb2dvSG92ZXIiLCJzYXNzTG9nbyIsInNhc3NMb2dvSG92ZXIiLCJsZXNzTG9nbyIsImxlc3NMb2dvSG92ZXIiLCJucG1Mb2dvIiwibnBtTG9nb0hvdmVyIiwieWFybkxvZ28iLCJ5YXJuTG9nb0hvdmVyIiwiZ2l0TG9nbyIsImdpdExvZ29Ib3ZlciIsInZzTG9nbyIsInZzTG9nb0hvdmVyIiwid2luZG93c0xvZ28iLCJ3aW5kb3dzTG9nb0hvdmVyIiwibmV4dExvZ28iLCJyZWFjdE5hdGl2ZUxvZ28iLCJhcGlMb2dvIiwiVkljb24iLCJ0b29sdGlwSUQiLCJvbkhvdmVySWNvbiIsImRlZmF1bEljb24iLCJWTWVudUJhciIsImFjdGl2ZVRhYiIsImNvbG9yIiwic3BlZWQiLCJkZWxheVRpbWUiLCJ0ZXh0U3RhdGUiLCJzZXRUZXh0U3RhdGUiLCJSZWFjdCIsImNoYXJzIiwiaW50ZXJ2YWwiLCJ0aW1lciIsInByZXZUZXh0IiwibmV3VGV4dCIsImNvbmNhdCIsIlZUaW1lbGluZUdyaWQiLCJ0aW1lbGluZVBvaW50IiwidXNMb2dvIiwidGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmQiLCJ0aW1lbGluZUdyaWRJdGVtIiwid2Fza29Mb2dvIiwiYmFja2dyb3VuZENvbG9yIiwibm9ibGVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7OztBQ2hCQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIGh0bWxMb2dvIH0gZnJvbSAnLi9sb2dvcy9odG1sTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHRtbExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvaHRtbExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzTG9nbyB9IGZyb20gJy4vbG9nb3MvY3NzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9jc3NMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9zYXNzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Fzc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3Mvc2Fzc0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMganNMb2dvIH0gZnJvbSAnLi9sb2dvcy9qc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9qc0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVhY3RMb2dvIH0gZnJvbSAnLi9sb2dvcy9yZWFjdExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlYWN0TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9yZWFjdExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHNMb2dvIH0gZnJvbSAnLi9sb2dvcy90c0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy90c0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5ndWxhckxvZ28gfSBmcm9tICcuL2xvZ29zL2FuZ3VsYXJMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmd1bGFyTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXNzTG9nbyB9IGZyb20gJy4vbG9nb3MvbGVzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxlc3NMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2xlc3NMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdtYWlsTG9nbyB9IGZyb20gJy4vbG9nb3MvZ21haWwuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdtYWlsTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9nbWFpbEhvdmVyLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBucG1Mb2dvIH0gZnJvbSAnLi9sb2dvcy9ucG1Mb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBucG1Mb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL25wbUxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeWFybkxvZ28gfSBmcm9tICcuL2xvZ29zL3lhcm5Mb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB5YXJuTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy95YXJuTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRIdWJMb2dvIH0gZnJvbSAnLi9sb2dvcy9naXRodWIuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpdEh1YkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvZ2l0aHViSG92ZXIuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpdExvZ28gfSBmcm9tICcuL2xvZ29zL2dpdExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpdExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvZ2l0TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqZXN0TG9nbyB9IGZyb20gJy4vbG9nb3MvamVzdExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGplc3RMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2plc3RMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbmtlZEluTG9nbyB9IGZyb20gJy4vbG9nb3MvbGlua2VkaW4uc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbmtlZEluTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9saW5rZWRpbkhvdmVyLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBteXNxbExvZ28gfSBmcm9tICcuL2xvZ29zL215c3FsTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXlzcWxMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL215c3FsTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBweXRob25Mb2dvIH0gZnJvbSAnLi9sb2dvcy9weXRob25Mb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBweXRob25Mb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3B5dGhvbkxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdnNMb2dvIH0gZnJvbSAnLi9sb2dvcy92c0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy92c0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWZmaW5pdHlMb2dvIH0gZnJvbSAnLi9sb2dvcy9hZmZpbml0eUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFmZmluaXR5TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9hZmZpbml0eUxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF2aW5jaUxvZ28gfSBmcm9tICcuL2xvZ29zL2RhdmluY2lMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXZpbmNpTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9kYXZpbmNpTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aW5kb3dzTG9nbyB9IGZyb20gJy4vbG9nb3Mvd2luZG93c0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvd3NMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3dpbmRvd3NMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbnV4TG9nbyB9IGZyb20gJy4vbG9nb3MvbGludXhMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW51eExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbGludXhMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vYmxlTG9nbyB9IGZyb20gJy4vbG9nb3Mvbm9ibGVMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3YXNrb0xvZ28gfSBmcm9tICcuL2xvZ29zL3dhc2tvTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNMb2dvIH0gZnJvbSAnLi9sb2dvcy91c0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzc1RyaWNrc0xvZ28gfSBmcm9tICcuL2xvZ29zL2Nzc1RyaWNrc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJlbGF5VGhlQ3BwTG9nbyB9IGZyb20gJy4vbG9nb3MvYmVsYXlUaGVDcHBMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBib25vYm9QcmVzc0xvZ28gfSBmcm9tICcuL2xvZ29zL2Jvbm9ib1ByZXNzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZHJpYmJibGVMb2dvIH0gZnJvbSAnLi9sb2dvcy9kcmliYmJsZUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZyZWVDb2RlQ2FtcExvZ28gfSBmcm9tICcuL2xvZ29zL2ZyZWVDb2RlQ2FtcExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGhhc2hub2RlTG9nbyB9IGZyb20gJy4vbG9nb3MvaGFzaG5vZGVMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzaXRlUG9pbnRMb2dvIH0gZnJvbSAnLi9sb2dvcy9zaXRlUG9pbnRMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwcm9maWxlUGljdHVyZSB9IGZyb20gJy4vcHJvZmlsZVBpY3R1cmUuanBnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoZXZyb25Eb3duIH0gZnJvbSAnLi9jaGV2cm9uRG93bi5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcG9zdGVyQ29tbWlzc2lvbiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb2dvQ29tbWlzc2lvbiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL2xvZ29Db21taXNzaW9uLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21pY0NvbW1pc3Npb24xIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29taWNDb21taXNzaW9uMiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNjaGVtZUNvbW1pc3Npb24gfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBiYXJjZWxvbmFTYWdyYWRhUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9iYXJjZWxvbmFTYWdyYWRhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvd2xpbmdQaG90byB9IGZyb20gJy4vcGhvdG9zL2Jvd2xpbmdQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2xpbWJpbmdUb3BQaG90byB9IGZyb20gJy4vcGhvdG9zL2NsaW1iaW5nVG9wUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvcDI0UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9jb3AyNFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmcmFuY2VMYVNhbHR0ZVBob3RvIH0gZnJvbSAnLi9waG90b3MvZnJhbmNlTGFTYWxldHRlUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpZXdvbnRQaG90byB9IGZyb20gJy4vcGhvdG9zL2dpZXdvbnRQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaWNlbGFuZFdhdGVyZmFsbFBob3RvIH0gZnJvbSAnLi9waG90b3MvaWNlbGFuZFdhdGVyZmFsbFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25BcnNlbmFsUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25BcnNlbmFsUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvbkNoZWxzZWEgfSBmcm9tICcuL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvblRvd2VyQnJpZGdlUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25Ub3dlckJyaWRnZVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25WaWN0b3J5UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25WaWN0b3JpYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYW5jaGVzdGVyVW5pdGVkUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9tYW5jaGVzdGVyVW5pdGVkUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1henVyeURhd25QaG90byB9IGZyb20gJy4vcGhvdG9zL21henVyeURvd25QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWNsYXJlblBob3RvIH0gZnJvbSAnLi9waG90b3MvbWNsYXJlblBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub3RyZURhbWVQaG90byB9IGZyb20gJy4vcGhvdG9zL25vdHJlRGFtZVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXJpc0VpZmZlbFBob3RvIH0gZnJvbSAnLi9waG90b3MvcGFyaXNFaWZmZWxQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGxheWluZ0lFTVBob3RvIH0gZnJvbSAnLi9waG90b3MvcGxheWluZ0lFTVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByeXNpYW5rYVBob3RvIH0gZnJvbSAnLi9waG90b3MvcnlzaWFua2FQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2tpU3dpc3NQaG90byB9IGZyb20gJy4vcGhvdG9zL3NraVN3aXNzUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN1c2hpUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9zdXNoaVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzd2lzc011cnJlblBob3RvIH0gZnJvbSAnLi9waG90b3Mvc3dpc3NNdXJyZW5QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3dpc3NQaXpHbG9yaWFQaG90byB9IGZyb20gJy4vcGhvdG9zL3N3aXNzUGl6R2xvcmlhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdhbGVzUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy93YWxlc1Bob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25DYW5hcnlQaG90byB9IGZyb20gJy4vcGhvdG9zL2xvbmRvbkNhbmFyeVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYWRlZ2hMb2dvIH0gZnJvbSAnLi9uZXctcGhvdG8vc2FkZWdoLmpwZyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2FkZWdoTG9nb18yIH0gZnJvbSAnLi9uZXctcGhvdG8vc2FkZWdoLTEuanBnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBuZXh0TG9nbyB9IGZyb20gJy4vbmV3LXBob3RvL25leHQtanMucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWFjdE5hdGl2ZUxvZ28gfSBmcm9tICcuL25ldy1waG90by9yZWFjdC1uYXRpdmUucG5nJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhcGlMb2dvIH0gZnJvbSAnLi9uZXctcGhvdG8vYXBpLnBuZyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZigod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtzcmM6c3JjLGRlY29kaW5nOlwiYXN5bmNcIixzaXplczpzaXplcyxzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtpZihwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSl7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO319d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFkZSB9IGZyb20gJ3JlYWN0LWF3ZXNvbWUtcmV2ZWFsJ1xyXG5pbXBvcnQge1xyXG4gIFZNZW51QmFyLFxyXG4gIFZQaG90b0dyaWQsXHJcbiAgVkZvb3RlclxyXG59IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQge1xyXG4gIGJlbGF5VGhlQ3BwTG9nbyxcclxuICBib25vYm9QcmVzc0xvZ28sXHJcbiAgY29taWNDb21taXNzaW9uMSxcclxuICBjb21pY0NvbW1pc3Npb24yLFxyXG4gIGNzc1RyaWNrc0xvZ28sXHJcbiAgZHJpYmJibGVMb2dvLFxyXG4gIGZyZWVDb2RlQ2FtcExvZ28sXHJcbiAgaGFzaG5vZGVMb2dvLFxyXG4gIGxvZ29Db21taXNzaW9uLFxyXG4gIHBvc3RlckNvbW1pc3Npb24sXHJcbiAgc2NoZW1lQ29tbWlzc2lvbixcclxuICBzaXRlUG9pbnRMb2dvLFxyXG59IGZyb20gJy4uLy4uL2Fzc2V0cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Fib3V0Lm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVkFib3V0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0Q29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFib3V0IG1lPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiS2Fyb2xpbmEgSHVkemllYyBQb3J0Zm9saW8gUGFnZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJLYXJvbGluYSBIdWR6aWVjXCIvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJLYXJvbGluYSwgSHVkemllYywgUG9ydGZvbGlvLCBGcm9udGVuZFwiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljbz9cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxWTWVudUJhciBhY3RpdmVUYWI9XCJBYm91dFwiLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnl9PlxyXG4gICAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBMb25nIHN0b3J5IHNob3J0IGFib3V0IG1lXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICBJIGhhdmUgdHdvIGxlYWRpbmcgcGFzc2lvbnMgaW4gbXkgbGlmZTogb25lIGlzIHRvIGNyZWF0ZSxcclxuICAgICAgICAgICAgICBhbmQgdGhlIG90aGVyIG9uZSBpcyB0byBleHBsb3JlIHRoZSB3b3JsZC4gSSBsb3ZlIHRvIGNyZWF0ZVxyXG4gICAgICAgICAgICAgIHNvZnR3YXJlLCBlc3BlY2lhbGx5IHdlYiBhcHBsaWNhdGlvbnMuIEdyYXBoaWMgZGVzaWduLFxyXG4gICAgICAgICAgICAgIGRyYXdpbmcgYW5kIG1ha2luZyBhbmltYXRpb25zIGdpdmUgbWUgYSBsb3Qgb2YgZnVuIGFzIHdlbGwuXHJcbiAgICAgICAgICAgICAgSSB0cnkgdG8gbGVhZCBhbiBhY3RpdmUgbGlmZXN0eWxlLiBXaGVuZXZlciBJIGhhdmUgc29tZSBzcGFyZSB0aW1lLFxyXG4gICAgICAgICAgICAgIEkgdHJ5IHRvIGRlZGljYXRlIGl0IHRvIGxlYXJuaW5nIG5ldyBsYW5ndWFnZXMsIHNwZW5kaW5nIG15IHRpbWVcclxuICAgICAgICAgICAgICB3aXRoIGZyaWVuZHMgYW5kIGZhbWlseSwgYW5kIHRyYXZlbGluZy4gSSdtIGEgaHVnZSBzcG9ydHMgZmFuLFxyXG4gICAgICAgICAgICAgIGFzIHdlbGwsIGVzcGVjaWFsbHkgZm9vdGJhbGwuIEJlc2lkZXMgdGhhdCBJIGxvdmUgaGlraW5nIGFuZCByb2NrXHJcbiAgICAgICAgICAgICAgY2xpbWJpbmcuIEkgZmVlbCBleHRyZW1lbHkgZ29vZCBpbiB0aGUgbW91bnRhaW5zLiBJbiB3aW50ZXJcclxuICAgICAgICAgICAgICBJIHNraS4gVG8gcmVsYXggSSB1c3VhbGx5IHBsYXkgdmlkZW8gZ2FtZXMgb3Igd2F0Y2ggbW92aWVzL3R2IHNlcmllcy5cclxuICAgICAgICAgICAgICBJIGFsc28gcGF5IGhpZ2ggYXR0ZW50aW9uIHRvIG15IHNlbGYtZGV2ZWxvcG1lbnQgaW4gdGhlIElUIGZpZWxkLFxyXG4gICAgICAgICAgICAgIGluIG9yZGVyIHRvIGJlIHVwIHRvIGRhdGUgd2l0aCBjdXJyZW50IHRyZW5kcyBvbiB0aGUgbWFya2V0LlxyXG4gICAgICAgICAgICAgIEJlbmVhdGggeW91IGNhbiBmaW5kIGFsbCBvZiB0aGUgbmV3c2xldHRlcnMgSSBzdWJzY3JpYmUgY3VycmVudGx5LlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGYWRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob2JiaWVzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzbGV0dGVyc30+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgTmV3c2xldHRlcnMgSSBzdWJzY3JpYmUgdG86XHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJDU1MtVHJpY2tzIGxvZ29cIiBzcmM9e2Nzc1RyaWNrc0xvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYmVsYXljcHAuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkJlbGF5IHRoZSBDUFAgbG9nb1wiIHNyYz17YmVsYXlUaGVDcHBMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJEcmliYmJsZSBsb2dvXCIgc3JjPXtkcmliYmJsZUxvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaGFzaG5vZGUuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD0nSGFzaG5vZGUgbG9nbycgc3JjPXtoYXNobm9kZUxvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm9ub2JvcHJlc3MuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkJvbm9ib3ByZXNzIGxvZ29cIiBzcmM9e2Jvbm9ib1ByZXNzTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2l0ZXBvaW50LmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJTaXRlIFBvaW50IGxvZ29cIiBzcmM9e3NpdGVQb2ludExvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZyZWVjb2RlY2FtcC5vcmcvXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiRnJlZUNvZGVDYW1wIGxvZ29cIiBzcmM9e2ZyZWVDb2RlQ2FtcExvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1pc3Npb25zfT5cclxuICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICBHcmFwaGljIGNvbW1pc2lvbnNcclxuICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIEJlc2lkZXMgY29tcHV0ZXIgcHJvZ3JhbW1pbmcgSSBsb3ZlIHRvIGNyZWF0ZSBncmFwaGljcy5cclxuICAgICAgICAgICAgICAgIERyYXdpbmcgaGFzIGJlZW4gbXkgcGFzc2lvbiBzaW5jZSBJIGNhbiByZW1lbWJlci4gV2hlbiBJIHdhcyB5b3VuZ2VyLFxyXG4gICAgICAgICAgICAgICAgSSB1c2VkIHRvIGhhdmUgaHVuZHJlZHMgb2Ygbm90ZWJvb2tzLCBhbGwgb2YgdGhlbSBmaWxsZWQgd2l0aCBteSBza2V0Y2hlcy5cclxuICAgICAgICAgICAgICAgIExhdGVyIG9uIEkgbW92ZWQgbW9yZSBpbnRvIGRpZ2l0YWwgYXJ0IHdvcmsgYW5kIG5vdyBJIHRyZWF0IGl0IGFzIG15XHJcbiAgICAgICAgICAgICAgICBob2JieSwgdGFraW5nICBzbWFsbCBncmFwaGljYWwgcHJvamVjdCBmcm9tIHRpbWUgdG8gdGltZS5cclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Nyb2xsR2FsbGVyeX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpbnR9PlxyXG4gICAgICAgICAgICAgICAgICBTcm9sbCByaWdodCB0byBzZWUgbW9yZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ2FtZXJhIGxvZ28gY29tbWlzc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvQ29tbWlzc2lvbn0vPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkJyZWF0aGluZyBzY2hlbWUgY29tbWlzc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtzY2hlbWVDb21taXNzaW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiV29tYW4gcG9zdGVyIGNvbW1pc2lvblwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0ZXJDb21taXNzaW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ29taWMgY29tbWlzc2lvbiAxXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2NvbWljQ29tbWlzc2lvbjF9Lz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDb21pYyBjb21taXNzaW9uIDJcIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Y29taWNDb21taXNzaW9uMn0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8RmFkZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9HYWxsZXJ5fT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIFBob3RvIEdhbGxlcnlcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIEkgZG8gYmVsaWV2ZSB0aGF0IDxzPmFjdGlvbnM8L3M+IGltYWdlcyBzcGVhayBsb3VkZXIgdGhhbiB3b3Jkcy4gQnkgbG9va2luZyBhdCB0aGUgcGljdHVyZXMgYmVsb3csXHJcbiAgICAgICAgICAgICAgeW91IGNhbiBnZXQgYSBsaXR0bGUgZ3Jhc3Agb2Ygd2hhdCBwZXJzb24gSSBhbSBvdXRzaWRlIG9mIHdvcmsuXHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIEhvdmVyIG9uIHBob3RvIGluIG9yZGVyIHRvIGdldCBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxWUGhvdG9HcmlkLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRmFkZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxWRm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVR5cGVkVGV4dCB9IGZyb20gJy4uJ1xyXG5pbXBvcnQge1xyXG4gIGJhcmNlbG9uYVNhZ3JhZGFQaG90byxcclxuICBib3dsaW5nUGhvdG8sXHJcbiAgY2xpbWJpbmdUb3BQaG90byxcclxuICBmcmFuY2VMYVNhbHR0ZVBob3RvLFxyXG4gIGdpZXdvbnRQaG90byxcclxuICBpY2VsYW5kV2F0ZXJmYWxsUGhvdG8sXHJcbiAgbG9uZG9uQXJzZW5hbFBob3RvLFxyXG4gIGxvbmRvbkNhbmFyeVBob3RvLFxyXG4gIGxvbmRvbkNoZWxzZWEsXHJcbiAgbG9uZG9uVG93ZXJCcmlkZ2VQaG90byxcclxuICBsb25kb25WaWN0b3J5UGhvdG8sXHJcbiAgbWFuY2hlc3RlclVuaXRlZFBob3RvLFxyXG4gIG1henVyeURhd25QaG90byxcclxuICBtY2xhcmVuUGhvdG8sXHJcbiAgbm90cmVEYW1lUGhvdG8sXHJcbiAgcGFyaXNFaWZmZWxQaG90byxcclxuICBwbGF5aW5nSUVNUGhvdG8sXHJcbiAgcnlzaWFua2FQaG90byxcclxuICBza2lTd2lzc1Bob3RvLFxyXG4gIHN1c2hpUGhvdG8sXHJcbiAgc3dpc3NNdXJyZW5QaG90byxcclxuICB3YWxlc1Bob3RvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGhvdG9ncmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZQaG90b0dyaWQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9HcmlkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJjYX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogU2FncmFkYSBGYW1pbGlhLCBCYXJjZWxvbmEnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBTYWdyYWRhIEZhbWlsaWFcIiBzcmM9e2JhcmNlbG9uYVNhZ3JhZGFQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJpZGdlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBUb3dlciBCcmlkZ2UsIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOS4yMDE5JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIFRvd2VyIEJyaWRnZVwiIHNyYz17bG9uZG9uVG93ZXJCcmlkZ2VQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpbWJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IENvbWljIENvbiwgV2Fyc2F3JywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDEwLjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgY2xpbWJpbmcgS2Fyb2xpbmFcIiBzcmM9e2NsaW1iaW5nVG9wUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVpZmZlbH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogRWlmZmVsIFRvd2VyLCBQYXJpcycsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOC4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEVpZmZlbCBUb3dlclwiIHNyYz17cGFyaXNFaWZmZWxQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXVycmVufT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBNw7xycmVuLCBTd2l0emVybGFuZCcsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMi4yMDIxJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIE11cnJlblwiIHNyYz17c3dpc3NNdXJyZW5QaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2h1cmNofT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBOb3RyZS1EYW1lLCBQYXJpcycsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOC4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIE5vdHJlLURhbWVcIiBzcmM9e25vdHJlRGFtZVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbHBzfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBMYSBTYWxldHRlLUZhbGxhdmF1eCwgRnJhbmNlJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgQWxwcyBpbiBMYSBTYWxldHRlLUZhbGxhdmF1eFwiIHNyYz17ZnJhbmNlTGFTYWx0dGVQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FsZXN9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IENhcmRpZmYsIFdhbGVzJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAyLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgQ2FyZGlmZlwiIHNyYz17d2FsZXNQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlbHNlYX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogU3RhbWZvcmQgQnJpZGdlLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDEuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBTdGFtZm9yZCBCcmlkZ2VcIiBzcmM9e2xvbmRvbkNoZWxzZWF9IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFyc2VuYWx9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEVtaXJhdGVzIFN0YWRpdW0sIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMS4yMDIwJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEVtaXJhdGVzIFN0YWRpdW1cIiBzcmM9e2xvbmRvbkFyc2VuYWxQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFuY2hlc3Rlcn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogT2xkIFRyYWZmb3JkLCBNYW5jaGVzdGVyJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAxLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgT2xkIFRyYWZmb3JkXCIgc3JjPXttYW5jaGVzdGVyVW5pdGVkUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvd2xpbmd9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEJvd2xpbmcgQ2x1Yiwgxbt5d2llYycsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNy4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEthcm9saW5hIGJvd2xpbmdcIiBzcmM9e2Jvd2xpbmdQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3Jvc3N9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEdpZXdvbnQgMTg5NSBtIE1TTCwgWmFrb3BhbmUnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDQuMDIxJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIGNsaW1iaW5nIG9uIEdpZXdvbnQgaW4gd2ludGVyXCIgc3JjPXtnaWV3b250UGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhdGVyZmFsbH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogU2VsaWphbGFuZHNmb3NzLCBJY2VsYW5kJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTcnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2Ygd2F0ZXJmYWxsIGluIFNlbGlqYWxhbmRzZm9zc1wiIHNyYz17aWNlbGFuZFdhdGVyZmFsbFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib290c30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogUnlzaWFua2EgMTI5MCBtIE1TTCwgQmVza2lkIMW7eXdpZWNraScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNi4yMDE5JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIG1vdW50YWlucyBzZWVuIGZyb20gUnlzaWFua2FcIiBzcmM9e3J5c2lhbmthUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1c2hpfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBNb21vIENhZmUsIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAxMC4yMDE5JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIHN1c2hpXCIgc3JjPXtzdXNoaVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb251bWVudH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogVmljdG9yaWEgTWVtb3JpYWwsIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNy4yMDE5JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIFZpY3RvcmlhIE1lbW9yaWFsXCIgc3JjPXtsb25kb25WaWN0b3J5UGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxha2V9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFRhanR5IExha2UsIFdpbGthc3knLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDUuMjAyMScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBsYWtlXCIgc3JjPXttYXp1cnlEYXduUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNreXNjcmFwcGVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBDYW5hcnkgV2hhcmYsIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMS4yMDIwJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIENhbmFyeSBXaGFyZlwiIHNyYz17bG9uZG9uQ2FuYXJ5UGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogTWNMYXJlbiwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA2LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgRm9ybXVsYSBPbmUgY2FyXCIgc3JjPXttY2xhcmVuUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogRWlnZXIsIFN3aXR6ZXJsYW5kJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAyLjIwMjEnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgS2Fyb2xpbmEgc2tpaW5nXCIgc3JjPXtza2lTd2lzc1Bob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBJbnRlbCBFeHRyZW1lIE1hc3RlcnMsIEthdG93aWNlJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAzLjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgS2Fyb2xpbmEgcGxhaW5nIGdhbWVcIiBzcmM9e3BsYXlpbmdJRU1QaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbi8vVE8tRE8gcmVmYWN0b3Jpbmcgb2YgVlBob3RvR3JpZCIsImV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKCkge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgeWVhciA9IFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpXHJcbiAgbGV0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpXHJcbiAgbGV0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSlcclxuXHJcbiAgaWYoZGF5Lmxlbmd0aCA9PT0gMSlcclxuICAgIGRheSA9ICcwJysgZGF5XHJcblxyXG4gIGlmKG1vbnRoLmxlbmd0aCA9PT0gMSlcclxuICAgIG1vbnRoID0gJzAnKyBtb250aFxyXG5cclxuICByZXR1cm4gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YFxyXG59IiwiaW1wb3J0IHsgVkljb24gfSBmcm9tICcuL2ljb24nXHJcbmltcG9ydCB7XHJcbiAgZ21haWxMb2dvLFxyXG4gIGdtYWlsTG9nb0hvdmVyLFxyXG4gIGxpbmtlZEluTG9nbyxcclxuICBsaW5rZWRJbkxvZ29Ib3ZlcixcclxuICBnaXRIdWJMb2dvLFxyXG4gIGdpdEh1YkxvZ29Ib3ZlclxyXG59IGZyb20gJy4uL2Fzc2V0cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ29VcFNxdWFyZX0vPlxyXG4gICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuY29weXJpZ2h0c30+XHJcbiAgICAgICAgwqkyMDIyXHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICBCdWlsZCB3aXRoIDxzcGFuPk5leHQuanMvVHlwZVNyaXB0PC9zcGFuPlxyXG4gICAgICA8L2g0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2xpbmtlZEluTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtsaW5rZWRJbkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2FkZWdoLWFrYmFyaS03ODgyMDcxOTcvXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJMaW5rZWRJblwiLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dtYWlsTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtnbWFpbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhyZWY9XCJtYWlsdG86YWtiYXJpc2FkZWdoMzgyQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiR21haWxcIi8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtnaXRIdWJMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2dpdEh1YkxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2FkZWdoMTM3OVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiR2l0SHViXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufSIsImV4cG9ydCB7IFZNYWluSGVhZGVyIH0gZnJvbSAnLi9tYWluaGVhZGVyJ1xyXG5leHBvcnQgeyBWVG9vbHNUZWNoIH0gZnJvbSAnLi90b29sc3RlY2gnIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbmhlYWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlVHlwZWRUZXh0IH0gZnJvbSAnLi4vdHlwaW5ndGV4dCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWTWFpbkhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dEluZm99PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICB7dXNlVHlwZWRUZXh0KFwiSGVsbG8gZXZlcnlvbmUhXCIsIDUwKX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt1c2VUeXBlZFRleHQoXCJJJ20gU2FkZWdoIEFrYmFyaS5cIiwgNTAsIDIwMCl9XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxoMj5cclxuICAgICAgICB7dXNlVHlwZWRUZXh0KFwiV2VsY29tZSBvbiBteSBwb3J0Zm9saW8gcGFnZSEgSSdtIGEgQ3JlYXRpdmUgSnVuaW9yIEZyb250LWVuZCBEZXZlbG9wZXIgd2l0aCAyIHllYXIgb2YgZXhwZXJpZW5jZSBsZXZlcmFnaW5nIEphdmFTY3JpcHQgdG8gYnVpbGQgcmVzcG9uc2l2ZSB3ZWJzaXRlcywgYW5kIGludGVyYWN0aXZlIGZlYXR1cmVzIC4gSW50ZXJlc3RlZCBpbiBKcyBGcmVhbXdvcmtzIGxpa2UgUmVhY3RKcywgbmV4dGpzIGFuZCBsZWFybmluZyBtb3JlIGFuZCBtb3JlIC5cIiwgMzAsIDM1MCl9XHJcbiAgICAgIDwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFZJY29uIH0gZnJvbSAnLi4vaWNvbidcclxuaW1wb3J0IHtcclxuICBhZmZpbml0eUxvZ28sXHJcbiAgYWZmaW5pdHlMb2dvSG92ZXIsXHJcbiAgYW5ndWxhckxvZ28sXHJcbiAgYW5ndWxhckxvZ29Ib3ZlcixcclxuICBjc3NMb2dvLFxyXG4gIGNzc0xvZ29Ib3ZlcixcclxuICBkYXZpbmNpTG9nbyxcclxuICBkYXZpbmNpTG9nb0hvdmVyLFxyXG4gIGdpdExvZ28sXHJcbiAgZ2l0TG9nb0hvdmVyLFxyXG4gIGh0bWxMb2dvLFxyXG4gIGh0bWxMb2dvSG92ZXIsXHJcbiAgamVzdExvZ28sXHJcbiAgamVzdExvZ29Ib3ZlcixcclxuICBqc0xvZ28sXHJcbiAganNMb2dvSG92ZXIsXHJcbiAgbGVzc0xvZ28sXHJcbiAgbGVzc0xvZ29Ib3ZlcixcclxuICBsaW51eExvZ28sXHJcbiAgbGludXhMb2dvSG92ZXIsXHJcbiAgbXlzcWxMb2dvLFxyXG4gIG15c3FsTG9nb0hvdmVyLFxyXG4gIG5wbUxvZ28sXHJcbiAgbnBtTG9nb0hvdmVyLFxyXG4gIHB5dGhvbkxvZ28sXHJcbiAgcHl0aG9uTG9nb0hvdmVyLFxyXG4gIHJlYWN0TG9nbyxcclxuICByZWFjdExvZ29Ib3ZlcixcclxuICBzYXNzTG9nbyxcclxuICBzYXNzTG9nb0hvdmVyLFxyXG4gIHRzTG9nbyxcclxuICB0c0xvZ29Ib3ZlcixcclxuICB2c0xvZ28sXHJcbiAgdnNMb2dvSG92ZXIsXHJcbiAgd2luZG93c0xvZ28sXHJcbiAgd2luZG93c0xvZ29Ib3ZlcixcclxuICB5YXJuTG9nbyxcclxuICB5YXJuTG9nb0hvdmVyLFxyXG4gIG5leHRMb2dvLFxyXG4gIHJlYWN0TmF0aXZlTG9nbyxcclxuICBhcGlMb2dvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdG9vbHN0ZWNoLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZUb29sc1RlY2goKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2hub2xvZ2llc0ljb25zUm93fT5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2h0bWxMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2h0bWxMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI0NnB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNDZweFwiXHJcbiAgICAgICAgICBuYW1lPVwiSFRNTFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJodG1sLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17Y3NzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtjc3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiQ1NTXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImNzcy10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2pzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtqc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjU1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJKYXZhU2NyaXB0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImpzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17cmVhY3RMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3JlYWN0TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjU1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlJlYWN0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInJlYWN0LXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17dHNMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3RzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlR5cGVTY3JpcHRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwidHMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtzYXNzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtzYXNzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjYwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlNhc3NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwic2Fzcy10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2xlc3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2xlc3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTGVzc1wiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJsZXNzLXRvb2x0aXBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc1Jvd30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtucG1Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e25wbUxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJOb2RlIFBhY2thZ2UgTWFuYWdlclwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJucG0tdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXt5YXJuTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt5YXJuTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cInlhcm5cIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwieWFybi10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dpdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Z2l0TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkdpdFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJnaXQtdG9vbHRpcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2hub2xvZ2llc0ljb25zUm93fT5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3ZzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt2c0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJWaXN1YWwgU3R1ZGlvIENvZGVcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwidnMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXt3aW5kb3dzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt3aW5kb3dzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIldpbmRvd3MgMTBcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwid2luZG93cy10b29sdGlwXCIgLz5cclxuICAgICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e25leHRMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e25leHRMb2dvfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIm5leHQganNcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibmV4dGpzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3JlYWN0TmF0aXZlTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtyZWFjdE5hdGl2ZUxvZ299XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwicmVhY3QgbmF0aXZlXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInJlYWN0bmF0aXZlLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17YXBpTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXthcGlMb2dvfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cInJlc3QgYXBpXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cInJlc3RhcGktdG9vbHRpcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnXHJcblxyXG50eXBlIEljb25Qcm9wcyA9IHtcclxuICBkZWZhdWxJY29uOiBTdGF0aWNJbWFnZURhdGFcclxuICBvbkhvdmVySWNvbjogU3RhdGljSW1hZ2VEYXRhXHJcbiAgaHJlZj86IHN0cmluZ1xyXG4gIGhlaWdodDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgdG9vbHRpcElEPzogc3RyaW5nXHJcbiAgd2lkdGg6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVkljb24ocHJvcHM6IEljb25Qcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgZGF0YS10aXA9e3Byb3BzLnRvb2x0aXBJRCA/IHRydWUgOiBmYWxzZX0gZGF0YS1mb3I9e3Byb3BzLnRvb2x0aXBJRH0gaHJlZj17cHJvcHMuaHJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6IHByb3BzLmhlaWdodCwgd2lkdGg6IHByb3BzLndpZHRofX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkFjdGl2ZX0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBhbHQ9e2BPbiBob3ZlciAke3Byb3BzLm5hbWV9IGljb24uYH1cclxuICAgICAgICAgIHNyYz17cHJvcHMub25Ib3Zlckljb259XHJcbiAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnRvb2x0aXBJRCAmJlxyXG4gICAgICAgIDxSZWFjdFRvb2x0aXAgaWQ9e3Byb3BzLnRvb2x0aXBJRH0gdHlwZT1cImxpZ2h0XCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L1JlYWN0VG9vbHRpcD5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtgRGVmYXVsdCAke3Byb3BzLm5hbWV9IGljb24uYH1cclxuICAgICAgICAgIHNyYz17cHJvcHMuZGVmYXVsSWNvbn1cclxuICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gIClcclxufSIsImV4cG9ydCAqIGZyb20gJy4vZGF0ZSdcclxuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInXHJcbmV4cG9ydCAqIGZyb20gJy4vaWNvbidcclxuZXhwb3J0ICogZnJvbSAnLi9tZW51YmFyJ1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3RleHQnXHJcbmV4cG9ydCAqIGZyb20gJy4vYWJvdXQnXHJcbmV4cG9ydCAqIGZyb20gJy4vaG9tZSdcclxuZXhwb3J0ICogZnJvbSAnLi93b3JrJyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lbnViYXIubW9kdWxlLnNjc3MnXHJcblxyXG50eXBlIE1lbnVCYXJQcm9wcyA9IHtcclxuICBhY3RpdmVUYWI6IFwiSG9tZVwiIHwgXCJXb3JrXCIgfCBcIkFib3V0XCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZNZW51QmFyKHByb3BzOiBNZW51QmFyUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QmFyfT5cclxuICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNxdWFyZUluaXRpYWxzfT5cclxuICAgICAgICAgICAgU0FcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICBTYWRlZ2ggQWtiYXJpXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3Byb3BzLmFjdGl2ZVRhYiA9PT0gXCJIb21lXCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIDxMaW5rIGhyZWY9e2Avd29ya2B9PiAqL31cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50YWJ9PlxyXG4gICAgICAgICAgPGgzIHN0eWxlPXtwcm9wcy5hY3RpdmVUYWIgPT09IFwiV29ya1wiID8ge2NvbG9yOiBcIiNFNzYxNjFcIn0gOiB7Y29sb3I6IFwiI0Q1RDVENVwifX0+XHJcbiAgICAgICAgICAgIFdvcmtcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgey8qIDxMaW5rIGhyZWY9e2AvYWJvdXRgfT4gKi99XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkFib3V0XCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgIDwvbmF2PlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVR5cGVkVGV4dCh0ZXh0OiBzdHJpbmcsIHNwZWVkOiBudW1iZXIsIGRlbGF5VGltZT86IG51bWJlcikge1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IGNoYXJzID0gdGV4dC5zcGxpdChcIlwiKVxyXG4gIGxldCBpbnRlcnZhbCA9IHNwZWVkXHJcblxyXG4gIGlmKHRleHRTdGF0ZS5sZW5ndGggPT09IDAgJiYgZGVsYXlUaW1lKVxyXG4gICAgaW50ZXJ2YWwgPSBzcGVlZCArIGRlbGF5VGltZVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0VGV4dFN0YXRlKChwcmV2VGV4dCkgPT4ge1xyXG4gICAgICAgIGlmIChwcmV2VGV4dC5sZW5ndGggIT09IGNoYXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgY29uc3QgbmV3VGV4dCA9IHByZXZUZXh0LmNvbmNhdChjaGFyc1twcmV2VGV4dC5sZW5ndGhdKVxyXG4gICAgICAgICAgcmV0dXJuIG5ld1RleHRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXZUZXh0XHJcbiAgICAgIH0pXHJcbiAgICB9LCBpbnRlcnZhbClcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHRleHRTdGF0ZVxyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7XHJcbiAgbm9ibGVMb2dvLFxyXG4gIHVzTG9nbyxcclxuICB3YXNrb0xvZ29cclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi9kYXRlJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdGltZWxpbmVncmlkLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZUaW1lbGluZUdyaWQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtV2lkZX0+XHJcbiAgICAgICAgPGgxPjIwMTY8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVQb2ludH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQ2FyZH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmhvdmVyVGlwfT5cclxuICAgICAgICAgIEhvdmVyIHRvIHpvb20uXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlMb2dvfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIlVuaXZlcnNpdHkgb2YgU2lsZXNpYSBsb2dvLlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3VzTG9nb31cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUluZm99PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55VGl0bGV9PlVuaXdlcnN5dGV0IMWabMSFc2tpPC9oMT5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnREZXRhaWxzfT5LYXRvd2ljZTwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+MTAuMjAxNSAtIDAzLjIwMTk8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnREZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIE1vZHVsZXMgaW5jbHVkZWQ6PGJyLz5cclxuICAgICAgICAgICAgMXN0IFllYXI6IE1hdGhlbWF0aWNhbCBBbmFseXNpcywgQmFzaWMgQ291cnNlIG9mIEMrKyBQcm9ncmFtbWluZyBMYW5ndWFnZS48YnIvPlxyXG4gICAgICAgICAgICAybmQgWWVhcjogT3BlcmF0aW5nIFN5c3RlbXMsIENvbXB1dGVyIE5ldHdvcmtzLjxici8+XHJcbiAgICAgICAgICAgIDNyZCBZZWFyOiBBZHZhbmNlZCBDb3Vyc2Ugb2YgQysrIFByb2dyYW1taW5nIExhbmd1YWdlLCBVc2luZ1xyXG4gICAgICAgICAgICBDIyB0byBEZXNpZ24gR3JhcGhpYyBBcHBsaWNhdGlvbnMsIFRoZSBCYXNpY3Mgb2YgQnVpbGRpbmcgb2YgTmV1cmFsIE5ldHdvcmsuPGJyLz5cclxuICAgICAgICAgICAgNHRoIFllYXI6IENvbXB1dGVyIFNpbXVsYXRpb24gTWV0aG9kcywgT3JhY2xlIERhdGFiYXNlcy48YnIvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZH0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxoMT4wMy4yMDE5IC0gMDMuMjAyMDwvaDE+XHJcbiAgICAgICAgPGgyPldvcmtpbmcgJiBsZWFybmluZyBXZWIgRGV2ZWxvcG1lbnQgaW4gTG9uZG9uPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmR9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1DYXJkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlMb2dvfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIldhc2tvIGNvbXBhbnkgbG9nby5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt3YXNrb0xvZ299XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEzfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezU1fS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlJbmZvfT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueVRpdGxlfT5XYXNrbzwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+R2xpd2ljZTwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+MDguMjAyMCAtIDEwLjIwMjA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnREZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIEJ1aWxkaW5nIG9uIG15IG93biBhIHJlc3BvbnNpdmUgd2ViIGFwcGxpY2F0aW9uLFxyXG4gICAgICAgICAgICB3aGljaCBoYWQgYSBjYXRhbG9ndWUgb2YgYWxsIGNvbXBhbnkncyBzZXJ2ZXJzLCBkaXNwbGF5ZWQgaW4gdGhlXHJcbiAgICAgICAgICAgIHRyZWUgc3RydWN0dXJlLiBTZXJ2ZXIncyBkYXRhIHdhcyB0YWtlbiBhbmQgcGFyc2VkIGZyb20gWE1MIGZpbGUgdG8gSlNPTi5cclxuICAgICAgICAgICAgQW55b25lIGxvZ2dlZCBjb3VsZCBicm93c2UgdGhyb3VnaCBsaXN0cyBvZiBzZXJ2ZXJzLlxyXG4gICAgICAgICAgICBTZWFyY2ggYW5kIHNvcnQgYnkgbmFtZSBmdW5jdGlvbiB3ZXJlIGFwcGxpZWQuXHJcbiAgICAgICAgICAgIEFwcCBoYWQgc3lzdGVtIG9mIGFjY291bnRzIGFzIHdlbGwuIEFkbWlucywgdGVjaG5pY2FsIGFuZCB1c2VyIG9uZXMuXHJcbiAgICAgICAgICAgIEFkbWlucyBjb3VsZCBtYW5hZ2UgYWNjb3VudHMgYnkgZWRpdGluZyB0aGVtLCBkZWxldGluZyBhbmQgYXV0aG9yaXplXHJcbiAgICAgICAgICAgIChldmVyeSBuZXcgdXNlciBoYWQgdG8gYmUgYXV0aG9yaXplZCBieSBhZG1pbikuIEFkbWlucyBjb3VsZCBhbHNvXHJcbiAgICAgICAgICAgIHNlZSB3aGF0IHVzZXIgaXMgbG9nZ2VkIGF0IHRoZSBtb21lbnQuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgTWFpbiByZXNwb25zaWJpbGl0aWVzOjxici8+XHJcbiAgICAgICAgICAgIC0gZGVzaWduaW5nIGJvdGggZnJvbnRlbmQgYW5kIGJhY2tlbmQgc2lkZSBvZiB0aGUgYXBwLDxici8+XHJcbiAgICAgICAgICAgIC0gY3JlYXRpbmcgYW4gYXN5bmNocm9ub3VzIGNvbW11bmljYXRpb24gYmV0d2VlbiBjbGllbnQgYW5kIHNlcnZlciB2aWEgPGI+UkVTVCBBUEk8L2I+LDxici8+XHJcbiAgICAgICAgICAgIC0gc2V0dGluZyB1cCBzZXJ2ZXIgd2l0aCBkYXRhYmFzZS48YnIvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBMYW5ndWFnZXM6IEphdmFTY3JpcHQsIDxiPlJlYWN0PC9iPiwgPGI+UEhQPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBEYXRhYmFzZTogPGI+TXlTUUw8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFN0eWxpbmc6IEFudCBEZXNpZ24gVUksIENTUy48YnIvPlxyXG4gICAgICAgICAgICBWZXJzaW9uIENvbnRyb2wgU3lzdGVtOiA8Yj5HaXRIdWIuPC9iPjxici8+XHJcbiAgICAgICAgICAgIElzc3VlIHRyYW5jaW5nOiBUcmVsbG8uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUNhcmR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudEhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUxvZ299IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiMwRTIyNDVcIn19PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiTm9ibGUgU3lzdGVtcyBjb21wYW55IGxvZ28uXCJcclxuICAgICAgICAgICAgICAgIHNyYz17bm9ibGVMb2dvfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55SW5mb30+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlUaXRsZX0+Tm9ibGUgU3lzdGVtczwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+S3Jha8OzdzwvaDI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+MTAuMjAyMCAtIDA5LjIwMjA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnREZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIEJ1aWxkaW5nIGZyb20gc2NyYXRjaCBhIGNvbXBsZXRlIFdlYlJUQyBQaG9uZSB3ZWIgYXBwbGljYXRpb24sIGJhc2VkIG9uIFNJUC5qcyBsaWJyYXJ5LiBNYWpvciBmdW5jdGlvbmFsaXRpZXM6PGJyLz5cclxuICAgICAgICAgICAgLSBtYWtpbmcgbmV3LCBhbnN3ZXJpbmcsIGFuZCBob2xkaW5nIGNhbGxzIChjb25mZXJlbmNlcyBhcyB3ZWxsKSw8YnIvPlxyXG4gICAgICAgICAgICAtIGNvbnRhY3RzIGxpc3Qgd2l0aCBmdW5jdGlvbmFsaXR5IG9mIGFkZGluZywgZGVsZXRpbmcsIGFuZCBlZGl0aW5nIGNvbnRhY3RzLiBTZWFyY2ggYW5kIHNvcnQgb3B0aW9ucyBhcHBsaWVkIGFzIHdlbGwsPGJyLz5cclxuICAgICAgICAgICAgLSBoaXN0b3J5IG9mIGNhbGxzIHdpdGggc3VtbWFyaXplZCBkYXRhLDxici8+XHJcbiAgICAgICAgICAgIC0gdm9pY2VtYWlsIGFuZCBEVE1GIHNlbmRpbmcsPGJyLz5cclxuICAgICAgICAgICAgLSBhY2NvdW50IGFuZCBwaG9uZSBpbnB1dC9vdXRwdXQgYXVkaW8gc2V0dGluZ3MuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgTXkgbWFpbiByZXNwb25zaWJpbGl0aWVzIG9uIHRoZSBmcm9udC1lbmQgc2lkZSBvZiB0aGUgcHJvamVjdDo8YnIvPlxyXG4gICAgICAgICAgICAtd29ya2luZyBjb2xsYWJvcmF0aXZlbHkgaW4gdGVhbSBlbnZpcm9ubWVudCwgcmVzb2x2aW5nIGNvbmZsaWN0cyw8YnIvPlxyXG4gICAgICAgICAgICAtd3JpdGluZyBhIGNsZWFuIGFuZCBoaWdoLXF1YWxpdHkgY29kZWJhc2UsPGJyLz5cclxuICAgICAgICAgICAgLXJlZmFjdG9yaW5nIG9mIGNvZGViYXNlLDxici8+XHJcbiAgICAgICAgICAgIC13cml0aW5nIHRoZSBkb2N1bWVudGF0aW9uLDxici8+XHJcbiAgICAgICAgICAgIC1pbXBsZW1lbnRhdGlvbiBvZiB0aGUgZnVuY3Rpb25hbGl0aWVzIGZyb20gdGhlIGRvY3VtZW50YXRpb24sIGdpdmVuIHByZXZpb3VzbHkgYnkgUE0sPGJyLz5cclxuICAgICAgICAgICAgLWNyZWF0aW5nIHJlc3BvbnNpdmUsIGFjY2Vzc2libGUgYW5kIGVmZmljaWVudCB3ZWIgdmlld3MsIGJhc2VkIG9uIHByZXZpb3VzbHkgZ2l2ZW4gbW9ja3Vwcyw8YnIvPlxyXG4gICAgICAgICAgICAtcmV2aWV3aW5nIHB1bGwgcmVxdWVzdHMgb2YgbXkgbGVzcyBleHBlcmllbmNlZCBwZWVycywgYW5kIGhlbHBpbmcgdGhlbSB3aXRoIHN0eWxpbmcvY3JlYXRpbmcgY29tcG9uZW50cyw8YnIvPlxyXG4gICAgICAgICAgICAtd3JpdGluZyBlZmZpY2llbnQgdW5pdCB0ZXN0cy48YnIvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBBY2hpZXZlbWVudHMgSSBhbSBtb3N0IHByb3VkIG9mOjxici8+XHJcbiAgICAgICAgICAgIC1idWlsZGluZyBhICdsaWdodCcgdmVyc2lvbiBvZiBtYWluIGFwcGxpY2F0aW9uIHRoYXQgY291bGQgYmUgaW5zZXJ0ZWQgaW50byBhbiBpZnJhbWUgYW5kIGNyZWF0aW5nIGFuIEFQSSB2aWEgdGhvc2UgdHdvIGVsZW1lbnRzIGNvdWxkIGNvbW11bmljYXRlLDxici8+XHJcbiAgICAgICAgICAgIC1oZWxwaW5nIG15IHBlZXIgd2l0aCBmaXhpbmcgdXAgY29tbWl0IGhpc3Rvcnkgb24gbWFpbiBicmFuY2ggaW4gb3V0IHByb2plY3QsIGFmdGVyIGhpcyBtaXN0YWtlbiBtZXJnaW5nLDxici8+XHJcbiAgICAgICAgICAgIC1jcmVhdGluZyBkb2N1bWVudGF0aW9uIHdpdGggY29kZSBzdGFuZGFyZHMgb2YgY29kZWJhc2Ugb2Ygb3VyIHByb2plY3QsPGJyLz5cclxuICAgICAgICAgICAgLWltcGxlbWVudGluZyBDU1MgbW9kdWxlcyBpbnRvIG91ciBtYWluIHByb2plY3QsIHdoaWNoIGltcHJvdmVkIHRlYW0gd29ya2Zsb3cgbm90aWNlYWJseSw8YnIvPlxyXG4gICAgICAgICAgICAtY29uc3RydWN0aW5nIGNvbXBsZXRlIHRyYW5zbGF0aW9uIHN5c3RlbSB3aGljaCBsZXQgdGhlIHVzZXIgdG8gY2hhbmdlIGxhbmd1YWdlIG9mIGFwcGxpY2F0aW9uXHJcbiAgICAgICAgICAgIChpZiBub3QgY2hvc2VuLCBsYW5ndWFnZSB3YXMgZGV0ZWN0ZWQgYXV0b21hdGljYWxseSkuXHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIEFnaWxlIG1hbmFnZW1lbnQ6IDxiPlNjcnVtLCBBZ2lsZTwvYj4uPGJyLz5cclxuICAgICAgICAgICAgVmVyc2lvbiBjb250cm9sIHN5c3RlbTogPGI+QXp1cmUgRGV2T3BzLCBCaXRidWNrZXQ8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIElzc3VlIHRyYWNraW5nIHRvb2w6IDxiPkppcmEsIFRyZWxsbG88L2I+Ljxici8+XHJcbiAgICAgICAgICAgIEtub3dsZWRnZSByZXBvc2l0b3J5OiA8Yj5Db25mbHVlbmNlPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBTdHlsaW5nOiA8Yj5TQ1NTLCBMRVNTLCBTZW1hbnRpYyBVSTwvYj4uPGJyLz5cclxuICAgICAgICAgICAgVGVzdGluZzogPGI+UmVhY3QgVGVzdGluZyBMaWJyYXJ5LCBKRVNUPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBDb21tdW5pY2F0aW9uIHRvb2w6IDxiPk1pY3Jvc29mdCBUZWFtcywgWm9vbTwvYj4uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtV2lkZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZVBvaW50fS8+XHJcbiAgICAgICAgPGgxPntnZXREYXRlKCl9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9jaGV2cm9uRG93bi5kZGFkZTJmMWRlNjNiYjZiMmRlNTIxOTAxYWUzMThmYy5zdmdcIixcImhlaWdodFwiOjE0NDAsXCJ3aWR0aFwiOjI1NjB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24xLmMxMmFmMjYwYjQ4NjRmOWI4YmI4ZDhhOTI5YmUyZWMyLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2ODgsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXBrbEVRVlI0Mm1QNEJ3WC9JZUFmR0VNQlNKZ0JLdm52eGQyci95OGUyUGp2d05ZTi82NmRQdzFYekFCaWZYajc2dCtlOVl2L0wra3YvYjlqUnZYLzVlM1ovN2VzbXZNZkJCamV2SGp5YjFxRjE3L2UxdkwvMDFyVC84MnRUdjAzcXlMKy80b3A1Zi8vZ3F4NCtmVEJ2NW1OY2Y5NmdSSUx1N0wvTFp2YThHOWFmZHkvN2N1blFLejQrL2Z2djIvZnZ2MzcrdlhMLys5QSt2dTNyLysrZnZrTVlvT3RBQUQ1Q0tQL0JmZXV3UUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMi41YTdkZTliYTRlOTIyM2YzY2MyN2ViYjU5NGE5YzVkYy5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjgwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFyVWxFUVZSNDJtMktUd3NCWVJqRW53L2g4L2dhcm01S3JnNk9ybEl1NUNBcHhTb25GOFcyQnlRSEhOaTBXdzdyc3JLYjFiN2I2MS9hWjNocmozNDFNODAwNUhzWERGdE55RWpnSDdSY3pMbWRJVVFpVkozZnp4ZmJXd3VCZjhORDNwbUN3d3JqYkFyQ3NTREZGZWJhUWpXZFE2OVVnNjdwb005dkRJODd5TE1EeGFRN1FxT1F4OGFZWVZEUlFBQllpWk04bVh2dTErdmNLWmJaMEtaTXJJamo1S0lNREk3aDJqWTgxOE1YQldHb3U3d2RUeUFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvbG9nb0NvbW1pc3Npb24uYjllZTczNmUxNzU2OGMzODcxYzNmZjNkZDE0N2QyZGYucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjg4OSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBZlVsRVFWUjQybU5nWUdUOHo4TEE4SjlCVGZXL2wxdmt2MGp2dEg4YVptNy9HUmdZL2pPemN2eGpZR0prQm5QVVhZTCtaYWxhLzB1M2NQM0g1dXI1andta2labmxId01EQnlkWVFVcFd3Yi9zNXRaL1JmWHQvN0lUaS82QnhOaTQrUDR4TUxDeWdSVTRld2I4MTQ1UCtPZWtiUDh2V0NNQW9vQ1IvUjhBcDBFdXVwbHIyWmNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvcG9zdGVyQ29tbWlzb24uY2IyMzljNDU3ZDZmYTNjYjM3MWIwNWEzNWRkNTlmZDAucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjM4NixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBeUVsRVFWUjQyaFhLdjBwQ1lSakE0ZC83ZWV5a0hpaW5EbElJRlpSalk0UFFWYlIwTmQxQlcyczF1QlEwNmFxRE9EaUk0eG5VVVFRVjhlL0hkeno2cXZQenlPL2Z2L3FaTEM0R1ZIRE9vaWhlNmFHbzY5bU02YVJPckFabkUzSnBoOGQ4UUw3WGtwdGlpMVR3cUZINmk4UWg1dnJpUTNMWmtId1lFaFI4OGQyckxCTXcvVVZaMzZZdnRLTW56SGlodDVlQlB0K2RJTnBMbzlibHZXSVlSVmVpdzQxa1Z1Q2RyWnRLdFNtZGt2RHBIWGV3cFhCZkZxbjhmS3ROREx0dGpQam5wSUM5dFJ3QTNXWlB0T2tuWStZQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3NjaGVtZUNvbW1pc3Npb24uOGIzOGZlNWEzZjc1NmJiOTMxNmRkOTVkMzU4MGU1N2IucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjg0NixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBZ2tsRVFWUjQyaVdOU3dyQ1FCQkU1LzZIY2FFclFRVzNna3QvNE1LTmtoQXhNSitlenRCVGJUcFRVRkFVRDU3VEZwUlN3TXl3YlVmT0JCR0JxeUlLQUdQWEk0V0lCV2JXNy9zRHFSV09ZbFJLRWQzdGdlZmhDRW9KRkx6ZXQzdjRZV2lBOVhVKzRicGVJZnFBTVA3MHN0dk1RSy9PZktaaFNxaFZtbUthbERPWldmK0dScGl3b2k4aFFRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2FmZmluaXR5TG9nby4xYTViNGQ4NmEyYTJkZGI0YzEzZmU3ZGQ1MmYxMjRiNi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFnVWxFUVZSNDJnM0hJUThCY1FERzRmYy9OcDlCRkNYVngxQUV4U2V3bXlBb0V0dFZSRGZWRk1FbVVKaFJKTUh2emI3QzNTN2RydHc5N1pFRG91MDdPMXFJSURjdHhwU2N2S0dlM0xDNDhmQ1ZsM3RJRmtQL3ZlQkR3c0VTZlJlc0NjejRjZkZBenZnU2U4bkVXODk1aW9RcFI4NnNuSkw3TFlzT0VTUDJ4RVIwSzYwRVVWRWYzamVUQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ29Ib3Zlci40YmQ3YzMwNjUwMzEyNmNiN2FhN2Q4NjI0YTMyNzdlNS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFyMGxFUVZSNDJqV05vUW9DVVJCRjUrR0MzMkEwbXF4K2hzVmdrWGxkeEdDd21CU3NhblN4aXNVZ0dMUW9vc1ZrOEFOc3UxVXhpV1hQTEc4ZkhPN01uVHR2SlBYZUphb0NGZW9UdWt4Vnk4RnpRaE9GcGdOLzJCS2NKOTRMUkRZb0VSSTRVcC9oUUgxRjYySXZiTGZZZXFFanVFTU02eUxRWVBoRForRFlIcUJQZEkvZnRNQ0g1b0ZPTWNiYzdWSXZZSWgvc2RzeDlERTJESGZvQk41NFg3Z0pXMFlWczBlZ0RhdjhOK3RWYXhsaFNvS2pYWUNPaWdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYW5ndWxhckxvZ28uYWM5YzMxYjQ4NWJmZWMzNjgyNThkYzQ2NTU4YzYxNDMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBY0VsRVFWUjQyZzNHdXcyRFVCQUYwVnNEVmRBRHNtUm5ib0NZM003Y0FhbnRGbWlEVHcya2Mwc2dJM2prU012cVNLT1I1WnFlTGZYVWxqeHdFb3hNaEU4UDhrTGszdjNJQm92NEVjeDgwdXp3Vjd3SldtNnBKZndTSGJ1ZkhKVHNUaWNxL2hRaWxieEtKQnBXcjI2UWRRR25xMXBHcjRGR0N3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvSG92ZXIuMDA2MGE3M2MyN2ZkNGQ3YWVjMWNmZjc3Njc0Njc1MTcucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdUVsRVFWUjRuQldQTVFyQ1FCQkZaL0FBZ3BWSDhBNVdOdEVUaUlLUURkaWxFYlR5QURaQnNMQ01oU0NJWGtDU3dzNDdlQUpqNndGazgvN0F5L3cvKzNjMzYwMElSZzJpMmR6ZGwyaXpHRXY4MWR6ZkNwd3dLZU1PUE1CaEFuODJuQldvb2xuQ1FDc2pOZnpURVZUdG54QUt4QVlxcUVHVkVCalRDNTJRcytPSW1YTGtGNjEvNlBPOUU4b1ZTREY3V0VTekd6MnlNRU5mNkd0ZDBVTnNHZWdGWFZEOW9JU2ROMW5Hbm1nRWhnd09YQ08vd3I5UTFnSWJhanIrZkxFWUxnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2JlbGF5VGhlQ3BwTG9nby4wMGJjN2FmNTEwNzBhYjQ4NDg0NDZjNTIzYTUwNDZjZi5wbmdcIixcImhlaWdodFwiOjI0NSxcIndpZHRoXCI6NTQwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFpRWxFUVZSNG5HTTBNTlQ1enlKdStOL09RSW54K09FZC96OTgvc0hBd2M3R3dBZ0UvLy8vWjJDMDhZNytiKzRZOUorRDZSOGo4OGNyLzc5OS84N3c5ZXRYQmk0dUxzWVA3OTh6TUZaVTFmei94U2owZi9hK200d2hXbi8rYzdDek0xeTRmSm1CaFlXRjRmKy9md3lNa2RHUi83bDRSUDRmUG5hTWtZc2RhQ1lERThoNEJpQUFFd0I2ZWpNYkVjTVFTQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9ib25vYm9QcmVzc0xvZ28uNzFjODgwM2FhOGE4MDExOTQ1NzBjZjgxZjc4ZTRkNDMucG5nXCIsXCJoZWlnaHRcIjo5MCxcIndpZHRoXCI6NDg1LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQkNBUUFBQUJKQ1NmSUFBQUFHa2xFUVZSNDJtTncreGY3di9WZjNiLzYvOFgvR3YvRi9RY0FYYTRMYStBRjMwZ0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc0xvZ28uMDFjZGZjZjFhOGI2ODZjYzI3NmViN2QyYmQ1ZDNiNGIucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWFVsRVFWUjQybTNOc1ExQVVCUkdZYkdNT1JRNlVkTFRpYndOUk5TaTFKbEJUU1FLTTV5ZnhBNWlCY1Z0M3ltLzVnU2VLSUNEVTQ5eWc1cUxUbzRkWjVCeXExWEdSR0VRczZoWHcweGlFUEV5TU9vak1naXAyRmhWS3ZROGZ4aFhNQjlUeTdHTkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvY3NzTG9nb0hvdmVyLjdhNDk3YjdjMjMwYmUwOGIyZGFlODQyODdlY2M1YzBjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXFVbEVRVlI0bkVXTU1RNEJVUkNHLzlrNGhCdG9sVnFWaHBaMm4xSzRBU2ZRT1lDb0pMdXRVcWZRaThvRmJFTGhCc1kzVDhRazgrYk5Oek9mTlNrcHd0MTUvMkZrRUx1WFpUUVRtcFhNSHJDV3ViZXBTMWh0RFFzTVpoam0xRXJTQzkySW93UC9UVFl3R0FMWGt2YmtoUnl3Y01KUVpRT2ZQbkJCWGsxNlVydXdzQjJ6QWRnQm5ERnRnUVcyS2F3SHUrVUZvaUFUY0V5RnErYlpjZkQrTFh6RExHd0lHRWZRZndCUGREMCszcGgyNndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvY3NzVHJpY2tzTG9nby42YmZkZjBkMzBmYWYyYjE3MzI2NzBiZTJiOTJlZDM0Zi5wbmdcIixcImhlaWdodFwiOjY0LFwid2lkdGhcIjozNzQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFCQ0FRQUFBQkpDU2ZJQUFBQUdFbEVRVlI0Mm1Pby8xZnh2K2wvMGYvNi93MUFPdk1mQUdLZkM4eWd0ODQ5QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nby5iOTg4YTQwODk4MjVjZWVkYmZlY2RjOTQ4NTdhMWNlYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiVWxFUVZSNDJoM0hzUTJEUUJBRjBTOU91ajVJM1FVQkdjSU9DSTBJc1h0d0R3U2twaGxxK0ZQUHNpSjVtcEhrNnFjSEQ3eW8zTHZ3WUdOTEY2bzgwVklKUjlwNkVtL2s0dDA3aFR4NTVPZnc0YjhqYXhRZEorRVAzL1NrRXcyclo4dEtWeHBKTHU1elpub1g2d0lMVVVoRjZqVXdHUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nb0hvdmVyLjAxNjQ1MDYyOWUzNWNlZmRjYmIzNzAwMWMwMjNlMzE0LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXZFbEVRVlI0bkJXTk1RckNVQXlHRTVVS25rRHdEaTdpNktDYmk1T0xVT0VWNmVEbUJVVEVDemk1RkZ3VXZJR2ppNk80ZUFkYlR5QW9sUFJMNENONS8vKy9SSXNReEVRaUZSblRTNkdZRzZaNlZiTy9CeUswR1R3Z0JhOE0rbkRSUElRcFA1NmkraGF6SDF0OFE1UFdZZTc1aGhqempGQTNzejJkcDY2WVM0S3hCeVlvWFlRZDNoSDRLQXZNTmYybFJaSU1NYmNJQTRRbE1NcUIxSjFOR3cvVXVKMGlmREZPNERVbjFhSm5tb2ZBQmZYN0k0UTJlSDNnQm1VRmVBSkRpRmVlaXMwQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZHJpYmJibGVMb2dvLjg0MmVhNTE5ZDY0MzY4ZWM0MjM4ZDhhODU2OGE3YWFjLnBuZ1wiLFwiaGVpZ2h0XCI6OTQsXCJ3aWR0aFwiOjI1MSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQURDQVlBQUFDdXlFNUlBQUFBVlVsRVFWUjRuQjNLc1EzQUlCQUV3VHZlSWlXbEJNdjl0MlBYUUVDQTRPR015RmJhb2FRMTU0SlpnTHR6dDBnZ3hvajljTUQ3ZmlpbGNJeUIzcnZjSjUvblZzNzVBTlZhMFZwRENJYnJzZzJjWnFhVUVuODBVRFR6VWtSSmRnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2ZyZWVDb2RlQ2FtcExvZ28uMzFkZjE1MDAyYjRkM2M0YmQ3OGQ5YTIyMzY3Yjg1ODcucG5nXCIsXCJoZWlnaHRcIjo4MixcIndpZHRoXCI6NTA0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQkNBWUFBQURqQU85REFBQUFKa2xFUVZSNG5BVkFzUTBBTUFpQ3hiVis1OVQvbnhBd25QbnVmdGhkVkJXVGdHUnNReElQMjBjUE1qd1FKVVVBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9naXRMb2dvLmZkN2JlYzFkODZmMDFmNDQyZTNlYTFiYjJmMTlhYzcxLnBuZ1wiLFwiaGVpZ2h0XCI6MzY3LFwid2lkdGhcIjozODYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmpXTVFRb0JZUUJHdnlJYk15VktLWTdnQWs3aU1HN2dFRGFTclFPd3RtUHgzblpLRm80Z3BVYlRuOTM3WG4wdkNmM0VGY3RDb1pkWWNlTHRMTEZUVHZtd1lXdnJPQWtURzF2dXJObjVkQlNHWG0wNXMvZkN6U3JkenhkSERuNGQvS08xRFEvcXNtS241aXdLL1FBSEdEd1NmWGY3d3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0TG9nb0hvdmVyLmQ4ZjgxNzcwNWI2NTZmY2U5Njg4OWExYzczOThhYTY2LnBuZ1wiLFwiaGVpZ2h0XCI6MzY3LFwid2lkdGhcIjozODYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQWxVbEVRVlI0Mm1NQWdlY0pDU3hnT2pIUkNzaldCYkdmQWNWZ2tzeFFTUjRnM2dpVStBNFVrNFFyZ2txS0FUay9nYmdHS05rTjVQOEhZaUVHcUNwaElPY2VrUDRQbEx3QXBDT2VKU2JPQjlLUGdWaUFBU2pJRFZSd0FxUUFpUGNDOFJJZ2Z4K1FQZytrZVdCV3NBQVZQZ2NLcmdEaVpVRDhCeWpHQnJNQzVraGVvS0o3UVB3UUtNWUw5d0F5QXlnaEE4U3l5R0lBamRoamtQeE93SEFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9naXRodWIuODM4NjM3YWRiNzY0Y2I0M2JmN2VkNjlhYmVmZWQ5YmMuc3ZnXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0aHViSG92ZXIuOTA1NGY3OWM0ZDBhMDYzNzJlY2IwMDFkMzM0MmI2NWIuc3ZnXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ21haWwuOTAxMTllZGQ4NWU3Zjk4MDNkOTI2NjlkZDI1NDM2Y2Iuc3ZnXCIsXCJoZWlnaHRcIjo1MTAsXCJ3aWR0aFwiOjUxMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ21haWxIb3Zlci43MjhiYTI3Yjc0NWNmMzNlOTI2NTFlYzQxZDUyMTdmMy5zdmdcIixcImhlaWdodFwiOjUxMCxcIndpZHRoXCI6NTEwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9oYXNobm9kZUxvZ28uZDQwY2VkNzgxNTdkZjNjMjQzMjc1ZThmOWUyNjVhODYucG5nXCIsXCJoZWlnaHRcIjo4OSxcIndpZHRoXCI6MzA3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQ0NBWUFBQUJsbEozdEFBQUFSRWxFUVZSNG5BV0FLdzZBTUF4QVgwbVpIRUVnMlAzUGd3T0Y0Z3dMMlllMVJJNXptRTR2MjVwcEhVUkFWYW0xRU9PQ1hQZHd0NHkxeC9zSEljeTRReTJGUFNWK3FtQWNnNVc4aVN3QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvaHRtbExvZ28uOWJiNGQwMTM1Mzg4OTE4MmJlMWE0MWJmOWQ3ODFhNmYucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBZjBsRVFWUjQyalhHb1E1QllRQ0c0YS9yRkRLcVF4Zk5UQ1BvYnNBZDBMZ0M0Y3gxaURiVEJPSDlncDFnSm1rMnc4NW0rODlmenA3eWlEV2g1TUJHWHBMUnBoZTF5THdTQzg0MGVYTHoxY0Z6TWVOT2hUR2p1TGVuY3A4L1J3N3NYZVBoZ2R6aDZ5RXBXMWY5b2l2WCtYQmlFbDM0dVNITENUdHljcWRPckFKMU1Ga1Q5TysxRFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvaHRtbExvZ29Ib3Zlci4zYjExMDAyY2RkMTYwMmUyYTEyZDk2MWE3Y2VjNDdiYi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFwa2xFUVZSNDJrWE1vUXJDWUJURjhkUHRXalNyMVdrM2lvaE5nMmxmOEFWOEEyMzZCSWJoY3hnRnNSbXNzaUFpT0d5Q3FBd0cyLytPd1FZLzdqMW5kOVBUOTlkSWM4NEI1YjRSWVlrUTdjaTVIdE8wRUpKWFlsbmdqQ1pmdkhEanhUWGlMNWpid1l6bHpxendjb3lSZGZqUVQ4VjFuNURnaUFQMmREWG1nNE9CV0RvVVA4S1FQV0J1eVZYbW05eTFnenJoeXp4aFVyalEvZEdRUFN3ZTVRNXhJWUFuU1JsNHRZcGoyd3o1SFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvamVzdExvZ28uOGJiMTM3OGQ0MTQ2NTFjNjIwOGUxZDM2NjQxMjA0NzYucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBZjBsRVFWUjQyaFhCc1FvQkFRREc4UzhXTVpJSDhBQ3lLSU5KTVhrQjZUSmM1Rkt5V09oQ1hjeWtsTzZHbTI2N3AvbC83M1BkN3ljM0xJOHAyUkR3OFYzVU8rem9NZkxVTXlHR2lDTUZQNmMwNVNVWFlwOTQ4K2ZKWEY2UkVmQWw1dXlFU0E3SmZXT05FSkczOHNOOUJuUWQrc3FldHJ6ZzVRTUpFN2VRVkFHWTlFalVFU29YL0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvamVzdExvZ29Ib3Zlci4xNTcxYWRlYzQ4MWYyOGY5OGY1N2EyMDM1YTFiODMzNy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFyRWxFUVZSNDJtTjRucERBeEFBRVFOcjBlV0xpdW1jSkNmRkFIQXZrVHdMaUJnWVlBQXB5QXdYU2dMUUlFQnNBc1ExUWd4Tk1VZzlLNXdIeGNpQ2VEcFNjQTZTWlFZSStRSjFWenhJVGE0RjBBWkEvRVlobkFkbHRRTnFWQWFneUVzaVpDOFN4UVBZVW9HQXRFSmNDMlMxQU9oTmtRakpRY2lHUXJnZmlhQ1EzWlFMRlUwR3Vid1NxRmdQU1NrQkJZYWlHYWlET0FMSzVRQ3JkZ0p4MklKME54QzFBYkFIVXdBRXpDUUFjZ205b0pKb01IQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9qc0xvZ28uYzE4MmI3ZTM3NDY1MTkxNjliYmNhOGU4NGVkMzIxMDQucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBY2tsRVFWUjQyaldMSVE2RFFCUkUvN1Y2bEo1Z1ZRMjZvcktpcm1uU3RLSWJVa0VXOEFnY1IrRE5BVkJjQVFjZkNIa1pNVzh5cGtBaWtqdVJSREFsNWgydEtVM1J5N1FKaDU4cDMvYUJrWTZlNGhBZnJweGNWWDdaaFo3NmsvRTJDcThOWjFvZXl2UTFCV3BlM0NtNUVYVlpBQTNOWXl2bFVDZnVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2pzTG9nb0hvdmVyLmYzZDY2OWU2NDI3Mzk2ODI0NTllYjA0MjI2MTI3NzU5LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXRVbEVRVlI0bkYyUE1RckNRQkJGLzFnb1dPa05CRUh3SElJM0VDdHhnMFh1NGhYU1JDc1JMMkNSSXlnMjZheFNKRm9MUWhySHQ2VXV6TXlmLy8vTzdGb2RRaXBwWnRMYnpUcGdtZnZIcFQ2d3NDWkpqdTYrd0NESW4yTm1KMnRDeUJIVzlDM1JnNVFEbUVLeVBCcjI5Q3ZhU0ZUa3J0enYxQUZUeTM5RGhsaUJDc1F0M0RNYWNzQWFNcDZNYUZrenhIZ0ZUK0l2RHJpWExwMFJkang0ZzNDRHE2blRPQ0ZGbk5NOFdQR2lqcmxkVWtlWUxsOEZYRWJvVUxKQ2NRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xlc3NMb2dvLjJlNzhiNGE3MzI1ZjBmYjJiMTMwNzY0NTE4MGMzZGE0LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVhFbEVRVlI0Mm1YR3NRMUFVQmhGNGY4MWhoQlJzb0I5c0lCRVJhbFFDYTFHSmRGWXdBNzZjL2Z4b3BESSswNXhyOG5oN09OL2dFYmR1NUdaWXRXbWxaT0R5VGZRYXpUTlhOeTBuR3pzV295U25FUXhtVklLS2d2SThlc0I3a3N0a29XQ3h3QUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xlc3NMb2dvSG92ZXIuZmNlMzA3NTFmMTRjYjJkNjUyOTMyYTg1OGY2YjVmMTgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbmtsRVFWUjRuRFdQd1FtRFFCQkZkeTVDd0p1UVEwb0lLU0FkcEl5c0RhU1BRTTZwSWFXa0VyMTRFaFJSY0h4LzBBODcvOC9NbjlsZGEzTTJUd0UzQlk0NEdkSGRaRWdDa3VEVVllRFNzQXd2K01Ua202NDZCZm1NdXNBUEdiNDBLaVlXQ2cxSEdEa1QyMG9aUGlSWE5sVHdqOGs3dWtjWDZNNmFuSitJUDhXQlRTdFhsT1FUK1JtK1dWdlh1amRlanlHMGdDSllQREowL0VMWURRYzJBMU03R0pSWWE4b0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbmtlZGluLjgzYmMyZDk2NmMyZmZmNDQ0M2FkNTkzZmNhOTFlYjBiLnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbmtlZGluSG92ZXIuY2YyNTI1ZjhjMzJhYjA3OWQ5NTVlODU2YjI0OTM1MDUuc3ZnXCIsXCJoZWlnaHRcIjo1MTAsXCJ3aWR0aFwiOjUxMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbGludXhMb2dvLmMxZDU3Y2I4ZmFiNDg0MDA2MTE5ZjIwYjU2Mjg2YWM3LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmgzSU93NEJZUUJHMGU5SHE1QklOR1E2anlpbW1jUVdaUHFweEM2b1JHVUpvcGJRV1ljbDNMc1dMWEhLRTRweHdnY1pHVXJvRVJvZXZtMEovZmdMYS9aY1BCa0dNWVFqRldOeGJrSnNQZno3enRQRTJORVJ3OVVYQ1NzTFd6ZXNhWnc1RFJWTGE4N2MyTEZnK0FYOTRVTnI2Vy85OUFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbGludXhMb2dvSG92ZXIuMzViOTBlMzk2NTdjMzNkYWI1YmM2ZDAzN2JmNzAwN2IucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbVVsRVFWUjQybU40bnBqSXlBQUV6eElTeElINE94QmZmWjZRSUFnU0E4c0JPVXhRQlNaQXZBaUlqd0RGdkVCaVFKb1pyZ0JJNndNbFk0RzRHWWlyb1dJc0REQUE1SlFDSmVTQldBVEl2Z0kwWGcwdUNlUjRBUVZMWUh5Z292bEF2QmhaUVNoUVFTaVNnc2xBL2lxWTBacEF6QWpFSGtDRjVrQkpiU0RiQklobGdWZ0dwRm9leU5DQU9ySVdpS2NDY1RRUXF6OUxTT0FGQUxlZFcvSDY0U1IvQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9teXNxbExvZ28uYjhmMjI2ODIwMjRiMWQyZGExYWI4NWE3MDEyM2ZlMjgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWDBsRVFWUjQybVBBQUZjWkdSaXVnTER3RllzcnZDZ1NWOVN1S0Y5aFpiZ3FkRlVBeUdXN0luSEY0WXIrVlZ1R0s5T3ZUTHVTY3lYK1NnMlFuSEhWaGVHcTFoWFZLMUZYdks4b1hqRzU0bkJGRVpzdFZ4aUJtT2tLQ0ROZFpRUUFSYW9vTXVnMHVOc0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL215c3FsTG9nb0hvdmVyLmFhOTg0MWJmMzdiMDI4MTE1OTQwNTgyZWYzMTgyMWRlLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQWxFbEVRVlI0bkczT01RN0NRQXdFd0hORGhTaElUUmtKSVZyK2s3eUtUL0FkMGtOQlNrQXBFUnhqaFpKVk5tdWYxM3NYNVlleDYwcWxKYUpFVmRGQ3d5QzBOYUNDNDBiZmFzOTBpckh2cmMwd0wySFhvS1Z2ZXMyRXRiaVA0WU5uZ1d2YzRsM0tLZzFIVGw4WmNNSU5wbmt2NVpTR25lYkZjYUJQSEF3YXVuUjJpWnZYLzRQNCtVMFNMTXgzUU5aWnB1YXZmZ0Y4V1R2cFB1K2MzZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9ub2JsZUxvZ28uZjdmNDc2NDAzZTA4ZmFmNTZkYTM1NDcxYzM1MGUwMDMucG5nXCIsXCJoZWlnaHRcIjoyMjMsXCJ3aWR0aFwiOjIyNSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBMlVsRVFWUjQyZzJHMjByRFFCUUE1MnczRzJOTlNoVlI4UUx4SC9STndZZCt1ZUFQaUFWRkVWcEViTFcwc1Uxamt0MWpZSVlaSWJ0ZDB1OE5ZbWU4TXlLdVovQ3FkRkFIRGZibSt0VE1GbXRXWldPS3FwV2YxdzBjUlJBWmp2c1JkblIzcGVkbko4eS9GMVRiU3ZQOGd1bjBnN3B1NU9WdGdubDZmcGV2K1pMaC9nRmw3YVh4U054UGNaMXRFT3hsR1BONS84REVwQ1JKek9QNEYyTjN5ZlljWWFiWTFjYnI0VENqS0JYanQ1b2tFU0oveEpSa3RudVhqNHA2VFVxTUVoQXNVQUVJN0dpd01ZUkJwclFxd1loS1YxeXFnTktvaEgrYXEySmlGdElTNndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbnBtTG9nby5mNzUwOWI1ZTliMjk1YTZhODI0NjYzMjVjOGM5NWFkYy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFYVWxFUVZSNDJtMk5zUTFBWUJnRnYvem1FWlJLR3EwUkZMVFVncWpvVkd6QURDYTV0NCtJcUhndjE5NlpQQnd2VHA1OXBwNUtBeFVkTlFXdDBTalhxSlNKUktVMjA4ck9Rc2JCek1scGlnaXBhWWtKOFBGL3BPNU8zdEhuRjFXak5XQks2QmhCQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9ucG1Mb2dvSG92ZXIuYTJjMDc4NmVjNWEyMjA2MmI2ZDIxNWU3N2JlNDcwYWIucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBb0VsRVFWUjRuRVdQdXcwQ1FReEVQUkNTRUNHSUtZQ2pBUkxxUU5xcmdBYm9nbTRRQVJLVlFNQXZCSWtROCtZUWQ2TWQyV1BQZXIyNmx0S1BpTXdJaFpSa3NvYUdiR2lWSWRISC9xL1pzRUhjeWNmd0JrZndCWjlZSjdxVXN1YldLVE5ueENOeFNYTlBjOHE0eWhPMlRCaFNmRkRja2EvSXo3Q0NQRkhYYzI1NXN3VjZnT0VRRVcvMGg5Z1kyQ241d2c4WUdsZzd0NkZuQS9EK0xuSTZmQUVhUGo0ejNxN0VTd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvLmI4ZjRlZDkxMzM5ZjU2NTBjYzdmNThmMWVjNWJiNWNiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWJrbEVRVlI0MmlXTXNRbURBQlFGSCtnTURxRkR1STM3V0NXZDRBU21FTGRJbW5zUWJHd0VzYkMxRXI2bzE5MFZKNmNTcFFkYVp4S0pMbWpBNGVxUm5EZGZGZ2U5YXhmeWgrQmdZK0h2b0pNN3dpTVRNenRYb0tDbUoxajU4WEwrZkNyQzBOemlSSEpHNjRGU0lqMEJPS1pNQlBveks5UUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3B5dGhvbkxvZ29Ib3Zlci4zOGE0MGVlY2I1Y2QxZDllOWY1MWVkYzkxZTUxMWUzOC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF1a2xFUVZSNG5CMk9vUTdDUUJCRWQ5TldZRWtnNEVsSXFBYUxSOEF2WEUxeEtBU2ZnTUNocU9FWE9JUEhrYUJSb051a0tDeWhPZDV5eVdSdVp1ZG1UMHZuWWxIOVNnaFRFZG1BRjFqajFYaVJWbGttWFBEa2lEbUdVL1FTTHRCaURTUEVDa3d3K2lyU0N5R2M0U2U2ME1vNXovczVnUWJqRFg5b01CNENieXRPdkZnZ0hnUVNPQ0hRaGx1MGVGdVJjc2xwR1JDWU1hd1psdUNLdjdjVnd0Qk9EZzZZZC9oR09LUDUvOGtJb3dGZHNBTWRzRlhWQzRINEI4RVFSZjF1azBJeUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvcmVhY3RMb2dvLjJmZjc4Y2MzOWI0YWM4MWY4YjZlNjE4N2E5ZjZhZTE1LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWQwbEVRVlI0MmlXTU1RNkNVQmlELy9YdGhuc1lUTlE0c1JzWjBFbmNZVEFtRWxpQkN6Q3p3a3JDYWI3ZUJ4NjBTWWV2YWMwTVI2SURnVjV5NXFXelFncituTGhzZ0V3bExUVVZtZTlUSWpvTmpHdEdTazB4RDNvbVpucmRGZnZKaDV4YWpYSzk5OU1iSVQrK091cTZBUnhQZ3RVSnptd0JSVGc4K2lTdmZ4c0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3JlYWN0TG9nb0hvdmVyLmY2ZGMzMDRjYzQ1OGRjMTI3YzNjZTliZDViYzRhNjVlLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW1FbEVRVlI0MmszT3NRcURNQkRHOFZ1ekY5K2pXR2hMSi9kU0I5dXBGcEt0SFlxZzZLcStnTE9ycm9LUHBhL2hQeExCd0krN2ZKNUh4SjVKYXpVWkU4MWFIK0ROeHJ5b0NySWVnak1YSHhsUzdpZnFCYkp0K0NKblMwMHRVYmhzL1R1bUNkQXcwRkY3Tk9RQlltRk5TUEJBaXdFaldqN2VFUXJIRG4wSWZ3UWxmV1Y3Nmh1eURkemdJOEVmUjF6M2oxUjR3bk1pbDhrQ1ZWRnhxZXljcGRNQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvc2Fzc0xvZ28uZTgzNTFiMjE5YjBkYTViNGMxMDEwMDc1ZTMzZmQyZGMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBb1VsRVFWUjRuQjJPTVE0QlVSUkY3Nk9TcURRaVVWSlMySUZZZ2VodHd5WVVLb2xPMU96R1Y2Z0ZPMUJNeHB0ejUvK2MvKy83Yy9MbVJibVhycVFhbEpHY1VyRGx5R1hCSDRhUnNlR3BSMzZScitRNnNTek1LYlp3bHZTQUhkS2V1MElNQ3dlS0kzeGhEVy80SUJXRXRERGlZUVY5bUlEbm1jSUZpb1V4d2IrWVFRVlBjSmNiRFFZV2xoUUxPTUVQM0tGZENPMlF6RXBndDh0WHFzUDV0OUFBb0g5SFBMNDlHZklBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9zYXNzTG9nb0hvdmVyLjIzM2Y5NzBjNjI4MGU4N2U2YTdlYjVlN2RhMjdlZmE5LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9VbEVRVlI0bkMyUE1RNEJVUlJGNzZPU3FEUWlVVkpTMklGWWdlaUZWZGlFUWlYUmlacmxqRUl0eGc0VWsvR2NpNWM1OCsvN2MvTG0veWhYNjZha0dwU1I0dmxYQUQwQ09idDhYYkRUUXJwSHhwbGMyN1V3WmwzQ1VkSVZOa2hiMWdveExPeG85dkNFT1R5Z1JDb1Ewa0tQalJtMFlRQSt6eEJPVUZqb0UveUxFVlJ3QTArNU1LQmpZVW96Z1FPOHdCTit4WlVzY0JreWZNc2gxZUQ5Wm9JKzE4WTlqSGlTVzQwQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvc2l0ZVBvaW50TG9nby43MDc4NDFjOWNjYjVjNThjZmY3ZTU1OGYwMmQ5YTQ4ZC5wbmdcIixcImhlaWdodFwiOjg2LFwid2lkdGhcIjoyNjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQVowbEVRVlI0bkJYTHdRMUFNQlFHNFA4ZDZhVWNXQUJ4Wnc4MjZtSWRRVXpRQVVpYkhpdlY1RDB4d0VmN3RuTktpV0tNMGpZdGVlK2xxaXNvcFhCZk41RXhSc1poaEhNT1hkK2h2QVU1WnpBenJMV2dlWnA1V1JjNmp4Ty8xRm9qaENCUGVpQVErZ0FGaUMyK3VWeFZvd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy90c0xvZ28uOGJlOGI0OGNjMGY0N2M2Nzc0ZWYzYjMwZWEzMDgwYTUucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYzBsRVFWUjQyaVdOTVFyQ1FCUUZmNDd3OTR1SXBkNUtzUE1lSHNCRFdPWVlpcVcyODdRVVFXemlCbktDVFpZdzdReGpORGhCSWlsd0dzTjVrdm55bzVOd1U1QXBGUlVHcFdyMGZEaHo1Y1pMUzVQem45aHg0c0NiaFJGa0ZZNTAycXRsV3hPUnVmQ2cxWjB3emRzMUt6WUVOZ0tielZQNUJpVHliQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy90c0xvZ29Ib3Zlci44OGVmMTljNTIxODliYmU4MmJhN2I0Y2RhNmQ4NTIzZi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFtRWxFUVZSNDJrWFBRUXJDTUJDRjRja1JiRVRFcGQ1S0VCcndIaDdBUTdqMEdJcExYVmVYVWlpWlJadENUOUQrUTF1NitNakxtekFRaVhudXNJS1BJV1JHeWRhUm5WalFFTDZjaWFKQ0pOZDBoVElUZ2lja3lwNWhiNmNDSFRLeFYyZ1psTGpoaVJkKzlCdUo0NFBHa0krNDRzejlqN1Z0OEVqVCtndHE3aWZjY1pnM0ZKd0pEM3ltNFJ0ZUtKd3UzOXhoUzk3RHZpb0RJTDZJbjdnQ2Rsc0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3VzTG9nby45MWY4ZWY1MWIwMThjOGI5NjMyMGY2YmE1Nzg4YWI1ZC5wbmdcIixcImhlaWdodFwiOjc1MCxcIndpZHRoXCI6NzUwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUE4RWxFUVZSNG5HUDhCd1QvLy85bllHSmlZZ0RSakl5TURNaUFFU2o0RDBnei9QcjFoNEdOallYaHc4ZXZESStmdldXUWxoQmlZR0ZoWW1EODhQSEx2eGxMRGpGd3NMTXc1aWU3TWh3NWVZUGgyY3NQLzdjZnVjZkF3Z3cwNy9DSjYvOXNMYVl6SERxZXdhaWxKc093NjlBVmhxanVFLy81aEZrWjFwYzVNREsyVDluNnIzTGRiWVpJUFNIR1VEY05odFc3YmpBczMvcjgvNk1EU1F5eVVpS01qRzJUdC82cnlqM0M0Sld1d2hEcHFzNFFHN0tKb2FMRGdxRzlQSkFCNkg0R3hvK2Z2djY3Y3VNeGc3SzhPTU9wQzNjWkx0OTZ3UkR1WTh5Z3JDQUJWQUQwRmN3WFFJRHNQNkF3VUJJSUFGcTRacEE3RkhWNUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdnNMb2dvLmRlNWQ3YmE4YzIxNmMwYjY5YjY0NmY5NGI1YTIzYTNhLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmsyTnNRbkNZQmhFcjNBRk44Z29Pb0RXQmhRcks4RUI3RzFzRkNFN0NBb3BrZ1grRGQ0dGsrYkxSOUtrZWNjN09FNlN4WW9rSjlkT1hWTk4rcVFRYnVSTHhvNDYyUklVOGVYRFFPSEIzdUZlZE56NUViellKck80RWo3N1J2Q2ZKeFViaEhoVEhEUmEzQjU5c0VhRlVsR3lCQ081ZVFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdnNMb2dvSG92ZXIuNmE1YWZhYzJlM2Y5OWIzNDU3OTM1OTk1MzY4MmRjMmMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdWtsRVFWUjRuQ1dQTVFyQ1FCQkZaOEJTU0dWdjRRVlNDWjVCVUR6QkxxU3g4aVNLaFZpa1ZFc3RGRUVVUzRtSVY3Q080QmtDNDV0azRlZG4vN3lkM2RFeUJGRlZNYk9XaWxRbUluZ2s5UCt0QXgyeWhQQkQ0R3VCK21qQXdWekxHS2RxdHFZNElXeWpEZkFaSDVJVjNtRVArZU9LakxadkNnOE92UEFEKzZ0K1E3aEFQZ2xTZ2pHKzRrRW4vRWFuR3BpeFdRSmxlSUxtNkloR3FIQ2dSN0VySW5mRUNPb2RVdVdSN0hJSHhCZFFNeVlqQXdTK0ZmSHVEMXhSUkhEZndmSEJBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3dhc2tvTG9nby44YThlNWM2N2Y0ODI1MjJmNDU5YzQ5YWRkMmY1MTg5Ni5wbmdcIixcImhlaWdodFwiOjI1MixcIndpZHRoXCI6MTAyNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUFVsRVFWUjRuR09VbUhRNms0R1I0U1VEQThNWGh2Ly91WUEwTXdNakl5dVFabUpnK1A4SnFPRFVOYURBRmFEa1A2RGdOeUFXQXZKQk5BaXNBZ0JDbUJDS0tQUXNnd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nby5jODEwYmY4MTAwOTllMWNjMzJiZTgyNGZhZWY5ZWEwOS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFZMGxFUVZSNDJtTkFnQ3Q4VnpTdjhERmNFYjZTZmFYelNzU1ZVMWNlWGZseHhacmhxdk9WLzFmL1g1a0FKRUcwUGNNVjlTdHJyaXk1RW5wbE5aQmVkMVdENFNwWTRDcFU0SW9Hd3hXZ2xpdi9yd0sxZ0dsN2hxc2dRenRnaGw2MXhyQVdBSDN1U2RVSEY4bkhBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3dpbmRvd3NMb2dvSG92ZXIuOTllZTQ4NzEyYWM0YzVlMThmM2E0MTNkNjc5OTE4YzkucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbjBsRVFWUjRuR1dQc1EyRE1CQkYvekZBbWtnUlVwUzByQkhKTzBRcHpRUklsT2t6QUtPa1o0ZGtDWmlCN25pSGdBWkxoLzMvUFIvZk50YTF6RjF1SnJFYnU3dWZKRjF4Qmh0elBpTmUxQjNqQjloQ2xPZ0xPc1dFaE5Hdk56c2FEWTF0UFdKQ2hmRkJUTlNYQ1U5SWNCWG9kMHlveUhBQU9CZDhBSEpPaUo1MEViWURhQUN3SklEbEYxdklHOGFmVnN1NXBQYVFjVk0wbHJXRzNaODVBNUZNUXFHOFR4S29BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3lhcm5Mb2dvLjY0MzQ1MDhlZDUxYTkwNmE3NTg0Yzk5MmM1NzA4MDFhLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWIwbEVRVlI0MmczSnNRbkNVQUFHNFlPM2dNWWQzQ0FPRURDUXhoZ0Rnc1BZaWpZV0VSekRhZTZmSno0T3J2bElDVzZjbmVxeEFMWlo3QjFjMG9hcUxwSWhYZkRqaGt3WlExWWZrcHNqem5hWlhmMksxNXpKcnRySlgrN3VmYnNGUE9ScDd6RXZXOEVpTmw1cWphVDhBZTU5UThCVlN1NHFBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3lhcm5Mb2dvSG92ZXIuZGQ1NTc4NzMxNzYyMDAxYThjYjRlZTU0MjM3NTU2ZDgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdjBsRVFWUjRuQ1dQclFvQ1VSQ0ZaN2d2NE0remFCYTBHRlVRRE1MZEpnYUxUYkJvOEFFTVBvQkpzQWptMVNoczhDM2NwaVpCd1IyL3dRdkRPWGUrYzgreW1zY1lST1JySWlXMHlSVE1TVldmWWhZMFR4TEIxQWdNQVVjVkNmZzJ1dVdlNlMzR0V1a0Z5d25CTnY0TlNQRnJVWjM3SnpxWXdzd092REtDS3dJemdnTjJMMi9vQVI2bVdnYnZnUnZnR05oSFA5NVFaVG5sNVlWZ1JLL2NkOHlJV1hxRGNPckFMakRGRzc2Rjk3Yk1Hd0xHZjdPQ051Ui96b1R1YVBnQlROOUxDSjNsdEVZQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbmV3LXBob3RvL2FwaS5mZjgyNDMzNTNjMjM3YmY5YjJjYThjY2JlMzg4ZmM2My5wbmdcIixcImhlaWdodFwiOjg1OSxcIndpZHRoXCI6ODQwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiMGxFUVZSNDJqWE5xeEtDVUJSRzRmMytEK0VMYURQSkpUZ2tCelVlVHdUSElJNUtnam1iOEM4SVVGWmNueVdjU0VuQkF5ZGhMV2NDaVlsSVJZT2Q5R2ZreTVNZkhSbDI0Y09CRzN0eVh0VFlYVkU3SFJWVXErVXF5M2d6MHVIMFMzT3NVVVhBR2JacGtoTXBLRmQyQmx4VWRpQnJWOWFtQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9uZXctcGhvdG8vbmV4dC1qcy5hMzZkYWMwZTQ2OGRmNDZhNGY3OWZiMDkzMjYzYjZiNi5wbmdcIixcImhlaWdodFwiOjMwMCxcIndpZHRoXCI6MzAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFhRWxFUVZSNDJpM0xzUWtDUVFCRTBkZUVOUnlMM1FrV1lXQWdtQW1HRm1BbzNLRmdCelpnckxKRzZtWGpCc2RuWVBqd2hXSXdObnBkVUx4azRxbmpMRTd0VnIyMCtZbWxoYnVWK0RDS3ZZMnRvL2h5MFlScTdTWUc1dDRpSGc2cUlwcTZhcUdkV2Z3QkV6TXcveUsrR3RvQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbmV3LXBob3RvL3JlYWN0LW5hdGl2ZS5jNTE4ZWRiYzU2N2FjYjhmYzEyMGFmYTNhNjM4MTljNi5wbmdcIixcImhlaWdodFwiOjIyNSxcIndpZHRoXCI6MjI1LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFzRWxFUVZSNG5FMVBNUXFEUUJDY0xTNmdWbUpBc0xsZ0UvLy9tMWpJQ1ZGTVorT2hvTHZadlRSWldHNFladVoyU0g0REloSUFwR3VqbENoRlFzeHNDREZHV2RmVkRDakxVdkk4TjV3RWJJSmhHQkJDc0NSNDc5RzJyY1VncWRTTlY5L0xQTTEwdXpsVTFWMjY3a21ha2hMU0Y4dnlrWEVNcEJGNGVDOTFYWnNaZEo0bjcvc09GV0xib3I0WHNpeERVUlJ3emlXQnZLY0pmRjJpSkIzSEFWMVJFVFZOazI1Z3JXWDFyS2JOUDhZWGFpcHoxTStQelRZQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbmV3LXBob3RvL3NhZGVnaC0xLjExMTFkNDM2MWEwMWNiZjE3ZTJjNTQxOGU2MzZhMDA5LmpwZ1wiLFwiaGVpZ2h0XCI6MTI4MCxcIndpZHRoXCI6MTA0NCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvS0Nnb0tDZ3NNREFzUEVBNFFEeFlVRXhNVUZpSVlHaGdhR0NJeklDVWdJQ1VnTXkwM0xDa3NOeTFSUURnNFFGRmVUMHBQWG5GbFpYR1BpSSs3dS9zQkNnb0tDZ29LQ3d3TUN3OFFEaEFQRmhRVEV4UVdJaGdhR0JvWUlqTWdKU0FnSlNBekxUY3NLU3czTFZGQU9EaEFVVjVQU2s5ZWNXVmxjWStJajd1NysvL0NBQkVJQUFnQUJ3TUJJZ0FDRVFFREVRSC94QUFVQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFGLzlvQUNBRUJBQUFBQURQL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUMvOW9BQ0FFQ0VBQUFBRC8veEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQy85b0FDQUVERUFBQUFGLy94QUFlRUFBQkJBRUZBQUFBQUFBQUFBQUFBQUFEQVFJRUJSRUFFaE5DY3YvYUFBZ0JBUUFCUHdDUytybG5HUzFJNEQ1UStVYTVYQXg5ZDNyWC84UUFGaEVCQVFFQUFBQUFBQUFBQUFBQUFBQUFBUUFSLzlvQUNBRUNBUUUvQUV5Ly84UUFGaEVBQXdBQUFBQUFBQUFBQUFBQUFBQUFBQkVTLzlvQUNBRURBUUUvQUtaLy85az1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbmV3LXBob3RvL3NhZGVnaC5lYjIzMGNlNWFkY2MzZDhiMjU5Mzk4YjVjMTYwMTgwMy5qcGdcIixcImhlaWdodFwiOjEyODAsXCJ3aWR0aFwiOjk2MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvS0Nnb0tDZ3NNREFzUEVBNFFEeFlVRXhNVUZpSVlHaGdhR0NJeklDVWdJQ1VnTXkwM0xDa3NOeTFSUURnNFFGRmVUMHBQWG5GbFpYR1BpSSs3dS9zQkNnb0tDZ29LQ3d3TUN3OFFEaEFQRmhRVEV4UVdJaGdhR0JvWUlqTWdKU0FnSlNBekxUY3NLU3czTFZGQU9EaEFVVjVQU2s5ZWNXVmxjWStJajd1NysvL0NBQkVJQUFnQUJnTUJJZ0FDRVFFREVRSC94QUFVQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFGLzlvQUNBRUJBQUFBQUdQL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUMvOW9BQ0FFQ0VBQUFBQi8veEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBRC85b0FDQUVERUFBQUFFLy94QUFhRUFBQ0FnTUFBQUFBQUFBQUFBQUFBQUFCQWdNU0FCRVQvOW9BQ0FFQkFBRS9BSkoxN0ZaU2hSVUZhcVNOblAvRUFCWVJBQU1BQUFBQUFBQUFBQUFBQUFBQUFBQUJFdi9hQUFnQkFnRUJQd0NVZi8vRUFCY1JBQU1CQUFBQUFBQUFBQUFBQUFBQUFBQUJFbUgvMmdBSUFRTUJBVDhBdDRmLzJRPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2JhcmNlbG9uYVNhZ3JhZGFQaG90by41ODg2NGZjNjdhNGI4M2VlYTA0MTZmOTgxMjgxOTRiMS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUEwVWxFUVZSNG5BSEdBRG4vQVU5c1hQNG9PbUlCRXgwMEFQbjcrZ0FRQWZzQStnTUkvLzcrL2dBR0JQOEJBVnlIbC80ZURod0FFTkxUQUFWRlR3QU9DZllBQ3YvMUFQTU9KUUR2L1FjQUFXbXEyZjhMNTk0QStXOUpBQzZSbkFENERnc0FDZkhYQUIwcE0vL3YvdzhCQWFmRzMvN0d3Y2NCSitHNEFBODRWQUFJQmU0QTdQUHoveklxSWdEczhmSUJBYk9wblA3bTUvSUE2Z0lpQUFvZEtnQW04c0lBNVFNTEFDVVpEUUR4N2VZQUFaQ01qdjVOVTFRQjRPYjAvOFRyQUFFTjJiTUFDUVg1Ly9rRkNRQW9JQmNCT0h4Um92S2dHbzBBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvYm93bGluZ1Bob3RvLjRhZmIzZTg4ZDlhMzdjOGU5M2E4NmRkYWE3YzBmOTNlLnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXgwbEVRVlI0MmdWQWI0dkJjQnovZkg5K2R4czdzM2pnWEZpVHVnZlhycnU2dWp5U2VBVktQUEJ5bGFSNHBwUldKSkd5bWYrMitZcEtoY3JqMDlSUXNaS1lEVlE0TW9BVHowUG82cEc4L1FKR2JFdEZyVStuTzRNaWk4UmhzMlhsa1lJYmFwaG5raGluODlDMUVWTzcwMlgyUXJ3S0MzNjVBVmY5NEwyN0kySGFOV1IvcXp3Wjl1Q25zakNLSlZ6aUJZakxOZUJ6UkVqOC9TRGhyWkdSQjN5L2c2V1pFM0NtUzdTYWRaYUtEbCs1SVV6SElQa09Lbi85czIzbmFEVjNFQVhFTDI4R1BRRytPRW1xUUJDdzN3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLjRhNTEyYWNkZTNhZjA3NjhhNzFkZjU4YjcwYzdjNGQ5LnBuZ1wiLFwiaGVpZ2h0XCI6ODg5LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFJQ0FZQUFBRGVNMTRGQUFBQWswbEVRVlI0bkFHSUFIZi9BWHlHaS8vdTRkRC8zT0xuQVNJY0dRQUJjM2wvLy9YbDBBRDVBZ2tBRWc4T0FBR0Fhay8vQVA4R0FPOEJEUUFBQVA4QUFhT0thLzczOGZFQTBlYjdBT3p6OUFBQnFJcG8vZ3dEL0FERjJld0E0dkQrQUFHc2lHSCtDZ1g5QU80T01nRGo2L0lBQWFxRFcvOEhBTzBBRFVlT0FCMGlJZ0FCcEhsTy9oTU45d0FJT29ZQUdpWXFBTEpIT1o2emVzSk5BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9jb3AyNFBob3RvLjA4ZTAzYjE3OGI4YjdjNzgwOGY1YTBiYjRmMTVlZDZlLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhrbEVRVlI0MmdWQVMwN0NRQmorL21Zc2xUYjRTblJEb29rUjRnRmN1SGJqRGJ5SU4vQUNuc1lEdUNPNmNtRTAxQWZ2bEZkZ21EQkRXK1lqOHZ6MDZLT29Ja29sdUx4cTRLTmpjWGJlNU1QOU5jYURvYWc0U1JCV3FxeEdCM0FMZzkrdXhueWRvdCtNWVoybENrSWxFQ0RjQy9IOTFvSTJSMWk1TGRLZmY4YjdnU2lROU42TDB3YTl2eDVhb3paTzZyZk1zZ3kxSkVCUTVpV0t2T1FvYmZQcjlZV2Y3MlRqMkFKYmcrbGtSdVdzQS8xR2xsSXdxMS9JM2MwaFRtczVqZGJZRklYc0FMRUhZV1lCRWxsNEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2ZyYW5jZUxhU2FsZXR0ZVBob3RvLjJmOGE2MjlhNmVhMWI4MTM1NDE3M2FjNWYyOTJmYmQ0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXdrbEVRVlI0MmdWQXZXckNRQUQrdnBxZlFaSXFwVlN3SFFwZEt2NmdidUlpanE3aTQva0FMb0w0QWlJNEtqZzRCd1FoSUtLNUpNYWNkeWVjTHZmYXNtMDJmbnlRUUhqTDhKVEs1SThjUmtsYXYyVkNxZHpFSWtMQmNaQ21LUzZ4aEVnZXVJdklXTlA1bW41K3h1ZGZEWTVYUXBKbUVDTEJMUXpNTmRpVHBkWkUrK0dCMVhZWHRuc0htU0U0TGt5MStBNnZVQ2RINDc2MmtjRkZERzJkVVBrYW90c2NZTHZiWUxXZTRhM29SdEJLVXRHRGxOOGM5TVpzL0hmdzRWZFE5alJmL0dSVFdlRW1WRlFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvZ2lld29udFBob3RvLjQ5MmNmOGMyMzJiODkyMmU5OTc1NTNjY2U4MjIzZGY5LnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQWlFbEVRVlI0MmhYTlFZNENNUXhFMFYrTzB5UGcvb2VaN1J4Z0RvT2dvWjJPRFZsK3FaNUt2My8vV1lnWXlmMTVjTVJnaklrM2R5R1ZOWFFtcEZSd3lzMnNlbmRpVEZEaHpXaVhuM0lUV3Z5NTcvUVZIWTc0aXRjN2FPNjFiVjBHWEs0Yjl0Z3h5V3JFc2M0b2pDcTQzYTdsNHp4WnRRYk5qWnlUaUlHVEtXdExoV1ltSnBVcTlRRWQvRXNKUE1oOWhnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9pY2VsYW5kV2F0ZXJmYWxsUGhvdG8uNTIwYzlmZWZlZmRiNGIyYWVhMDg5YWY4MzZiNzgzMzAucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjg4OSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBajBsRVFWUjRuQUdFQUh2L0FadU1oUDlJVWtZQUZSa1dBUDM5L2YvZTIrQUF3YmpDQVFVRi9nQVNGeFgvQWEyaGwvOFdHQk1BQ1FvSS8vSHg5QURGdjhnQTVkM1pBQUVFL2dIaDNPZi9BYkttblA4TURnb0E4ZS95LytmbTZ3QUU5TzRBMU5yV0FQTDI2UUg3L1FiL0FhU1ZqUDhJQ3drQTZ1YnJBTTdrOFA4VSt2RUE1ZVBkQVAvLytBSC9BdmovL0xKSExrby9vWjRBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uQXJzZW5hbFBob3RvLjJmNDk1NDc0MmI4ZmM0YzI4NzU2MGQzZWI0YWRiNGJhLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqa2xFUVZSNG5BVkFzUW5DUUJSOVA0Y0VDWWVnQ0lvRHFOZ3A0Z0lpcExTd3NiRzBjSWdVTHVRR1RwQVJBcVlRTVlGNEdnbm5rZkJFb3VqTXloamtTWXJLK3RDYXRPVUxnL0VFalFCeTNJWHNkUHRzdzhwaXJuQjdCTXd6RDhYbkNlY2F5UDYwWmVrTXhWN2xzQWJjYjhwTFBNSzNkaWplQ1dRVHJnaDRWTDZXb1FSWXp1Nk0weGF5dWdjRjRnOXpEanZ3LzZwYVZnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25DYW5hcnlQaG90by40N2JlZTk5ZWJjOGQ3ZjQzZDVlMzg5MGIzZTA1OGNlMC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6MTAyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBalVsRVFWUjRuQVZBTVE3QlVCaisvbWllMEtxbnBUcm9VRXNyYVNNaFlqT1ltQnhDSE1ENWJDNWd0aGxNaGxhVmtOQjhJc3ZWbG5uVndVVlBNWEVOekFaZkhzOGY1TXBEMUhoQmhtRkNwNmRwelBleWlXdlE2czdEcVFENlk2Uk9DYkg5bUw3MVk3cmV5V0xrUWxVRkgrVVROUjBpZXd1a2FiV3A2b3FlRjBnU0JiQmJKa0dpYXhxNDNqTDhBYWlWSzhXVndBRXRBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25DaGVsc2VhUGhvdG8uMzQ0MWJjMTkxMTIxZjM5NTBhMmIwMmEyYmI5M2ZjNDEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjEwMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWowbEVRVlI0bkFHRUFIdi9BWFZoTXY4TUdUMEFKejliQUJVV0ZRQVZFeEwvL1BqMkFON1V5UUR6NTlFQUFXcGNQUC8zOWhUL0R4WWFBUVVORXdBM1BqMy83ZWJmQUwrNXZBRFc0dmNBQVM1QVkvLysvZUwvQUFmOEFmZjc5d0RkMjhqL0FCVXRBREViS2dBRkFRTUFBV0pmWGYvVTZ0My84dm5HQVFnSkNnQUZBaDcvK3ZueEFQcjU1d0FEL3dNQVRMZzVxSTNIVWJFQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvblRvd2VyQnJpZGdlUGhvdG8uYjc4MTVlYjQ0OGE4MmRiYWFiZWUzZDA2NzZiZjcxZDkucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjc1NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBblVsRVFWUjQyZzNNU1E3QlVBQ0E0ZjgxcjhSUTBZcUZoVE5JdUFqM3RISUNLOExTM3F5MHREcXJEa241RHZBSnkzWXI3KzFVc2xZbmprS2FqUVp0VFVNSVJaUkZqdHh1MXJpT3hXZzg0V0dhNkhxWFZxZk4vWHBpZjdraUY0czVzZThRUnZGLzhPa2JPcS9iZ2QxcVNhZ2F5TmwwU3VBSDFOVWE2bkJBaFNMY3AxMFZaWUhSMDVCcGtwQm5HWmZ6a1NoSytPUVFlQzVLWUpJNlgzN0wyMDFBczVmYk1RQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25WaWN0b3JpYVBob3RvLmEwZmNiOGJmZTg3OTRmODlhODM2ZTIwYjJlNmI0OWJlLnBuZ1wiLFwiaGVpZ2h0XCI6Nzk5LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFJQ0FZQUFBQXg4VFU3QUFBQXFFbEVRVlI0MmdWQVFRdkJVQUQrM2p5c3RXeWt5S0xJd21GeGMzUDBVL3cwLzhKMU5hVlpIQlF1UzJJeldqSGJ5OXNUbVMyVytTOWxtR2dCbkxpRmd1Q2cwMkdkU0N4R2REeUx1VFVnbHRrRTFUVUZNaytnR0NvWmp5b3crdzFJVms4RFQ1L2dXWW9vdU1BK3ZDQ2QvS3NvNVpISWlTdzhieXRxTWhNU3U3dkl2Z2swM2NEbnpiQ3hWNkI3ZDQyYkgwQ3Q2bmlFSWRrNUdTaEJDZTF1QjV4ekZDbEZzYXpnRDVYeVJ5eHREZlJMQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLjZmZWVkMzM0ZmQwOTZiYmM0ZjU4YjgzZDdiNTQ3ZjViLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXJVbEVRVlI0MmhYTVFRN0JRQlFHNFA5bFhxZG9OUWdWTm03aHNrNGdEbURoR2hZU2NRQWhRdE5XT3pOOVQrMi9mSFE2N01VNklYRXRpc2NkbktZWXorYWFqQktFS0NiZVhSNm9tMGFkQ3Q3M0NxQUt3K3dGcWgzRzFpcFA4NXdTNmRBSTRFMEpNZ2I1TW9YdlJJTXdzZnBXMVFzTmJZVE56R0E2VUZoVGF4azYyUFlOWG9VbjRnR3JBTkN5d0w4eWt4RW1UR2krTitYcjhRVG4yMzZPMUdWYmlydFBqODRhRUNOYnJPa0h0RkpVVUtadFFwTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8uMDk0ZmEyNTg2N2IzZmFhYTJjNzg5ZGFmNDRmMTM5OGEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBeGtsRVFWUjQyZzNNTzA0Q1VSU0E0ZjhNbDVrTE04UERDUEdaMlBoZ0RjYUNSQ3V0cmQyR0N6Q3hkeGt1d2NhU1Nuc3JiZFNnTmhJWTRENE9mQXY0NU83aE1mcTBJV0xxNU0yVU1yZHNGRmIzTzVaV0xZalpybFhNRFZwc1duYUxsRzRHN1diZ2FmVE0rT05OWlhCeXBNei9HSjZkTXp3K3BOZHA4RDd4M056ZTYvWHBnY2pWeFdWMEl0TGY2alBvbHV5VWRWNitadnI2ejNwTHhMUjZlN2lvV3ZtRTBYZUYvVjBpM3RGRzhOT2xtcytmTVpsSkpjOHlOU0ZJU0JJV3ptbEU4VkZsQlhMK1JVMGFDZHp6QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWNsYXJlblBob3RvLmVjNGY2MTBkNWMxZWEyZWVkYzU1NGQyNWUyMzNlYjY3LnBuZ1wiLFwiaGVpZ2h0XCI6ODkwLFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFJQ0FZQUFBRGVNMTRGQUFBQWswbEVRVlI0bkFHSUFIZi9BWHA3Y2Y0UERRNEFCZ2NIQU43ZzVBQUJqcGFVL2dVRkJnQUVBZ0lBenMzTUFBSFF3NjcvNWZEMkFQYjA4d0RUMWRjQUFhK1lmLy8zQlJUL0JnMEpBT1BvOFFFQmpJSjcvOXZKendBWEZnNEEyL0gxQUFGZFYxRCs0TnpoQU8zYzRnRCtGQTRBQVQ0NU12LzMvUUQvL2Y3L0FmbjQrZ0FCTWk4cy92MzkvZ0Q1Ky93QS9QNy9BQTNFUXVSMUIybzVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9ub3RyZURhbWVQaG90by5jYWFjMGQ3OTkxYzIyNGFiZTkwNGQ0NDBhYjczMWE0OS5wbmdcIixcImhlaWdodFwiOjY2NyxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUF3MGxFUVZSNDJnVkF6VW9DUVJ6Ly9XYkdiV3pkVVNLNmRTZ1E2bFFQMEJ0MDZRRzc5Z2hlUEVWMEx3cWtDQkowL1lCQjNmVUQxOVhadi9ENXBWTXhiRUNwWUU5alhMVnZjZDV5VUJvN1pxTWVmUHJMU0pPUlRiRGFsbFFYclJPSlZJRnlPWURWQnpSc0RkTzBMOGIvZnpNVUJWRHVrUHNCL25vZmVIdnQwdmpoRkxQRFRCckpHZlA1Qk9NMFExeDNNTnU2azd1YmU5UTBFU21pMDMzSDErZVBtTXZyTmpRMWxuTXZpeXlITmNEVDR3TlVZalZsdjBZVjlwUVEyRXhpdUtiakVZaXhUN0djdnZ3WEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8uZjVkZjUyYzJmYjVkNzhjZmZiZGI4ZTY1OGM5NzE5ZTMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBdzBsRVFWUjQyZ1dBdnk4RFVSekFQOS9YOTNyWGE2OTRKM1dEQVltRVJOaHRCdkUvMm14R2k5VXFFaEdFV0F3V2FZZ0xQYjNyOWNmZHQ1SERvNFBtK2VsRkxpNnYyZC9kNHZ6cWxZOGYxWGsxWVZ4T3hhNTBZbExRbTl0N2NwZGllaEhlV0g0elE5U3lhZ2RoS085QVlHdE1xeUZaZGFTYkE0WkRwM2srRWR2ZjJkYmpKQmJmQytqV0dmWFhHM3RlZE0xWGZKb0tPVHM5YWFLZ2pUUENldUlweXlsM0Q0K2tHekd6MlJ5Yi9TMFl0NUZPNFBTLytCWlF3bTVmczFGRlVZeGtDV3VWUi9rUW9PblpBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9wbGF5aW5nSUVNUGhvdG8uMmY1ZjRmYzVmNDEyNjZlMzRkYmY1ZDc5YjBkNDVjNzQucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd1VsRVFWUjQyZ1ZBMzJzQmNRRC9mTXcydCt0N055UFdicnViM0hhYkZFK0tQSXJ5VnlzdnlvTlM2dnlNdUJBZDNZdE91YS9ZK0MxRlZlMUdFWjdSRlQ4UWlUZWtVa2taSklEcnh4Zmp6R1R4R0t4a1dsRmhiQVBvelR6S2xRSVdtb013NjhoWWJUYmd3M0RNay9yT3piOUowemI0WFhRby9Ubmloem5acy82aWp1ZlNyVGZoV1Nhd0hPUFRlSlU3UHdRVm5Xemw3RWpJQzVMYU0zS0t3RG1tWWpKejRSMTg5QUV3RFVSSGdHMHJJNjJYSi9xNmpYekJsdGY5R3NGMHhEc3JQMEdlS1VaMzdBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9yeXNpYW5rYVBob3RvLmI4YjUwMzYxNDA1NzM0MjM5MTNhNzAzYmY4ZDk5YjY3LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXprbEVRVlI0bkEzS3ZVcENZUmpBOGY5enp0djdtbFlTZENwQm0ycUliSWh1b2t1SWh1Z09hdEdsdWJ0bzdEcmFvaUNpRDNLUWtqVEZiemh5MEVHVTk5SHB0L3prN3Y3TlMyZ2t0QWFYdHF5dE8rYWd1MW5IT0lsRkhoNS92YkVXNDFaSVp4eXBwVE8vSEY0SkJlUzZmS3Q3K1R6OWFjQk9GSkhMUmFSV00xanJORUJGQ3R2NDR0R0JaRGMyU1NZQmxlOTNHZ09qKzhVVG1yMUVwSFJ6NForZVB6ZzlQR2FyWUdqM2hyeSsvREdLQnlnV0taZk9mS2NleStYNWxWWXJuMUt2VmFsMVo5cG90Zm42K1pjRkZjNUh3bHBDMXlnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3NraVN3aXNzUGhvdG8uZDVmM2JiOWM5NmVmM2VjMTI3NmZmZTNlMjA4MzYyZjIucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBbzBsRVFWUjRuQTJPdXc0QlFSaUZ6NWtaV1NKQjRlRWxPaEdsam1oRXBkUXBQSUpxczVOZFpzM2wvMDE3cmgrM2g1Tk1adzFKZzVneVlnR1FrenBMVEp3aGorZWJEQ0dDVlZmWDROMzkwT2lJOVdxT3JodkF4L09sT1JlMGJZZVVFMG9SK0Q2Z0NOWDd2aTVjN3VJbWp0WWFHSzBYNDRoVXFIMUlVRkZ5ZDd3S1NLZ0NuMitBOXdPV3F3VTBTdzFVYTdNL1MyMVRSTlZZMGxtTEdMT0dNYUVpOGcvelUyR0N3NlkvdEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3N1c2hpUGhvdG8uZjk5NTBjNDg3ZTg0NTRlMjRlYjM3MTJkZDIzZGMzNGUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd2tsRVFWUjQyZzNLVGFzQlVSd0g0TjkvenBuUm1SdjNqanNLSVlTOGxMTEJ5a2VRbFcrc0ZMRWlDK1ZsZ1JKR1hwcUdjdzZMWi9kUXQ1VldkdnlIK0pGRFNndi9UaGpFVEMzOUFBWXg0dUYwQ2ZMcDY4TnlnSkFkZy9JalNHYUxVTld2YitURzlrcm1VeUo0V2Rqc2pxaEdYZVNiSFp5Y2lINkVCRkV2QVNYL1hPbzNDN0FoWURiYW1FNFcrcDRxNExkU0orNFpVUWlwTkJJMU9Ma3k0TWFROFc2WWpjWklpYmZtNzBEaGJERWF6dGU2WVRMS3N5dHNUdHE0N09HdEJIMEFZWkpEcjlRamlMQUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zd2lzc011cnJlblBob3RvLjY1MmQ4ZTMzMTBhOTYzOTFlODlkN2NjOWJhMmZhMDM0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDU3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqMGxFUVZSNG5BR0VBSHYvQVdHYjJmOFVDd1AvQ1FMOUFBUUMvZ0QyNnVNQi92cjMveE1NQkFBd0xpZ0JBV1NKdS84Q0Jnai8rZmZ6QUFqdzJBQUxEaElCOXZQdi8vOEJCUUFGREJRQUFjUEh6UCtMbXIzLzVBZ1dBRVgvMWdEN0NCRUI3Z3NYL3dMNytRRDI4L0FBQWJXdXEvL00wZHYvOXc0WEFCeXlxQUQ4TmtBQkN6by8vd2I5K1FEMytmd0JMcnM5TXNidGQ1QUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zd2lzc1Bpekdsb3JpYVBob3RvLjZkNGQ5OGE4NmJjYmIwYTA5MWZlYmQ1ZTA5OTQ5MDYzLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhFbEVRVlI0bkIzT3ZRN0JVQmdHNFBkcnRkUmZJeWxTa2REQkpuWkdrd3V3dWdleE1kdkY3QWJFYmpOWUpGeUN3V2pDUWYrMHBlY1FOL0Rrb1dKdnhvWHJreFQ0aU1NWFpCNGg1aEJ2TGtNa1UwU3Q0WnJmbUl2ejFRYkNBUEFqSUtOQ04zSklxd3FvUFZxSlFscEQxY2orQlVOUDRlTThZWitPSXQ5cUVuWDdFejdvZDBqVk5MRGJCWXhkRVhpUzBCVUpacU5DdEZpdWVlQjdjR3dQN1A2QVZhK2haSnJZYkhlUUl3YzBuczU1dVdTUW5FZ0tJb2tzeTRLcVFCejJCengvK1M5K2VGRm5PWFEzQUFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3dhbGVzUGhvdG8uMjczYjIxODFhYmU2Y2M3NjFlMjk5ZTczZGFjNDFlNWUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBMFVsRVFWUjRuQUhHQURuL0FjelIzUDREQmdVQkFRTUNBQWtHQ0FENitma0Evdi8vLy83Ly93QUNBQUVCQWM3VjMvNzg4ZkVBNTd1OUFCRTlPd0FPR2hrQTlmUDFBUDRCQUFEZjN0d0FBY0xJei8vaHhNTUEzSFJ1QUJkMVpBQXJWR3NBOC9Ed0FPbnM2Ly9XMXM4QkFZaUdpZjcxdTdrQnorM0FBQm9tU0FBZEx6b0E5ZWpnL3dRTEVBQUEvUG9CQVdaeGV2NE4xOWdBOHJ2SUFQUTNLZ0FWSGhBQUloSU5BQWtaSUFEdTRkb0FBVDVVWVA0NTd1b0JMK2ZwLy9zRkNBSFlNQ1VBR3c0Qy93SUpEZ0FEQkFNQk5sdFVGaU4xa1lZQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcHJvZmlsZVBpY3R1cmUuNDM3MDAzNDgxY2YwMzcyMzhkZWM5ZmNhZGJiMjMyNjguanBnXCIsXCJoZWlnaHRcIjo4MjIsXCJ3aWR0aFwiOjgwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFvS0Nnb0tDZ3NNREFzUEVBNFFEeFlVRXhNVUZpSVlHaGdhR0NJeklDVWdJQ1VnTXkwM0xDa3NOeTFSUURnNFFGRmVUMHBQWG5GbFpYR1BpSSs3dS9zQkNnb0tDZ29LQ3d3TUN3OFFEaEFQRmhRVEV4UVdJaGdhR0JvWUlqTWdKU0FnSlNBekxUY3NLU3czTFZGQU9EaEFVVjVQU2s5ZWNXVmxjWStJajd1NysvL0NBQkVJQUFnQUNBTUJJZ0FDRVFFREVRSC94QUFVQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFDLzlvQUNBRUJBQUFBQUYvL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFQ0VBQUFBSC8veEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVERUFBQUFILy94QUFkRUFBQ0FRUURBQUFBQUFBQUFBQUFBQUFCQWdRQUF3VWhFaFF5LzlvQUNBRUJBQUUvQUpHVGk5K09RYjJuNEJrOGs3VWl2Ly9FQUJRUkFRQUFBQUFBQUFBQUFBQUFBQUFBQUFELzJnQUlBUUlCQVQ4QWYvL0VBQlFSQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRTUJBVDhBZi8vWlwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhYm91dENvbnRhaW5lclwiOiBcImFib3V0X2Fib3V0Q29udGFpbmVyX18xeW8tSVwiLFxuXHRcImNvbnRlbnRcIjogXCJhYm91dF9jb250ZW50X18xc1dETFwiLFxuXHRcInN1bW1hcnlcIjogXCJhYm91dF9zdW1tYXJ5X19qM2t1MVwiLFxuXHRcImhvYmJpZXNcIjogXCJhYm91dF9ob2JiaWVzX18xMGFOS1wiLFxuXHRcIm5ld3NsZXR0ZXJzXCI6IFwiYWJvdXRfbmV3c2xldHRlcnNfXzFYZTROXCIsXG5cdFwiY29tbWlzc2lvbnNcIjogXCJhYm91dF9jb21taXNzaW9uc19fMTBvQ0JcIixcblx0XCJzY3JvbGxHYWxsZXJ5XCI6IFwiYWJvdXRfc2Nyb2xsR2FsbGVyeV9fWlFDMmVcIixcblx0XCJoaW50XCI6IFwiYWJvdXRfaGludF9fMU84UnVcIixcblx0XCJwdWxzZVwiOiBcImFib3V0X3B1bHNlX18xeEhuRlwiLFxuXHRcInBob3RvR2FsbGVyeVwiOiBcImFib3V0X3Bob3RvR2FsbGVyeV9fbmVrak1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBob3RvR3JpZFwiOiBcInBob3RvZ3JpZF9waG90b0dyaWRfXzM2bTJOXCIsXG5cdFwiZ2FtZVwiOiBcInBob3RvZ3JpZF9nYW1lX18yaHkxX1wiLFxuXHRcInNraVwiOiBcInBob3RvZ3JpZF9za2lfXzM3dzBqXCIsXG5cdFwiY2FyXCI6IFwicGhvdG9ncmlkX2Nhcl9fNExWYTVcIixcblx0XCJza3lzY3JhcHBlclwiOiBcInBob3RvZ3JpZF9za3lzY3JhcHBlcl9fM3lhWGpcIixcblx0XCJsYWtlXCI6IFwicGhvdG9ncmlkX2xha2VfXzFQSjRIXCIsXG5cdFwibW9udW1lbnRcIjogXCJwaG90b2dyaWRfbW9udW1lbnRfXzNyei0wXCIsXG5cdFwic3VzaGlcIjogXCJwaG90b2dyaWRfc3VzaGlfX19YSVNjXCIsXG5cdFwiYm9vdHNcIjogXCJwaG90b2dyaWRfYm9vdHNfXzJlczh3XCIsXG5cdFwid2F0ZXJmYWxsXCI6IFwicGhvdG9ncmlkX3dhdGVyZmFsbF9fMXRWT2dcIixcblx0XCJjcm9zc1wiOiBcInBob3RvZ3JpZF9jcm9zc19fMm1SNlBcIixcblx0XCJib3dsaW5nXCI6IFwicGhvdG9ncmlkX2Jvd2xpbmdfX29aajZWXCIsXG5cdFwibWFuY2hlc3RlclwiOiBcInBob3RvZ3JpZF9tYW5jaGVzdGVyX19ILW5vY1wiLFxuXHRcImFyc2VuYWxcIjogXCJwaG90b2dyaWRfYXJzZW5hbF9fM1RkR0VcIixcblx0XCJjaGVsc2VhXCI6IFwicGhvdG9ncmlkX2NoZWxzZWFfXzEyNUJkXCIsXG5cdFwid2FsZXNcIjogXCJwaG90b2dyaWRfd2FsZXNfXzE4N2VIXCIsXG5cdFwiYWxwc1wiOiBcInBob3RvZ3JpZF9hbHBzX19Jb3JyTFwiLFxuXHRcImNodXJjaFwiOiBcInBob3RvZ3JpZF9jaHVyY2hfXzFnWE1rXCIsXG5cdFwibXVycmVuXCI6IFwicGhvdG9ncmlkX211cnJlbl9fMVIwbWlcIixcblx0XCJlaWZmZWxcIjogXCJwaG90b2dyaWRfZWlmZmVsX19WNjJTcVwiLFxuXHRcImJyaWRnZVwiOiBcInBob3RvZ3JpZF9icmlkZ2VfXzNMV0poXCIsXG5cdFwiY2xpbWJcIjogXCJwaG90b2dyaWRfY2xpbWJfXy1BbTlEXCIsXG5cdFwiYmFyY2FcIjogXCJwaG90b2dyaWRfYmFyY2FfXzI2cFAyXCIsXG5cdFwiY29sb3JVcFwiOiBcInBob3RvZ3JpZF9jb2xvclVwX18zd1otRFwiLFxuXHRcInBob3RvSW5mb1wiOiBcInBob3RvZ3JpZF9waG90b0luZm9fXzFBaVZ6XCIsXG5cdFwiZmFkZUluXCI6IFwicGhvdG9ncmlkX2ZhZGVJbl9fMzVqdHBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcImZvb3Rlcl9mb290ZXJfX3hLSXFIXCIsXG5cdFwiZ29VcFNxdWFyZVwiOiBcImZvb3Rlcl9nb1VwU3F1YXJlX18yUGNLUlwiLFxuXHRcImNvcHlyaWdodHNcIjogXCJmb290ZXJfY29weXJpZ2h0c19fMi1pbW9cIixcblx0XCJpY29uc1wiOiBcImZvb3Rlcl9pY29uc19fMlV4X19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFib3V0SW5mb1wiOiBcIm1haW5oZWFkZXJfYWJvdXRJbmZvX18xdzZ1LVwiLFxuXHRcImhlYWRlclwiOiBcIm1haW5oZWFkZXJfaGVhZGVyX18yZHc4MVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGVjaG5vbG9naWVzSWNvbnNcIjogXCJ0b29sc3RlY2hfdGVjaG5vbG9naWVzSWNvbnNfXzNuZDFzXCIsXG5cdFwidGVjaG5vbG9naWVzSWNvbnNSb3dcIjogXCJ0b29sc3RlY2hfdGVjaG5vbG9naWVzSWNvbnNSb3dfXzFxbVNNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpY29uQ29udGFpbmVyXCI6IFwiaWNvbl9pY29uQ29udGFpbmVyX18zalVJNFwiLFxuXHRcImljb25cIjogXCJpY29uX2ljb25fXzE3VHFZXCIsXG5cdFwiaWNvbkFjdGl2ZVwiOiBcImljb25faWNvbkFjdGl2ZV9fMUY0NjJcIixcblx0XCJmYWRlSW5cIjogXCJpY29uX2ZhZGVJbl9fZXBXc3NcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbnVCYXJcIjogXCJtZW51YmFyX21lbnVCYXJfXzJYVzZrXCIsXG5cdFwidGl0bGVcIjogXCJtZW51YmFyX3RpdGxlX18zeUtRalwiLFxuXHRcInNxdWFyZUluaXRpYWxzXCI6IFwibWVudWJhcl9zcXVhcmVJbml0aWFsc19fMmZJYzNcIixcblx0XCJuYW1lXCI6IFwibWVudWJhcl9uYW1lX18zWWV3dVwiLFxuXHRcInRhYlwiOiBcIm1lbnViYXJfdGFiX19tSG8wbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGltZWxpbmVHcmlkXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZF9fRk5DTklcIixcblx0XCJ0aW1lbGluZUdyaWRJdGVtXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1fXzNCcTlxXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbUNhcmRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbUNhcmRfXzNqd1NiXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmRfXzNQYk1yXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbVdpZGVcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbVdpZGVfXzFMdDBKXCIsXG5cdFwidGltZWxpbmVQb2ludFwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZVBvaW50X18xOU9jMFwiLFxuXHRcImhvdmVyVGlwXCI6IFwidGltZWxpbmVncmlkX2hvdmVyVGlwX19FdTUxRVwiLFxuXHRcInB1bHNlXCI6IFwidGltZWxpbmVncmlkX3B1bHNlX18xQ3pQcVwiLFxuXHRcImNhcmRDb250ZW50XCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50X18zUkNSeVwiLFxuXHRcImNhcmRDb250ZW50SGVhZGVyXCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50SGVhZGVyX18xTkdLNVwiLFxuXHRcImNvbXBhbnlJbmZvXCI6IFwidGltZWxpbmVncmlkX2NvbXBhbnlJbmZvX19NN0xJZlwiLFxuXHRcImNvbXBhbnlUaXRsZVwiOiBcInRpbWVsaW5lZ3JpZF9jb21wYW55VGl0bGVfXzJISlVNXCIsXG5cdFwiY29tcGFueUxvZ29cIjogXCJ0aW1lbGluZWdyaWRfY29tcGFueUxvZ29fXzM1cTRqXCIsXG5cdFwiY2FyZENvbnRlbnREZXRhaWxzXCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50RGV0YWlsc19fM1Z3cmJcIixcblx0XCJjYXJkQ29udGVudERlc2NyaXB0aW9uXCI6IFwidGltZWxpbmVncmlkX2NhcmRDb250ZW50RGVzY3JpcHRpb25fXzJCaUtUXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b29sdGlwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=
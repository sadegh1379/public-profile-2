(function() {
var exports = {};
exports.id = "pages/about/about";
exports.ids = ["pages/about/about"];
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
/* harmony export */   "londonCanaryPhoto": function() { return /* reexport safe */ _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_84__.default; }
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
      children: ["\xA92021", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
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
        href: "https://www.linkedin.com/in/karolina-hudziec-0b2ba815a",
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
        href: "mailto:khudziec@gmail.com",
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
        href: "https://github.com/FutureInventor",
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
      }, this), (0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("I'm Karolina.", 50, 200)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: (0,_typingtext__WEBPACK_IMPORTED_MODULE_2__.useTypedText)("Welcome on my portfolio page! I'm a Software Developer & Content Creator, currently working as TypeScript React Web Developer. Living in Cracow, Poland.", 30, 350)
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
        lineNumber: 49,
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
        lineNumber: 56,
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
        lineNumber: 63,
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
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.angularLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.angularLogoHover,
        height: "50px",
        width: "50px",
        name: "Angular",
        tooltipID: "angular-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
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
        lineNumber: 84,
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
        lineNumber: 91,
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
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
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
        lineNumber: 107,
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
        lineNumber: 114,
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
        lineNumber: 121,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jestLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.jestLogoHover,
        height: "50px",
        width: "50px",
        name: "Jest",
        tooltipID: "jest-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.mysqlLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.mysqlLogoHover,
        height: "70px",
        width: "70px",
        name: "MySQL",
        tooltipID: "mysql-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.pythonLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.pythonLogoHover,
        height: "55px",
        width: "55px",
        name: "Python",
        tooltipID: "python-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
        lineNumber: 151,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.affinityLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.affinityLogoHover,
        height: "50px",
        width: "50px",
        name: "Affinity",
        tooltipID: "affinity-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.davinciLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.davinciLogoHover,
        height: "50px",
        width: "50px",
        name: "DaVinci Resolve",
        tooltipID: "davinci-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
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
        lineNumber: 172,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_2__.VIcon, {
        defaulIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.linuxLogo,
        onHoverIcon: _assets__WEBPACK_IMPORTED_MODULE_3__.linuxLogoHover,
        height: "50px",
        width: "50px",
        name: "Ubuntu Linx",
        tooltipID: "linux-tooltip"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
          children: "KH"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          className: (_menubar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name),
          children: "Karolina Hudziec"
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/work`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/about`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/about/about.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vcGFnZXMvYWJvdXQvYWJvdXQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9hYm91dC9waG90b2dyaWQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9kYXRlLnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9mb290ZXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL21haW5oZWFkZXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL3Rvb2xzdGVjaC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2ljb24udHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvbWVudWJhci50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL3R5cGluZ3RleHQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy93b3JrL3RpbWVsaW5lZ3JpZC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9jaGV2cm9uRG93bi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMi5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvbG9nb0NvbW1pc3Npb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2FmZmluaXR5TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2JlbGF5VGhlQ3BwTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ib25vYm9QcmVzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9jc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzVHJpY2tzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ2l0TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9naXRodWJIb3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9nbWFpbC5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9nbWFpbEhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2hhc2hub2RlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9odG1sTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9odG1sTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2plc3RMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvanNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2pzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xlc3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xlc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGlua2VkaW4uc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGlua2VkaW5Ib3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9saW51eExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGludXhMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL215c3FsTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25vYmxlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ucG1Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25wbUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3B5dGhvbkxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvcmVhY3RMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2Fzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9zaXRlUG9pbnRMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3RzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy90c0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy91c0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdnNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3dhc2tvTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3lhcm5Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3lhcm5Mb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2JhcmNlbG9uYVNhZ3JhZGFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvYm93bGluZ1Bob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9jb3AyNFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9mcmFuY2VMYVNhbGV0dGVQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvZ2lld29udFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9pY2VsYW5kV2F0ZXJmYWxsUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvbkFyc2VuYWxQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uQ2FuYXJ5UGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvbkNoZWxzZWFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uVG93ZXJCcmlkZ2VQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uVmljdG9yaWFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL21jbGFyZW5QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvbm90cmVEYW1lUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3BsYXlpbmdJRU1QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvcnlzaWFua2FQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc2tpU3dpc3NQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc3VzaGlQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc3dpc3NNdXJyZW5QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc3dpc3NQaXpHbG9yaWFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvd2FsZXNQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9wcm9maWxlUGljdHVyZS5qcGciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3BhZ2VzL2Fib3V0L2Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9hYm91dC9waG90b2dyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS9tYWluaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL3Rvb2xzdGVjaC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaWNvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvbWVudWJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvd29yay90aW1lbGluZWdyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtdG9vbHRpcFwiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2lnbm9yZWR8RTpcXHdlYiBkZXNpZ25lclxcbmV4dCBqc1xcbXlfcHJvamVjdHNcXFBvcnRmb2xpby1zYWRlZ2hcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJJbWFnZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ2YWx1ZSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJWQWJvdXQiLCJjc3NUcmlja3NMb2dvIiwiYmVsYXlUaGVDcHBMb2dvIiwiZHJpYmJibGVMb2dvIiwiaGFzaG5vZGVMb2dvIiwiYm9ub2JvUHJlc3NMb2dvIiwic2l0ZVBvaW50TG9nbyIsImZyZWVDb2RlQ2FtcExvZ28iLCJsb2dvQ29tbWlzc2lvbiIsInNjaGVtZUNvbW1pc3Npb24iLCJwb3N0ZXJDb21taXNzaW9uIiwiY29taWNDb21taXNzaW9uMSIsImNvbWljQ29tbWlzc2lvbjIiLCJWUGhvdG9HcmlkIiwidXNlVHlwZWRUZXh0IiwiYmFyY2Vsb25hU2FncmFkYVBob3RvIiwibG9uZG9uVG93ZXJCcmlkZ2VQaG90byIsImNsaW1iaW5nVG9wUGhvdG8iLCJwYXJpc0VpZmZlbFBob3RvIiwic3dpc3NNdXJyZW5QaG90byIsIm5vdHJlRGFtZVBob3RvIiwiZnJhbmNlTGFTYWx0dGVQaG90byIsIndhbGVzUGhvdG8iLCJsb25kb25DaGVsc2VhIiwibG9uZG9uQXJzZW5hbFBob3RvIiwibWFuY2hlc3RlclVuaXRlZFBob3RvIiwiYm93bGluZ1Bob3RvIiwiZ2lld29udFBob3RvIiwiaWNlbGFuZFdhdGVyZmFsbFBob3RvIiwicnlzaWFua2FQaG90byIsInN1c2hpUGhvdG8iLCJsb25kb25WaWN0b3J5UGhvdG8iLCJtYXp1cnlEYXduUGhvdG8iLCJsb25kb25DYW5hcnlQaG90byIsIm1jbGFyZW5QaG90byIsInNraVN3aXNzUGhvdG8iLCJwbGF5aW5nSUVNUGhvdG8iLCJnZXREYXRlIiwiZGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJWRm9vdGVyIiwiZ29VcFNxdWFyZSIsImxpbmtlZEluTG9nbyIsImxpbmtlZEluTG9nb0hvdmVyIiwiZ21haWxMb2dvIiwiZ21haWxMb2dvSG92ZXIiLCJnaXRIdWJMb2dvIiwiZ2l0SHViTG9nb0hvdmVyIiwiVk1haW5IZWFkZXIiLCJWVG9vbHNUZWNoIiwiaHRtbExvZ28iLCJodG1sTG9nb0hvdmVyIiwiY3NzTG9nbyIsImNzc0xvZ29Ib3ZlciIsImpzTG9nbyIsImpzTG9nb0hvdmVyIiwicmVhY3RMb2dvIiwicmVhY3RMb2dvSG92ZXIiLCJhbmd1bGFyTG9nbyIsImFuZ3VsYXJMb2dvSG92ZXIiLCJ0c0xvZ28iLCJ0c0xvZ29Ib3ZlciIsInNhc3NMb2dvIiwic2Fzc0xvZ29Ib3ZlciIsImxlc3NMb2dvIiwibGVzc0xvZ29Ib3ZlciIsIm5wbUxvZ28iLCJucG1Mb2dvSG92ZXIiLCJ5YXJuTG9nbyIsInlhcm5Mb2dvSG92ZXIiLCJnaXRMb2dvIiwiZ2l0TG9nb0hvdmVyIiwiamVzdExvZ28iLCJqZXN0TG9nb0hvdmVyIiwibXlzcWxMb2dvIiwibXlzcWxMb2dvSG92ZXIiLCJweXRob25Mb2dvIiwicHl0aG9uTG9nb0hvdmVyIiwidnNMb2dvIiwidnNMb2dvSG92ZXIiLCJhZmZpbml0eUxvZ28iLCJhZmZpbml0eUxvZ29Ib3ZlciIsImRhdmluY2lMb2dvIiwiZGF2aW5jaUxvZ29Ib3ZlciIsIndpbmRvd3NMb2dvIiwid2luZG93c0xvZ29Ib3ZlciIsImxpbnV4TG9nbyIsImxpbnV4TG9nb0hvdmVyIiwiVkljb24iLCJ0b29sdGlwSUQiLCJvbkhvdmVySWNvbiIsImRlZmF1bEljb24iLCJWTWVudUJhciIsImFjdGl2ZVRhYiIsImNvbG9yIiwic3BlZWQiLCJkZWxheVRpbWUiLCJ0ZXh0U3RhdGUiLCJzZXRUZXh0U3RhdGUiLCJSZWFjdCIsImNoYXJzIiwiaW50ZXJ2YWwiLCJ0aW1lciIsInByZXZUZXh0IiwibmV3VGV4dCIsImNvbmNhdCIsIlZUaW1lbGluZUdyaWQiLCJ0aW1lbGluZVBvaW50IiwidXNMb2dvIiwidGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmQiLCJ0aW1lbGluZUdyaWRJdGVtIiwid2Fza29Mb2dvIiwiYmFja2dyb3VuZENvbG9yIiwibm9ibGVMb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyx3R0FBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlDOzs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7QUNoQkEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2Fib3V0L2Fib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBodG1sTG9nbyB9IGZyb20gJy4vbG9nb3MvaHRtbExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGh0bWxMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2h0bWxMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzc0xvZ28gfSBmcm9tICcuL2xvZ29zL2Nzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNzc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvY3NzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYXNzTG9nbyB9IGZyb20gJy4vbG9nb3Mvc2Fzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhc3NMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3Nhc3NMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGpzTG9nbyB9IGZyb20gJy4vbG9nb3MvanNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvanNMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlYWN0TG9nbyB9IGZyb20gJy4vbG9nb3MvcmVhY3RMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWFjdExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvcmVhY3RMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHRzTG9nbyB9IGZyb20gJy4vbG9nb3MvdHNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0c0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvdHNMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZ3VsYXJMb2dvIH0gZnJvbSAnLi9sb2dvcy9hbmd1bGFyTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYW5ndWxhckxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvYW5ndWxhckxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGVzc0xvZ28gfSBmcm9tICcuL2xvZ29zL2xlc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsZXNzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9sZXNzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnbWFpbExvZ28gfSBmcm9tICcuL2xvZ29zL2dtYWlsLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnbWFpbExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvZ21haWxIb3Zlci5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbnBtTG9nbyB9IGZyb20gJy4vbG9nb3MvbnBtTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbnBtTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9ucG1Mb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHlhcm5Mb2dvIH0gZnJvbSAnLi9sb2dvcy95YXJuTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgeWFybkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MveWFybkxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0SHViTG9nbyB9IGZyb20gJy4vbG9nb3MvZ2l0aHViLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRIdWJMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2dpdGh1YkhvdmVyLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRMb2dvIH0gZnJvbSAnLi9sb2dvcy9naXRMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaXRMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2dpdExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgamVzdExvZ28gfSBmcm9tICcuL2xvZ29zL2plc3RMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqZXN0TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9qZXN0TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5rZWRJbkxvZ28gfSBmcm9tICcuL2xvZ29zL2xpbmtlZGluLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW5rZWRJbkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbGlua2VkaW5Ib3Zlci5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbXlzcWxMb2dvIH0gZnJvbSAnLi9sb2dvcy9teXNxbExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG15c3FsTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9teXNxbExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHl0aG9uTG9nbyB9IGZyb20gJy4vbG9nb3MvcHl0aG9uTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHl0aG9uTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9weXRob25Mb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHZzTG9nbyB9IGZyb20gJy4vbG9nb3MvdnNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2c0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvdnNMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFmZmluaXR5TG9nbyB9IGZyb20gJy4vbG9nb3MvYWZmaW5pdHlMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZmZpbml0eUxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdmluY2lMb2dvIH0gZnJvbSAnLi9sb2dvcy9kYXZpbmNpTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZGF2aW5jaUxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2luZG93c0xvZ28gfSBmcm9tICcuL2xvZ29zL3dpbmRvd3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aW5kb3dzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsaW51eExvZ28gfSBmcm9tICcuL2xvZ29zL2xpbnV4TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGludXhMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2xpbnV4TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBub2JsZUxvZ28gfSBmcm9tICcuL2xvZ29zL25vYmxlTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2Fza29Mb2dvIH0gZnJvbSAnLi9sb2dvcy93YXNrb0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzTG9nbyB9IGZyb20gJy4vbG9nb3MvdXNMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NUcmlja3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9jc3NUcmlja3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBiZWxheVRoZUNwcExvZ28gfSBmcm9tICcuL2xvZ29zL2JlbGF5VGhlQ3BwTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm9ub2JvUHJlc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9ib25vYm9QcmVzc0xvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRyaWJiYmxlTG9nbyB9IGZyb20gJy4vbG9nb3MvZHJpYmJibGVMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBmcmVlQ29kZUNhbXBMb2dvIH0gZnJvbSAnLi9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBoYXNobm9kZUxvZ28gfSBmcm9tICcuL2xvZ29zL2hhc2hub2RlTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2l0ZVBvaW50TG9nbyB9IGZyb20gJy4vbG9nb3Mvc2l0ZVBvaW50TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJvZmlsZVBpY3R1cmUgfSBmcm9tICcuL3Byb2ZpbGVQaWN0dXJlLmpwZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjaGV2cm9uRG93biB9IGZyb20gJy4vY2hldnJvbkRvd24uc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBvc3RlckNvbW1pc3Npb24gfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9wb3N0ZXJDb21taXNvbi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9nb0NvbW1pc3Npb24gfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9sb2dvQ29tbWlzc2lvbi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29taWNDb21taXNzaW9uMSB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjEucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbWljQ29tbWlzc2lvbjIgfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24yLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzY2hlbWVDb21taXNzaW9uIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvc2NoZW1lQ29tbWlzc2lvbi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmFyY2Vsb25hU2FncmFkYVBob3RvIH0gZnJvbSAnLi9waG90b3MvYmFyY2Vsb25hU2FncmFkYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBib3dsaW5nUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9ib3dsaW5nUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNsaW1iaW5nVG9wUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb3AyNFBob3RvIH0gZnJvbSAnLi9waG90b3MvY29wMjRQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZnJhbmNlTGFTYWx0dGVQaG90byB9IGZyb20gJy4vcGhvdG9zL2ZyYW5jZUxhU2FsZXR0ZVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBnaWV3b250UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9naWV3b250UGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGljZWxhbmRXYXRlcmZhbGxQaG90byB9IGZyb20gJy4vcGhvdG9zL2ljZWxhbmRXYXRlcmZhbGxQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uQXJzZW5hbFBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uQXJzZW5hbFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25DaGVsc2VhIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uQ2hlbHNlYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBsb25kb25Ub3dlckJyaWRnZVBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uVG93ZXJCcmlkZ2VQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uVmljdG9yeVBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uVmljdG9yaWFQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWFuY2hlc3RlclVuaXRlZFBob3RvIH0gZnJvbSAnLi9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtYXp1cnlEYXduUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1jbGFyZW5QaG90byB9IGZyb20gJy4vcGhvdG9zL21jbGFyZW5QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm90cmVEYW1lUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9ub3RyZURhbWVQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcGFyaXNFaWZmZWxQaG90byB9IGZyb20gJy4vcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBsYXlpbmdJRU1QaG90byB9IGZyb20gJy4vcGhvdG9zL3BsYXlpbmdJRU1QaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcnlzaWFua2FQaG90byB9IGZyb20gJy4vcGhvdG9zL3J5c2lhbmthUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNraVN3aXNzUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9za2lTd2lzc1Bob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzdXNoaVBob3RvIH0gZnJvbSAnLi9waG90b3Mvc3VzaGlQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3dpc3NNdXJyZW5QaG90byB9IGZyb20gJy4vcGhvdG9zL3N3aXNzTXVycmVuUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN3aXNzUGl6R2xvcmlhUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9zd2lzc1Bpekdsb3JpYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3YWxlc1Bob3RvIH0gZnJvbSAnLi9waG90b3Mvd2FsZXNQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uQ2FuYXJ5UGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9sb25kb25DYW5hcnlQaG90by5wbmcnXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYoKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7c3JjOnNyYyxkZWNvZGluZzpcImFzeW5jXCIsc2l6ZXM6c2l6ZXMsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbiddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7aWYocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpe2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZhZGUgfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCdcclxuaW1wb3J0IHtcclxuICBWTWVudUJhcixcclxuICBWUGhvdG9HcmlkLFxyXG4gIFZGb290ZXJcclxufSBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IHtcclxuICBiZWxheVRoZUNwcExvZ28sXHJcbiAgYm9ub2JvUHJlc3NMb2dvLFxyXG4gIGNvbWljQ29tbWlzc2lvbjEsXHJcbiAgY29taWNDb21taXNzaW9uMixcclxuICBjc3NUcmlja3NMb2dvLFxyXG4gIGRyaWJiYmxlTG9nbyxcclxuICBmcmVlQ29kZUNhbXBMb2dvLFxyXG4gIGhhc2hub2RlTG9nbyxcclxuICBsb2dvQ29tbWlzc2lvbixcclxuICBwb3N0ZXJDb21taXNzaW9uLFxyXG4gIHNjaGVtZUNvbW1pc3Npb24sXHJcbiAgc2l0ZVBvaW50TG9nbyxcclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hYm91dC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZBYm91dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dENvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BYm91dCBtZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkthcm9saW5hIEh1ZHppZWMgUG9ydGZvbGlvIFBhZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiS2Fyb2xpbmEgSHVkemllY1wiLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiS2Fyb2xpbmEsIEh1ZHppZWMsIFBvcnRmb2xpbywgRnJvbnRlbmRcIi8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY28/XCIgdHlwZT1cImltYWdlL3gtaWNvblwiLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Vk1lbnVCYXIgYWN0aXZlVGFiPVwiQWJvdXRcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5fT5cclxuICAgICAgICAgIDxGYWRlPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgTG9uZyBzdG9yeSBzaG9ydCBhYm91dCBtZVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgSSBoYXZlIHR3byBsZWFkaW5nIHBhc3Npb25zIGluIG15IGxpZmU6IG9uZSBpcyB0byBjcmVhdGUsXHJcbiAgICAgICAgICAgICAgYW5kIHRoZSBvdGhlciBvbmUgaXMgdG8gZXhwbG9yZSB0aGUgd29ybGQuIEkgbG92ZSB0byBjcmVhdGVcclxuICAgICAgICAgICAgICBzb2Z0d2FyZSwgZXNwZWNpYWxseSB3ZWIgYXBwbGljYXRpb25zLiBHcmFwaGljIGRlc2lnbixcclxuICAgICAgICAgICAgICBkcmF3aW5nIGFuZCBtYWtpbmcgYW5pbWF0aW9ucyBnaXZlIG1lIGEgbG90IG9mIGZ1biBhcyB3ZWxsLlxyXG4gICAgICAgICAgICAgIEkgdHJ5IHRvIGxlYWQgYW4gYWN0aXZlIGxpZmVzdHlsZS4gV2hlbmV2ZXIgSSBoYXZlIHNvbWUgc3BhcmUgdGltZSxcclxuICAgICAgICAgICAgICBJIHRyeSB0byBkZWRpY2F0ZSBpdCB0byBsZWFybmluZyBuZXcgbGFuZ3VhZ2VzLCBzcGVuZGluZyBteSB0aW1lXHJcbiAgICAgICAgICAgICAgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHksIGFuZCB0cmF2ZWxpbmcuIEknbSBhIGh1Z2Ugc3BvcnRzIGZhbixcclxuICAgICAgICAgICAgICBhcyB3ZWxsLCBlc3BlY2lhbGx5IGZvb3RiYWxsLiBCZXNpZGVzIHRoYXQgSSBsb3ZlIGhpa2luZyBhbmQgcm9ja1xyXG4gICAgICAgICAgICAgIGNsaW1iaW5nLiBJIGZlZWwgZXh0cmVtZWx5IGdvb2QgaW4gdGhlIG1vdW50YWlucy4gSW4gd2ludGVyXHJcbiAgICAgICAgICAgICAgSSBza2kuIFRvIHJlbGF4IEkgdXN1YWxseSBwbGF5IHZpZGVvIGdhbWVzIG9yIHdhdGNoIG1vdmllcy90diBzZXJpZXMuXHJcbiAgICAgICAgICAgICAgSSBhbHNvIHBheSBoaWdoIGF0dGVudGlvbiB0byBteSBzZWxmLWRldmVsb3BtZW50IGluIHRoZSBJVCBmaWVsZCxcclxuICAgICAgICAgICAgICBpbiBvcmRlciB0byBiZSB1cCB0byBkYXRlIHdpdGggY3VycmVudCB0cmVuZHMgb24gdGhlIG1hcmtldC5cclxuICAgICAgICAgICAgICBCZW5lYXRoIHlvdSBjYW4gZmluZCBhbGwgb2YgdGhlIG5ld3NsZXR0ZXJzIEkgc3Vic2NyaWJlIGN1cnJlbnRseS5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RmFkZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9iYmllc30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c2xldHRlcnN9PlxyXG4gICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIE5ld3NsZXR0ZXJzIEkgc3Vic2NyaWJlIHRvOlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vY3NzLXRyaWNrcy5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQ1NTLVRyaWNrcyBsb2dvXCIgc3JjPXtjc3NUcmlja3NMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2JlbGF5Y3BwLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJCZWxheSB0aGUgQ1BQIGxvZ29cIiBzcmM9e2JlbGF5VGhlQ3BwTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiRHJpYmJibGUgbG9nb1wiIHNyYz17ZHJpYmJibGVMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2hhc2hub2RlLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9J0hhc2hub2RlIGxvZ28nIHNyYz17aGFzaG5vZGVMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jvbm9ib3ByZXNzLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJCb25vYm9wcmVzcyBsb2dvXCIgc3JjPXtib25vYm9QcmVzc0xvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiU2l0ZSBQb2ludCBsb2dvXCIgc3JjPXtzaXRlUG9pbnRMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mcmVlY29kZWNhbXAub3JnL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkZyZWVDb2RlQ2FtcCBsb2dvXCIgc3JjPXtmcmVlQ29kZUNhbXBMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21taXNzaW9uc30+XHJcbiAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgR3JhcGhpYyBjb21taXNpb25zXHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICBCZXNpZGVzIGNvbXB1dGVyIHByb2dyYW1taW5nIEkgbG92ZSB0byBjcmVhdGUgZ3JhcGhpY3MuXHJcbiAgICAgICAgICAgICAgICBEcmF3aW5nIGhhcyBiZWVuIG15IHBhc3Npb24gc2luY2UgSSBjYW4gcmVtZW1iZXIuIFdoZW4gSSB3YXMgeW91bmdlcixcclxuICAgICAgICAgICAgICAgIEkgdXNlZCB0byBoYXZlIGh1bmRyZWRzIG9mIG5vdGVib29rcywgYWxsIG9mIHRoZW0gZmlsbGVkIHdpdGggbXkgc2tldGNoZXMuXHJcbiAgICAgICAgICAgICAgICBMYXRlciBvbiBJIG1vdmVkIG1vcmUgaW50byBkaWdpdGFsIGFydCB3b3JrIGFuZCBub3cgSSB0cmVhdCBpdCBhcyBteVxyXG4gICAgICAgICAgICAgICAgaG9iYnksIHRha2luZyAgc21hbGwgZ3JhcGhpY2FsIHByb2plY3QgZnJvbSB0aW1lIHRvIHRpbWUuXHJcbiAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNjcm9sbEdhbGxlcnl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oaW50fT5cclxuICAgICAgICAgICAgICAgICAgU3JvbGwgcmlnaHQgdG8gc2VlIG1vcmVcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNhbWVyYSBsb2dvIGNvbW1pc3Npb25cIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nb0NvbW1pc3Npb259Lz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJCcmVhdGhpbmcgc2NoZW1lIGNvbW1pc3Npb25cIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17c2NoZW1lQ29tbWlzc2lvbn0vPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIldvbWFuIHBvc3RlciBjb21taXNpb25cIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cG9zdGVyQ29tbWlzc2lvbn0vPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbWljIGNvbW1pc3Npb24gMVwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtjb21pY0NvbW1pc3Npb24xfS8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQ29taWMgY29tbWlzc2lvbiAyXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2NvbWljQ29tbWlzc2lvbjJ9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvR2FsbGVyeX0+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBQaG90byBHYWxsZXJ5XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICBJIGRvIGJlbGlldmUgdGhhdCA8cz5hY3Rpb25zPC9zPiBpbWFnZXMgc3BlYWsgbG91ZGVyIHRoYW4gd29yZHMuIEJ5IGxvb2tpbmcgYXQgdGhlIHBpY3R1cmVzIGJlbG93LFxyXG4gICAgICAgICAgICAgIHlvdSBjYW4gZ2V0IGEgbGl0dGxlIGdyYXNwIG9mIHdoYXQgcGVyc29uIEkgYW0gb3V0c2lkZSBvZiB3b3JrLlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICBIb3ZlciBvbiBwaG90byBpbiBvcmRlciB0byBnZXQgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8VlBob3RvR3JpZC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8VkZvb3Rlci8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VUeXBlZFRleHQgfSBmcm9tICcuLidcclxuaW1wb3J0IHtcclxuICBiYXJjZWxvbmFTYWdyYWRhUGhvdG8sXHJcbiAgYm93bGluZ1Bob3RvLFxyXG4gIGNsaW1iaW5nVG9wUGhvdG8sXHJcbiAgZnJhbmNlTGFTYWx0dGVQaG90byxcclxuICBnaWV3b250UGhvdG8sXHJcbiAgaWNlbGFuZFdhdGVyZmFsbFBob3RvLFxyXG4gIGxvbmRvbkFyc2VuYWxQaG90byxcclxuICBsb25kb25DYW5hcnlQaG90byxcclxuICBsb25kb25DaGVsc2VhLFxyXG4gIGxvbmRvblRvd2VyQnJpZGdlUGhvdG8sXHJcbiAgbG9uZG9uVmljdG9yeVBob3RvLFxyXG4gIG1hbmNoZXN0ZXJVbml0ZWRQaG90byxcclxuICBtYXp1cnlEYXduUGhvdG8sXHJcbiAgbWNsYXJlblBob3RvLFxyXG4gIG5vdHJlRGFtZVBob3RvLFxyXG4gIHBhcmlzRWlmZmVsUGhvdG8sXHJcbiAgcGxheWluZ0lFTVBob3RvLFxyXG4gIHJ5c2lhbmthUGhvdG8sXHJcbiAgc2tpU3dpc3NQaG90byxcclxuICBzdXNoaVBob3RvLFxyXG4gIHN3aXNzTXVycmVuUGhvdG8sXHJcbiAgd2FsZXNQaG90b1xyXG59IGZyb20gJy4uLy4uL2Fzc2V0cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Bob3RvZ3JpZC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWUGhvdG9HcmlkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob3RvR3JpZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyY2F9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFNhZ3JhZGEgRmFtaWxpYSwgQmFyY2Vsb25hJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgU2FncmFkYSBGYW1pbGlhXCIgc3JjPXtiYXJjZWxvbmFTYWdyYWRhUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyaWRnZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogVG93ZXIgQnJpZGdlLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDkuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBUb3dlciBCcmlkZ2VcIiBzcmM9e2xvbmRvblRvd2VyQnJpZGdlUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaW1ifT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBDb21pYyBDb24sIFdhcnNhdycsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAxMC4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIGNsaW1iaW5nIEthcm9saW5hXCIgc3JjPXtjbGltYmluZ1RvcFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5laWZmZWx9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEVpZmZlbCBUb3dlciwgUGFyaXMnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBFaWZmZWwgVG93ZXJcIiBzcmM9e3BhcmlzRWlmZmVsUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11cnJlbn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogTcO8cnJlbiwgU3dpdHplcmxhbmQnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDIuMjAyMScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBNdXJyZW5cIiBzcmM9e3N3aXNzTXVycmVuUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNodXJjaH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogTm90cmUtRGFtZSwgUGFyaXMnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBOb3RyZS1EYW1lXCIgc3JjPXtub3RyZURhbWVQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxwc30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogTGEgU2FsZXR0ZS1GYWxsYXZhdXgsIEZyYW5jZScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOC4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEFscHMgaW4gTGEgU2FsZXR0ZS1GYWxsYXZhdXhcIiBzcmM9e2ZyYW5jZUxhU2FsdHRlUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGVzfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBDYXJkaWZmLCBXYWxlcycsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMi4yMDIwJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIENhcmRpZmZcIiBzcmM9e3dhbGVzUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWxzZWF9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFN0YW1mb3JkIEJyaWRnZSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAxLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgU3RhbWZvcmQgQnJpZGdlXCIgc3JjPXtsb25kb25DaGVsc2VhfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnNlbmFsfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBFbWlyYXRlcyBTdGFkaXVtLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDEuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBFbWlyYXRlcyBTdGFkaXVtXCIgc3JjPXtsb25kb25BcnNlbmFsUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hbmNoZXN0ZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE9sZCBUcmFmZm9yZCwgTWFuY2hlc3RlcicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMS4yMDIwJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIE9sZCBUcmFmZm9yZFwiIHNyYz17bWFuY2hlc3RlclVuaXRlZFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3dsaW5nfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBCb3dsaW5nIENsdWIsIMW7eXdpZWMnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDcuMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBLYXJvbGluYSBib3dsaW5nXCIgc3JjPXtib3dsaW5nUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyb3NzfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBHaWV3b250IDE4OTUgbSBNU0wsIFpha29wYW5lJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA0LjAyMScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBjbGltYmluZyBvbiBHaWV3b250IGluIHdpbnRlclwiIHNyYz17Z2lld29udFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YXRlcmZhbGx9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFNlbGlqYWxhbmRzZm9zcywgSWNlbGFuZCcsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOC4yMDE3JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIHdhdGVyZmFsbCBpbiBTZWxpamFsYW5kc2Zvc3NcIiBzcmM9e2ljZWxhbmRXYXRlcmZhbGxQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9vdHN9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFJ5c2lhbmthIDEyOTAgbSBNU0wsIEJlc2tpZCDFu3l3aWVja2knLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDYuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBtb3VudGFpbnMgc2VlbiBmcm9tIFJ5c2lhbmthXCIgc3JjPXtyeXNpYW5rYVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdXNoaX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogTW9tbyBDYWZlLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMTAuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBzdXNoaVwiIHNyYz17c3VzaGlQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9udW1lbnR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFZpY3RvcmlhIE1lbW9yaWFsLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDcuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBWaWN0b3JpYSBNZW1vcmlhbFwiIHNyYz17bG9uZG9uVmljdG9yeVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWtlfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBUYWp0eSBMYWtlLCBXaWxrYXN5JywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA1LjIwMjEnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgbGFrZVwiIHNyYz17bWF6dXJ5RGF3blBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za3lzY3JhcHBlcn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQ2FuYXJ5IFdoYXJmLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDEuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBDYW5hcnkgV2hhcmZcIiBzcmM9e2xvbmRvbkNhbmFyeVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE1jTGFyZW4sIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNi4yMDE5JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEZvcm11bGEgT25lIGNhclwiIHNyYz17bWNsYXJlblBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2l9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEVpZ2VyLCBTd2l0emVybGFuZCcsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMi4yMDIxJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEthcm9saW5hIHNraWluZ1wiIHNyYz17c2tpU3dpc3NQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogSW50ZWwgRXh0cmVtZSBNYXN0ZXJzLCBLYXRvd2ljZScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMy4yMDE5JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIEthcm9saW5hIHBsYWluZyBnYW1lXCIgc3JjPXtwbGF5aW5nSUVNUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG4vL1RPLURPIHJlZmFjdG9yaW5nIG9mIFZQaG90b0dyaWQiLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IHllYXIgPSBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKVxyXG4gIGxldCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKVxyXG4gIGxldCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpXHJcblxyXG4gIGlmKGRheS5sZW5ndGggPT09IDEpXHJcbiAgICBkYXkgPSAnMCcrIGRheVxyXG5cclxuICBpZihtb250aC5sZW5ndGggPT09IDEpXHJcbiAgICBtb250aCA9ICcwJysgbW9udGhcclxuXHJcbiAgcmV0dXJuIGAke2RheX0uJHttb250aH0uJHt5ZWFyfWBcclxufSIsImltcG9ydCB7IFZJY29uIH0gZnJvbSAnLi9pY29uJ1xyXG5pbXBvcnQge1xyXG4gIGdtYWlsTG9nbyxcclxuICBnbWFpbExvZ29Ib3ZlcixcclxuICBsaW5rZWRJbkxvZ28sXHJcbiAgbGlua2VkSW5Mb2dvSG92ZXIsXHJcbiAgZ2l0SHViTG9nbyxcclxuICBnaXRIdWJMb2dvSG92ZXJcclxufSBmcm9tICcuLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVkZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdvVXBTcXVhcmV9Lz5cclxuICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodHN9PlxyXG4gICAgICAgIMKpMjAyMVxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgQnVpbGQgd2l0aCA8c3Bhbj5OZXh0LmpzL1R5cGVTcmlwdDwvc3Bhbj5cclxuICAgICAgPC9oND5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtsaW5rZWRJbkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bGlua2VkSW5Mb2dvSG92ZXJ9XHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2thcm9saW5hLWh1ZHppZWMtMGIyYmE4MTVhXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJMaW5rZWRJblwiLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dtYWlsTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtnbWFpbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhyZWY9XCJtYWlsdG86a2h1ZHppZWNAZ21haWwuY29tXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJHbWFpbFwiLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dpdEh1YkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Z2l0SHViTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9GdXR1cmVJbnZlbnRvclwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiMzBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiR2l0SHViXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufSIsImV4cG9ydCB7IFZNYWluSGVhZGVyIH0gZnJvbSAnLi9tYWluaGVhZGVyJ1xyXG5leHBvcnQgeyBWVG9vbHNUZWNoIH0gZnJvbSAnLi90b29sc3RlY2gnIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbWFpbmhlYWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlVHlwZWRUZXh0IH0gZnJvbSAnLi4vdHlwaW5ndGV4dCdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWTWFpbkhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hYm91dEluZm99PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICB7dXNlVHlwZWRUZXh0KFwiSGVsbG8gZXZlcnlvbmUhXCIsIDUwKX1cclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIHt1c2VUeXBlZFRleHQoXCJJJ20gS2Fyb2xpbmEuXCIsIDUwLCAyMDApfVxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8aDI+XHJcbiAgICAgICAge3VzZVR5cGVkVGV4dChcIldlbGNvbWUgb24gbXkgcG9ydGZvbGlvIHBhZ2UhIEknbSBhIFNvZnR3YXJlIERldmVsb3BlciAmIENvbnRlbnQgQ3JlYXRvciwgY3VycmVudGx5IHdvcmtpbmcgYXMgVHlwZVNjcmlwdCBSZWFjdCBXZWIgRGV2ZWxvcGVyLiBMaXZpbmcgaW4gQ3JhY293LCBQb2xhbmQuXCIsIDMwLCAzNTApfVxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4uL2ljb24nXHJcbmltcG9ydCB7XHJcbiAgYWZmaW5pdHlMb2dvLFxyXG4gIGFmZmluaXR5TG9nb0hvdmVyLFxyXG4gIGFuZ3VsYXJMb2dvLFxyXG4gIGFuZ3VsYXJMb2dvSG92ZXIsXHJcbiAgY3NzTG9nbyxcclxuICBjc3NMb2dvSG92ZXIsXHJcbiAgZGF2aW5jaUxvZ28sXHJcbiAgZGF2aW5jaUxvZ29Ib3ZlcixcclxuICBnaXRMb2dvLFxyXG4gIGdpdExvZ29Ib3ZlcixcclxuICBodG1sTG9nbyxcclxuICBodG1sTG9nb0hvdmVyLFxyXG4gIGplc3RMb2dvLFxyXG4gIGplc3RMb2dvSG92ZXIsXHJcbiAganNMb2dvLFxyXG4gIGpzTG9nb0hvdmVyLFxyXG4gIGxlc3NMb2dvLFxyXG4gIGxlc3NMb2dvSG92ZXIsXHJcbiAgbGludXhMb2dvLFxyXG4gIGxpbnV4TG9nb0hvdmVyLFxyXG4gIG15c3FsTG9nbyxcclxuICBteXNxbExvZ29Ib3ZlcixcclxuICBucG1Mb2dvLFxyXG4gIG5wbUxvZ29Ib3ZlcixcclxuICBweXRob25Mb2dvLFxyXG4gIHB5dGhvbkxvZ29Ib3ZlcixcclxuICByZWFjdExvZ28sXHJcbiAgcmVhY3RMb2dvSG92ZXIsXHJcbiAgc2Fzc0xvZ28sXHJcbiAgc2Fzc0xvZ29Ib3ZlcixcclxuICB0c0xvZ28sXHJcbiAgdHNMb2dvSG92ZXIsXHJcbiAgdnNMb2dvLFxyXG4gIHZzTG9nb0hvdmVyLFxyXG4gIHdpbmRvd3NMb2dvLFxyXG4gIHdpbmRvd3NMb2dvSG92ZXIsXHJcbiAgeWFybkxvZ28sXHJcbiAgeWFybkxvZ29Ib3ZlclxyXG59IGZyb20gJy4uLy4uL2Fzc2V0cydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3Rvb2xzdGVjaC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWVG9vbHNUZWNoKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2hub2xvZ2llc0ljb25zfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc1Jvd30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtodG1sTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtodG1sTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNDZweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjQ2cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkhUTUxcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiaHRtbC10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2Nzc0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Y3NzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkNTU1wiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJjc3MtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtqc0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17anNMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiSmF2YVNjcmlwdFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJqcy10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3JlYWN0TG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtyZWFjdExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjU1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJSZWFjdFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJyZWFjdC10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2FuZ3VsYXJMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2FuZ3VsYXJMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiQW5ndWxhclwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJhbmd1bGFyLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17dHNMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3RzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlR5cGVTY3JpcHRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwidHMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtzYXNzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtzYXNzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjYwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlNhc3NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwic2Fzcy10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2xlc3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2xlc3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiTGVzc1wiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJsZXNzLXRvb2x0aXBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc1Jvd30+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtucG1Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e25wbUxvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJOb2RlIFBhY2thZ2UgTWFuYWdlclwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJucG0tdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXt5YXJuTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt5YXJuTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cInlhcm5cIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwieWFybi10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dpdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Z2l0TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkdpdFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJnaXQtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtqZXN0TG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtqZXN0TG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkplc3RcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiamVzdC10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e215c3FsTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtteXNxbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjcwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI3MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJNeVNRTFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJteXNxbC10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3B5dGhvbkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17cHl0aG9uTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjU1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlB5dGhvblwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJweXRob24tdG9vbHRpcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2hub2xvZ2llc0ljb25zUm93fT5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3ZzTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXt2c0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJWaXN1YWwgU3R1ZGlvIENvZGVcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwidnMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXthZmZpbml0eUxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17YWZmaW5pdHlMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiQWZmaW5pdHlcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiYWZmaW5pdHktdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtkYXZpbmNpTG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtkYXZpbmNpTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkRhVmluY2kgUmVzb2x2ZVwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJkYXZpbmNpLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17d2luZG93c0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17d2luZG93c0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJXaW5kb3dzIDEwXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cIndpbmRvd3MtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtsaW51eExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bGludXhMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiVWJ1bnR1IExpbnhcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwibGludXgtdG9vbHRpcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnXHJcblxyXG50eXBlIEljb25Qcm9wcyA9IHtcclxuICBkZWZhdWxJY29uOiBTdGF0aWNJbWFnZURhdGFcclxuICBvbkhvdmVySWNvbjogU3RhdGljSW1hZ2VEYXRhXHJcbiAgaHJlZj86IHN0cmluZ1xyXG4gIGhlaWdodDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgdG9vbHRpcElEPzogc3RyaW5nXHJcbiAgd2lkdGg6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVkljb24ocHJvcHM6IEljb25Qcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgZGF0YS10aXA9e3Byb3BzLnRvb2x0aXBJRCA/IHRydWUgOiBmYWxzZX0gZGF0YS1mb3I9e3Byb3BzLnRvb2x0aXBJRH0gaHJlZj17cHJvcHMuaHJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6IHByb3BzLmhlaWdodCwgd2lkdGg6IHByb3BzLndpZHRofX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkFjdGl2ZX0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBhbHQ9e2BPbiBob3ZlciAke3Byb3BzLm5hbWV9IGljb24uYH1cclxuICAgICAgICAgIHNyYz17cHJvcHMub25Ib3Zlckljb259XHJcbiAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnRvb2x0aXBJRCAmJlxyXG4gICAgICAgIDxSZWFjdFRvb2x0aXAgaWQ9e3Byb3BzLnRvb2x0aXBJRH0gdHlwZT1cImxpZ2h0XCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L1JlYWN0VG9vbHRpcD5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtgRGVmYXVsdCAke3Byb3BzLm5hbWV9IGljb24uYH1cclxuICAgICAgICAgIHNyYz17cHJvcHMuZGVmYXVsSWNvbn1cclxuICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gIClcclxufSIsImV4cG9ydCAqIGZyb20gJy4vZGF0ZSdcclxuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInXHJcbmV4cG9ydCAqIGZyb20gJy4vaWNvbidcclxuZXhwb3J0ICogZnJvbSAnLi9tZW51YmFyJ1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3RleHQnXHJcbmV4cG9ydCAqIGZyb20gJy4vYWJvdXQnXHJcbmV4cG9ydCAqIGZyb20gJy4vaG9tZSdcclxuZXhwb3J0ICogZnJvbSAnLi93b3JrJyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lbnViYXIubW9kdWxlLnNjc3MnXHJcblxyXG50eXBlIE1lbnVCYXJQcm9wcyA9IHtcclxuICBhY3RpdmVUYWI6IFwiSG9tZVwiIHwgXCJXb3JrXCIgfCBcIkFib3V0XCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZNZW51QmFyKHByb3BzOiBNZW51QmFyUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QmFyfT5cclxuICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNxdWFyZUluaXRpYWxzfT5cclxuICAgICAgICAgICAgS0hcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICBLYXJvbGluYSBIdWR6aWVjXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3Byb3BzLmFjdGl2ZVRhYiA9PT0gXCJIb21lXCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17YC93b3JrYH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIldvcmtcIiA/IHtjb2xvcjogXCIjRTc2MTYxXCJ9IDoge2NvbG9yOiBcIiNENUQ1RDVcIn19PlxyXG4gICAgICAgICAgICBXb3JrXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2Fib3V0YH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkFib3V0XCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlZFRleHQodGV4dDogc3RyaW5nLCBzcGVlZDogbnVtYmVyLCBkZWxheVRpbWU/OiBudW1iZXIpIHtcclxuICBjb25zdCBbdGV4dFN0YXRlLCBzZXRUZXh0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBjaGFycyA9IHRleHQuc3BsaXQoXCJcIilcclxuICBsZXQgaW50ZXJ2YWwgPSBzcGVlZFxyXG5cclxuICBpZih0ZXh0U3RhdGUubGVuZ3RoID09PSAwICYmIGRlbGF5VGltZSlcclxuICAgIGludGVydmFsID0gc3BlZWQgKyBkZWxheVRpbWVcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFRleHRTdGF0ZSgocHJldlRleHQpID0+IHtcclxuICAgICAgICBpZiAocHJldlRleHQubGVuZ3RoICE9PSBjaGFycy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RleHQgPSBwcmV2VGV4dC5jb25jYXQoY2hhcnNbcHJldlRleHQubGVuZ3RoXSlcclxuICAgICAgICAgIHJldHVybiBuZXdUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2VGV4dFxyXG4gICAgICB9KVxyXG4gICAgfSwgaW50ZXJ2YWwpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB0ZXh0U3RhdGVcclxufSIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge1xyXG4gIG5vYmxlTG9nbyxcclxuICB1c0xvZ28sXHJcbiAgd2Fza29Mb2dvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSAnLi4vZGF0ZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RpbWVsaW5lZ3JpZC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWVGltZWxpbmVHcmlkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxoMT4yMDE2PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lUG9pbnR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUNhcmR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlclRpcH0+XHJcbiAgICAgICAgICBIb3ZlciB0byB6b29tLlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbml2ZXJzaXR5IG9mIFNpbGVzaWEgbG9nby5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt1c0xvZ299XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlJbmZvfT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueVRpdGxlfT5Vbml3ZXJzeXRldCDFmmzEhXNraTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+S2F0b3dpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMTUgLSAwMy4yMDE5PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBNb2R1bGVzIGluY2x1ZGVkOjxici8+XHJcbiAgICAgICAgICAgIDFzdCBZZWFyOiBNYXRoZW1hdGljYWwgQW5hbHlzaXMsIEJhc2ljIENvdXJzZSBvZiBDKysgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2UuPGJyLz5cclxuICAgICAgICAgICAgMm5kIFllYXI6IE9wZXJhdGluZyBTeXN0ZW1zLCBDb21wdXRlciBOZXR3b3Jrcy48YnIvPlxyXG4gICAgICAgICAgICAzcmQgWWVhcjogQWR2YW5jZWQgQ291cnNlIG9mIEMrKyBQcm9ncmFtbWluZyBMYW5ndWFnZSwgVXNpbmdcclxuICAgICAgICAgICAgQyMgdG8gRGVzaWduIEdyYXBoaWMgQXBwbGljYXRpb25zLCBUaGUgQmFzaWNzIG9mIEJ1aWxkaW5nIG9mIE5ldXJhbCBOZXR3b3JrLjxici8+XHJcbiAgICAgICAgICAgIDR0aCBZZWFyOiBDb21wdXRlciBTaW11bGF0aW9uIE1ldGhvZHMsIE9yYWNsZSBEYXRhYmFzZXMuPGJyLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmR9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1XaWRlfT5cclxuICAgICAgICA8aDE+MDMuMjAxOSAtIDAzLjIwMjA8L2gxPlxyXG4gICAgICAgIDxoMj5Xb3JraW5nICYgbGVhcm5pbmcgV2ViIERldmVsb3BtZW50IGluIExvbmRvbjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQ2FyZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJXYXNrbyBjb21wYW55IGxvZ28uXCJcclxuICAgICAgICAgICAgICAgIHNyYz17d2Fza29Mb2dvfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxM31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1NX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55SW5mb30+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlUaXRsZX0+V2Fza288L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PkdsaXdpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjA4LjIwMjAgLSAxMC4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBvbiBteSBvd24gYSByZXNwb25zaXZlIHdlYiBhcHBsaWNhdGlvbixcclxuICAgICAgICAgICAgd2hpY2ggaGFkIGEgY2F0YWxvZ3VlIG9mIGFsbCBjb21wYW55J3Mgc2VydmVycywgZGlzcGxheWVkIGluIHRoZVxyXG4gICAgICAgICAgICB0cmVlIHN0cnVjdHVyZS4gU2VydmVyJ3MgZGF0YSB3YXMgdGFrZW4gYW5kIHBhcnNlZCBmcm9tIFhNTCBmaWxlIHRvIEpTT04uXHJcbiAgICAgICAgICAgIEFueW9uZSBsb2dnZWQgY291bGQgYnJvd3NlIHRocm91Z2ggbGlzdHMgb2Ygc2VydmVycy5cclxuICAgICAgICAgICAgU2VhcmNoIGFuZCBzb3J0IGJ5IG5hbWUgZnVuY3Rpb24gd2VyZSBhcHBsaWVkLlxyXG4gICAgICAgICAgICBBcHAgaGFkIHN5c3RlbSBvZiBhY2NvdW50cyBhcyB3ZWxsLiBBZG1pbnMsIHRlY2huaWNhbCBhbmQgdXNlciBvbmVzLlxyXG4gICAgICAgICAgICBBZG1pbnMgY291bGQgbWFuYWdlIGFjY291bnRzIGJ5IGVkaXRpbmcgdGhlbSwgZGVsZXRpbmcgYW5kIGF1dGhvcml6ZVxyXG4gICAgICAgICAgICAoZXZlcnkgbmV3IHVzZXIgaGFkIHRvIGJlIGF1dGhvcml6ZWQgYnkgYWRtaW4pLiBBZG1pbnMgY291bGQgYWxzb1xyXG4gICAgICAgICAgICBzZWUgd2hhdCB1c2VyIGlzIGxvZ2dlZCBhdCB0aGUgbW9tZW50Ljxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE1haW4gcmVzcG9uc2liaWxpdGllczo8YnIvPlxyXG4gICAgICAgICAgICAtIGRlc2lnbmluZyBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kIHNpZGUgb2YgdGhlIGFwcCw8YnIvPlxyXG4gICAgICAgICAgICAtIGNyZWF0aW5nIGFuIGFzeW5jaHJvbm91cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIgdmlhIDxiPlJFU1QgQVBJPC9iPiw8YnIvPlxyXG4gICAgICAgICAgICAtIHNldHRpbmcgdXAgc2VydmVyIHdpdGggZGF0YWJhc2UuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgTGFuZ3VhZ2VzOiBKYXZhU2NyaXB0LCA8Yj5SZWFjdDwvYj4sIDxiPlBIUDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgRGF0YWJhc2U6IDxiPk15U1FMPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBTdHlsaW5nOiBBbnQgRGVzaWduIFVJLCBDU1MuPGJyLz5cclxuICAgICAgICAgICAgVmVyc2lvbiBDb250cm9sIFN5c3RlbTogPGI+R2l0SHViLjwvYj48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFuY2luZzogVHJlbGxvLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1DYXJkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlMb2dvfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMEUyMjQ1XCJ9fT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vYmxlIFN5c3RlbXMgY29tcGFueSBsb2dvLlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e25vYmxlTG9nb31cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUluZm99PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55VGl0bGV9Pk5vYmxlIFN5c3RlbXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PktyYWvDs3c8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMjAgLSAwOS4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBmcm9tIHNjcmF0Y2ggYSBjb21wbGV0ZSBXZWJSVEMgUGhvbmUgd2ViIGFwcGxpY2F0aW9uLCBiYXNlZCBvbiBTSVAuanMgbGlicmFyeS4gTWFqb3IgZnVuY3Rpb25hbGl0aWVzOjxici8+XHJcbiAgICAgICAgICAgIC0gbWFraW5nIG5ldywgYW5zd2VyaW5nLCBhbmQgaG9sZGluZyBjYWxscyAoY29uZmVyZW5jZXMgYXMgd2VsbCksPGJyLz5cclxuICAgICAgICAgICAgLSBjb250YWN0cyBsaXN0IHdpdGggZnVuY3Rpb25hbGl0eSBvZiBhZGRpbmcsIGRlbGV0aW5nLCBhbmQgZWRpdGluZyBjb250YWN0cy4gU2VhcmNoIGFuZCBzb3J0IG9wdGlvbnMgYXBwbGllZCBhcyB3ZWxsLDxici8+XHJcbiAgICAgICAgICAgIC0gaGlzdG9yeSBvZiBjYWxscyB3aXRoIHN1bW1hcml6ZWQgZGF0YSw8YnIvPlxyXG4gICAgICAgICAgICAtIHZvaWNlbWFpbCBhbmQgRFRNRiBzZW5kaW5nLDxici8+XHJcbiAgICAgICAgICAgIC0gYWNjb3VudCBhbmQgcGhvbmUgaW5wdXQvb3V0cHV0IGF1ZGlvIHNldHRpbmdzLjxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE15IG1haW4gcmVzcG9uc2liaWxpdGllcyBvbiB0aGUgZnJvbnQtZW5kIHNpZGUgb2YgdGhlIHByb2plY3Q6PGJyLz5cclxuICAgICAgICAgICAgLXdvcmtpbmcgY29sbGFib3JhdGl2ZWx5IGluIHRlYW0gZW52aXJvbm1lbnQsIHJlc29sdmluZyBjb25mbGljdHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgYSBjbGVhbiBhbmQgaGlnaC1xdWFsaXR5IGNvZGViYXNlLDxici8+XHJcbiAgICAgICAgICAgIC1yZWZhY3RvcmluZyBvZiBjb2RlYmFzZSw8YnIvPlxyXG4gICAgICAgICAgICAtd3JpdGluZyB0aGUgZG9jdW1lbnRhdGlvbiw8YnIvPlxyXG4gICAgICAgICAgICAtaW1wbGVtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBmcm9tIHRoZSBkb2N1bWVudGF0aW9uLCBnaXZlbiBwcmV2aW91c2x5IGJ5IFBNLDxici8+XHJcbiAgICAgICAgICAgIC1jcmVhdGluZyByZXNwb25zaXZlLCBhY2Nlc3NpYmxlIGFuZCBlZmZpY2llbnQgd2ViIHZpZXdzLCBiYXNlZCBvbiBwcmV2aW91c2x5IGdpdmVuIG1vY2t1cHMsPGJyLz5cclxuICAgICAgICAgICAgLXJldmlld2luZyBwdWxsIHJlcXVlc3RzIG9mIG15IGxlc3MgZXhwZXJpZW5jZWQgcGVlcnMsIGFuZCBoZWxwaW5nIHRoZW0gd2l0aCBzdHlsaW5nL2NyZWF0aW5nIGNvbXBvbmVudHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgZWZmaWNpZW50IHVuaXQgdGVzdHMuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQWNoaWV2ZW1lbnRzIEkgYW0gbW9zdCBwcm91ZCBvZjo8YnIvPlxyXG4gICAgICAgICAgICAtYnVpbGRpbmcgYSAnbGlnaHQnIHZlcnNpb24gb2YgbWFpbiBhcHBsaWNhdGlvbiB0aGF0IGNvdWxkIGJlIGluc2VydGVkIGludG8gYW4gaWZyYW1lIGFuZCBjcmVhdGluZyBhbiBBUEkgdmlhIHRob3NlIHR3byBlbGVtZW50cyBjb3VsZCBjb21tdW5pY2F0ZSw8YnIvPlxyXG4gICAgICAgICAgICAtaGVscGluZyBteSBwZWVyIHdpdGggZml4aW5nIHVwIGNvbW1pdCBoaXN0b3J5IG9uIG1haW4gYnJhbmNoIGluIG91dCBwcm9qZWN0LCBhZnRlciBoaXMgbWlzdGFrZW4gbWVyZ2luZyw8YnIvPlxyXG4gICAgICAgICAgICAtY3JlYXRpbmcgZG9jdW1lbnRhdGlvbiB3aXRoIGNvZGUgc3RhbmRhcmRzIG9mIGNvZGViYXNlIG9mIG91ciBwcm9qZWN0LDxici8+XHJcbiAgICAgICAgICAgIC1pbXBsZW1lbnRpbmcgQ1NTIG1vZHVsZXMgaW50byBvdXIgbWFpbiBwcm9qZWN0LCB3aGljaCBpbXByb3ZlZCB0ZWFtIHdvcmtmbG93IG5vdGljZWFibHksPGJyLz5cclxuICAgICAgICAgICAgLWNvbnN0cnVjdGluZyBjb21wbGV0ZSB0cmFuc2xhdGlvbiBzeXN0ZW0gd2hpY2ggbGV0IHRoZSB1c2VyIHRvIGNoYW5nZSBsYW5ndWFnZSBvZiBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAoaWYgbm90IGNob3NlbiwgbGFuZ3VhZ2Ugd2FzIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkpLlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBBZ2lsZSBtYW5hZ2VtZW50OiA8Yj5TY3J1bSwgQWdpbGU8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFZlcnNpb24gY29udHJvbCBzeXN0ZW06IDxiPkF6dXJlIERldk9wcywgQml0YnVja2V0PC9iPi48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFja2luZyB0b29sOiA8Yj5KaXJhLCBUcmVsbGxvPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBLbm93bGVkZ2UgcmVwb3NpdG9yeTogPGI+Q29uZmx1ZW5jZTwvYj4uPGJyLz5cclxuICAgICAgICAgICAgU3R5bGluZzogPGI+U0NTUywgTEVTUywgU2VtYW50aWMgVUk8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFRlc3Rpbmc6IDxiPlJlYWN0IFRlc3RpbmcgTGlicmFyeSwgSkVTVDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgQ29tbXVuaWNhdGlvbiB0b29sOiA8Yj5NaWNyb3NvZnQgVGVhbXMsIFpvb208L2I+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZH0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVQb2ludH0vPlxyXG4gICAgICAgIDxoMT57Z2V0RGF0ZSgpfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvY2hldnJvbkRvd24uZGRhZGUyZjFkZTYzYmI2YjJkZTUyMTkwMWFlMzE4ZmMuc3ZnXCIsXCJoZWlnaHRcIjoxNDQwLFwid2lkdGhcIjoyNTYwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5jMTJhZjI2MGI0ODY0ZjliOGJiOGQ4YTkyOWJlMmVjMi5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6Njg4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFwa2xFUVZSNDJtUDRCd1gvSWVBZkdFTUJTSmdCS3ZudnhkMnIveThlMlBqdndOWU4vNjZkUHcxWHpBQmlmWGo3NnQrZTlZdi9MK2t2L2I5alJ2WC81ZTNaLzdlc212TWZCQmpldkhqeWIxcUYxNy9lMXZMLzAxclQvODJ0VHYwM3F5TCsvNG9wNWYvL2dxeDQrZlRCdjVtTmNmOTZnUklMdTdML0xadmE4RzlhZmR5LzdjdW5RS3o0Ky9mdnYyL2Z2djM3K3ZYTC8rOUErdnUzci8rK2Z2a01Zb090QUFENUNLUC9CZmV1d1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjIuNWE3ZGU5YmE0ZTkyMjNmM2NjMjdlYmI1OTRhOWM1ZGMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY4MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBclVsRVFWUjQybTJLVHdzQllSakVudy9oOC9nYXJtNUtyZzZPcmxJdTVDQXB4U29uRjhXMkJ5UUhITmkwV3c3cnNyS2IxYjdiNjEvYVozaHJqMzQxTTgwMDVIc1hERnROeUVqZ0g3UmN6TG1kSVVRaVZKM2Z6eGZiV3d1QmY4TkQzcG1Dd3dyamJBckNzU0RGRmViYVFqV2RRNjlVZzY3cG9NOXZESTg3eUxNRHhhUTdRcU9ReDhhWVlWRFJRQUJZaVpNOG1YdnUxK3ZjS1piWjBLWk1ySWpqNUtJTURJN2gyalk4MThNWEJXR291N3dkVHlBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2xvZ29Db21taXNzaW9uLmI5ZWU3MzZlMTc1NjhjMzg3MWMzZmYzZGQxNDdkMmRmLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4ODksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWZVbEVRVlI0Mm1OZ1lHVDh6OExBOEo5QlRmVy9sMXZrdjBqdnRIOGFabTcvR1JnWS9qT3pjdnhqWUdKa0JuUFVYWUwrWmFsYS8wdTNjUDNINXVyNWp3bWtpWm5sSHdNREJ5ZFlRVXBXd2IvczV0Wi9SZlh0LzdJVGkvNkJ4Tmk0K1A0eE1MQ3lnUlU0ZXdiODE0NVArT2VrYlA4dldDTUFvb0NSL1I4QXAwRXV1cGxyMlpjQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLmNiMjM5YzQ1N2Q2ZmEzY2IzNzFiMDVhMzVkZDU5ZmQwLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjozODYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXlFbEVRVlI0MmhYS3YwcENZUmpBNGQvN2VleWtIaWluRGxJSUZaUmpZNFBRVmJSME5kMUJXMnMxdUJRMDZhcURPRGlJNHhuVVVRUVY4ZS9IZHp6NnF2UHp5Ty9mdi9xWkxDNEdWSERPb2loZTZhR282OW1NNmFST3JBWm5FM0pwaDhkOFFMN1hrcHRpaTFUd3FGSDZpOFFoNXZyaVEzTFprSHdZRWhSODhkMnJMQk13L1VWWjM2WXZ0S01uekhpaHQ1ZUJQdCtkSU5wTG85Ymx2V0lZUlZlaXc0MWtWdUNkclp0S3RTbWRrdkRwSFhld3BYQmZGcW44Zkt0TkRMdHRqUGpucElDOXRSd0EzV1pQdE9rblkrWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLjhiMzhmZTVhM2Y3NTZiYjkzMTZkZDk1ZDM1ODBlNTdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4NDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQWdrbEVRVlI0MmlXTlN3ckNRQkJFNS82SGNhRXJRUVczZ2t0LzRNS05raEF4TUorZXp0QlRiVHBUVUZBVUQ1N1RGcFJTd015d2JVZk9CQkdCcXlJS0FHUFhJNFdJQldiVzcvc0RxUldPWWxSS0VkM3RnZWZoQ0VvSkZMemV0M3Y0WVdpQTlYVSs0YnBlSWZxQU1QNzBzdHZNUUsvT2ZLWmhTcWhWbW1LYWxET1pXZitHUnBpd29pOGhRUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ28uMWE1YjRkODZhMmEyZGRiNGMxM2ZlN2RkNTJmMTI0YjYucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBZ1VsRVFWUjQyZzNISVE4QmNRREc0ZmMvTnA5QkZDWFZ4MUFFeFNld215QW9FdHRWUkRmVkZNRW1VSmhSSk1IdnpiN0MzUzdkcnR3OTdaRURvdTA3TzFxSUlEY3R4cFNjdktHZTNMQzQ4ZkNWbDN0SUZrUC92ZUJEd3NFU2ZSZXNDY3o0Y2ZGQXp2Z1NlOG5FVzg5NWlvUXBSODZzbkpMN0xZc09FU1AyeEVSMEs2MEVVVkVmM2plVEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIuNGJkN2MzMDY1MDMxMjZjYjdhYTdkODYyNGEzMjc3ZTUucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldOb1FvQ1VSQkY1K0dDMzJBMG1xeCtoc1Zna1hsZHhHQ3dtQlNzYW5TeGlzVWdHTFFvb3NWazhBTnN1MVV4aVdYUExHOGZITzdNblR0dkpQWGVKYW9DRmVvVHVreFZ5OEZ6UWhPRnBnTi8yQktjSjk0TFJEWW9FUkk0VXAvaFFIMUY2Mkl2YkxmWWVxRWp1RU1NNnlMUVlQaERaK0RZSHFCUGRJL2Z0TUNINW9GT01jYmM3Vkl2WUloL3Nkc3g5REUyREhmb0JONTRYN2dKVzBZVnMwZWdEYXY4Tit0VmF4bGhTb0tqWFlDT2lnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvLmFjOWMzMWI0ODViZmVjMzY4MjU4ZGM0NjU1OGM2MTQzLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNFbEVRVlI0MmczR3V3MkRVQkFGMFZzRFZkQURzbVJuYm9DWTNNN2NBYW50Rm1pRFR3MmtjMHNnSTNqa1NNdnFTS09SNVpxZUxmWFVsanh3RW94TWhFOFA4a0xrM3YzSUJvdjRFY3g4MHV6d1Y3d0pXbTZwSmZ3U0hidWZISlRzVGljcS9oUWlsYnhLSkJwV3IyNlFkUUducTFwR3I0RkdDd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLjAwNjBhNzNjMjdmZDRkN2FlYzFjZmY3NzY3NDY3NTE3LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVFbEVRVlI0bkJXUE1RckNRQkJGWi9BQWdwVkg4QTVXTnRFVGlJS1FEZGlsRWJUeUFEWkJzTENNaFNDSVhrQ1N3czQ3ZUFKajZ3Rms4LzdBeS93LyszYzM2MDBJUmcyaTJkemRsMml6R0V2ODFkemZDcHd3S2VNT1BNQmhBbjgybkJXb29sbkNRQ3NqTmZ6VEVWVHRueEFLeEFZcXFFR1ZFQmpUQzUyUXMrT0ltWExrRjYxLzZQTzlFOG9WU0RGN1dFU3pHejJ5TUVOZjZHdGQwVU5zR2VnRlhWRDlvSVNkTjFuR25tZ0VoZ3dPWENPL3dyOVExZ0liYWpyK2ZMRVlMZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9iZWxheVRoZUNwcExvZ28uMDBiYzdhZjUxMDcwYWI0ODQ4NDQ2YzUyM2E1MDQ2Y2YucG5nXCIsXCJoZWlnaHRcIjoyNDUsXCJ3aWR0aFwiOjU0MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBaUVsRVFWUjRuR00wTU5UNXp5SnUrTi9PUUlueCtPRWQvejk4L3NIQXdjN0d3QWdFLy8vL1oyQzA4WTcrYis0WTlKK0Q2UjhqODhjci83OTkvODd3OWV0WEJpNHVMc1lQNzk4ek1GWlUxZnoveFNqMGYvYSttNHdoV24vK2M3Q3pNMXk0ZkptQmhZV0Y0ZisvZnd5TWtkR1IvN2w0UlA0ZlBuYU1rWXNkYUNZREU4aDRCaUFBRXdCNmVqTWJFY01RU0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYm9ub2JvUHJlc3NMb2dvLjcxYzg4MDNhYThhODAxMTk0NTcwY2Y4MWY3OGU0ZDQzLnBuZ1wiLFwiaGVpZ2h0XCI6OTAsXCJ3aWR0aFwiOjQ4NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVFBQUFCSkNTZklBQUFBR2tsRVFWUjQybU53K3hmN3YvVmYzYi82LzhYL0d2L0YvUWNBWGE0TGErQUYzMGdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9jc3NMb2dvLjAxY2RmY2YxYThiNjg2Y2MyNzZlYjdkMmJkNWQzYjRiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVhVbEVRVlI0Mm0zTnNRMUFVQlJHWWJHTU9SUTZVZExUaWJ3TlJOU2kxSmxCVFNRS001eWZ4QTVpQmNWdDN5bS81Z1NlS0lDRFU0OXlnNXFMVG80ZFo1QnlxMVhHUkdFUXM2aFh3MHhpRVBFeU1Pb2pNZ2lwMkZoVkt2UThmeGhYTUI5VHk3R05BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc0xvZ29Ib3Zlci43YTQ5N2I3YzIzMGJlMDhiMmRhZTg0Mjg3ZWNjNWMwYy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFxVWxFUVZSNG5FV01NUTRCVVJDRy85azRoQnRvbFZxVmhwWjJuMUs0QVNmUU9ZQ29KTHV0VXFmUWk4b0ZiRUxoQnNZM1Q4UWs4K2JOTnpPZk5Ta3B3dDE1LzJGa0VMdVhaVFFUbXBYTUhyQ1d1YmVwUzFodERRc01aaGptMUVyU0M5Mklvd1AvVFRZd0dBTFhrdmJraFJ5d2NNSlFaUU9mUG5CQlhrMTZVcnV3c0IyekFkZ0JuREZ0Z1FXMkthd0h1K1VGb2lBVGNFeUZxK2JaY2ZEK0xYekRMR3dJR0VmUWZ3QlBkRDArM3BoMjZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc1RyaWNrc0xvZ28uNmJmZGYwZDMwZmFmMmIxNzMyNjcwYmUyYjkyZWQzNGYucG5nXCIsXCJoZWlnaHRcIjo2NCxcIndpZHRoXCI6Mzc0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQkNBUUFBQUJKQ1NmSUFBQUFHRWxFUVZSNDJtT28vMWZ4ditsLzBmLzYvdzFBT3ZNZkFHS2ZDOHlndDg0OUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ28uYjk4OGE0MDg5ODI1Y2VlZGJmZWNkYzk0ODU3YTFjZWEucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyaDNIc1EyRFFCQUYwUzlPdWo1STNRVUJHY0lPQ0kwSXNYdHdEd1NrcGhscStGUFBzaUo1bXBIazZxY0hEN3lvM0x2d1lHTkxGNm84MFZJSlI5cDZFbS9rNHQwN2hUeDU1T2Z3NGI4amF4UWRKK0VQMy9Ta0V3MnJaOHRLVnhwSkx1NXpabm9YNndJTFVVaEY2alV3R1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci4wMTY0NTA2MjllMzVjZWZkY2JiMzcwMDFjMDIzZTMxNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF2RWxFUVZSNG5CV05NUXJDVUF5R0U1VUtua0R3RGk3aTZLQ2JpNU9MVU9FVjZlRG1CVVRFQ3ppNUZGd1V2SUdqaTZPNGVBZGJUeUFvbFBSTDRDTjUvLysvUklzUXhFUWlGUm5UUzZHWUc2WjZWYk8vQnlLMEdUd2dCYThNK25EUlBJUXBQNTZpK2hhekgxdDhRNVBXWWU3NWhoanpqRkEzc3oyZHA2NllTNEt4QnlZb1hZUWQzaEg0S0F2TU5mMmxSWklNTWJjSUE0UWxNTXFCMUoxTkd3L1V1SjBpZkRGTzREVW4xYUpubW9mQUJmWDdJNFEyZUgzZ0JtVUZlQUpEaUZlZWlzMEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby44NDJlYTUxOWQ2NDM2OGVjNDIzOGQ4YTg1NjhhN2FhYy5wbmdcIixcImhlaWdodFwiOjk0LFwid2lkdGhcIjoyNTEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQVZVbEVRVlI0bkIzS3NRM0FJQkFFd1R2ZUlpV2xCTXY5dDJQWFFFQ0E0T0dNeUZiYW9hUTE1NEpaZ0x0enQwZ2d4b2o5Y01EN2ZpaWxjSXlCM3J2Y0o1L25Wczc1QU5WYTBWcERDSWJyc2cyY1pxYVVFbjgwVURUelVrUkpkZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLjMxZGYxNTAwMmI0ZDNjNGJkNzhkOWEyMjM2N2I4NTg3LnBuZ1wiLFwiaGVpZ2h0XCI6ODIsXCJ3aWR0aFwiOjUwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVlBQUFEakFPOURBQUFBSmtsRVFWUjRuQVZBc1EwQU1BaUN4YlYrNTlUL254QXduUG51ZnRoZFZCV1RnR1JzUXhJUDIwY1BNandRSlVVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0TG9nby5mZDdiZWMxZDg2ZjAxZjQ0MmUzZWExYmIyZjE5YWM3MS5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJqV01RUW9CWVFCR3Z5SWJNeVZLS1k3Z0FrN2lNRzdnRURhU3JRT3d0bVB4M25aS0ZvNGdwVWJUbjkzN1huMHZDZjNFRmN0Q29aZFljZUx0TExGVFR2bXdZV3ZyT0FrVEcxdnVyTm41ZEJTR1htMDVzL2ZDelNyZHp4ZEhEbjRkL0tPMURRL3FzbUtuNWl3Sy9RQUhHRHdTZlhmN3d3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdExvZ29Ib3Zlci5kOGY4MTc3MDViNjU2ZmNlOTY4ODlhMWM3Mzk4YWE2Ni5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsVWxFUVZSNDJtTUFnZWNKQ1N4Z09qSFJDc2pXQmJHZkFjVmdrc3hRU1I0ZzNnaVUrQTRVazRRcmdrcUtBVGsvZ2JnR0tOa041UDhIWWlFR3FDcGhJT2Nla1A0UGxMd0FwQ09lSlNiT0I5S1BnVmlBQVNqSURWUndBcVFBaVBjQzhSSWdmeCtRUGcra2VXQldzQUFWUGdjS3JnRGlaVUQ4QnlqR0JyTUM1a2hlb0tKN1FQd1FLTVlMOXdBeUF5Z2hBOFN5eUdJQWpkaGprUHhPd0hBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0aHViLjgzODYzN2FkYjc2NGNiNDNiZjdlZDY5YWJlZmVkOWJjLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdGh1YkhvdmVyLjkwNTRmNzljNGQwYTA2MzcyZWNiMDAxZDMzNDJiNjViLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsLjkwMTE5ZWRkODVlN2Y5ODAzZDkyNjY5ZGQyNTQzNmNiLnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsSG92ZXIuNzI4YmEyN2I3NDVjZjMzZTkyNjUxZWM0MWQ1MjE3ZjMuc3ZnXCIsXCJoZWlnaHRcIjo1MTAsXCJ3aWR0aFwiOjUxMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvaGFzaG5vZGVMb2dvLmQ0MGNlZDc4MTU3ZGYzYzI0MzI3NWU4ZjllMjY1YTg2LnBuZ1wiLFwiaGVpZ2h0XCI6ODksXCJ3aWR0aFwiOjMwNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUkVsRVFWUjRuQVdBS3c2QU1BeEFYMG1aSEVFZzJQM1Bnd09GNGd3TDJZZTFSSTV6bUU0djI1cHBIVVJBVmFtMUVPT0NYUGR3dDR5MXgvc0hJY3k0UXkyRlBTVitxbUFjZzVXOGlTd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvLjliYjRkMDEzNTM4ODkxODJiZTFhNDFiZjlkNzgxYTZmLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmpYR29RNUJZUUNHNGEvckZES3FReGZOVENQb2JzQWQwTGdDNGN4MWlEYlRCT0g5Z3AxZ0ptazJ3ODVtKzg5ZnpwN3lpRFdoNU1CR1hwTFJwaGUxeUx3U0M4NDBlWEx6MWNGek1lTk9oVEdqdUxlbmNwOC9SdzdzWGVQaGdkemg2eUVwVzFmOW9pdlgrWEJpRWwzNHVTSExDVHR5Y3FkT3JBSjFNRmtUOU8rMURRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvSG92ZXIuM2IxMTAwMmNkZDE2MDJlMmExMmQ5NjFhN2NlYzQ3YmIucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcGtsRVFWUjQya1hNb1FyQ1lCVEY4ZFB0V2pTcjFXazNpb2hOZzJsZjhBVjhBMjM2QkliaGN4Z0ZzUm1zc2lBaU9HeUNxQXdHMi8rT3dRWS83ajFuZDlQVDk5ZEljODRCNWI0UllZa1E3Y2k1SHRPMEVKSlhZbG5nakNaZnZIRGp4VFhpTDVqYndZemx6cXp3Y295UmRmalFUOFYxbjVEZ2lBUDJkRFhtZzRPQldEb1VQOEtRUFdCdXlWWG1tOXkxZ3pyaHl6eGhVcmpRL2RHUVBTd2U1UTV4SVlBblNSbDR0WXBqMnd6NUhRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvLjhiYjEzNzhkNDE0NjUxYzYyMDhlMWQzNjY0MTIwNDc2LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmhYQnNRb0JBUURHOFM4V01aSUg4QUN5S0lOSk1Ya0I2VEpjNUZLeVdPaENYY3lrbE82R20yNjdwL2wvNzNQZDd5YzNMSThwMlJEdzhWM1VPK3pvTWZMVU15R0dpQ01GUDZjMDVTVVhZcDk0OCtmSlhGNlJFZkFsNXV5RVNBN0pmV09ORUpHMzhzTjlCblFkK3NxZXRyemc1UU1KRTdlUVZBR1k5RWpVRVNvWC9BQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIuMTU3MWFkZWM0ODFmMjhmOThmNTdhMjAzNWExYjgzMzcucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBckVsRVFWUjQybU40bnBEQXhBQUVRTnIwZVdMaXVtY0pDZkZBSEF2a1R3TGlCZ1lZQUFweUF3WFNnTFFJRUJzQXNRMVFneE5NVWc5SzV3SHhjaUNlRHBTY0E2U1pRWUkrUUoxVnp4SVRhNEYwQVpBL0VZaG5BZGx0UU5xVkFhZ3lFc2laQzhTeFFQWVVvR0F0RUpjQzJTMUFPaE5rUWpKUWNpR1FyZ2ZpYUNRM1pRTEZVMEd1YndTcUZnUFNTa0JCWWFpR2FpRE9BTEs1UUNyZGdKeDJJSjBOeEMxQWJBSFV3QUV6Q1FBY2dtOW9KSm9NSEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvanNMb2dvLmMxODJiN2UzNzQ2NTE5MTY5YmJjYThlODRlZDMyMTA0LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNrbEVRVlI0MmpXTElRNkRRQlJFLzdWNmxKNWdWUTI2b3JLaXJtblN0S0liVWtFVzhBZ2NSK0ROQVZCY0FRY2ZDSGtaTVc4eXBrQWlranVSUkRBbDVoMnRLVTNSeTdRSmg1OHAzL2FCa1k2ZTRoQWZycHhjVlg3WmhaNzZrL0UyQ3E4Tloxb2V5dlExQldwZTNDbTVFWFZaQUEzTll5dmxVQ2Z1QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9qc0xvZ29Ib3Zlci5mM2Q2NjllNjQyNzM5NjgyNDU5ZWIwNDIyNjEyNzc1OS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF0VWxFUVZSNG5GMlBNUXJDUUJCRi8xZ29XT2tOQkVId0hJSTNFQ3R4ZzBYdTRoWFNSQ3NSTDJDUkl5ZzI2YXhTSkZvTFFockh0NlV1ek15Zi8vL083Rm9kUWlwcFp0TGJ6VHBnbWZ2SHBUNndzQ1pKanU2K3dDREluMk5tSjJ0Q3lCSFc5QzNSZzVRRG1FS3lQQnIyOUN2YVNGVGtydHp2MUFGVHkzOURobGlCQ3NRdDNETWFjc0FhTXA2TWFGa3p4SGdGVCtJdkRyaVhMcDBSZGp4NGczQ0RxNm5UT0NGRm5OTThXUEdpanJsZFVrZVlMbDhGWEVib1VMSkNjUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nby4yZTc4YjRhNzMyNWYwZmIyYjEzMDc2NDUxODBjM2RhNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFYRWxFUVZSNDJtWEdzUTFBVUJoRjRmODFoaEJSc29COXNJQkVSYWxRQ2ExR0pkRll3QTc2Yy9meG9wREkrMDV4cjhuaDdPTi9nRWJkdTVHWll0V21sWk9EeVRmUWF6VE5YTnkwbkd6c1dveVNuRVF4bVZJS0tndkk4ZXNCN2tzdGtvV0N4d0FBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nb0hvdmVyLmZjZTMwNzUxZjE0Y2IyZDY1MjkzMmE4NThmNmI1ZjE4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW5rbEVRVlI0bkRXUHdRbURRQkJGZHk1Q3dKdVFRMG9JS1NBZHBJeXNEYVNQUU02cElhV2tFcjE0RWhSUmNIeC8wQTg3LzgvTW45bGRhM00yVHdFM0JZNDRHZEhkWkVnQ2t1RFVZZURTc0F3ditNVGttNjQ2QmZtTXVzQVBHYjQwS2lZV0NnMUhHRGtUMjBvWlBpUlhObFR3ajhrN3VrY1g2TTZhbkorSVA4V0JUU3RYbE9RVCtSbStXVnZYdWpkZWp5RzBnQ0pZUERKMC9FTFlEUWMyQTFNN0dKUllhOG9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbi44M2JjMmQ5NjZjMmZmZjQ0NDNhZDU5M2ZjYTkxZWIwYi5zdmdcIixcImhlaWdodFwiOjUxMCxcIndpZHRoXCI6NTEwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbkhvdmVyLmNmMjUyNWY4YzMyYWIwNzlkOTU1ZTg1NmIyNDkzNTA1LnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nby5jMWQ1N2NiOGZhYjQ4NDAwNjExOWYyMGI1NjI4NmFjNy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJoM0lPdzRCWVFCRzBlOUhxNUJJTkdRNmp5aW1tY1FXWlBxcHhDNm9SR1VKb3BiUVdZY2wzTHNXTFhIS0U0cHh3Z2NaR1Vyb0VSb2V2bTBKL2ZnTGEvWmNQQmtHTVlRakZXTnhia0pzUGZ6N3p0UEUyTkVSdzlVWENTc0xXemVzYVp3NURSVkxhODdjMkxGZytBWDk0VU5yNlcvOTlBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nb0hvdmVyLjM1YjkwZTM5NjU3YzMzZGFiNWJjNmQwMzdiZjcwMDdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW1VbEVRVlI0Mm1ONG5wakl5QUFFenhJU3hJSDRPeEJmZlo2UUlBZ1NBOHNCT1V4UUJTWkF2QWlJandERnZFQmlRSm9acmdCSTZ3TWxZNEc0R1lpcm9XSXNEREFBNUpRQ0plU0JXQVRJdmdJMFhnMHVDZVI0QVFWTFlIeWdvdmxBdkJoWlFTaFFRU2lTZ3NsQS9pcVkwWnBBekFqRUhrQ0Y1a0JKYlNEYkJJaGxnVmdHcEZvZXlOQ0FPcklXaUtjQ2NUUVFxejlMU09BRkFMZWRXL0g2NFNSL0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLmI4ZjIyNjgyMDI0YjFkMmRhMWFiODVhNzAxMjNmZTI4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVgwbEVRVlI0Mm1QQUFGY1pHUml1Z0xEd0ZZc3J2Q2dTVjlTdUtGOWhaYmdxZEZVQXlHVzdJbkhGNFlyK1ZWdUdLOU92VEx1U2N5WCtTZzJRbkhIVmhlR3ExaFhWSzFGWHZLOG9Yakc1NG5CRkVac3RWeGlCbU9rS0NETmRaUVFBUmFvb011ZzB1TnNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9teXNxbExvZ29Ib3Zlci5hYTk4NDFiZjM3YjAyODExNTk0MDU4MmVmMzE4MjFkZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsRWxFUVZSNG5HM09NUTdDUUF3RXdITkRoU2hJVFJrSklWcitrN3lLVC9BZDBrTkJTa0FwRVJ4amhaSlZObXVmMTNzWDVZZXg2MHFsSmFKRVZkRkN3eUMwTmFDQzQwYmZhczkwaXJIdnJjMHdMMkhYb0tWdmVzMkV0YmlQNFlObmdXdmM0bDNLS2cxSFRsOFpjTUlOcG5rdjVaU0duZWJGY2FCUEhBd2F1blIyaVp2WC80UDQrVTBTTE14M1FOWlpwdWF2ZmdGOFdUdnBQdStjM2dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvbm9ibGVMb2dvLmY3ZjQ3NjQwM2UwOGZhZjU2ZGEzNTQ3MWMzNTBlMDAzLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMjUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTJVbEVRVlI0MmcyRzIwckRRQlFBNTJ3M0cyTk5TaFZSOFFMeEgvUk53WWQrdWVBUGlBVkZFVnBFYkxXMHNVMWprdDFqWUlZWklidGQwdThOWW1lOE15S3VaL0NxZEZBSERmYm0rdFRNRm10V1pXT0txcFdmMXcwY1JSQVpqdnNSZG5SM3BlZG5KOHkvRjFUYlN2UDhndW4wZzdwdTVPVnRnbmw2ZnBlditaTGgvZ0ZsN2FYeFNOeFBjWjF0RU94bEdQTjUvOERFcENSSnpPUDRGMk4zeWZZY1lhYlkxY2JyNFRDaktCWGp0NW9rRVNKL3hKUmt0bnVYajRwNlRVcU1FaEFzVUFFSTdHaXdNWVJCcHJRcXdZaEtWMXlxZ05Lb2hIK2FxMkppRnRJUzZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL25wbUxvZ28uZjc1MDliNWU5YjI5NWE2YTgyNDY2MzI1YzhjOTVhZGMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWFVsRVFWUjQybTJOc1ExQVlCZ0Z2L3ptRVpSS0dxMFJGTFRVZ3Fqb1ZHekFEQ2E1dDQrSXFIZ3YxOTZaUEJ3dlRwNTlwcDVLQXhVZE5RV3QwU2pYcUpTSlJLVTIwOHJPUXNiQnpNbHBpZ2lwYVlrSjhQRi9wTzVPM3RIbkYxV2pOV0JLNkJoQkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbnBtTG9nb0hvdmVyLmEyYzA3ODZlYzVhMjIwNjJiNmQyMTVlNzdiZTQ3MGFiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9FbEVRVlI0bkVXUHV3MENRUXhFUFJDU0VDR0lLWUNqQVJMcVFOcXJnQWJvZ200UUFSS1ZRTUF2QklrUTgrWVFkNk1kMldQUGVyMjZsdEtQaU13SWhaUmtzb2FHYkdpVklkSEgvcS9ac0VIY3ljZndCa2Z3Qlo5WUo3cVVzdWJXS1RObnhDTnhTWE5QYzhxNHloTzJUQmhTZkZEY2thL0l6N0NDUEZIWGMyNTVzd1Y2Z09FUUVXLzBoOWdZMkNuNXdnOFlHbGc3dDZGbkEvRCtMbkk2ZkFFYVBqNHozcTdFU3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvcHl0aG9uTG9nby5iOGY0ZWQ5MTMzOWY1NjUwY2M3ZjU4ZjFlYzViYjVjYi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFia2xFUVZSNDJpV01zUW1EQUJRRkgrZ01EcUZEdUkzN1dDV2Q0QVNtRUxkSW1uc1FiR3dFc2JDMUVyNm8xOTBWSjZjU3BRZGFaeEtKTG1qQTRlcVJuRGRmRmdlOWF4ZnloK0JnWStIdm9KTTd3aU1UTXp0WG9LQ21KMWo1OFhMK2ZDckMwTnppUkhKRzY0RlNJajBCT0taTUJQb3pLOVFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvSG92ZXIuMzhhNDBlZWNiNWNkMWQ5ZTlmNTFlZGM5MWU1MTFlMzgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdWtsRVFWUjRuQjJPb1E3Q1FCQkVkOU5XWUVrZzRFbElxQWFMUjhBdlhFMXhLQVNmZ01DaHFPRVhPSVBIa2FCUm9OdWtLQ3loT2Q1eXlXUnVadWRtVDB2bllsSDlTZ2hURWRtQUYxamoxWGlSVmxrbVhQRGtpRG1HVS9RU0x0QmlEU1BFQ2t3dytpclNDeUdjNFNlNjBNbzV6L3M1Z1FiakRYOW9NQjRDYnl0T3ZGZ2dIZ1FTT0NIUWhsdTBlRnVSY3NscEdSQ1lNYXdabHVDS3Y3Y1Z3dEJPRGc2WWQvaEdPS1A1LzhrSW93RmRzQU1kc0ZYVkM0SDRCOEVRUmYxdWswSXlBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3JlYWN0TG9nby4yZmY3OGNjMzliNGFjODFmOGI2ZTYxODdhOWY2YWUxNS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFkMGxFUVZSNDJpV01NUTZDVUJpRC8vWHRobnNZVE5RNHNSc1owRW5jWVRBbUVsaUJDekN6d2tyQ2FiN2VCeDYwU1lldmFjME1SNklEZ1Y1eTVxV3pRZ3Irbkxoc2dFd2xMVFVWbWU5VElqb05qR3RHU2sweEQzb21abnJkRmZ2Smg1eGFqWEs5OTlNYklUKytPdXE2QVJ4UGd0VUp6bXdCUlRnOCtpU3ZmeHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ29Ib3Zlci5mNmRjMzA0Y2M0NThkYzEyN2MzY2U5YmQ1YmM0YTY1ZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFtRWxFUVZSNDJrM09zUXFETUJERzhWdXpGOStqV0doTEovZFNCOXVwRnBLdEhZcWc2S3ErZ0xPcnJvS1BwYS9oUHhMQndJKzdmSjVIeEo1SmF6VVpFODFhSCtETnhyeW9DckllZ2pNWEh4bFM3aWZxQmJKdCtDSm5TMDB0VWJocy9UdW1DZEF3MEZGN05PUUJZbUZOU1BCQWl3RWpXajdlRVFySERuMElmd1FsZldWNzZodXlEZHpnSThFZlIxejNqMVI0d25NaWw4a0NWVkZ4cWV5Y3BkTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3Nhc3NMb2dvLmU4MzUxYjIxOWIwZGE1YjRjMTAxMDA3NWUzM2ZkMmRjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9VbEVRVlI0bkIyT01RNEJVUlJGNzZPU3FEUWlVVkpTMklGWWdlaHR3eVlVS29sTzFPekdWNmdGTzFCTXhwdHo1LytjLysvN2MvTG1SYm1YcnFRYWxKR2NVckRseUdYQkg0YVJzZUdwUjM2UnIrUTZzU3pNS2Jad2x2U0FIZEtldTBJTUN3ZUtJM3hoRFcvNElCV0V0RERpWVFWOW1JRG5tY0lGaW9VeHdiK1lRUVZQY0pjYkRRWVdsaFFMT01FUDNLRmRDTzJRekVwZ3Q4dFhxc1A1dDlBQW9IOUhQTDQ5R2ZJQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci4yMzNmOTcwYzYyODBlODdlNmE3ZWI1ZTdkYTI3ZWZhOS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFvVWxFUVZSNG5DMlBNUTRCVVJSRjc2T1NxRFFpVVZKUzJJRllnZWlGVmRpRVFpWFJpWnJsakVJdHhnNFVrL0djaTVjNTgrLzdjL0xtL3loWDY2YWtHcFNSNHZsWEFEMENPYnQ4WGJEVFFycEh4cGxjMjdVd1psM0NVZElWTmtoYjFnb3hMT3hvOXZDRU9UeWdSQ29RMGtLUGpSbTBZUUErenhCT1VGam9FL3lMRVZSd0EwKzVNS0JqWVVvemdRTzh3Qk4reFpVc2NCa3lmTXNoMWVEOVpvSSsxOFk5akhpU1c0MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3NpdGVQb2ludExvZ28uNzA3ODQxYzljY2I1YzU4Y2ZmN2U1NThmMDJkOWE0OGQucG5nXCIsXCJoZWlnaHRcIjo4NixcIndpZHRoXCI6MjY5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFaMGxFUVZSNG5CWEx3UTFBTUJRRzRQOGQ2YVVjV0FCeFp3ODI2bUlkUVV6UUFVaWJIaXZWNUQweHdFZjd0bk5LaVdLTTBqWXRlZStscWlzb3BYQmZONUV4UnNaaGhITU9YZCtodkFVNVp6QXpyTFdnZVpwNVdSYzZqeE8vMUZvamhDQlBlaUFRK2dBRmlDMit1VnhWb3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvLjhiZThiNDhjYzBmNDdjNjc3NGVmM2IzMGVhMzA4MGE1LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmlXTk1RckNRQlFGZjQ3dzk0dUlwZDVLc1BNZUhzQkRXT1lZaXFXMjg3UVVRV3ppQm5LQ1RaWXc3UXhqTkRoQklpbHdHc041a3ZueW81TndVNUFwRlJVR3BXcjBmRGh6NWNaTFM1UHpuOWh4NHNDYmhSRmtGWTUwMnF0bFd4T1J1ZkNnMVowd3pkczFLellFTmdLYnpWUDVCaVR5YkFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvSG92ZXIuODhlZjE5YzUyMTg5YmJlODJiYTdiNGNkYTZkODUyM2YucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbUVsRVFWUjQya1hQUVFyQ01CQ0Y0Y2tSYkVURXBkNUtFQnJ3SGg3QVE3ajBHSXBMWFZlWFVpaVpSWnRDVDlEK1ExdTYrTWpMbXpBUWlYbnVzSUtQSVdSR3lkYVJuVmpRRUw2Y2lhSkNKTmQwaFRJVGdpY2t5cDVoYjZjQ0hUS3hWMmdabExqaGlSZCs5QnVKNDRQR2tJKzQ0c3o5ajdWdDhFalQrZ3RxN2lmY2NaZzNGSndKRDN5bTRSdGVLSnd1Mzl4aFM5N0R2aW9ESUw2SW43Z0NkbHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy91c0xvZ28uOTFmOGVmNTFiMDE4YzhiOTYzMjBmNmJhNTc4OGFiNWQucG5nXCIsXCJoZWlnaHRcIjo3NTAsXCJ3aWR0aFwiOjc1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBOEVsRVFWUjRuR1A4QndULy8vOW5ZR0ppWWdEUmpJeU1ETWlBRVNqNEQwZ3ovUHIxaDRHTmpZWGh3OGV2REkrZnZXV1FsaEJpWUdGaFltRDg4UEhMdnhsTERqRndzTE13NWllN01odzVlWVBoMmNzUC83Y2Z1Y2ZBd2d3MDcvQ0o2LzlzTGFZekhEcWV3YWlsSnNPdzY5QVZocWp1RS8vNWhGa1oxcGM1TURLMlQ5bjZyM0xkYllaSVBTSEdVRGNOaHRXN2JqQXMzL3I4LzZNRFNReXlVaUtNakcyVHQvNnJ5ajNDNEpXdXdoRHBxczRRRzdLSm9hTERncUc5UEpBQjZINEd4bytmdnY2N2N1TXhnN0s4T01PcEMzY1pMdDk2d1JEdVk4eWdyQ0FCVkFEMEZjd1hRSURzUDZBd1VCSUlBRnE0WnBBN0ZIVjVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nby5kZTVkN2JhOGMyMTZjMGI2OWI2NDZmOTRiNWEyM2EzYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJrMk5zUW5DWUJoRXIzQUZOOGdvT29EV0JoUXJLOEVCN0cxc0ZDRTdDQW9wa2dYK0RkNHRrK2JMUjlLa2VjYzdPRTZTeFlva0o5ZE9YVk5OK3FRUWJ1Ukx4bzQ2MlJJVThlWERRT0hCM3VGZWROejVFYnpZSnJPNEVqNzdSdkNmSnhVYmhIaFRIRFJhM0I1OXNFYUZVbEd5QkNPNWVRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLjZhNWFmYWMyZTNmOTliMzQ1NzkzNTk5NTM2ODJkYzJjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVrbEVRVlI0bkNXUE1RckNRQkJGWjhCU1NHVnY0UVZTQ1o1QlVEekJMcVN4OGlTS2hWaWtWRXN0RkVFVVM0bUlWN0NPNEJrQzQ1dGs0ZWRuLzd5ZDNkRXlCRkZWTWJPV2lsUW1JbmdrOVArdEF4MnloUEJENEd1QittakF3VnpMR0tkcXRxWTRJV3lqRGZBWkg1SVYzbUVQK2VPS2pMWnZDZzhPdlBBRCs2dCtRN2hBUGdsU2dqRys0a0VuL0VhbkdwaXhXUUpsZUlMbTZJaEdxSENnUjdFckluZkVDT29kVXVXUjdISUh4QmRRTXlZakF3UytGZkh1RDF4UlJIRGZ3ZkhCQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93YXNrb0xvZ28uOGE4ZTVjNjdmNDgyNTIyZjQ1OWM0OWFkZDJmNTE4OTYucG5nXCIsXCJoZWlnaHRcIjoyNTIsXCJ3aWR0aFwiOjEwMjQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVBVbEVRVlI0bkdPVW1IUTZrNEdSNFNVREE4TVhodi8vdVlBME13TWpJeXVRWm1KZytQOEpxT0RVTmFEQUZhRGtQNkRnTnlBV0F2SkJOQWlzQWdCQ21CQ0tLUFFzZ3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvd2luZG93c0xvZ28uYzgxMGJmODEwMDk5ZTFjYzMyYmU4MjRmYWVmOWVhMDkucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWTBsRVFWUjQybU5BZ0N0OFZ6U3Y4REZjRWI2U2ZhWHpTc1NWVTFjZVhmbHh4WnJocXZPVi8xZi9YNWtBSkVHMFBjTVY5U3Rycml5NUVucGxOWkJlZDFXRDRTcFk0Q3BVNElvR3d4V2dsaXYvcndLMWdHbDdocXNnUXp0Z2hsNjF4ckFXQUgzdVNkVUhGOG5IQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLjk5ZWU0ODcxMmFjNGM1ZTE4ZjNhNDEzZDY3OTkxOGM5LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW4wbEVRVlI0bkdXUHNRMkRNQkJGL3pGQW1rZ1JVcFMwckJISk8wUXB6UVJJbE9rekFLT2taNGRrQ1ppQjduaUhnQVpMaC8zL1BSL2ZOdGExekYxdUpyRWJ1N3VmSkYxeEJodHpQaU5lMUIzakI5aENsT2dMT3NXRWhOR3ZOenNhRFkxdFBXSkNoZkZCVE5TWENVOUljQlhvZDB5b3lIQUFPQmQ4QUhKT2lKNTBFYllEYUFDd0pJRGxGMXZJRzhhZlZzdTVwUGFRY1ZNMGxyV0czWjg1QTVGTVFxRzhUeEtvQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nby42NDM0NTA4ZWQ1MWE5MDZhNzU4NGM5OTJjNTcwODAxYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiMGxFUVZSNDJnM0pzUW5DVUFBRzRZTzNnTVlkM0NBT0VEQ1F4aGdEZ3NQWWlqWVdFUnpEYWU2Zkp6NE9ydmxJQ1c2Y25lcXhBTFpaN0IxYzBvYXFMcEloWGZEamhrd1pRMVlma3BzanpuYVpYZjJLMTV6SnJ0ckpYKzd1ZmJzRlBPUnA3ekV2VzhFaU5sNXFqYVQ4QWU1OVE4QlZTdTRxQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nb0hvdmVyLmRkNTU3ODczMTc2MjAwMWE4Y2I0ZWU1NDIzNzU1NmQ4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXYwbEVRVlI0bkNXUHJRb0NVUkNGWjdndjRNK3phQmEwR0ZVUURNTGRKZ2FMVGJCbzhBRU1Qb0JKc0FqbTFTaHM4QzNjcGlaQndSMi93UXZET1hlK2M4K3ltc2NZUk9ScklpVzB5UlRNU1ZXZlloWTBUeExCMUFnTUFVY1ZDZmcydXVXZTZTM0dFdWtGeXduQk52NE5TUEZyVVozN0p6cVl3c3dPdkRLQ0t3SXpnZ04yTDIvb0FSNm1XZ2J2Z1J2Z0dOaEhQOTVRWlRubDVZVmdSSy9jZDh5SVdYcURjT3JBTGpERkc3NkY5N2JNR3dMR2Y3T0NOdVIvem9UdWFQZ0JUTjlMQ0ozbHRFWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9iYXJjZWxvbmFTYWdyYWRhUGhvdG8uNTg4NjRmYzY3YTRiODNlZWEwNDE2Zjk4MTI4MTk0YjEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBMFVsRVFWUjRuQUhHQURuL0FVOXNYUDRvT21JQkV4MDBBUG43K2dBUUFmc0ErZ01JLy83Ky9nQUdCUDhCQVZ5SGwvNGVEaHdBRU5MVEFBVkZUd0FPQ2ZZQUN2LzFBUE1PSlFEdi9RY0FBV21xMmY4TDU5NEErVzlKQUM2Um5BRDREZ3NBQ2ZIWEFCMHBNLy92L3c4QkFhZkczLzdHd2NjQkorRzRBQTg0VkFBSUJlNEE3UFB6L3pJcUlnRHM4ZklCQWJPcG5QN201L0lBNmdJaUFBb2RLZ0FtOHNJQTVRTUxBQ1VaRFFEeDdlWUFBWkNNanY1TlUxUUI0T2IwLzhUckFBRU4yYk1BQ1FYNS8va0ZDUUFvSUJjQk9IeFJvdktnR28wQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2Jvd2xpbmdQaG90by40YWZiM2U4OGQ5YTM3YzhlOTNhODZkZGFhN2MwZjkzZS5wbmdcIixcImhlaWdodFwiOjY2NyxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUF4MGxFUVZSNDJnVkFiNHZCY0J6L2ZIOStkeHM3czNqZ1hGaVR1Z2ZYcnJ1NnVqeVNlQVZLUFBCeWxhUjRwcFJXSkpHeW1mKzIrWXBLaGNyajA5UlFzWktZRFZRNE1vQVR6MFBvNnBHOC9RSkdiRXRGclUrbk80TWlpOFJoczJYbGtZSWJhcGhua2hpbjg5QzFFVk83MDJYMlFyd0tDMzY1QVZmOTRMMjdJMkhhTldSL3F6d1o5dUNuc2pDS0pWemlCWWpMTmVCelJFajgvU0RoclpHUkIzeS9nNldaRTNDbVM3U2FkWmFLRGwrNUlVekhJUGtPS24vOXMyM25hRFYzRUFYRUwyOEdQUUcrT0VtcVFCQ3czd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvY2xpbWJpbmdUb3BQaG90by40YTUxMmFjZGUzYWYwNzY4YTcxZGY1OGI3MGM3YzRkOS5wbmdcIixcImhlaWdodFwiOjg4OSxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBSUNBWUFBQURlTTE0RkFBQUFrMGxFUVZSNG5BR0lBSGYvQVh5R2kvL3U0ZEQvM09MbkFTSWNHUUFCYzNsLy8vWGwwQUQ1QWdrQUVnOE9BQUdBYWsvL0FQOEdBTzhCRFFBQUFQOEFBYU9LYS83MzhmRUEwZWI3QU96ejlBQUJxSXBvL2d3RC9BREYyZXdBNHZEK0FBR3NpR0grQ2dYOUFPNE9NZ0RqNi9JQUFhcURXLzhIQU8wQURVZU9BQjBpSWdBQnBIbE8vaE1OOXdBSU9vWUFHaVlxQUxKSE9aNnplc0pOQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvY29wMjRQaG90by4wOGUwM2IxNzhiOGI3Yzc4MDhmNWEwYmI0ZjE1ZWQ2ZS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF4a2xFUVZSNDJnVkFTMDdDUUJqKy9tWXNsVGI0U25SRG9va1I0Z0ZjdUhiakRieUlOL0FDbnNZRHVDTzZjbUUwMUFmdmxGZGdtREJEVytZajh2ejA2S09vSWtvbHVMeHE0S05qY1hiZTVNUDlOY2FEb2FnNFNSQldxcXhHQjNBTGc5K3V4bnlkb3QrTVlaMmxDa0lsRUNEY0MvSDkxb0kyUjFpNUxkS2ZmOGI3Z1NpUTlONkwwd2E5dng1YW96Wk82cmZNc2d5MUpFQlE1aVdLdk9Rb2JmUHI5WVdmNzJUajJBSmJnK2xrUnVXc0EvMUdsbEl3cTEvSTNjMGhUbXM1amRiWUZJWHNBTEVIWVdZQkVsbDRBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9mcmFuY2VMYVNhbGV0dGVQaG90by4yZjhhNjI5YTZlYTFiODEzNTQxNzNhYzVmMjkyZmJkNC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF3a2xFUVZSNDJnVkF2V3JDUUFEK3ZwcWZRWklxcFZTd0hRcGRLdjZnYnVJaWpxN2k0L2tBTG9MNEFpSTRLamc0QndRaElLSzVKTWFjZHllY0x2ZmFzbTAyZm55UVFIakw4SlRLNUk4Y1JrbGF2MlZDcWR6RUlrTEJjWkNtS1M2eGhFZ2V1SXZJV05QNW1uNSt4dWRmRFk1WFFwSm1FQ0xCTFF6TU5kaVRwZFpFKytHQjFYWVh0bnNIbVNFNExreTErQTZ2VUNkSDQ3NjJrY0ZGREcyZFVQa2FvdHNjWUx2YllMV2U0YTNvUnRCS1V0R0RsTjhjOU1acy9IZnc0VmRROWpSZi9HUlRXZUVtVkZRQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2dpZXdvbnRQaG90by40OTJjZjhjMjMyYjg5MjJlOTk3NTUzY2NlODIyM2RmOS5wbmdcIixcImhlaWdodFwiOjY2NyxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVlBQUFBSUNBWUFBQURheG80NEFBQUFpRWxFUVZSNDJoWE5RWTRDTVF4RTBWK08weVBnL29lWjdSeGdEb09nb1oyT0RWbCtxWjVLdjMvL1dZZ1l5ZjE1Y01SZ2pJazNkeUdWTlhRbXBGUnd5czJzZW5kaVRGRGh6V2lYbjNJVFd2eTU3L1FWSFk3NGl0YzdhTzYxYlYwR1hLNGI5dGd4eVdyRXNjNG9qQ3E0M2E3bDR6eFp0UWJOalp5VGlJR1RLV3RMaFdZbUpwVXE5UUVkL0VzSlBNaDloZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvaWNlbGFuZFdhdGVyZmFsbFBob3RvLjUyMGM5ZmVmZWZkYjRiMmFlYTA4OWFmODM2Yjc4MzMwLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4ODksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWowbEVRVlI0bkFHRUFIdi9BWnVNaFA5SVVrWUFGUmtXQVAzOS9mL2UyK0FBd2JqQ0FRVUYvZ0FTRnhYL0FhMmhsLzhXR0JNQUNRb0kvL0h4OUFERnY4Z0E1ZDNaQUFFRS9nSGgzT2YvQWJLbW5QOE1EZ29BOGUveS8rZm02d0FFOU80QTFOcldBUEwyNlFINy9RYi9BYVNWalA4SUN3a0E2dWJyQU03azhQOFUrdkVBNWVQZEFQLy8rQUgvQXZqLy9MSkhMa28vb1o0QUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvbkFyc2VuYWxQaG90by4yZjQ5NTQ3NDJiOGZjNGMyODc1NjBkM2ViNGFkYjRiYS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6MTAyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBamtsRVFWUjRuQVZBc1FuQ1FCUjlQNGNFQ1llZ0NJb0RxTmdwNGdJaXBMU3dzYkcwY0lnVUx1UUdUcEFSQXFZUU1ZRjRHZ25ua2ZCRW91ak15aGprU1lySyt0Q2F0T1VMZy9FRWpRQnkzSVhzZFB0c3c4cGlybkI3Qk13ekQ4WG5DZWNheVA2MFpla014Vjdsc0FiY2I4cExQTUszZGlqZUNXUVRyZ2g0Vkw2V29RUll6dTZNMHhheXVnY0Y0Zzl6RGp2dy82cGFWZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uQ2FuYXJ5UGhvdG8uNDdiZWU5OWViYzhkN2Y0M2Q1ZTM4OTBiM2UwNThjZTAucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjEwMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWpVbEVRVlI0bkFWQU1RN0JVQmorL21pZTBLcW5wVHJvVUVzcmFTTWhZak9ZbUJ4Q0hNRDViQzVndGhsTWhsYVZrTkI4SXN2VmxublZ3VVZQTVhFTnpBWmZIczhmNU1wRDFIaEJobUZDcDZkcHpQZXlpV3ZRNnM3RHFRRDZZNlJPQ2JIOW1MNzFZN3JleVdMa1FsVUZIK1VUTlIwaWV3dWthYldwNm9xZUYwZ1NCYkJiSmtHaWF4cTQzakw4QWFpVks4V1Z3QUV0QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uQ2hlbHNlYVBob3RvLjM0NDFiYzE5MTEyMWYzOTUwYTJiMDJhMmJiOTNmYzQxLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqMGxFUVZSNG5BR0VBSHYvQVhWaE12OE1HVDBBSno5YkFCVVdGUUFWRXhMLy9QajJBTjdVeVFEejU5RUFBV3BjUFAvMzloVC9EeFlhQVFVTkV3QTNQajMvN2ViZkFMKzV2QURXNHZjQUFTNUFZLy8rL2VML0FBZjhBZmY3OXdEZDI4ai9BQlV0QURFYktnQUZBUU1BQVdKZlhmL1U2dDMvOHZuR0FRZ0pDZ0FGQWg3Lyt2bnhBUHI1NXdBRC93TUFUTGc1cUkzSFViRUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25Ub3dlckJyaWRnZVBob3RvLmI3ODE1ZWI0NDhhODJkYmFhYmVlM2QwNjc2YmY3MWQ5LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo3NTUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQW5VbEVRVlI0MmczTVNRN0JVQUNBNGY4MXI4UlEwWXFGaFROSXVBajN0SElDSzhMUzNxeTB0RHFyRGtuNUR2QUp5M1lyNysxVXNsWW5qa0thalFadFRVTUlSWlJGanR4dTFyaU94V2c4NFdHYTZIcVhWcWZOL1hwaWY3a2lGNHM1c2U4UVJ2Ri84T2tiT3EvYmdkMXFTYWdheU5sMFN1QUgxTlVhNm5CQWhTTGNwMTBWWllIUjA1QnBrcEJuR1pmemtTaEsrT1FRZUM1S1lKSTZYMzdMMjAxQXM1ZmJNUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uVmljdG9yaWFQaG90by5hMGZjYjhiZmU4Nzk0Zjg5YTgzNmUyMGIyZTZiNDliZS5wbmdcIixcImhlaWdodFwiOjc5OSxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVVBQUFBSUNBWUFBQUF4OFRVN0FBQUFxRWxFUVZSNDJnVkFRUXZCVUFEKzNqeXN0V3lreUtMSXdtRnhjM1AwVS93MC84SjFOYVZaSEJRdVMySXpXakhieTlzVG1TMlcrUzlsbUdnQm5MaUZndUNnMDJHZFNDeEdkRHlMdVRVZ2x0a0UxVFVGTWsrZ0dDb1pqeW93K3cxSVZrOERUNS9nV1lvb3VNQSt2Q0NkL0tzbzVaSElpU3c4Ynl0cU1oTVN1N3ZJdmdrMDNjRG56YkN4VjZCN2Q0MmJIMEN0Nm5pRUlkazVHU2hCQ2UxdUI1eHpGQ2xGc2F6Z0Q1WHlSeXh0RGZSTEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL21hbmNoZXN0ZXJVbml0ZWRQaG90by42ZmVlZDMzNGZkMDk2YmJjNGY1OGI4M2Q3YjU0N2Y1Yi5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFyVWxFUVZSNDJoWE1RUTdCUUJRRzRQOWxYcWRvTlFnVk5tN2hzazRnRG1EaEdoWVNjUUFoUXROV096TjlUKzIvZkhRNjdNVTZJWEV0aXNjZG5LWVl6K2FhakJLRUtDYmVYUjZvbTBhZEN0NzNDcUFLdyt3RnFoM0cxaXBQODV3UzZkQUk0RTBKTWdiNU1vWHZSSU13c2ZwVzFRc05iWVROekdBNlVGaFRheGs2MlBZTlhvVW40Z0dyQU5DeXdMOHlreEVtVEdpK04rWHI4UVRuMjM2TzFHVmJpcnRQajg0YUVDTmJyT2tIdEZKVVVLWnRRcE1BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbWF6dXJ5RG93blBob3RvLjA5NGZhMjU4NjdiM2ZhYWEyYzc4OWRhZjQ0ZjEzOThhLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXhrbEVRVlI0MmczTU8wNENVUlNBNGY4TWw1a0xNOFBEQ1BHWjJQaGdEY2FDUkN1dHJkMkdDekN4ZHhrdXdjYVNTbnNyYmRTZ05oSVk0RDRPZkF2NDVPN2hNZnEwSVdMcTVNMlVNcmRzRkZiM081WldMWWpacmxYTURWcHNXbmFMbEc0RzdXYmdhZlRNK09OTlpYQnlwTXovR0o2ZE16dytwTmRwOEQ3eDNOemU2L1hwZ2NqVnhXVjBJdExmNmpQb2x1eVVkVjYrWnZyNnozcEx4TFI2ZTdpb1d2bUUwWGVGL1YwaTN0Rkc4Tk9sbXMrZk1abEpKYzh5TlNGSVNCSVd6bWxFOFZGbEJYTCtSVTBhQ2R6ekFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL21jbGFyZW5QaG90by5lYzRmNjEwZDVjMWVhMmVlZGM1NTRkMjVlMjMzZWI2Ny5wbmdcIixcImhlaWdodFwiOjg5MCxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBSUNBWUFBQURlTTE0RkFBQUFrMGxFUVZSNG5BR0lBSGYvQVhwN2NmNFBEUTRBQmdjSEFON2c1QUFCanBhVS9nVUZCZ0FFQWdJQXpzM01BQUhRdzY3LzVmRDJBUGIwOHdEVDFkY0FBYStZZi8vM0JSVC9CZzBKQU9QbzhRRUJqSUo3Lzl2Snp3QVhGZzRBMi9IMUFBRmRWMUQrNE56aEFPM2M0Z0QrRkE0QUFUNDVNdi8zL1FELy9mNy9BZm40K2dBQk1pOHMvdjM5L2dENSsvd0EvUDcvQUEzRVF1UjFCMm81QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3Mvbm90cmVEYW1lUGhvdG8uY2FhYzBkNzk5MWMyMjRhYmU5MDRkNDQwYWI3MzFhNDkucG5nXCIsXCJoZWlnaHRcIjo2NjcsXCJ3aWR0aFwiOjUwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBdzBsRVFWUjQyZ1ZBelVvQ1FSei8vV2JHYld6ZFVTSzZkU2dRNmxRUDBCdDA2UUc3OWdoZVBFVjBMd3FrQ0JKMC9ZQkIzZlVEMTlYWnYvRDVwVk14YkVDcFlFOWpYTFZ2Y2Q1eVVCbzdacU1lZlByTFNKT1JUYkRhbGxRWHJST0pWSUZ5T1lEVkJ6UnNEZE8wTDhiL2Z6TVVCVkR1a1BzQi9ub2ZlSHZ0MHZqaEZMUERUQnJKR2ZQNUJPTTBRMXgzTU51Nms3dWJlOVEwRVNtaTAzM0gxK2VQbU12ck5qUTFsbk12aXl5SE5jRFQ0d05VWWpWbHYwWVY5cFFRMkV4aXVLYmpFWWl4VDdHY3Z2d1hBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9wYXJpc0VpZmZlbFBob3RvLmY1ZGY1MmMyZmI1ZDc4Y2ZmYmRiOGU2NThjOTcxOWUzLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXcwbEVRVlI0MmdXQXZ5OERVUnpBUDkvWDkzclhhNjk0SjNXREFZbUVSTmh0QnZFLzJteEdpOVVxRWhHRVdBd1dhWWdMUGIzcjljZmR0NUhEbzRQbStlbEZMaTZ2MmQvZDR2enFsWThmMVhrMVlWeE94YTUwWWxMUW05dDdjcGRpZWhIZVdINHpROVN5YWdkaEtPOUFZR3RNcXlGWmRhU2JBNFpEcDNrK0VkdmYyZGJqSkJiZkMraldHZlhYRzN0ZWRNMVhmSm9LT1RzOWFhS2dqVFBDZXVJcHl5bDNENCtrR3pHejJSeWIvUzBZdDVGTzRQUy8rQlpRd201ZnMxRkZVWXhrQ1d1VlIva1FvT25aQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvcGxheWluZ0lFTVBob3RvLjJmNWY0ZmM1ZjQxMjY2ZTM0ZGJmNWQ3OWIwZDQ1Yzc0LnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXdVbEVRVlI0MmdWQTMyc0JjUUQvZk13MnQrdDdOeVBXYnJ1YjNIYWJGRStLUElyeVZ5c3Z5b05TNnZ5TXVCQWQzWXRPdWEvWStDMUZWZTFHRVo3UkZUOFFpVGVrVWtrWkpJRHJ4eGZqekdUeEdLeGtXbEZoYkFQb3pUektsUUlXbW9NdzY4aFliVGJndzNETWsvck96YjlKMHpiNFhYUW8vVG5paHpuWnMvNmlqdWZTclRmaFdTYXdIT1BUZUpVN1B3UVZuV3psN0VqSUM1TGFNM0tLd0RtbVlqSno0UjE4OUFFd0RVUkhnRzBySTYyWEovcTZqWHpCbHRmOUdzRjB4RHNyUDBHZUtVWjM3QUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvcnlzaWFua2FQaG90by5iOGI1MDM2MTQwNTczNDIzOTEzYTcwM2JmOGQ5OWI2Ny5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF6a2xFUVZSNG5BM0t2VXBDWVJqQThmOXp6dHY3bWxZU2RDcEJtMnFJYklodW9rdUlodWdPYXRHbHVidG83RHJhb2lDaUQzS1FralRGYnpoeTBFR1U5OUhwdC96azd2N05TMmdrdEFhWHRxeXRPK2FndTFuSE9JbEZIaDUvdmJFVzQxWklaeHlwcFRPL0hGNEpCZVM2Zkt0NytUejlhY0JPRkpITFJhUldNMWpyTkVCRkN0djQ0dEdCWkRjMlNTWUJsZTkzR2dPais4VVRtcjFFcEhSejRaK2VQemc5UEdhcllHajNocnkrL0RHS0J5Z1dLWmZPZktjZXkrWDVsVllybjFLdlZhbDFaOXBvdGZuNitaY0ZGYzVId2xwQzF5Z0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9za2lTd2lzc1Bob3RvLmQ1ZjNiYjljOTZlZjNlYzEyNzZmZmUzZTIwODM2MmYyLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQW8wbEVRVlI0bkEyT3V3NEJRUmlGejVrWldTSkI0ZUVsT2hHbGptaEVwZFFwUElKcXM1TmRaczNsLzAxN3JoKzNoNU5NWncxSmc1Z3lZZ0dRa3pwTFRKd2hqK2ViRENHQ1ZWZlg0TjM5ME9pSTlXcU9yaHZBeC9PbE9SZTBiWWVVRTBvUitENmdDTlg3dmk1Yzd1SW1qdFlhR0swWDQ0aFVxSDFJVUZGeWQ3d0tTS2dDbjIrQTl3T1dxd1UwU3cxVWE3TS9TMjFUUk5WWTBsbUxHTE9HTWFFaThnL3pVMkdDdzZZL3RBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9zdXNoaVBob3RvLmY5OTUwYzQ4N2U4NDU0ZTI0ZWIzNzEyZGQyM2RjMzRlLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQXdrbEVRVlI0MmczS1Rhc0JVUndINE45L3pwblJtUnYzampzS0lZUzhsTExCeWtlUWxXK3NGTEVpQytWbGdSSkdYcHFHY3c2TFovZFF0NVZXZHZ5SCtKRkRTZ3YvVGhqRVRDMzlBQVl4NHVGMENmTHA2OE55Z0pBZGcvSWpTR2FMVU5XdmIrVEc5a3JtVXlKNFdkanNqcWhHWGVTYkhaeWNpSDZFQkZFdkFTWC9YT28zQzdBaFlEYmFtRTRXK3A0cTRMZFNKKzRaVVFpcE5CSTFPTGt5NE1hUThXNllqY1pJaWJmbTcwRGhiREVhenRlNllUTEtzeXRzVHRxNDdPR3RCSDBBWVpKRHI5UWppTEFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3Mvc3dpc3NNdXJyZW5QaG90by42NTJkOGUzMzEwYTk2MzkxZTg5ZDdjYzliYTJmYTAzNC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6MTA1NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBajBsRVFWUjRuQUdFQUh2L0FXR2IyZjhVQ3dQL0NRTDlBQVFDL2dEMjZ1TUIvdnIzL3hNTUJBQXdMaWdCQVdTSnUvOENCZ2ovK2ZmekFBancyQUFMRGhJQjl2UHYvLzhCQlFBRkRCUUFBY1BIelArTG1yMy81QWdXQUVYLzFnRDdDQkVCN2dzWC93TDcrUUQyOC9BQUFiV3VxLy9NMGR2Lzl3NFhBQnl5cUFEOE5rQUJDem8vL3diOStRRDMrZndCTHJzOU1zYnRkNUFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3Mvc3dpc3NQaXpHbG9yaWFQaG90by42ZDRkOThhODZiY2JiMGEwOTFmZWJkNWUwOTk0OTA2My5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF4RWxFUVZSNG5CM092UTdCVUJnRzRQZHJ0ZFJmSXlsU2tkREJKblpHa3d1d3VnZXhNZHZGN0FiRWJqTllKRnlDd1dqQ1FmKzBwZWNRTi9Ea29XSnZ4b1hya3hUNGlNTVhaQjRoNWhCdkxrTWtVMFN0NFpyZm1JdnoxUWJDQVBBaklLTkNOM0pJcXdxb1BWcUpRbHBEMWNqK0JVTlA0ZU04WVorT0l0OXFFblg3RXo3b2QwalZOTERiQll4ZEVYaVMwQlVKWnFOQ3RGaXVlZUI3Y0d3UDdQNkFWYStoWkpyWWJIZVFJd2MwbnM1NXVXU1FuRWdLSW9rc3k0S3FRQnoyQnp4LytTOStlRkZuT1hRM0FBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy93YWxlc1Bob3RvLjI3M2IyMTgxYWJlNmNjNzYxZTI5OWU3M2RhYzQxZTVlLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQTBVbEVRVlI0bkFIR0FEbi9BY3pSM1A0REJnVUJBUU1DQUFrR0NBRDYrZmtBL3YvLy8vNy8vd0FDQUFFQkFjN1YzLzc4OGZFQTU3dTlBQkU5T3dBT0doa0E5ZlAxQVA0QkFBRGYzdHdBQWNMSXovL2h4TU1BM0hSdUFCZDFaQUFyVkdzQTgvRHdBT25zNi8vVzFzOEJBWWlHaWY3MXU3a0J6KzNBQUJvbVNBQWRMem9BOWVqZy93UUxFQUFBL1BvQkFXWnhldjROMTlnQThydklBUFEzS2dBVkhoQUFJaElOQUFrWklBRHU0ZG9BQVQ1VVlQNDU3dW9CTCtmcC8vc0ZDQUhZTUNVQUd3NEMvd0lKRGdBREJBTUJObHRVRmlOMWtZWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Byb2ZpbGVQaWN0dXJlLjQzNzAwMzQ4MWNmMDM3MjM4ZGVjOWZjYWRiYjIzMjY4LmpwZ1wiLFwiaGVpZ2h0XCI6ODIyLFwid2lkdGhcIjo4MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFBQUFRQUJBQUQvMndDRUFBb0tDZ29LQ2dzTURBc1BFQTRRRHhZVUV4TVVGaUlZR2hnYUdDSXpJQ1VnSUNVZ015MDNMQ2tzTnkxUlFEZzRRRkZlVDBwUFhuRmxaWEdQaUkrN3Uvc0JDZ29LQ2dvS0N3d01DdzhRRGhBUEZoUVRFeFFXSWhnYUdCb1lJak1nSlNBZ0pTQXpMVGNzS1N3M0xWRkFPRGhBVVY1UFNrOWVjV1ZsY1krSWo3dTcrLy9DQUJFSUFBZ0FDQU1CSWdBQ0VRRURFUUgveEFBVUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQy85b0FDQUVCQUFBQUFGLy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRUNFQUFBQUgvL3hBQVVBUUVBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOW9BQ0FFREVBQUFBSC8veEFBZEVBQUNBUVFEQUFBQUFBQUFBQUFBQUFBQkFnUUFBd1VoRWhReS85b0FDQUVCQUFFL0FKR1RpOStPUWIybjRCazhrN1Vpdi8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFJQkFUOEFmLy9FQUJRUkFRQUFBQUFBQUFBQUFBQUFBQUFBQUFELzJnQUlBUU1CQVQ4QWYvL1pcIn07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRDb250YWluZXJcIjogXCJhYm91dF9hYm91dENvbnRhaW5lcl9fMXlvLUlcIixcblx0XCJjb250ZW50XCI6IFwiYWJvdXRfY29udGVudF9fMXNXRExcIixcblx0XCJzdW1tYXJ5XCI6IFwiYWJvdXRfc3VtbWFyeV9fajNrdTFcIixcblx0XCJob2JiaWVzXCI6IFwiYWJvdXRfaG9iYmllc19fMTBhTktcIixcblx0XCJuZXdzbGV0dGVyc1wiOiBcImFib3V0X25ld3NsZXR0ZXJzX18xWGU0TlwiLFxuXHRcImNvbW1pc3Npb25zXCI6IFwiYWJvdXRfY29tbWlzc2lvbnNfXzEwb0NCXCIsXG5cdFwic2Nyb2xsR2FsbGVyeVwiOiBcImFib3V0X3Njcm9sbEdhbGxlcnlfX1pRQzJlXCIsXG5cdFwiaGludFwiOiBcImFib3V0X2hpbnRfXzFPOFJ1XCIsXG5cdFwicHVsc2VcIjogXCJhYm91dF9wdWxzZV9fMXhIbkZcIixcblx0XCJwaG90b0dhbGxlcnlcIjogXCJhYm91dF9waG90b0dhbGxlcnlfX25la2pNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwaG90b0dyaWRcIjogXCJwaG90b2dyaWRfcGhvdG9HcmlkX18zNm0yTlwiLFxuXHRcImdhbWVcIjogXCJwaG90b2dyaWRfZ2FtZV9fMmh5MV9cIixcblx0XCJza2lcIjogXCJwaG90b2dyaWRfc2tpX18zN3cwalwiLFxuXHRcImNhclwiOiBcInBob3RvZ3JpZF9jYXJfXzRMVmE1XCIsXG5cdFwic2t5c2NyYXBwZXJcIjogXCJwaG90b2dyaWRfc2t5c2NyYXBwZXJfXzN5YVhqXCIsXG5cdFwibGFrZVwiOiBcInBob3RvZ3JpZF9sYWtlX18xUEo0SFwiLFxuXHRcIm1vbnVtZW50XCI6IFwicGhvdG9ncmlkX21vbnVtZW50X18zcnotMFwiLFxuXHRcInN1c2hpXCI6IFwicGhvdG9ncmlkX3N1c2hpX19fWElTY1wiLFxuXHRcImJvb3RzXCI6IFwicGhvdG9ncmlkX2Jvb3RzX18yZXM4d1wiLFxuXHRcIndhdGVyZmFsbFwiOiBcInBob3RvZ3JpZF93YXRlcmZhbGxfXzF0Vk9nXCIsXG5cdFwiY3Jvc3NcIjogXCJwaG90b2dyaWRfY3Jvc3NfXzJtUjZQXCIsXG5cdFwiYm93bGluZ1wiOiBcInBob3RvZ3JpZF9ib3dsaW5nX19vWmo2VlwiLFxuXHRcIm1hbmNoZXN0ZXJcIjogXCJwaG90b2dyaWRfbWFuY2hlc3Rlcl9fSC1ub2NcIixcblx0XCJhcnNlbmFsXCI6IFwicGhvdG9ncmlkX2Fyc2VuYWxfXzNUZEdFXCIsXG5cdFwiY2hlbHNlYVwiOiBcInBob3RvZ3JpZF9jaGVsc2VhX18xMjVCZFwiLFxuXHRcIndhbGVzXCI6IFwicGhvdG9ncmlkX3dhbGVzX18xODdlSFwiLFxuXHRcImFscHNcIjogXCJwaG90b2dyaWRfYWxwc19fSW9yckxcIixcblx0XCJjaHVyY2hcIjogXCJwaG90b2dyaWRfY2h1cmNoX18xZ1hNa1wiLFxuXHRcIm11cnJlblwiOiBcInBob3RvZ3JpZF9tdXJyZW5fXzFSMG1pXCIsXG5cdFwiZWlmZmVsXCI6IFwicGhvdG9ncmlkX2VpZmZlbF9fVjYyU3FcIixcblx0XCJicmlkZ2VcIjogXCJwaG90b2dyaWRfYnJpZGdlX18zTFdKaFwiLFxuXHRcImNsaW1iXCI6IFwicGhvdG9ncmlkX2NsaW1iX18tQW05RFwiLFxuXHRcImJhcmNhXCI6IFwicGhvdG9ncmlkX2JhcmNhX18yNnBQMlwiLFxuXHRcImNvbG9yVXBcIjogXCJwaG90b2dyaWRfY29sb3JVcF9fM3daLURcIixcblx0XCJwaG90b0luZm9cIjogXCJwaG90b2dyaWRfcGhvdG9JbmZvX18xQWlWelwiLFxuXHRcImZhZGVJblwiOiBcInBob3RvZ3JpZF9mYWRlSW5fXzM1anRwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX194S0lxSFwiLFxuXHRcImdvVXBTcXVhcmVcIjogXCJmb290ZXJfZ29VcFNxdWFyZV9fMlBjS1JcIixcblx0XCJjb3B5cmlnaHRzXCI6IFwiZm9vdGVyX2NvcHlyaWdodHNfXzItaW1vXCIsXG5cdFwiaWNvbnNcIjogXCJmb290ZXJfaWNvbnNfXzJVeF9fXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhYm91dEluZm9cIjogXCJtYWluaGVhZGVyX2Fib3V0SW5mb19fMXc2dS1cIixcblx0XCJoZWFkZXJcIjogXCJtYWluaGVhZGVyX2hlYWRlcl9fMmR3ODFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRlY2hub2xvZ2llc0ljb25zXCI6IFwidG9vbHN0ZWNoX3RlY2hub2xvZ2llc0ljb25zX18zbmQxc1wiLFxuXHRcInRlY2hub2xvZ2llc0ljb25zUm93XCI6IFwidG9vbHN0ZWNoX3RlY2hub2xvZ2llc0ljb25zUm93X18xcW1TTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaWNvbkNvbnRhaW5lclwiOiBcImljb25faWNvbkNvbnRhaW5lcl9fM2pVSTRcIixcblx0XCJpY29uXCI6IFwiaWNvbl9pY29uX18xN1RxWVwiLFxuXHRcImljb25BY3RpdmVcIjogXCJpY29uX2ljb25BY3RpdmVfXzFGNDYyXCIsXG5cdFwiZmFkZUluXCI6IFwiaWNvbl9mYWRlSW5fX2VwV3NzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtZW51QmFyXCI6IFwibWVudWJhcl9tZW51QmFyX18yWFc2a1wiLFxuXHRcInRpdGxlXCI6IFwibWVudWJhcl90aXRsZV9fM3lLUWpcIixcblx0XCJzcXVhcmVJbml0aWFsc1wiOiBcIm1lbnViYXJfc3F1YXJlSW5pdGlhbHNfXzJmSWMzXCIsXG5cdFwibmFtZVwiOiBcIm1lbnViYXJfbmFtZV9fM1lld3VcIixcblx0XCJ0YWJcIjogXCJtZW51YmFyX3RhYl9fbUhvMGxcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpbWVsaW5lR3JpZFwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRfX0ZOQ05JXCIsXG5cdFwidGltZWxpbmVHcmlkSXRlbVwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRJdGVtX18zQnE5cVwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1DYXJkXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1DYXJkX18zandTYlwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkX18zUGJNclwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1XaWRlXCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lR3JpZEl0ZW1XaWRlX18xTHQwSlwiLFxuXHRcInRpbWVsaW5lUG9pbnRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVQb2ludF9fMTlPYzBcIixcblx0XCJob3ZlclRpcFwiOiBcInRpbWVsaW5lZ3JpZF9ob3ZlclRpcF9fRXU1MUVcIixcblx0XCJwdWxzZVwiOiBcInRpbWVsaW5lZ3JpZF9wdWxzZV9fMUN6UHFcIixcblx0XCJjYXJkQ29udGVudFwiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudF9fM1JDUnlcIixcblx0XCJjYXJkQ29udGVudEhlYWRlclwiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudEhlYWRlcl9fMU5HSzVcIixcblx0XCJjb21wYW55SW5mb1wiOiBcInRpbWVsaW5lZ3JpZF9jb21wYW55SW5mb19fTTdMSWZcIixcblx0XCJjb21wYW55VGl0bGVcIjogXCJ0aW1lbGluZWdyaWRfY29tcGFueVRpdGxlX18ySEpVTVwiLFxuXHRcImNvbXBhbnlMb2dvXCI6IFwidGltZWxpbmVncmlkX2NvbXBhbnlMb2dvX18zNXE0alwiLFxuXHRcImNhcmRDb250ZW50RGV0YWlsc1wiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudERldGFpbHNfXzNWd3JiXCIsXG5cdFwiY2FyZENvbnRlbnREZXNjcmlwdGlvblwiOiBcInRpbWVsaW5lZ3JpZF9jYXJkQ29udGVudERlc2NyaXB0aW9uX18yQmlLVFwiXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9vbHRpcFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9
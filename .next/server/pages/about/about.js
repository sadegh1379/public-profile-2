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
/* harmony export */   "londonCanaryPhoto": function() { return /* reexport safe */ _photos_londonCanaryPhoto_png__WEBPACK_IMPORTED_MODULE_84__.default; },
/* harmony export */   "sadeghLogo": function() { return /* reexport safe */ _new_photo_sadegh_jpg__WEBPACK_IMPORTED_MODULE_85__.default; },
/* harmony export */   "sadeghLogo_2": function() { return /* reexport safe */ _new_photo_sadegh_1_jpg__WEBPACK_IMPORTED_MODULE_86__.default; },
/* harmony export */   "nextLogo": function() { return /* reexport safe */ _new_photo_next_js_png__WEBPACK_IMPORTED_MODULE_87__.default; }
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
        lineNumber: 50,
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
        lineNumber: 57,
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
        lineNumber: 64,
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
        lineNumber: 71,
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
        lineNumber: 78,
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
        lineNumber: 85,
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
        lineNumber: 92,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
        lineNumber: 101,
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
        lineNumber: 108,
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
        lineNumber: 115,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
        lineNumber: 124,
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
        lineNumber: 131,
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
        lineNumber: 138,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
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

/***/ "./assets/new-photo/next-js.png":
/*!**************************************!*\
  !*** ./assets/new-photo/next-js.png ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/assets/new-photo/next-js.a36dac0e468df46a4f79fb093263b6b6.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAaElEQVR42i3LsQkCQQBE0deENRyL3QkWYWAgmAmGFmAo3KFgBzZgrLJG6mXjBsdnYPjwhWIwNnpdULxk4qnjLE7tVr20+YmlhbuV+DCKvY2to/hy0YRq7SYG5t4iHg6qIpq6aqGdWfwBEzMw/yK+GtoAAAAASUVORK5CYII="});

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/about/about.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vcGFnZXMvYWJvdXQvYWJvdXQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9hYm91dC9waG90b2dyaWQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9kYXRlLnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9mb290ZXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL2luZGV4LnRzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL21haW5oZWFkZXIudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL3Rvb2xzdGVjaC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2ljb24udHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvbWVudWJhci50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL3R5cGluZ3RleHQudHN4Iiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy93b3JrL3RpbWVsaW5lZ3JpZC50c3giLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9jaGV2cm9uRG93bi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMi5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvbG9nb0NvbW1pc3Npb24ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2FmZmluaXR5TG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2JlbGF5VGhlQ3BwTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ib25vYm9QcmVzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9jc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvY3NzVHJpY2tzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9kYXZpbmNpTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvZ2l0TG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9naXRodWJIb3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9nbWFpbC5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9nbWFpbEhvdmVyLnN2ZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2hhc2hub2RlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9odG1sTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9odG1sTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2plc3RMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvanNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2pzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xlc3NMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL2xlc3NMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGlua2VkaW4uc3ZnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGlua2VkaW5Ib3Zlci5zdmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9saW51eExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbGludXhMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL215c3FsTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25vYmxlTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9ucG1Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL25wbUxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3B5dGhvbkxvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvcmVhY3RMb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2Fzc0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy9zaXRlUG9pbnRMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3RzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy90c0xvZ29Ib3Zlci5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy91c0xvZ28ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbG9nb3MvdnNMb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3dhc2tvTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nby5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3lhcm5Mb2dvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL2xvZ29zL3lhcm5Mb2dvSG92ZXIucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbmV3LXBob3RvL25leHQtanMucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvbmV3LXBob3RvL3NhZGVnaC0xLmpwZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL25ldy1waG90by9zYWRlZ2guanBnIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2JhcmNlbG9uYVNhZ3JhZGFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvYm93bGluZ1Bob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9jbGltYmluZ1RvcFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9jb3AyNFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9mcmFuY2VMYVNhbGV0dGVQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvZ2lld29udFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9pY2VsYW5kV2F0ZXJmYWxsUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvbkFyc2VuYWxQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uQ2FuYXJ5UGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL2xvbmRvbkNoZWxzZWFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uVG93ZXJCcmlkZ2VQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbG9uZG9uVmljdG9yaWFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvbWFuY2hlc3RlclVuaXRlZFBob3RvLnBuZyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vYXNzZXRzL3Bob3Rvcy9tYXp1cnlEb3duUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL21jbGFyZW5QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvbm90cmVEYW1lUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3BhcmlzRWlmZmVsUGhvdG8ucG5nIiwid2VicGFjazovL2ZpcnN0X25leHQvLi9hc3NldHMvcGhvdG9zL3BsYXlpbmdJRU1QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3MvcnlzaWFua2FQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc2tpU3dpc3NQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc3VzaGlQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc3dpc3NNdXJyZW5QaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvc3dpc3NQaXpHbG9yaWFQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9waG90b3Mvd2FsZXNQaG90by5wbmciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL2Fzc2V0cy9wcm9maWxlUGljdHVyZS5qcGciLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3BhZ2VzL2Fib3V0L2Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9hYm91dC9waG90b2dyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL3V0aWxzL2Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaG9tZS9tYWluaGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2ZpcnN0X25leHQvLi91dGlscy9ob21lL3Rvb2xzdGVjaC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvaWNvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvbWVudWJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vdXRpbHMvd29yay90aW1lbGluZWdyaWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9maXJzdF9uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZmlyc3RfbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtYXdlc29tZS1yZXZlYWxcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2V4dGVybmFsIFwicmVhY3QtdG9vbHRpcFwiIiwid2VicGFjazovL2ZpcnN0X25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9maXJzdF9uZXh0L2lnbm9yZWR8RTpcXHdlYiBkZXNpZ25lclxcbmV4dCBqc1xcbXlfcHJvamVjdHNcXFBvcnRmb2xpby1zYWRlZ2hcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJJbWFnZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9leHRlbmRzMiIsIl9yZWFjdCIsIl9oZWFkIiwiX3RvQmFzZSIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJkZWZhdWx0TG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImRlZmF1bHQiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsIndpZHRoIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwdXNoIiwicGFyc2VJbnQiLCJsZW5ndGgiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsImZpbHRlciIsInMiLCJraW5kIiwiU2V0IiwibWFwIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJpIiwiam9pbiIsImdldEludCIsIngiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJnZXQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJpbWciLCJwbGFjZWhvbGRlciIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsInVzZVJvdXRlciIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ2YWx1ZSIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsIm5hbWUiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYXJzZVJlbGF0aXZlVXJsIiwiY2hhbmdlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJhdXRoIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJpdGVtIiwiYXBwZW5kIiwic2VhcmNoUGFyYW1zTGlzdCIsImZyb20iLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJWQWJvdXQiLCJjc3NUcmlja3NMb2dvIiwiYmVsYXlUaGVDcHBMb2dvIiwiZHJpYmJibGVMb2dvIiwiaGFzaG5vZGVMb2dvIiwiYm9ub2JvUHJlc3NMb2dvIiwic2l0ZVBvaW50TG9nbyIsImZyZWVDb2RlQ2FtcExvZ28iLCJsb2dvQ29tbWlzc2lvbiIsInNjaGVtZUNvbW1pc3Npb24iLCJwb3N0ZXJDb21taXNzaW9uIiwiY29taWNDb21taXNzaW9uMSIsImNvbWljQ29tbWlzc2lvbjIiLCJWUGhvdG9HcmlkIiwidXNlVHlwZWRUZXh0IiwiYmFyY2Vsb25hU2FncmFkYVBob3RvIiwibG9uZG9uVG93ZXJCcmlkZ2VQaG90byIsImNsaW1iaW5nVG9wUGhvdG8iLCJwYXJpc0VpZmZlbFBob3RvIiwic3dpc3NNdXJyZW5QaG90byIsIm5vdHJlRGFtZVBob3RvIiwiZnJhbmNlTGFTYWx0dGVQaG90byIsIndhbGVzUGhvdG8iLCJsb25kb25DaGVsc2VhIiwibG9uZG9uQXJzZW5hbFBob3RvIiwibWFuY2hlc3RlclVuaXRlZFBob3RvIiwiYm93bGluZ1Bob3RvIiwiZ2lld29udFBob3RvIiwiaWNlbGFuZFdhdGVyZmFsbFBob3RvIiwicnlzaWFua2FQaG90byIsInN1c2hpUGhvdG8iLCJsb25kb25WaWN0b3J5UGhvdG8iLCJtYXp1cnlEYXduUGhvdG8iLCJsb25kb25DYW5hcnlQaG90byIsIm1jbGFyZW5QaG90byIsInNraVN3aXNzUGhvdG8iLCJwbGF5aW5nSUVNUGhvdG8iLCJnZXREYXRlIiwiZGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJWRm9vdGVyIiwiZ29VcFNxdWFyZSIsImxpbmtlZEluTG9nbyIsImxpbmtlZEluTG9nb0hvdmVyIiwiZ21haWxMb2dvIiwiZ21haWxMb2dvSG92ZXIiLCJnaXRIdWJMb2dvIiwiZ2l0SHViTG9nb0hvdmVyIiwiVk1haW5IZWFkZXIiLCJWVG9vbHNUZWNoIiwiaHRtbExvZ28iLCJodG1sTG9nb0hvdmVyIiwiY3NzTG9nbyIsImNzc0xvZ29Ib3ZlciIsImpzTG9nbyIsImpzTG9nb0hvdmVyIiwicmVhY3RMb2dvIiwicmVhY3RMb2dvSG92ZXIiLCJ0c0xvZ28iLCJ0c0xvZ29Ib3ZlciIsInNhc3NMb2dvIiwic2Fzc0xvZ29Ib3ZlciIsImxlc3NMb2dvIiwibGVzc0xvZ29Ib3ZlciIsIm5wbUxvZ28iLCJucG1Mb2dvSG92ZXIiLCJ5YXJuTG9nbyIsInlhcm5Mb2dvSG92ZXIiLCJnaXRMb2dvIiwiZ2l0TG9nb0hvdmVyIiwidnNMb2dvIiwidnNMb2dvSG92ZXIiLCJ3aW5kb3dzTG9nbyIsIndpbmRvd3NMb2dvSG92ZXIiLCJuZXh0TG9nbyIsIlZJY29uIiwidG9vbHRpcElEIiwib25Ib3Zlckljb24iLCJkZWZhdWxJY29uIiwiVk1lbnVCYXIiLCJhY3RpdmVUYWIiLCJjb2xvciIsInNwZWVkIiwiZGVsYXlUaW1lIiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiUmVhY3QiLCJjaGFycyIsImludGVydmFsIiwidGltZXIiLCJwcmV2VGV4dCIsIm5ld1RleHQiLCJjb25jYXQiLCJWVGltZWxpbmVHcmlkIiwidGltZWxpbmVQb2ludCIsInVzTG9nbyIsInRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkIiwidGltZWxpbmVHcmlkSXRlbSIsIndhc2tvTG9nbyIsImJhY2tncm91bmRDb2xvciIsIm5vYmxlTG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsd0dBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9hYm91dC9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgaHRtbExvZ28gfSBmcm9tICcuL2xvZ29zL2h0bWxMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBodG1sTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9odG1sTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9jc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjc3NMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2Nzc0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2Fzc0xvZ28gfSBmcm9tICcuL2xvZ29zL3Nhc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYXNzTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9zYXNzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBqc0xvZ28gfSBmcm9tICcuL2xvZ29zL2pzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMganNMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2pzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyByZWFjdExvZ28gfSBmcm9tICcuL2xvZ29zL3JlYWN0TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVhY3RMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3JlYWN0TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB0c0xvZ28gfSBmcm9tICcuL2xvZ29zL3RzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdHNMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3RzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhbmd1bGFyTG9nbyB9IGZyb20gJy4vbG9nb3MvYW5ndWxhckxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGFuZ3VsYXJMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2FuZ3VsYXJMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxlc3NMb2dvIH0gZnJvbSAnLi9sb2dvcy9sZXNzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGVzc0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbGVzc0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ21haWxMb2dvIH0gZnJvbSAnLi9sb2dvcy9nbWFpbC5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ21haWxMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2dtYWlsSG92ZXIuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5wbUxvZ28gfSBmcm9tICcuL2xvZ29zL25wbUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5wbUxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbnBtTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB5YXJuTG9nbyB9IGZyb20gJy4vbG9nb3MveWFybkxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHlhcm5Mb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3lhcm5Mb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGdpdEh1YkxvZ28gfSBmcm9tICcuL2xvZ29zL2dpdGh1Yi5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0SHViTG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9naXRodWJIb3Zlci5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0TG9nbyB9IGZyb20gJy4vbG9nb3MvZ2l0TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2l0TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9naXRMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGplc3RMb2dvIH0gZnJvbSAnLi9sb2dvcy9qZXN0TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgamVzdExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvamVzdExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlua2VkSW5Mb2dvIH0gZnJvbSAnLi9sb2dvcy9saW5rZWRpbi5zdmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGlua2VkSW5Mb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2xpbmtlZGluSG92ZXIuc3ZnJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG15c3FsTG9nbyB9IGZyb20gJy4vbG9nb3MvbXlzcWxMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBteXNxbExvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvbXlzcWxMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHB5dGhvbkxvZ28gfSBmcm9tICcuL2xvZ29zL3B5dGhvbkxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHB5dGhvbkxvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3MvcHl0aG9uTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB2c0xvZ28gfSBmcm9tICcuL2xvZ29zL3ZzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdnNMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL3ZzTG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhZmZpbml0eUxvZ28gfSBmcm9tICcuL2xvZ29zL2FmZmluaXR5TG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWZmaW5pdHlMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2FmZmluaXR5TG9nb0hvdmVyLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkYXZpbmNpTG9nbyB9IGZyb20gJy4vbG9nb3MvZGF2aW5jaUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGRhdmluY2lMb2dvSG92ZXIgfSBmcm9tICcuL2xvZ29zL2RhdmluY2lMb2dvSG92ZXIucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvd3NMb2dvIH0gZnJvbSAnLi9sb2dvcy93aW5kb3dzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2luZG93c0xvZ29Ib3ZlciB9IGZyb20gJy4vbG9nb3Mvd2luZG93c0xvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGludXhMb2dvIH0gZnJvbSAnLi9sb2dvcy9saW51eExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxpbnV4TG9nb0hvdmVyIH0gZnJvbSAnLi9sb2dvcy9saW51eExvZ29Ib3Zlci5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbm9ibGVMb2dvIH0gZnJvbSAnLi9sb2dvcy9ub2JsZUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdhc2tvTG9nbyB9IGZyb20gJy4vbG9nb3Mvd2Fza29Mb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c0xvZ28gfSBmcm9tICcuL2xvZ29zL3VzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3NzVHJpY2tzTG9nbyB9IGZyb20gJy4vbG9nb3MvY3NzVHJpY2tzTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYmVsYXlUaGVDcHBMb2dvIH0gZnJvbSAnLi9sb2dvcy9iZWxheVRoZUNwcExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJvbm9ib1ByZXNzTG9nbyB9IGZyb20gJy4vbG9nb3MvYm9ub2JvUHJlc3NMb2dvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBkcmliYmJsZUxvZ28gfSBmcm9tICcuL2xvZ29zL2RyaWJiYmxlTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZnJlZUNvZGVDYW1wTG9nbyB9IGZyb20gJy4vbG9nb3MvZnJlZUNvZGVDYW1wTG9nby5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaGFzaG5vZGVMb2dvIH0gZnJvbSAnLi9sb2dvcy9oYXNobm9kZUxvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNpdGVQb2ludExvZ28gfSBmcm9tICcuL2xvZ29zL3NpdGVQb2ludExvZ28ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHByb2ZpbGVQaWN0dXJlIH0gZnJvbSAnLi9wcm9maWxlUGljdHVyZS5qcGcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY2hldnJvbkRvd24gfSBmcm9tICcuL2NoZXZyb25Eb3duLnN2ZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwb3N0ZXJDb21taXNzaW9uIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvcG9zdGVyQ29tbWlzb24ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvZ29Db21taXNzaW9uIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvbG9nb0NvbW1pc3Npb24ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbWljQ29tbWlzc2lvbjEgfSBmcm9tICcuL2dyYXBoaWNjb21taXNzaW9ucy9jb21pY0NvbW1pc3Npb24xLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjb21pY0NvbW1pc3Npb24yIH0gZnJvbSAnLi9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMi5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2NoZW1lQ29tbWlzc2lvbiB9IGZyb20gJy4vZ3JhcGhpY2NvbW1pc3Npb25zL3NjaGVtZUNvbW1pc3Npb24ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGJhcmNlbG9uYVNhZ3JhZGFQaG90byB9IGZyb20gJy4vcGhvdG9zL2JhcmNlbG9uYVNhZ3JhZGFQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYm93bGluZ1Bob3RvIH0gZnJvbSAnLi9waG90b3MvYm93bGluZ1Bob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBjbGltYmluZ1RvcFBob3RvIH0gZnJvbSAnLi9waG90b3MvY2xpbWJpbmdUb3BQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29wMjRQaG90byB9IGZyb20gJy4vcGhvdG9zL2NvcDI0UGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGZyYW5jZUxhU2FsdHRlUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9mcmFuY2VMYVNhbGV0dGVQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2lld29udFBob3RvIH0gZnJvbSAnLi9waG90b3MvZ2lld29udFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBpY2VsYW5kV2F0ZXJmYWxsUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9pY2VsYW5kV2F0ZXJmYWxsUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvbkFyc2VuYWxQaG90byB9IGZyb20gJy4vcGhvdG9zL2xvbmRvbkFyc2VuYWxQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uQ2hlbHNlYSB9IGZyb20gJy4vcGhvdG9zL2xvbmRvbkNoZWxzZWFQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbG9uZG9uVG93ZXJCcmlkZ2VQaG90byB9IGZyb20gJy4vcGhvdG9zL2xvbmRvblRvd2VyQnJpZGdlUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvblZpY3RvcnlQaG90byB9IGZyb20gJy4vcGhvdG9zL2xvbmRvblZpY3RvcmlhUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG1hbmNoZXN0ZXJVbml0ZWRQaG90byB9IGZyb20gJy4vcGhvdG9zL21hbmNoZXN0ZXJVbml0ZWRQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF6dXJ5RGF3blBob3RvIH0gZnJvbSAnLi9waG90b3MvbWF6dXJ5RG93blBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBtY2xhcmVuUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9tY2xhcmVuUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5vdHJlRGFtZVBob3RvIH0gZnJvbSAnLi9waG90b3Mvbm90cmVEYW1lUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHBhcmlzRWlmZmVsUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9wYXJpc0VpZmZlbFBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwbGF5aW5nSUVNUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9wbGF5aW5nSUVNUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHJ5c2lhbmthUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9yeXNpYW5rYVBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBza2lTd2lzc1Bob3RvIH0gZnJvbSAnLi9waG90b3Mvc2tpU3dpc3NQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3VzaGlQaG90byB9IGZyb20gJy4vcGhvdG9zL3N1c2hpUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHN3aXNzTXVycmVuUGhvdG8gfSBmcm9tICcuL3Bob3Rvcy9zd2lzc011cnJlblBob3RvLnBuZydcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzd2lzc1Bpekdsb3JpYVBob3RvIH0gZnJvbSAnLi9waG90b3Mvc3dpc3NQaXpHbG9yaWFQaG90by5wbmcnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2FsZXNQaG90byB9IGZyb20gJy4vcGhvdG9zL3dhbGVzUGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIGxvbmRvbkNhbmFyeVBob3RvIH0gZnJvbSAnLi9waG90b3MvbG9uZG9uQ2FuYXJ5UGhvdG8ucG5nJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIHNhZGVnaExvZ28gfSBmcm9tICcuL25ldy1waG90by9zYWRlZ2guanBnJztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBzYWRlZ2hMb2dvXzIgfSBmcm9tICcuL25ldy1waG90by9zYWRlZ2gtMS5qcGcnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIG5leHRMb2dvIH0gZnJvbSAnLi9uZXctcGhvdG8vbmV4dC1qcy5wbmcnO1xyXG5cclxuXHJcblxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKCh3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse3NyYzpzcmMsZGVjb2Rpbmc6XCJhc3luY1wiLHNpemVzOnNpemVzLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2lmKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKXtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fX13aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSAncmVhY3QtYXdlc29tZS1yZXZlYWwnXHJcbmltcG9ydCB7XHJcbiAgVk1lbnVCYXIsXHJcbiAgVlBob3RvR3JpZCxcclxuICBWRm9vdGVyXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgYmVsYXlUaGVDcHBMb2dvLFxyXG4gIGJvbm9ib1ByZXNzTG9nbyxcclxuICBjb21pY0NvbW1pc3Npb24xLFxyXG4gIGNvbWljQ29tbWlzc2lvbjIsXHJcbiAgY3NzVHJpY2tzTG9nbyxcclxuICBkcmliYmJsZUxvZ28sXHJcbiAgZnJlZUNvZGVDYW1wTG9nbyxcclxuICBoYXNobm9kZUxvZ28sXHJcbiAgbG9nb0NvbW1pc3Npb24sXHJcbiAgcG9zdGVyQ29tbWlzc2lvbixcclxuICBzY2hlbWVDb21taXNzaW9uLFxyXG4gIHNpdGVQb2ludExvZ28sXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYWJvdXQubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWQWJvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWJvdXRDb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+QWJvdXQgbWU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJLYXJvbGluYSBIdWR6aWVjIFBvcnRmb2xpbyBQYWdlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkthcm9saW5hIEh1ZHppZWNcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkthcm9saW5hLCBIdWR6aWVjLCBQb3J0Zm9saW8sIEZyb250ZW5kXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvP1wiIHR5cGU9XCJpbWFnZS94LWljb25cIi8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFZNZW51QmFyIGFjdGl2ZVRhYj1cIkFib3V0XCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeX0+XHJcbiAgICAgICAgICA8RmFkZT5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIExvbmcgc3Rvcnkgc2hvcnQgYWJvdXQgbWVcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgIEkgaGF2ZSB0d28gbGVhZGluZyBwYXNzaW9ucyBpbiBteSBsaWZlOiBvbmUgaXMgdG8gY3JlYXRlLFxyXG4gICAgICAgICAgICAgIGFuZCB0aGUgb3RoZXIgb25lIGlzIHRvIGV4cGxvcmUgdGhlIHdvcmxkLiBJIGxvdmUgdG8gY3JlYXRlXHJcbiAgICAgICAgICAgICAgc29mdHdhcmUsIGVzcGVjaWFsbHkgd2ViIGFwcGxpY2F0aW9ucy4gR3JhcGhpYyBkZXNpZ24sXHJcbiAgICAgICAgICAgICAgZHJhd2luZyBhbmQgbWFraW5nIGFuaW1hdGlvbnMgZ2l2ZSBtZSBhIGxvdCBvZiBmdW4gYXMgd2VsbC5cclxuICAgICAgICAgICAgICBJIHRyeSB0byBsZWFkIGFuIGFjdGl2ZSBsaWZlc3R5bGUuIFdoZW5ldmVyIEkgaGF2ZSBzb21lIHNwYXJlIHRpbWUsXHJcbiAgICAgICAgICAgICAgSSB0cnkgdG8gZGVkaWNhdGUgaXQgdG8gbGVhcm5pbmcgbmV3IGxhbmd1YWdlcywgc3BlbmRpbmcgbXkgdGltZVxyXG4gICAgICAgICAgICAgIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5LCBhbmQgdHJhdmVsaW5nLiBJJ20gYSBodWdlIHNwb3J0cyBmYW4sXHJcbiAgICAgICAgICAgICAgYXMgd2VsbCwgZXNwZWNpYWxseSBmb290YmFsbC4gQmVzaWRlcyB0aGF0IEkgbG92ZSBoaWtpbmcgYW5kIHJvY2tcclxuICAgICAgICAgICAgICBjbGltYmluZy4gSSBmZWVsIGV4dHJlbWVseSBnb29kIGluIHRoZSBtb3VudGFpbnMuIEluIHdpbnRlclxyXG4gICAgICAgICAgICAgIEkgc2tpLiBUbyByZWxheCBJIHVzdWFsbHkgcGxheSB2aWRlbyBnYW1lcyBvciB3YXRjaCBtb3ZpZXMvdHYgc2VyaWVzLlxyXG4gICAgICAgICAgICAgIEkgYWxzbyBwYXkgaGlnaCBhdHRlbnRpb24gdG8gbXkgc2VsZi1kZXZlbG9wbWVudCBpbiB0aGUgSVQgZmllbGQsXHJcbiAgICAgICAgICAgICAgaW4gb3JkZXIgdG8gYmUgdXAgdG8gZGF0ZSB3aXRoIGN1cnJlbnQgdHJlbmRzIG9uIHRoZSBtYXJrZXQuXHJcbiAgICAgICAgICAgICAgQmVuZWF0aCB5b3UgY2FuIGZpbmQgYWxsIG9mIHRoZSBuZXdzbGV0dGVycyBJIHN1YnNjcmliZSBjdXJyZW50bHkuXHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvYmJpZXN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NsZXR0ZXJzfT5cclxuICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICBOZXdzbGV0dGVycyBJIHN1YnNjcmliZSB0bzpcclxuICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Nzcy10cmlja3MuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkNTUy1Ucmlja3MgbG9nb1wiIHNyYz17Y3NzVHJpY2tzTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9iZWxheWNwcC5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQmVsYXkgdGhlIENQUCBsb2dvXCIgc3JjPXtiZWxheVRoZUNwcExvZ299Lz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIkRyaWJiYmxlIGxvZ29cIiBzcmM9e2RyaWJiYmxlTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9oYXNobm9kZS5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PSdIYXNobm9kZSBsb2dvJyBzcmM9e2hhc2hub2RlTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib25vYm9wcmVzcy5jb20vXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiQm9ub2JvcHJlc3MgbG9nb1wiIHNyYz17Ym9ub2JvUHJlc3NMb2dvfS8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zaXRlcG9pbnQuY29tL1wiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cIlNpdGUgUG9pbnQgbG9nb1wiIHNyYz17c2l0ZVBvaW50TG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZWNvZGVjYW1wLm9yZy9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJGcmVlQ29kZUNhbXAgbG9nb1wiIHNyYz17ZnJlZUNvZGVDYW1wTG9nb30vPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWlzc2lvbnN9PlxyXG4gICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIEdyYXBoaWMgY29tbWlzaW9uc1xyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgQmVzaWRlcyBjb21wdXRlciBwcm9ncmFtbWluZyBJIGxvdmUgdG8gY3JlYXRlIGdyYXBoaWNzLlxyXG4gICAgICAgICAgICAgICAgRHJhd2luZyBoYXMgYmVlbiBteSBwYXNzaW9uIHNpbmNlIEkgY2FuIHJlbWVtYmVyLiBXaGVuIEkgd2FzIHlvdW5nZXIsXHJcbiAgICAgICAgICAgICAgICBJIHVzZWQgdG8gaGF2ZSBodW5kcmVkcyBvZiBub3RlYm9va3MsIGFsbCBvZiB0aGVtIGZpbGxlZCB3aXRoIG15IHNrZXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgTGF0ZXIgb24gSSBtb3ZlZCBtb3JlIGludG8gZGlnaXRhbCBhcnQgd29yayBhbmQgbm93IEkgdHJlYXQgaXQgYXMgbXlcclxuICAgICAgICAgICAgICAgIGhvYmJ5LCB0YWtpbmcgIHNtYWxsIGdyYXBoaWNhbCBwcm9qZWN0IGZyb20gdGltZSB0byB0aW1lLlxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zY3JvbGxHYWxsZXJ5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGludH0+XHJcbiAgICAgICAgICAgICAgICAgIFNyb2xsIHJpZ2h0IHRvIHNlZSBtb3JlXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDYW1lcmEgbG9nbyBjb21taXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ29Db21taXNzaW9ufS8+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQnJlYXRoaW5nIHNjaGVtZSBjb21taXNzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3NjaGVtZUNvbW1pc3Npb259Lz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJXb21hbiBwb3N0ZXIgY29tbWlzaW9uXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZml4ZWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e3Bvc3RlckNvbW1pc3Npb259Lz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJDb21pYyBjb21taXNzaW9uIDFcIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Y29taWNDb21taXNzaW9uMX0vPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkNvbWljIGNvbW1pc3Npb24gMlwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpeGVkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtjb21pY0NvbW1pc3Npb24yfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgIDxGYWRlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0dhbGxlcnl9PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgUGhvdG8gR2FsbGVyeVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgSSBkbyBiZWxpZXZlIHRoYXQgPHM+YWN0aW9uczwvcz4gaW1hZ2VzIHNwZWFrIGxvdWRlciB0aGFuIHdvcmRzLiBCeSBsb29raW5nIGF0IHRoZSBwaWN0dXJlcyBiZWxvdyxcclxuICAgICAgICAgICAgICB5b3UgY2FuIGdldCBhIGxpdHRsZSBncmFzcCBvZiB3aGF0IHBlcnNvbiBJIGFtIG91dHNpZGUgb2Ygd29yay5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgSG92ZXIgb24gcGhvdG8gaW4gb3JkZXIgdG8gZ2V0IG1vcmUgZGV0YWlscy5cclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPFZQaG90b0dyaWQvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GYWRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPFZGb290ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlVHlwZWRUZXh0IH0gZnJvbSAnLi4nXHJcbmltcG9ydCB7XHJcbiAgYmFyY2Vsb25hU2FncmFkYVBob3RvLFxyXG4gIGJvd2xpbmdQaG90byxcclxuICBjbGltYmluZ1RvcFBob3RvLFxyXG4gIGZyYW5jZUxhU2FsdHRlUGhvdG8sXHJcbiAgZ2lld29udFBob3RvLFxyXG4gIGljZWxhbmRXYXRlcmZhbGxQaG90byxcclxuICBsb25kb25BcnNlbmFsUGhvdG8sXHJcbiAgbG9uZG9uQ2FuYXJ5UGhvdG8sXHJcbiAgbG9uZG9uQ2hlbHNlYSxcclxuICBsb25kb25Ub3dlckJyaWRnZVBob3RvLFxyXG4gIGxvbmRvblZpY3RvcnlQaG90byxcclxuICBtYW5jaGVzdGVyVW5pdGVkUGhvdG8sXHJcbiAgbWF6dXJ5RGF3blBob3RvLFxyXG4gIG1jbGFyZW5QaG90byxcclxuICBub3RyZURhbWVQaG90byxcclxuICBwYXJpc0VpZmZlbFBob3RvLFxyXG4gIHBsYXlpbmdJRU1QaG90byxcclxuICByeXNpYW5rYVBob3RvLFxyXG4gIHNraVN3aXNzUGhvdG8sXHJcbiAgc3VzaGlQaG90byxcclxuICBzd2lzc011cnJlblBob3RvLFxyXG4gIHdhbGVzUGhvdG9cclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9waG90b2dyaWQubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlBob3RvR3JpZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0dyaWR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcmNhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBTYWdyYWRhIEZhbWlsaWEsIEJhcmNlbG9uYScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwOC4yMDE4JywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIFNhZ3JhZGEgRmFtaWxpYVwiIHNyYz17YmFyY2Vsb25hU2FncmFkYVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmlkZ2V9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IFRvd2VyIEJyaWRnZSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA5LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgVG93ZXIgQnJpZGdlXCIgc3JjPXtsb25kb25Ub3dlckJyaWRnZVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGltYn0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQ29taWMgQ29uLCBXYXJzYXcnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMTAuMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBjbGltYmluZyBLYXJvbGluYVwiIHNyYz17Y2xpbWJpbmdUb3BQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZWlmZmVsfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBFaWZmZWwgVG93ZXIsIFBhcmlzJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgRWlmZmVsIFRvd2VyXCIgc3JjPXtwYXJpc0VpZmZlbFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tdXJyZW59PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE3DvHJyZW4sIFN3aXR6ZXJsYW5kJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAyLjIwMjEnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgTXVycmVuXCIgc3JjPXtzd2lzc011cnJlblBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaHVyY2h9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE5vdHJlLURhbWUsIFBhcmlzJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA4LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgTm90cmUtRGFtZVwiIHNyYz17bm90cmVEYW1lUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFscHN9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IExhIFNhbGV0dGUtRmFsbGF2YXV4LCBGcmFuY2UnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxOCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBBbHBzIGluIExhIFNhbGV0dGUtRmFsbGF2YXV4XCIgc3JjPXtmcmFuY2VMYVNhbHR0ZVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YWxlc30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQ2FyZGlmZiwgV2FsZXMnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDIuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBDYXJkaWZmXCIgc3JjPXt3YWxlc1Bob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVsc2VhfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBTdGFtZm9yZCBCcmlkZ2UsIExvbmRvbicsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwMS4yMDIwJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIFN0YW1mb3JkIEJyaWRnZVwiIHNyYz17bG9uZG9uQ2hlbHNlYX0gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJzZW5hbH0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogRW1pcmF0ZXMgU3RhZGl1bSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAxLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgRW1pcmF0ZXMgU3RhZGl1bVwiIHNyYz17bG9uZG9uQXJzZW5hbFBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYW5jaGVzdGVyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBPbGQgVHJhZmZvcmQsIE1hbmNoZXN0ZXInLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDEuMjAyMCcsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBPbGQgVHJhZmZvcmRcIiBzcmM9e21hbmNoZXN0ZXJVbml0ZWRQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm93bGluZ30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogQm93bGluZyBDbHViLCDFu3l3aWVjJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA3LjIwMTgnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgS2Fyb2xpbmEgYm93bGluZ1wiIHNyYz17Ym93bGluZ1Bob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcm9zc30+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogR2lld29udCAxODk1IG0gTVNMLCBaYWtvcGFuZScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNC4wMjEnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgY2xpbWJpbmcgb24gR2lld29udCBpbiB3aW50ZXJcIiBzcmM9e2dpZXdvbnRQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2F0ZXJmYWxsfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBTZWxpamFsYW5kc2Zvc3MsIEljZWxhbmQnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDguMjAxNycsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiB3YXRlcmZhbGwgaW4gU2VsaWphbGFuZHNmb3NzXCIgc3JjPXtpY2VsYW5kV2F0ZXJmYWxsUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvb3RzfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBSeXNpYW5rYSAxMjkwIG0gTVNMLCBCZXNraWQgxbt5d2llY2tpJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA2LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgbW91bnRhaW5zIHNlZW4gZnJvbSBSeXNpYW5rYVwiIHNyYz17cnlzaWFua2FQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VzaGl9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IE1vbW8gQ2FmZSwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDEwLjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2Ygc3VzaGlcIiBzcmM9e3N1c2hpUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vbnVtZW50fT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBWaWN0b3JpYSBNZW1vcmlhbCwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDA3LjIwMTknLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgVmljdG9yaWEgTWVtb3JpYWxcIiBzcmM9e2xvbmRvblZpY3RvcnlQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFrZX0+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnBob3RvSW5mb30+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdQbGFjZTogVGFqdHkgTGFrZSwgV2lsa2FzeScsIDUwKX1cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICB7dXNlVHlwZWRUZXh0KCdEYXRlOiAwNS4yMDIxJywgNTApfVxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPEltYWdlIGFsdD1cIlBob3RvIG9mIGxha2VcIiBzcmM9e21henVyeURhd25QaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2t5c2NyYXBwZXJ9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IENhbmFyeSBXaGFyZiwgTG9uZG9uJywgNTApfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ0RhdGU6IDAxLjIwMjAnLCA1MCl9XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8SW1hZ2UgYWx0PVwiUGhvdG8gb2YgQ2FuYXJ5IFdoYXJmXCIgc3JjPXtsb25kb25DYW5hcnlQaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBNY0xhcmVuLCBMb25kb24nLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDYuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBGb3JtdWxhIE9uZSBjYXJcIiBzcmM9e21jbGFyZW5QaG90b30gbGF5b3V0PVwiZmlsbFwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpfT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMucGhvdG9JbmZvfT5cclxuICAgICAgICAgIHt1c2VUeXBlZFRleHQoJ1BsYWNlOiBFaWdlciwgU3dpdHplcmxhbmQnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDIuMjAyMScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBLYXJvbGluYSBza2lpbmdcIiBzcmM9e3NraVN3aXNzUGhvdG99IGxheW91dD1cImZpbGxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWV9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5waG90b0luZm99PlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnUGxhY2U6IEludGVsIEV4dHJlbWUgTWFzdGVycywgS2F0b3dpY2UnLCA1MCl9XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAge3VzZVR5cGVkVGV4dCgnRGF0ZTogMDMuMjAxOScsIDUwKX1cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJQaG90byBvZiBLYXJvbGluYSBwbGFpbmcgZ2FtZVwiIHNyYz17cGxheWluZ0lFTVBob3RvfSBsYXlvdXQ9XCJmaWxsXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuLy9UTy1ETyByZWZhY3RvcmluZyBvZiBWUGhvdG9HcmlkIiwiZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICBjb25zdCB5ZWFyID0gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICBsZXQgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSlcclxuICBsZXQgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKVxyXG5cclxuICBpZihkYXkubGVuZ3RoID09PSAxKVxyXG4gICAgZGF5ID0gJzAnKyBkYXlcclxuXHJcbiAgaWYobW9udGgubGVuZ3RoID09PSAxKVxyXG4gICAgbW9udGggPSAnMCcrIG1vbnRoXHJcblxyXG4gIHJldHVybiBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gXHJcbn0iLCJpbXBvcnQgeyBWSWNvbiB9IGZyb20gJy4vaWNvbidcclxuaW1wb3J0IHtcclxuICBnbWFpbExvZ28sXHJcbiAgZ21haWxMb2dvSG92ZXIsXHJcbiAgbGlua2VkSW5Mb2dvLFxyXG4gIGxpbmtlZEluTG9nb0hvdmVyLFxyXG4gIGdpdEh1YkxvZ28sXHJcbiAgZ2l0SHViTG9nb0hvdmVyXHJcbn0gZnJvbSAnLi4vYXNzZXRzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nb1VwU3F1YXJlfS8+XHJcbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHRzfT5cclxuICAgICAgICDCqTIwMjJcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIEJ1aWxkIHdpdGggPHNwYW4+TmV4dC5qcy9UeXBlU3JpcHQ8L3NwYW4+XHJcbiAgICAgIDwvaDQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bGlua2VkSW5Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2xpbmtlZEluTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zYWRlZ2gtYWtiYXJpLTc4ODIwNzE5Ny9cIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkxpbmtlZEluXCIvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17Z21haWxMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2dtYWlsTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaHJlZj1cIm1haWx0bzpha2JhcmlzYWRlZ2gzODJAZ21haWwuY29tXCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJHbWFpbFwiLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e2dpdEh1YkxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17Z2l0SHViTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zYWRlZ2gxMzc5XCJcclxuICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgIG5hbWU9XCJHaXRIdWJcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKVxyXG59IiwiZXhwb3J0IHsgVk1haW5IZWFkZXIgfSBmcm9tICcuL21haW5oZWFkZXInXHJcbmV4cG9ydCB7IFZUb29sc1RlY2ggfSBmcm9tICcuL3Rvb2xzdGVjaCciLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tYWluaGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VUeXBlZFRleHQgfSBmcm9tICcuLi90eXBpbmd0ZXh0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZNYWluSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFib3V0SW5mb30+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIHt1c2VUeXBlZFRleHQoXCJIZWxsbyBldmVyeW9uZSFcIiwgNTApfVxyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAge3VzZVR5cGVkVGV4dChcIkknbSBTYWRlZ2ggQWtiYXJpLlwiLCA1MCwgMjAwKX1cclxuICAgICAgPC9oMT5cclxuICAgICAgPGgyPlxyXG4gICAgICAgIHt1c2VUeXBlZFRleHQoXCJXZWxjb21lIG9uIG15IHBvcnRmb2xpbyBwYWdlISBJJ20gYSBDcmVhdGl2ZSBKdW5pb3IgRnJvbnQtZW5kIERldmVsb3BlciB3aXRoIDIgeWVhciBvZiBleHBlcmllbmNlIGxldmVyYWdpbmcgSmF2YVNjcmlwdCB0byBidWlsZCByZXNwb25zaXZlIHdlYnNpdGVzLCBhbmQgaW50ZXJhY3RpdmUgZmVhdHVyZXMgLiBJbnRlcmVzdGVkIGluIEpzIEZyZWFtd29ya3MgbGlrZSBSZWFjdEpzLCBuZXh0anMgYW5kIGxlYXJuaW5nIG1vcmUgYW5kIG1vcmUgLlwiLCAzMCwgMzUwKX1cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVkljb24gfSBmcm9tICcuLi9pY29uJ1xyXG5pbXBvcnQge1xyXG4gIGFmZmluaXR5TG9nbyxcclxuICBhZmZpbml0eUxvZ29Ib3ZlcixcclxuICBhbmd1bGFyTG9nbyxcclxuICBhbmd1bGFyTG9nb0hvdmVyLFxyXG4gIGNzc0xvZ28sXHJcbiAgY3NzTG9nb0hvdmVyLFxyXG4gIGRhdmluY2lMb2dvLFxyXG4gIGRhdmluY2lMb2dvSG92ZXIsXHJcbiAgZ2l0TG9nbyxcclxuICBnaXRMb2dvSG92ZXIsXHJcbiAgaHRtbExvZ28sXHJcbiAgaHRtbExvZ29Ib3ZlcixcclxuICBqZXN0TG9nbyxcclxuICBqZXN0TG9nb0hvdmVyLFxyXG4gIGpzTG9nbyxcclxuICBqc0xvZ29Ib3ZlcixcclxuICBsZXNzTG9nbyxcclxuICBsZXNzTG9nb0hvdmVyLFxyXG4gIGxpbnV4TG9nbyxcclxuICBsaW51eExvZ29Ib3ZlcixcclxuICBteXNxbExvZ28sXHJcbiAgbXlzcWxMb2dvSG92ZXIsXHJcbiAgbnBtTG9nbyxcclxuICBucG1Mb2dvSG92ZXIsXHJcbiAgcHl0aG9uTG9nbyxcclxuICBweXRob25Mb2dvSG92ZXIsXHJcbiAgcmVhY3RMb2dvLFxyXG4gIHJlYWN0TG9nb0hvdmVyLFxyXG4gIHNhc3NMb2dvLFxyXG4gIHNhc3NMb2dvSG92ZXIsXHJcbiAgdHNMb2dvLFxyXG4gIHRzTG9nb0hvdmVyLFxyXG4gIHZzTG9nbyxcclxuICB2c0xvZ29Ib3ZlcixcclxuICB3aW5kb3dzTG9nbyxcclxuICB3aW5kb3dzTG9nb0hvdmVyLFxyXG4gIHlhcm5Mb2dvLFxyXG4gIHlhcm5Mb2dvSG92ZXIsXHJcbiAgbmV4dExvZ29cclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90b29sc3RlY2gubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVlRvb2xzVGVjaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZWNobm9sb2dpZXNJY29uc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnNSb3d9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17aHRtbExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17aHRtbExvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjQ2cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI0NnB4XCJcclxuICAgICAgICAgIG5hbWU9XCJIVE1MXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImh0bWwtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtjc3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2Nzc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJDU1NcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwiY3NzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17anNMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e2pzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjU1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIkphdmFTY3JpcHRcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwianMtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXtyZWFjdExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17cmVhY3RMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiUmVhY3RcIlxyXG4gICAgICAgICAgdG9vbHRpcElEPVwicmVhY3QtdG9vbHRpcFwiIC8+XHJcbiAgICAgICAgPFZJY29uXHJcbiAgICAgICAgICBkZWZhdWxJY29uPXt0c0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17dHNMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiVHlwZVNjcmlwdFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJ0cy10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3Nhc3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3Nhc3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiU2Fzc1wiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJzYXNzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bGVzc0xvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bGVzc0xvZ29Ib3Zlcn1cclxuICAgICAgICAgIGhlaWdodD1cIjY1cHhcIlxyXG4gICAgICAgICAgd2lkdGg9XCI2NXB4XCJcclxuICAgICAgICAgIG5hbWU9XCJMZXNzXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImxlc3MtdG9vbHRpcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2hub2xvZ2llc0ljb25zUm93fT5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e25wbUxvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bnBtTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjVweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjY1cHhcIlxyXG4gICAgICAgICAgbmFtZT1cIk5vZGUgUGFja2FnZSBNYW5hZ2VyXCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cIm5wbS10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3lhcm5Mb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3lhcm5Mb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwieWFyblwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJ5YXJuLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17Z2l0TG9nb31cclxuICAgICAgICAgIG9uSG92ZXJJY29uPXtnaXRMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI2NXB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNjVweFwiXHJcbiAgICAgICAgICBuYW1lPVwiR2l0XCJcclxuICAgICAgICAgIHRvb2x0aXBJRD1cImdpdC10b29sdGlwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGVjaG5vbG9naWVzSWNvbnNSb3d9PlxyXG4gICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17dnNMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3ZzTG9nb0hvdmVyfVxyXG4gICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwcHhcIlxyXG4gICAgICAgICAgbmFtZT1cIlZpc3VhbCBTdHVkaW8gQ29kZVwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJ2cy10b29sdGlwXCIgLz5cclxuICAgICAgICA8Vkljb25cclxuICAgICAgICAgIGRlZmF1bEljb249e3dpbmRvd3NMb2dvfVxyXG4gICAgICAgICAgb25Ib3Zlckljb249e3dpbmRvd3NMb2dvSG92ZXJ9XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwiV2luZG93cyAxMFwiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJ3aW5kb3dzLXRvb2x0aXBcIiAvPlxyXG4gICAgICAgICAgIDxWSWNvblxyXG4gICAgICAgICAgZGVmYXVsSWNvbj17bmV4dExvZ299XHJcbiAgICAgICAgICBvbkhvdmVySWNvbj17bmV4dExvZ299XHJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcclxuICAgICAgICAgIHdpZHRoPVwiNTBweFwiXHJcbiAgICAgICAgICBuYW1lPVwibmV4dCBqc1wiXHJcbiAgICAgICAgICB0b29sdGlwSUQ9XCJuZXh0anMtdG9vbHRpcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pY29uLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnXHJcblxyXG50eXBlIEljb25Qcm9wcyA9IHtcclxuICBkZWZhdWxJY29uOiBTdGF0aWNJbWFnZURhdGFcclxuICBvbkhvdmVySWNvbjogU3RhdGljSW1hZ2VEYXRhXHJcbiAgaHJlZj86IHN0cmluZ1xyXG4gIGhlaWdodDogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgdG9vbHRpcElEPzogc3RyaW5nXHJcbiAgd2lkdGg6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVkljb24ocHJvcHM6IEljb25Qcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgZGF0YS10aXA9e3Byb3BzLnRvb2x0aXBJRCA/IHRydWUgOiBmYWxzZX0gZGF0YS1mb3I9e3Byb3BzLnRvb2x0aXBJRH0gaHJlZj17cHJvcHMuaHJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRhaW5lcn0gc3R5bGU9e3toZWlnaHQ6IHByb3BzLmhlaWdodCwgd2lkdGg6IHByb3BzLndpZHRofX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkFjdGl2ZX0+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBhbHQ9e2BPbiBob3ZlciAke3Byb3BzLm5hbWV9IGljb24uYH1cclxuICAgICAgICAgIHNyYz17cHJvcHMub25Ib3Zlckljb259XHJcbiAgICAgICAgICB3aWR0aD17cHJvcHMud2lkdGh9XHJcbiAgICAgICAgICBoZWlnaHQ9e3Byb3BzLmhlaWdodH0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHByb3BzLnRvb2x0aXBJRCAmJlxyXG4gICAgICAgIDxSZWFjdFRvb2x0aXAgaWQ9e3Byb3BzLnRvb2x0aXBJRH0gdHlwZT1cImxpZ2h0XCIgZWZmZWN0PVwic29saWRcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9wcy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L1JlYWN0VG9vbHRpcD5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgYWx0PXtgRGVmYXVsdCAke3Byb3BzLm5hbWV9IGljb24uYH1cclxuICAgICAgICAgIHNyYz17cHJvcHMuZGVmYXVsSWNvbn1cclxuICAgICAgICAgIHdpZHRoPXtwcm9wcy53aWR0aH1cclxuICAgICAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gIClcclxufSIsImV4cG9ydCAqIGZyb20gJy4vZGF0ZSdcclxuZXhwb3J0ICogZnJvbSAnLi9mb290ZXInXHJcbmV4cG9ydCAqIGZyb20gJy4vaWNvbidcclxuZXhwb3J0ICogZnJvbSAnLi9tZW51YmFyJ1xyXG5leHBvcnQgKiBmcm9tICcuL3R5cGluZ3RleHQnXHJcbmV4cG9ydCAqIGZyb20gJy4vYWJvdXQnXHJcbmV4cG9ydCAqIGZyb20gJy4vaG9tZSdcclxuZXhwb3J0ICogZnJvbSAnLi93b3JrJyIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21lbnViYXIubW9kdWxlLnNjc3MnXHJcblxyXG50eXBlIE1lbnVCYXJQcm9wcyA9IHtcclxuICBhY3RpdmVUYWI6IFwiSG9tZVwiIHwgXCJXb3JrXCIgfCBcIkFib3V0XCJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFZNZW51QmFyKHByb3BzOiBNZW51QmFyUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QmFyfT5cclxuICAgICAgPExpbmsgaHJlZj17YC9gfT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNxdWFyZUluaXRpYWxzfT5cclxuICAgICAgICAgICAgU0FcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICBTYWRlZ2ggQWtiYXJpXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2B9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRhYn0+XHJcbiAgICAgICAgICA8aDMgc3R5bGU9e3Byb3BzLmFjdGl2ZVRhYiA9PT0gXCJIb21lXCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj17YC93b3JrYH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIldvcmtcIiA/IHtjb2xvcjogXCIjRTc2MTYxXCJ9IDoge2NvbG9yOiBcIiNENUQ1RDVcIn19PlxyXG4gICAgICAgICAgICBXb3JrXHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPXtgL2Fib3V0YH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGFifT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17cHJvcHMuYWN0aXZlVGFiID09PSBcIkFib3V0XCIgPyB7Y29sb3I6IFwiI0U3NjE2MVwifSA6IHtjb2xvcjogXCIjRDVENUQ1XCJ9fT5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VUeXBlZFRleHQodGV4dDogc3RyaW5nLCBzcGVlZDogbnVtYmVyLCBkZWxheVRpbWU/OiBudW1iZXIpIHtcclxuICBjb25zdCBbdGV4dFN0YXRlLCBzZXRUZXh0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBjaGFycyA9IHRleHQuc3BsaXQoXCJcIilcclxuICBsZXQgaW50ZXJ2YWwgPSBzcGVlZFxyXG5cclxuICBpZih0ZXh0U3RhdGUubGVuZ3RoID09PSAwICYmIGRlbGF5VGltZSlcclxuICAgIGludGVydmFsID0gc3BlZWQgKyBkZWxheVRpbWVcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFRleHRTdGF0ZSgocHJldlRleHQpID0+IHtcclxuICAgICAgICBpZiAocHJldlRleHQubGVuZ3RoICE9PSBjaGFycy5sZW5ndGgpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld1RleHQgPSBwcmV2VGV4dC5jb25jYXQoY2hhcnNbcHJldlRleHQubGVuZ3RoXSlcclxuICAgICAgICAgIHJldHVybiBuZXdUZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmV2VGV4dFxyXG4gICAgICB9KVxyXG4gICAgfSwgaW50ZXJ2YWwpXHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB0ZXh0U3RhdGVcclxufSIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge1xyXG4gIG5vYmxlTG9nbyxcclxuICB1c0xvZ28sXHJcbiAgd2Fza29Mb2dvXHJcbn0gZnJvbSAnLi4vLi4vYXNzZXRzJ1xyXG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSAnLi4vZGF0ZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RpbWVsaW5lZ3JpZC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWVGltZWxpbmVHcmlkKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxoMT4yMDE2PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lUG9pbnR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUNhcmR9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlclRpcH0+XHJcbiAgICAgICAgICBIb3ZlciB0byB6b29tLlxyXG4gICAgICAgIDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJVbml2ZXJzaXR5IG9mIFNpbGVzaWEgbG9nby5cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXt1c0xvZ299XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlJbmZvfT5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueVRpdGxlfT5Vbml3ZXJzeXRldCDFmmzEhXNraTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGV0YWlsc30+S2F0b3dpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMTUgLSAwMy4yMDE5PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBNb2R1bGVzIGluY2x1ZGVkOjxici8+XHJcbiAgICAgICAgICAgIDFzdCBZZWFyOiBNYXRoZW1hdGljYWwgQW5hbHlzaXMsIEJhc2ljIENvdXJzZSBvZiBDKysgUHJvZ3JhbW1pbmcgTGFuZ3VhZ2UuPGJyLz5cclxuICAgICAgICAgICAgMm5kIFllYXI6IE9wZXJhdGluZyBTeXN0ZW1zLCBDb21wdXRlciBOZXR3b3Jrcy48YnIvPlxyXG4gICAgICAgICAgICAzcmQgWWVhcjogQWR2YW5jZWQgQ291cnNlIG9mIEMrKyBQcm9ncmFtbWluZyBMYW5ndWFnZSwgVXNpbmdcclxuICAgICAgICAgICAgQyMgdG8gRGVzaWduIEdyYXBoaWMgQXBwbGljYXRpb25zLCBUaGUgQmFzaWNzIG9mIEJ1aWxkaW5nIG9mIE5ldXJhbCBOZXR3b3JrLjxici8+XHJcbiAgICAgICAgICAgIDR0aCBZZWFyOiBDb21wdXRlciBTaW11bGF0aW9uIE1ldGhvZHMsIE9yYWNsZSBEYXRhYmFzZXMuPGJyLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbUFkam9pbmluZ0NhcmR9Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1XaWRlfT5cclxuICAgICAgICA8aDE+MDMuMjAxOSAtIDAzLjIwMjA8L2gxPlxyXG4gICAgICAgIDxoMj5Xb3JraW5nICYgbGVhcm5pbmcgV2ViIERldmVsb3BtZW50IGluIExvbmRvbjwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1BZGpvaW5pbmdDYXJkfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQ2FyZH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50SGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55TG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJXYXNrbyBjb21wYW55IGxvZ28uXCJcclxuICAgICAgICAgICAgICAgIHNyYz17d2Fza29Mb2dvfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxM31cclxuICAgICAgICAgICAgICAgIHdpZHRoPXs1NX0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55SW5mb30+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlUaXRsZX0+V2Fza288L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PkdsaXdpY2U8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjA4LjIwMjAgLSAxMC4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBvbiBteSBvd24gYSByZXNwb25zaXZlIHdlYiBhcHBsaWNhdGlvbixcclxuICAgICAgICAgICAgd2hpY2ggaGFkIGEgY2F0YWxvZ3VlIG9mIGFsbCBjb21wYW55J3Mgc2VydmVycywgZGlzcGxheWVkIGluIHRoZVxyXG4gICAgICAgICAgICB0cmVlIHN0cnVjdHVyZS4gU2VydmVyJ3MgZGF0YSB3YXMgdGFrZW4gYW5kIHBhcnNlZCBmcm9tIFhNTCBmaWxlIHRvIEpTT04uXHJcbiAgICAgICAgICAgIEFueW9uZSBsb2dnZWQgY291bGQgYnJvd3NlIHRocm91Z2ggbGlzdHMgb2Ygc2VydmVycy5cclxuICAgICAgICAgICAgU2VhcmNoIGFuZCBzb3J0IGJ5IG5hbWUgZnVuY3Rpb24gd2VyZSBhcHBsaWVkLlxyXG4gICAgICAgICAgICBBcHAgaGFkIHN5c3RlbSBvZiBhY2NvdW50cyBhcyB3ZWxsLiBBZG1pbnMsIHRlY2huaWNhbCBhbmQgdXNlciBvbmVzLlxyXG4gICAgICAgICAgICBBZG1pbnMgY291bGQgbWFuYWdlIGFjY291bnRzIGJ5IGVkaXRpbmcgdGhlbSwgZGVsZXRpbmcgYW5kIGF1dGhvcml6ZVxyXG4gICAgICAgICAgICAoZXZlcnkgbmV3IHVzZXIgaGFkIHRvIGJlIGF1dGhvcml6ZWQgYnkgYWRtaW4pLiBBZG1pbnMgY291bGQgYWxzb1xyXG4gICAgICAgICAgICBzZWUgd2hhdCB1c2VyIGlzIGxvZ2dlZCBhdCB0aGUgbW9tZW50Ljxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE1haW4gcmVzcG9uc2liaWxpdGllczo8YnIvPlxyXG4gICAgICAgICAgICAtIGRlc2lnbmluZyBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kIHNpZGUgb2YgdGhlIGFwcCw8YnIvPlxyXG4gICAgICAgICAgICAtIGNyZWF0aW5nIGFuIGFzeW5jaHJvbm91cyBjb21tdW5pY2F0aW9uIGJldHdlZW4gY2xpZW50IGFuZCBzZXJ2ZXIgdmlhIDxiPlJFU1QgQVBJPC9iPiw8YnIvPlxyXG4gICAgICAgICAgICAtIHNldHRpbmcgdXAgc2VydmVyIHdpdGggZGF0YWJhc2UuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgTGFuZ3VhZ2VzOiBKYXZhU2NyaXB0LCA8Yj5SZWFjdDwvYj4sIDxiPlBIUDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgRGF0YWJhc2U6IDxiPk15U1FMPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBTdHlsaW5nOiBBbnQgRGVzaWduIFVJLCBDU1MuPGJyLz5cclxuICAgICAgICAgICAgVmVyc2lvbiBDb250cm9sIFN5c3RlbTogPGI+R2l0SHViLjwvYj48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFuY2luZzogVHJlbGxvLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbX0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW1DYXJkfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbXBhbnlMb2dvfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMEUyMjQ1XCJ9fT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIk5vYmxlIFN5c3RlbXMgY29tcGFueSBsb2dvLlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e25vYmxlTG9nb31cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17NTB9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tcGFueUluZm99PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jb21wYW55VGl0bGV9Pk5vYmxlIFN5c3RlbXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PktyYWvDs3c8L2gyPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudERldGFpbHN9PjEwLjIwMjAgLSAwOS4yMDIwPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50RGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICBCdWlsZGluZyBmcm9tIHNjcmF0Y2ggYSBjb21wbGV0ZSBXZWJSVEMgUGhvbmUgd2ViIGFwcGxpY2F0aW9uLCBiYXNlZCBvbiBTSVAuanMgbGlicmFyeS4gTWFqb3IgZnVuY3Rpb25hbGl0aWVzOjxici8+XHJcbiAgICAgICAgICAgIC0gbWFraW5nIG5ldywgYW5zd2VyaW5nLCBhbmQgaG9sZGluZyBjYWxscyAoY29uZmVyZW5jZXMgYXMgd2VsbCksPGJyLz5cclxuICAgICAgICAgICAgLSBjb250YWN0cyBsaXN0IHdpdGggZnVuY3Rpb25hbGl0eSBvZiBhZGRpbmcsIGRlbGV0aW5nLCBhbmQgZWRpdGluZyBjb250YWN0cy4gU2VhcmNoIGFuZCBzb3J0IG9wdGlvbnMgYXBwbGllZCBhcyB3ZWxsLDxici8+XHJcbiAgICAgICAgICAgIC0gaGlzdG9yeSBvZiBjYWxscyB3aXRoIHN1bW1hcml6ZWQgZGF0YSw8YnIvPlxyXG4gICAgICAgICAgICAtIHZvaWNlbWFpbCBhbmQgRFRNRiBzZW5kaW5nLDxici8+XHJcbiAgICAgICAgICAgIC0gYWNjb3VudCBhbmQgcGhvbmUgaW5wdXQvb3V0cHV0IGF1ZGlvIHNldHRpbmdzLjxici8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIE15IG1haW4gcmVzcG9uc2liaWxpdGllcyBvbiB0aGUgZnJvbnQtZW5kIHNpZGUgb2YgdGhlIHByb2plY3Q6PGJyLz5cclxuICAgICAgICAgICAgLXdvcmtpbmcgY29sbGFib3JhdGl2ZWx5IGluIHRlYW0gZW52aXJvbm1lbnQsIHJlc29sdmluZyBjb25mbGljdHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgYSBjbGVhbiBhbmQgaGlnaC1xdWFsaXR5IGNvZGViYXNlLDxici8+XHJcbiAgICAgICAgICAgIC1yZWZhY3RvcmluZyBvZiBjb2RlYmFzZSw8YnIvPlxyXG4gICAgICAgICAgICAtd3JpdGluZyB0aGUgZG9jdW1lbnRhdGlvbiw8YnIvPlxyXG4gICAgICAgICAgICAtaW1wbGVtZW50YXRpb24gb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBmcm9tIHRoZSBkb2N1bWVudGF0aW9uLCBnaXZlbiBwcmV2aW91c2x5IGJ5IFBNLDxici8+XHJcbiAgICAgICAgICAgIC1jcmVhdGluZyByZXNwb25zaXZlLCBhY2Nlc3NpYmxlIGFuZCBlZmZpY2llbnQgd2ViIHZpZXdzLCBiYXNlZCBvbiBwcmV2aW91c2x5IGdpdmVuIG1vY2t1cHMsPGJyLz5cclxuICAgICAgICAgICAgLXJldmlld2luZyBwdWxsIHJlcXVlc3RzIG9mIG15IGxlc3MgZXhwZXJpZW5jZWQgcGVlcnMsIGFuZCBoZWxwaW5nIHRoZW0gd2l0aCBzdHlsaW5nL2NyZWF0aW5nIGNvbXBvbmVudHMsPGJyLz5cclxuICAgICAgICAgICAgLXdyaXRpbmcgZWZmaWNpZW50IHVuaXQgdGVzdHMuPGJyLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgQWNoaWV2ZW1lbnRzIEkgYW0gbW9zdCBwcm91ZCBvZjo8YnIvPlxyXG4gICAgICAgICAgICAtYnVpbGRpbmcgYSAnbGlnaHQnIHZlcnNpb24gb2YgbWFpbiBhcHBsaWNhdGlvbiB0aGF0IGNvdWxkIGJlIGluc2VydGVkIGludG8gYW4gaWZyYW1lIGFuZCBjcmVhdGluZyBhbiBBUEkgdmlhIHRob3NlIHR3byBlbGVtZW50cyBjb3VsZCBjb21tdW5pY2F0ZSw8YnIvPlxyXG4gICAgICAgICAgICAtaGVscGluZyBteSBwZWVyIHdpdGggZml4aW5nIHVwIGNvbW1pdCBoaXN0b3J5IG9uIG1haW4gYnJhbmNoIGluIG91dCBwcm9qZWN0LCBhZnRlciBoaXMgbWlzdGFrZW4gbWVyZ2luZyw8YnIvPlxyXG4gICAgICAgICAgICAtY3JlYXRpbmcgZG9jdW1lbnRhdGlvbiB3aXRoIGNvZGUgc3RhbmRhcmRzIG9mIGNvZGViYXNlIG9mIG91ciBwcm9qZWN0LDxici8+XHJcbiAgICAgICAgICAgIC1pbXBsZW1lbnRpbmcgQ1NTIG1vZHVsZXMgaW50byBvdXIgbWFpbiBwcm9qZWN0LCB3aGljaCBpbXByb3ZlZCB0ZWFtIHdvcmtmbG93IG5vdGljZWFibHksPGJyLz5cclxuICAgICAgICAgICAgLWNvbnN0cnVjdGluZyBjb21wbGV0ZSB0cmFuc2xhdGlvbiBzeXN0ZW0gd2hpY2ggbGV0IHRoZSB1c2VyIHRvIGNoYW5nZSBsYW5ndWFnZSBvZiBhcHBsaWNhdGlvblxyXG4gICAgICAgICAgICAoaWYgbm90IGNob3NlbiwgbGFuZ3VhZ2Ugd2FzIGRldGVjdGVkIGF1dG9tYXRpY2FsbHkpLlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBBZ2lsZSBtYW5hZ2VtZW50OiA8Yj5TY3J1bSwgQWdpbGU8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFZlcnNpb24gY29udHJvbCBzeXN0ZW06IDxiPkF6dXJlIERldk9wcywgQml0YnVja2V0PC9iPi48YnIvPlxyXG4gICAgICAgICAgICBJc3N1ZSB0cmFja2luZyB0b29sOiA8Yj5KaXJhLCBUcmVsbGxvPC9iPi48YnIvPlxyXG4gICAgICAgICAgICBLbm93bGVkZ2UgcmVwb3NpdG9yeTogPGI+Q29uZmx1ZW5jZTwvYj4uPGJyLz5cclxuICAgICAgICAgICAgU3R5bGluZzogPGI+U0NTUywgTEVTUywgU2VtYW50aWMgVUk8L2I+Ljxici8+XHJcbiAgICAgICAgICAgIFRlc3Rpbmc6IDxiPlJlYWN0IFRlc3RpbmcgTGlicmFyeSwgSkVTVDwvYj4uPGJyLz5cclxuICAgICAgICAgICAgQ29tbXVuaWNhdGlvbiB0b29sOiA8Yj5NaWNyb3NvZnQgVGVhbXMsIFpvb208L2I+LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZH0vPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lR3JpZEl0ZW19Lz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZUdyaWRJdGVtfS8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVHcmlkSXRlbVdpZGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmVQb2ludH0vPlxyXG4gICAgICAgIDxoMT57Z2V0RGF0ZSgpfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvY2hldnJvbkRvd24uZGRhZGUyZjFkZTYzYmI2YjJkZTUyMTkwMWFlMzE4ZmMuc3ZnXCIsXCJoZWlnaHRcIjoxNDQwLFwid2lkdGhcIjoyNTYwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9ncmFwaGljY29tbWlzc2lvbnMvY29taWNDb21taXNzaW9uMS5jMTJhZjI2MGI0ODY0ZjliOGJiOGQ4YTkyOWJlMmVjMi5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6Njg4LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFwa2xFUVZSNDJtUDRCd1gvSWVBZkdFTUJTSmdCS3ZudnhkMnIveThlMlBqdndOWU4vNjZkUHcxWHpBQmlmWGo3NnQrZTlZdi9MK2t2L2I5alJ2WC81ZTNaLzdlc212TWZCQmpldkhqeWIxcUYxNy9lMXZMLzAxclQvODJ0VHYwM3F5TCsvNG9wNWYvL2dxeDQrZlRCdjVtTmNmOTZnUklMdTdML0xadmE4RzlhZmR5LzdjdW5RS3o0Ky9mdnYyL2Z2djM3K3ZYTC8rOUErdnUzci8rK2Z2a01Zb090QUFENUNLUC9CZmV1d1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2NvbWljQ29tbWlzc2lvbjIuNWE3ZGU5YmE0ZTkyMjNmM2NjMjdlYmI1OTRhOWM1ZGMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY4MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBclVsRVFWUjQybTJLVHdzQllSakVudy9oOC9nYXJtNUtyZzZPcmxJdTVDQXB4U29uRjhXMkJ5UUhITmkwV3c3cnNyS2IxYjdiNjEvYVozaHJqMzQxTTgwMDVIc1hERnROeUVqZ0g3UmN6TG1kSVVRaVZKM2Z6eGZiV3d1QmY4TkQzcG1Dd3dyamJBckNzU0RGRmViYVFqV2RRNjlVZzY3cG9NOXZESTg3eUxNRHhhUTdRcU9ReDhhWVlWRFJRQUJZaVpNOG1YdnUxK3ZjS1piWjBLWk1ySWpqNUtJTURJN2gyalk4MThNWEJXR291N3dkVHlBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL2xvZ29Db21taXNzaW9uLmI5ZWU3MzZlMTc1NjhjMzg3MWMzZmYzZGQxNDdkMmRmLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4ODksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWZVbEVRVlI0Mm1OZ1lHVDh6OExBOEo5QlRmVy9sMXZrdjBqdnRIOGFabTcvR1JnWS9qT3pjdnhqWUdKa0JuUFVYWUwrWmFsYS8wdTNjUDNINXVyNWp3bWtpWm5sSHdNREJ5ZFlRVXBXd2IvczV0Wi9SZlh0LzdJVGkvNkJ4Tmk0K1A0eE1MQ3lnUlU0ZXdiODE0NVArT2VrYlA4dldDTUFvb0NSL1I4QXAwRXV1cGxyMlpjQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvZ3JhcGhpY2NvbW1pc3Npb25zL3Bvc3RlckNvbW1pc29uLmNiMjM5YzQ1N2Q2ZmEzY2IzNzFiMDVhMzVkZDU5ZmQwLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjozODYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXlFbEVRVlI0MmhYS3YwcENZUmpBNGQvN2VleWtIaWluRGxJSUZaUmpZNFBRVmJSME5kMUJXMnMxdUJRMDZhcURPRGlJNHhuVVVRUVY4ZS9IZHp6NnF2UHp5Ty9mdi9xWkxDNEdWSERPb2loZTZhR282OW1NNmFST3JBWm5FM0pwaDhkOFFMN1hrcHRpaTFUd3FGSDZpOFFoNXZyaVEzTFprSHdZRWhSODhkMnJMQk13L1VWWjM2WXZ0S01uekhpaHQ1ZUJQdCtkSU5wTG85Ymx2V0lZUlZlaXc0MWtWdUNkclp0S3RTbWRrdkRwSFhld3BYQmZGcW44Zkt0TkRMdHRqUGpucElDOXRSd0EzV1pQdE9rblkrWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2dyYXBoaWNjb21taXNzaW9ucy9zY2hlbWVDb21taXNzaW9uLjhiMzhmZTVhM2Y3NTZiYjkzMTZkZDk1ZDM1ODBlNTdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo4NDYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQWdrbEVRVlI0MmlXTlN3ckNRQkJFNS82SGNhRXJRUVczZ2t0LzRNS05raEF4TUorZXp0QlRiVHBUVUZBVUQ1N1RGcFJTd015d2JVZk9CQkdCcXlJS0FHUFhJNFdJQldiVzcvc0RxUldPWWxSS0VkM3RnZWZoQ0VvSkZMemV0M3Y0WVdpQTlYVSs0YnBlSWZxQU1QNzBzdHZNUUsvT2ZLWmhTcWhWbW1LYWxET1pXZitHUnBpd29pOGhRUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hZmZpbml0eUxvZ28uMWE1YjRkODZhMmEyZGRiNGMxM2ZlN2RkNTJmMTI0YjYucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBZ1VsRVFWUjQyZzNISVE4QmNRREc0ZmMvTnA5QkZDWFZ4MUFFeFNld215QW9FdHRWUkRmVkZNRW1VSmhSSk1IdnpiN0MzUzdkcnR3OTdaRURvdTA3TzFxSUlEY3R4cFNjdktHZTNMQzQ4ZkNWbDN0SUZrUC92ZUJEd3NFU2ZSZXNDY3o0Y2ZGQXp2Z1NlOG5FVzg5NWlvUXBSODZzbkpMN0xZc09FU1AyeEVSMEs2MEVVVkVmM2plVEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYWZmaW5pdHlMb2dvSG92ZXIuNGJkN2MzMDY1MDMxMjZjYjdhYTdkODYyNGEzMjc3ZTUucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldOb1FvQ1VSQkY1K0dDMzJBMG1xeCtoc1Zna1hsZHhHQ3dtQlNzYW5TeGlzVWdHTFFvb3NWazhBTnN1MVV4aVdYUExHOGZITzdNblR0dkpQWGVKYW9DRmVvVHVreFZ5OEZ6UWhPRnBnTi8yQktjSjk0TFJEWW9FUkk0VXAvaFFIMUY2Mkl2YkxmWWVxRWp1RU1NNnlMUVlQaERaK0RZSHFCUGRJL2Z0TUNINW9GT01jYmM3Vkl2WUloL3Nkc3g5REUyREhmb0JONTRYN2dKVzBZVnMwZWdEYXY4Tit0VmF4bGhTb0tqWFlDT2lnQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2FuZ3VsYXJMb2dvLmFjOWMzMWI0ODViZmVjMzY4MjU4ZGM0NjU1OGM2MTQzLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNFbEVRVlI0MmczR3V3MkRVQkFGMFZzRFZkQURzbVJuYm9DWTNNN2NBYW50Rm1pRFR3MmtjMHNnSTNqa1NNdnFTS09SNVpxZUxmWFVsanh3RW94TWhFOFA4a0xrM3YzSUJvdjRFY3g4MHV6d1Y3d0pXbTZwSmZ3U0hidWZISlRzVGljcS9oUWlsYnhLSkJwV3IyNlFkUUducTFwR3I0RkdDd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9hbmd1bGFyTG9nb0hvdmVyLjAwNjBhNzNjMjdmZDRkN2FlYzFjZmY3NzY3NDY3NTE3LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVFbEVRVlI0bkJXUE1RckNRQkJGWi9BQWdwVkg4QTVXTnRFVGlJS1FEZGlsRWJUeUFEWkJzTENNaFNDSVhrQ1N3czQ3ZUFKajZ3Rms4LzdBeS93LyszYzM2MDBJUmcyaTJkemRsMml6R0V2ODFkemZDcHd3S2VNT1BNQmhBbjgybkJXb29sbkNRQ3NqTmZ6VEVWVHRueEFLeEFZcXFFR1ZFQmpUQzUyUXMrT0ltWExrRjYxLzZQTzlFOG9WU0RGN1dFU3pHejJ5TUVOZjZHdGQwVU5zR2VnRlhWRDlvSVNkTjFuR25tZ0VoZ3dPWENPL3dyOVExZ0liYWpyK2ZMRVlMZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9iZWxheVRoZUNwcExvZ28uMDBiYzdhZjUxMDcwYWI0ODQ4NDQ2YzUyM2E1MDQ2Y2YucG5nXCIsXCJoZWlnaHRcIjoyNDUsXCJ3aWR0aFwiOjU0MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBaUVsRVFWUjRuR00wTU5UNXp5SnUrTi9PUUlueCtPRWQvejk4L3NIQXdjN0d3QWdFLy8vL1oyQzA4WTcrYis0WTlKK0Q2UjhqODhjci83OTkvODd3OWV0WEJpNHVMc1lQNzk4ek1GWlUxZnoveFNqMGYvYSttNHdoV24vK2M3Q3pNMXk0ZkptQmhZV0Y0ZisvZnd5TWtkR1IvN2w0UlA0ZlBuYU1rWXNkYUNZREU4aDRCaUFBRXdCNmVqTWJFY01RU0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvYm9ub2JvUHJlc3NMb2dvLjcxYzg4MDNhYThhODAxMTk0NTcwY2Y4MWY3OGU0ZDQzLnBuZ1wiLFwiaGVpZ2h0XCI6OTAsXCJ3aWR0aFwiOjQ4NSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVFBQUFCSkNTZklBQUFBR2tsRVFWUjQybU53K3hmN3YvVmYzYi82LzhYL0d2L0YvUWNBWGE0TGErQUYzMGdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9jc3NMb2dvLjAxY2RmY2YxYThiNjg2Y2MyNzZlYjdkMmJkNWQzYjRiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVhVbEVRVlI0Mm0zTnNRMUFVQlJHWWJHTU9SUTZVZExUaWJ3TlJOU2kxSmxCVFNRS001eWZ4QTVpQmNWdDN5bS81Z1NlS0lDRFU0OXlnNXFMVG80ZFo1QnlxMVhHUkdFUXM2aFh3MHhpRVBFeU1Pb2pNZ2lwMkZoVkt2UThmeGhYTUI5VHk3R05BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc0xvZ29Ib3Zlci43YTQ5N2I3YzIzMGJlMDhiMmRhZTg0Mjg3ZWNjNWMwYy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFxVWxFUVZSNG5FV01NUTRCVVJDRy85azRoQnRvbFZxVmhwWjJuMUs0QVNmUU9ZQ29KTHV0VXFmUWk4b0ZiRUxoQnNZM1Q4UWs4K2JOTnpPZk5Ta3B3dDE1LzJGa0VMdVhaVFFUbXBYTUhyQ1d1YmVwUzFodERRc01aaGptMUVyU0M5Mklvd1AvVFRZd0dBTFhrdmJraFJ5d2NNSlFaUU9mUG5CQlhrMTZVcnV3c0IyekFkZ0JuREZ0Z1FXMkthd0h1K1VGb2lBVGNFeUZxK2JaY2ZEK0xYekRMR3dJR0VmUWZ3QlBkRDArM3BoMjZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2Nzc1RyaWNrc0xvZ28uNmJmZGYwZDMwZmFmMmIxNzMyNjcwYmUyYjkyZWQzNGYucG5nXCIsXCJoZWlnaHRcIjo2NCxcIndpZHRoXCI6Mzc0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQkNBUUFBQUJKQ1NmSUFBQUFHRWxFUVZSNDJtT28vMWZ4ditsLzBmLzYvdzFBT3ZNZkFHS2ZDOHlndDg0OUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ28uYjk4OGE0MDg5ODI1Y2VlZGJmZWNkYzk0ODU3YTFjZWEucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyaDNIc1EyRFFCQUYwUzlPdWo1STNRVUJHY0lPQ0kwSXNYdHdEd1NrcGhscStGUFBzaUo1bXBIazZxY0hEN3lvM0x2d1lHTkxGNm84MFZJSlI5cDZFbS9rNHQwN2hUeDU1T2Z3NGI4amF4UWRKK0VQMy9Ta0V3MnJaOHRLVnhwSkx1NXpabm9YNndJTFVVaEY2alV3R1FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZGF2aW5jaUxvZ29Ib3Zlci4wMTY0NTA2MjllMzVjZWZkY2JiMzcwMDFjMDIzZTMxNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF2RWxFUVZSNG5CV05NUXJDVUF5R0U1VUtua0R3RGk3aTZLQ2JpNU9MVU9FVjZlRG1CVVRFQ3ppNUZGd1V2SUdqaTZPNGVBZGJUeUFvbFBSTDRDTjUvLysvUklzUXhFUWlGUm5UUzZHWUc2WjZWYk8vQnlLMEdUd2dCYThNK25EUlBJUXBQNTZpK2hhekgxdDhRNVBXWWU3NWhoanpqRkEzc3oyZHA2NllTNEt4QnlZb1hZUWQzaEg0S0F2TU5mMmxSWklNTWJjSUE0UWxNTXFCMUoxTkd3L1V1SjBpZkRGTzREVW4xYUpubW9mQUJmWDdJNFEyZUgzZ0JtVUZlQUpEaUZlZWlzMEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2RyaWJiYmxlTG9nby44NDJlYTUxOWQ2NDM2OGVjNDIzOGQ4YTg1NjhhN2FhYy5wbmdcIixcImhlaWdodFwiOjk0LFwid2lkdGhcIjoyNTEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFEQ0FZQUFBQ3V5RTVJQUFBQVZVbEVRVlI0bkIzS3NRM0FJQkFFd1R2ZUlpV2xCTXY5dDJQWFFFQ0E0T0dNeUZiYW9hUTE1NEpaZ0x0enQwZ2d4b2o5Y01EN2ZpaWxjSXlCM3J2Y0o1L25Wczc1QU5WYTBWcERDSWJyc2cyY1pxYVVFbjgwVURUelVrUkpkZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9mcmVlQ29kZUNhbXBMb2dvLjMxZGYxNTAwMmI0ZDNjNGJkNzhkOWEyMjM2N2I4NTg3LnBuZ1wiLFwiaGVpZ2h0XCI6ODIsXCJ3aWR0aFwiOjUwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUJDQVlBQUFEakFPOURBQUFBSmtsRVFWUjRuQVZBc1EwQU1BaUN4YlYrNTlUL254QXduUG51ZnRoZFZCV1RnR1JzUXhJUDIwY1BNandRSlVVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0TG9nby5mZDdiZWMxZDg2ZjAxZjQ0MmUzZWExYmIyZjE5YWM3MS5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJqV01RUW9CWVFCR3Z5SWJNeVZLS1k3Z0FrN2lNRzdnRURhU3JRT3d0bVB4M25aS0ZvNGdwVWJUbjkzN1huMHZDZjNFRmN0Q29aZFljZUx0TExGVFR2bXdZV3ZyT0FrVEcxdnVyTm41ZEJTR1htMDVzL2ZDelNyZHp4ZEhEbjRkL0tPMURRL3FzbUtuNWl3Sy9RQUhHRHdTZlhmN3d3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdExvZ29Ib3Zlci5kOGY4MTc3MDViNjU2ZmNlOTY4ODlhMWM3Mzk4YWE2Ni5wbmdcIixcImhlaWdodFwiOjM2NyxcIndpZHRoXCI6Mzg2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsVWxFUVZSNDJtTUFnZWNKQ1N4Z09qSFJDc2pXQmJHZkFjVmdrc3hRU1I0ZzNnaVUrQTRVazRRcmdrcUtBVGsvZ2JnR0tOa041UDhIWWlFR3FDcGhJT2Nla1A0UGxMd0FwQ09lSlNiT0I5S1BnVmlBQVNqSURWUndBcVFBaVBjQzhSSWdmeCtRUGcra2VXQldzQUFWUGdjS3JnRGlaVUQ4QnlqR0JyTUM1a2hlb0tKN1FQd1FLTVlMOXdBeUF5Z2hBOFN5eUdJQWpkaGprUHhPd0hBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvZ2l0aHViLjgzODYzN2FkYjc2NGNiNDNiZjdlZDY5YWJlZmVkOWJjLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dpdGh1YkhvdmVyLjkwNTRmNzljNGQwYTA2MzcyZWNiMDAxZDMzNDJiNjViLnN2Z1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsLjkwMTE5ZWRkODVlN2Y5ODAzZDkyNjY5ZGQyNTQzNmNiLnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2dtYWlsSG92ZXIuNzI4YmEyN2I3NDVjZjMzZTkyNjUxZWM0MWQ1MjE3ZjMuc3ZnXCIsXCJoZWlnaHRcIjo1MTAsXCJ3aWR0aFwiOjUxMH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvaGFzaG5vZGVMb2dvLmQ0MGNlZDc4MTU3ZGYzYzI0MzI3NWU4ZjllMjY1YTg2LnBuZ1wiLFwiaGVpZ2h0XCI6ODksXCJ3aWR0aFwiOjMwNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUkVsRVFWUjRuQVdBS3c2QU1BeEFYMG1aSEVFZzJQM1Bnd09GNGd3TDJZZTFSSTV6bUU0djI1cHBIVVJBVmFtMUVPT0NYUGR3dDR5MXgvc0hJY3k0UXkyRlBTVitxbUFjZzVXOGlTd0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvLjliYjRkMDEzNTM4ODkxODJiZTFhNDFiZjlkNzgxYTZmLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmpYR29RNUJZUUNHNGEvckZES3FReGZOVENQb2JzQWQwTGdDNGN4MWlEYlRCT0g5Z3AxZ0ptazJ3ODVtKzg5ZnpwN3lpRFdoNU1CR1hwTFJwaGUxeUx3U0M4NDBlWEx6MWNGek1lTk9oVEdqdUxlbmNwOC9SdzdzWGVQaGdkemg2eUVwVzFmOW9pdlgrWEJpRWwzNHVTSExDVHR5Y3FkT3JBSjFNRmtUOU8rMURRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2h0bWxMb2dvSG92ZXIuM2IxMTAwMmNkZDE2MDJlMmExMmQ5NjFhN2NlYzQ3YmIucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcGtsRVFWUjQya1hNb1FyQ1lCVEY4ZFB0V2pTcjFXazNpb2hOZzJsZjhBVjhBMjM2QkliaGN4Z0ZzUm1zc2lBaU9HeUNxQXdHMi8rT3dRWS83ajFuZDlQVDk5ZEljODRCNWI0UllZa1E3Y2k1SHRPMEVKSlhZbG5nakNaZnZIRGp4VFhpTDVqYndZemx6cXp3Y295UmRmalFUOFYxbjVEZ2lBUDJkRFhtZzRPQldEb1VQOEtRUFdCdXlWWG1tOXkxZ3pyaHl6eGhVcmpRL2RHUVBTd2U1UTV4SVlBblNSbDR0WXBqMnd6NUhRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvLjhiYjEzNzhkNDE0NjUxYzYyMDhlMWQzNjY0MTIwNDc2LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWYwbEVRVlI0MmhYQnNRb0JBUURHOFM4V01aSUg4QUN5S0lOSk1Ya0I2VEpjNUZLeVdPaENYY3lrbE82R20yNjdwL2wvNzNQZDd5YzNMSThwMlJEdzhWM1VPK3pvTWZMVU15R0dpQ01GUDZjMDVTVVhZcDk0OCtmSlhGNlJFZkFsNXV5RVNBN0pmV09ORUpHMzhzTjlCblFkK3NxZXRyemc1UU1KRTdlUVZBR1k5RWpVRVNvWC9BQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2plc3RMb2dvSG92ZXIuMTU3MWFkZWM0ODFmMjhmOThmNTdhMjAzNWExYjgzMzcucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBckVsRVFWUjQybU40bnBEQXhBQUVRTnIwZVdMaXVtY0pDZkZBSEF2a1R3TGlCZ1lZQUFweUF3WFNnTFFJRUJzQXNRMVFneE5NVWc5SzV3SHhjaUNlRHBTY0E2U1pRWUkrUUoxVnp4SVRhNEYwQVpBL0VZaG5BZGx0UU5xVkFhZ3lFc2laQzhTeFFQWVVvR0F0RUpjQzJTMUFPaE5rUWpKUWNpR1FyZ2ZpYUNRM1pRTEZVMEd1YndTcUZnUFNTa0JCWWFpR2FpRE9BTEs1UUNyZGdKeDJJSjBOeEMxQWJBSFV3QUV6Q1FBY2dtOW9KSm9NSEFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvanNMb2dvLmMxODJiN2UzNzQ2NTE5MTY5YmJjYThlODRlZDMyMTA0LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWNrbEVRVlI0MmpXTElRNkRRQlJFLzdWNmxKNWdWUTI2b3JLaXJtblN0S0liVWtFVzhBZ2NSK0ROQVZCY0FRY2ZDSGtaTVc4eXBrQWlranVSUkRBbDVoMnRLVTNSeTdRSmg1OHAzL2FCa1k2ZTRoQWZycHhjVlg3WmhaNzZrL0UyQ3E4Tloxb2V5dlExQldwZTNDbTVFWFZaQUEzTll5dmxVQ2Z1QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9qc0xvZ29Ib3Zlci5mM2Q2NjllNjQyNzM5NjgyNDU5ZWIwNDIyNjEyNzc1OS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF0VWxFUVZSNG5GMlBNUXJDUUJCRi8xZ29XT2tOQkVId0hJSTNFQ3R4ZzBYdTRoWFNSQ3NSTDJDUkl5ZzI2YXhTSkZvTFFockh0NlV1ek15Zi8vL083Rm9kUWlwcFp0TGJ6VHBnbWZ2SHBUNndzQ1pKanU2K3dDREluMk5tSjJ0Q3lCSFc5QzNSZzVRRG1FS3lQQnIyOUN2YVNGVGtydHp2MUFGVHkzOURobGlCQ3NRdDNETWFjc0FhTXA2TWFGa3p4SGdGVCtJdkRyaVhMcDBSZGp4NGczQ0RxNm5UT0NGRm5OTThXUEdpanJsZFVrZVlMbDhGWEVib1VMSkNjUUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nby4yZTc4YjRhNzMyNWYwZmIyYjEzMDc2NDUxODBjM2RhNC5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFYRWxFUVZSNDJtWEdzUTFBVUJoRjRmODFoaEJSc29COXNJQkVSYWxRQ2ExR0pkRll3QTc2Yy9meG9wREkrMDV4cjhuaDdPTi9nRWJkdTVHWll0V21sWk9EeVRmUWF6VE5YTnkwbkd6c1dveVNuRVF4bVZJS0tndkk4ZXNCN2tzdGtvV0N4d0FBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9sZXNzTG9nb0hvdmVyLmZjZTMwNzUxZjE0Y2IyZDY1MjkzMmE4NThmNmI1ZjE4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW5rbEVRVlI0bkRXUHdRbURRQkJGZHk1Q3dKdVFRMG9JS1NBZHBJeXNEYVNQUU02cElhV2tFcjE0RWhSUmNIeC8wQTg3LzgvTW45bGRhM00yVHdFM0JZNDRHZEhkWkVnQ2t1RFVZZURTc0F3ditNVGttNjQ2QmZtTXVzQVBHYjQwS2lZV0NnMUhHRGtUMjBvWlBpUlhObFR3ajhrN3VrY1g2TTZhbkorSVA4V0JUU3RYbE9RVCtSbStXVnZYdWpkZWp5RzBnQ0pZUERKMC9FTFlEUWMyQTFNN0dKUllhOG9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbi44M2JjMmQ5NjZjMmZmZjQ0NDNhZDU5M2ZjYTkxZWIwYi5zdmdcIixcImhlaWdodFwiOjUxMCxcIndpZHRoXCI6NTEwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9saW5rZWRpbkhvdmVyLmNmMjUyNWY4YzMyYWIwNzlkOTU1ZTg1NmIyNDkzNTA1LnN2Z1wiLFwiaGVpZ2h0XCI6NTEwLFwid2lkdGhcIjo1MTB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nby5jMWQ1N2NiOGZhYjQ4NDAwNjExOWYyMGI1NjI4NmFjNy5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJoM0lPdzRCWVFCRzBlOUhxNUJJTkdRNmp5aW1tY1FXWlBxcHhDNm9SR1VKb3BiUVdZY2wzTHNXTFhIS0U0cHh3Z2NaR1Vyb0VSb2V2bTBKL2ZnTGEvWmNQQmtHTVlRakZXTnhia0pzUGZ6N3p0UEUyTkVSdzlVWENTc0xXemVzYVp3NURSVkxhODdjMkxGZytBWDk0VU5yNlcvOTlBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL2xpbnV4TG9nb0hvdmVyLjM1YjkwZTM5NjU3YzMzZGFiNWJjNmQwMzdiZjcwMDdiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW1VbEVRVlI0Mm1ONG5wakl5QUFFenhJU3hJSDRPeEJmZlo2UUlBZ1NBOHNCT1V4UUJTWkF2QWlJandERnZFQmlRSm9acmdCSTZ3TWxZNEc0R1lpcm9XSXNEREFBNUpRQ0plU0JXQVRJdmdJMFhnMHVDZVI0QVFWTFlIeWdvdmxBdkJoWlFTaFFRU2lTZ3NsQS9pcVkwWnBBekFqRUhrQ0Y1a0JKYlNEYkJJaGxnVmdHcEZvZXlOQ0FPcklXaUtjQ2NUUVFxejlMU09BRkFMZWRXL0g2NFNSL0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbXlzcWxMb2dvLmI4ZjIyNjgyMDI0YjFkMmRhMWFiODVhNzAxMjNmZTI4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVgwbEVRVlI0Mm1QQUFGY1pHUml1Z0xEd0ZZc3J2Q2dTVjlTdUtGOWhaYmdxZEZVQXlHVzdJbkhGNFlyK1ZWdUdLOU92VEx1U2N5WCtTZzJRbkhIVmhlR3ExaFhWSzFGWHZLOG9Yakc1NG5CRkVac3RWeGlCbU9rS0NETmRaUVFBUmFvb011ZzB1TnNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9teXNxbExvZ29Ib3Zlci5hYTk4NDFiZjM3YjAyODExNTk0MDU4MmVmMzE4MjFkZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFsRWxFUVZSNG5HM09NUTdDUUF3RXdITkRoU2hJVFJrSklWcitrN3lLVC9BZDBrTkJTa0FwRVJ4amhaSlZObXVmMTNzWDVZZXg2MHFsSmFKRVZkRkN3eUMwTmFDQzQwYmZhczkwaXJIdnJjMHdMMkhYb0tWdmVzMkV0YmlQNFlObmdXdmM0bDNLS2cxSFRsOFpjTUlOcG5rdjVaU0duZWJGY2FCUEhBd2F1blIyaVp2WC80UDQrVTBTTE14M1FOWlpwdWF2ZmdGOFdUdnBQdStjM2dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvbm9ibGVMb2dvLmY3ZjQ3NjQwM2UwOGZhZjU2ZGEzNTQ3MWMzNTBlMDAzLnBuZ1wiLFwiaGVpZ2h0XCI6MjIzLFwid2lkdGhcIjoyMjUsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTJVbEVRVlI0MmcyRzIwckRRQlFBNTJ3M0cyTk5TaFZSOFFMeEgvUk53WWQrdWVBUGlBVkZFVnBFYkxXMHNVMWprdDFqWUlZWklidGQwdThOWW1lOE15S3VaL0NxZEZBSERmYm0rdFRNRm10V1pXT0txcFdmMXcwY1JSQVpqdnNSZG5SM3BlZG5KOHkvRjFUYlN2UDhndW4wZzdwdTVPVnRnbmw2ZnBlditaTGgvZ0ZsN2FYeFNOeFBjWjF0RU94bEdQTjUvOERFcENSSnpPUDRGMk4zeWZZY1lhYlkxY2JyNFRDaktCWGp0NW9rRVNKL3hKUmt0bnVYajRwNlRVcU1FaEFzVUFFSTdHaXdNWVJCcHJRcXdZaEtWMXlxZ05Lb2hIK2FxMkppRnRJUzZ3QUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL25wbUxvZ28uZjc1MDliNWU5YjI5NWE2YTgyNDY2MzI1YzhjOTVhZGMucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWFVsRVFWUjQybTJOc1ExQVlCZ0Z2L3ptRVpSS0dxMFJGTFRVZ3Fqb1ZHekFEQ2E1dDQrSXFIZ3YxOTZaUEJ3dlRwNTlwcDVLQXhVZE5RV3QwU2pYcUpTSlJLVTIwOHJPUXNiQnpNbHBpZ2lwYVlrSjhQRi9wTzVPM3RIbkYxV2pOV0JLNkJoQkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvbnBtTG9nb0hvdmVyLmEyYzA3ODZlYzVhMjIwNjJiNmQyMTVlNzdiZTQ3MGFiLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9FbEVRVlI0bkVXUHV3MENRUXhFUFJDU0VDR0lLWUNqQVJMcVFOcXJnQWJvZ200UUFSS1ZRTUF2QklrUTgrWVFkNk1kMldQUGVyMjZsdEtQaU13SWhaUmtzb2FHYkdpVklkSEgvcS9ac0VIY3ljZndCa2Z3Qlo5WUo3cVVzdWJXS1RObnhDTnhTWE5QYzhxNHloTzJUQmhTZkZEY2thL0l6N0NDUEZIWGMyNTVzd1Y2Z09FUUVXLzBoOWdZMkNuNXdnOFlHbGc3dDZGbkEvRCtMbkk2ZkFFYVBqNHozcTdFU3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvcHl0aG9uTG9nby5iOGY0ZWQ5MTMzOWY1NjUwY2M3ZjU4ZjFlYzViYjVjYi5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFia2xFUVZSNDJpV01zUW1EQUJRRkgrZ01EcUZEdUkzN1dDV2Q0QVNtRUxkSW1uc1FiR3dFc2JDMUVyNm8xOTBWSjZjU3BRZGFaeEtKTG1qQTRlcVJuRGRmRmdlOWF4ZnloK0JnWStIdm9KTTd3aU1UTXp0WG9LQ21KMWo1OFhMK2ZDckMwTnppUkhKRzY0RlNJajBCT0taTUJQb3pLOVFBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9weXRob25Mb2dvSG92ZXIuMzhhNDBlZWNiNWNkMWQ5ZTlmNTFlZGM5MWU1MTFlMzgucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdWtsRVFWUjRuQjJPb1E3Q1FCQkVkOU5XWUVrZzRFbElxQWFMUjhBdlhFMXhLQVNmZ01DaHFPRVhPSVBIa2FCUm9OdWtLQ3loT2Q1eXlXUnVadWRtVDB2bllsSDlTZ2hURWRtQUYxamoxWGlSVmxrbVhQRGtpRG1HVS9RU0x0QmlEU1BFQ2t3dytpclNDeUdjNFNlNjBNbzV6L3M1Z1FiakRYOW9NQjRDYnl0T3ZGZ2dIZ1FTT0NIUWhsdTBlRnVSY3NscEdSQ1lNYXdabHVDS3Y3Y1Z3dEJPRGc2WWQvaEdPS1A1LzhrSW93RmRzQU1kc0ZYVkM0SDRCOEVRUmYxdWswSXlBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3JlYWN0TG9nby4yZmY3OGNjMzliNGFjODFmOGI2ZTYxODdhOWY2YWUxNS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFkMGxFUVZSNDJpV01NUTZDVUJpRC8vWHRobnNZVE5RNHNSc1owRW5jWVRBbUVsaUJDekN6d2tyQ2FiN2VCeDYwU1lldmFjME1SNklEZ1Y1eTVxV3pRZ3Irbkxoc2dFd2xMVFVWbWU5VElqb05qR3RHU2sweEQzb21abnJkRmZ2Smg1eGFqWEs5OTlNYklUKytPdXE2QVJ4UGd0VUp6bXdCUlRnOCtpU3ZmeHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy9yZWFjdExvZ29Ib3Zlci5mNmRjMzA0Y2M0NThkYzEyN2MzY2U5YmQ1YmM0YTY1ZS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFtRWxFUVZSNDJrM09zUXFETUJERzhWdXpGOStqV0doTEovZFNCOXVwRnBLdEhZcWc2S3ErZ0xPcnJvS1BwYS9oUHhMQndJKzdmSjVIeEo1SmF6VVpFODFhSCtETnhyeW9DckllZ2pNWEh4bFM3aWZxQmJKdCtDSm5TMDB0VWJocy9UdW1DZEF3MEZGN05PUUJZbUZOU1BCQWl3RWpXajdlRVFySERuMElmd1FsZldWNzZodXlEZHpnSThFZlIxejNqMVI0d25NaWw4a0NWVkZ4cWV5Y3BkTUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3Nhc3NMb2dvLmU4MzUxYjIxOWIwZGE1YjRjMTAxMDA3NWUzM2ZkMmRjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW9VbEVRVlI0bkIyT01RNEJVUlJGNzZPU3FEUWlVVkpTMklGWWdlaHR3eVlVS29sTzFPekdWNmdGTzFCTXhwdHo1LytjLysvN2MvTG1SYm1YcnFRYWxKR2NVckRseUdYQkg0YVJzZUdwUjM2UnIrUTZzU3pNS2Jad2x2U0FIZEtldTBJTUN3ZUtJM3hoRFcvNElCV0V0RERpWVFWOW1JRG5tY0lGaW9VeHdiK1lRUVZQY0pjYkRRWVdsaFFMT01FUDNLRmRDTzJRekVwZ3Q4dFhxc1A1dDlBQW9IOUhQTDQ5R2ZJQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvc2Fzc0xvZ29Ib3Zlci4yMzNmOTcwYzYyODBlODdlNmE3ZWI1ZTdkYTI3ZWZhOS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFvVWxFUVZSNG5DMlBNUTRCVVJSRjc2T1NxRFFpVVZKUzJJRllnZWlGVmRpRVFpWFJpWnJsakVJdHhnNFVrL0djaTVjNTgrLzdjL0xtL3loWDY2YWtHcFNSNHZsWEFEMENPYnQ4WGJEVFFycEh4cGxjMjdVd1psM0NVZElWTmtoYjFnb3hMT3hvOXZDRU9UeWdSQ29RMGtLUGpSbTBZUUErenhCT1VGam9FL3lMRVZSd0EwKzVNS0JqWVVvemdRTzh3Qk4reFpVc2NCa3lmTXNoMWVEOVpvSSsxOFk5akhpU1c0MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3NpdGVQb2ludExvZ28uNzA3ODQxYzljY2I1YzU4Y2ZmN2U1NThmMDJkOWE0OGQucG5nXCIsXCJoZWlnaHRcIjo4NixcIndpZHRoXCI6MjY5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRENBWUFBQUN1eUU1SUFBQUFaMGxFUVZSNG5CWEx3UTFBTUJRRzRQOGQ2YVVjV0FCeFp3ODI2bUlkUVV6UUFVaWJIaXZWNUQweHdFZjd0bk5LaVdLTTBqWXRlZStscWlzb3BYQmZONUV4UnNaaGhITU9YZCtodkFVNVp6QXpyTFdnZVpwNVdSYzZqeE8vMUZvamhDQlBlaUFRK2dBRmlDMit1VnhWb3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvLjhiZThiNDhjYzBmNDdjNjc3NGVmM2IzMGVhMzA4MGE1LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWMwbEVRVlI0MmlXTk1RckNRQlFGZjQ3dzk0dUlwZDVLc1BNZUhzQkRXT1lZaXFXMjg3UVVRV3ppQm5LQ1RaWXc3UXhqTkRoQklpbHdHc041a3ZueW81TndVNUFwRlJVR3BXcjBmRGh6NWNaTFM1UHpuOWh4NHNDYmhSRmtGWTUwMnF0bFd4T1J1ZkNnMVowd3pkczFLellFTmdLYnpWUDVCaVR5YkFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3MvdHNMb2dvSG92ZXIuODhlZjE5YzUyMTg5YmJlODJiYTdiNGNkYTZkODUyM2YucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBbUVsRVFWUjQya1hQUVFyQ01CQ0Y0Y2tSYkVURXBkNUtFQnJ3SGg3QVE3ajBHSXBMWFZlWFVpaVpSWnRDVDlEK1ExdTYrTWpMbXpBUWlYbnVzSUtQSVdSR3lkYVJuVmpRRUw2Y2lhSkNKTmQwaFRJVGdpY2t5cDVoYjZjQ0hUS3hWMmdabExqaGlSZCs5QnVKNDRQR2tJKzQ0c3o5ajdWdDhFalQrZ3RxN2lmY2NaZzNGSndKRDN5bTRSdGVLSnd1Mzl4aFM5N0R2aW9ESUw2SW43Z0NkbHNBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy91c0xvZ28uOTFmOGVmNTFiMDE4YzhiOTYzMjBmNmJhNTc4OGFiNWQucG5nXCIsXCJoZWlnaHRcIjo3NTAsXCJ3aWR0aFwiOjc1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBOEVsRVFWUjRuR1A4QndULy8vOW5ZR0ppWWdEUmpJeU1ETWlBRVNqNEQwZ3ovUHIxaDRHTmpZWGh3OGV2REkrZnZXV1FsaEJpWUdGaFltRDg4UEhMdnhsTERqRndzTE13NWllN01odzVlWVBoMmNzUC83Y2Z1Y2ZBd2d3MDcvQ0o2LzlzTGFZekhEcWV3YWlsSnNPdzY5QVZocWp1RS8vNWhGa1oxcGM1TURLMlQ5bjZyM0xkYllaSVBTSEdVRGNOaHRXN2JqQXMzL3I4LzZNRFNReXlVaUtNakcyVHQvNnJ5ajNDNEpXdXdoRHBxczRRRzdLSm9hTERncUc5UEpBQjZINEd4bytmdnY2N2N1TXhnN0s4T01PcEMzY1pMdDk2d1JEdVk4eWdyQ0FCVkFEMEZjd1hRSURzUDZBd1VCSUlBRnE0WnBBN0ZIVjVBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nby5kZTVkN2JhOGMyMTZjMGI2OWI2NDZmOTRiNWEyM2EzYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFjMGxFUVZSNDJrMk5zUW5DWUJoRXIzQUZOOGdvT29EV0JoUXJLOEVCN0cxc0ZDRTdDQW9wa2dYK0RkNHRrK2JMUjlLa2VjYzdPRTZTeFlva0o5ZE9YVk5OK3FRUWJ1Ukx4bzQ2MlJJVThlWERRT0hCM3VGZWROejVFYnpZSnJPNEVqNzdSdkNmSnhVYmhIaFRIRFJhM0I1OXNFYUZVbEd5QkNPNWVRQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL2xvZ29zL3ZzTG9nb0hvdmVyLjZhNWFmYWMyZTNmOTliMzQ1NzkzNTk5NTM2ODJkYzJjLnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXVrbEVRVlI0bkNXUE1RckNRQkJGWjhCU1NHVnY0UVZTQ1o1QlVEekJMcVN4OGlTS2hWaWtWRXN0RkVFVVM0bUlWN0NPNEJrQzQ1dGs0ZWRuLzd5ZDNkRXlCRkZWTWJPV2lsUW1JbmdrOVArdEF4MnloUEJENEd1QittakF3VnpMR0tkcXRxWTRJV3lqRGZBWkg1SVYzbUVQK2VPS2pMWnZDZzhPdlBBRCs2dCtRN2hBUGdsU2dqRys0a0VuL0VhbkdwaXhXUUpsZUlMbTZJaEdxSENnUjdFckluZkVDT29kVXVXUjdISUh4QmRRTXlZakF3UytGZkh1RDF4UlJIRGZ3ZkhCQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93YXNrb0xvZ28uOGE4ZTVjNjdmNDgyNTIyZjQ1OWM0OWFkZDJmNTE4OTYucG5nXCIsXCJoZWlnaHRcIjoyNTIsXCJ3aWR0aFwiOjEwMjQsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVBVbEVRVlI0bkdPVW1IUTZrNEdSNFNVREE4TVhodi8vdVlBME13TWpJeXVRWm1KZytQOEpxT0RVTmFEQUZhRGtQNkRnTnlBV0F2SkJOQWlzQWdCQ21CQ0tLUFFzZ3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvbG9nb3Mvd2luZG93c0xvZ28uYzgxMGJmODEwMDk5ZTFjYzMyYmU4MjRmYWVmOWVhMDkucG5nXCIsXCJoZWlnaHRcIjo1MTIsXCJ3aWR0aFwiOjUxMixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBWTBsRVFWUjQybU5BZ0N0OFZ6U3Y4REZjRWI2U2ZhWHpTc1NWVTFjZVhmbHh4WnJocXZPVi8xZi9YNWtBSkVHMFBjTVY5U3Rycml5NUVucGxOWkJlZDFXRDRTcFk0Q3BVNElvR3d4V2dsaXYvcndLMWdHbDdocXNnUXp0Z2hsNjF4ckFXQUgzdVNkVUhGOG5IQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy93aW5kb3dzTG9nb0hvdmVyLjk5ZWU0ODcxMmFjNGM1ZTE4ZjNhNDEzZDY3OTkxOGM5LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQW4wbEVRVlI0bkdXUHNRMkRNQkJGL3pGQW1rZ1JVcFMwckJISk8wUXB6UVJJbE9rekFLT2taNGRrQ1ppQjduaUhnQVpMaC8zL1BSL2ZOdGExekYxdUpyRWJ1N3VmSkYxeEJodHpQaU5lMUIzakI5aENsT2dMT3NXRWhOR3ZOenNhRFkxdFBXSkNoZkZCVE5TWENVOUljQlhvZDB5b3lIQUFPQmQ4QUhKT2lKNTBFYllEYUFDd0pJRGxGMXZJRzhhZlZzdTVwUGFRY1ZNMGxyV0czWjg1QTVGTVFxRzhUeEtvQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nby42NDM0NTA4ZWQ1MWE5MDZhNzU4NGM5OTJjNTcwODAxYS5wbmdcIixcImhlaWdodFwiOjUxMixcIndpZHRoXCI6NTEyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiMGxFUVZSNDJnM0pzUW5DVUFBRzRZTzNnTVlkM0NBT0VEQ1F4aGdEZ3NQWWlqWVdFUnpEYWU2Zkp6NE9ydmxJQ1c2Y25lcXhBTFpaN0IxYzBvYXFMcEloWGZEamhrd1pRMVlma3BzanpuYVpYZjJLMTV6SnJ0ckpYKzd1ZmJzRlBPUnA3ekV2VzhFaU5sNXFqYVQ4QWU1OVE4QlZTdTRxQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9sb2dvcy95YXJuTG9nb0hvdmVyLmRkNTU3ODczMTc2MjAwMWE4Y2I0ZWU1NDIzNzU1NmQ4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXYwbEVRVlI0bkNXUHJRb0NVUkNGWjdndjRNK3phQmEwR0ZVUURNTGRKZ2FMVGJCbzhBRU1Qb0JKc0FqbTFTaHM4QzNjcGlaQndSMi93UXZET1hlK2M4K3ltc2NZUk9ScklpVzB5UlRNU1ZXZlloWTBUeExCMUFnTUFVY1ZDZmcydXVXZTZTM0dFdWtGeXduQk52NE5TUEZyVVozN0p6cVl3c3dPdkRLQ0t3SXpnZ04yTDIvb0FSNm1XZ2J2Z1J2Z0dOaEhQOTVRWlRubDVZVmdSSy9jZDh5SVdYcURjT3JBTGpERkc3NkY5N2JNR3dMR2Y3T0NOdVIvem9UdWFQZ0JUTjlMQ0ozbHRFWUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL25ldy1waG90by9uZXh0LWpzLmEzNmRhYzBlNDY4ZGY0NmE0Zjc5ZmIwOTMyNjNiNmI2LnBuZ1wiLFwiaGVpZ2h0XCI6MzAwLFwid2lkdGhcIjozMDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQWFFbEVRVlI0MmkzTHNRa0NRUUJFMGRlRU5SeUwzUWtXWVdBZ21BbUdGbUFvM0tGZ0J6WmdyTEpHNm1YakJzZG5ZUGp3aFdJd05ucGRVTHhrNHFuakxFN3RWcjIwK1ltbGhidVYrRENLdlkydG8vaHkwWVJxN1NZRzV0NGlIZzZxSXBxNmFxR2RXZndCRXpNdy95SytHdG9BQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9uZXctcGhvdG8vc2FkZWdoLTEuMTExMWQ0MzYxYTAxY2JmMTdlMmM1NDE4ZTYzNmEwMDkuanBnXCIsXCJoZWlnaHRcIjoxMjgwLFwid2lkdGhcIjoxMDQ0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9LQ2dvS0Nnc01EQXNQRUE0UUR4WVVFeE1VRmlJWUdoZ2FHQ0l6SUNVZ0lDVWdNeTAzTENrc055MVJRRGc0UUZGZVQwcFBYbkZsWlhHUGlJKzd1L3NCQ2dvS0Nnb0tDd3dNQ3c4UURoQVBGaFFURXhRV0loZ2FHQm9ZSWpNZ0pTQWdKU0F6TFRjc0tTdzNMVkZBT0RoQVVWNVBTazllY1dWbGNZK0lqN3U3Ky8vQ0FCRUlBQWdBQndNQklnQUNFUUVERVFIL3hBQVVBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUYvOW9BQ0FFQkFBQUFBRFAveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQy85b0FDQUVDRUFBQUFELy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFDLzlvQUNBRURFQUFBQUYvL3hBQWVFQUFCQkFFRkFBQUFBQUFBQUFBQUFBQURBUUlFQlJFQUVoTkNjdi9hQUFnQkFRQUJQd0NTK3JsbkdTMUk0RDVRK1VhNVhBeDlkM3JYLzhRQUZoRUJBUUVBQUFBQUFBQUFBQUFBQUFBQUFRQVIvOW9BQ0FFQ0FRRS9BRXkvLzhRQUZoRUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFCRVMvOW9BQ0FFREFRRS9BS1ovLzlrPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9uZXctcGhvdG8vc2FkZWdoLmViMjMwY2U1YWRjYzNkOGIyNTkzOThiNWMxNjAxODAzLmpwZ1wiLFwiaGVpZ2h0XCI6MTI4MCxcIndpZHRoXCI6OTYwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9LQ2dvS0Nnc01EQXNQRUE0UUR4WVVFeE1VRmlJWUdoZ2FHQ0l6SUNVZ0lDVWdNeTAzTENrc055MVJRRGc0UUZGZVQwcFBYbkZsWlhHUGlJKzd1L3NCQ2dvS0Nnb0tDd3dNQ3c4UURoQVBGaFFURXhRV0loZ2FHQm9ZSWpNZ0pTQWdKU0F6TFRjc0tTdzNMVkZBT0RoQVVWNVBTazllY1dWbGNZK0lqN3U3Ky8vQ0FCRUlBQWdBQmdNQklnQUNFUUVERVFIL3hBQVVBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUYvOW9BQ0FFQkFBQUFBR1AveEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQy85b0FDQUVDRUFBQUFCLy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFELzlvQUNBRURFQUFBQUUvL3hBQWFFQUFDQWdNQUFBQUFBQUFBQUFBQUFBQUJBZ01TQUJFVC85b0FDQUVCQUFFL0FKSjE3RlpTaFJVRmFxU05uUC9FQUJZUkFBTUFBQUFBQUFBQUFBQUFBQUFBQUFBQkV2L2FBQWdCQWdFQlB3Q1VmLy9FQUJjUkFBTUJBQUFBQUFBQUFBQUFBQUFBQUFBQkVtSC8yZ0FJQVFNQkFUOEF0NGYvMlE9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvYmFyY2Vsb25hU2FncmFkYVBob3RvLjU4ODY0ZmM2N2E0YjgzZWVhMDQxNmY5ODEyODE5NGIxLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjo2NjcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQTBVbEVRVlI0bkFIR0FEbi9BVTlzWFA0b09tSUJFeDAwQVBuNytnQVFBZnNBK2dNSS8vNysvZ0FHQlA4QkFWeUhsLzRlRGh3QUVOTFRBQVZGVHdBT0NmWUFDdi8xQVBNT0pRRHYvUWNBQVdtcTJmOEw1OTRBK1c5SkFDNlJuQUQ0RGdzQUNmSFhBQjBwTS8vdi93OEJBYWZHMy83R3djY0JKK0c0QUE4NFZBQUlCZTRBN1BQei96SXFJZ0RzOGZJQkFiT3BuUDdtNS9JQTZnSWlBQW9kS2dBbThzSUE1UU1MQUNVWkRRRHg3ZVlBQVpDTWp2NU5VMVFCNE9iMC84VHJBQUVOMmJNQUNRWDUvL2tGQ1FBb0lCY0JPSHhSb3ZLZ0dvMEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9ib3dsaW5nUGhvdG8uNGFmYjNlODhkOWEzN2M4ZTkzYTg2ZGRhYTdjMGY5M2UucG5nXCIsXCJoZWlnaHRcIjo2NjcsXCJ3aWR0aFwiOjUwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBeDBsRVFWUjQyZ1ZBYjR2QmNCei9mSDkrZHhzN3MzamdYRmlUdWdmWHJydTZ1anlTZUFWS1BQQnlsYVI0cHBSV0pKR3ltZisyK1lwS2hjcmowOVJRc1pLWURWUTRNb0FUejBQbzZwRzgvUUpHYkV0RnJVK25PNE1paThSaHMyWGxrWUliYXBobmtoaW44OUMxRVZPNzAyWDJRcndLQzM2NUFWZjk0TDI3STJIYU5XUi9xendaOXVDbnNqQ0tKVnppQllqTE5lQnpSRWo4L1NEaHJaR1JCM3kvZzZXWkUzQ21TN1NhZFphS0RsKzVJVXpISVBrT0tuLzlzMjNuYURWM0VBWEVMMjhHUFFHK09FbXFRQkN3M3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2NsaW1iaW5nVG9wUGhvdG8uNGE1MTJhY2RlM2FmMDc2OGE3MWRmNThiNzBjN2M0ZDkucG5nXCIsXCJoZWlnaHRcIjo4ODksXCJ3aWR0aFwiOjUwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUlDQVlBQUFEZU0xNEZBQUFBazBsRVFWUjRuQUdJQUhmL0FYeUdpLy91NGRELzNPTG5BU0ljR1FBQmMzbC8vL1hsMEFENUFna0FFZzhPQUFHQWFrLy9BUDhHQU84QkRRQUFBUDhBQWFPS2EvNzM4ZkVBMGViN0FPeno5QUFCcUlwby9nd0QvQURGMmV3QTR2RCtBQUdzaUdIK0NnWDlBTzRPTWdEajYvSUFBYXFEVy84SEFPMEFEVWVPQUIwaUlnQUJwSGxPL2hNTjl3QUlPb1lBR2lZcUFMSkhPWjZ6ZXNKTkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2NvcDI0UGhvdG8uMDhlMDNiMTc4YjhiN2M3ODA4ZjVhMGJiNGYxNWVkNmUucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBeGtsRVFWUjQyZ1ZBUzA3Q1FCaisvbVlzbFRiNFNuUkRvb2tSNGdGY3VIYmpEYnlJTi9BQ25zWUR1Q082Y21FMDFBZnZsRmRnbURCRFcrWWo4dnowNktPb0lrb2x1THhxNEtOamNYYmU1TVA5TmNhRG9hZzRTUkJXcXF4R0IzQUxnOSt1eG55ZG90K01ZWjJsQ2tJbEVDRGNDL0g5MW9JMlIxaTVMZEtmZjhiN2dTaVE5TjZMMHdhOXZ4NWFvelpPNnJmTXNneTFKRUJRNWlXS3ZPUW9iZlByOVlXZjcyVGoyQUpiZytsa1J1V3NBLzFHbGxJd3ExL0kzYzBoVG1zNWpkYllGSVhzQUxFSFlXWUJFbGw0QUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvZnJhbmNlTGFTYWxldHRlUGhvdG8uMmY4YTYyOWE2ZWExYjgxMzU0MTczYWM1ZjI5MmZiZDQucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBd2tsRVFWUjQyZ1ZBdldyQ1FBRCt2cHFmUVpJcXBWU3dIUXBkS3Y2Z2J1SWlqcTdpNC9rQUxvTDRBaUk0S2pnNEJ3UWhJS0s1Sk1hY2R5ZWNMdmZhc20wMmZueVFRSGpMOEpUSzVJOGNSa2xhdjJWQ3FkekVJa0xCY1pDbUtTNnhoRWdldUl2SVdOUDVtbjUreHVkZkRZNVhRcEptRUNMQkxRek1OZGlUcGRaRSsrR0IxWFlYdG5zSG1TRTRMa3kxK0E2dlVDZEg0NzYya2NGRkRHMmRVUGthb3RzY1lMdmJZTFdlNGEzb1J0QktVdEdEbE44YzlNWnMvSGZ3NFZkUTlqUmYvR1JUV2VFbVZGUUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9naWV3b250UGhvdG8uNDkyY2Y4YzIzMmI4OTIyZTk5NzU1M2NjZTgyMjNkZjkucG5nXCIsXCJoZWlnaHRcIjo2NjcsXCJ3aWR0aFwiOjUwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFZQUFBQUlDQVlBQUFEYXhvNDRBQUFBaUVsRVFWUjQyaFhOUVk0Q01ReEUwVitPMHlQZy9vZVo3UnhnRG9PZ29aMk9EVmwrcVo1S3YzLy9XWWdZeWYxNWNNUmdqSWszZHlHVk5YUW1wRlJ3eXMyc2VuZGlURkRoeldpWG4zSVRXdnk1Ny9RVkhZNzRpdGM3YU82MWJWMEdYSzRiOXRneHlXckVzYzRvakNxNDNhN2w0enhadFFiTmpaeVRpSUdUS1d0TGhXWW1KcFVxOVFFZC9Fc0pQTWg5aGdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2ljZWxhbmRXYXRlcmZhbGxQaG90by41MjBjOWZlZmVmZGI0YjJhZWEwODlhZjgzNmI3ODMzMC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6ODg5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqMGxFUVZSNG5BR0VBSHYvQVp1TWhQOUlVa1lBRlJrV0FQMzkvZi9lMitBQXdiakNBUVVGL2dBU0Z4WC9BYTJobC84V0dCTUFDUW9JLy9IeDlBREZ2OGdBNWQzWkFBRUUvZ0hoM09mL0FiS21uUDhNRGdvQThlL3kvK2ZtNndBRTlPNEExTnJXQVBMMjZRSDcvUWIvQWFTVmpQOElDd2tBNnVickFNN2s4UDhVK3ZFQTVlUGRBUC8vK0FIL0F2ai8vTEpITGtvL29aNEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9sb25kb25BcnNlbmFsUGhvdG8uMmY0OTU0NzQyYjhmYzRjMjg3NTYwZDNlYjRhZGI0YmEucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjEwMjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWprbEVRVlI0bkFWQXNRbkNRQlI5UDRjRUNZZWdDSW9EcU5ncDRnSWlwTFN3c2JHMGNJZ1VMdVFHVHBBUkFxWVFNWUY0R2dubmtmQkVvdWpNeWhqa1NZcksrdENhdE9VTGcvRUVqUUJ5M0lYc2RQdHN3OHBpcm5CN0JNd3pEOFhuQ2VjYXlQNjBaZWtNeFY3bHNBYmNiOHBMUE1LM2RpamVDV1FUcmdoNFZMNldvUVJZenU2TTB4YXl1Z2NGNGc5ekRqdncvNnBhVmdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvbkNhbmFyeVBob3RvLjQ3YmVlOTllYmM4ZDdmNDNkNWUzODkwYjNlMDU4Y2UwLnBuZ1wiLFwiaGVpZ2h0XCI6NTAwLFwid2lkdGhcIjoxMDI5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRUNBWUFBQUN6elg3d0FBQUFqVWxFUVZSNG5BVkFNUTdCVUJqKy9taWUwS3FucFRyb1VFc3JhU01oWWpPWW1CeENITUQ1YkM1Z3RobE1obGFWa05COElzdlZsbm5Wd1VWUE1YRU56QVpmSHM4ZjVNcEQxSGhCaG1GQ3A2ZHB6UGV5aVd2UTZzN0RxUUQ2WTZST0NiSDltTDcxWTdyZXlXTGtRbFVGSCtVVE5SMGlld3VrYWJXcDZvcWVGMGdTQmJCYkprR2lheHE0M2pMOEFhaVZLOFdWd0FFdEFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvbkNoZWxzZWFQaG90by4zNDQxYmMxOTExMjFmMzk1MGEyYjAyYTJiYjkzZmM0MS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6MTAyOSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVlBQUFDenpYN3dBQUFBajBsRVFWUjRuQUdFQUh2L0FYVmhNdjhNR1QwQUp6OWJBQlVXRlFBVkV4TC8vUGoyQU43VXlRRHo1OUVBQVdwY1BQLzM5aFQvRHhZYUFRVU5Fd0EzUGozLzdlYmZBTCs1dkFEVzR2Y0FBUzVBWS8vKy9lTC9BQWY4QWZmNzl3RGQyOGovQUJVdEFERWJLZ0FGQVFNQUFXSmZYZi9VNnQzLzh2bkdBUWdKQ2dBRkFoNy8rdm54QVByNTV3QUQvd01BVExnNXFJM0hVYkVBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvbG9uZG9uVG93ZXJCcmlkZ2VQaG90by5iNzgxNWViNDQ4YTgyZGJhYWJlZTNkMDY3NmJmNzFkOS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NzU1LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRkNBWUFBQUI0a2ExVkFBQUFuVWxFUVZSNDJnM01TUTdCVUFDQTRmODFyOFJRMFlxRmhUTkl1QWozdEhJQ0s4TFMzcXkwdERxckRrbjVEdkFKeTNZcjcrMVVzbFluamtLYWpRWnRUVU1JUlpSRmp0eHUxcmlPeFdnODRXR2E2SHFYVnFmTi9YcGlmN2tpRjRzNXNlOFFSdkYvOE9rYk9xL2JnZDFxU2FnYXlObDBTdUFIMU5VYTZuQkFoU0xjcDEwVlpZSFIwNUJwa3BCbkdaZnprU2hLK09RUWVDNUtZSkk2WDM3TDIwMUFzNWZiTVFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL2xvbmRvblZpY3RvcmlhUGhvdG8uYTBmY2I4YmZlODc5NGY4OWE4MzZlMjBiMmU2YjQ5YmUucG5nXCIsXCJoZWlnaHRcIjo3OTksXCJ3aWR0aFwiOjUwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFVQUFBQUlDQVlBQUFBeDhUVTdBQUFBcUVsRVFWUjQyZ1ZBUVF2QlVBRCszanlzdFd5a3lLTEl3bUZ4YzNQMFUvdzAvOEoxTmFWWkhCUXVTMkl6V2pIYnk5c1RtUzJXK1M5bG1HZ0JuTGlGZ3VDZzAyR2RTQ3hHZER5THVUVWdsdGtFMVRVRk1rK2dHQ29aanlvdyt3MUlWazhEVDUvZ1dZb291TUErdkNDZC9Lc281WkhJaVN3OGJ5dHFNaE1TdTd2SXZnazAzY0RuemJDeFY2QjdkNDJiSDBDdDZuaUVJZGs1R1NoQkNlMXVCNXh6RkNsRnNhemdENVh5Unl4dERmUkxBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9tYW5jaGVzdGVyVW5pdGVkUGhvdG8uNmZlZWQzMzRmZDA5NmJiYzRmNThiODNkN2I1NDdmNWIucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBclVsRVFWUjQyaFhNUVE3QlFCUUc0UDlsWHFkb05RZ1ZObTdoc2s0Z0RtRGhHaFlTY1FBaFF0TldPek45VCsyL2ZIUTY3TVU2SVhFdGlzY2RuS1lZeithYWpCS0VLQ2JlWFI2b20wYWRDdDczQ3FBS3crd0ZxaDNHMWlwUDg1d1M2ZEFJNEUwSk1nYjVNb1h2UklNd3NmcFcxUXNOYllUTnpHQTZVRmhUYXhrNjJQWU5Yb1VuNGdHckFOQ3l3TDh5a3hFbVRHaStOK1hyOFFUbjIzNk8xR1ZiaXJ0UGo4NGFFQ05ick9rSHRGSlVVS1p0UXBNQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL21henVyeURvd25QaG90by4wOTRmYTI1ODY3YjNmYWFhMmM3ODlkYWY0NGYxMzk4YS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF4a2xFUVZSNDJnM01PMDRDVVJTQTRmOE1sNWtMTThQRENQR1oyUGhnRGNhQ1JDdXRyZDJHQ3pDeGR4a3V3Y2FTU25zcmJkU2dOaElZNEQ0T2ZBdjQ1TzdoTWZxMElXTHE1TTJVTXJkc0ZGYjNPNVpXTFlqWnJsWE1EVnBzV25hTGxHNEc3V2JnYWZUTStPTk5aWEJ5cE16L0dKNmRNencrcE5kcDhEN3gzTnplNi9YcGdjalZ4V1YwSXRMZjZqUG9sdXlVZFY2K1p2cjZ6M3BMeExSNmU3aW9Xdm1FMFhlRi9WMGkzdEZHOE5PbG1zK2ZNWmxKSmM4eU5TRklTQklXem1sRThWRmxCWEwrUlUwYUNkenpBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvYXNzZXRzL3Bob3Rvcy9tY2xhcmVuUGhvdG8uZWM0ZjYxMGQ1YzFlYTJlZWRjNTU0ZDI1ZTIzM2ViNjcucG5nXCIsXCJoZWlnaHRcIjo4OTAsXCJ3aWR0aFwiOjUwMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUlDQVlBQUFEZU0xNEZBQUFBazBsRVFWUjRuQUdJQUhmL0FYcDdjZjRQRFE0QUJnY0hBTjdnNUFBQmpwYVUvZ1VGQmdBRUFnSUF6czNNQUFIUXc2Ny81ZkQyQVBiMDh3RFQxZGNBQWErWWYvLzNCUlQvQmcwSkFPUG84UUVCaklKNy85dkp6d0FYRmc0QTIvSDFBQUZkVjFEKzROemhBTzNjNGdEK0ZBNEFBVDQ1TXYvMy9RRC8vZjcvQWZuNCtnQUJNaThzL3YzOS9nRDUrL3dBL1A3L0FBM0VRdVIxQjJvNUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL25vdHJlRGFtZVBob3RvLmNhYWMwZDc5OTFjMjI0YWJlOTA0ZDQ0MGFiNzMxYTQ5LnBuZ1wiLFwiaGVpZ2h0XCI6NjY3LFwid2lkdGhcIjo1MDAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBWUFBQUFJQ0FZQUFBRGF4bzQ0QUFBQXcwbEVRVlI0MmdWQXpVb0NRUnovL1diR2JXemRVU0s2ZFNnUTZsUVAwQnQwNlFHNzlnaGVQRVYwTHdxa0NCSjAvWUJCM2ZVRDE5WFp2L0Q1cFZNeGJFQ3BZRTlqWExWdmNkNXlVQm83WnFNZWZQckxTSk9SVGJEYWxsUVhyUk9KVklGeU9ZRFZCelJzRGRPMEw4Yi9mek1VQlZEdWtQc0Ivbm9mZUh2dDB2amhGTFBEVEJySkdmUDVCT00wUTF4M01OdTZrN3ViZTlRMEVTbWkwMzNIMStlUG1NdnJOalExbG5Ndml5eUhOY0RUNHdOVVlqVmx2MFlWOXBRUTJFeGl1S2JqRVlpeFQ3R2N2dndYQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3MvcGFyaXNFaWZmZWxQaG90by5mNWRmNTJjMmZiNWQ3OGNmZmJkYjhlNjU4Yzk3MTllMy5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF3MGxFUVZSNDJnV0F2eThEVVJ6QVA5L1g5M3JYYTY5NEozV0RBWW1FUk5odEJ2RS8ybXhHaTlVcUVoR0VXQXdXYVlnTFBiM3I5Y2ZkdDVIRG80UG0rZWxGTGk2djJkL2Q0dnpxbFk4ZjFYazFZVnhPeGE1MFlsTFFtOXQ3Y3BkaWVoSGVXSDR6UTlTeWFnZGhLTzlBWUd0TXF5RlpkYVNiQTRaRHAzaytFZHZmMmRiakpCYmZDK2pXR2ZYWEczdGVkTTFYZkpvS09UczlhYUtnalRQQ2V1SXB5eWwzRDQra0d6R3oyUnliL1MwWXQ1Rk80UFMvK0JaUXdtNWZzMUZGVVl4a0NXdVZSL2tRb09uWkFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3BsYXlpbmdJRU1QaG90by4yZjVmNGZjNWY0MTI2NmUzNGRiZjVkNzliMGQ0NWM3NC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF3VWxFUVZSNDJnVkEzMnNCY1FEL2ZNdzJ0K3Q3TnlQV2JydWIzSGFiRkUrS1BJcnlWeXN2eW9OUzZ2eU11QkFkM1l0T3VhL1krQzFGVmUxR0VaN1JGVDhRaVRla1Vra1pKSURyeHhmanpHVHhHS3hrV2xGaGJBUG96VHpLbFFJV21vTXc2OGhZYlRiZ3czRE1rL3JPemI5SjB6YjRYWFFvL1RuaWh6blpzLzZpanVmU3JUZmhXU2F3SE9QVGVKVTdQd1FWbld6bDdFaklDNUxhTTNLS3dEbW1Zakp6NFIxODlBRXdEVVJIZ0cwckk2MlhKL3E2alh6Qmx0ZjlHc0YweERzclAwR2VLVVozN0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3J5c2lhbmthUGhvdG8uYjhiNTAzNjE0MDU3MzQyMzkxM2E3MDNiZjhkOTliNjcucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBemtsRVFWUjRuQTNLdlVwQ1lSakE4Zjl6enR2N21sWVNkQ3BCbTJxSWJJaHVva3VJaHVnT2F0R2x1YnRvN0RyYW9pQ2lEM0tRa2pURmJ6aHkwRUdVOTlIcHQvems3djdOUzJna3RBYVh0cXl0TythZ3UxbkhPSWxGSGg1L3ZiRVc0MVpJWnh5cHBUTy9IRjRKQmVTNmZLdDcrVHo5YWNCT0ZKSExSYVJXTTFqck5FQkZDdHY0NHRHQlpEYzJTU1lCbGU5M0dnT2orOFVUbXIxRXBIUno0WitlUHpnOVBHYXJZR2ozaHJ5Ky9ER0tCeWdXS1pmT2ZLY2V5K1g1bFZZcm4xS3ZWYWwxWjlwb3RmbjYrWmNGRmM1SHdscEMxeWdBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3Mvc2tpU3dpc3NQaG90by5kNWYzYmI5Yzk2ZWYzZWMxMjc2ZmZlM2UyMDgzNjJmMi5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFvMGxFUVZSNG5BMk91dzRCUVJpRno1a1pXU0pCNGVFbE9oR2xqbWhFcGRRcFBJSnFzNU5kWnMzbC8wMTdyaCszaDVOTVp3MUpnNWd5WWdHUWt6cExUSndoaitlYkRDR0NWVmZYNE4zOTBPaUk5V3FPcmh2QXgvT2xPUmUwYlllVUUwb1IrRDZnQ05YN3ZpNWM3dUltanRZYUdLMFg0NGhVcUgxSVVGRnlkN3dLU0tnQ24yK0E5d09XcXdVMFN3MVVhN00vUzIxVFJOVlkwbG1MR0xPR01hRWk4Zy96VTJHQ3c2WS90QUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3Mvc3VzaGlQaG90by5mOTk1MGM0ODdlODQ1NGUyNGViMzcxMmRkMjNkYzM0ZS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUF3a2xFUVZSNDJnM0tUYXNCVVJ3SDROOS96cG5SbVJ2M2pqc0tJWVM4bExMQnlrZVFsVytzRkxFaUMrVmxnUkpHWHBxR2N3NkxaL2RRdDVWV2R2eUgrSkZEU2d2L1RoakVUQzM5QUFZeDR1RjBDZkxwNjhOeWdKQWRnL0lqU0dhTFVOV3ZiK1RHOWtybVV5SjRXZGpzanFoR1hlU2JIWnljaUg2RUJGRXZBU1gvWE9vM0M3QWhZRGJhbUU0VytwNHE0TGRTSis0WlVRaXBOQkkxT0xreTRNYVE4VzZZamNaSWliZm03MERoYkRFYXp0ZTZZVExLc3l0c1R0cTQ3T0d0QkgwQVlaSkRyOVFqaUxBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3N3aXNzTXVycmVuUGhvdG8uNjUyZDhlMzMxMGE5NjM5MWU4OWQ3Y2M5YmEyZmEwMzQucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjEwNTcsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FZQUFBQ3p6WDd3QUFBQWowbEVRVlI0bkFHRUFIdi9BV0diMmY4VUN3UC9DUUw5QUFRQy9nRDI2dU1CL3ZyMy94TU1CQUF3TGlnQkFXU0p1LzhDQmdqLytmZnpBQWp3MkFBTERoSUI5dlB2Ly84QkJRQUZEQlFBQWNQSHpQK0xtcjMvNUFnV0FFWC8xZ0Q3Q0JFQjdnc1gvd0w3K1FEMjgvQUFBYld1cS8vTTBkdi85dzRYQUJ5eXFBRDhOa0FCQ3pvLy93YjkrUUQzK2Z3QkxyczlNc2J0ZDVBQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9hc3NldHMvcGhvdG9zL3N3aXNzUGl6R2xvcmlhUGhvdG8uNmQ0ZDk4YTg2YmNiYjBhMDkxZmViZDVlMDk5NDkwNjMucG5nXCIsXCJoZWlnaHRcIjo1MDAsXCJ3aWR0aFwiOjY2NyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBeEVsRVFWUjRuQjNPdlE3QlVCZ0c0UGRydGRSZkl5bFNrZERCSm5aR2t3dXd1Z2V4TWR2RjdBYkViak5ZSkZ5Q3dXakNRZiswcGVjUU4vRGtvV0p2eG9Ycmt4VDRpTU1YWkI0aDVoQnZMa01rVTBTdDRacmZtSXZ6MVFiQ0FQQWpJS05DTjNKSXF3cW9QVnFKUWxwRDFjaitCVU5QNGVNOFlaK09JdDlxRW5YN0V6N29kMGpWTkxEYkJZeGRFWGlTMEJVSlpxTkN0Rml1ZWVCN2NHd1A3UDZBVmEraFpKclliSGVRSXdjMG5zNTV1V1NRbkVnS0lva3N5NEtxUUJ6MkJ6eC8rUzkrZUZGbk9YUTNBQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9waG90b3Mvd2FsZXNQaG90by4yNzNiMjE4MWFiZTZjYzc2MWUyOTllNzNkYWM0MWU1ZS5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NjY3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUEwVWxFUVZSNG5BSEdBRG4vQWN6UjNQNERCZ1VCQVFNQ0FBa0dDQUQ2K2ZrQS92Ly8vLzcvL3dBQ0FBRUJBYzdWMy83ODhmRUE1N3U5QUJFOU93QU9HaGtBOWZQMUFQNEJBQURmM3R3QUFjTEl6Ly9oeE1NQTNIUnVBQmQxWkFBclZHc0E4L0R3QU9uczYvL1cxczhCQVlpR2lmNzF1N2tCeiszQUFCb21TQUFkTHpvQTllamcvd1FMRUFBQS9Qb0JBV1p4ZXY0TjE5Z0E4cnZJQVBRM0tnQVZIaEFBSWhJTkFBa1pJQUR1NGRvQUFUNVVZUDQ1N3VvQkwrZnAvL3NGQ0FIWU1DVUFHdzRDL3dJSkRnQURCQU1CTmx0VUZpTjFrWVlBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2Fzc2V0cy9wcm9maWxlUGljdHVyZS40MzcwMDM0ODFjZjAzNzIzOGRlYzlmY2FkYmIyMzI2OC5qcGdcIixcImhlaWdodFwiOjgyMixcIndpZHRoXCI6ODAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRQUFBUUFCQUFELzJ3Q0VBQW9LQ2dvS0Nnc01EQXNQRUE0UUR4WVVFeE1VRmlJWUdoZ2FHQ0l6SUNVZ0lDVWdNeTAzTENrc055MVJRRGc0UUZGZVQwcFBYbkZsWlhHUGlJKzd1L3NCQ2dvS0Nnb0tDd3dNQ3c4UURoQVBGaFFURXhRV0loZ2FHQm9ZSWpNZ0pTQWdKU0F6TFRjc0tTdzNMVkZBT0RoQVVWNVBTazllY1dWbGNZK0lqN3U3Ky8vQ0FCRUlBQWdBQ0FNQklnQUNFUUVERVFIL3hBQVVBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUMvOW9BQ0FFQkFBQUFBRi8veEFBVUFRRUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85b0FDQUVDRUFBQUFILy94QUFVQVFFQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlvQUNBRURFQUFBQUgvL3hBQWRFQUFDQVFRREFBQUFBQUFBQUFBQUFBQUJBZ1FBQXdVaEVoUXkvOW9BQ0FFQkFBRS9BSkdUaTkrT1FiMm40Qms4azdVaXYvL0VBQlFSQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUQvMmdBSUFRSUJBVDhBZi8vRUFCUVJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBRC8yZ0FJQVFNQkFUOEFmLy9aXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFib3V0Q29udGFpbmVyXCI6IFwiYWJvdXRfYWJvdXRDb250YWluZXJfXzF5by1JXCIsXG5cdFwiY29udGVudFwiOiBcImFib3V0X2NvbnRlbnRfXzFzV0RMXCIsXG5cdFwic3VtbWFyeVwiOiBcImFib3V0X3N1bW1hcnlfX2oza3UxXCIsXG5cdFwiaG9iYmllc1wiOiBcImFib3V0X2hvYmJpZXNfXzEwYU5LXCIsXG5cdFwibmV3c2xldHRlcnNcIjogXCJhYm91dF9uZXdzbGV0dGVyc19fMVhlNE5cIixcblx0XCJjb21taXNzaW9uc1wiOiBcImFib3V0X2NvbW1pc3Npb25zX18xMG9DQlwiLFxuXHRcInNjcm9sbEdhbGxlcnlcIjogXCJhYm91dF9zY3JvbGxHYWxsZXJ5X19aUUMyZVwiLFxuXHRcImhpbnRcIjogXCJhYm91dF9oaW50X18xTzhSdVwiLFxuXHRcInB1bHNlXCI6IFwiYWJvdXRfcHVsc2VfXzF4SG5GXCIsXG5cdFwicGhvdG9HYWxsZXJ5XCI6IFwiYWJvdXRfcGhvdG9HYWxsZXJ5X19uZWtqTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGhvdG9HcmlkXCI6IFwicGhvdG9ncmlkX3Bob3RvR3JpZF9fMzZtMk5cIixcblx0XCJnYW1lXCI6IFwicGhvdG9ncmlkX2dhbWVfXzJoeTFfXCIsXG5cdFwic2tpXCI6IFwicGhvdG9ncmlkX3NraV9fMzd3MGpcIixcblx0XCJjYXJcIjogXCJwaG90b2dyaWRfY2FyX180TFZhNVwiLFxuXHRcInNreXNjcmFwcGVyXCI6IFwicGhvdG9ncmlkX3NreXNjcmFwcGVyX18zeWFYalwiLFxuXHRcImxha2VcIjogXCJwaG90b2dyaWRfbGFrZV9fMVBKNEhcIixcblx0XCJtb251bWVudFwiOiBcInBob3RvZ3JpZF9tb251bWVudF9fM3J6LTBcIixcblx0XCJzdXNoaVwiOiBcInBob3RvZ3JpZF9zdXNoaV9fX1hJU2NcIixcblx0XCJib290c1wiOiBcInBob3RvZ3JpZF9ib290c19fMmVzOHdcIixcblx0XCJ3YXRlcmZhbGxcIjogXCJwaG90b2dyaWRfd2F0ZXJmYWxsX18xdFZPZ1wiLFxuXHRcImNyb3NzXCI6IFwicGhvdG9ncmlkX2Nyb3NzX18ybVI2UFwiLFxuXHRcImJvd2xpbmdcIjogXCJwaG90b2dyaWRfYm93bGluZ19fb1pqNlZcIixcblx0XCJtYW5jaGVzdGVyXCI6IFwicGhvdG9ncmlkX21hbmNoZXN0ZXJfX0gtbm9jXCIsXG5cdFwiYXJzZW5hbFwiOiBcInBob3RvZ3JpZF9hcnNlbmFsX18zVGRHRVwiLFxuXHRcImNoZWxzZWFcIjogXCJwaG90b2dyaWRfY2hlbHNlYV9fMTI1QmRcIixcblx0XCJ3YWxlc1wiOiBcInBob3RvZ3JpZF93YWxlc19fMTg3ZUhcIixcblx0XCJhbHBzXCI6IFwicGhvdG9ncmlkX2FscHNfX0lvcnJMXCIsXG5cdFwiY2h1cmNoXCI6IFwicGhvdG9ncmlkX2NodXJjaF9fMWdYTWtcIixcblx0XCJtdXJyZW5cIjogXCJwaG90b2dyaWRfbXVycmVuX18xUjBtaVwiLFxuXHRcImVpZmZlbFwiOiBcInBob3RvZ3JpZF9laWZmZWxfX1Y2MlNxXCIsXG5cdFwiYnJpZGdlXCI6IFwicGhvdG9ncmlkX2JyaWRnZV9fM0xXSmhcIixcblx0XCJjbGltYlwiOiBcInBob3RvZ3JpZF9jbGltYl9fLUFtOURcIixcblx0XCJiYXJjYVwiOiBcInBob3RvZ3JpZF9iYXJjYV9fMjZwUDJcIixcblx0XCJjb2xvclVwXCI6IFwicGhvdG9ncmlkX2NvbG9yVXBfXzN3Wi1EXCIsXG5cdFwicGhvdG9JbmZvXCI6IFwicGhvdG9ncmlkX3Bob3RvSW5mb19fMUFpVnpcIixcblx0XCJmYWRlSW5cIjogXCJwaG90b2dyaWRfZmFkZUluX18zNWp0cFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiZm9vdGVyX2Zvb3Rlcl9feEtJcUhcIixcblx0XCJnb1VwU3F1YXJlXCI6IFwiZm9vdGVyX2dvVXBTcXVhcmVfXzJQY0tSXCIsXG5cdFwiY29weXJpZ2h0c1wiOiBcImZvb3Rlcl9jb3B5cmlnaHRzX18yLWltb1wiLFxuXHRcImljb25zXCI6IFwiZm9vdGVyX2ljb25zX18yVXhfX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXRJbmZvXCI6IFwibWFpbmhlYWRlcl9hYm91dEluZm9fXzF3NnUtXCIsXG5cdFwiaGVhZGVyXCI6IFwibWFpbmhlYWRlcl9oZWFkZXJfXzJkdzgxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZWNobm9sb2dpZXNJY29uc1wiOiBcInRvb2xzdGVjaF90ZWNobm9sb2dpZXNJY29uc19fM25kMXNcIixcblx0XCJ0ZWNobm9sb2dpZXNJY29uc1Jvd1wiOiBcInRvb2xzdGVjaF90ZWNobm9sb2dpZXNJY29uc1Jvd19fMXFtU01cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImljb25Db250YWluZXJcIjogXCJpY29uX2ljb25Db250YWluZXJfXzNqVUk0XCIsXG5cdFwiaWNvblwiOiBcImljb25faWNvbl9fMTdUcVlcIixcblx0XCJpY29uQWN0aXZlXCI6IFwiaWNvbl9pY29uQWN0aXZlX18xRjQ2MlwiLFxuXHRcImZhZGVJblwiOiBcImljb25fZmFkZUluX19lcFdzc1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWVudUJhclwiOiBcIm1lbnViYXJfbWVudUJhcl9fMlhXNmtcIixcblx0XCJ0aXRsZVwiOiBcIm1lbnViYXJfdGl0bGVfXzN5S1FqXCIsXG5cdFwic3F1YXJlSW5pdGlhbHNcIjogXCJtZW51YmFyX3NxdWFyZUluaXRpYWxzX18yZkljM1wiLFxuXHRcIm5hbWVcIjogXCJtZW51YmFyX25hbWVfXzNZZXd1XCIsXG5cdFwidGFiXCI6IFwibWVudWJhcl90YWJfX21IbzBsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aW1lbGluZUdyaWRcIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkX19GTkNOSVwiLFxuXHRcInRpbWVsaW5lR3JpZEl0ZW1cIjogXCJ0aW1lbGluZWdyaWRfdGltZWxpbmVHcmlkSXRlbV9fM0JxOXFcIixcblx0XCJ0aW1lbGluZUdyaWRJdGVtQ2FyZFwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRJdGVtQ2FyZF9fM2p3U2JcIixcblx0XCJ0aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZFwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRJdGVtQWRqb2luaW5nQ2FyZF9fM1BiTXJcIixcblx0XCJ0aW1lbGluZUdyaWRJdGVtV2lkZVwiOiBcInRpbWVsaW5lZ3JpZF90aW1lbGluZUdyaWRJdGVtV2lkZV9fMUx0MEpcIixcblx0XCJ0aW1lbGluZVBvaW50XCI6IFwidGltZWxpbmVncmlkX3RpbWVsaW5lUG9pbnRfXzE5T2MwXCIsXG5cdFwiaG92ZXJUaXBcIjogXCJ0aW1lbGluZWdyaWRfaG92ZXJUaXBfX0V1NTFFXCIsXG5cdFwicHVsc2VcIjogXCJ0aW1lbGluZWdyaWRfcHVsc2VfXzFDelBxXCIsXG5cdFwiY2FyZENvbnRlbnRcIjogXCJ0aW1lbGluZWdyaWRfY2FyZENvbnRlbnRfXzNSQ1J5XCIsXG5cdFwiY2FyZENvbnRlbnRIZWFkZXJcIjogXCJ0aW1lbGluZWdyaWRfY2FyZENvbnRlbnRIZWFkZXJfXzFOR0s1XCIsXG5cdFwiY29tcGFueUluZm9cIjogXCJ0aW1lbGluZWdyaWRfY29tcGFueUluZm9fX003TElmXCIsXG5cdFwiY29tcGFueVRpdGxlXCI6IFwidGltZWxpbmVncmlkX2NvbXBhbnlUaXRsZV9fMkhKVU1cIixcblx0XCJjb21wYW55TG9nb1wiOiBcInRpbWVsaW5lZ3JpZF9jb21wYW55TG9nb19fMzVxNGpcIixcblx0XCJjYXJkQ29udGVudERldGFpbHNcIjogXCJ0aW1lbGluZWdyaWRfY2FyZENvbnRlbnREZXRhaWxzX18zVndyYlwiLFxuXHRcImNhcmRDb250ZW50RGVzY3JpcHRpb25cIjogXCJ0aW1lbGluZWdyaWRfY2FyZENvbnRlbnREZXNjcmlwdGlvbl9fMkJpS1RcIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hd2Vzb21lLXJldmVhbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvb2x0aXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
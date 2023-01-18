"use strict";
exports.id = "component---src-templates-blog-post-js";
exports.ids = ["component---src-templates-blog-post-js"];
exports.modules = {

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const Layout = ({
  location,
  children
}) => {
  const rootPath = `${""}/`;
  const isRootPath = location.pathname === rootPath;
  let header;
  if (isRootPath) {
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
      className: "main-heading"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `brand-dmxt`
    }, "dmxt's"), " blog"));
  } else {
    header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "header-link-home",
      to: "/"
    }, "\u2190 home");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "global-wrapper",
    "data-is-root-path": isRootPath
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "global-header"
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, "\xA9 ", new Date().getFullYear(), ", dmxt,", ` `, "Built with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.gatsbyjs.com"
  }, "Gatsby")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2841359383.json */ "./public/page-data/sq/d/2841359383.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */



const Seo = ({
  description,
  lang,
  title,
  children
}) => {
  var _site$siteMetadata, _site$siteMetadata2, _site$siteMetadata2$s;
  const {
    site
  } = _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : (_site$siteMetadata2$s = _site$siteMetadata2.social) === null || _site$siteMetadata2$s === void 0 ? void 0 : _site$siteMetadata2$s.twitter) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
};
Seo.defaultProps = {
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/templates/blog-post.js?export=default":
/*!***************************************************!*\
  !*** ./src/templates/blog-post.js?export=default ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-disqus-comments */ "./node_modules/react-disqus-comments/build/main.js");



//import Bio from "../components/bio"



const BlogPostTemplate = ({
  data: {
    previous,
    next,
    site,
    markdownRemark: post
  },
  location
}) => {
  var _site$siteMetadata;
  const siteTitle = ((_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title) || `Title`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
    className: "blog-post",
    itemScope: true,
    itemType: "http://schema.org/Article"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    itemProp: "headline"
  }, post.frontmatter.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, post.frontmatter.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    dangerouslySetInnerHTML: {
      __html: post.html
    },
    itemProp: "articleBody"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "blog-post-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: {
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
      padding: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, previous && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: previous.fields.slug,
    rel: "prev"
  }, "\u2190 ", previous.frontmatter.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, next && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: next.fields.slug,
    rel: "next"
  }, next.frontmatter.title, " \u2192")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_disqus_comments__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: `disqus-comment-section`,
    shortname: "dmxt-blog",
    identifier: post.id,
    title: post.title,
    url: post.url,
    category_id: post.category_id
  }));
};
const Head = ({
  data: {
    markdownRemark: post
  }
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPostTemplate);
const pageQuery = "3085459379";

/***/ }),

/***/ "./node_modules/react-disqus-comments/build/components/DisqusThread.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/components/DisqusThread.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment', 'language'];
var __disqusAdded = false;

function copyProps(context, props) {
    var onNewComment = props.onNewComment,
        language = props.language,
        rest = _objectWithoutProperties(props, ['onNewComment', 'language']);

    for (var prop in rest) {
        context.page[prop] = rest[prop];
    }

    // Setting the language - if none is provided, the default one is used
    context.language = language;

    if (onNewComment) {
        context.callbacks = {
            onNewComment: [onNewComment]
        };
    }
}

var DisqusThread = function (_React$Component) {
    _inherits(DisqusThread, _React$Component);

    function DisqusThread() {
        _classCallCheck(this, DisqusThread);

        return _possibleConstructorReturn(this, (DisqusThread.__proto__ || Object.getPrototypeOf(DisqusThread)).apply(this, arguments));
    }

    _createClass(DisqusThread, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadDisqus();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadDisqus();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.identifier !== this.props.identifier;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = Object.keys(this.props).reduce(function (memo, key) {
                return DISQUS_CONFIG.some(function (config) {
                    return config === key;
                }) ? memo : _extends({}, memo, _defineProperty({}, key, _this2.props[key]));
            }, {});

            return _react2.default.createElement(
                'div',
                props,
                _react2.default.createElement('div', { id: 'disqus_thread' })
            );
        }
    }, {
        key: 'addDisqusScript',
        value: function addDisqusScript() {
            if (__disqusAdded) {
                return;
            }

            var child = this.disqus = document.createElement('script');
            var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

            child.async = true;
            child.type = 'text/javascript';
            child.src = '//' + this.props.shortname + '.disqus.com/embed.js';

            parent.appendChild(child);
            __disqusAdded = true;
        }
    }, {
        key: 'loadDisqus',
        value: function loadDisqus() {
            var _this3 = this;

            var props = {};

            // Extract Disqus props that were supplied to this component
            DISQUS_CONFIG.forEach(function (prop) {
                // prop "shortname" is only necessary for loading the script, not for the config itself
                if (prop !== 'shortname' && !!_this3.props[prop]) {
                    props[prop] = _this3.props[prop];
                }
            });

            // If Disqus has already been added, reset it
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        copyProps(this, props);

                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
                    }
                });
            } else {
                // Otherwise add Disqus to the page
                window.disqus_config = function () {
                    copyProps(this, props);
                };
                this.addDisqusScript();
            }
        }
    }]);

    return DisqusThread;
}(_react2.default.Component);

DisqusThread.displayName = 'DisqusThread';

DisqusThread.propTypes = {
    id: _propTypes2.default.string,

    /**
     * `shortname` tells the Disqus service your forum's shortname,
     * which is the unique identifier for your website as registered
     * on Disqus. If undefined , the Disqus embed will not load.
     */
    shortname: _propTypes2.default.string.isRequired,

    /**
     * `identifier` tells the Disqus service how to identify the
     * current page. When the Disqus embed is loaded, the identifier
     * is used to look up the correct thread. If disqus_identifier
     * is undefined, the page's URL will be used. The URL can be
     * unreliable, such as when renaming an article slug or changing
     * domains, so we recommend using your own unique way of
     * identifying a thread.
     */
    identifier: _propTypes2.default.string,

    /**
     * `title` tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus for the first time.
     * If undefined, Disqus will use the <title> attribute of the page.
     * If that attribute could not be used, Disqus will use the URL of the page.
     */
    title: _propTypes2.default.string,

    /**
     * `url` tells the Disqus service the URL of the current page.
     * If undefined, Disqus will take the window.location.href.
     * This URL is used to look up or create a thread if disqus_identifier
     * is undefined. In addition, this URL is always saved when a thread is
     * being created so that Disqus knows what page a thread belongs to.
     */
    url: _propTypes2.default.string,

    /**
     * `category_id` tells the Disqus service the category to be used for
     * the current page. This is used when creating the thread on Disqus
     * for the first time.
     */
    category_id: _propTypes2.default.string,

    /**
     * `onNewComment` function accepts one parameter `comment` which is a
     * JavaScript object with comment `id` and `text`. This allows you to track
     * user comments and replies and run a script after a comment is posted.
     */
    onNewComment: _propTypes2.default.func,

    /**
     * `language` tells the Disqus service which language should be used.
     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
     * If undefined, English is used as default one
     */
    language: _propTypes2.default.string
};

DisqusThread.defaultProps = {
    url: typeof window === 'undefined' ? null : window.location.href
};

exports["default"] = DisqusThread;

/***/ }),

/***/ "./node_modules/react-disqus-comments/build/main.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/main.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



module.exports = __webpack_require__(/*! ./components/DisqusThread */ "./node_modules/react-disqus-comments/build/components/DisqusThread.js");

/***/ }),

/***/ "./public/page-data/sq/d/2841359383.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2841359383.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"dmxt\'s blog","description":"dmxt\'s blog on Gatsby","social":{"twitter":"dmxt"}}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-js.js.map
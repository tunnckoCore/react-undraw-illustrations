"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UndrawBlogPost = function UndrawBlogPost(props) {
  return _react.default.createElement("svg", {
    style: {
      height: props.height,
      width: '100%'
    },
    className: props.class,
    id: "148311d9-c125-4449-a148-b8fa33f3c561",
    "data-name": "Layer 1",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 627.45 759"
  }, _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
    id: "fe24b365-19a0-4a71-abdc-76e4b2fc8dee",
    x1: 313.72,
    y1: 759,
    x2: 313.72,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25
  }), _react.default.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12
  }), _react.default.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1
  })), _react.default.createElement("linearGradient", {
    id: "f1e26e3d-9d52-4866-b24c-036458e443cc",
    x1: 313.72,
    y1: 455.23,
    x2: 313.72,
    y2: 213.09,
    gradientUnits: "userSpaceOnUse"
  }, _react.default.createElement("stop", {
    offset: 0,
    stopColor: "#b3b3b3",
    stopOpacity: 0.25
  }), _react.default.createElement("stop", {
    offset: 0.54,
    stopColor: "#b3b3b3",
    stopOpacity: 0.1
  }), _react.default.createElement("stop", {
    offset: 1,
    stopColor: "#b3b3b3",
    stopOpacity: 0.05
  }))), _react.default.createElement("title", null, "blog"), _react.default.createElement("rect", {
    width: 627.45,
    height: 759,
    fill: "url(#fe24b365-19a0-4a71-abdc-76e4b2fc8dee)"
  }), _react.default.createElement("rect", {
    x: 7.58,
    y: 5.49,
    width: 612.28,
    height: 736.45,
    fill: "#fff"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 52.74,
    width: 240.74,
    height: 19.72,
    fill: "#64ffda"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 513.37,
    width: 240.74,
    height: 19.72,
    fill: "#64ffda"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 92.18,
    width: 526.03,
    height: 19.72,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 131.63,
    width: 526.03,
    height: 19.72,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 46.44,
    y: 213.09,
    width: 534.56,
    height: 242.14,
    fill: "url(#f1e26e3d-9d52-4866-b24c-036458e443cc)"
  }), _react.default.createElement("rect", {
    x: 51.18,
    y: 216.78,
    width: 526.03,
    height: 231.2,
    fill: props.primaryColor
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 637.59,
    width: 526.03,
    height: 19.72,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 678.34,
    width: 526.03,
    height: 19.72,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 597.05,
    width: 526.03,
    height: 19.72,
    fill: "#e0e0e0"
  }), _react.default.createElement("rect", {
    x: 50.71,
    y: 556.51,
    width: 526.03,
    height: 19.72,
    fill: "#e0e0e0"
  }));
};

UndrawBlogPost.propTypes = {
  /**
   * Hex color
   */
  primaryColor: _propTypes.default.string,

  /**
   * percentage
   */
  height: _propTypes.default.string,

  /**
   * custom class for svg
   */
  class: _propTypes.default.string
};
UndrawBlogPost.defaultProps = {
  primaryColor: "#6c68fb",
  height: "250px",
  class: ""
};
var _default = UndrawBlogPost;
exports.default = _default;
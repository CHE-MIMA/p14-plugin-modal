"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PluginReactComponentModal = function PluginReactComponentModal(_ref) {
  var openModal = _ref.openModal,
    closeModal = _ref.closeModal,
    title = _ref.title,
    closeButton = _ref.closeButton;
  if (openModal) {
    console.log("modal open");
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "parent-container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "close-modal",
      onClick: closeModal
    }, closeButton)), /*#__PURE__*/_react["default"].createElement("h2", {
      className: "title-modal"
    }, title)));
  }
};
var _default = PluginReactComponentModal;
exports["default"] = _default;

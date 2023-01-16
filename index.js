"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var pluginReactComponentModal = function pluginReactComponentModal(_ref) {
  var openModal = _ref.openModal,
    closeModal = _ref.closeModal;
  if (openModal) {
    console.log("modal open");
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal-container"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal-content"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "close-modal",
      onClick: closeModal
    }, "x")), /*#__PURE__*/_react["default"].createElement("h2", {
      className: "title-modal"
    }, "Employee Created !"));
  }
};
var _default = pluginReactComponentModal;
exports["default"] = _default;

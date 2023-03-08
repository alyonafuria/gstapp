"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MainList;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MainList() {
  var _useState = (0, _react.useState)("INBOX"),
      _useState2 = _slicedToArray(_useState, 2),
      inboxName = _useState2[0],
      setInboxName = _useState2[1];

  var _useState3 = (0, _react.useState)("waitList"),
      _useState4 = _slicedToArray(_useState3, 2),
      waitListName = _useState4[0],
      setWaitListName = _useState4[1];

  var _useState5 = (0, _react.useState)("projects"),
      _useState6 = _slicedToArray(_useState5, 2),
      projectsName = _useState6[0],
      setProjectsName = _useState6[1];

  var _useState7 = (0, _react.useState)("bucket list"),
      _useState8 = _slicedToArray(_useState7, 2),
      bucketListName = _useState8[0],
      setBucketListName = _useState8[1];

  var _useState9 = (0, _react.useState)("notes"),
      _useState10 = _slicedToArray(_useState9, 2),
      notesName = _useState10[0],
      setNotesName = _useState10[1];

  var _useState11 = (0, _react.useState)("done"),
      _useState12 = _slicedToArray(_useState11, 2),
      doneName = _useState12[0],
      setDoneName = _useState12[1];

  function handleNameChange(event) {
    setName(event.target.value);
  }
}
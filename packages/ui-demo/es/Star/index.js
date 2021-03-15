function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import classnames from 'classnames';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';
var prefixCls = 'alita-star';

var Star = function Star(props) {
  var _props$score = props.score,
      score = _props$score === void 0 ? 0 : _props$score,
      _props$maxScore = props.maxScore,
      maxScore = _props$maxScore === void 0 ? 5 : _props$maxScore,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      ext = props.ext;
  var log = useTracker(Star.displayName, {
    ext: ext
  });
  return /*#__PURE__*/React.createElement("div", {
    className: prefixCls
  }, [maxScore / 5, maxScore / 5 * 2, maxScore / 5 * 3, maxScore / 5 * 4, maxScore].map(function (i) {
    var _classnames;

    return /*#__PURE__*/React.createElement("i", {
      key: i,
      onClick: function onClick() {
        log("onClick:".concat(i));
        onChange(i);
      },
      className: classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefixCls, "-").concat(i > score + maxScore / 10 ? 'default' : i == score + maxScore / 10 ? 'half' : 'light'), true), _defineProperty(_classnames, "".concat(prefixCls, "-item"), true), _classnames))
    });
  }));
};

Star.displayName = 'Star';
export default withError(Star);
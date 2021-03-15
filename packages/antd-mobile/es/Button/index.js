function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import AButton from 'antd-mobile/lib/button';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';
export var Button = function Button(props) {
  var _onClick = props.onClick,
      ext = props.ext,
      other = _objectWithoutProperties(props, ["onClick", "ext"]);

  var log = useTracker(Button.displayName, {
    ext: ext
  });
  return /*#__PURE__*/React.createElement(AButton, _extends({}, other, {
    onClick: function onClick(e) {
      _onClick && _onClick(e);
      log('onClick');
    }
  }));
};
Button.displayName = 'Button';
export default withError(Button);
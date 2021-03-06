'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var mql = require('@microlink/mql');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function n(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
  }
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}

function r(e, t) {
  var n = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function (t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable;
    })), n.push.apply(n, i);
  }

  return n;
}

function o(e) {
  return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  })(e);
}

function s(e, t) {
  return (s = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t, e;
  })(e, t);
}

function l(e, t) {
  if (null == e) return {};

  var n,
      i,
      r = function (e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        o = Object.keys(e);

    for (i = 0; i < o.length; i++) {
      n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    }

    return r;
  }(e, t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);

    for (i = 0; i < o.length; i++) {
      n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
  }

  return r;
}

function c(e, t) {
  return !t || "object" != typeof t && "function" != typeof t ? function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }(e) : t;
}

var u = function (u) {
  function a(e) {
    var t;
    return function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, a), (t = c(this, o(a).call(this, e))).state = {
      noClamp: !1,
      text: "."
    }, t.element = null, t.original = e.text, t.lineHeight = 0, t.start = 0, t.middle = 0, t.end = 0, t.debounced = t.debounce(t.action), t;
  }

  var f, p;
  return function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && s(e, t);
  }(a, React.Component), f = a, (p = [{
    key: "componentDidMount",
    value: function value() {
      window.addEventListener("resize", this.debounced), this.props.text && (this.lineHeight = this.element.clientHeight + 1, this.clampLines());
    }
  }, {
    key: "componentWillUnmount",
    value: function value() {
      window.removeEventListener("resize", this.debounced);
    }
  }, {
    key: "debounce",
    value: function value(e) {
      var t,
          n = this,
          i = function i() {
        t = null, e.apply(n);
      };

      return function () {
        var r = !t;
        clearTimeout(t), t = setTimeout(i, n.props.debounce), r && e.apply(n);
      };
    }
  }, {
    key: "action",
    value: function value() {
      this.original && this.setState({
        noClamp: !1
      }, this.clampLines);
    }
  }, {
    key: "clampLines",
    value: function value() {
      var e = this,
          t = this.props,
          n = t.ellipsis,
          i = t.lines,
          r = this.lineHeight * i + 1,
          o = n === a.defaultProps.ellipsis ? 5 : 1.2 * n.length;

      for (this.start = 0, this.middle = 0, this.end = this.original.length; this.start <= this.end;) {
        if (this.middle = Math.floor((this.start + this.end) / 2), this.element.innerText = this.original.slice(0, this.middle), this.middle === this.original.length) return void this.setState({
          text: this.original,
          noClamp: !0
        });
        this.moveMarkers(r);
      }

      var s = this.original.slice(0, Math.max(this.middle - o, 0)).trim() + n;
      this.setState({
        text: s
      }, function () {
        e.element.innerText = e.state.text;
      });
    }
  }, {
    key: "moveMarkers",
    value: function value(e) {
      this.element.clientHeight <= e ? this.start = this.middle + 1 : this.end = this.middle - 1;
    }
  }, {
    key: "render",
    value: function value() {
      var t = this,
          n = this.state.text,
          o = this.props,
          s = o.accessibility,
          c = o.is,
          u = o.text,
          a = (o.lines, o.debounce, o.ellipsis, function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(Object(n), !0).forEach(function (t) {
            i(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }({
        ref: function ref(e) {
          return t.element = e;
        }
      }, s ? {
        title: u
      } : {}, {}, l(o, ["accessibility", "is", "text", "lines", "debounce", "ellipsis"])));
      return u ? /*#__PURE__*/React.createElement(c, a, n) : null;
    }
  }]) && n(f.prototype, p), a;
}();

u.defaultProps = {
  accessibility: !0,
  is: "div",
  lines: 3,
  ellipsis: "…",
  debounce: 300
};

var REGEX_LOCALHOST = /^https?:\/\/(localhost|127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|::1)/;

var isLocalhostUrl = function (url) {
  return REGEX_LOCALHOST.test(url);
}; // module.exports.regex = REGEX_LOCALHOST

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media (min-width: 48em) {\n      ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 48em) {\n      ", ";\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var isSSR = typeof window === 'undefined';
var castArray = function castArray(value) {
  return [].concat(value);
};
var getPreferredMedia = function getPreferredMedia(data, mediaProps) {
  var prefer;

  for (var index = 0; index < mediaProps.length; index++) {
    var key = mediaProps[index];
    var value = data[key];

    if (!isNil(value)) {
      prefer = key;
      break;
    }
  }

  return prefer;
};
var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};
var isObject = function isObject(obj) {
  return typeof obj === 'object';
};
var isNil = function isNil(value) {
  return value == null;
};
var getUrlPath = function getUrlPath(data) {
  return isObject(data) ? data.url : data;
};
var someProp = function someProp(data, props) {
  return data[props.find(function (prop) {
    return !isNil(data[prop]);
  })];
};
var media = {
  mobile: function mobile() {
    return styled.css(_templateObject(), styled.css.apply(void 0, arguments));
  },
  desktop: function desktop() {
    return styled.css(_templateObject2(), styled.css.apply(void 0, arguments));
  }
};
var getApiUrl = function getApiUrl(_ref) {
  var apiKey = _ref.apiKey,
      _ref$contrast = _ref.contrast,
      contrast = _ref$contrast === void 0 ? false : _ref$contrast,
      data = _ref.data,
      endpoint = _ref.endpoint,
      force = _ref.force,
      headers = _ref.headers,
      media = _ref.media,
      prerender = _ref.prerender,
      proxy = _ref.proxy,
      ttl = _ref.ttl,
      url = _ref.url;
  return mql.getApiUrl(url, {
    apiKey,
    audio: media.includes('audio'),
    data,
    endpoint,
    force,
    headers,
    iframe: media.includes('iframe'),
    palette: contrast,
    prerender,
    proxy,
    screenshot: media.includes('screenshot'),
    ttl,
    video: media.includes('video')
  });
};
var isLarge = function isLarge(cardSize) {
  return cardSize === 'large';
};
var isSmall = function isSmall(cardSize) {
  return cardSize === 'small';
};
var imageProxy = function imageProxy(url) {
  return isLocalhostUrl(url) ? url : "https://images.weserv.nl/?url=".concat(encodeURIComponent(url), "&l=9&af&il&n=-1");
};
var isLazySupported = !isSSR && 'IntersectionObserver' in window;
var formatSeconds = function formatSeconds(secs) {
  var secsToNum = parseInt(secs, 10);
  var hours = Math.floor(secsToNum / 3600);
  var minutes = Math.floor(secsToNum / 60) % 60;
  var seconds = secsToNum % 60;
  return [hours, minutes, seconds].filter(function (v, i) {
    return v > 0 || i > 0;
  }).map(function (v) {
    return v >= 10 ? v : "0".concat(v);
  }).join(':');
};
var clampNumber = function clampNumber(num, min, max) {
  switch (true) {
    case num <= min:
      return min;

    case num >= max:
      return max;

    default:
      return num;
  }
};
var BASE_CLASSNAME = 'microlink_card';
var CONTENT_BASE_CLASSNAME = "".concat(BASE_CLASSNAME, "__content");
var MEDIA_BASE_CLASSNAME = "".concat(BASE_CLASSNAME, "__media");
var CONTROLS_BASE_CLASSNAME = "".concat(MEDIA_BASE_CLASSNAME, "__controls");
var classNames = {
  main: BASE_CLASSNAME,
  content: CONTENT_BASE_CLASSNAME,
  title: "".concat(CONTENT_BASE_CLASSNAME, "_title"),
  description: "".concat(CONTENT_BASE_CLASSNAME, "_description"),
  url: "".concat(CONTENT_BASE_CLASSNAME, "_url"),
  mediaWrapper: "".concat(MEDIA_BASE_CLASSNAME, "_wrapper"),
  media: MEDIA_BASE_CLASSNAME,
  image: "".concat(MEDIA_BASE_CLASSNAME, "_image"),
  videoWrapper: "".concat(MEDIA_BASE_CLASSNAME, "_video_wrapper"),
  video: "".concat(MEDIA_BASE_CLASSNAME, "_video"),
  audioWrapper: "".concat(MEDIA_BASE_CLASSNAME, "_audio_wrapper"),
  audio: "".concat(MEDIA_BASE_CLASSNAME, "_audio"),
  mediaControls: CONTROLS_BASE_CLASSNAME,
  playbackControl: "".concat(CONTROLS_BASE_CLASSNAME, "_playback"),
  volumeControl: "".concat(CONTROLS_BASE_CLASSNAME, "_volume"),
  rwControl: "".concat(CONTROLS_BASE_CLASSNAME, "_rewind"),
  ffwControl: "".concat(CONTROLS_BASE_CLASSNAME, "_fast_forward"),
  rateControl: "".concat(CONTROLS_BASE_CLASSNAME, "_rate"),
  progressBar: "".concat(CONTROLS_BASE_CLASSNAME, "_progress_bar"),
  progressTime: "".concat(CONTROLS_BASE_CLASSNAME, "_progress_time"),
  spinner: "".concat(CONTROLS_BASE_CLASSNAME, "_spinner"),
  iframe: "".concat(BASE_CLASSNAME, "__iframe")
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  &&& {\n    text-align: inherit;\n    font-weight: inherit;\n    font-family: inherit;\n    color: inherit;\n    margin: 0;\n\n    ", "\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var Clamp = function Clamp(_ref) {
  var children = _ref.children,
      className = _ref.className,
      lines = _ref.lines;
  return isNil(children) ? null : /*#__PURE__*/React__default.createElement(u, {
    className: className,
    lines: lines,
    text: children,
    is: "p"
  });
};

var StyledClamp = styled__default(Clamp)(_templateObject$1(), function (_ref2) {
  var useNanoClamp = _ref2.useNanoClamp;
  return !useNanoClamp && styled.css(_templateObject2$1());
});

var CardText = function CardText(_ref3) {
  var _ref3$useNanoClamp = _ref3.useNanoClamp,
      useNanoClamp = _ref3$useNanoClamp === void 0 ? true : _ref3$useNanoClamp,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["useNanoClamp", "children"]);

  var textProps = useNanoClamp ? props : _objectSpread2(_objectSpread2({}, props), {}, {
    as: 'p',
    title: children
  });
  return /*#__PURE__*/React__default.createElement(StyledClamp, _extends({
    useNanoClamp: useNanoClamp
  }, textProps), children);
};

var speed = {
  short: '100ms',
  medium: '150ms',
  long: '300ms'
};
var animation = {
  short: 'cubic-bezier(.25,.8,.25,1)',
  medium: 'cubic-bezier(.25,.8,.25,1)',
  long: 'cubic-bezier(.4, 0, .2, 1)'
};

var createTransition = function createTransition(properties, s) {
  var suffix = "".concat(speed[s], " ").concat(animation[s]);
  return properties.map(function (property) {
    return "".concat(property, " ").concat(suffix);
  }).join(', ');
};

var transition = {
  short: function short() {
    for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
      properties[_key] = arguments[_key];
    }

    return createTransition(properties, 'short');
  },
  medium: function medium() {
    for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      properties[_key2] = arguments[_key2];
    }

    return createTransition(properties, 'medium');
  },
  long: function long() {
    for (var _len3 = arguments.length, properties = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      properties[_key3] = arguments[_key3];
    }

    return createTransition(properties, 'long');
  }
}; // https://primer.style/design/foundations/typography

var font = {
  sans: "InterUI, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace"
};

var initialState = {};
var GlobalContext = /*#__PURE__*/React__default.createContext(initialState);

var GlobalState = function GlobalState(_ref) {
  var autoPlay = _ref.autoPlay,
      children = _ref.children,
      controls = _ref.controls,
      loop = _ref.loop,
      mediaRef = _ref.mediaRef,
      muted = _ref.muted,
      playsInline = _ref.playsInline,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["autoPlay", "children", "controls", "loop", "mediaRef", "muted", "playsInline", "size"]);

  var _useState = React.useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var updateState = React.useCallback(function (newState) {
    return setState(function (currentState) {
      return _objectSpread2(_objectSpread2({}, currentState), newState);
    });
  }, []);
  var props = React.useMemo(function () {
    return {
      autoPlay,
      controls,
      loop,
      mediaRef,
      muted,
      playsInline,
      size
    };
  }, [autoPlay, controls, loop, mediaRef, muted, playsInline, size]);
  var values = React.useMemo(function () {
    return {
      props,
      state,
      updateState
    };
  }, [props, state, updateState]);
  return /*#__PURE__*/React__default.createElement(GlobalContext.Provider, {
    value: values
  }, children(rest));
};

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  background: url('https://cdn.microlink.io/logo/logo.svg') no-repeat center\n    center;\n  display: block;\n  margin-left: 15px;\n  transition: ", ";\n  will-change: filter, opacity;\n  &:not(:hover) {\n    filter: grayscale(100%);\n    opacity: 0.75;\n  }\n\n  min-width: ", ";\n  width: ", ";\n  background-size: ", ";\n  height: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.75;\n  transition: ", ";\n  will-change: opacity;\n\n  .", ":hover & {\n    opacity: 1;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    ", "\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-align: left;\n  margin: 0;\n  flex-grow: 0;\n  font-weight: normal;\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 14px;\n  flex-grow: 2;\n  margin: auto 0;\n  line-height: 18px;\n  font-weight: normal;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        min-width: 0;\n        padding-right: 14px;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    flex-grow: ", ";\n    font-size: ", ";\n\n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-weight: bold;\n  margin: 0;\n  width: 100%;\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex: ", ";\n    justify-content: ", ";\n    flex-direction: ", ";\n    align-items: ", ";\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 10px 15px;\n  min-width: 0;\n  box-sizing: border-box;\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    > p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var REGEX_STRIP_WWW = /^www\./;
var BADGE_WIDTH = '16px';
var BADGE_HEIGHT = '12px';

var getHostname = function getHostname(href) {
  if (isNil(href)) return '';

  var _URL = new URL(href),
      hostname = _URL.hostname;

  return hostname.replace(REGEX_STRIP_WWW, '');
};

var mobileDescriptionStyle = styled.css(_templateObject$2(), media.mobile(_templateObject2$2()));
var Content = styled__default('div').attrs({
  className: classNames.content
})(_templateObject3(), function (_ref) {
  var cardSize = _ref.cardSize;
  return styled.css(_templateObject4(), !isLarge(cardSize) ? 1 : '0 0 125px', !isSmall(cardSize) ? 'space-around' : 'space-between', !isSmall(cardSize) ? 'column' : 'row', !isSmall(cardSize) ? 'stretch' : 'center');
});
var Header = styled__default('header').attrs({
  className: classNames.title
})(_templateObject5(), function (_ref2) {
  var cardSize = _ref2.cardSize;
  return styled.css(_templateObject6(), !isSmall(cardSize) ? 1.2 : 0.8, !isSmall(cardSize) ? '16px' : '15px', isSmall(cardSize) && styled.css(_templateObject7()));
});
var Description = styled__default('div').attrs({
  className: classNames.description
})(_templateObject8());
var Footer = styled__default('footer').attrs({
  className: classNames.url
})(_templateObject9(), function (_ref3) {
  var cardSize = _ref3.cardSize;
  return styled.css(_templateObject10(), !isSmall(cardSize) ? '12px' : '10px', !isSmall(cardSize) && 'width: 100%;');
});
var Author = styled__default(CardText)(_templateObject11(), transition.medium('opacity'), classNames.main);
var PoweredBy = styled__default('span').attrs({
  title: 'microlink.io'
})(_templateObject12(), transition.medium('filter', 'opacity'), BADGE_WIDTH, BADGE_WIDTH, BADGE_WIDTH, BADGE_HEIGHT);

var CardContent = function CardContent() {
  var _useContext = React.useContext(GlobalContext),
      _useContext$state = _useContext.state,
      description = _useContext$state.description,
      title = _useContext$state.title,
      url = _useContext$state.url,
      size = _useContext.props.size;

  var isSmallCard = isSmall(size);
  var formattedUrl = React.useMemo(function () {
    return getHostname(url);
  }, [url]);
  var handleOnClick = React.useCallback(function (e) {
    e.preventDefault();
    window.open('https://www.microlink.io', '_blank');
  });
  return /*#__PURE__*/React__default.createElement(Content, {
    cardSize: size
  }, /*#__PURE__*/React__default.createElement(Header, {
    cardSize: size
  }, /*#__PURE__*/React__default.createElement(CardText, {
    useNanoClamp: false
  }, title)), !isSmallCard && /*#__PURE__*/React__default.createElement(Description, {
    cardSize: size
  }, /*#__PURE__*/React__default.createElement(CardText, {
    lines: 10000
  }, description)), /*#__PURE__*/React__default.createElement(Footer, {
    cardSize: size
  }, /*#__PURE__*/React__default.createElement(Author, {
    useNanoClamp: false
  }, formattedUrl), /*#__PURE__*/React__default.createElement(PoweredBy, {
    onClick: handleOnClick
  })));
};

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " 1.25s linear infinite;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  animation: ", " .75s linear infinite;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #dce3e8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    background: #e1e8ed;\n  }\n  70% {\n    background: #cdd4d8;\n  }\n  100% {\n    background: #e1e8ed;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var emptyStatePulse = styled.keyframes(_templateObject$3());
var emptyStateImagePulse = styled.keyframes(_templateObject2$3());
var emptyStateAnimation = styled.css(_templateObject3$1(), emptyStatePulse);
var emptyStateImageAnimation = styled.css(_templateObject4$1(), emptyStateImagePulse);

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n      opacity: ", ";\n      visibility: ", ";\n    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #e1e8ed;\n    z-index: 1;\n    transition: ", ";\n    will-change: opacity;\n\n    ", ";\n  }\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  height: 1px;\n  width: 1px;\n  position: absolute;\n  z-index: -1;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var ImageLoadCatcher = styled__default('img')(_templateObject$4());
var loadingOverlay = styled.css(_templateObject2$4(), transition.medium('opacity', 'visibility'), function (_ref) {
  var isLoading = _ref.isLoading;
  return styled.css(_templateObject3$2(), isLoading ? 1 : 0, isLoading ? 'visible' : 'hidden');
});

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n  background: transparent no-repeat center center / cover;\n  display: block;\n  overflow: hidden;\n  height: auto;\n  position: relative;\n\n  &::before {\n    content: '';\n    padding-bottom: 100%;\n    display: block;\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n\n    &::before {\n      padding-bottom: 0;\n    }\n  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n      flex: 0 0 92px;\n    "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n    flex: 0 0 125px;\n\n    ", "\n  "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    flex: 0 0 48px;\n  "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var mediaSizeStyles = {
  small: styled.css(_templateObject$5()),
  normal: styled.css(_templateObject2$5(), media.mobile(_templateObject3$3())),
  large: styled.css(_templateObject4$2())
};
var StyledWrap = styled__default('div')(_templateObject5$1(), function (_ref) {
  var cardSize = _ref.cardSize;
  return mediaSizeStyles[cardSize];
}, loadingOverlay);

var Wrap = function Wrap(props) {
  var _useContext = React.useContext(GlobalContext),
      size = _useContext.props.size;

  return /*#__PURE__*/React__default.createElement(StyledWrap, _extends({
    cardSize: size
  }, props));
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  background-image: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var ImageWrap = styled__default(Wrap).attrs({
  className: "".concat(classNames.media, " ").concat(classNames.image)
})(_templateObject$6(), function (_ref) {
  var url = _ref.url;
  return url ? "url('".concat(imageProxy(url), "')") : '';
});

var ImageComponent = function ImageComponent(props) {
  var _useContext = React.useContext(GlobalContext),
      imageUrl = _useContext.state.imageUrl;

  return /*#__PURE__*/React__default.createElement(ImageWrap, _extends({
    url: imageUrl
  }, props));
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.8;\n  height: 12px;\n  width: 30%;\n  display: block;\n  ", " animation-delay: .25s;\n\n  ", ";\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.8;\n  height: 14px;\n  width: 95%;\n  display: block;\n  position: relative;\n  ", ";\n  animation-delay: 0.125s;\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.8;\n  height: 16px;\n  width: ", ";\n  display: block;\n  background: #e1e8ed;\n  margin: ", ";\n  ", ";\n\n  ", ";\n"]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var MediaEmpty = styled__default(ImageComponent)(_templateObject$7(), emptyStateImageAnimation);
var HeaderEmpty = styled__default('span')(_templateObject2$6(), function (_ref) {
  var cardSize = _ref.cardSize;
  return !isSmall(cardSize) ? '60%' : '75%';
}, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return !isSmall(cardSize) ? '2px 0 8px' : '0 20px 0 0';
}, emptyStateAnimation, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return !isLarge(cardSize) && "\n    height: 15px;\n  ";
});
var DescriptionEmpty = styled__default('span')(_templateObject3$4(), emptyStateAnimation);
var FooterEmpty = styled__default('span')(_templateObject4$3(), emptyStateAnimation, function (_ref4) {
  var cardSize = _ref4.cardSize;
  return !isLarge(cardSize) && "\n    height: 10px;\n  ";
});

var _ref5 = /*#__PURE__*/React__default.createElement(FooterEmpty, null);

var CardEmptyState = function CardEmptyState() {
  var _useContext = React.useContext(GlobalContext),
      size = _useContext.props.size;

  var isSmallCard = isSmall(size);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MediaEmpty, {
    cardSize: size
  }), /*#__PURE__*/React__default.createElement(Content, {
    cardSize: size
  }, /*#__PURE__*/React__default.createElement(HeaderEmpty, {
    cardSize: size
  }), !isSmallCard ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(DescriptionEmpty, {
    cardSize: size
  }), /*#__PURE__*/React__default.createElement(DescriptionEmpty, {
    cardSize: size,
    style: {
      marginBottom: '12px'
    }
  })) : null, _ref5));
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  backface-visibility: hidden;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));\n  transition: ", ";\n  will-change: transform;\n\n  > svg {\n    display: block;\n  }\n\n  &:active:not(:focus) {\n    transform: scale(0.9);\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var MediaButton = styled__default('div')(_templateObject$8(), transition.short('transform'));

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  margin: ", ";\n  font-family: ", ";\n  font-size: 12px;\n  padding: 0 16px;\n  color: #fff;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    font-size: 8px;\n    margin-left: 8px;\n    min-width: 23px;\n  "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  font-size: ", "px;\n  min-width: ", "px;\n  line-height: 1;\n  font-weight: bold;\n  border: 1.5px solid #fff;\n  border-radius: 9999px;\n  padding: 1px 5px;\n  text-align: center;\n  color: #fff;\n  margin-left: 10px;\n\n  ", "\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n      width: 12px;\n      height: 12px;\n    "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    width: ", "px;\n    height: ", "px;\n\n    ", "\n  }\n"]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n  stroke: #fff;\n"]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  z-index: 2;\n  position: absolute;\n  bottom: ", "px;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: ", ";\n  will-change: opacity;\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var _ref = /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1",
  d: "M15.5 6.205l-.705-.705L13 7.295 11.205 5.5l-.705.705L12.295 8 10.5 9.795l.705.705L13 8.705l1.795 1.795.705-.705L13.705 8 15.5 6.205zM9 15a.5.5 0 01-.355-.15L4.835 11H1.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h3.335l3.81-3.85a.5.5 0 01.705 0 .5.5 0 01.15.35v13a.5.5 0 01-.5.5z",
  transform: "translate(-1 -1)"
});

var VolumeMute = function VolumeMute(props) {
  return /*#__PURE__*/React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14"
  }, props), _ref);
};

var _ref2 = /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1",
  d: "M13.58 4.04l-.765.645a5 5 0 01-.145 6.615l.735.7a6 6 0 00.175-7.94v-.02zM10.79 6a3 3 0 01-.09 3.97l.735.68a4 4 0 00.115-5.295L10.79 6zM9 15a.5.5 0 01-.355-.15L4.835 11H1.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h3.335l3.81-3.85a.5.5 0 01.705 0 .5.5 0 01.15.35v13a.5.5 0 01-.5.5z",
  transform: "translate(-1 -1)"
});

var VolumeUp = function VolumeUp(props) {
  return /*#__PURE__*/React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 14 14"
  }, props), _ref2);
};

var BottomControls = styled__default('div')(_templateObject$9(), function (_ref3) {
  var cardSize = _ref3.cardSize;
  return isLarge(cardSize) ? 18 : 14;
}, transition.medium('opacity'));
var VolumeIcon = styled__default('svg')(_templateObject2$7());
var VolumeButton = styled__default(MediaButton).attrs({
  className: classNames.volumeControl
})(_templateObject3$5(), VolumeIcon, function (_ref4) {
  var cardSize = _ref4.cardSize;
  return isLarge(cardSize) ? 16 : 14;
}, function (_ref5) {
  var cardSize = _ref5.cardSize;
  return isLarge(cardSize) ? 16 : 14;
}, function (_ref6) {
  var cardSize = _ref6.cardSize;
  return !isLarge(cardSize) && media.mobile(_templateObject4$4());
});
var PlaybackRateButton = styled__default(MediaButton).attrs({
  className: classNames.rateControl
})(_templateObject5$2(), function (_ref7) {
  var cardSize = _ref7.cardSize;
  return isLarge(cardSize) ? 12 : 10;
}, function (_ref8) {
  var cardSize = _ref8.cardSize;
  return isLarge(cardSize) ? 33 : 28;
}, function (_ref9) {
  var cardSize = _ref9.cardSize;
  return !isLarge(cardSize) && media.mobile(_templateObject6$1());
});
var TimeLabel = styled__default('span').attrs({
  className: classNames.progressTime
})(_templateObject7$1(), function (_ref10) {
  var right = _ref10.right;
  return !right ? '0 auto 0 0' : '0 0 0 auto';
}, font.mono);

var FooterControls = function FooterControls(_ref11) {
  var cardSize = _ref11.cardSize,
      currentTime = _ref11.currentTime,
      endTime = _ref11.endTime,
      isMuted = _ref11.isMuted,
      onMuteClick = _ref11.onMuteClick,
      onPlaybackRateClick = _ref11.onPlaybackRateClick,
      playbackRate = _ref11.playbackRate;
  var VolumeComponent = React.useMemo(function () {
    return isMuted ? VolumeMute : VolumeUp;
  }, [isMuted]);
  var isLargeCard = React.useMemo(function () {
    return isLarge(cardSize);
  }, [cardSize]);
  return /*#__PURE__*/React__default.createElement(BottomControls, {
    cardSize: cardSize
  }, isLargeCard && /*#__PURE__*/React__default.createElement(TimeLabel, null, currentTime), /*#__PURE__*/React__default.createElement(VolumeButton, {
    title: isMuted ? 'Unmute' : 'Mute',
    cardSize: cardSize,
    onClick: onMuteClick
  }, /*#__PURE__*/React__default.createElement(VolumeIcon, {
    as: VolumeComponent
  })), /*#__PURE__*/React__default.createElement(PlaybackRateButton, {
    title: "Playback Rate",
    cardSize: cardSize,
    onClick: onPlaybackRateClick
  }, /*#__PURE__*/React__default.createElement("span", null, playbackRate, "x")), isLargeCard && /*#__PURE__*/React__default.createElement(TimeLabel, {
    right: true
  }, endTime));
};

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n        width: calc(", " * 1.2);\n        height: calc(", " * 1.2);\n      "]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n      padding: ", ";\n\n      ", "\n    "]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    ", "\n  }\n"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  stroke: #fff;\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var _ref$1 = /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1",
  d: "M12 6h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2zm10 0h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2z",
  transform: "translate(-8 -6)"
});

var Pause = function Pause(props) {
  return /*#__PURE__*/React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 20"
  }, props), _ref$1);
};

var _ref2$1 = /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1",
  d: "M7 28a1 1 0 01-1-1V5a1 1 0 011.501-.865l19 11a1 1 0 010 1.73l-19 11A.998.998 0 017 28z",
  transform: "translate(-6 -4)"
});

var Play = function Play(props) {
  return /*#__PURE__*/React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 21 24"
  }, props), _ref2$1);
};

var iconSizes = {
  large: '50px',
  normal: '35px',
  small: '20px'
};
var PlaybackIcon = styled__default('svg')(_templateObject$a());
var PlaybackButtonWrap = styled__default(MediaButton).attrs({
  className: classNames.playbackControl
})(_templateObject2$8(), PlaybackIcon, function (_ref3) {
  var cardSize = _ref3.cardSize;
  return styled.css(_templateObject3$6(), iconSizes[cardSize], iconSizes[cardSize], isLarge(cardSize) ? 0 : '8px', !isLarge(cardSize) && !isSmall(cardSize) && media.mobile(_templateObject4$5(), iconSizes.small, iconSizes.small));
});

var PlaybackButton = function PlaybackButton(_ref4) {
  var isPlaying = _ref4.isPlaying,
      props = _objectWithoutProperties(_ref4, ["isPlaying"]);

  var PlaybackComponent = React.useMemo(function () {
    return isPlaying ? Pause : Play;
  }, [isPlaying]);
  return /*#__PURE__*/React__default.createElement(PlaybackButtonWrap, _extends({
    title: isPlaying ? 'Pause' : 'Play'
  }, props), /*#__PURE__*/React__default.createElement(PlaybackIcon, {
    as: PlaybackComponent
  }));
};

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n      width: ", "px;\n    "]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  background: #ffffff;\n  border-radius: 50%;\n  transform-origin: center center;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  transition: ", ";\n  will-change: left, transform, opacity, visibility;\n  backface-visibility: hidden;\n  z-index: 3;\n\n  ", "\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var SCRUBBER_SIZE = 12;
var scrubberSizeScales = {
  normal: 0.8,
  small: 0.9
};

var getScrubberSize = function getScrubberSize(size) {
  return Math.floor(SCRUBBER_SIZE * (scrubberSizeScales[size] || 1));
};

var Scrubber = styled__default('div').attrs(function (_ref) {
  var isVisible = _ref.isVisible,
      positionX = _ref.positionX;
  return {
    style: {
      left: positionX,
      transform: "scale(".concat(isVisible ? 1 : 0.5, ") translate(-50%, -50%)"),
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden'
    }
  };
})(_templateObject$b(), transition.short('transform', 'opacity', 'visibility'), function (_ref2) {
  var cardSize = _ref2.cardSize;
  var scrubberSize = getScrubberSize(cardSize);
  return styled.css(_templateObject2$9(), scrubberSize, scrubberSize);
});

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background: rgba(24, 25, 25, 0.75);\n  color: #fff;\n  text-shadow: 0 1px 2px rgba(24, 25, 25, 0.15);\n  padding: 2px 3px;\n  border-radius: 4px;\n  font-family: ", ";\n  font-size: ", "px;\n  line-height: 1;\n  transition: ", ", ", ";\n  will-change: top, left, visibility, opacity, transform;\n  backface-visibility: hidden;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var BASE_FONT_SIZE = 11;
var sizeScales = {
  normal: 0.8
};

var getMarkerFontSize = function getMarkerFontSize(size) {
  return BASE_FONT_SIZE * (sizeScales[size] || 1);
};

var Tooltip = styled__default('span').attrs(function (_ref) {
  var position = _ref.position,
      isDragging = _ref.isDragging,
      visible = _ref.visible;
  return {
    style: {
      left: "".concat(position, "px"),
      top: visible ? '-4px' : '0px',
      visibility: visible ? 'visible' : 'hidden',
      opacity: visible ? 1 : 0,
      transform: "translate(-50%, ".concat(!isDragging ? -100 : -110, "%)")
    }
  };
})(_templateObject$c(), font.mono, function (_ref2) {
  var cardSize = _ref2.cardSize;
  return getMarkerFontSize(cardSize);
}, transition.medium('opacity', 'visibility', 'transform'), transition.long('top'));
var Tooltip$1 = /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
  var isDragging = _ref3.isDragging,
      isVisible = _ref3.isVisible,
      label = _ref3.label,
      positionX = _ref3.positionX,
      size = _ref3.size,
      props = _objectWithoutProperties(_ref3, ["isDragging", "isVisible", "label", "positionX", "size"]);

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Tooltip, _extends({
    visible: isVisible,
    position: positionX,
    cardSize: size,
    ref: ref,
    isDragging: isDragging
  }, props), label));
});

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(255, 255, 255, 0.35);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n"]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  transform-origin: left center;\n  transition: ", ";\n  will-change: left, transform, opacity, visible;\n"]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: -50%;\n  height: 200%;\n  width: 100%;\n  background: #ffffff;\n  transform-origin: left center;\n  will-change: transform;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  border-radius: inherit;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n      height: ", "px;\n\n      ", ":hover & {\n        height: ", "px;\n      }\n    "]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border-radius: 9999px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  background: rgba(255, 255, 255, 0.15);\n  transition: ", ";\n  will-change: height;\n  pointer-events: none;\n  position: relative;\n\n  ", "\n"]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: ", "px ", "px ", "px;\n  z-index: 2;\n  backface-visibility: hidden;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var HEIGHT = 6;
var PADDING = 6;
var heightScales = {
  normal: 0.7,
  small: 0.6
};
var activeHeightScales = {
  small: 0.9,
  large: 1.4
};

var getProgressBarHeight = function getProgressBarHeight(size) {
  return Math.floor(HEIGHT * (heightScales[size] || 1));
};

var getProgressBarActiveHeight = function getProgressBarActiveHeight(size) {
  return Math.floor(HEIGHT * (activeHeightScales[size] || 1));
};

var OuterWrap = styled__default('div').attrs(function () {
  return {
    className: classNames.progressBar
  };
})(_templateObject$d(), PADDING, PADDING / 2, PADDING / 2);
var BarsWrap = styled__default('div').attrs(function (_ref) {
  var cardSize = _ref.cardSize,
      isDragging = _ref.isDragging;

  if (isDragging) {
    var activeHeight = getProgressBarActiveHeight(cardSize);
    return {
      style: {
        height: "".concat(activeHeight, "px")
      }
    };
  }

  return {};
})(_templateObject2$a(), transition.short('height'), function (_ref2) {
  var cardSize = _ref2.cardSize;
  var height = getProgressBarHeight(cardSize);
  var activeHeight = getProgressBarActiveHeight(cardSize);
  return styled.css(_templateObject3$7(), height, OuterWrap, activeHeight);
});
var ProgressLine = styled__default('div')(_templateObject4$6());
var ProgressMask = styled__default('div').attrs(function (_ref3) {
  var maskScale = _ref3.maskScale;
  return {
    style: {
      transform: "scaleX(".concat(maskScale, ")")
    }
  };
})(_templateObject5$3());
var ProgressHover = styled__default('div').attrs(function (_ref4) {
  var cursorRatio = _ref4.cursorRatio,
      isHovering = _ref4.isHovering,
      progressPercent = _ref4.progressPercent;
  return {
    style: {
      left: progressPercent,
      transform: "scaleX(".concat(cursorRatio, ")"),
      opacity: isHovering ? 1 : 0,
      visibility: isHovering ? 'visible' : 'hidden'
    }
  };
})(_templateObject6$2(), transition.short('opacity', 'visibility'));
var BufferedChunk = styled__default('div').attrs(function (_ref5) {
  var start = _ref5.start,
      end = _ref5.end;
  return {
    style: {
      left: "".concat(start, "px"),
      right: "".concat(end, "px")
    }
  };
})(_templateObject7$2());

var ProgressBar = function ProgressBar(_ref6) {
  var bufferedMedia = _ref6.bufferedMedia,
      cursorX = _ref6.cursorX,
      duration = _ref6.duration,
      hoveredTime = _ref6.hoveredTime,
      isDragging = _ref6.isDragging,
      isHovering = _ref6.isHovering,
      onClick = _ref6.onClick,
      onMouseDown = _ref6.onMouseDown,
      onMouseOver = _ref6.onMouseOver,
      progress = _ref6.progress,
      showTooltip = _ref6.showTooltip;

  var _useContext = React.useContext(GlobalContext),
      size = _useContext.props.size;

  var wrapRef = React.useRef();
  var tooltipRef = React.useRef();
  var isSmallCard = React.useMemo(function () {
    return isSmall(size);
  }, [size]);
  var getWrapWidth = React.useCallback(function () {
    if (wrapRef.current) {
      return wrapRef.current.getBoundingClientRect().width - PADDING;
    }

    return 0;
  }, []);
  var progressRatio = React.useMemo(function () {
    return clampNumber(progress / duration, 0, 1);
  }, [duration, progress]);
  var progressPercent = React.useMemo(function () {
    return "".concat(clampNumber(progressRatio * 100, 1, 99), "%");
  }, [progressRatio]);
  var cursorRatio = React.useMemo(function () {
    if (wrapRef.current) {
      var wrapWidth = getWrapWidth();
      var startPoint = progressRatio * wrapWidth;
      var cursorPosition = cursorX - startPoint;
      var width = wrapWidth - startPoint;

      if (cursorPosition > 0) {
        return clampNumber((cursorPosition / width).toFixed(3), 0, 0.99);
      }
    }

    return 0;
  }, [cursorX, getWrapWidth, progressRatio]);
  var bufferedMediaChunks = React.useMemo(function () {
    var wrapWidth = getWrapWidth();
    return bufferedMedia.map(function (chunk, key) {
      var start = chunk.start * wrapWidth;
      var end = wrapWidth - chunk.end * wrapWidth;
      return {
        key,
        start,
        end
      };
    });
  }, [bufferedMedia, getWrapWidth]);
  var tooltipLabel = React.useMemo(function () {
    return formatSeconds(hoveredTime);
  }, [hoveredTime]);
  var tooltipPositionX = React.useMemo(function () {
    if (wrapRef.current && tooltipRef.current) {
      var wrapWidth = getWrapWidth();
      var tooltipWidth = tooltipRef.current.getBoundingClientRect().width;
      var tooltipHalf = tooltipWidth / 2;
      return clampNumber(cursorX, tooltipHalf, wrapWidth - tooltipHalf);
    }

    return 0;
  }, [cursorX, getWrapWidth]);
  var mouseEvents = React.useMemo(function () {
    return {
      onClick,
      onMouseDown,
      onMouseOver
    };
  }, [onClick, onMouseDown, onMouseOver]);
  var showAccessories = React.useMemo(function () {
    return isDragging || isHovering;
  }, [isDragging, isHovering]);
  return /*#__PURE__*/React__default.createElement(OuterWrap, _extends({
    cardSize: size,
    ref: wrapRef
  }, mouseEvents), /*#__PURE__*/React__default.createElement(BarsWrap, {
    cardSize: size,
    isDragging: isDragging
  }, /*#__PURE__*/React__default.createElement(ProgressLine, null, /*#__PURE__*/React__default.createElement(ProgressHover, {
    cursorRatio: cursorRatio,
    isHovering: isHovering,
    progressPercent: progressPercent
  }), bufferedMediaChunks.map(function (_ref7) {
    var key = _ref7.key,
        chunk = _objectWithoutProperties(_ref7, ["key"]);

    return /*#__PURE__*/React__default.createElement(BufferedChunk, _extends({
      key: key
    }, chunk));
  }), /*#__PURE__*/React__default.createElement(ProgressMask, {
    maskScale: progressRatio
  })), /*#__PURE__*/React__default.createElement(Scrubber, {
    cardSize: size,
    isVisible: showAccessories,
    positionX: progressPercent
  }), !isSmallCard && /*#__PURE__*/React__default.createElement(Tooltip$1, {
    isDragging: isDragging,
    isVisible: showAccessories,
    label: tooltipLabel,
    positionX: tooltipPositionX,
    ref: tooltipRef,
    size: size
  })));
};

function _templateObject3$8() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 ", ";\n"]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n    width: 0;\n    height: 0;\n  "]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  stroke: #fff;\n  width: ", "px;\n  height: ", "px;\n\n  ", "\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}

var _ref2$2 = /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1",
  d: "M4 18c0 6.627 5.373 12 12 12s12-5.373 12-12S22.627 6 16 6h-4V1L6 7l6 6V8h4c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 23.523 6 18H4zm15.63 4.13a2.84 2.84 0 01-1.28-.27 2.44 2.44 0 01-.89-.77 3.57 3.57 0 01-.52-1.25 7.69 7.69 0 01-.17-1.68 7.83 7.83 0 01.17-1.68c.094-.445.27-.87.52-1.25.23-.325.535-.59.89-.77.4-.188.838-.28 1.28-.27a2.44 2.44 0 012.16 1 5.23 5.23 0 01.7 2.93 5.23 5.23 0 01-.7 2.93 2.44 2.44 0 01-2.16 1.08zm0-1.22c.411.025.8-.19 1-.55a3.38 3.38 0 00.37-1.51v-1.38a3.31 3.31 0 00-.29-1.5 1.23 1.23 0 00-2.06 0 3.31 3.31 0 00-.29 1.5v1.38a3.38 3.38 0 00.29 1.51c.195.356.575.57.98.55zm-9 1.09v-1.18h2v-5.19l-1.86 1-.55-1.06 2.32-1.3H14v6.5h1.78V22h-5.15z",
  transform: "translate(-4 -1)"
});

var Backward = function Backward(_ref) {
  var cardSize = _ref.cardSize,
      props = _objectWithoutProperties(_ref, ["cardSize"]);

  return /*#__PURE__*/React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 29"
  }, props), _ref2$2);
};

var _ref4 = /*#__PURE__*/React__default.createElement("path", {
  fill: "#FFF",
  fillRule: "evenodd",
  stroke: "none",
  strokeWidth: "1",
  d: "M26 18c0 5.523-4.477 10-10 10S6 23.523 6 18 10.477 8 16 8h4v5l6-6-6-6v5h-4C9.373 6 4 11.373 4 18s5.373 12 12 12 12-5.373 12-12h-2zm-6.36 4.13a2.81 2.81 0 01-1.28-.27 2.36 2.36 0 01-.89-.77 3.39 3.39 0 01-.47-1.25 7.12 7.12 0 01-.17-1.68 7.24 7.24 0 01.17-1.68 3.46 3.46 0 01.52-1.25 2.36 2.36 0 01.89-.77c.4-.19.838-.282 1.28-.27a2.44 2.44 0 012.16 1 5.31 5.31 0 01.7 2.93 5.31 5.31 0 01-.7 2.93 2.44 2.44 0 01-2.21 1.08zm0-1.22a1 1 0 001-.55c.22-.472.323-.99.3-1.51v-1.38a3.17 3.17 0 00-.3-1.5 1.22 1.22 0 00-2.05 0 3.18 3.18 0 00-.29 1.5v1.38a3.25 3.25 0 00.29 1.51 1 1 0 001.05.55zm-7.02-3.49c.355.035.71-.06 1-.27a.84.84 0 00.31-.68v-.08a.94.94 0 00-.3-.74 1.2 1.2 0 00-.83-.27 1.65 1.65 0 00-.89.24 2.1 2.1 0 00-.68.68l-.93-.83a5.37 5.37 0 01.44-.51 2.7 2.7 0 01.54-.4 2.55 2.55 0 01.7-.27 3.25 3.25 0 01.87-.1 3.94 3.94 0 011.06.14c.297.078.576.214.82.4.224.168.408.383.54.63.123.26.184.543.18.83a2 2 0 01-.11.67 1.82 1.82 0 01-.32.52 1.79 1.79 0 01-.47.36 2.27 2.27 0 01-.57.2V18c.219.04.431.11.63.21a1.7 1.7 0 01.85.93c.084.234.124.481.12.73a2 2 0 01-.2.92 2 2 0 01-.58.72 2.66 2.66 0 01-.89.45 3.76 3.76 0 01-1.15.16 4.1 4.1 0 01-1-.11 3.1 3.1 0 01-.76-.31 2.76 2.76 0 01-.56-.45 4.22 4.22 0 01-.44-.55l1.07-.81c.082.147.175.288.28.42.105.128.226.243.36.34.137.097.29.171.45.22a2 2 0 00.57.07 1.45 1.45 0 001-.3 1.12 1.12 0 00.34-.85v-.08a1 1 0 00-.37-.8 1.78 1.78 0 00-1.06-.28h-.76v-1.21h.74z",
  transform: "translate(-4 -1)"
});

var Forward = function Forward(_ref3) {
  var cardSize = _ref3.cardSize,
      props = _objectWithoutProperties(_ref3, ["cardSize"]);

  return /*#__PURE__*/React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 29"
  }, props), _ref4);
};

var SeekIcon = styled__default('svg')(_templateObject$e(), function (_ref5) {
  var cardSize = _ref5.cardSize;
  return isLarge(cardSize) ? 30 : 24;
}, function (_ref6) {
  var cardSize = _ref6.cardSize;
  return isLarge(cardSize) ? 30 : 24;
}, function (_ref7) {
  var cardSize = _ref7.cardSize;
  return !isLarge(cardSize) && media.mobile(_templateObject2$b());
});
var SeekButtonWrap = styled__default(MediaButton)(_templateObject3$8(), function (_ref8) {
  var cardSize = _ref8.cardSize;
  return isLarge(cardSize) ? '28px' : '3px';
});

var SeekButton = function SeekButton(_ref9) {
  var _ref9$type = _ref9.type,
      type = _ref9$type === void 0 ? 'rewind' : _ref9$type,
      cardSize = _ref9.cardSize,
      props = _objectWithoutProperties(_ref9, ["type", "cardSize"]);

  var IconComponent = React.useMemo(function () {
    return type === 'rewind' ? Backward : Forward;
  }, [type]);
  return /*#__PURE__*/React__default.createElement(SeekButtonWrap, _extends({
    title: type === 'rewind' ? 'Rewind' : 'Forward',
    cardSize: cardSize
  }, props), /*#__PURE__*/React__default.createElement(SeekIcon, {
    as: IconComponent,
    cardSize: cardSize
  }));
};

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n  stroke: #fff;\n  stroke-linecap: round;\n  stroke-width: 7;\n  fill: none;\n  animation: ", " 1.5s ease-in-out infinite;\n  will-change: stroke-dasharray, stroke-dashoffset;\n"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  animation: ", " 2s linear infinite;\n  will-change: transform;\n"]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    width: ", ";\n    right: ", ";\n    top: ", ";\n    transition: ", ";\n    will-change: opacity, visibility;\n    pointer-events: none;\n  "]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n"]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var BASE_SIZE = 12;
var BASE_OFFSET = 6;
var offsetScales = {
  normal: 0.8,
  small: 0.6
};
var sizeScales$1 = {
  normal: 0.9,
  small: 0.8
};

var getSpinnerOffset = function getSpinnerOffset(size) {
  return Math.floor(BASE_OFFSET * (offsetScales[size] || 1));
};

var getSpinnerSize = function getSpinnerSize(size) {
  return Math.floor(BASE_SIZE * (sizeScales$1[size] || 1));
};

var rotate = styled.keyframes(_templateObject$f());
var dash = styled.keyframes(_templateObject2$c());
var Wrap$1 = styled__default(MediaButton).attrs(function (_ref) {
  var isVisible = _ref.isVisible;
  return {
    style: {
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden'
    }
  };
})(function (_ref2) {
  var cardSize = _ref2.cardSize;
  var size = "".concat(getSpinnerSize(cardSize), "px");
  var offset = "".concat(getSpinnerOffset(cardSize), "px");
  return styled.css(_templateObject3$9(), size, offset, offset, transition.medium('opacity', 'visibility'));
});
var Svg = styled__default('svg')(_templateObject4$7(), rotate);
var Circle = styled__default('circle')(_templateObject5$4(), dash);

var _ref4$1 = /*#__PURE__*/React__default.createElement(Svg, {
  viewBox: "0 0 50 50"
}, /*#__PURE__*/React__default.createElement(Circle, {
  cx: "25",
  cy: "25",
  r: "20"
}));

var Spinner = function Spinner(_ref3) {
  var size = _ref3.size,
      isVisible = _ref3.isVisible;
  return /*#__PURE__*/React__default.createElement(Wrap$1, {
    cardSize: size,
    className: classNames.spinner,
    isVisible: isVisible
  }, _ref4$1);
};

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n    *[class*=\"", "\"]:not(.", ") {\n      transition: ", ";\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n\n  ", "\n"]);

  _templateObject4$8 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$a() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n"]);

  _templateObject3$a = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$d() {
  var data = _taggedTemplateLiteral(["\n      .", ":hover & {\n        background: ", ";\n      }\n\n      .", ":not(:hover) & {\n        opacity: ", ";\n        ", ";\n      }\n    "]);

  _templateObject2$d = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  transition: ", ", ", ";\n  will-change: background;\n  display: flex;\n  flex-direction: column;\n  pointer-events: auto;\n\n  ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var SPACE_KEY = 32;
var L_ARROW_KEY = 37;
var R_ARROW_KEY = 39;
var M_KEY = 77;
var OuterWrap$1 = styled__default('div').attrs({
  className: classNames.mediaControls
})(_templateObject$g(), transition.long('background'), transition.medium('opacity'), function (_ref) {
  var hasInteracted = _ref.hasInteracted,
      isDragging = _ref.isDragging,
      isPlaying = _ref.isPlaying;
  var bg = 'rgba(0, 0, 0, 0.35)';
  var dragBg = 'rgba(0, 0, 0, 0.2)';
  var isPaused = hasInteracted && !isPlaying;
  return styled.css(_templateObject2$d(), classNames.main, !isDragging ? bg : dragBg, classNames.main, !hasInteracted || isPaused ? 1 : 0, isPaused && "background: ".concat(bg));
});
var InnerWrap = styled__default('div')(_templateObject3$a());
var ControlsTop = styled__default('div')(_templateObject4$8(), function (_ref2) {
  var isVisible = _ref2.isVisible;
  return !isVisible && styled.css(_templateObject5$5(), classNames.mediaControls, classNames.progressTime, transition.medium('opacity', 'visibility'));
});

var getNextPlaybackRate = function getNextPlaybackRate(rate) {
  switch (rate) {
    case 1:
      return 1.25;

    case 1.25:
      return 1.5;

    case 1.5:
      return 2;

    default:
      return 1;
  }
};

var Controls = function Controls(_ref3) {
  var MediaComponent = _ref3.MediaComponent,
      mediaProps = _ref3.mediaProps;

  var _useContext = React.useContext(GlobalContext),
      _useContext$props = _useContext.props,
      autoPlay = _useContext$props.autoPlay,
      controls = _useContext$props.controls,
      propRef = _useContext$props.mediaRef,
      muted = _useContext$props.muted,
      loop = _useContext$props.loop,
      size = _useContext$props.size;

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      duration = _useState2[0],
      setDuration = _useState2[1];

  var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      progress = _useState4[0],
      setProgress = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      buffered = _useState6[0],
      setBuffered = _useState6[1];

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      cursorX = _useState8[0],
      setCursorX = _useState8[1];

  var _useState9 = React.useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      hoveredTime = _useState10[0],
      setHoveredTime = _useState10[1];

  var _useState11 = React.useState(autoPlay),
      _useState12 = _slicedToArray(_useState11, 2),
      isPlaying = _useState12[0],
      setIsPlaying = _useState12[1];

  var _useState13 = React.useState(muted),
      _useState14 = _slicedToArray(_useState13, 2),
      isMuted = _useState14[0],
      setIsMuted = _useState14[1];

  var _useState15 = React.useState(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isBuffering = _useState16[0],
      setIsBuffering = _useState16[1];

  var _useState17 = React.useState(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isHovering = _useState18[0],
      setIsHovering = _useState18[1];

  var _useState19 = React.useState(false),
      _useState20 = _slicedToArray(_useState19, 2),
      isDragging = _useState20[0],
      setIsDragging = _useState20[1];

  var _useState21 = React.useState(1),
      _useState22 = _slicedToArray(_useState21, 2),
      playbackRate = _useState22[0],
      setPlaybackRate = _useState22[1];

  var _useState23 = React.useState(autoPlay),
      _useState24 = _slicedToArray(_useState23, 2),
      hasInteracted = _useState24[0],
      setHasInteracted = _useState24[1];

  var _useState25 = React.useState(false),
      _useState26 = _slicedToArray(_useState25, 2),
      pausedByDrag = _useState26[0],
      setPausedByDrag = _useState26[1];

  var mediaRef = React.useRef();
  var setRefs = React.useCallback(function (node) {
    mediaRef.current = node;

    if (propRef) {
      if (isFunction(propRef)) {
        propRef(node);
      } else {
        propRef.current = node;
      }
    }
  }, [propRef]);
  var isNotSmall = React.useMemo(function () {
    return !isSmall(size);
  }, [size]);
  var mediaEvents = React.useMemo(function () {
    return {
      onCanPlay: function onCanPlay() {
        return setIsBuffering(false);
      },
      onLoadedMetadata: function onLoadedMetadata(e) {
        return setDuration(e.currentTarget.duration);
      },
      onPause: function onPause() {
        return setIsPlaying(false);
      },
      onPlay: function onPlay() {
        return setIsPlaying(true);
      },
      onPlaying: function onPlaying() {
        return setIsBuffering(false);
      },
      onProgress: function onProgress(e) {
        return setBuffered(e.currentTarget.buffered);
      },
      onRateChange: function onRateChange(e) {
        return setPlaybackRate(e.currentTarget.playbackRate);
      },
      onTimeUpdate: function onTimeUpdate(e) {
        return setProgress(e.currentTarget.currentTime);
      },
      onVolumeChange: function onVolumeChange(e) {
        return setIsMuted(e.currentTarget.muted);
      },
      onWaiting: function onWaiting(e) {
        return setIsBuffering(true);
      }
    };
  }, []);
  var evaluateCursorPosition = React.useCallback(function (event) {
    if (mediaRef.current) {
      var bounds = event.currentTarget.getBoundingClientRect();
      var cursor = clampNumber(Math.floor(event.clientX - bounds.left), 0, bounds.width);
      var time = cursor / bounds.width * mediaRef.current.duration;
      return {
        cursor,
        time
      };
    }

    return {
      cursor: 0,
      time: 0
    };
  }, []);
  var togglePlayback = React.useCallback(function () {
    if (mediaRef.current) {
      if (mediaRef.current.paused) {
        if (!hasInteracted) {
          setHasInteracted(true);
        }

        mediaRef.current.play();
      } else {
        mediaRef.current.pause();
      }
    }
  }, [hasInteracted]);
  var jumpTo = React.useCallback(function (time) {
    if (mediaRef.current) {
      var t = clampNumber(time, 0, mediaRef.current.duration);
      mediaRef.current.currentTime = t;
      setProgress(t);
    }
  }, []);
  var onSeekClick = React.useCallback(function (event, type) {
    event.preventDefault();
    event.stopPropagation();

    if (mediaRef.current) {
      var _currentTime = mediaRef.current.currentTime;
      jumpTo(type === 'rewind' ? _currentTime - 10 : _currentTime + 30);
    }
  }, [jumpTo]);
  var onMuteClick = React.useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (mediaRef.current) {
      mediaRef.current.muted = !mediaRef.current.muted;
    }
  }, []);
  var onPlaybackRateClick = React.useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (mediaRef.current) {
      mediaRef.current.playbackRate = getNextPlaybackRate(mediaRef.current.playbackRate);
    }
  }, []);
  var onProgressBarClick = React.useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);
  var onProgressBarMouseDown = React.useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);

    var _evaluateCursorPositi = evaluateCursorPosition(event),
        time = _evaluateCursorPositi.time;

    jumpTo(time);
  }, [evaluateCursorPosition, jumpTo]);
  var onProgressBarMouseOver = React.useCallback(function () {
    return setIsHovering(true);
  }, []);
  var onWrapClick = React.useCallback(function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (isDragging) {
      setIsDragging(false);
    } else {
      togglePlayback();
    }
  }, [isDragging, togglePlayback]);
  var onWrapMouseMove = React.useCallback(function (event) {
    if ((isDragging || isHovering) && mediaRef.current) {
      event.preventDefault();

      var _evaluateCursorPositi2 = evaluateCursorPosition(event),
          cursor = _evaluateCursorPositi2.cursor,
          time = _evaluateCursorPositi2.time;

      setHoveredTime(time);
      setCursorX(cursor);

      if (isDragging) {
        if (!mediaRef.current.paused) {
          mediaRef.current.pause();
          setPausedByDrag(true);
        }

        jumpTo(time);
      }
    }
  }, [evaluateCursorPosition, isDragging, isHovering, jumpTo]);
  var onWrapMouseOver = React.useCallback(function (event) {
    if (isDragging && event.buttons === 0) {
      setIsDragging(false);
    }
  }, [isDragging]);
  var onWrapKeyDown = React.useCallback(function (event) {
    if (isDragging) {
      return;
    }

    var keyCode = event.keyCode;

    if ([SPACE_KEY, L_ARROW_KEY, R_ARROW_KEY, M_KEY].includes(keyCode) && mediaRef.current) {
      event.preventDefault();

      switch (keyCode) {
        case SPACE_KEY:
          togglePlayback();
          break;

        case L_ARROW_KEY:
          jumpTo(mediaRef.current.currentTime - 5);
          break;

        case R_ARROW_KEY:
          jumpTo(mediaRef.current.currentTime + 5);
          break;

        case M_KEY:
          mediaRef.current.muted = !mediaRef.current.muted;
          break;
      }
    }
  }, [duration, isDragging, jumpTo, togglePlayback]);
  var outerWrapEvents = React.useMemo(function () {
    return {
      onClick: onWrapClick,
      onKeyDown: onWrapKeyDown,
      onMouseMove: onWrapMouseMove,
      onMouseOut: function onMouseOut() {
        return setIsHovering(false);
      },
      onMouseOver: onWrapMouseOver
    };
  }, [onWrapClick, onWrapKeyDown, onWrapMouseMove, onWrapMouseOver]);
  var outerWrapTitle = React.useMemo(function () {
    return hasInteracted ? {
      title: ''
    } : {};
  }, [hasInteracted]);
  var bufferedMedia = React.useMemo(function () {
    if (buffered && buffered.length && mediaRef.current) {
      return _toConsumableArray(Array(buffered.length).keys()).map(function (index) {
        return {
          start: buffered.start(index) / mediaRef.current.duration,
          end: buffered.end(index) / mediaRef.current.duration
        };
      });
    }

    return [];
  }, [buffered]);
  var currentTime = React.useMemo(function () {
    return formatSeconds(progress || 0);
  }, [progress]);
  var endTime = React.useMemo(function () {
    return formatSeconds(duration || 0);
  }, [duration]);
  var footerControlsProps = React.useMemo(function () {
    return {
      cardSize: size,
      currentTime,
      endTime,
      isMuted,
      onMuteClick,
      onPlaybackRateClick,
      playbackRate
    };
  }, [currentTime, endTime, isMuted, onMuteClick, onPlaybackRateClick, playbackRate, size]);
  var progressBarProps = React.useMemo(function () {
    return {
      bufferedMedia,
      cursorX,
      duration,
      hoveredTime,
      isDragging,
      isHovering,
      onClick: onProgressBarClick,
      onMouseDown: onProgressBarMouseDown,
      onMouseOver: onProgressBarMouseOver,
      progress,
      showTooltip: isDragging || isHovering
    };
  }, [bufferedMedia, cursorX, duration, hoveredTime, isDragging, isHovering, onProgressBarClick, onProgressBarMouseDown, onProgressBarMouseOver, progress]);
  React.useEffect(function () {
    if (!isDragging && pausedByDrag && mediaRef.current && mediaRef.current.paused) {
      mediaRef.current.play();
      setPausedByDrag(false);
    }
  }, [pausedByDrag, isDragging]);
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MediaComponent, _extends({}, mediaProps, mediaEvents, {
    ref: setRefs,
    autoPlay: autoPlay,
    loop: loop,
    muted: muted
  })), controls && /*#__PURE__*/React__default.createElement(OuterWrap$1, _extends({}, outerWrapTitle, {
    tabIndex: 0,
    hasInteracted: hasInteracted,
    isDragging: isDragging,
    isPlaying: isPlaying
  }, outerWrapEvents), /*#__PURE__*/React__default.createElement(Spinner, {
    size: size,
    isVisible: isBuffering
  }), !hasInteracted ? /*#__PURE__*/React__default.createElement(InnerWrap, null, /*#__PURE__*/React__default.createElement(PlaybackButton, {
    cardSize: size
  })) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ControlsTop, {
    isVisible: !isDragging
  }, /*#__PURE__*/React__default.createElement(InnerWrap, null, isNotSmall && /*#__PURE__*/React__default.createElement(SeekButton, {
    className: classNames.rwControl,
    type: "rewind",
    cardSize: size,
    onClick: function onClick(event) {
      return onSeekClick(event, 'rewind');
    }
  }), /*#__PURE__*/React__default.createElement(PlaybackButton, {
    cardSize: size,
    isPlaying: isPlaying
  }), isNotSmall && /*#__PURE__*/React__default.createElement(SeekButton, {
    className: classNames.ffwControl,
    type: "fastforward",
    cardSize: size,
    onClick: function onClick(event) {
      return onSeekClick(event, 'fastforward');
    }
  })), isNotSmall && /*#__PURE__*/React__default.createElement(FooterControls, footerControlsProps)), /*#__PURE__*/React__default.createElement(ProgressBar, progressBarProps))));
};

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n\n  &::media-controls-start-playback-button {\n    display: none;\n    appearance: none;\n  }\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var VideoDOM = styled__default('video')(_templateObject$h());

var Video = function Video(props) {
  var _useContext = React.useContext(GlobalContext),
      _useContext$state = _useContext.state,
      imageUrl = _useContext$state.imageUrl,
      playsInline = _useContext$state.playsInline,
      videoUrl = _useContext$state.videoUrl;

  var mediaProps = React.useMemo(function () {
    var mediaProps = {
      className: "".concat(classNames.media, " ").concat(classNames.video),
      src: videoUrl,
      playsInline
    };
    if (imageUrl) mediaProps.poster = imageProxy(imageUrl);
    return mediaProps;
  }, [imageUrl, playsInline, videoUrl]);
  return /*#__PURE__*/React__default.createElement(Wrap, _extends({
    className: "".concat(classNames.mediaWrapper, " ").concat(classNames.videoWrapper)
  }, props), /*#__PURE__*/React__default.createElement(Controls, {
    MediaComponent: VideoDOM,
    mediaProps: mediaProps
  }));
};

var Audio = function Audio(props) {
  var _useContext = React.useContext(GlobalContext),
      audioUrl = _useContext.state.audioUrl;

  var mediaProps = React.useMemo(function () {
    return {
      className: "".concat(classNames.media, " ").concat(classNames.audio),
      src: audioUrl
    };
  }, [audioUrl]);
  return /*#__PURE__*/React__default.createElement(ImageComponent, _extends({
    className: "".concat(classNames.mediaWrapper, " ").concat(classNames.audioWrapper)
  }, props), /*#__PURE__*/React__default.createElement(Controls, {
    MediaComponent: "audio",
    mediaProps: mediaProps
  }));
};

var isUrl = function isUrl(url) {
  return getUrlPath(url) !== null;
};

var MEDIA_COMPONENT = {
  video: Video,
  image: ImageComponent,
  audio: Audio
};

var getMediaType = function getMediaType(isAudio, isVideo) {
  if (isAudio) return 'audio';
  if (isVideo) return 'video';
  return 'image';
};

var CardMedia = function CardMedia() {
  var _useContext = React.useContext(GlobalContext),
      _useContext$state = _useContext.state,
      imageUrl = _useContext$state.imageUrl,
      isAudio = _useContext$state.isAudio,
      isVideo = _useContext$state.isVideo;

  var _useState = React.useState(isUrl(imageUrl)),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var mediaType = getMediaType(isAudio, isVideo);
  var MediaComponent = MEDIA_COMPONENT[mediaType];
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(MediaComponent, {
    isLoading: isLoading
  }), isLoading && /*#__PURE__*/React__default.createElement(ImageLoadCatcher, {
    src: imageUrl,
    onLoad: function onLoad() {
      return setIsLoading(false);
    }
  }));
};

function _templateObject5$6() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: ", ";\n"]);

  _templateObject5$6 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$9() {
  var data = _taggedTemplateLiteral(["\n  transition-property: background, border-color;\n  will-change: background, border-color;\n  &:hover {\n    background-color: var(--microlink-hover-background-color, #f5f8fa);\n    border-color: var(--microlink-hover-border-color, #8899A680);\n  }\n"]);

  _templateObject4$9 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$b() {
  var data = _taggedTemplateLiteral(["\n    height: calc(", " * 7/9);\n  "]);

  _templateObject3$b = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$e() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  height: ", ";\n  ", ";\n"]);

  _templateObject2$e = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-color: ", ";\n  transition-property: filter;\n  will-change: filter;\n\n  &&& {\n    color: ", ";\n  }\n\n  &:hover {\n    filter: brightness(90%);\n  }\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var HEIGHT$1 = '382px';

var contrastStyle = function contrastStyle(_ref) {
  var backgroundColor = _ref.backgroundColor,
      color = _ref.color;
  return styled.css(_templateObject$i(), backgroundColor, color, color);
};

var largeStyle = styled.css(_templateObject2$e(), HEIGHT$1, media.mobile(_templateObject3$b(), HEIGHT$1));
var hoverStyle = styled.css(_templateObject4$9());

var rtlStyle = function rtlStyle(_ref2) {
  var cardSize = _ref2.cardSize;
  return styled.css(_templateObject5$6(), isLarge(cardSize) ? 'column-reverse' : 'row-reverse');
};

var baseStyle = styled.css(function () {
  return "\n  max-width: var(--microlink-max-width, 500px);\n  background-color: var(--microlink-background-color, #fff);\n  border-width: var(--microlink-border-width, 1px);\n  border-style: var(--microlink-border-style, solid);\n  border-color: var(--microlink-border-color, #e1e8ed);\n  color: var(--microlink-color, #181919);\n  overflow: hidden;\n  font-family: ".concat(font.sans, ";\n  display: flex;\n  text-decoration: none;\n  opacity: 1;\n  position: relative;\n  transition-duration: ").concat(speed.medium, ";\n  transition-timing-function: ").concat(animation.medium, ";\n\n  &:active,\n  &:hover {\n    outline: 0;\n  }\n");
});
var Element = styled__default('a')(baseStyle, function (_ref3) {
  var isLoading = _ref3.isLoading,
      contrast = _ref3.contrast;
  return !isLoading && !contrast && hoverStyle;
}, function (_ref4) {
  var cardSize = _ref4.cardSize;
  return isLarge(cardSize) && largeStyle;
}, function (_ref5) {
  var direction = _ref5.direction;
  return direction === 'rtl' && rtlStyle;
}, function (_ref6) {
  var backgroundColor = _ref6.backgroundColor,
      color = _ref6.color,
      contrast = _ref6.contrast;
  return contrast && color && backgroundColor && contrastStyle;
}, function (_ref7) {
  var backgroundColor = _ref7.backgroundColor,
      color = _ref7.color,
      contrast = _ref7.contrast;
  return contrast && (!color || !backgroundColor) && hoverStyle;
});
var CardWrap = /*#__PURE__*/React.forwardRef(function (_ref8, ref) {
  var href = _ref8.href,
      rel = _ref8.rel,
      target = _ref8.target,
      restProps = _objectWithoutProperties(_ref8, ["href", "rel", "target"]);

  var _useContext = React.useContext(GlobalContext),
      _useContext$state = _useContext.state,
      backgroundColor = _useContext$state.backgroundColor,
      color = _useContext$state.color,
      title = _useContext$state.title,
      cardSize = _useContext.props.size;

  return /*#__PURE__*/React.createElement(Element, _objectSpread2(_objectSpread2(_objectSpread2({}, restProps.as === 'a' ? {
    href,
    rel,
    target
  } : undefined), restProps), {}, {
    backgroundColor,
    cardSize,
    color,
    ref,
    title
  }));
});
CardWrap.defaultProps = {
  as: 'a',
  rel: 'noopener noreferrer',
  target: '_blank'
};

var useIntersectionObserver = function useIntersectionObserver(enabled, options) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasIntersected = _useState2[0],
      setHasIntersected = _useState2[1];

  var refCallback = React.useCallback(function (node) {
    if (enabled) {
      var onIntersect = function onIntersect(_ref, self) {
        var _ref2 = _slicedToArray(_ref, 1),
            entry = _ref2[0];

        if (entry.isIntersecting) {
          setHasIntersected(true);
          self.unobserve(entry.target);
        }
      };

      var observer = new IntersectionObserver(onIntersect, options);

      if (node !== null) {
        observer.observe(node);
      }
    } else {
      setHasIntersected(true);
    }
  });
  return [hasIntersected, refCallback];
};

var _ref2$3 = /*#__PURE__*/React__default.createElement(CardEmptyState, null);

var _ref3 = /*#__PURE__*/React__default.createElement(CardMedia, null);

var _ref4$2 = /*#__PURE__*/React__default.createElement(CardContent, null);

var Card = function Card(props) {
  var className = props.className,
      fetchData = props.fetchData,
      lazy = props.lazy,
      loading = props.loading,
      mediaProp = props.media,
      setData = props.setData,
      url = props.url,
      restProps = _objectWithoutProperties(props, ["className", "fetchData", "lazy", "loading", "media", "setData", "url"]);

  var mediaProps = React.useMemo(function () {
    return castArray(mediaProp);
  }, [mediaProp]);

  var _useContext = React.useContext(GlobalContext),
      updateState = _useContext.updateState;

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      loadingState = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      iframeMedia = _useState4[0],
      setIframeMedia = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isError = _useState6[0],
      setIsError = _useState6[1];

  var isLoadingUndefined = React.useMemo(function () {
    return loading === undefined;
  }, [loading]);

  var _useMemo = React.useMemo(function () {
    return getApiUrl(_objectSpread2(_objectSpread2({}, props), {}, {
      media: mediaProps
    }));
  }, [mediaProps, props]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      apiUrl = _useMemo2[0],
      apiUrlProps = _useMemo2[1];

  var isLazyEnabled = React.useMemo(function () {
    return isLazySupported && (lazy === true || isObject(lazy));
  }, [lazy]);
  var lazyOptions = React.useMemo(function () {
    return isObject(lazy) ? lazy : undefined;
  }, [lazy]);

  var _useIntersectionObser = useIntersectionObserver(isLazyEnabled, lazyOptions),
      _useIntersectionObser2 = _slicedToArray(_useIntersectionObser, 2),
      hasIntersected = _useIntersectionObser2[0],
      cardRef = _useIntersectionObser2[1];

  var canFetchData = React.useMemo(function () {
    return !isLazyEnabled || isLazyEnabled && hasIntersected;
  }, [isLazyEnabled, hasIntersected]);
  var toFetchData = React.useCallback(function () {
    if (canFetchData) {
      setLoading(true);
      var fetch = fetchData ? mql.fetchFromApi(apiUrl, apiUrlProps) : Promise.resolve({});
      fetch.then(function (_ref) {
        var data = _ref.data;
        return mergeData(data);
      }).catch(function (error) {
        setLoading(false);
        setIsError(true);
        console.error("\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Microlink SDK \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n".concat(error.description, "\n\n").concat(JSON.stringify(error.data), "\n\nid   ").concat(error.headers['x-request-id'], "\nuri  ").concat(error.url, "\ncode ").concat(error.code, " (").concat(error.statusCode, ")\n\nmicrolink.io/").concat(error.code.toLowerCase(), "\n"));
      });
    }
  }, [apiUrl, canFetchData, setData, apiUrlProps.headers['x-api-key'], url]);
  var mergeData = React.useCallback(function (fetchedData) {
    var payload = isFunction(setData) ? setData(fetchedData) : _objectSpread2(_objectSpread2({}, fetchedData), setData);
    var title = payload.title,
        description = payload.description,
        url = payload.url,
        video = payload.video,
        audio = payload.audio,
        image = payload.image,
        logo = payload.logo,
        iframe = payload.iframe;
    var mediaFallback = image || logo || {};
    var media = mediaFallback;
    var videoUrl;
    var audioUrl;
    var isVideo = false;
    var isAudio = false;
    var preferredMedia = getPreferredMedia(payload, mediaProps);

    switch (preferredMedia) {
      case 'audio':
        isAudio = true;
        audioUrl = getUrlPath(audio);
        break;

      case 'video':
        isVideo = true;
        videoUrl = getUrlPath(video);
        break;

      case 'iframe':
        setIframeMedia(iframe);
        break;

      default:
        media = someProp(payload, mediaProps) || mediaFallback;
        break;
    }

    var imageUrl = getUrlPath(media);
    var _media = media,
        color = _media.color,
        backgroundColor = _media.background_color;
    updateState({
      url,
      color,
      title,
      description,
      imageUrl,
      videoUrl,
      audioUrl,
      isVideo,
      isAudio,
      backgroundColor
    });
    setLoading(false);
  }, [mediaProps, setData]);
  React.useEffect(toFetchData, [url, setData, hasIntersected]);
  var isLoading = isLoadingUndefined ? loadingState : loading;

  if (isError) {
    return /*#__PURE__*/React__default.createElement("a", _extends({
      href: url
    }, restProps), url);
  }

  if (iframeMedia) {
    if (!isSSR) {
      iframeMedia.scripts.forEach(function (attrs) {
        var hasScript = document.querySelector("script[src=\"".concat(attrs.src, "\"]"));

        if (!hasScript) {
          var script = document.createElement('script');
          Object.keys(attrs).forEach(function (key) {
            return script[key] = attrs[key];
          });
          document.body.appendChild(script);
        }
      });
    }

    return /*#__PURE__*/React__default.createElement("div", _extends({
      className: classNames.iframe,
      dangerouslySetInnerHTML: {
        __html: iframeMedia.html
      }
    }, restProps));
  }

  return /*#__PURE__*/React__default.createElement(CardWrap, _extends({
    className: "".concat(classNames.main, " ").concat(className).trim(),
    href: url,
    isLoading: isLoading,
    ref: cardRef
  }, restProps), isLoading ? _ref2$3 : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, _ref3, _ref4$2));
};

var Microlink = function Microlink(props) {
  return /*#__PURE__*/React__default.createElement(GlobalState, props, function (otherProps) {
    return /*#__PURE__*/React__default.createElement(Card, otherProps);
  });
};

Microlink.defaultProps = {
  className: '',
  apiKey: undefined,
  autoPlay: true,
  controls: true,
  direction: 'ltr',
  lazy: true,
  loop: true,
  media: ['image', 'logo'],
  fetchData: true,
  muted: true,
  playsInline: true,
  size: 'normal'
};

Object.defineProperty(exports, 'fetchFromApi', {
  enumerable: true,
  get: function () {
    return mql.fetchFromApi;
  }
});
exports.default = Microlink;
exports.getApiUrl = getApiUrl;
exports.imageProxy = imageProxy;

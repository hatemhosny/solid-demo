import { template as _$template } from "solid-js/web";
import { delegateEvents as _$delegateEvents } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { getNextMarker as _$getNextMarker } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<div class=container><h1>Hello, <!$><!/>!</h1><img class=logo alt=logo src=https://livecodes.io/livecodes/assets/templates/solid.svg><p>You clicked <!$><!/> times.</p><button>Click me`);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { createSignal } from "solid-js";
function Counter(props) {
  var _createSignal = createSignal(0),
    _createSignal2 = _slicedToArray(_createSignal, 2),
    count = _createSignal2[0],
    setCount = _createSignal2[1];
  var increment = function increment() {
    return setCount(count() + 1);
  };
  return function () {
    var _el$ = _$getNextElement(_tmpl$),
      _el$2 = _el$.firstChild,
      _el$3 = _el$2.firstChild,
      _el$5 = _el$3.nextSibling,
      _$getNextMarker2 = _$getNextMarker(_el$5.nextSibling),
      _$getNextMarker3 = _slicedToArray(_$getNextMarker2, 2),
      _el$6 = _$getNextMarker3[0],
      _co$ = _$getNextMarker3[1],
      _el$4 = _el$6.nextSibling,
      _el$7 = _el$2.nextSibling,
      _el$8 = _el$7.nextSibling,
      _el$9 = _el$8.firstChild,
      _el$11 = _el$9.nextSibling,
      _$getNextMarker4 = _$getNextMarker(_el$11.nextSibling),
      _$getNextMarker5 = _slicedToArray(_$getNextMarker4, 2),
      _el$12 = _$getNextMarker5[0],
      _co$2 = _$getNextMarker5[1],
      _el$10 = _el$12.nextSibling,
      _el$13 = _el$8.nextSibling;
    _$insert(_el$2, function () {
      return props.name;
    }, _el$6, _co$);
    _$insert(_el$8, count, _el$12, _co$2);
    _el$13.$$click = increment;
    _$runHydrationEvents();
    return _el$;
  }();
}
export default function App() {
  return _$createComponent(Counter, {
    name: "Solid"
  });
}
_$delegateEvents(["click"]);
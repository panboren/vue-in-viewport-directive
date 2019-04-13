"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.enable = exports.disable = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Generated by CoffeeScript 2.4.1
// A dictionary for storing data per-element
var counter, directive, disabled, instances, makeObserver, objIsSame, removeObserver, startObserving, update;
counter = 0;
instances = {}; // Support toggling of global disabled state

disabled = false;

var disable = function disable() {
  return disabled = true;
};

exports.disable = disable;

var enable = function enable() {
  var id, instance, results;
  disabled = false;
  results = [];

  for (id in instances) {
    instance = instances[id];
    results.push(update(instance));
  }

  return results;
}; // Create instance after the element has been added to DOM


exports.enable = enable;

startObserving = function startObserving(el, binding) {
  var id, instance, ref; // If an indvidual instance is disabled, just add the in viewport classes
  // to reveal the element

  if ((binding != null ? (ref = binding.value) != null ? ref.disabled : void 0 : void 0) || directive.defaults.disabled || disabled) {
    el.classList.add.apply(el.classList, ['in-viewport']);
    return;
  } // Create the instance object 


  instance = {
    observer: makeObserver(el, binding)
  }; // Generate a unique id that will be store in a data value on the element

  id = 'i' + counter++;
  el.setAttribute('data-in-viewport', id);
  return instances[id] = instance;
}; // Make the instance


makeObserver = function makeObserver(el, _ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? {} : _ref$value,
      modifiers = _ref.modifiers;
  var callback, margin, observer, root; // Make the default root

  root = value.root || directive.defaults.root;

  root = function () {
    switch (_typeof(root)) {
      case 'function':
        return root();

      case 'string':
        return document.querySelector(root);

      case 'object':
        return root;
      // Expects to be a DOMElement
    }
  }(); // Make the default margin


  margin = typeof value === 'string' ? value : value.margin || directive.defaults.margin; // Make the observer callback

  callback = function callback(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
        entry = _ref3[0];

    return update({
      el: el,
      entry: entry,
      modifiers: modifiers
    });
  }; // Make the observer instance


  observer = new IntersectionObserver(callback, {
    root: root,
    rootMargin: margin,
    threshold: [0, 1]
  }); // Start observing the element and return the observer

  observer.observe(el);
  return observer;
}; // Update element classes based on current intersection state


update = function update(_ref4) {
  var el = _ref4.el,
      entry = _ref4.entry,
      modifiers = _ref4.modifiers;
  var above, add, below, inViewport, remove, root, target, toggle;
  target = entry.boundingClientRect;
  root = entry.rootBounds;
  // Init vars
  add = []; // Classes to add

  remove = []; // Classes to remove
  // Util to DRY up population of add and remove arrays

  toggle = function toggle(bool, klass) {
    if (bool) {
      return add.push(klass);
    } else {
      return remove.push(klass);
    }
  }; // Determine viewport status, see vue-in-viewport-mixin for more info:
  // https://github.com/BKWLD/vue-in-viewport-mixin/blob/master/index.coffee


  inViewport = target.top <= root.bottom && target.bottom > root.top;
  above = target.top < root.top;
  below = target.bottom > root.bottom + 1; // Determine which classes to add

  toggle(inViewport, 'in-viewport');
  toggle(above, 'above-viewport');
  toggle(below, 'below-viewport');

  if (add.length) {
    // Apply classes to element
    el.classList.add.apply(el.classList, add);
  }

  if (remove.length) {
    el.classList.remove.apply(el.classList, remove);
  }

  if (modifiers.once && inViewport) {
    // If set to update "once", remove listeners if in viewport
    return removeObserver(el);
  }
}; // Compare two objects.  Doing JSON.stringify to conpare as a quick way to
// deep compare objects


objIsSame = function objIsSame(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}; // Remove scrollMonitor listeners


removeObserver = function removeObserver(el) {
  var id, instance, ref;
  id = el.getAttribute('data-in-viewport');

  if (instance = instances[id]) {
    if ((ref = instance.observer) != null) {
      ref.disconnect();
    }

    return delete instances[id];
  }
}; // Mixin definition


var _default = directive = {
  // Define overrideable defaults
  defaults: {
    root: void 0,
    margin: '0px 0px -1px 0px',
    disabled: false
  },
  // Init
  inserted: function inserted(el, binding) {
    return startObserving(el, binding);
  },
  // If the value changed, re-init observer
  componentUpdated: function componentUpdated(el, binding) {
    if (objIsSame(binding.value, binding.oldValue)) {
      return;
    }

    removeObserver(el);
    return startObserving(el, binding);
  },
  // Cleanup
  unbind: function unbind(el) {
    return removeObserver(el);
  }
};

exports.default = _default;
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(module,__webpack_exports__,__webpack_require__){"use strict";function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var counter,directive,disabled,instances,makeObserver,objIsSame,removeObserver,startObserving,update,slice=[].slice;counter=0,instances={},disabled=!1;startObserving=function startObserving(el,binding){var id,instance,ref;if(!((null!=binding&&null!=(ref=binding.value)?ref.disabled:void 0)||directive.defaults.disabled||disabled))return instance={observer:makeObserver(el,binding)},id="i"+counter++,el.setAttribute("data-in-viewport",id),instances[id]=instance;el.classList.add.apply(el.classList,["in-viewport"])},makeObserver=function makeObserver(el,_ref){var margin,observer,root,_ref$value=_ref.value,value=void 0===_ref$value?{}:_ref$value,modifiers=_ref.modifiers;return root=value.root||directive.defaults.root,root=function(){switch(_typeof(root)){case"function":return root();case"string":return document.querySelector(root);case"object":return root}}(),margin="string"==typeof value?value:value.margin||directive.defaults.margin,(observer=new IntersectionObserver(function callback(arg){var entry;return entry=_slicedToArray(slice.call(arg,-1),1)[0],update({el:el,entry:entry,modifiers:modifiers})},{root:root,rootMargin:margin,threshold:[0,1]})).observe(el),observer},update=function update(_ref2){var above,add,below,inViewport,remove,root,target,toggle,el=_ref2.el,entry=_ref2.entry,modifiers=_ref2.modifiers;if(target=entry.boundingClientRect,root=entry.rootBounds,add=[],remove=[],toggle=function toggle(bool,klass){return bool?add.push(klass):remove.push(klass)},inViewport=target.top<=root.bottom&&target.bottom>root.top,above=target.top<root.top,below=target.bottom>root.bottom+1,toggle(inViewport,"in-viewport"),toggle(above,"above-viewport"),toggle(below,"below-viewport"),add.length&&el.classList.add.apply(el.classList,add),remove.length&&el.classList.remove.apply(el.classList,remove),modifiers.once&&inViewport)return removeObserver(el)},objIsSame=function objIsSame(obj1,obj2){return JSON.stringify(obj1)===JSON.stringify(obj2)},removeObserver=function removeObserver(el){var id,instance,ref;if(id=el.getAttribute("data-in-viewport"),instance=instances[id])return null!=(ref=instance.observer)&&ref.disconnect(),delete instances[id]},__webpack_exports__.a=directive={defaults:{root:void 0,margin:"0px 0px -1px 0px",disabled:!1},inserted:function inserted(el,binding){return startObserving(el,binding)},componentUpdated:function componentUpdated(el,binding){if(!objIsSame(binding.value,binding.oldValue))return removeObserver(el),startObserving(el,binding)},unbind:function unbind(el){return removeObserver(el)}}},166:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm=__webpack_require__(20),index_coffee=__webpack_require__(14);index_coffee.a.defaults.root=".viewport",vue_esm.default.directive("in-viewport",index_coffee.a);var box_Oncevue_type_script_lang_js_={},componentNormalizer=(__webpack_require__(363),__webpack_require__(34)),component=Object(componentNormalizer.a)(box_Oncevue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport.once",modifiers:{once:!0}}],staticClass:"box"})},[],!1,null,"22afff8a",null);__webpack_exports__.a=component.exports},167:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm=__webpack_require__(20),index_coffee=__webpack_require__(14);index_coffee.a.defaults.root=".viewport",vue_esm.default.directive("in-viewport",index_coffee.a);var box_Shorthandvue_type_script_lang_js_={props:{margin:String}},componentNormalizer=(__webpack_require__(365),__webpack_require__(34)),component=Object(componentNormalizer.a)(box_Shorthandvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport",value:this.margin,expression:"margin"}],staticClass:"box"})},[],!1,null,"abd6c634",null);__webpack_exports__.a=component.exports},168:function(module,exports,__webpack_require__){__webpack_require__(169),__webpack_require__(255),module.exports=__webpack_require__(256)},256:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(27),__webpack_require__(19),__webpack_require__(17),__webpack_require__(46);var _storybook_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(35);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_4__.addParameters)({options:{name:"in-viewport-directive",url:"https://github.com/BKWLD/vue-in-viewport-directive"}});var req=__webpack_require__(351);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(130)(module))},351:function(module,exports,__webpack_require__){var map={"./index.stories.js":352};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=351},352:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_vue__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_box_Always__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(359),__webpack_require__(36)),_box_Once__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(166),_box_Shorthand__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(167),props=function(_ref){var _ref$marginTop=_ref.marginTop,marginTop=void 0===_ref$marginTop?"100vh":_ref$marginTop,_ref$marginBottom=_ref.marginBottom,marginBottom=void 0===_ref$marginBottom?"100vh":_ref$marginBottom,_ref$height=_ref.height,height=void 0===_ref$height?"":_ref$height,_ref$disabled=_ref.disabled,_ref$margin=_ref.margin,margin=void 0===_ref$margin?"0px 0px -1px 0px":_ref$margin;return{marginTop:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("CSS margin-top",marginTop)},marginBottom:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("CSS margin-bottom",marginBottom)},height:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("CSS height",height)},disabled:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",void 0!==_ref$disabled&&_ref$disabled)},margin:{default:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("margin",margin)}}},box="\n  <div class='viewport' style='\n    width: 100vw; height: 100vh;\n    top: 0; left: 0;\n    position: fixed;\n    overflow: auto;\n  '>\n    <box \n      :style='{ \n        marginTop: marginTop,\n        marginBottom: marginBottom,\n        height: height,\n      }'\n      :disabled='disabled'\n      :margin='margin'\n    />\n  </div>",initiallyHiddenBox="\n  <div>\n    <p>👇👇👇👇👇👇👇👇👇</p>\n    ".concat(box,"\n  </div>");Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Examples",module).add("Initially visible",function(){return{components:{box:_box_Always__WEBPACK_IMPORTED_MODULE_3__.a},props:props({marginTop:"0vh"}),template:box}}).add("Scroll to reveal",function(){return{components:{box:_box_Always__WEBPACK_IMPORTED_MODULE_3__.a},props:props({}),template:initiallyHiddenBox}}).add("Trigger once",function(){return{components:{box:_box_Once__WEBPACK_IMPORTED_MODULE_4__.a},props:props({}),template:initiallyHiddenBox}}).add("Initially inactive",function(){return{components:{box:_box_Always__WEBPACK_IMPORTED_MODULE_3__.a},props:props({disabled:!0}),template:initiallyHiddenBox}}).add("Trigger late (px)",function(){return{components:{box:_box_Always__WEBPACK_IMPORTED_MODULE_3__.a},props:props({margin:"-20px 0px"}),template:initiallyHiddenBox}}).add("Trigger late (%)",function(){return{components:{box:_box_Shorthand__WEBPACK_IMPORTED_MODULE_5__.a},props:props({margin:"-20% 0%"}),template:initiallyHiddenBox}}).add("Trigger early",function(){return{components:{box:_box_Always__WEBPACK_IMPORTED_MODULE_3__.a},props:props({margin:"200px 0px"}),template:initiallyHiddenBox}})}.call(this,__webpack_require__(130)(module))},36:function(module,__webpack_exports__,__webpack_require__){"use strict";var vue_esm=__webpack_require__(20),index_coffee=__webpack_require__(14);index_coffee.a.defaults.root=".viewport",vue_esm.default.directive("in-viewport",index_coffee.a);var box_Alwaysvue_type_script_lang_js_={props:{margin:String,disabled:Boolean}},componentNormalizer=(__webpack_require__(360),__webpack_require__(34)),component=Object(componentNormalizer.a)(box_Alwaysvue_type_script_lang_js_,function(){var _h=this.$createElement;return(this._self._c||_h)("div",{directives:[{name:"in-viewport",rawName:"v-in-viewport",value:{margin:this.margin,disabled:this.disabled},expression:"{ margin, disabled }"}],staticClass:"box"})},[],!1,null,"973a42a8",null);__webpack_exports__.a=component.exports},360:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_styles_css_vue_type_style_index_0_id_973a42a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73);__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_styles_css_vue_type_style_index_0_id_973a42a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},361:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(103)(!1)).push([module.i,".box[data-v-973a42a8] {\n\tbox-sizing: border-box;\n\twidth: 300px;\n\theight: 200px;\n\tbackground: linear-gradient(#39d6d4, #1ca7fd);\n\tborder: 10px solid transparent;\n\ttransition: border 1s;\n}\n.box.in-viewport[data-v-973a42a8] {\n\tborder: 10px solid #94d6ff;\n}\n.box.above-viewport[data-v-973a42a8] {\n\tborder-bottom-color: #f3cb5b;\n}\n.box.below-viewport[data-v-973a42a8] {\n\tborder-top-color: #f3cb5b;\n}\n",""])},363:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_styles_css_vue_type_style_index_0_id_22afff8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74);__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_styles_css_vue_type_style_index_0_id_22afff8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},364:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(103)(!1)).push([module.i,".box[data-v-22afff8a] {\n\tbox-sizing: border-box;\n\twidth: 300px;\n\theight: 200px;\n\tbackground: linear-gradient(#39d6d4, #1ca7fd);\n\tborder: 10px solid transparent;\n\ttransition: border 1s;\n}\n.box.in-viewport[data-v-22afff8a] {\n\tborder: 10px solid #94d6ff;\n}\n.box.above-viewport[data-v-22afff8a] {\n\tborder-bottom-color: #f3cb5b;\n}\n.box.below-viewport[data-v-22afff8a] {\n\tborder-top-color: #f3cb5b;\n}\n",""])},365:function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_styles_css_vue_type_style_index_0_id_abd6c634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(75);__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_postcss_styles_css_vue_type_style_index_0_id_abd6c634_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__).a},366:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(103)(!1)).push([module.i,".box[data-v-abd6c634] {\n\tbox-sizing: border-box;\n\twidth: 300px;\n\theight: 200px;\n\tbackground: linear-gradient(#39d6d4, #1ca7fd);\n\tborder: 10px solid transparent;\n\ttransition: border 1s;\n}\n.box.in-viewport[data-v-abd6c634] {\n\tborder: 10px solid #94d6ff;\n}\n.box.above-viewport[data-v-abd6c634] {\n\tborder-bottom-color: #f3cb5b;\n}\n.box.below-viewport[data-v-abd6c634] {\n\tborder-top-color: #f3cb5b;\n}\n",""])},73:function(module,exports,__webpack_require__){var content=__webpack_require__(361);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(104)(content,options);content.locals&&(module.exports=content.locals)},74:function(module,exports,__webpack_require__){var content=__webpack_require__(364);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(104)(content,options);content.locals&&(module.exports=content.locals)},75:function(module,exports,__webpack_require__){var content=__webpack_require__(366);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(104)(content,options);content.locals&&(module.exports=content.locals)}},[[168,1,2]]]);
//# sourceMappingURL=main.640d94d6574975da93c7.bundle.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05def696"],{"39a8":function(t,s,e){},6786:function(t,s,e){"use strict";var a=e("39a8"),n=e.n(a);n.a},"82b9":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"searchTag"},[e("div",{staticClass:"search-tag-container"},[e("a",{staticClass:"tag-image",on:{click:function(s){return t.gotoDetail(t.subject.alt)}}},[e("img",{attrs:{src:t.subject.images.large}})]),e("div",{staticClass:"search-tag-info"},[e("h4",{on:{click:function(s){return t.gotoDetail(t.subject.alt)}}},[t._v(t._s(t.subject.title)+" ( "+t._s(t.subject.year)+" )")]),e("el-rate",{attrs:{disabled:"","show-score":""},model:{value:t.subject.rating.average,callback:function(s){t.$set(t.subject.rating,"average",s)},expression:"subject.rating.average"}}),e("div",{staticClass:"type"},t._l(t.subject.genres,function(s,a){return e("span",{key:a},[t.isLast(a,t.subject.genres.length)?[t._v(t._s(s))]:[t._v(t._s(s)+"/ ")]],2)}),0),e("div",{staticClass:"actor"},t._l(t.subject.casts,function(s,a){return e("span",{key:a},[t.isLast(a,t.subject.casts.length)?[t._v(t._s(s.name))]:[t._v(t._s(s.name)+"/ ")]],2)}),0)],1)])])},n=[],c={data:function(){return{}},props:["subject"],computed:{ranking250:function(){return this.$store.getters.ranking250}},methods:{isLast:function(t,s){return!(t<s-1)},gotoDetail:function(t){window.open(t)}}},i=c,r=(e("6786"),e("2877")),u=Object(r["a"])(i,a,n,!1,null,"8cfd8698",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-05def696.42e90231.js.map
webpackJsonp([1],{IzXd:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,a=t("7+uW"),o=t("zL8q"),c=t.n(o),l=(t("tvR6"),t("mvHQ")),i=t.n(l),u=t("lHA8"),s=t.n(u),d=t("c/Tr"),f=t.n(d),v=t("2aIq"),p=t.n(v),h=t("Xxa5"),m=t.n(h),x=t("//Fk"),_=t.n(x),k=t("exGp"),b=this,y=[{label:"ES6",children:[{label:"参数默认值",code:{text:"function foo(height=50, color='red'){\n                        //执行后显示参数值\n                    }\n                    ",params:[{key:"color",value:"red"},{key:"height",value:""}],func:function(e,n){var t=n.color,r=void 0===t?"red":t,a=n.height,o=void 0===a?50:a;e.text="height:"+o+",color:"+r}}}]},{label:"ES7",children:[]},{label:"ES8",children:[]},{label:"ES9",children:[]},{label:"特异用法",children:[{label:"不使用if-eles按条件创建不同的数组",code:{text:"function foo(insert_num,text){\n                        let a=[];\n                        a.length=insert_num;\n                        a.fill(text);\n                        \n                        let arr=[\n                            'a',\n                            ...a,\n                            'b',\n                        ]\n                        //执行后显示arr值\n                    }\n                    ",params:[{key:"insert_num",value:0},{key:"text",value:""}],func:function(e,n){var t=n.insert_num,r=void 0===t?0:t,a=n.text,o=void 0===a?"":a;e.text="";var c=[];c.length=r,c.fill(o);var l=["a"].concat(c,["b"]);e.text=l}}},{label:"直接显示emoji",code:{text:"function foo(height=50, color='red'){\n                        //执行后显示参数值\n                    }\n                    😆  😺   👨    👿   \n                    ",params:[{key:"color",value:"red"},{key:"height",value:""}],func:function(e,n){var t=n.color,r=void 0===t?"red":t,a=n.height,o=void 0===a?50:a;e.text="height:"+o+",color:"+r}}}]},{label:"最佳实践",children:[{label:"串行异步调用",code:{text:"function foo(loop=1){\n                        function p(){\n                            return new Promise(function(resolve, reject){\n                                setTimeout(resolve, 1000);\n                            });\n                        }\n                        for (let i = 0; i < loop; i++) {\n                            await p();\n                            //输出每次任务完成\n                        }\n                    }\n                    ",params:[{key:"loop",value:1}],func:(r=t.n(k)()(m.a.mark(function e(n,t){var r,a,o=t.loop,c=void 0===o?1:o;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=function(){return new _.a(function(e,n){setTimeout(e,1e3)})},n.text="",a=0;case 3:if(!(a<c)){e.next=10;break}return e.next=6,r();case 6:n.text+="任务"+(a+1)+"完成\n";case 7:a++,e.next=3;break;case 10:case"end":return e.stop()}},e,b)})),function(e,n){return r.apply(this,arguments)})}},{label:"string padding",code:{text:"function foo(len=1,char='')=>{\n                        let str='测试文字';\n                        str=str.padStart(len,char);\n                        //输出结果\n                    }\n                    ",params:[{key:"len",value:1},{key:"char",value:""}],func:function(e,n){var t=n.len,r=void 0===t?1:t,a=n.char,o=void 0===a?"":a;e.text="";var c="测试文字";c=c.padStart(r,o),e.text=c,"123".padStart(8,0)}}},{label:"数组去重",code:{text:"function foo()=>{\n                        let arr=[1,2,3,3,3,3,4,4,4,5,6];\n                        let arr1=[1,2,{a:1},{a:1},{a:2}];\n                        let o1={a:1};\n                        let o2={a:2};\n                        let arr2=[1,2,o1,o1,o2];\n\n                        arr=Array.from(new Set(arr));\n                        arr1=Array.from(new Set(arr1));\n                        arr2=Array.from(new Set(arr2));\n                        //输出结果\n                    }\n                    ",params:[],func:function(e,n){p()(n),e.text="";var t=[1,2,3,3,3,3,4,4,4,5,6],r=[1,2,{a:1},{a:1},{a:2}],a={a:1},o=[1,2,a,a,{a:2}];t=f()(new s.a(t)),r=f()(new s.a(r)),o=f()(new s.a(o)),e.text="arr:"+i()(t)+"\n                        arr1:"+i()(r)+"\n                        arr2:"+i()(o)+"\n                        "}}}]}],g={name:"App",components:{},data:function(){return{codes:y,current_code:null,result:{text:""}}},mounted:function(){},methods:{run:function(){var e={};this.current_code.code.params.forEach(function(n){n.value&&(e[n.key]=n.value)}),this.current_code.code.func(this.result,e)},clickCode:function(e){this.result.text="",e.code?this.current_code=e:this.current_code=null}}},w={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"menu"},[t("el-tree",{attrs:{data:e.codes},on:{"node-click":e.clickCode}})],1),e._v(" "),e.current_code?t("div",{staticClass:"code"},[e._v("\n    "+e._s(e.current_code.code.text)+"\n  ")]):e._e(),e._v(" "),e.current_code?t("div",{staticClass:"run"},[t("div",{staticClass:"params"},[e._l(e.current_code.code.params,function(n){return t("el-input",{key:n.key,attrs:{placeholder:"请输入内容"},model:{value:n.value,callback:function(t){e.$set(n,"value",t)},expression:"item.value"}},[t("template",{slot:"prepend"},[e._v(e._s(n.key))])],2)}),e._v(" "),t("el-button",{on:{click:e.run}},[e._v("执行")])],2),e._v(" "),t("div",{staticClass:"result"},[e._v(e._s(e.result.text))])]):e._e()])},staticRenderFns:[]};var S=t("VU/8")(g,w,!1,function(e){t("IzXd"),t("b5EP")},"data-v-c64f4990",null).exports;a.default.config.productionTip=!1,a.default.use(c.a),new a.default({el:"#app",components:{App:S},template:"<App/>"})},b5EP:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.ee4508fc9d3df98e58fb.js.map
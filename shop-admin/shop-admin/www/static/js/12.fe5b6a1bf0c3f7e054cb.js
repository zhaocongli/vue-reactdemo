webpackJsonp([12],{"0T94":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("BO1k"),s=i.n(a),l=i("Dd8w"),o=i.n(l),c=i("NYxO"),n=i("wliq"),d=i("vLgD"),r={data:function(){return{form:{title:"",begintime:"",endtime:"",first_cateid:"",second_cateid:"",goodsid:"",status:1},formLabelWidth:"120px",seckillId:this.$route.params.id,second_catelist:[],goodslist:[],dateValue:[]}},mounted:function(){this.changeBreadList(),this.requestCateList()},computed:o()({},Object(c.c)({cateList:"cate/cateList"})),methods:o()({},Object(c.b)({requestBreadList:"breadListActions",requestSeckillList:"seckill/seckillListActions",requestCateList:"cate/cateListActions"}),{changeCate:function(t){this.second_catelist=[],this.goodslist=[],this.form.second_cateid="",this.form.goodsid="";var e=!0,i=!1,a=void 0;try{for(var l,o=s()(this.cateList);!(e=(l=o.next()).done);e=!0){var c=l.value;t==c.id&&(this.second_catelist=c.children)}}catch(t){i=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw a}}console.log(this.second_catelist)},changeSecondCate:function(){var t=this;this.goodslist=[],this.form.goodsid="",Object(d.L)({fid:this.form.first_cateid,sid:this.form.second_cateid}).then(function(e){t.goodslist=e.data.list})},confirm:function(){var t=this;this.form.begintime=this.dateValue[0],this.form.endtime=this.dateValue[1],Object(d.g)(this.form).then(function(e){Object(n.b)(e.data.msg),t.requestSeckillList(),t.cancel()})},seckillDetail:function(){var t=this;Object(d.G)({id:this.seckillId}).then(function(e){t.changeCate(e.data.list.first_cateid),Object(d.L)({fid:e.data.list.first_cateid,sid:e.data.list.second_cateid}).then(function(e){t.goodslist=e.data.list}),t.form=e.data.list,t.dateValue=[],t.dateValue.push(t.form.begintime),t.dateValue.push(t.form.endtime)})},update:function(){var t=this;this.form.id=this.seckillId,this.form.begintime=this.dateValue[0],this.form.endtime=this.dateValue[1],Object(d.T)(this.form).then(function(e){Object(n.b)(e.data.msg),t.requestSeckillList(),t.cancel(),t.$router.push("/seckill")})},cancel:function(){this.form={title:"",begintime:"",endtime:"",first_cateid:"",second_cateid:"",goodsid:"",status:1},this.second_catelist=[],this.goodslist=[],this.dateValue=""},changeBreadList:function(){void 0==this.seckillId?(this.requestBreadList([{path:"/",name:"首页"},{path:"/seckill",name:"活动列表"}]),this.cancel()):0==this.seckillId?this.requestBreadList([{path:"/",name:"首页"},{path:"/seckill",name:"活动列表"},{name:"活动添加"}]):(this.requestBreadList([{path:"/",name:"首页"},{path:"/seckill",name:"活动列表"},{name:"活动修改"}]),this.seckillDetail())}}),watch:{$route:{deep:!0,handler:function(t){this.seckillId=t.params.id,this.changeBreadList()}}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"活动名称","label-width":t.formLabelWidth}},[i("el-col",{attrs:{span:8}},[i("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"活动时间","label-width":t.formLabelWidth},model:{value:t.form.img,callback:function(e){t.$set(t.form,"img",e)},expression:"form.img"}},[i("div",{staticClass:"block"},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd",format:"yyyy-MM-dd"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1)]),t._v(" "),i("el-form-item",{attrs:{label:"一级分类","label-width":t.formLabelWidth}},[i("el-select",{on:{change:t.changeCate},model:{value:t.form.first_cateid,callback:function(e){t.$set(t.form,"first_cateid",e)},expression:"form.first_cateid"}},[i("el-option",{attrs:{label:"--请选择--",value:"",disabled:""}}),t._v(" "),t._l(t.cateList,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"二级分类","label-width":t.formLabelWidth}},[i("el-select",{on:{change:t.changeSecondCate},model:{value:t.form.second_cateid,callback:function(e){t.$set(t.form,"second_cateid",e)},expression:"form.second_cateid"}},[i("el-option",{attrs:{label:"--请选择--",value:"",disabled:""}}),t._v(" "),t._l(t.second_catelist,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"商品","label-width":t.formLabelWidth}},[i("el-select",{model:{value:t.form.goodsid,callback:function(e){t.$set(t.form,"goodsid",e)},expression:"form.goodsid"}},[i("el-option",{attrs:{label:"--请选择--",value:"",disabled:""}}),t._v(" "),t._l(t.goodslist,function(t){return i("el-option",{key:t.id,attrs:{label:t.goodsname,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":t.formLabelWidth}},[i("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ccc","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),t._v(" "),i("el-form-item",{attrs:{"label-width":t.formLabelWidth}},[0==t.$route.params.id?i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")]):i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)},staticRenderFns:[]};var f=i("VU/8")(r,m,!1,function(t){i("mCLc")},"data-v-77a43a7e",null);e.default=f.exports},mCLc:function(t,e){}});
//# sourceMappingURL=12.fe5b6a1bf0c3f7e054cb.js.map
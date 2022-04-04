(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e570ea04"],{"7abe":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticClass:"grid-row school",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"grid-block"},[i("div",{staticStyle:{padding:"0 20px"}},[i("img",{attrs:{src:t.school.cover,width:"300px",height:"320px"}})]),i("div",{staticStyle:{flex:"1"}},[i("div",{staticStyle:{color:"#eee","font-size":"18px","line-height":"32px",padding:"10px"}},[t._v("学校名称： "+t._s(t.school.name))]),i("div",{staticStyle:{color:"#eee","font-size":"18px","line-height":"32px",padding:"10px"}},[i("div",{staticClass:"intro",domProps:{innerHTML:t._s(t.school.intro)}})]),i("div",{staticStyle:{color:"#eee","font-size":"14px","line-height":"24px",padding:"10px"}},[t._v("学校地址： "+t._s(t.school.address))]),i("div",{staticStyle:{color:"#eee","font-size":"14px","line-height":"24px",padding:"10px"}},[t._v("联系人： "+t._s(t.school.linkman))]),i("div",{staticStyle:{color:"#eee","font-size":"14px","line-height":"24px",padding:"10px"}},[t._v("联系电话： "+t._s(t.school.phone))])])])],1),i("el-row",{staticClass:"grid-row even",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"grid-block"},[i("el-divider",[t._v("推荐课程")]),t._l(t.courseList,(function(e){return i("div",{key:e.id,staticClass:"grid-content grid-book",on:{click:function(i){return t.log("首页","课程模块","点击:"+e.name)}}},[i("div",{staticStyle:{"line-height":"160px"}},[i("router-link",{attrs:{to:{path:"/courseDetail",query:{courseId:e.id}}}},[i("img",{attrs:{src:t.getCoverUrl(e.cover),alt:e.name,width:"100px"}})])],1),i("div",[i("div",{staticStyle:{"font-size":"12px"}},[t._v("《"+t._s(e.name)+"》")]),i("div",{staticClass:"course-intro",domProps:{innerHTML:t._s(e.intro)}})])])})),i("div",{staticClass:"grid-content grid-book",staticStyle:{"font-size":"20px","line-height":"160px","text-align":"center",color:"#666"},on:{click:function(e){return t.log("首页","课程模块","点击:更多")}}},[i("router-link",{attrs:{to:"/CourseList"}},[t._v("更多")])],1)],2)],1),i("el-row",{staticClass:"grid-row even",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"grid-block"},[i("el-divider",[t._v("名师风采")]),t._l(t.teacherList,(function(e){return i("div",{key:e.id,staticClass:"grid-content grid-book",on:{click:function(i){return t.log("首页","教师模块","点击:"+e.name)}}},[i("div",{staticStyle:{"line-height":"160px"}},[i("router-link",{attrs:{to:{path:"/teacherDetail",query:{teacherId:e.id}}}},[i("img",{attrs:{src:e.photo,alt:e.name,height:"160px"}})])],1),i("div",[i("div",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.name))])])])})),i("div",{staticClass:"grid-content grid-book",staticStyle:{"font-size":"20px","line-height":"160px","text-align":"center",color:"#666"},on:{click:function(e){return t.log("首页","教师模块","点击:更多")}}},[i("router-link",{attrs:{to:"/teacherList"}},[t._v("更多")])],1)],2)],1),i("el-row",{staticClass:"grid-row odd",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"grid-block"},[i("el-divider",{staticClass:"odd"},[t._v("精品图书")]),t._l(t.bookList,(function(e){return i("div",{key:e.id,staticClass:"grid-content grid-book",on:{click:function(i){return t.log("首页","图书模块","点击:"+e.name)}}},[i("div",{staticStyle:{"line-height":"160px"}},[i("router-link",{attrs:{to:{path:"/bookDetail",query:{bookId:e.id}}}},[i("img",{attrs:{src:t.getCoverUrl(e.cover),alt:e.name,width:"100px"}})])],1),i("div",[i("div",{staticStyle:{"font-size":"12px"}},[t._v("《"+t._s(e.name)+"》")]),i("div",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.author?e.author:"无名")+" 著")]),i("div",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.sub_title)+" ")])])])})),i("div",{staticClass:"grid-content grid-book",staticStyle:{"font-size":"14px","line-height":"160px","text-align":"center",color:"#666"},on:{click:function(e){return t.log("首页","图书模块","点击:更多")}}},[i("router-link",{attrs:{to:"/bookList"}},[t._v("更多")])],1)],2)],1),i("el-row",{staticClass:"grid-row even",attrs:{type:"flex",justify:"center"}},[i("el-col",{staticClass:"grid-block"},[i("el-divider",[t._v("线上视频")]),t._l(t.videoList,(function(e){return i("div",{key:e.id,staticClass:"grid-content grid-book",on:{click:function(i){return t.log("首页","视频模块","点击:"+e.name)}}},[i("div",{staticStyle:{"line-height":"160px"}},[i("router-link",{attrs:{to:{path:"/videoDetail",query:{id:e.id}}}},[i("img",{attrs:{src:t.getCoverUrl(e.cover),alt:e.name,width:"100px"}})])],1),i("div",[i("div",{staticStyle:{"font-size":"12px"}},[t._v(t._s(e.name))])])])})),i("div",{staticClass:"grid-content grid-book",staticStyle:{"font-size":"20px","line-height":"160px","text-align":"center",color:"#666"},on:{click:function(e){return t.log("首页","视频模块","点击:更多")}}},[i("router-link",{attrs:{to:"/videoList"}},[t._v("更多")])],1)],2)],1)],1)},s=[],r=i("2f3b"),n=i("8dd4"),c=i("36d5"),l=i("2f62");function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={data:function(){return{schoolId:null,school:{},bookList:[],courseList:[],teacherList:[],videoList:[]}},created:function(){this.getSchools(),this.getBookList(),this.getCourseList(),this.getTeacherList(),this.getVideoList()},computed:d({},Object(l["b"])(["activeSchoolId"])),watch:{activeSchoolId:function(t){this.getSchools(),this.getCourseList(),this.getTeacherList()}},methods:{getSchools:function(){var t=this;Object(c["c"])({page:1,size:1,id:this.activeSchoolId}).then((function(e){t.school=e.results[0]}))},getBookList:function(){var t=this;Object(n["a"])({page:1,size:5}).then((function(e){t.bookList=e.results}))},getCourseList:function(){var t=this;Object(c["b"])({page:1,size:5,school:this.activeSchoolId}).then((function(e){t.courseList=e.results}))},getTeacherList:function(){var t=this;Object(c["d"])({page:1,size:5,school:this.activeSchoolId}).then((function(e){t.teacherList=e.results}))},getVideoList:function(){var t=this;Object(n["b"])({page:1,size:5}).then((function(e){t.videoList=e.results}))},getCoverUrl:function(t){return""+t},log:function(t,e,i){Object(r["c"])({group:t,sub_group:e,content:i})}}},g=h,p=(i("fb7c"),i("0c7c")),v=Object(p["a"])(g,o,s,!1,null,"3fc58e8d",null);e["default"]=v.exports},"8dd4":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return r}));var o=i("b775");function s(t){return Object(o["a"])({url:"/shop/api/books/",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/shop/api/videos/",method:"get",params:t})}},c7fa:function(t,e,i){},fb7c:function(t,e,i){"use strict";var o=i("c7fa"),s=i.n(o);s.a}}]);
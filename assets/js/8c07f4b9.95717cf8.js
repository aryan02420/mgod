"use strict";(self.webpackChunkmgod=self.webpackChunkmgod||[]).push([[873],{7919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),o=n(1151);const r={title:"Meta Fields",sidebar_position:4},i=void 0,d={id:"features/meta_fields",title:"Meta Fields",description:"Meta fields are those fields that tracks extra information about the document which can be helpful to determine the state of a document.",source:"@site/../docs/features/meta_fields.md",sourceDirName:"features",slug:"/features/meta_fields",permalink:"/mgod/docs/features/meta_fields",draft:!1,unlisted:!1,editUrl:"https://github.com/aryan02420/mgod/tree/main/docs/../docs/features/meta_fields.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Meta Fields",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Field Transformers",permalink:"/mgod/docs/features/field_transformers"},next:{title:"Union Types",permalink:"/mgod/docs/advanced-guide/union_types"}},a={},c=[{value:"createdAt",id:"createdat",level:2},{value:"updatedAt",id:"updatedat",level:2},{value:"__v",id:"__v",level:2}];function l(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Meta fields are those fields that tracks extra information about the document which can be helpful to determine the state of a document."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"mgod"})," supports the following meta fields -"]}),"\n",(0,s.jsxs)(t.p,{children:["We will assume the following ",(0,s.jsx)(t.code,{children:"User"})," type for the rest of this section -"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type User struct {\n\tName     string\n\tEmailID  string `bson:"emailId"`\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"createdat",children:"createdAt"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Format - ",(0,s.jsx)(t.code,{children:"ISO String"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is the meta field that stores the timestamp of the document creation. This field is automatically added (if not present in the input) to the schema if the ",(0,s.jsx)(t.code,{children:"SchemaOptions.Timestamps"})," is set to true."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'schemaOpts := schemaopt.SchemaOptions{\n\tCollection: "users",\n\tTimestamps: true,\n}\n\nuserDoc := User{\n\tName: "Gopher",\n\tEmailID: "gopher@mgod.com",\n}\nuser, _ := userModel.InsertOne(context.TODO(), userDoc)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\t"_id": ObjectId("65697705d4cbed00e8aba717"),\n\t"name": "Gopher",\n\t"emailId": "gopher@mgod.com",\n\t"createdAt": ISODate("2023-12-01T11:32:19.290Z"),\n\t"updatedAt": ISODate("2023-12-01T11:32:19.290Z"),\n\t"__v": 0\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"updatedat",children:"updatedAt"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Format - ",(0,s.jsx)(t.code,{children:"ISO String"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is the meta field that stores the timestamp of the document updation. This field is automatically upserted (if not present in the input) to the schema if the ",(0,s.jsx)(t.code,{children:"SchemaOptions.Timestamps"})," is set to true."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'schemaOpts := schemaopt.SchemaOptions{\n\tCollection: "users",\n\tTimestamps: true,\n}\n\nresult, _ := userModel.UpdateMany(context.TODO(), bson.M{"emailId": "gopher@mgod.com"}, bson.M{"$inc": {"__v": 1}})\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"mongo.UpdateResult{\n\tMatchedCount: 1,\n\tModifiedCount: 1,\n\tUpsertedCount: 0,\n}\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// User Doc\n{\n\t"_id": ObjectId("65697705d4cbed00e8aba717"),\n\t"name": "Gopher",\n\t"emailId": "gopher@mgod.com",\n\t"createdAt": ISODate("2023-12-01T11:32:19.290Z"),\n\t"updatedAt": ISODate("2023-12-02 10:40:00.670Z"),\n\t"__v": 1\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"__v",children:"__v"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Format - ",(0,s.jsx)(t.code,{children:"Number"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is the field that stores the version of the document. This field is automatically added (if not present in the input) to the schema if the ",(0,s.jsx)(t.code,{children:"SchemaOptions.VersionKey"})," is set to true. This field starts with a default value of 0."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'schemaOpts := schemaopt.SchemaOptions{\n\tCollection: "users",\n\tVersionKey: true\n}\n\nuserDoc := User{\n\tName: "Gopher",\n\tEmailID: "gopher@mgod.com",\n}\nuser, _ := userModel.InsertOne(context.TODO(), userDoc)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\t"_id": ObjectId("65697705d4cbed00e8aba717"),\n\t"name": "Gopher",\n\t"emailId": "gopher@mgod.com",\n\t"__v": 0\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.code,{children:"VersionKey"})," is set to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'schemaOpts := schemaopt.SchemaOptions{\n\tCollection: "users",\n\tVersionKey: false\n}\n\nuserDoc := User{\n\tName: "Gopher",\n\tEmailID: "gopher@mgod.com",\n}\nuser, _ := userModel.InsertOne(context.TODO(), userDoc)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n\t"_id": ObjectId("65697705d4cbed00e8aba717"),\n\t"name": "Gopher",\n\t"emailId": "gopher@mgod.com"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(7294);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
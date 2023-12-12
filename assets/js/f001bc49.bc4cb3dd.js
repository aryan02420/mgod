"use strict";(self.webpackChunkmgod=self.webpackChunkmgod||[]).push([[32],{4906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var s=n(5893),i=n(1151);const d={title:"Field Options",sidebar_position:2},o=void 0,r={id:"features/field_options",title:"Field Options",description:"Field Options are custom schema options available at field level (for fields of struct type). These options either modifies the schema or adds validations to the field on which it is applied.",source:"@site/../docs/features/field_options.md",sourceDirName:"features",slug:"/features/field_options",permalink:"/mgod/docs/features/field_options",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Field Options",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Schema Options",permalink:"/mgod/docs/features/schema_options"},next:{title:"Field Transformers",permalink:"/mgod/docs/features/field_transformers"}},a={},l=[{value:"__id",id:"__id",level:2},{value:"Example",id:"example",level:3},{value:"required",id:"required",level:2},{value:"Example",id:"example-1",level:3},{value:"default",id:"default",level:2},{value:"Example",id:"example-2",level:3}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Field Options are custom schema options available at field level (for fields of struct type). These options either modifies the schema or adds validations to the field on which it is applied."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"mgod"})," supports the following field options -"]}),"\n",(0,s.jsx)(t.h2,{id:"__id",children:"__id"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["BSON Tag: ",(0,s.jsx)(t.code,{children:"mgoID"})]}),"\n",(0,s.jsxs)(t.li,{children:["Accepts Type: ",(0,s.jsx)(t.code,{children:"bool"})]}),"\n",(0,s.jsxs)(t.li,{children:["Default Value: ",(0,s.jsx)(t.code,{children:"true"})," for custom type fields"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It defines if ",(0,s.jsx)(t.code,{children:"_id"})," field needs to be added in a object."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This option is only applicable for fields holding structs."})}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type UserProject struct {\n\tName string\n}\n\ntype Metadata struct {\n\tTeamIDs  []string      `bson:"teamIds"`\n\tProjects []UserProject `mgoID:"false"`\n}\n\ntype User struct {\n\tName     string\n\tMetadata *Metadata `bson:"meta"`\n}\n\nuserDoc := User{\n\tName: "Gopher",\n\tMetadata: Metadata{\n\t\tTeamIDs: []string{"team1", "team2"},\n\t\tProjects: []UserProject{\n\t\t\tUserProject{Name: "Project 1"},\n\t\t\tUserProject{Name: "Project 2"},\n\t\t},\n\t},\n}\n\nuser, _ := userModel.InsertOne(context.TODO(), userDoc)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'{\n\t"_id": ObjectId("65697705d4cbed00e8aba717"),\n\t"name": "Gopher",\n\t"meta": {\n\t\t"_id": ObjectId("65697705d4cbed00e8aba718"),\n\t\t"teamIds": ["team1", "team2"],\n\t\t"projects": [\n\t\t\t{\n\t\t\t\t"name": "Project 1"\n\t\t\t},\n\t\t\t{\n\t\t\t\t"name": "Project 2"\n\t\t\t}\n\t\t]\n\t}\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["See how ",(0,s.jsx)(t.code,{children:"_id"})," field is added for ",(0,s.jsx)(t.code,{children:"meta"})," object because ",(0,s.jsx)(t.code,{children:"mgoID"})," is true by default for struct type fields. Also, note how ",(0,s.jsx)(t.code,{children:"_id"})," field is skipped for ",(0,s.jsx)(t.code,{children:"projects"})," object as it was set to false explicitly in type declaration."]}),"\n",(0,s.jsx)(t.h2,{id:"required",children:"required"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Accepts Type: ",(0,s.jsx)(t.code,{children:"bool"})]}),"\n",(0,s.jsxs)(t.li,{children:["Default Value: ",(0,s.jsx)(t.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It defines if a field is required or not. The option can be invalidated using ",(0,s.jsx)(t.code,{children:"omitempty"})," property of ",(0,s.jsx)(t.code,{children:"bson"})," tag."]}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type User struct {\n\tName   string\n\tAge    int32\n\tHeight *float `bson:",omitempty"`\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the above type, height field is set to not required."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'userDoc := User{\n\tName: "Gopher",\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The above doc will throw error because ",(0,s.jsx)(t.code,{children:"Age"})," field is required."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'userDoc := User{\n\tName: "Gopher",\n\tAge: 18,\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This doc will work fine."}),"\n",(0,s.jsx)(t.h2,{id:"default",children:"default"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["BSON Tag: ",(0,s.jsx)(t.code,{children:"mgoDefault"})]}),"\n",(0,s.jsxs)(t.li,{children:["Accepts Type: ",(0,s.jsx)(t.code,{children:"string"})]}),"\n",(0,s.jsxs)(t.li,{children:["Default Value: ",(0,s.jsx)(t.code,{children:"nil"})]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"It provides the default value for a field. The value of this option is used when the field is not present in the input document."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"This option is applicable only for fields that are not of custom type (custom structs)."})}),"\n",(0,s.jsx)(t.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'type UserProject struct {\n\tName string\n}\n\ntype Metadata struct {\n\tTeamIDs  []string      `bson:"teamIds"`\n\tProjects *[]UserProject `mgoID:"false" mgoDefault:"[]"`\n}\n\ntype User struct {\n\tName     string\n\tAge      *int32 `mgoDefault:"18"`\n\tMetadata *Metadata `bson:"meta"`\n}\n\nuserDoc := User{\n\tName: "Gopher",\n\tAge: 30,\n\tMetadata: Metadata{\n\t\tTeamIDs: []string{"team1", "team2"},\n\t},\n}\n\nuser, _ := userModel.InsertOne(context.TODO(), userDoc)\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Output:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'{\n\t"_id": ObjectId("65697705d4cbed00e8aba717"),\n\t"name": "Gopher",\n\t"age": 30,\n\t"meta": {\n\t\t"_id": ObjectId("65697705d4cbed00e8aba718"),\n\t\t"teamIds": ["team1", "team2"],\n\t\t"projects": []\n\t}\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["See how the value of ",(0,s.jsx)(t.code,{children:"age"})," field was used because it was provided in the input doc and how the default value of ",(0,s.jsx)(t.code,{children:"projects"})," field is used because it was missing from the input doc."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const i={},d=s.createContext(i);function o(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);
import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const d=({tabs:t,defaultActiveTab:N,onTabChange:c,className:w="",orientation:m="horizontal"})=>{const[r,j]=T.useState(N||(t.length>0?t[0].id:"")),k=a=>{j(a),c&&c(a)},s=m==="vertical";return e.jsxs("div",{className:`${w} ${s?"flex flex-row":""}`,children:[e.jsx("div",{role:"tablist","aria-orientation":m,className:`
          ${s?"flex flex-col border-r border-gray-200 dark:border-gray-700 pr-4 space-y-2":"flex flex-row border-b border-gray-200 dark:border-gray-700 space-x-8"}
        `,children:t.map(a=>e.jsx("button",{role:"tab",id:`tab-${a.id}`,"aria-selected":r===a.id,"aria-controls":`panel-${a.id}`,disabled:a.disabled,onClick:()=>!a.disabled&&k(a.id),className:`
              py-2 px-1 text-sm font-medium
              ${a.disabled?"cursor-not-allowed text-gray-400 dark:text-gray-600":"cursor-pointer"}
              ${r===a.id?"text-primary-600 dark:text-primary-400 border-primary-500":"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600"}
              ${s?`text-left ${r===a.id?"border-r-2 -mr-[17px]":""}`:`${r===a.id?"border-b-2 -mb-[1px]":""}`}
            `,children:a.label},a.id))}),e.jsx("div",{className:`${s?"ml-8 flex-1":"mt-4"}`,children:t.map(a=>e.jsx("div",{role:"tabpanel",id:`panel-${a.id}`,"aria-labelledby":`tab-${a.id}`,hidden:r!==a.id,className:r===a.id?"animate-fadeIn":"",children:a.content},a.id))})]})};d.__docgenInfo={description:`Tabs Component
A navigation component that allows switching between different content sections`,methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items"},defaultActiveTab:{required:!1,tsType:{name:"string"},description:"Default active tab ID"},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Callback when a tab is selected"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name for the tabs container",defaultValue:{value:"''",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Orientation of the tabs
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}}}};const D={title:"Navigation/Tabs",component:d,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]}}},l=[{id:"tab1",label:"Account",content:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Account Settings"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"Manage your account settings and preferences."})]})},{id:"tab2",label:"Password",content:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Password"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"Change your password and security settings."})]})},{id:"tab3",label:"Notifications",content:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Notifications"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 dark:text-gray-400",children:"Configure how you receive notifications."})]})},{id:"tab4",label:"Disabled",content:e.jsx("div",{className:"p-4",children:"Disabled tab content"}),disabled:!0}],i={args:{tabs:l,orientation:"horizontal"}},o={args:{tabs:l,orientation:"vertical"}},n={args:{tabs:l,orientation:"horizontal"},parameters:{docs:{description:{story:"Preview of the Tabs component in dark mode, showing how it adapts to dark themes."}}},render:t=>e.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3",children:"Light Mode"}),e.jsx(d,{...t})]}),e.jsxs("div",{className:"p-6 bg-gray-900 rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3 text-white",children:"Dark Mode"}),e.jsx("div",{className:"dark",children:e.jsx(d,{...t})})]})]})};var p,g,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    orientation: 'horizontal'
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,b,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    orientation: 'vertical'
  }
}`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var y,v,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tabs: sampleTabs,
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Preview of the Tabs component in dark mode, showing how it adapts to dark themes.'
      }
    }
  },
  render: args => <div className="grid grid-cols-1 gap-6">
      <div className="p-6 bg-white rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <Tabs {...args} />
      </div>
      <div className="p-6 bg-gray-900 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode</h3>
        <div className="dark">
          <Tabs {...args} />
        </div>
      </div>
    </div>
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const C=["Horizontal","Vertical","DarkModePreview"];export{n as DarkModePreview,i as Horizontal,o as Vertical,C as __namedExportsOrder,D as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-D4lIrffr.js";const S=({id:a,title:m,content:p,isOpen:s=!1,onToggle:o})=>{const u=()=>{o&&o(a)};return e.jsxs("div",{className:"border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("button",{id:`accordion-button-${a}`,"aria-expanded":s,"aria-controls":`accordion-content-${a}`,className:"flex w-full justify-between py-4 px-4 text-left font-medium text-text-primary hover:bg-background-secondary transition-colors",onClick:u,children:[e.jsx("span",{className:"text-sm font-medium",children:m}),e.jsx("span",{className:"ml-6 flex items-center",children:e.jsx("svg",{className:`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${s?"rotate-180":""}`,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})})]}),e.jsx("div",{id:`accordion-content-${a}`,"aria-labelledby":`accordion-button-${a}`,className:`overflow-hidden transition-all duration-200 ${s?"max-h-96":"max-h-0"}`,hidden:!s,children:e.jsx("div",{className:"py-4 px-4 text-sm text-text-secondary",children:p})})]})},c=({items:a,allowMultiple:m=!1,className:p=""})=>{const[s,o]=N.useState([]),u=t=>{o(m?r=>r.includes(t)?r.filter(j=>j!==t):[...r,t]:r=>r.includes(t)?[]:[t])};return e.jsx("div",{className:`rounded-md border border-gray-200 dark:border-gray-700 bg-background-primary ${p}`,role:"region",children:a.map(t=>e.jsx(S,{...t,isOpen:s.includes(t.id),onToggle:u},t.id))})};c.__docgenInfo={description:`Accordion Component
Displays a list of items that can be expanded/collapsed`,methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemProps"}],raw:"AccordionItemProps[]"},description:"Array of accordion items"},allowMultiple:{required:!1,tsType:{name:"boolean"},description:`Whether multiple items can be open at once
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}}}};const M={title:"Data Display/Accordion",component:c,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{allowMultiple:{control:{type:"boolean"},description:"Allow multiple accordion items to be open at once"}}},i=[{id:"item-1",title:"What is React?",content:"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."},{id:"item-2",title:"What is TypeScript?",content:"TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."},{id:"item-3",title:"What is Tailwind CSS?",content:"Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."},{id:"item-4",title:"What is Storybook?",content:"Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation."}],n={args:{items:i,allowMultiple:!1}},d={args:{items:i,allowMultiple:!0}},l={args:{items:i},parameters:{docs:{description:{story:"Preview of the Accordion component in dark mode, showing how it adapts to dark themes."}}},render:()=>e.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3",children:"Light Mode"}),e.jsx(c,{items:i})]}),e.jsxs("div",{className:"p-6 bg-gray-900 rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3 text-white",children:"Dark Mode"}),e.jsx("div",{className:"dark",children:e.jsx(c,{items:i})})]})]})};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    allowMultiple: false
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,b,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    allowMultiple: true
  }
}`,...(y=(b=d.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,v,k;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  },
  parameters: {
    docs: {
      description: {
        story: 'Preview of the Accordion component in dark mode, showing how it adapts to dark themes.'
      }
    }
  },
  render: () => <div className="grid grid-cols-1 gap-6">
      <div className="p-6 bg-white rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <Accordion items={sampleItems} />
      </div>
      <div className="p-6 bg-gray-900 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode</h3>
        <div className="dark">
          <Accordion items={sampleItems} />
        </div>
      </div>
    </div>
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const T=["Default","AllowMultiple","DarkModePreview"];export{d as AllowMultiple,l as DarkModePreview,n as Default,T as __namedExportsOrder,M as default};

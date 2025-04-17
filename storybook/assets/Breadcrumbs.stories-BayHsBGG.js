import{j as e}from"./jsx-runtime-D_zvdyIk.js";const t=({items:a,separator:D="/",className:R="",maxItems:u,onItemClick:p})=>{if(!a||a.length===0)return null;const b=u&&a.length>u?[a[0],{label:"...",href:void 0,active:!1},...a.slice(-(u-1))]:a,$=(r,s,o)=>{(!r.href||r.active)&&o.preventDefault(),p&&p(r,s)};return e.jsx("nav",{"aria-label":"Breadcrumb",className:`${R}`,children:e.jsx("ol",{className:"flex items-center flex-wrap",children:b.map((r,s)=>{const o=s===b.length-1;return e.jsxs("li",{className:`flex items-center ${o?"":"mr-2"}`,children:[r.label==="..."?e.jsx("span",{className:"text-gray-500 dark:text-gray-400",children:"..."}):e.jsx(e.Fragment,{children:r.href&&!r.active?e.jsxs("a",{href:r.href,className:`
                        flex items-center text-sm hover:underline rounded
                        ${r.active?"font-medium text-text-primary dark:text-gray-200 cursor-default":"text-text-secondary dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"}
                      `,"aria-current":r.active?"page":void 0,onClick:q=>$(r,s,q),children:[r.icon&&e.jsx("span",{className:"mr-1.5",children:r.icon}),r.label]}):e.jsxs("span",{className:`
                        flex items-center text-sm
                        ${r.active?"font-medium text-text-primary dark:text-gray-200":"text-text-secondary dark:text-gray-400"}
                      `,"aria-current":r.active?"page":void 0,children:[r.icon&&e.jsx("span",{className:"mr-1.5",children:r.icon}),r.label]})}),!o&&e.jsx("span",{className:"mx-2 text-gray-400 dark:text-gray-600","aria-hidden":"true",children:D})]},`${r.label}-${s}`)})})})};t.__docgenInfo={description:`Breadcrumbs Component
Navigation component that shows the current location within the app hierarchy`,methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items"},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom separator between items
@default '/'`,defaultValue:{value:"'/'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:`Maximum items to show before collapsing
If provided and items.length > maxItems, will show first, last and ellipsis`},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: BreadcrumbItem, index: number) => void",signature:{arguments:[{type:{name:"BreadcrumbItem"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Function to handle item click"}}};const _={title:"Navigation/Breadcrumbs",component:t,parameters:{layout:"centered",docs:{description:{component:"Breadcrumbs component that shows the current location within the app hierarchy."}}},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of breadcrumb items"},separator:{control:"text",description:"Custom separator between items",table:{defaultValue:{summary:"/"}}},maxItems:{control:"number",description:"Maximum items to show before collapsing"},onItemClick:{action:"clicked",description:"Function to handle item click"}}},n={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Category",href:"#"},{label:"Current Page",active:!0}]}},l={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Category",href:"#"},{label:"Current Page",active:!0}],separator:">"}},i={render:()=>e.jsx(t,{items:[{label:"Home",href:"#",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})},{label:"Settings",href:"#",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})},{label:"Profile",href:"#",icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})},{label:"Security",active:!0,icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}]})},c={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Category",href:"#"},{label:"Subcategory",href:"#"},{label:"Item Type",href:"#"},{label:"Item Model",href:"#"},{label:"Current Item",active:!0}],maxItems:4}},d={parameters:{docs:{description:{story:"The breadcrumbs component is designed to wrap on smaller screens and maintain readability."}}},render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(t,{items:[{label:"Home",href:"#"},{label:"Category",href:"#"},{label:"Subcategory",href:"#"},{label:"Product Type",href:"#"},{label:"Product Name With Long Text",active:!0}]})})},m={args:{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Category",href:"#"},{label:"Current Page",active:!0}]},parameters:{docs:{description:{story:"Preview of the Breadcrumbs component in dark mode, showing how it adapts to dark themes."}}},render:a=>e.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3",children:"Light Mode"}),e.jsx(t,{...a})]}),e.jsxs("div",{className:"p-6 bg-gray-900 rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3 text-white",children:"Dark Mode"}),e.jsx("div",{className:"dark",children:e.jsx(t,{...a})})]})]})},h={parameters:{docs:{description:{story:'Breadcrumbs are implemented with proper ARIA attributes for accessibility. The active/current page is marked with aria-current="page".'}}},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Standard Breadcrumbs"}),e.jsx(t,{items:[{label:"Home",href:"#"},{label:"Products",href:"#"},{label:"Current Page",active:!0}]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Keyboard Navigation"}),e.jsx("p",{className:"text-sm mb-2",children:"Tab through the breadcrumbs to see focus styles"}),e.jsx(t,{items:[{label:"Dashboard",href:"#"},{label:"Settings",href:"#"},{label:"Account",active:!0}]})]})]})};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Category',
      href: '#'
    }, {
      label: 'Current Page',
      active: true
    }]
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,w,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Category',
      href: '#'
    }, {
      label: 'Current Page',
      active: true
    }],
    separator: '>'
  }
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var k,j,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Breadcrumbs items={[{
    label: 'Home',
    href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
  }, {
    label: 'Settings',
    href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
  }, {
    label: 'Profile',
    href: '#',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
  }, {
    label: 'Security',
    active: true,
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
  }]} />
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,B,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Category',
      href: '#'
    }, {
      label: 'Subcategory',
      href: '#'
    }, {
      label: 'Item Type',
      href: '#'
    }, {
      label: 'Item Model',
      href: '#'
    }, {
      label: 'Current Item',
      active: true
    }],
    maxItems: 4
  }
}`,...(P=(B=c.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var L,M,S;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The breadcrumbs component is designed to wrap on smaller screens and maintain readability.'
      }
    }
  },
  render: () => <div className="w-full max-w-md">
      <Breadcrumbs items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Category',
      href: '#'
    }, {
      label: 'Subcategory',
      href: '#'
    }, {
      label: 'Product Type',
      href: '#'
    }, {
      label: 'Product Name With Long Text',
      active: true
    }]} />
    </div>
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var I,T,H;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products',
      href: '#'
    }, {
      label: 'Category',
      href: '#'
    }, {
      label: 'Current Page',
      active: true
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Preview of the Breadcrumbs component in dark mode, showing how it adapts to dark themes.'
      }
    }
  },
  render: args => <div className="grid grid-cols-1 gap-6">
      <div className="p-6 bg-white rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <Breadcrumbs {...args} />
      </div>
      <div className="p-6 bg-gray-900 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode</h3>
        <div className="dark">
          <Breadcrumbs {...args} />
        </div>
      </div>
    </div>
}`,...(H=(T=m.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var W,z,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs are implemented with proper ARIA attributes for accessibility. The active/current page is marked with aria-current="page".'
      }
    }
  },
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-base font-medium mb-2">Standard Breadcrumbs</h3>
        <Breadcrumbs items={[{
        label: 'Home',
        href: '#'
      }, {
        label: 'Products',
        href: '#'
      }, {
        label: 'Current Page',
        active: true
      }]} />
      </div>
      <div>
        <h3 className="text-base font-medium mb-2">Keyboard Navigation</h3>
        <p className="text-sm mb-2">Tab through the breadcrumbs to see focus styles</p>
        <Breadcrumbs items={[{
        label: 'Dashboard',
        href: '#'
      }, {
        label: 'Settings',
        href: '#'
      }, {
        label: 'Account',
        active: true
      }]} />
      </div>
    </div>
}`,...(A=(z=h.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const F=["Default","CustomSeparator","WithIcons","Collapsed","Responsive","DarkModePreview","AccessibilityExample"];export{h as AccessibilityExample,c as Collapsed,l as CustomSeparator,m as DarkModePreview,n as Default,d as Responsive,i as WithIcons,F as __namedExportsOrder,_ as default};

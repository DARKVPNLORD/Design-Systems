import{j as e}from"./jsx-runtime-D_zvdyIk.js";const a=({children:t,variant:oe="primary",size:ie="md",fullWidth:ne=!1,disabled:r=!1,loading:s=!1,leftIcon:b,rightIcon:y,className:de="",...le})=>{const ce="relative inline-flex items-center justify-center rounded-full font-medium transition-colors transition-transform transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",me={sm:"px-4 py-2 text-xs h-8",md:"px-5 py-2.5 text-sm h-10",lg:"px-6 py-3 text-base h-12"},he={primary:"bg-primary-500 text-white hover:bg-primary-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 shadow-sm",secondary:"bg-secondary-500 text-white hover:bg-secondary-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 shadow-sm",tertiary:"bg-tertiary-500 text-white hover:bg-tertiary-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 shadow-sm",outline:"border border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-white hover:border-primary-500 hover:text-primary-500 dark:hover:text-primary-400 disabled:border-gray-200 dark:disabled:border-gray-700 disabled:text-gray-400 dark:disabled:text-gray-600",ghost:"bg-transparent text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 dark:hover:text-primary-400 disabled:text-gray-400 dark:disabled:text-gray-600"},ue=ne?"w-full":"",pe=r?"cursor-not-allowed opacity-70":"",ge=s?"cursor-wait":"",ve=!r&&!s?"hover:shadow-md active:shadow-inner active:translate-y-[1px] active:scale-[0.99]":"";return e.jsx("button",{className:`${ce} ${me[ie]} ${he[oe]} ${ue} ${pe} ${ge} ${ve} ${de}`,disabled:r||s,"aria-disabled":r||s,...le,children:e.jsxs("span",{className:"relative flex items-center justify-center",children:[s&&e.jsxs("svg",{className:"animate-spin mr-2 h-4 w-4 text-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),b&&!s&&e.jsx("span",{className:"mr-2 flex items-center",children:b}),e.jsx("span",{children:t}),y&&e.jsx("span",{className:"ml-2 flex items-center",children:y})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const be={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:`
## Button Component

The Button component is a versatile interactive element designed for user actions.

### Features
- Multiple variants (primary, secondary, tertiary, outline, ghost)
- Three size options
- Support for loading states
- Disabled state styling
- Full width option
- Dark mode compatibility
- Icon support (left and right)

### Accessibility
All buttons are built with proper ARIA attributes and focus management for keyboard navigation.
        `}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","tertiary","outline","ghost"],description:"The visual style of the button",table:{defaultValue:{summary:"primary"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"The size of the button",table:{defaultValue:{summary:"md"}}},fullWidth:{control:{type:"boolean"},description:"Makes the button take up the full width of its container",table:{defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"Disables the button",table:{defaultValue:{summary:"false"}}},loading:{control:{type:"boolean"},description:"Shows a loading spinner within the button",table:{defaultValue:{summary:"false"}}},leftIcon:{description:"Icon to display before the button text"},rightIcon:{description:"Icon to display after the button text"},children:{description:"The content of the button",control:"text"}}},o={args:{variant:"primary",children:"Primary Button",size:"md"},parameters:{docs:{description:{story:"The primary button is used for the main action in a form or page. It has high visual prominence."}}}},i={args:{variant:"secondary",children:"Secondary Button",size:"md"},parameters:{docs:{description:{story:"The secondary button is used for secondary actions that complement the primary action."}}}},n={args:{variant:"tertiary",children:"Tertiary Button",size:"md"},parameters:{docs:{description:{story:"The tertiary button is used for less important actions that still require some visual prominence."}}}},d={args:{variant:"outline",children:"Outline Button",size:"md"},parameters:{docs:{description:{story:"The outline button has a transparent background with a colored border, useful for secondary actions."}}}},l={args:{variant:"ghost",children:"Ghost Button",size:"md"},parameters:{docs:{description:{story:"The ghost button has no background or border, only showing text and changing on hover. Ideal for less prominent actions."}}}},c={args:{variant:"primary",children:"Button"},render:t=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{...t,size:"sm",children:"Small"}),e.jsx(a,{...t,size:"md",children:"Medium"}),e.jsx(a,{...t,size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"Buttons come in three sizes: small (sm), medium (md), and large (lg). Choose the appropriate size based on context and prominence."}}}},m={args:{variant:"primary",children:"Button",size:"md"},render:t=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{...t,children:"Normal"}),e.jsx(a,{...t,disabled:!0,children:"Disabled"}),e.jsx(a,{...t,loading:!0,children:"Loading"})]}),parameters:{docs:{description:{story:"Buttons can be in normal, disabled, or loading states. The disabled state prevents user interaction, while the loading state shows a spinner."}}}},h={args:{variant:"primary",children:"Full Width Button",size:"md",fullWidth:!0},parameters:{docs:{description:{story:"Full width buttons extend to fill their container. Useful for mobile designs or when you want to emphasize a button."}}}},u={args:{children:"Button",size:"md"},render:t=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-4 bg-white rounded shadow-sm",children:[e.jsx("h3",{className:"text-base font-medium mb-2",children:"Light Mode"}),e.jsx(a,{...t,variant:"primary",children:"Primary"}),e.jsx(a,{...t,variant:"secondary",children:"Secondary"}),e.jsx(a,{...t,variant:"tertiary",children:"Tertiary"}),e.jsx(a,{...t,variant:"outline",children:"Outline"}),e.jsx(a,{...t,variant:"ghost",children:"Ghost"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-2 p-4 bg-gray-800 rounded shadow-sm",children:[e.jsx("h3",{className:"text-base font-medium mb-2 text-white",children:"Dark Mode Preview"}),e.jsx(a,{...t,variant:"primary",children:"Primary"}),e.jsx(a,{...t,variant:"secondary",children:"Secondary"}),e.jsx(a,{...t,variant:"tertiary",children:"Tertiary"}),e.jsx(a,{...t,variant:"outline",children:"Outline"}),e.jsx(a,{...t,variant:"ghost",children:"Ghost"})]})]}),parameters:{docs:{description:{story:"This example showcases all button variants in both light and dark mode contexts."}}}},p={args:{size:"md",children:"Button"},render:t=>e.jsxs("div",{className:"space-y-8 max-w-2xl",children:[e.jsxs("div",{className:"p-6 bg-white rounded-md shadow-sm",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Form Actions"}),e.jsx("div",{className:"p-4 border border-gray-200 rounded-md mb-6",children:e.jsx("p",{className:"mb-4",children:"Form content would go here..."})}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(a,{...t,variant:"ghost",children:"Cancel"}),e.jsx(a,{...t,variant:"primary",children:"Submit"})]})]}),e.jsxs("div",{className:"p-6 bg-white rounded-md shadow-sm",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Card Actions"}),e.jsxs("div",{className:"border border-gray-200 rounded-md p-4 mb-3",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Product Title"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Product description would go here..."}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(a,{...t,variant:"outline",size:"sm",children:"Details"}),e.jsx(a,{...t,variant:"primary",size:"sm",children:"Add to Cart"})]})]})]}),e.jsxs("div",{className:"p-6 bg-white rounded-md shadow-sm",children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Confirmation Dialog"}),e.jsxs("div",{className:"border border-gray-200 rounded-md p-4 mb-3",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Confirm Action"}),e.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Are you sure you want to proceed with this action?"}),e.jsxs("div",{className:"flex justify-end gap-3",children:[e.jsx(a,{...t,variant:"outline",children:"Cancel"}),e.jsx(a,{...t,variant:"tertiary",children:"Confirm"})]})]})]})]}),parameters:{docs:{description:{story:"These examples demonstrate common usage patterns for buttons in different contexts such as forms, cards, and dialogs."}}}},g={args:{size:"md",children:"Button"},render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-md",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-medium",children:"Form Submission"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{variant:"primary",children:"Submit"}),e.jsx(a,{variant:"ghost",children:"Cancel"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-medium",children:"Destructive Action"}),e.jsx(a,{variant:"outline",className:"text-error border-error hover:bg-error-light hover:text-error-dark",children:"Delete Item"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-medium",children:"Icon Buttons"}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{variant:"primary",leftIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})}),children:"Add Item"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),children:"View Details"})]})]})]}),parameters:{docs:{description:{story:"These examples show common real-world uses of the Button component in different contexts."}}}},v={args:{size:"md",children:"Button"},render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-2xl",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm",children:[e.jsx("h3",{className:"text-base font-medium mb-4",children:"Light Mode"}),e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsx(a,{variant:"outline",children:"Outline Button"}),e.jsx(a,{variant:"ghost",children:"Ghost Button"})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900 rounded-lg shadow-sm",children:[e.jsx("h3",{className:"text-base font-medium mb-4 text-white",children:"Dark Mode"}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 dark",children:[e.jsx(a,{variant:"outline",children:"Outline Button"}),e.jsx(a,{variant:"ghost",children:"Ghost Button"})]})]})]}),parameters:{docs:{description:{story:"This comparison shows how buttons appear in light and dark modes, highlighting the enhanced contrast and visibility improvements made to the components."}}}},x={args:{size:"md",children:"Button"},render:()=>e.jsxs("div",{className:"max-w-4xl bg-gray-100 dark:bg-gray-800 p-8 rounded-lg",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Website Footer Buttons"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-6",children:"Common button patterns found in website footers"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-900 rounded shadow-sm",children:[e.jsx("h4",{className:"text-base font-medium mb-3",children:"Back to Top"}),e.jsx(a,{variant:"ghost",className:"w-full justify-center",rightIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"})}),children:"Back to Top"})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-900 rounded shadow-sm",children:[e.jsx("h4",{className:"text-base font-medium mb-3",children:"Newsletter Signup"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"flex-1 bg-gray-100 dark:bg-gray-800 h-10 rounded"}),e.jsx(a,{variant:"primary",children:"Subscribe"})]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-900 rounded shadow-sm",children:[e.jsx("h4",{className:"text-base font-medium mb-3",children:"Social Media Links"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"ghost",className:"p-2","aria-label":"Twitter",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),e.jsx(a,{variant:"ghost",className:"p-2","aria-label":"Facebook",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})}),e.jsx(a,{variant:"ghost",className:"p-2","aria-label":"Instagram",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})})}),e.jsx(a,{variant:"ghost",className:"p-2","aria-label":"LinkedIn",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"})})})]})]}),e.jsxs("div",{className:"p-4 bg-white dark:bg-gray-900 rounded shadow-sm",children:[e.jsx("h4",{className:"text-base font-medium mb-3",children:"Cookie Consent"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"outline",children:"Customize"}),e.jsx(a,{variant:"primary",children:"Accept All"})]})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20 rounded-lg",children:[e.jsx("h4",{className:"text-base font-medium mb-2",children:"Need Help?"}),e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-300 mb-4",children:"Our support team is always ready to assist you."}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{variant:"outline",leftIcon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:[e.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),e.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),children:"Email Support"}),e.jsx(a,{variant:"primary",leftIcon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"})}),children:"Call Now"})]})]})]}),parameters:{docs:{description:{story:"Common button patterns typically found in website footers, including back to top buttons, newsletter signups, social media links, cookie consent, and contact support."}}}};var w,f,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button is used for the main action in a form or page. It has high visual prominence.'
      }
    }
  }
}`,...(N=(f=o.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var B,j,z;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The secondary button is used for secondary actions that complement the primary action.'
      }
    }
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var k,C,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The tertiary button is used for less important actions that still require some visual prominence.'
      }
    }
  }
}`,...(T=(C=n.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var S,M,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline Button',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The outline button has a transparent background with a colored border, useful for secondary actions.'
      }
    }
  }
}`,...(I=(M=d.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var A,R,V;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'The ghost button has no background or border, only showing text and changing on hover. Ideal for less prominent actions.'
      }
    }
  }
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var D,F,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button'
  },
  render: args => <div className="flex flex-wrap items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes: small (sm), medium (md), and large (lg). Choose the appropriate size based on context and prominence.'
      }
    }
  }
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var O,P,W;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'md'
  },
  render: args => <div className="flex flex-wrap items-center gap-4">
      <Button {...args}>Normal</Button>
      <Button {...args} disabled>Disabled</Button>
      <Button {...args} loading>Loading</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be in normal, disabled, or loading states. The disabled state prevents user interaction, while the loading state shows a spinner.'
      }
    }
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var G,q,H;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    size: 'md',
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Full width buttons extend to fill their container. Useful for mobile designs or when you want to emphasize a button.'
      }
    }
  }
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var $,E,U;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'md'
  },
  render: args => <div className="flex flex-col gap-4 max-w-md">
      <div className="grid grid-cols-1 gap-2 p-4 bg-white rounded shadow-sm">
        <h3 className="text-base font-medium mb-2">Light Mode</h3>
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="tertiary">Tertiary</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="ghost">Ghost</Button>
      </div>
      <div className="grid grid-cols-1 gap-2 p-4 bg-gray-800 rounded shadow-sm">
        <h3 className="text-base font-medium mb-2 text-white">Dark Mode Preview</h3>
        <Button {...args} variant="primary">Primary</Button>
        <Button {...args} variant="secondary">Secondary</Button>
        <Button {...args} variant="tertiary">Tertiary</Button>
        <Button {...args} variant="outline">Outline</Button>
        <Button {...args} variant="ghost">Ghost</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'This example showcases all button variants in both light and dark mode contexts.'
      }
    }
  }
}`,...(U=(E=u.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var _,J,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Button'
  },
  render: args => <div className="space-y-8 max-w-2xl">
      <div className="p-6 bg-white rounded-md shadow-sm">
        <h3 className="text-lg font-medium mb-4">Form Actions</h3>
        <div className="p-4 border border-gray-200 rounded-md mb-6">
          <p className="mb-4">Form content would go here...</p>
        </div>
        <div className="flex justify-end gap-3">
          <Button {...args} variant="ghost">Cancel</Button>
          <Button {...args} variant="primary">Submit</Button>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-md shadow-sm">
        <h3 className="text-lg font-medium mb-4">Card Actions</h3>
        <div className="border border-gray-200 rounded-md p-4 mb-3">
          <h4 className="font-medium mb-2">Product Title</h4>
          <p className="text-sm text-gray-600 mb-4">Product description would go here...</p>
          <div className="flex justify-between">
            <Button {...args} variant="outline" size="sm">Details</Button>
            <Button {...args} variant="primary" size="sm">Add to Cart</Button>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-md shadow-sm">
        <h3 className="text-lg font-medium mb-4">Confirmation Dialog</h3>
        <div className="border border-gray-200 rounded-md p-4 mb-3">
          <h4 className="font-medium mb-2">Confirm Action</h4>
          <p className="text-sm text-gray-600 mb-4">Are you sure you want to proceed with this action?</p>
          <div className="flex justify-end gap-3">
            <Button {...args} variant="outline">Cancel</Button>
            <Button {...args} variant="tertiary">Confirm</Button>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'These examples demonstrate common usage patterns for buttons in different contexts such as forms, cards, and dialogs.'
      }
    }
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Button'
  },
  render: () => <div className="flex flex-col gap-6 max-w-md">
      <div className="space-y-3">
        <h3 className="text-base font-medium">Form Submission</h3>
        <div className="flex gap-3">
          <Button variant="primary">Submit</Button>
          <Button variant="ghost">Cancel</Button>
        </div>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-base font-medium">Destructive Action</h3>
        <Button variant="outline" className="text-error border-error hover:bg-error-light hover:text-error-dark">
          Delete Item
        </Button>
      </div>
      
      <div className="space-y-3">
        <h3 className="text-base font-medium">Icon Buttons</h3>
        <div className="flex gap-3">
          <Button variant="primary" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>}>
            Add Item
          </Button>
          <Button variant="outline" rightIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>}>
            View Details
          </Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'These examples show common real-world uses of the Button component in different contexts.'
      }
    }
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Button'
  },
  render: () => <div className="grid grid-cols-2 gap-6 max-w-2xl">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-base font-medium mb-4">Light Mode</h3>
        <div className="grid grid-cols-1 gap-3">
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>
      <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
        <h3 className="text-base font-medium mb-4 text-white">Dark Mode</h3>
        <div className="grid grid-cols-1 gap-3 dark">
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'This comparison shows how buttons appear in light and dark modes, highlighting the enhanced contrast and visibility improvements made to the components.'
      }
    }
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,se,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: 'Button'
  },
  render: () => <div className="max-w-4xl bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Website Footer Buttons</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Common button patterns found in website footers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Back to top */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow-sm">
          <h4 className="text-base font-medium mb-3">Back to Top</h4>
          <Button variant="ghost" className="w-full justify-center" rightIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>}>
            Back to Top
          </Button>
        </div>

        {/* Newsletter signup */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow-sm">
          <h4 className="text-base font-medium mb-3">Newsletter Signup</h4>
          <div className="flex gap-2">
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 h-10 rounded"></div>
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>

        {/* Social links */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow-sm">
          <h4 className="text-base font-medium mb-3">Social Media Links</h4>
          <div className="flex gap-2">
            <Button variant="ghost" className="p-2" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </Button>
            <Button variant="ghost" className="p-2" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Button>
            <Button variant="ghost" className="p-2" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Button>
            <Button variant="ghost" className="p-2" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Cookie consent */}
        <div className="p-4 bg-white dark:bg-gray-900 rounded shadow-sm">
          <h4 className="text-base font-medium mb-3">Cookie Consent</h4>
          <div className="flex gap-2">
            <Button variant="outline">Customize</Button>
            <Button variant="primary">Accept All</Button>
          </div>
        </div>
      </div>

      {/* Contact / Support */}
      <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900 dark:bg-opacity-20 rounded-lg">
        <h4 className="text-base font-medium mb-2">Need Help?</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Our support team is always ready to assist you.</p>
        <div className="flex gap-3">
          <Button variant="outline" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>}>
            Email Support
          </Button>
          <Button variant="primary" leftIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>}>
            Call Now
          </Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Common button patterns typically found in website footers, including back to top buttons, newsletter signups, social media links, cookie consent, and contact support.'
      }
    }
  }
}`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const ye=["Primary","Secondary","Tertiary","Outline","Ghost","ButtonSizes","ButtonStates","FullWidth","AllVariants","UsageExamples","CommonUseCases","DarkModeComparison","WebsiteFooterButtons"];export{u as AllVariants,c as ButtonSizes,m as ButtonStates,g as CommonUseCases,v as DarkModeComparison,h as FullWidth,l as Ghost,d as Outline,o as Primary,i as Secondary,n as Tertiary,p as UsageExamples,x as WebsiteFooterButtons,ye as __namedExportsOrder,be as default};

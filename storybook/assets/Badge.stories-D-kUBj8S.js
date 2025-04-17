import{j as e}from"./jsx-runtime-D_zvdyIk.js";const a=({children:r,variant:x="primary",size:se="md",withDot:ie=!1,className:te="",pill:de=!1,outline:s=!1})=>{const ne="inline-flex items-center font-medium",oe={sm:"px-2 py-0.5 text-xs",md:"px-2.5 py-0.5 text-sm",lg:"px-3 py-1 text-base"},le=de?"rounded-full":"rounded",ce={primary:s?"bg-transparent text-primary-600 border border-primary-500 dark:text-primary-300 dark:border-primary-400":"bg-primary-100 text-primary-800 dark:bg-primary-900 dark:bg-opacity-40 dark:text-primary-200",secondary:s?"bg-transparent text-secondary-600 border border-secondary-500 dark:text-secondary-300 dark:border-secondary-400":"bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:bg-opacity-40 dark:text-secondary-200",tertiary:s?"bg-transparent text-tertiary-600 border border-tertiary-500 dark:text-tertiary-300 dark:border-tertiary-400":"bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-900 dark:bg-opacity-40 dark:text-tertiary-200",success:s?"bg-transparent text-success-dark border border-success dark:text-success-light dark:border-success":"bg-success-light text-success-dark dark:bg-success-dark dark:bg-opacity-40 dark:text-green-200",info:s?"bg-transparent text-info-dark border border-info dark:text-info-light dark:border-info":"bg-info-light text-info-dark dark:bg-info-dark dark:bg-opacity-40 dark:text-blue-200",warning:s?"bg-transparent text-warning-dark border border-warning dark:text-warning-light dark:border-warning":"bg-warning-light text-warning-dark dark:bg-warning-dark dark:bg-opacity-40 dark:text-yellow-200",error:s?"bg-transparent text-error-dark border border-error dark:text-error-light dark:border-error":"bg-error-light text-error-dark dark:bg-error-dark dark:bg-opacity-40 dark:text-red-200"},me={primary:"bg-primary-500 dark:bg-primary-400",secondary:"bg-secondary-500 dark:bg-secondary-400",tertiary:"bg-tertiary-500 dark:bg-tertiary-400",success:"bg-success dark:bg-success",info:"bg-info dark:bg-info",warning:"bg-warning dark:bg-warning",error:"bg-error dark:bg-error"};return e.jsxs("span",{className:`${ne} ${oe[se]} ${le} ${ce[x]} ${te}`,children:[ie&&e.jsx("span",{className:`mr-1.5 h-2 w-2 rounded-full ${me[x]}`}),r]})};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},withDot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},pill:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},outline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pe={title:"Data Display/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:`
## Badge Component

Badges are used to highlight status, show counts, or categorize items in a visually distinctive way.

### Key Features
- Multiple color variants for different contextual purposes
- Size options to fit different UI contexts
- Pill shape option for rounded appearance
- Outline style for more subtle presentation
- Dot indicator for status visualization
- Dark mode compatibility out of the box
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","success","info","warning","error"],description:"The visual style of the badge",table:{defaultValue:{summary:"primary"}}},size:{control:"select",options:["sm","md","lg"],description:"The size of the badge",table:{defaultValue:{summary:"md"}}},withDot:{control:"boolean",description:"Show a dot indicator before the content",table:{defaultValue:{summary:"false"}}},pill:{control:"boolean",description:"Make badge pill shaped (more rounded)",table:{defaultValue:{summary:"false"}}},outline:{control:"boolean",description:"Make badge outline style",table:{defaultValue:{summary:"false"}}},children:{control:"text",description:"Badge content"}}},i={args:{children:"Badge"},parameters:{docs:{description:{story:"The default badge with primary styling and standard rounded corners."}}}},t={args:{children:"Badge"},render:r=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary"}),e.jsx(a,{...r,variant:"tertiary",children:"Tertiary"}),e.jsx(a,{...r,variant:"success",children:"Success"}),e.jsx(a,{...r,variant:"info",children:"Info"}),e.jsx(a,{...r,variant:"warning",children:"Warning"}),e.jsx(a,{...r,variant:"error",children:"Error"})]}),parameters:{docs:{description:{story:`
### Color Variants
Each variant is designed for specific purposes:
- **Primary**: Default variant, for general highlights
- **Secondary**: For complementary or secondary information
- **Tertiary**: For tertiary level information
- **Success**: For positive states or completion
- **Info**: For informational or neutral states
- **Warning**: For warning states that need attention
- **Error**: For error states or critical information
        `}}}},d={args:{children:"Badge",variant:"primary"},render:r=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(a,{...r,size:"sm",children:"Small"}),e.jsx(a,{...r,size:"md",children:"Medium"}),e.jsx(a,{...r,size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"Badges come in three sizes to fit different UI contexts - small (sm), medium (md), and large (lg). Choose the appropriate size based on where the badge appears and its relative importance."}}}},n={args:{children:"Badge",withDot:!0},render:r=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary"}),e.jsx(a,{...r,variant:"success",children:"Success"}),e.jsx(a,{...r,variant:"error",children:"Error"})]}),parameters:{docs:{description:{story:"Adding a dot indicator to badges enhances their visibility and is particularly useful for status indicators. The dot color matches the badge variant."}}}},o={args:{children:"Badge",pill:!0},render:r=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{...r,children:"Default Pill"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary Pill"}),e.jsx(a,{...r,variant:"success",children:"Success Pill"}),e.jsx(a,{...r,size:"lg",children:"Large Pill"})]}),parameters:{docs:{description:{story:"Pill-shaped badges have fully rounded ends, giving them a softer appearance. These are often used for tags, counts, or status indicators where a more button-like appearance is desired."}}}},l={args:{children:"Badge",outline:!0},render:r=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{...r,children:"Primary Outline"}),e.jsx(a,{...r,variant:"secondary",children:"Secondary Outline"}),e.jsx(a,{...r,variant:"success",children:"Success Outline"}),e.jsx(a,{...r,variant:"error",children:"Error Outline"})]}),parameters:{docs:{description:{story:"Outline badges have a transparent background with a colored border. They are less visually prominent than filled badges and work well in interfaces where you want to maintain a lighter appearance."}}}},c={args:{children:"Badge"},render:r=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{...r,pill:!0,withDot:!0,variant:"primary",children:"Primary Pill with Dot"}),e.jsx(a,{...r,pill:!0,outline:!0,variant:"secondary",children:"Secondary Outline Pill"}),e.jsx(a,{...r,outline:!0,withDot:!0,variant:"success",size:"lg",children:"Success Outline with Dot"})]}),parameters:{docs:{description:{story:"Badge properties can be combined for even more customization. This example shows badges with multiple properties combined."}}}},m={args:{children:"Badge"},render:r=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3",children:"Light Mode"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"success",withDot:!0,children:"Active"}),e.jsx(a,{...r,variant:"error",pill:!0,children:"42"}),e.jsx(a,{...r,variant:"info",outline:!0,children:"New"})]})]}),e.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-base font-medium mb-3 text-white",children:"Dark Mode Preview"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(a,{...r,variant:"primary",children:"Primary"}),e.jsx(a,{...r,variant:"success",withDot:!0,children:"Active"}),e.jsx(a,{...r,variant:"error",pill:!0,children:"42"}),e.jsx(a,{...r,variant:"info",outline:!0,children:"New"})]})]})]}),parameters:{docs:{description:{story:"Badges are designed to work in both light and dark modes. This example shows how badges appear in dark mode vs light mode contexts."}}}},g={args:{children:"42"},render:r=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{...r,variant:"primary",children:"42"}),e.jsx(a,{...r,variant:"secondary",pill:!0,children:"99+"}),e.jsx(a,{...r,variant:"error",size:"sm",pill:!0,children:"7"}),e.jsx(a,{...r,variant:"info",outline:!0,children:"New"})]}),parameters:{docs:{description:{story:"Badges are commonly used to display counts, such as notification counts. This example shows number badges in different styles."}}}},p={args:{children:"Badge"},render:r=>e.jsxs("div",{className:"space-y-6 max-w-xl",children:[e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsxs("div",{className:"flex justify-between items-center mb-3",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Notification Center"}),e.jsx(a,{...r,variant:"error",pill:!0,children:"3"})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-2 bg-gray-50 rounded flex items-start",children:[e.jsx("div",{className:"flex-1",children:"New message from support team"}),e.jsx(a,{...r,variant:"primary",size:"sm",children:"New"})]}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded flex items-start",children:[e.jsx("div",{className:"flex-1",children:"Your subscription will expire soon"}),e.jsx(a,{...r,variant:"warning",size:"sm",children:"Action Needed"})]}),e.jsxs("div",{className:"p-2 bg-gray-50 rounded flex items-start",children:[e.jsx("div",{className:"flex-1",children:"Weekly report is available"}),e.jsx(a,{...r,variant:"info",size:"sm",children:"Info"})]})]})]}),e.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-medium mb-3",children:"Product Status"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx("div",{className:"p-2 bg-gray-50 rounded",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Server Status"}),e.jsx(a,{...r,variant:"success",withDot:!0,children:"Online"})]})}),e.jsx("div",{className:"p-2 bg-gray-50 rounded",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Database"}),e.jsx(a,{...r,variant:"warning",withDot:!0,children:"Maintenance"})]})}),e.jsx("div",{className:"p-2 bg-gray-50 rounded",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"API Status"}),e.jsx(a,{...r,variant:"error",withDot:!0,children:"Degraded"})]})}),e.jsx("div",{className:"p-2 bg-gray-50 rounded",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"CDN Status"}),e.jsx(a,{...r,variant:"success",withDot:!0,children:"Operational"})]})})]})]})]}),parameters:{docs:{description:{story:"These examples demonstrate common real-world usage patterns for badges, including notification indicators and status displays."}}}},u={args:{children:"Badge"},parameters:{docs:{description:{story:"Badges should have sufficient color contrast and not be used alone to convey important information. Always ensure that the meaning is clear from context or add explicit labels for screen readers."}}},render:r=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2",children:"Notifications:"}),e.jsx(a,{...r,variant:"error","aria-label":"5 unread notifications",children:"5"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("span",{className:"mr-2",children:"Status:"}),e.jsx(a,{...r,variant:"success",withDot:!0,"aria-label":"Status is active",children:"Active"})]})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-md",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-medium",children:"Notification Counter"}),e.jsxs("div",{className:"relative inline-block",children:[e.jsx("button",{className:"p-2 rounded-full border border-gray-200 dark:border-gray-700",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})})}),e.jsx(a,{variant:"error",pill:!0,size:"sm",className:"absolute -top-1 -right-1",children:"8"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-medium",children:"Status in a List"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between border-b pb-2",children:[e.jsx("span",{children:"Server Status"}),e.jsx(a,{variant:"success",size:"sm",children:"Online"})]}),e.jsxs("div",{className:"flex items-center justify-between border-b pb-2",children:[e.jsx("span",{children:"Database"}),e.jsx(a,{variant:"warning",size:"sm",children:"Degraded"})]}),e.jsxs("div",{className:"flex items-center justify-between pb-2",children:[e.jsx("span",{children:"Storage"}),e.jsx(a,{variant:"error",size:"sm",children:"Offline"})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-medium",children:"Category Tags"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",pill:!0,outline:!0,children:"Design"}),e.jsx(a,{variant:"secondary",pill:!0,outline:!0,children:"Development"}),e.jsx(a,{variant:"tertiary",pill:!0,outline:!0,children:"Marketing"}),e.jsx(a,{variant:"info",pill:!0,outline:!0,children:"Research"})]})]})]}),parameters:{docs:{description:{story:"These examples demonstrate common real-world applications of the Badge component."}}}},v={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 max-w-2xl",children:[e.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm",children:[e.jsx("h3",{className:"text-base font-medium mb-4",children:"Light Mode"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"error",children:"Error"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",outline:!0,children:"Primary"}),e.jsx(a,{variant:"success",outline:!0,children:"Success"}),e.jsx(a,{variant:"error",outline:!0,children:"Error"})]})]})]}),e.jsxs("div",{className:"p-6 bg-gray-900 rounded-lg shadow-sm",children:[e.jsx("h3",{className:"text-base font-medium mb-4 text-white",children:"Dark Mode"}),e.jsxs("div",{className:"space-y-4 dark",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"error",children:"Error"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"primary",outline:!0,children:"Primary"}),e.jsx(a,{variant:"success",outline:!0,children:"Success"}),e.jsx(a,{variant:"error",outline:!0,children:"Error"})]})]})]})]}),parameters:{docs:{description:{story:"This comparison shows badge appearance in light and dark modes, highlighting the enhanced contrast in dark mode."}}}};var f,y,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default badge with primary styling and standard rounded corners.'
      }
    }
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,B,N;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Badge {...args} variant="primary">Primary</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
      <Badge {...args} variant="tertiary">Tertiary</Badge>
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="info">Info</Badge>
      <Badge {...args} variant="warning">Warning</Badge>
      <Badge {...args} variant="error">Error</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Color Variants
Each variant is designed for specific purposes:
- **Primary**: Default variant, for general highlights
- **Secondary**: For complementary or secondary information
- **Tertiary**: For tertiary level information
- **Success**: For positive states or completion
- **Info**: For informational or neutral states
- **Warning**: For warning states that need attention
- **Error**: For error states or critical information
        \`
      }
    }
  }
}`,...(N=(B=t.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var j,k,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    variant: 'primary'
  },
  render: args => <div className="flex flex-wrap items-center gap-4">
      <Badge {...args} size="sm">Small</Badge>
      <Badge {...args} size="md">Medium</Badge>
      <Badge {...args} size="lg">Large</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges come in three sizes to fit different UI contexts - small (sm), medium (md), and large (lg). Choose the appropriate size based on where the badge appears and its relative importance.'
      }
    }
  }
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var D,P,z;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    withDot: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Badge {...args} variant="primary">Primary</Badge>
      <Badge {...args} variant="secondary">Secondary</Badge>
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="error">Error</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Adding a dot indicator to badges enhances their visibility and is particularly useful for status indicators. The dot color matches the badge variant.'
      }
    }
  }
}`,...(z=(P=n.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var T,C,O;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    pill: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Badge {...args}>Default Pill</Badge>
      <Badge {...args} variant="secondary">Secondary Pill</Badge>
      <Badge {...args} variant="success">Success Pill</Badge>
      <Badge {...args} size="lg">Large Pill</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Pill-shaped badges have fully rounded ends, giving them a softer appearance. These are often used for tags, counts, or status indicators where a more button-like appearance is desired.'
      }
    }
  }
}`,...(O=(C=o.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var E,M,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Badge',
    outline: true
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Badge {...args}>Primary Outline</Badge>
      <Badge {...args} variant="secondary">Secondary Outline</Badge>
      <Badge {...args} variant="success">Success Outline</Badge>
      <Badge {...args} variant="error">Error Outline</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Outline badges have a transparent background with a colored border. They are less visually prominent than filled badges and work well in interfaces where you want to maintain a lighter appearance.'
      }
    }
  }
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var A,L,F;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Badge {...args} pill withDot variant="primary">Primary Pill with Dot</Badge>
      <Badge {...args} pill outline variant="secondary">Secondary Outline Pill</Badge>
      <Badge {...args} outline withDot variant="success" size="lg">Success Outline with Dot</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badge properties can be combined for even more customization. This example shows badges with multiple properties combined.'
      }
    }
  }
}`,...(F=(L=c.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var I,W,q;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  render: args => <div className="flex flex-col gap-6">
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-base font-medium mb-3">Light Mode</h3>
        <div className="flex flex-wrap gap-3">
          <Badge {...args} variant="primary">Primary</Badge>
          <Badge {...args} variant="success" withDot>Active</Badge>
          <Badge {...args} variant="error" pill>42</Badge>
          <Badge {...args} variant="info" outline>New</Badge>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-base font-medium mb-3 text-white">Dark Mode Preview</h3>
        <div className="flex flex-wrap gap-3">
          <Badge {...args} variant="primary">Primary</Badge>
          <Badge {...args} variant="success" withDot>Active</Badge>
          <Badge {...args} variant="error" pill>42</Badge>
          <Badge {...args} variant="info" outline>New</Badge>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges are designed to work in both light and dark modes. This example shows how badges appear in dark mode vs light mode contexts.'
      }
    }
  }
}`,...(q=(W=m.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var R,U,$;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: '42'
  },
  render: args => <div className="flex flex-wrap gap-4">
      <Badge {...args} variant="primary">42</Badge>
      <Badge {...args} variant="secondary" pill>99+</Badge>
      <Badge {...args} variant="error" size="sm" pill>7</Badge>
      <Badge {...args} variant="info" outline>New</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges are commonly used to display counts, such as notification counts. This example shows number badges in different styles.'
      }
    }
  }
}`,...($=(U=g.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var _,H,Y;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  render: args => <div className="space-y-6 max-w-xl">
      <div className="p-4 border border-gray-200 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium">Notification Center</h3>
          <Badge {...args} variant="error" pill>3</Badge>
        </div>
        <div className="space-y-3">
          <div className="p-2 bg-gray-50 rounded flex items-start">
            <div className="flex-1">New message from support team</div>
            <Badge {...args} variant="primary" size="sm">New</Badge>
          </div>
          <div className="p-2 bg-gray-50 rounded flex items-start">
            <div className="flex-1">Your subscription will expire soon</div>
            <Badge {...args} variant="warning" size="sm">Action Needed</Badge>
          </div>
          <div className="p-2 bg-gray-50 rounded flex items-start">
            <div className="flex-1">Weekly report is available</div>
            <Badge {...args} variant="info" size="sm">Info</Badge>
          </div>
        </div>
      </div>
      
      <div className="p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium mb-3">Product Status</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>Server Status</span>
              <Badge {...args} variant="success" withDot>Online</Badge>
            </div>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>Database</span>
              <Badge {...args} variant="warning" withDot>Maintenance</Badge>
            </div>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>API Status</span>
              <Badge {...args} variant="error" withDot>Degraded</Badge>
            </div>
          </div>
          <div className="p-2 bg-gray-50 rounded">
            <div className="flex items-center justify-between">
              <span>CDN Status</span>
              <Badge {...args} variant="success" withDot>Operational</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'These examples demonstrate common real-world usage patterns for badges, including notification indicators and status displays.'
      }
    }
  }
}`,...(Y=(H=p.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var K,G,J;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  },
  parameters: {
    docs: {
      description: {
        story: 'Badges should have sufficient color contrast and not be used alone to convey important information. Always ensure that the meaning is clear from context or add explicit labels for screen readers.'
      }
    }
  },
  render: args => <div className="space-y-4">
      <div className="flex items-center">
        <span className="mr-2">Notifications:</span>
        <Badge {...args} variant="error" aria-label="5 unread notifications">5</Badge>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Status:</span>
        <Badge {...args} variant="success" withDot aria-label="Status is active">Active</Badge>
      </div>
    </div>
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 max-w-md">
      {/* Notification counter */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Notification Counter</h3>
        <div className="relative inline-block">
          <button className="p-2 rounded-full border border-gray-200 dark:border-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <Badge variant="error" pill size="sm" className="absolute -top-1 -right-1">8</Badge>
        </div>
      </div>
      
      {/* Status in a list */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Status in a List</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b pb-2">
            <span>Server Status</span>
            <Badge variant="success" size="sm">Online</Badge>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <span>Database</span>
            <Badge variant="warning" size="sm">Degraded</Badge>
          </div>
          <div className="flex items-center justify-between pb-2">
            <span>Storage</span>
            <Badge variant="error" size="sm">Offline</Badge>
          </div>
        </div>
      </div>
      
      {/* Tags */}
      <div className="space-y-3">
        <h3 className="text-base font-medium">Category Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary" pill outline>Design</Badge>
          <Badge variant="secondary" pill outline>Development</Badge>
          <Badge variant="tertiary" pill outline>Marketing</Badge>
          <Badge variant="info" pill outline>Research</Badge>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'These examples demonstrate common real-world applications of the Badge component.'
      }
    }
  }
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 max-w-2xl">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-base font-medium mb-4">Light Mode</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="error" outline>Error</Badge>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-900 rounded-lg shadow-sm">
        <h3 className="text-base font-medium mb-4 text-white">Dark Mode</h3>
        <div className="space-y-4 dark">
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary" outline>Primary</Badge>
            <Badge variant="success" outline>Success</Badge>
            <Badge variant="error" outline>Error</Badge>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'This comparison shows badge appearance in light and dark modes, highlighting the enhanced contrast in dark mode.'
      }
    }
  }
}`,...(re=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const ue=["Default","Variants","Sizes","WithDot","Pill","Outline","Combined","DarkModePreview","WithNumbers","UsageExamples","AccessibilityExample","PracticalUseCases","DarkModeComparison"];export{u as AccessibilityExample,c as Combined,v as DarkModeComparison,m as DarkModePreview,i as Default,l as Outline,o as Pill,h as PracticalUseCases,d as Sizes,p as UsageExamples,t as Variants,n as WithDot,g as WithNumbers,ue as __namedExportsOrder,pe as default};

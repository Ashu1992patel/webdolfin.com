import{u as m,r as d,o as c,d as u,b as a,g as o,w as r,F as p,H as f,a as e,n as _,f as w,l as b}from"./app.6ba5b276.js";import{A as g}from"./AuthenticationCard.57317f72.js";import{_ as h}from"./AuthenticationCardLogo.6b76591f.js";import{_ as x,a as v}from"./TextInput.248ad029.js";import{_ as y}from"./InputLabel.aa24843c.js";import{_ as V}from"./PrimaryButton.6ab2dec3.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(F){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(A,i)=>(c(),u(p,null,[a(o(f),{title:"Secure Area"}),a(g,null,{logo:r(()=>[a(h)]),default:r(()=>[C,e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[a(y,{for:"password",value:"Password"}),a(x,{id:"password",ref_key:"passwordInput",ref:t,modelValue:o(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>o(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(v,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",k,[a(V,{class:_(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{j as default};

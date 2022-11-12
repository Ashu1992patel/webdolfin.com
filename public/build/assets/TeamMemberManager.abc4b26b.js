import{u as k,r as x,o as a,d as n,b as l,w as t,e as u,f as r,a as o,g as s,F as C,h as w,n as v,j as H,t as y,y as J}from"./app.6ba5b276.js";import{_ as K}from"./ActionMessage.9cb7d03b.js";import{_ as j}from"./Modal.e0f67a74.js";import{_ as B}from"./ConfirmationModal.68d13766.js";import{_ as P}from"./DangerButton.72903231.js";import{_ as Q}from"./DialogModal.f5be1555.js";import{_ as W}from"./FormSection.357c82a6.js";import{_ as X,a as F}from"./TextInput.248ad029.js";import{_ as z}from"./InputLabel.aa24843c.js";import{_ as V}from"./PrimaryButton.6ab2dec3.js";import{_ as M}from"./SecondaryButton.ccfc3fc9.js";import{S}from"./SectionBorder.064de5ce.js";import"./SectionTitle.4e8f1dbe.js";import"./_plugin-vue_export-helper.cdc0426e.js";const Y={key:0},Z=o("div",{class:"col-span-6"},[o("div",{class:"max-w-xl text-sm text-gray-600"}," Please provide the email address of the person you would like to add to this team. ")],-1),ee={class:"col-span-6 sm:col-span-4"},te={key:0,class:"col-span-6 lg:col-span-4"},se={class:"relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"},oe=["onClick"],le={class:"flex items-center"},ae={key:0,class:"ml-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},ne=o("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),re=[ne],ie={class:"mt-2 text-xs text-gray-600 text-left"},me={key:1},ce={class:"space-y-6"},de={class:"text-gray-600"},ue={class:"flex items-center"},ve=["onClick"],fe={key:2},be={class:"space-y-6"},ye={class:"flex items-center"},_e=["src","alt"],ge={class:"ml-4"},he={class:"flex items-center"},pe=["onClick"],ke={key:1,class:"ml-2 text-sm text-gray-400"},xe=["onClick"],Ce={key:0},we={class:"relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"},Te=["onClick"],Re={class:"flex items-center"},$e={key:0,class:"ml-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Me=o("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Se=[Me],Ae={class:"mt-2 text-xs text-gray-600"},Ge={__name:"TeamMemberManager",props:{team:Object,availableRoles:Array,userPermissions:Object},setup(i){const g=i,c=k({email:"",role:null}),f=k({role:null}),T=k(),R=k(),h=x(!1),$=x(null),p=x(!1),_=x(null),L=()=>{c.post(route("team-members.store",g.team),{errorBag:"addTeamMember",preserveScroll:!0,onSuccess:()=>c.reset()})},N=d=>{J.Inertia.delete(route("team-invitations.destroy",d),{preserveScroll:!0})},O=d=>{$.value=d,f.role=d.membership.role,h.value=!0},I=()=>{f.put(route("team-members.update",[g.team,$.value]),{preserveScroll:!0,onSuccess:()=>h.value=!1})},E=()=>{p.value=!0},D=()=>{T.delete(route("team-members.destroy",[g.team,H().props.value.user]))},U=d=>{_.value=d},q=()=>{R.delete(route("team-members.destroy",[g.team,_.value]),{errorBag:"removeTeamMember",preserveScroll:!0,preserveState:!0,onSuccess:()=>_.value=null})},A=d=>g.availableRoles.find(m=>m.key===d).name;return(d,m)=>(a(),n("div",null,[i.userPermissions.canAddTeamMembers?(a(),n("div",Y,[l(S),l(W,{onSubmitted:L},{title:t(()=>[r(" Add Team Member ")]),description:t(()=>[r(" Add a new team member to your team, allowing them to collaborate with you. ")]),form:t(()=>[Z,o("div",ee,[l(z,{for:"email",value:"Email"}),l(X,{id:"email",modelValue:s(c).email,"onUpdate:modelValue":m[0]||(m[0]=e=>s(c).email=e),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),l(F,{message:s(c).errors.email,class:"mt-2"},null,8,["message"])]),i.availableRoles.length>0?(a(),n("div",te,[l(z,{for:"roles",value:"Role"}),l(F,{message:s(c).errors.role,class:"mt-2"},null,8,["message"]),o("div",se,[(a(!0),n(C,null,w(i.availableRoles,(e,b)=>(a(),n("button",{key:e.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",{"border-t border-gray-200 rounded-t-none":b>0,"rounded-b-none":b!=Object.keys(i.availableRoles).length-1}]),onClick:G=>s(c).role=e.key},[o("div",{class:v({"opacity-50":s(c).role&&s(c).role!=e.key})},[o("div",le,[o("div",{class:v(["text-sm text-gray-600",{"font-semibold":s(c).role==e.key}])},y(e.name),3),s(c).role==e.key?(a(),n("svg",ae,re)):u("",!0)]),o("div",ie,y(e.description),1)],2)],10,oe))),128))])])):u("",!0)]),actions:t(()=>[l(K,{on:s(c).recentlySuccessful,class:"mr-3"},{default:t(()=>[r(" Added. ")]),_:1},8,["on"]),l(V,{class:v({"opacity-25":s(c).processing}),disabled:s(c).processing},{default:t(()=>[r(" Add ")]),_:1},8,["class","disabled"])]),_:1})])):u("",!0),i.team.team_invitations.length>0&&i.userPermissions.canAddTeamMembers?(a(),n("div",me,[l(S),l(j,{class:"mt-10 sm:mt-0"},{title:t(()=>[r(" Pending Team Invitations ")]),description:t(()=>[r(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")]),content:t(()=>[o("div",ce,[(a(!0),n(C,null,w(i.team.team_invitations,e=>(a(),n("div",{key:e.id,class:"flex items-center justify-between"},[o("div",de,y(e.email),1),o("div",ue,[i.userPermissions.canRemoveTeamMembers?(a(),n("button",{key:0,class:"cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",onClick:b=>N(e)}," Cancel ",8,ve)):u("",!0)])]))),128))])]),_:1})])):u("",!0),i.team.users.length>0?(a(),n("div",fe,[l(S),l(j,{class:"mt-10 sm:mt-0"},{title:t(()=>[r(" Team Members ")]),description:t(()=>[r(" All of the people that are part of this team. ")]),content:t(()=>[o("div",be,[(a(!0),n(C,null,w(i.team.users,e=>(a(),n("div",{key:e.id,class:"flex items-center justify-between"},[o("div",ye,[o("img",{class:"w-8 h-8 rounded-full",src:e.profile_photo_url,alt:e.name},null,8,_e),o("div",ge,y(e.name),1)]),o("div",he,[i.userPermissions.canAddTeamMembers&&i.availableRoles.length?(a(),n("button",{key:0,class:"ml-2 text-sm text-gray-400 underline",onClick:b=>O(e)},y(A(e.membership.role)),9,pe)):i.availableRoles.length?(a(),n("div",ke,y(A(e.membership.role)),1)):u("",!0),d.$page.props.user.id===e.id?(a(),n("button",{key:2,class:"cursor-pointer ml-6 text-sm text-red-500",onClick:E}," Leave ")):i.userPermissions.canRemoveTeamMembers?(a(),n("button",{key:3,class:"cursor-pointer ml-6 text-sm text-red-500",onClick:b=>U(e)}," Remove ",8,xe)):u("",!0)])]))),128))])]),_:1})])):u("",!0),l(Q,{show:h.value,onClose:m[2]||(m[2]=e=>h.value=!1)},{title:t(()=>[r(" Manage Role ")]),content:t(()=>[$.value?(a(),n("div",Ce,[o("div",we,[(a(!0),n(C,null,w(i.availableRoles,(e,b)=>(a(),n("button",{key:e.key,type:"button",class:v(["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200",{"border-t border-gray-200 rounded-t-none":b>0,"rounded-b-none":b!==Object.keys(i.availableRoles).length-1}]),onClick:G=>s(f).role=e.key},[o("div",{class:v({"opacity-50":s(f).role&&s(f).role!==e.key})},[o("div",Re,[o("div",{class:v(["text-sm text-gray-600",{"font-semibold":s(f).role===e.key}])},y(e.name),3),s(f).role===e.key?(a(),n("svg",$e,Se)):u("",!0)]),o("div",Ae,y(e.description),1)],2)],10,Te))),128))])])):u("",!0)]),footer:t(()=>[l(M,{onClick:m[1]||(m[1]=e=>h.value=!1)},{default:t(()=>[r(" Cancel ")]),_:1}),l(V,{class:v(["ml-3",{"opacity-25":s(f).processing}]),disabled:s(f).processing,onClick:I},{default:t(()=>[r(" Save ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(B,{show:p.value,onClose:m[4]||(m[4]=e=>p.value=!1)},{title:t(()=>[r(" Leave Team ")]),content:t(()=>[r(" Are you sure you would like to leave this team? ")]),footer:t(()=>[l(M,{onClick:m[3]||(m[3]=e=>p.value=!1)},{default:t(()=>[r(" Cancel ")]),_:1}),l(P,{class:v(["ml-3",{"opacity-25":s(T).processing}]),disabled:s(T).processing,onClick:D},{default:t(()=>[r(" Leave ")]),_:1},8,["class","disabled"])]),_:1},8,["show"]),l(B,{show:_.value,onClose:m[6]||(m[6]=e=>_.value=null)},{title:t(()=>[r(" Remove Team Member ")]),content:t(()=>[r(" Are you sure you would like to remove this person from the team? ")]),footer:t(()=>[l(M,{onClick:m[5]||(m[5]=e=>_.value=null)},{default:t(()=>[r(" Cancel ")]),_:1}),l(P,{class:v(["ml-3",{"opacity-25":s(R).processing}]),disabled:s(R).processing,onClick:q},{default:t(()=>[r(" Remove ")]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}};export{Ge as default};

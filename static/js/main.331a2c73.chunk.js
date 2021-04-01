(this["webpackJsonpdemo-0"]=this["webpackJsonpdemo-0"]||[]).push([[0],{25:function(e,t,a){"use strict";a.r(t);var i=a(8),c=a(9),s=a(2),n=a(0),l=(s.b.div.withConfig({displayName:"spinner__SpinnerContainer",componentId:"sc-1tzdjyi-0"})(["&{display:inline-block;position:relative;width:80px;height:80px;}& div{position:absolute;width:16px;height:16px;border-radius:50%;background:#fd7d00;animation:lds-grid 1.2s linear infinite;}& div:nth-child(1){top:8px;left:8px;animation-delay:0s;}& div:nth-child(2){top:8px;left:32px;animation-delay:-0.4s;}& div:nth-child(3){top:8px;left:56px;animation-delay:-0.8s;}& div:nth-child(4){top:32px;left:8px;animation-delay:-0.4s;}& div:nth-child(5){top:32px;left:32px;animation-delay:-0.8s;}& div:nth-child(6){top:32px;left:56px;animation-delay:-1.2s;}& div:nth-child(7){top:56px;left:8px;animation-delay:-0.8s;}& div:nth-child(8){top:56px;left:32px;animation-delay:-1.2s;}& div:nth-child(9){top:56px;left:56px;animation-delay:-1.6s;}@keyframes lds-grid{0%,100%{opacity:1;}50%{opacity:0.5;}}"]),a.p+"static/media/logo.39ec9f5b.svg");function o(e){var t=e.text,a=e.href;return Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:a,children:t})})}function r(){return Object(n.jsx)("header",{className:"section page-header",children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/#",style:{position:"relative",top:"-7px"},children:Object(n.jsx)("img",{className:"brand-logo-light",src:l,alt:"",width:"125",height:"50"})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",style:{justifyContent:"flex-end"},children:Object(n.jsxs)("ul",{className:"navbar-nav mt-2 mt-lg-0",style:{paddingLeft:"15px"},children:[Object(n.jsx)(o,{text:"About Us",href:"#aboutUs"}),Object(n.jsx)(o,{text:"Curriculum",href:"#curriculum"}),Object(n.jsx)(o,{text:"Testimonials",href:"#testimonials"}),Object(n.jsx)(o,{text:"How it Works",href:"#howItWorks"}),Object(n.jsx)(o,{text:"Get in Touch",href:"#contact"}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("div",{className:"rd-navbar-button-block",children:Object(n.jsx)("a",{className:"button button-default-outline",href:"#subscride","data-custom-scroll-to":"subscride",children:"Join Now"})})})]})})]})})}var d=a(4),h=a(1),j=a.p+"static/media/be.e3a72494.svg",m=a(13),b=a(14),g=a(17),x=a(16),u=a(15),f=a.n(u),p={position:"absolute",top:"-6px",right:"-6px",height:"26px",width:"26px",fontSize:"20px",lineHeight:"26px"};function O(e){var t=e.toggleModal;return Object(n.jsx)("i",{className:"button-tight fas fa-times",style:p,onClick:t})}function v(e){var t=e.showModal,a=e.toggleModal,i=e.children;return t?Object(n.jsx)("div",{className:"modal",onClick:a,children:Object(n.jsx)("div",{className:"container",style:{height:"100vh"},children:Object(n.jsx)("div",{className:"row",style:{height:"100vh"},children:Object(n.jsx)("div",{className:"modal-dialog align-self-center",style:{width:"100%"},onClick:function(e){return e.stopPropagation()},children:i})})})}):""}var w=a.p+"static/media/intro.59d67ffe.mp3",y=s.b.div.withConfig({displayName:"explainer__WaveformContianer",componentId:"sc-9jzdwh-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;height:100px;width:100%;background:white;padding:20px;border-radius:32px;"]),N=s.b.div.withConfig({displayName:"explainer__Wave",componentId:"sc-9jzdwh-1"})(["width:100%;margin-left:20px;& wave{overflow:hidden !important;}"]);s.b.button.withConfig({displayName:"explainer__PlayButton",componentId:"sc-9jzdwh-2"})(["display:flex;justify-content:center;align-items:center;width:60px;height:60px;border-radius:50%;border:none;outline:none;cursor:pointer;padding-bottom:3px;&:hover{background:#DDD;}"]);var A=function(e){Object(g.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={playing:!1},e.handlePlay=function(){e.setState({playing:!e.state.playing}),e.waveform.playPause()},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e,t=document.querySelector("#track");this.waveform=f.a.create({barWidth:3,cursorWidth:1,container:"#waveform",backend:"WebAudio",height:80,progressColor:"#2570FF",responsive:!0,waveColor:"#1cc0bb",cursorColor:"#1cc0bb"}),this.waveform.load(t),(e=this.waveform).on("ready",(function(){e.playPause()}))}},{key:"componentWillUnmount",value:function(){console.log("asdfasdf"),this.waveform.destroy()}},{key:"render",value:function(){return Object(n.jsxs)(y,{children:[Object(n.jsx)("button",{className:"button button-primary",style:{color:"white",width:"60px",padding:0,height:"40px"},onClick:this.handlePlay,children:Object(n.jsx)("i",{className:"icon fa-"+(this.state.playing?"pause":"play")})}),Object(n.jsx)(N,{id:"waveform"}),Object(n.jsx)("audio",{id:"track",src:w})]})}}]),a}(h.Component);function I(e){var t=e.showModal,a=e.toggleModal;return Object(n.jsx)(v,{showModal:t,toggleModal:a,children:Object(n.jsxs)("div",{className:"explainerModal col-md-16 align-self-center",children:[Object(n.jsx)(O,{toggleModal:a}),Object(n.jsx)(A,{})]})})}var k=s.b.div.withConfig({displayName:"header__MainImContainer",componentId:"sc-1natusb-0"})(["visibility:visible;"]),M=s.b.h1.withConfig({displayName:"header__Title",componentId:"sc-1natusb-1"})(["visibility:visible;"]),C=s.b.p.withConfig({displayName:"header__SubTitle",componentId:"sc-1natusb-2"})(["visibility:visible;"]);s.b.div.withConfig({displayName:"header__ButtonsContainer",componentId:"sc-1natusb-3"})(["visibility:visible;"]);function E(){var e=Object(h.useState)(!1),t=Object(d.a)(e,2),a=t[0],i=t[1],c=function(){return i(!a)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{toggleModal:c,showModal:a}),Object(n.jsx)("section",{className:"section-lg bg-default section-decoration-6 ",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-50 align-items-lg-center justify-content-lg-between",children:[Object(n.jsx)("div",{className:"col-lg-6 order-lg-2",children:Object(n.jsx)("div",{className:"animate-box",children:Object(n.jsx)(k,{className:"wow slideInRight",children:Object(n.jsx)("img",{src:j,alt:"",width:"584",height:"472"})})})}),Object(n.jsx)("div",{className:"col-lg-6 col-xl-5 order-lg-1",children:Object(n.jsxs)("div",{className:"animate-box",children:[Object(n.jsx)(M,{children:"Get back control of your life"}),Object(n.jsx)(C,{children:"The first interactive parenting program focused on what you can do rather than what you should do."}),Object(n.jsxs)("button",{className:"button button-primary button-shadow button-link button-video",style:{color:"white"},onClick:c,children:[Object(n.jsx)("span",{children:"Listen to us"}),Object(n.jsx)("span",{className:"icon fa-play"})]})]})})]})})})]})}var S={height:"100%",alignItems:"center",justifyContent:"center"};function Y(e){var t=e.showModal,a=e.toggleModal;return Object(n.jsx)(v,{showModal:t,toggleModal:a,children:Object(n.jsxs)("div",{className:"joinModal col-md-12",children:[Object(n.jsx)(O,{toggleModal:a}),Object(n.jsxs)("div",{className:"d-flex flex-column",style:S,children:[Object(n.jsx)("h4",{style:{textAlign:"center"},children:"Hi, we are in private beta"}),Object(n.jsx)("span",{style:{textAlign:"center"},children:"Let us know if you want to join and we will send you an invite"}),Object(n.jsxs)("form",{id:"subscribeForm",className:"rd-form rd-mailform rd-form-inline","data-form-output":"form-output-global","data-form-type":"subscribe",method:"post",action:"https://getform.io/f/0200877d-bcc8-4f9e-bf13-033a2baebe99",style:{marginTop:"60px"},children:[Object(n.jsxs)("div",{className:"form-wrap",children:[Object(n.jsx)("input",{className:"form-input form-input-shadow form-control-has-validation",id:"subscribe-form-email",type:"email",name:"email",placeholder:"Your E-mail",required:!0}),Object(n.jsx)("span",{className:"form-validation"})]}),Object(n.jsx)("div",{className:"form-button",children:Object(n.jsx)("button",{className:"button button-primary button-lg button-shadow",type:"submit",children:"Send"})})]})]})]})})}var L=a.p+"static/media/dance.6c6a03e5.svg";function G(){var e=Object(h.useState)(!1),t=Object(d.a)(e,2),a=t[0],i=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Y,{toggleModal:function(){return i(!a)},showModal:a}),Object(n.jsx)("button",{className:"button button-primary button-shadow",onClick:function(){return i(!a)},children:"Join"})]})}function W(){return Object(n.jsx)("section",{className:"section-lg bg-default bg-gray-100",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-30 align-items-lg-center",children:[Object(n.jsx)("div",{className:"col-lg-7 text-center text-lg-left",children:Object(n.jsx)("div",{className:"animate-box",children:Object(n.jsx)("div",{className:"wow slideInLeft",children:Object(n.jsx)("img",{src:L,alt:"",width:"563",height:"509"})})})}),Object(n.jsxs)("div",{className:"col-lg-5 col-xl-5",children:[Object(n.jsxs)("div",{className:"animate-box",children:[Object(n.jsx)("h2",{className:"wow slideInRight",children:"Our program"}),Object(n.jsx)("p",{className:"wow slideInRight",children:"Our belief is that we are all doing what we can. While all books and programs tell you how you should be, we will tell you what you should do. You don't need go through decades of psychotherapy in order to become a better parent, you can do it now, with few simple changes."})]}),Object(n.jsxs)("div",{className:"button-block group-lg wow fadeIn",children:[Object(n.jsx)(G,{}),Object(n.jsx)("a",{className:"button button-default-outline",href:"#contact",children:"Contact us"})]})]})]})})})}var R=a.p+"static/media/debbie.36ddd8e7.jpg",B=a.p+"static/media/Pedro.734c1200.jpg",U={animationName:"none"},z={marginLeft:"10px",width:"16px",height:"16px"},Q={textAlign:"left"},J={fontStyle:"italic"};function Z(e){var t=e.img,a=e.name,i=e.job,c=e.linkedin,s=e.web,l=e.children;return Object(n.jsx)("div",{className:"col-sm-12 col-lg-6",children:Object(n.jsxs)("div",{className:"team-classic",style:Q,children:[Object(n.jsx)("div",{className:"team-classic-img",children:Object(n.jsx)("img",{src:t,alt:a,width:"230",height:"230"})}),Object(n.jsxs)("div",{className:"team-classic-caption",children:[Object(n.jsxs)("h5",{className:"team-classic-title",children:[a,Object(n.jsx)("a",{className:"icon fa-linkedin",style:z,href:c}),s?Object(n.jsx)("a",{className:"icon fa-globe",style:z,href:s}):""]}),Object(n.jsxs)("p",{style:J,children:[" ",i]}),Object(n.jsx)("p",{children:l}),Object(n.jsx)("p",{})]})]})})}function T(){return Object(n.jsxs)("section",{id:"aboutUs",className:"section-lg bg-default section-decoration-1 section-decoration-1-mode",children:[Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"block-sm animate-box text-center text-md-left ml-md-0",children:Object(n.jsx)("div",{className:"wow fadeInDown",style:U,children:Object(n.jsx)("h2",{children:"Your Hosts"})})})}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-30",children:[Object(n.jsx)(Z,{img:R,name:"Debbie Pincus, M.S. LMHC",job:"Psycologis",linkedin:"https://www.linkedin.com/in/debbiepincus/",web:"https://www.debbiepincus.com/content/about-me",children:"Debbie is an author and clinical psychologist with more than 25 years of experience, specialized in parenting and marriage counseling. She is also a board member of the Larchmont/Mamaroneck Counseling Center and the Total Transformation Advisory Board, and the author of several books on interpersonal relations. Debbie specializes in Bowen family systems, cognitive-behavioral therapy, dialectic behavioral therapy, and Screamfree Parent and Marriage Coaching."}),Object(n.jsx)(Z,{img:B,name:"Pedro A. Favuzzi, Ph.D.",job:"Host",linkedin:"https://www.linkedin.com/in/pedro-antonio-favuzzi/",children:"Pedro is a father, husband, and entrepreneur passionate about psychology and communication. He is also a serial entrepreneur passionate about education, technology, and self development. He will be your host, working with debbie to uncover all the information that might be hard to understand, and keep things focused on tangible, and actionable advice."})]})})]})}var P={height:"100%",paddingBottom:"90px"},D={position:"absolute",bottom:"45px"};function F(e){var t=e.iconName,a=e.title,i=e.children;return Object(n.jsx)("div",{className:"col-sm-6 col-lg-4 wow fadeIn","data-wow-delay":"0.2s",children:Object(n.jsxs)("div",{className:"box-icon-classic",style:P,children:[Object(n.jsx)("div",{className:"icon-main",children:Object(n.jsx)("i",{className:"faIcon fas fa-".concat(t)})}),Object(n.jsx)("h4",{className:"box-icon-title",children:Object(n.jsx)("a",{href:"#contact",children:a})}),Object(n.jsx)("p",{children:i}),Object(n.jsxs)("a",{className:"button-link",style:D,href:"#contact",children:[Object(n.jsx)("span",{children:"Learn More"}),Object(n.jsx)("span",{className:"icon fa-long-arrow-right"})]})]})})}function K(){return Object(n.jsx)("section",{id:"curriculum",className:"section-lg bg-default section-decoration-2 section-decoration-2-mode",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"block-sm animate-box text-center text-md-left ml-md-0",children:Object(n.jsx)("div",{className:"wow fadeInDown",children:Object(n.jsx)("h2",{children:"What will you learn"})})}),Object(n.jsxs)("div",{className:"row row-30 cardsContainer",children:[Object(n.jsx)(F,{iconName:"spa",title:"Remaining Calm",children:"Learn how to communicate calmess to your child, how will it impact him/her, and yourself."}),Object(n.jsx)(F,{iconName:"hat-wizard",title:"Children Needs",children:"Understanding your child needs will help you choose when action is needed and when is not."}),Object(n.jsx)(F,{iconName:"fire",title:"Activity Vs Reactivity",children:"A strategy is all you need. Having a plan will remove confusion and frustration from your relationship with your child."}),Object(n.jsx)(F,{iconName:"comment-dots",title:"Communicate with actions",children:"Our actions talk for us, our behavior is not influenced by now, but by thousands of little daily interactions."}),Object(n.jsx)(F,{iconName:"seedling",title:"Making children behave",children:"Some time our children test us, knowing the best way to handle these situations will give you the confidence in yourself he needs you to have."}),Object(n.jsx)(F,{iconName:"tree",title:"Giving Space to Grow",children:"Research shows parents have nearly no influence in what their children will become, but you can influence their future confidence and happiness."})]})]})})}var V=a.p+"static/media/Marta.dc1eabb0.jpg",X=a.p+"static/media/Dominika.ad482a06.jpg",q=a.p+"static/media/Patrick.41b5d06f.jpg";function H(e){var t=e.img,a=e.position,i=void 0===a?"":a,c=e.name,s=e.children;return Object(n.jsx)("div",{className:"col-12 text-center ".concat(i),children:Object(n.jsx)("div",{className:"box-icon-modern secondary",children:Object(n.jsxs)("div",{className:"unit unit-spacing-lg flex-column flex-sm-row align-items-sm-center",children:[Object(n.jsx)("div",{className:"unit-left",children:Object(n.jsx)("div",{className:"box-icon-main",children:Object(n.jsx)("img",{src:t,alt:c})})}),Object(n.jsxs)("div",{className:"unit-body",children:[Object(n.jsx)("h4",{className:"box-icon-modern-title dark-title",children:c}),Object(n.jsx)("p",{className:"dark-text",children:s})]})]})})})}function _(){return Object(n.jsx)("section",{id:"testimonials",className:"section-lg bg-gray-100",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-50 align-items-lg-center",children:[Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"row row-30",children:[Object(n.jsx)(H,{img:V,name:"Marta Conti",children:"After struggling with my child and his anger issues and quick temper I have seen the light which this wonderful program offers. I can\u2019t recommend it enough for anyone who has anyone with difficult issues."}),Object(n.jsx)(H,{img:X,name:"Dominika Matiss",position:"text-lg-left",children:"This program has a ton of great information that really helps parents understand our role in continuing the dance of arguments we are constantly engaging with our kiddos. Awareness is a huge step!"}),Object(n.jsx)(H,{img:q,name:"Patrick Zaval",position:"text-lg-right",children:"This is a great program and eye opening, Easy to follow. I have listened to it many times and learn something new each time. Excellent source for any parent who is looking for a calm approach to parenting."})]})}),Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"block-xs",children:[Object(n.jsx)("h2",{children:"What other parents say about us"}),Object(n.jsx)("p",{children:"During the last 20 years we have helped hundreds of parents reach the relationships they wanted and their children needed."})]})})]})})})}var $=a.p+"static/media/discuss.0c792abf.svg",ee=a.p+"static/media/learn.99f92636.svg",te=a.p+"static/media/meet.cc77a6a3.svg",ae=a.p+"static/media/play.fc7afdc6.svg",ie=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACSCAMAAABhRZhLAAAAkFBMVEUAAAAgz4Ag34Ag34Ab34Ag2oAg34Ac24Ac34Ag24Ag34Qd3IAd3IMg3IAe34Mg34Md3IIg3IIe34Mg34Me3YIg3YIe34Ig34Ie3YEg3YAg3YEe34Ie3IEe3YEe3YIe34Ie34Mg34Ie3IEe3oEf3YIf3YMf34Ig34Ie3oEf3oEf34Ef3oEf3oIf3oIf3oIf3oKBfr1gAAAAL3RSTlMAEBAgMDAwQEBAT1BQUF9fYGBvb3Bwf3+AgICPkJCfn5+foKCvr6+vsL+/z8/f71GNJgkAAAKlSURBVBgZ7cHtUhpZGIXRzXmVTscvJAI9CiJCdBo457n/uxsLrJkfMzURiJWdql5Lli7ygyxFhr4cvUCWo29QQoYCGMlRhrkcTSCHDAVwI0ffYSpL/dwmdTodKyFTE3JPljKEHNWwlaVnuJOlDCFHfdjK0gzuZClDX476kGWpgaksxfI11Ol0Oh+WLkKWUuFJlgK28lQo8rSFkKUlfJWlBu5kaQBTWerDn7KUIMtTBnm6zyN1Op3OIdIg5OmVIk8tVLI0grUspQKVLN3DVJYSlJ4stdDIUg1FnlqoZGkE5/J0VavT6XgaT0OWLqGRpQE0snQJT7JUw5Ms9eFJlgLWshSwlqUEWZ4gyxNs5Wn0WqvT6XQ+6CI/yFOGvhxNIMtRZKjk6AFWchRAyNEzzOUogJCjZ5jLUgshS3Fb61RnVRUhF2k47WlvwF7Jmzv9YmnYAo32Rvwt61dKw5adP7SXZovXts0ZmOpniAsdIVp2yqzWvyS9i5LHoeOkcWGlww14U2a1/teAN5vr0OG+ZGCrw6VcZrV+JDI76+vQQaLlzUvo8/SXmZ1KBxgXINf6ZPUyA1/1YZGBcp90kDS81uHq5Wto7+xMPzIC2tBh0gYqnSCA9XRY6T+kSjtps6l1qBfgXCeoebdZnesf6WK4yrDSsR6BW52kaQt7a70brjJ7Wx3pEbjVyfpXs7bAWnuXvMuLKx3nEbjVTxJXSXs1kBff6qRjPQCNPkHUSae4Axo5uodGnm5v1Ol0rEzKgywF0JOjZ5jLUQAhR88wl6PIEHI0gbkcRYaQownMZek7VLIUzY06v7dYDOWpgUqWBjCVpVQoPVlaQiVLNTzJUiqUnt7EcDWWlRkM9GXc8qYvJzXkwk4OWSnslMUgycsMKLM6yU6a3dey8xdNVVt6peC3bwAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAACXCAMAAADOKiwaAAAAjVBMVEUAAAAgz4Ag34Ag34Ab34Ag2oAg34Ac24Ac34Ag24Ag34Qd3IAd3IMg3IAe34Mg34Md3IIg3IAg3IIe34Mg34Me3YIg3X8g3YIe34Ig34Ie3YEg3YEe34Ie3IEe3YEe3YIe34Ie34Mg34Ie3IEe3oEf3YIg34Ie3oEf3oEf34Ef3oEf3oIf3oIf3oIf3oISpkRcAAAALnRSTlMAEBAgMDAwQEBAT1BQUF9fYGBgb29wcHB/f4CAj5CQn5+fn6Cgr6+wv7/Pz9/vLIZojQAAArFJREFUGBntwY1C4lYUhdGdexRMGX5KnRKDULSRErz3e//H66DIM4zZWUtPPMtHocjHO4RsdPCHbGzgp2z8gBfZCHiXjwLycYKQjT2sZGMN9/JRJ41Go9Ho93EX8rGiVLKxh1Y2AkolGx20shFQKtnooJWNgFLJRgfPshFAJRsdWT7SPGk0Gn1PSUaeaWQjAW8hF3sgh1xsCtDIRWTgUMlE6oAccrEFWtmYZO7lIyU5ugv5mEC/CJnYcNEvQg5SV/jQLyo5qLvMxU+ZqLsMS/moZ7qK0u+mSSZaLvrdNMlAnbnqQwYmj8fCRSsTk8djYamru6TBC139gPNuluRhw4fzbpY0fKnLXC3kYLI+Zn7Z6ctd0qBN1sdz6GoFpX9rZ3dysOfLearBi+O58OlFV/H2+vq6a9t2Nas0OFE/7k+Zpa723Ox0k6bTaUQkDcyam/908y9fylRDMqnrer5aPbZt6Kbj5kWDF/vX4+l0Ouec57ppFiEbK6BfJHmY8+Ewk4W6y1zkQyUL6yMXK5mI9Qnu5SMmGg1c2v0lH3toZGMD/CMbW+BcycUWyCEXfwI55GKSId/LRWR4kY3IJWQkaTQafU8PM/mYwEw25pAr2ThBKxs1ELLRQS8bqcBUNjaQK9k4QysbNbzLx76sNRqNRqPfycNCPmpoZGMONLKxBRrZ2AKNbGyBRja2QCMbW2AhG1tYysd6q9Fo9F09hHysyDPZ6IBGLiIDz7KxB84hF1sgh1zMC5SlXESGXjbiyN8ykjQajb6plORjUkolGx0cZCOAqWxsoZeNVGAhGxsolWycoJWNGkrIRgcvshGFpXxEaDR0DyEfTxByEQWmcvEEvQbuYaZPkWGpYfsBeaGLJ8gauJpf8iGUMiw1dOsTF4cGsgxEx6elLESXgSwXsc5lLjv/A5IDX6GioPGDAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAACnCAMAAAD5TmOXAAAAjVBMVEUAAAAgz4Ag34Ag34Ab34Ag2oAg34Ac24Ac34Ag24Ag34Qd3IAd3IMd34Ag3IAe34Mg34Md3IIg3IIe34Mg34Me3YIg3YIe34Ig34Ie3YEg3YEe34Ie3IEe3YEg3YEe3YIe34Ig34Ie3IEe3oEf3YIf3YMg34Ie3oEf3oEf34Ef3oEf3oIf3oIf3oIf3oJ7TS4PAAAALnRSTlMAEBAgMDAwQEBAT1BQUFBfX2Bgb29wcH9/gICPkJCQn5+foKCvr6+wv7/Pz9/vR/mS9QAAA9BJREFUGBntwY1WW9cVhdHF2SB0K0dG/EsRjRAqvcjnfO//eBXQZthoN4mNMTfDa05Z6vBYlgqYyzIzWMoy/4J/yDIVDmSJgE+yzAdYyTI3cCLLfIKRLFGgyTId/FuWKXf9SGZmZvZ3MZ7IUgFzWWYNK1kigJAl1rCSJQIIWWINK1kigJAl1rCSJQoQssyWpSwXMjMzG5jxRJYKmMsya1jJEgGELLGGlSwRQMgSa1jJEgGELLGGlSxRgJBltixluZCZmb2LcijLbXmQZWZQZYlS4USWuIYqSwRwJEusYSVLzKCFLFFhLkt8gCrLlNqmMjMzG5SYhCxVqbLMNVRZIoCJLLGGlSzxCxCyRIW5LDGDKktEhRNZYgYbWabc3YfMzMyGJCYhS1WqLHMNVZYIYCJLrGElS/wChP4mIo7141SYa+jK8nazrY2dBz2bzQ/1tmZQNXgf+N0nPSlAXR3r7USFEw1TOdtM9KzjUavb+9upnpTGo7b5WPQ2ZrDRII2XDdqBnnVdhL4QN1ueXehNlLv70PCUs55HVX8kTnt2PunnEVeNR32nP1NO79tcP4+enbYospcW0Hf6SrG50k9geqSv1sMq9H2MJxqUcraZ6NtdAjX0PZzDhYZjvGzQDvTtLtm50utdAysNRDnreVT1GlGBVeh1ym/AumgQ4qrxqO/0OuUOqEd6jdgCcw1Ez05bFL3eJdD0ClGBSw3FAvpO30dUHvTtRhXaVMMxPdJ3U6ZF366HOtJ7K2ebid7Q1fJQX+2SGnpn42WDdqA30wHbj6GvVPS+ylnPo6q3M+LJw0f9ucOrfnugAYirxqO+01uKm8qjtgr9gTJZNnYuNAA9O21R9Oa6u8bOXP9POesbT9qRBmABfacf5PQeTvQkNg8Pm9vlfH42Cz274cn2ptMwTI/0A8VIzz7wu6pnC2j350XvLfS+SuV/qv7rtCt6d+PKhd5XiVHXTWez+bzTcIx7oMpeGvfs1KnsS7Fmpy1kL8zYaYsie+kG2qLI9kV/EzL7a0KW+5V6INsXW+BYtue8AUvZS+VXoHWyl0YV6EP20oSdS9m+G6idLBH9P4vM7LXKsSxVtlRZomyBA9mesgVOZXvKFjiV7YkKbSTbExXaSLavQhvJEo02kmXiZiQze70iy/3GlSxzDU2WCOBSti8qrGSJNdQi23cOhGxfAHNZosJKlihQQ/aZ8Tz0ZHo7kn2u8iBLNTiQZRYwl2UKVFmqh2NZ5hKW2imzvl7IPlMa7aDM+gZU2efu4KHxZC77XMez/rzIvtSA/rzI9oxuF0X2wn8ACXF8u7ickf4AAAAASUVORK5CYII="];function ce(e){var t=e.img,a=e.num,i=e.c1,c=e.c2,s=e.c3,l=e.width,o=e.height,r=e.title,d=e.children,h=Number(a)-1;return Object(n.jsxs)("div",{className:"row row-30 ".concat(i),children:[Object(n.jsx)("div",{className:c,children:Object(n.jsx)("div",{className:"animate-box",children:Object(n.jsx)("div",{className:"wow slideInLeft","data-wow-delay":"0.2s",children:Object(n.jsx)("img",{src:t,alt:"",width:234*Math.pow(1.2,h),height:264*Math.pow(1.2,h)})})})}),Object(n.jsxs)("div",{className:s,children:[Object(n.jsx)("div",{className:"wow fadeIn","data-wow-delay":"0.35s",children:Object(n.jsxs)("div",{className:"box-numeric unit unit-spacing-lg flex-column flex-sm-row",children:[Object(n.jsx)("div",{className:"unit-left",children:Object(n.jsx)("div",{className:"box-numeric-num",children:Object(n.jsx)("span",{children:a})})}),Object(n.jsxs)("div",{className:"unit-body",children:[Object(n.jsx)("h4",{children:r}),Object(n.jsx)("p",{children:d})]})]})}),Object(n.jsx)("div",{className:"arrow-block arrow-".concat(h+1," wow fadeIn"),"data-wow-delay":"0.45s",children:Object(n.jsx)("img",{src:ie[h],alt:"",width:l,height:o})})]})]})}function se(){return Object(n.jsxs)("section",{id:"howItWorks",className:"section-lg bg-default section-decoration-4",children:[Object(n.jsx)("div",{className:"decoration-img",children:Object(n.jsx)("img",{src:"./Home_files/section-decorate-img-3.png",alt:""})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row justify-content-center justify-content-md-start",children:Object(n.jsx)("div",{className:"col-sm-9 col-lg-7 col-xl-5",children:Object(n.jsx)("div",{className:"text-center text-md-left",children:Object(n.jsx)("div",{className:"wow fadeInDown",children:Object(n.jsx)("h2",{children:"The learning experience"})})})})}),Object(n.jsx)(ce,{img:$,width:"152",height:"146",c1:"justify-content-center align-items-md-center",c2:"col-md-5 col-lg-4 text-center",c3:"col-md-7 col-lg-6",num:"01",title:"Start interacting",children:"Our interactive content is built to help you take action fast"}),Object(n.jsx)(ce,{img:ee,width:"236",height:"150",c1:"align-items-md-center justify-content-md-end",c2:"col-md-5 col-lg-4 order-md-2 text-center",c3:"col-md-7 col-lg-6 col-xl-5 order-md-1",num:"02",title:"Do your homework",children:"Yes, we take our work seriously, and we know that, in order to have change, we all need to do our homework."}),Object(n.jsx)(ce,{img:te,width:"281",height:"166",c1:"justify-content-center align-items-md-center",c2:"col-md-5 col-lg-5 text-center",c3:"col-md-7 col-lg-6",num:"03",title:"Talk to us and your peers",children:"We regularly organize sessions where you can meet with us and other parents just like you. Tell us about your specific needs and problems."}),Object(n.jsx)(ce,{img:ae,c1:"justify-content-md-end align-items-md-center",c2:"col-md-5 col-lg-4 order-md-2 text-center",c3:"col-md-7 col-lg-6",num:"04",title:"Be the parent you want to be",children:"Enjoy a calm, anxiety and fear free life with your family."})]})]})}var ne=a.p+"static/media/connect.bf68f5a9.svg";function le(){return Object(n.jsx)("section",{id:"contact",className:"section-lg bg-default section-decoration-2",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-30 align-items-lg-center justify-content-center",children:[Object(n.jsx)("div",{className:"col-lg-6 text-center",children:Object(n.jsx)("div",{className:"animate-box",children:Object(n.jsx)("div",{className:"wow slideInLeft","data-wow-delay":"0.2s",children:Object(n.jsx)("img",{src:ne,alt:"",width:"499",height:"550"})})})}),Object(n.jsx)("div",{className:"col-lg-6",children:Object(n.jsxs)("div",{className:"box-contact-form wow fadeIn","data-wow-delay":"0.2s",children:[Object(n.jsx)("h4",{className:"font-weight-light",children:"We would love to get to know you!"}),Object(n.jsx)("p",{className:"font-weight-light",children:"Hi Im Debbie, I have helped hundreds of parents gain back control of their life, tell me what you need and I will work hard to help you."}),Object(n.jsx)("form",{className:"rd-form rd-mailform","data-form-output":"form-output-global","data-form-type":"contact",method:"post",action:"https://getform.io/f/0200877d-bcc8-4f9e-bf13-033a2baebe99",children:Object(n.jsxs)("div",{className:"row row-20",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("div",{className:"form-wrap",children:Object(n.jsx)("input",{className:"form-input",id:"contact-name",type:"text",name:"name","data-constraints":"@Required",placeholder:"Your Name"})})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("div",{className:"form-wrap",children:Object(n.jsx)("input",{className:"form-input",id:"contact-phone",type:"email",name:"email",required:!0,placeholder:"Your Email"})})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("div",{className:"form-wrap",children:Object(n.jsx)("textarea",{className:"form-input form-control-last-child",id:"contact-message",name:"message",placeholder:"Your Message","data-constraints":"@Required"})})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("button",{className:"button button-sm button-primary",type:"submit",children:"send"})})]})})]})})]})})})}function oe(){return Object(n.jsx)("section",{className:"section-md bg-gray-100 section-decoration-1",id:"subscride",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-30 justify-content-center",children:[Object(n.jsx)("div",{className:"col-sm-8 col-lg-7 text-center",children:Object(n.jsx)("div",{className:"block-sm animate-box",children:Object(n.jsx)("h2",{className:"wow fadeInDown",children:"Subscribe to our news and regular updates"})})}),Object(n.jsx)("div",{className:"col-md-7 col-lg-6",children:Object(n.jsx)("div",{className:"wow fadeInUp","data-wow-delay":".2s",children:Object(n.jsxs)("form",{className:"rd-form rd-mailform rd-form-inline","data-form-output":"form-output-global","data-form-type":"subscribe",method:"post",action:"https://getform.io/f/0200877d-bcc8-4f9e-bf13-033a2baebe99",children:[Object(n.jsx)("div",{className:"form-wrap",children:Object(n.jsx)("input",{className:"form-input form-input-shadow form-control-has-validation",id:"subscribe-form-email",type:"email",name:"email",required:!0,placeholder:"Your Email"})}),Object(n.jsx)("div",{className:"form-button",children:Object(n.jsx)("button",{className:"button button-primary button-lg button-shadow",type:"submit",children:"Subscribe"})})]})})})]})})})}function re(){return Object(n.jsxs)("footer",{className:"footer-classic bg-default text-center text-sm-left",children:[Object(n.jsx)("div",{className:"section-sm",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-30",children:[Object(n.jsxs)("div",{className:"col-sm-6 col-lg-3",children:[Object(n.jsx)("h4",{className:"footer-title",children:"Company"}),Object(n.jsxs)("ul",{className:"list-sm footer-list",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{children:"Mail: "}),Object(n.jsx)("a",{href:"mailto:#",children:"camilla@comuki.com"})]}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"about-us.html",children:"About us"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"team.html",children:"Team"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"portfolio.html",children:"Portfolio"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"Pricing"})})]})]}),Object(n.jsxs)("div",{className:"col-sm-6 col-lg-3",children:[Object(n.jsx)("h4",{className:"footer-title",children:"Our social networks"}),Object(n.jsx)("p",{children:"Join us on social media to receive the latest news and updates."}),Object(n.jsx)("ul",{className:"list-social list-inline",children:Object(n.jsx)("li",{className:"list-inline-item",children:Object(n.jsx)("a",{className:"icon fa-facebook-f",href:"/#"})})})]})]})})}),Object(n.jsx)("div",{className:"section-xs",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row row-30",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("p",{className:"rights",children:[Object(n.jsx)("span",{children:"\xa9\xa0 "}),Object(n.jsx)("span",{className:"copyright-year",children:"2021"}),Object(n.jsx)("span",{children:"\xa0"}),Object(n.jsx)("span",{children:"Comuki"}),Object(n.jsx)("span",{children:".\xa0 All Rights Reserved. \xa0"})]})}),Object(n.jsx)("div",{className:"col-md-6 text-md-right",children:Object(n.jsxs)("ul",{className:"footer-list-inline",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"privacy-policy.html",children:"Privacy Policy"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#",children:"FAQ"})})]})})]})})})]})}var de,he=function(e){return e.history,e.context,e.signedIn,e.loaded,Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(r,{}),Object(n.jsx)(E,{}),Object(n.jsx)(W,{}),Object(n.jsx)(T,{}),Object(n.jsx)(K,{}),Object(n.jsx)(_,{}),Object(n.jsx)(se,{}),Object(n.jsx)(le,{}),Object(n.jsx)(oe,{}),Object(n.jsx)(re,{})]})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),s(e),n(e)}))};Object(s.a)(de||(de=Object(i.a)(["\n"])));Object(c.render)(Object(n.jsx)(he,{}),document.getElementById("root")),je()}},[[25,1,2]]]);
//# sourceMappingURL=main.331a2c73.chunk.js.map
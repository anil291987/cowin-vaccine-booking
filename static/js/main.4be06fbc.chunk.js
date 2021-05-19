(this["webpackJsonpcowin-notif"]=this["webpackJsonpcowin-notif"]||[]).push([[0],{251:function(e,t,a){},252:function(e,t,a){},274:function(e,t){},276:function(e,t){},286:function(e,t){},288:function(e,t){},315:function(e,t){},316:function(e,t){},321:function(e,t){},323:function(e,t){},330:function(e,t){},349:function(e,t){},406:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(23),s=a.n(o),r=(a(251),a(29)),c=a.n(r),l=a(50),h=a(113),u=a(114),d=a(244),p=a(241),f=(a(252),a(425)),b=a(424),y=a(428),g=a(427),v=a(245),m=a(431),w=a(433),j=a(429),k=a(69),O=a(430),x=a(432),S=a(133),C=a(56),A=a.n(C),T=a(426),_=a(159),I=a.n(_),P="https://cdn-api.co-vin.in/api",W=parseInt(localStorage.pollFreq)||560,B=function(){function e(){Object(h.a)(this,e)}return Object(u.a)(e,[{key:"req",value:function(e){var t={};return localStorage.token&&(t.authorization=localStorage.token),new Promise((function(a,n){A.a.get(e,t).then((function(e){return a(e.data)})).catch((function(e){return n(e)}))}))}},{key:"init",value:function(e,t){var a=this,n={};return localStorage.token&&(n.authorization=localStorage.token),new T.a((function(i){var o=a.req.bind(a);a.watcher=setInterval((function(){o("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin","?pincode=").concat(e,"&date=").concat(t),n).then((function(e){i.next(e)})).catch((function(e){i.error(e)}))}),W)}))}},{key:"initDist",value:function(e,t){var a=this;return new T.a((function(n){var i=a.req.bind(a),o=function(){i("".concat("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict","?district_id=").concat(e,"&date=").concat(t)).then((function(e){n.next(e)})).catch((function(e){n.error(e)}))};o(),a.watcher=setInterval(o,W)}))}},{key:"clearWatch",value:function(){console.log(this),clearInterval(this.watcher)}},{key:"clearAuthWatch",value:function(){clearInterval(this.authWatcher)}},{key:"generateOtp",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP",{mobile:t,secret:"U2FsdGVkX19mD56KTNfQsZgXJMwOG7u/6tuj0Qvil1LEjx783oxHXGUTDWYm+XMYVGXPeu+a24sl5ndEKcLTUQ=="}).then((function(e){return e.data})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"verifyOtp",value:function(){var e=Object(l.a)(c.a.mark((function e(t,a){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=I.a.SHA256(t).toString(I.a.enc.Hex),console.log(n),e.next=4,A.a.post("https://cdn-api.co-vin.in/api/v2/auth/validateMobileOtp",{otp:n,txnId:a}).then((function(e){return e.data})).catch((function(e){return console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getBenefeciaries",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://cdn-api.co-vin.in/api/v2/appointment/beneficiaries",{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.data.beneficiaries})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"book",value:function(){var e=Object(l.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("https://cdn-api.co-vin.in/api/v2/appointment/schedule",t,{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.data})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"trackAuth",value:function(e){var t=this;return new T.a((function(a){var n=t.getBenefeciaries.bind(t);t.authWatcher=setInterval((function(){n(e).then((function(e){a.next(e)})).catch((function(e){a.next("err")}))}),1e4)}))}},{key:"getStates",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A.a.get("".concat(P,"/v2/admin/location/states")).then((function(e){return e.data})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getDistricts",value:function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A.a.get("".concat(P,"/v2/admin/location/districts/").concat(t)).then((function(e){return e.data.districts})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCaptcha",value:function(){var e=Object(l.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("https://cdn-api.co-vin.in/api/v2/auth/getRecaptcha",{},{headers:{"content-type":"application/json",authorization:"Bearer ".concat(localStorage.token)}}).then((function(e){return e.data})).catch((function(e){throw e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=(a.p,a.p+"static/media/OfflineMerchant.b9f1ab6b.png"),M=a(160),N=a(161),Y=a.n(N),z=a(412),E=a(413),L=a(414),F=a(415),V=a(416),q=a(417),G=a(418),Q=a(419),R=a(420),U=a(421),H=a(422),J=a(423),X=a(5),K=f.a.Text,Z=b.a.TabPane,$=new B,ee=y.a.Search,te=g.a.Option,ae={text:"Use this link to track vaccine availability and automatically book a slot for you and your family. The app will automatically send OTPs and speak out to tell you to enter security code at the time of booking. ",title:"Automated vaccine booking and availability tracking",tags:["covid19vaccines","covid19help","vaccination2021","covid19india"],url:window.location.href.indexOf("localhost")?"https://yashwanthm.github.io/cowin-vaccine-booking/":window.location.href},ne=document.getElementsByTagName("meta"),ie=ne[ne.length-1].getAttribute("build-version"),oe=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;Object(h.a)(this,a),(n=t.call(this,e)).bookingError=function(e,t){v.a.error({message:e,description:t})},n.bookingIntervals=[],setInterval((function(){n.bookingIntervals.map((function(e){clearInterval(e)}))}),1e3);var i={urlData:null,isWatchingAvailability:!1,vaccineType:"ANY",bookingInProgress:!1,isAuthenticated:!!localStorage.token,minAge:18,districtId:null,stateId:null,beneficiaries:[],selectedBeneficiaries:[],otpData:{txnId:null},vaccineCalendar:{},zip:null,enableOtp:!1,otp:null,mobile:null,feeType:"Any",token:localStorage.token||null,selectedTab:"1",dates:[],states:[],dose:1,districs:[],session:null,showCaptcha:!1,captcha:null,bookingCaptcha:null,bookingCenter:null,showSuccessModal:!1};return localStorage.appData&&(i=Object.assign(i,JSON.parse(localStorage.appData))),localStorage.token&&(i.token=localStorage.token,i.isAuthenticated=!0,i.enableOtp=!1),n.state=i,n}return Object(u.a)(a,[{key:"waitForOtp",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.ac&&this.ac.abort(),!("OTPCredential"in window)){e.next=16;break}return console.log("Waiting for SMS. Try sending yourself a following message:\n\nYour verification code is: 123ABC\n\n@whatwebcando.today #123ABC"),e.prev=3,this.ac=new AbortController,e.next=7,navigator.credentials.get({otp:{transport:["sms"]},signal:this.ac.signal}).then((function(e){console.log("otp is ",e),console.log("otp, ".concat(e)),a.setState({otp:e})})).catch((function(e){console.log("ssss ".concat(e))}));case 7:t=e.sent,console.log(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:e.next=16;break;case 16:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"getBeneficiaries",value:function(){var e=this;console.log("getBens"),$.getBenefeciaries(this.state.token).then((function(t){e.setState({beneficiaries:t},(function(){e.setStorage(),e.state.urlData&&(e.state.isAuthenticated?e.getCaptcha():e.state.mobile?e.generateOtp():e.speak("Please login"))}))})).catch((function(t){console.log(t),delete localStorage.token,e.setState({isAuthenticated:!1,token:null,enableOtp:!1},(function(){e.state.mobile&&e.state.urlData&&e.getQueryObj()}))}))}},{key:"speak",value:function(e){var t=new SpeechSynthesisUtterance;t.lang="en-UK",t.volume=1,t.rate=1,t.pitch=1,t.text=e,window.speechSynthesis.speak(t)}},{key:"getQueryObj",value:function(){console.log("callee");var e=window.location.search.substring(1);if(0!==e.length){var t=JSON.parse('{"'+e.replace(/&/g,'","').replace(/=/g,'":"')+'"}',(function(e,t){return""===e?t:decodeURIComponent(t)}));t.session_id&&t.dose&&t.slot&&this.setState({urlData:t,dose:parseInt(t.dose)},(function(){}))}}},{key:"componentDidMount",value:function(){var e=this;this.notifSound=document.getElementById("notif");var t=localStorage.token||this.state.token;t&&(this.getBeneficiaries(),this.trackAuth(t)),$.getStates().then((function(t){e.setState({states:t.states},(function(){e.selectState(e.state.stateId),e.selectDistrict(e.state.districtId)}))})).catch((function(e){console.log(e)}));try{Notification.requestPermission((function(e){}))}catch(n){console.log(n)}var a={title:"Vaccine Notifications Enabled",body:"You now have notifications active for Covid vaccine availability",native:!0,vibrate:[300,100,400]};try{Notification.requestPermission((function(e){"granted"===e&&navigator.serviceWorker.ready.then((function(e){e.showNotification(a.title,a)}))})),new Notification(a.title,a)}catch(n){console.log(n)}try{this.getQueryObj()}catch(n){console.log(n)}}},{key:"setStorage",value:function(){var e=Object.assign({},this.state);delete e.enableOtp,delete e.vaccineCalendar,delete e.isWatchingAvailability,delete e.urlData,delete e.captcha,delete e.bookingCaptcha,localStorage.appData=JSON.stringify(e)}},{key:"componentWillUnmount",value:function(){this.setStorage(),this.watcher&&this.watcher.unsubscribe()}},{key:"handleNotification",value:function(){var e=this,t=this.state.vaccineCalendar.centers,a=1;this.state.selectedBeneficiaries&&Array.isArray(this.state.selectedBeneficiaries)&&this.state.selectedBeneficiaries.length>0&&(a=this.state.selectedBeneficiaries.length);var n=!1;t.map((function(t){t.sessions.map((function(i){if(parseInt(i.min_age_limit)===e.state.minAge&&parseInt(i.available_capacity)>=a&&!e.state.bookingInProgress){var o=e.state.vaccineType;if("ANY"!==o&&o!==i.vaccine)return;if(e.state.feeType&&"Any"!==e.state.feeType&&e.state.feeType!==t.fee_type)return;try{if(1===parseInt(e.state.dose)&&i.available_capacity_dose1>=0&&i.available_capacity_dose1<a)return;if(2===parseInt(e.state.dose)&&i.available_capacity_dose2>=0&&i.available_capacity_dose2<a)return}catch(r){console.log(r)}var s={title:t.name,body:"".concat(t.pincode," ").concat(t.address," has ").concat(i.available_capacity," on ").concat(i.date),vibrate:[300,100,400],native:!0};try{Notification.requestPermission((function(e){"granted"===e&&navigator.serviceWorker.ready.then((function(e){e.showNotification(s.message,s)}))})),new Notification(s.title,s)}catch(r){console.log(r)}e.speak("Vaccines available at ".concat(t.name)),e.state.isAuthenticated&&e.setState({bookingInProgress:!0,bookingCenter:t,bookingSession:i},(function(){e.state.bookingCaptcha||n||(e.getCaptcha(),n=!0,e.clearWatch())}))}}))}))}},{key:"getCaptcha",value:function(){var e=this;window.speechSynthesis.cancel(),this.setState({bookingInProgress:!0},(function(){$.getCaptcha().then((function(t){e.state.urlData&&e.speak("Please select beneficiaries"),e.speak("Enter captcha to proceed with booking. Dose ".concat(e.state.dose," vaccines available  ").concat(e.state.bookingCenter?"at "+e.state.bookingCenter.name:"")),e.setState({captcha:t.captcha,showCaptcha:!0},(function(){}))})).catch((function(t){console.log("error getting captcha ",t),e.setState({bookingInProgress:!1,urlData:null})}))}))}},{key:"book",value:function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n,i,o,s,r,l,h=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],n=this.state.bookingSession,0!==this.state.selectedBeneficiaries.length){e.next=7;break}return this.state.isAuthenticated||this.setState({enableOtp:!0},(function(){h.generateOtp()})),e.abrupt("return");case 7:this.state.selectedBeneficiaries.map((function(e){a.push(e.beneficiary_reference_id)}));case 8:i=this.state.urlData,o=this.state.dose||1,s=i?i.session_id:n.session_id,r=i?i.slot.session:n.slots[Math.floor(Math.random()*n.slots.length)],l={dose:o,session_id:s,slot:r,beneficiaries:a,captcha:this.state.bookingCaptcha},$.book(l,this.state.token).then((function(e){console.log("Booking success ",e.appointment_id),h.clearWatch(),h.setState({bookingInProgress:!1,appointment_id:JSON.stringify(e),showSuccessModal:!0})})).catch((function(e){h.setState({bookingInProgress:!1,urlData:null,session:null,bookingCenter:null,captcha:null,bookingSession:null,bookingCaptcha:null,showCaptcha:!1});console.log(e);var t=e.error||"The availability probably ran out before you could take an action. The app will continue to look for slots.";h.bookingError("Booking did not get through. ",t),(h.state.districtId||h.state.zip)&&h.initWatch(),window.history.pushState(null,"",window.location.href.split("?")[0])}));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initWatch",value:function(e){var t=this;this.setStorage(),this.setState({isWatchingAvailability:!0}),"1"===this.state.selectedTab?this.watcher=$.initDist(this.state.districtId,Y()().format("DD-MM-YYYY")).subscribe({next:function(e){t.setState({vaccineCalendar:e},(function(){t.handleNotification()}))},error:function(e){console.error("something wrong occurred: "+e)},complete:function(){this.setState({isWatchingAvailability:!1})}}):this.watcher=$.init(this.state.zip,Y()().format("DD-MM-YYYY")).subscribe({next:function(e){t.setState({vaccineCalendar:e},(function(){t.handleNotification(),t.setStorage()}))},error:function(e){console.error("something wrong occurred: "+e)},complete:function(){console.log("done"),this.setState({isWatchingAvailability:!1})}})}},{key:"trackAuth",value:function(){var e=this;!1!==this.state.isAuthenticated&&(this.authWatch=$.trackAuth(this.state.token).subscribe({next:function(t){Array.isArray(t)?e.setState({beneficiaries:t}):($.clearAuthWatch(),delete localStorage.token,e.setState({isAuthenticated:!1,token:null},(function(){e.state.isWatchingAvailability&&(e.generateOtp(),e.speak("Session expired!"))})))},error:function(t){console.error("something wrong occurred: "+t),e.speak("Session expired!"),$.clearAuthWatch(),delete localStorage.token,e.setState({isAuthenticated:!1,token:null},(function(){e.state.isWatchingAvailability&&!e.state.enableOtp&&(e.generateOtp(),e.speak("Session expired!"))}))},complete:function(){e.setState({isWatchingAvailability:!1})}}))}},{key:"clearWatch",value:function(){$.clearWatch(),this.setState({isWatchingAvailability:!1})}},{key:"renderTable",value:function(e){return Object(X.jsxs)("div",{style:{maxWidth:"100%",overflow:"scroll"},children:[Object(X.jsx)("h2",{style:{marginTop:10},children:"Vaccination Centers & Availability Info"}),Object(X.jsx)(K,{type:"secondary",children:"You will see all kinds of availability below. But, the notifications and bookings will be done for your selected preferences only."}),Object(X.jsx)("table",{style:{marginTop:10},children:e.centers.map((function(e){return e.sessions.map((function(e){e.available_capacity>0&&!1})),Object(X.jsxs)("tr",{children:[Object(X.jsxs)("td",{children:[Object(X.jsx)("h3",{children:e.name}),Object(X.jsxs)("b",{children:["Fee: ",e.fee_type]}),Object(X.jsx)("br",{}),e.block_name,", ",e.address,", ",e.pincode,"."]}),e.sessions.map((function(e){return Object(X.jsxs)("td",{children:[Object(X.jsx)("h4",{children:e.date}),Object(X.jsx)("p",{children:e.vaccine}),Object(X.jsxs)("div",{children:[parseInt(e.available_capacity)>0?"".concat(e.available_capacity," shots available for ").concat(e.min_age_limit,"+"):"No Availability ".concat(e.min_age_limit),"Dose1 - ",e.available_capacity_dose1||0,"Dose2 - ",e.available_capacity_dose2||0]}),parseInt(e.available_capacity>0)?Object(X.jsxs)("div",{children:[Object(X.jsx)("b",{children:"Available Slots"}),e.slots.map((function(e){return Object(X.jsx)(m.a,{children:e})}))]}):null]},e.session_id)}))]},e.center_id)}))})]})}},{key:"setMinAge",value:function(e){this.setState({minAge:e.target.value})}},{key:"generateOtp",value:function(){var e=this;this.setState({enableOtp:!0},(function(){$.generateOtp(e.state.mobile).then((function(t){e.speak("One Time Password has been sent to your phone. Please enter to login"),e.setState({otpData:t,enableOtp:!0})})).catch((function(t){console.log(t),e.setState({enableOtp:!1})}))}))}},{key:"verifyOtp",value:function(){var e=this;$.verifyOtp(this.state.otp,this.state.otpData.txnId).then((function(t){localStorage.token=t.token,e.setState({token:t.token,isAuthenticated:!0,enableOtp:!1},(function(){e.setStorage(),e.getBeneficiaries(),e.trackAuth(t.token),e.state.urlData&&e.getQueryObj()}))})).catch((function(t){console.log(t),e.state.isAuthenticated&&(delete localStorage.appData,delete localStorage.token,e.setState({token:null,isAuthenticated:!1}))}))}},{key:"selectState",value:function(e){var t=this;this.setState({stateId:e},(function(){$.getDistricts(e).then((function(e){t.setState({districs:e})})).catch((function(e){console.log(e)}))}))}},{key:"selectDistrict",value:function(e){this.setState({districtId:e},(function(){}))}},{key:"renderCaptcha",value:function(){var e=this;if(this.state.captcha)return Object(X.jsxs)("div",{children:[Object(X.jsx)("h2",{style:{marginTop:10,marginBottom:0},children:"Enter Captcha"}),Object(X.jsxs)(m.a,{children:[Object(X.jsx)(w.a,{children:Object(M.a)(this.state.captcha)}),Object(X.jsx)(ee,{placeholder:"Enter Captcha",allowClear:!0,autoFocus:!0,style:{width:300,marginTop:10},enterButton:"Submit & Book",size:"large",onSearch:function(t){console.log(t),e.setState({bookingCaptcha:t},(function(){e.book()}))}})]})]})}},{key:"renderModal",value:function(){var e=this;if(this.state.bookingSession&&this.state.bookingCenter)return Object(X.jsxs)(j.a,{mask:!0,maskClosable:!1,title:"Congrats!",visible:this.state.showSuccessModal,onOk:function(t){e.setState({showSuccessModal:!1},(function(){e.messagesEnd.scrollIntoView({behavior:"smooth"})}))},onCancel:function(t){e.messagesEnd.scrollIntoView({behavior:"smooth"}),e.setState({bookingInProgress:!1,urlData:null,showSuccessModal:!1,bookingCenter:null,bookingSession:null,captcha:null,bookingCaptcha:null,showCaptcha:!1})},children:[Object(X.jsxs)("p",{children:["Your vaccination slot is booked for selected beneficiaries at"," ",this.state.bookingCenter.name,", ",this.state.bookingCenter.block_name,", ",this.state.bookingCenter.address,","," ",this.state.bookingCenter.district_name,","," ",this.state.bookingCenter.state_name,","," ",this.state.bookingCenter.pincode]}),Object(X.jsxs)("p",{children:["Your appointment id is ",this.state.appointment_id]}),Object(X.jsxs)("p",{children:["You can login into"," ",Object(X.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"})," ","to see details of your vaccincation slot."]}),Object(X.jsx)("h3",{children:"If you have liked using this app, please consider donating and sharing a word around."})]})}},{key:"renderShare",value:function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)(z.a,{url:ae.url,quote:ae.text,hashtag:ae.tags[0],className:"Demo__some-network__share-button",children:Object(X.jsx)(E.a,{size:48,round:!0})}),Object(X.jsx)(L.a,{url:ae.url,title:ae.title,className:"Demo__some-network__share-button",children:Object(X.jsx)(F.a,{size:48,round:!0})}),Object(X.jsx)(V.a,{url:ae.url,title:ae.text,separator:":: ",className:"Demo__some-network__share-button",children:Object(X.jsx)(q.a,{size:48,round:!0})}),Object(X.jsx)(G.a,{url:ae.url,summary:ae.text,className:"Demo__some-network__share-button",children:Object(X.jsx)(Q.a,{size:48,round:!0})}),Object(X.jsx)(R.a,{url:ae.url,title:ae.text,windowWidth:660,windowHeight:460,className:"Demo__some-network__share-button",children:Object(X.jsx)(U.a,{size:48,round:!0})}),Object(X.jsx)(H.a,{url:ae.url,title:ae.text,className:"Demo__some-network__share-button",children:Object(X.jsx)(J.a,{size:48,round:!0})})]})}},{key:"renderPayTMQR",value:function(){var e=this;return Object(X.jsx)(j.a,{visible:this.state.showPayTMQR,title:"PayTM ALL-IN-ONE QR",okText:"Close",onCancel:function(t){e.setState({showPayTMQR:!1})},footer:[Object(X.jsx)(k.a,{onClick:function(t){e.setState({showPayTMQR:!1})},children:"Okay"},"back")],children:Object(X.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(X.jsx)("img",{style:{width:300},src:D,alt:"PayTM QR Code"})})})}},{key:"renderDonate",value:function(){return Object(X.jsxs)("div",{children:[Object(X.jsx)("h3",{style:{marginTop:15,marginBottom:0},children:"Donate"}),Object(X.jsx)("p",{}),Object(X.jsx)("div",{children:Object(X.jsx)("img",{style:{width:300},src:D,alt:"PayTM QR Code"})}),Object(X.jsx)("div",{})]})}},{key:"renderTrackingSelection",value:function(){var e=this;if(!this.state.urlData)return Object(X.jsxs)("div",{children:[Object(X.jsx)("h2",{style:{marginTop:15,marginBottom:0},children:"Select Location for Tracking Availability"}),Object(X.jsxs)(b.a,{defaultActiveKey:this.state.selectedTab||"1",onChange:function(t){e.setState({selectedTab:t})},children:[Object(X.jsxs)(Z,{tab:"Track By District",children:[Object(X.jsx)(g.a,{style:{width:234},size:"large",defaultValue:this.state.stateId,disabled:this.state.isWatchingAvailability,onChange:this.selectState.bind(this),placeholder:"Select State",children:this.state.states.map((function(e){return Object(X.jsx)(te,{value:e.state_id,children:e.state_name},e.state_id)}))}),Object(X.jsx)(g.a,{style:{width:234},defaultValue:this.state.districtId,disabled:this.state.isWatchingAvailability,size:"large",onChange:function(t){e.selectDistrict(t)},placeholder:"Select District",children:this.state.districs.map((function(e){return Object(X.jsx)(te,{value:e.district_id,children:e.district_name},e.district_id)}))}),Object(X.jsx)(k.a,{type:"primary",size:"large",loading:this.state.isWatchingAvailability,onClick:function(t){return e.initWatch()},children:this.state.isWatchingAvailability?"Tracking":this.state.isAuthenticated?"Track Availability & Book":"Track Availability"}),this.state.isWatchingAvailability?Object(X.jsx)(k.a,{type:"primary",icon:Object(X.jsx)(S.a,{}),size:"large",danger:!0,onClick:this.clearWatch.bind(this),children:"Stop"}):null]},1),Object(X.jsx)(Z,{tab:"Track By Pincode",children:Object(X.jsxs)(m.a,{children:[Object(X.jsx)(ee,{disabled:this.state.isWatchingAvailability,placeholder:this.state.zip?this.state.zip:"Enter your area pincode",allowClear:!0,defaultValue:this.state.zip||null,type:"number",enterButton:this.state.isWatchingAvailability?"Tracking":this.state.isAuthenticated?"Track Availability & Book":"Track Availability",size:"large",loading:this.state.isWatchingAvailability,onSearch:function(t){e.setState({zip:t,isWatchingAvailability:!0},(function(){e.initWatch()}))}}),this.state.isWatchingAvailability?Object(X.jsx)(k.a,{type:"primary",icon:Object(X.jsx)(S.a,{}),size:"large",danger:!0,onClick:this.clearWatch.bind(this),children:"Stop"}):null]})},2)]})]})}},{key:"renderBookingPreferences",value:function(){var e=this;if(!this.state.urlData)return Object(X.jsxs)("div",{children:[Object(X.jsx)("h2",{style:{marginTop:14,marginBottom:0},children:"Booking Preferences"}),Object(X.jsxs)(m.a,{style:{marginTop:10},children:[Object(X.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Vaccine Type"}),Object(X.jsxs)(O.a.Group,{style:{marginTop:12,marginLeft:10},onChange:function(t){e.setState({vaccineType:t.target.value})},value:this.state.vaccineType,disabled:this.state.isWatchingAvailability,children:[Object(X.jsx)(O.a,{value:"ANY",children:"Any"}),Object(X.jsx)(O.a,{value:"COVAXIN",children:"Covaxin"}),Object(X.jsx)(O.a,{value:"COVISHIELD",children:"Covishield"})]})]}),Object(X.jsxs)(m.a,{style:{marginTop:10},children:[Object(X.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Age Group"}),Object(X.jsxs)(O.a.Group,{style:{marginTop:12,marginLeft:10},onChange:this.setMinAge.bind(this),value:this.state.minAge,disabled:this.state.isWatchingAvailability,children:[Object(X.jsx)(O.a,{value:18,children:"18 to 45 Years"}),Object(X.jsx)(O.a,{value:45,children:"45+ Years"})]})]}),Object(X.jsxs)(m.a,{style:{marginTop:10},children:[Object(X.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Fee Type"}),Object(X.jsxs)(O.a.Group,{style:{marginTop:12,marginLeft:10},onChange:function(t){e.setState({feeType:t.target.value})},value:this.state.feeType,disabled:this.state.isWatchingAvailability,children:[Object(X.jsx)(O.a,{value:"Any",children:"Any"}),Object(X.jsx)(O.a,{value:"Free",children:"Free"}),Object(X.jsx)(O.a,{value:"Paid",children:"Paid"})]})]}),Object(X.jsxs)(m.a,{style:{marginTop:5},children:[Object(X.jsx)("h3",{style:{marginTop:10,marginBottom:0},children:"Dose"}),Object(X.jsxs)(O.a.Group,{style:{marginTop:12,marginLeft:10},onChange:function(t){e.setState({dose:t.target.value})},defaultValue:1,value:this.state.dose,disabled:this.state.isWatchingAvailability,children:[Object(X.jsx)(O.a,{value:1,children:"Dose 1"}),Object(X.jsx)(O.a,{value:2,children:"Dose 2"})]})]})]})}},{key:"render",value:function(){var e=this,t=this.state.vaccineCalendar,a=this.state.isAuthenticated,n=this.state,i=n.beneficiaries,o=n.selectedBeneficiaries;return Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)("audio",{id:"notif",children:Object(X.jsx)("source",{src:"https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"})}),Object(X.jsxs)("header",{className:"App-header",children:[Object(X.jsx)("h1",{children:"Covid-19 automatic vaccine bookings and availability tracking in India"}),Object(X.jsxs)("p",{children:["This web-app can continously track for availability of vaccine and proceed with booking on your behalf if you are logged in. ",Object(X.jsx)("br",{})]}),Object(X.jsxs)("p",{style:{color:"#555"},children:["Please register on"," ",Object(X.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"}),", ","add beneficiaries and then, come back here for automated bookings.",Object(X.jsx)("br",{}),"For automatic bookings, login, select beneficiaries, keep feeding in OTPs every few mins. When there's availability, the app will automatically attempt for a booking based on your preferences. When there's availability, you will have to enter captcha code. The app will speak out for any inputs(OTP and Captcha) required. For more information, please see the"," ",Object(X.jsx)("a",{href:"https://github.com/yashwanthm/cowin-vaccine-booking/wiki/Usage-Guide",target:"_blank",rel:"noreferrer",children:"Help/Usage Guide"})]})]}),Object(X.jsx)(m.a,{children:Object(X.jsxs)(w.a,{children:[a?null:Object(X.jsxs)("div",{children:[Object(X.jsx)("h2",{children:"Login"}),this.state.enableOtp?null:Object(X.jsx)(ee,{placeholder:this.state.mobile?this.state.mobile:"Mobile Number",allowClear:!0,defaultValue:this.state.mobile||null,type:"number",enterButton:"Generate OTP",size:"large",onSearch:function(t){e.setState({mobile:""===t?e.state.mobile:t,enableOtp:!0},(function(){e.generateOtp()}))}}),this.state.enableOtp?Object(X.jsxs)("span",{children:[Object(X.jsx)(ee,{placeholder:"Enter OTP",allowClear:!0,type:"number",enterButton:"Submit",size:"large",onSearch:function(t){e.setState({otp:t},(function(){e.verifyOtp()}))}}),Object(X.jsx)(k.a,{danger:!0,onClick:function(t){e.setState({enableOtp:!1})},type:"link",children:"Cancel"})]}):null]}),a?Object(X.jsxs)("div",{children:[Object(X.jsx)("h2",{children:"Beneficiaries"}),0===i.length?Object(X.jsxs)("p",{children:["You do not have any benificiares added yet. Please login to"," ",Object(X.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",rel:"noreferrer",children:"Cowin"})," ","and add beneficiaries"]}):Object(X.jsx)("p",{children:"Select beneficiaries to book a slot automatically when there's availability. This app can continuously track availability and make a booking."}),this.state.beneficiaries.map((function(t){return Object(X.jsx)(m.a,{children:Object(X.jsx)(x.a,{disabled:e.state.isWatchingAvailability,checked:-1!==o.findIndex((function(e){return e.beneficiary_reference_id===t.beneficiary_reference_id})),onClick:function(a){var n=e.state.selectedBeneficiaries,i=n.findIndex((function(e){return e.beneficiary_reference_id===t.beneficiary_reference_id}));-1===i?n.push(t):n.splice(i,1),e.setState({selectedBeneficiaries:n}),e.setStorage()},children:t.name})})}))]}):null,this.renderBookingPreferences(),this.renderTrackingSelection()]})}),this.state.showCaptcha?this.renderCaptcha():null,t&&t.centers?this.renderTable(t):null,Object(X.jsx)("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}),this.renderDonate(),Object(X.jsx)("h3",{style:{marginTop:15,marginBottom:0},children:"Share"}),this.renderShare(),Object(X.jsx)("div",{style:{marginTop:10}}),Object(X.jsxs)(K,{code:!0,children:["Build last updated at: ",ie]}),this.renderModal(),Object(X.jsx)("div",{children:Object(X.jsxs)(m.a,{children:[Object(X.jsx)(k.a,{type:"link",href:"https://github.com/yashwanthm/cowin-vaccine-booking/issues",rel:"noreferrer",target:"_blank",children:"Report an issue"})," ",Object(X.jsx)(k.a,{type:"link",href:"https://github.com/yashwanthm/cowin-vaccine-booking/",rel:"noreferrer",target:"_blank",children:"Git Repo is here"}),Object(X.jsx)(k.a,{type:"link",onClick:function(t){e.setState({showPrivacyPolicy:!0})},children:"Privacy Policy"})]})}),Object(X.jsx)(j.a,{title:"",okText:"Close",footer:[Object(X.jsx)(k.a,{onClick:function(t){e.setState({showPrivacyPolicy:!1})},children:"Close"},"back")],visible:this.state.showPrivacyPolicy,onOk:function(t){e.setState({showPrivacyPolicy:!1})},children:Object(M.a)('<h2>Privacy Policy</h2><p>Your privacy is important to us. It is Cowin Automatic Vaccine Booking&#39;s policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, <a href="https://yashwanthm.github.io/cowin-vaccine-booking/">https://yashwanthm.github.io/cowin-vaccine-booking/</a>, and other sites we own and operate.</p><p>This policy is effective as of 13 May 2021 and was last updated on 13 May 2021.</p><h3>Information We Collect</h3><p>Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services.</p><h4>Log Data</h4><p>When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device\u2019s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter.</p><p>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</p><h4>Personal Information</h4><p>We may ask for personal information which may include one or more of the following:</p><ul><li>Phone/mobile number</li></ul><h4>Legitimate Reasons for Processing Your Personal Information</h4><p>We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</p><h4>Collection and Use of Information</h4><p>We may collect personal information from you when you do any of the following on our website:</p><ul><li>Use a mobile device or web browser to access our content</li><li>Contact us via email, social media, or on any similar technologies</li><li>When you mention us on social media</li></ul><p>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</p><p>Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources.</p><h4>Security of Your Personal Information</h4><p>When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</p><p>Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.</p><p>You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services.</p><h4>How Long We Keep Your Personal Information</h4><p>We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you.</p><p>However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.</p><h3>Children\u2019s Privacy</h3><p>We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13.</p><h3>International Transfers of Personal Information</h3><p>The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.</p><h3>Your Rights and Controlling Your Personal Information</h3><p>You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.</p><p>If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person\u2019s consent to provide the personal information to us.</p><p>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity.</p><p>If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.</p><p>If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.</p><h3>Limits of Our Policy</h3><p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</p><h3>Changes to This Policy</h3><p>At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</p><p>If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</p><h3>Contact Us</h3><p>For any questions or concerns regarding your privacy, you may contact us using the following details:</p><p>Yashwanth Maheshwaram<br /> https://yashwanthm.github.io/cowin-vaccine-booking/issues/</p>')}),this.renderPayTMQR()]})}}]),a}(i.a.Component),se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,434)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),o(e),s(e)}))},re=a(166);re.a.initialize("G-GS2F4HCX5T"),re.a.pageview(window.location.pathname+window.location.search),s.a.render(Object(X.jsx)(i.a.StrictMode,{children:Object(X.jsx)(oe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),se()}},[[406,1,2]]]);
//# sourceMappingURL=main.4be06fbc.chunk.js.map
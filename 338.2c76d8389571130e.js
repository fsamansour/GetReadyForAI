"use strict";(self.webpackChunkAI_Maturity_Assessment=self.webpackChunkAI_Maturity_Assessment||[]).push([[338],{6338:(Y,l,_)=>{_.r(l),_.d(l,{TestModule:()=>I});var i=_(9808),u=_(8698),g=(()=>{return(e=g||(g={}))[e.Agree=1]="Agree",e[e.FreeText=2]="FreeText",g;var e})(),d=_(5101),a=_(2382),n=_(1223),m=_(520);let w=(()=>{class e{constructor(t){this.http=t}getTestData(){return this.http.get("assets/data/test-data.json")}submitAnswers(t){}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(m.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function f(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"a",14),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).backStep()}),n._UZ(1,"img",15),n._uU(2),n.qZA()}if(2&e){const t=n.oxw(2);n.xp6(2),n.hij(" Go back to ",t.prevStepTitle," ")}}const C=function(e){return{width:e}};function O(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"div",16),n.NdJ("click",function(){const r=n.CHM(t).index;return n.oxw(2).goToStep(r)}),n.TgZ(1,"h6",17),n._uU(2),n.qZA(),n._UZ(3,"div",18),n.qZA()}if(2&e){const t=c.$implicit,o=c.index,s=n.oxw(2);n.ekj("active",s.activeStepIdx===o),n.xp6(2),n.Oqu(t.title),n.xp6(1),n.Q6J("ngStyle",n.VKq(4,C,s.getStepProgressWidthByIdx(o)))}}function M(e,c){if(1&e&&(n.TgZ(0,"label",30),n._uU(1),n.qZA()),2&e){const t=c.index,o=n.oxw(2).index;n.Q6J("for","q_"+o+"answer_"+t),n.xp6(1),n.Oqu(t+1)}}function h(e,c){if(1&e&&(n.TgZ(0,"div"),n._UZ(1,"input",31)(2,"label",32),n.qZA()),2&e){const t=c.$implicit,o=c.index,s=n.oxw(2).index;n.xp6(1),n.Q6J("id","q_"+s+"answer_"+o)("value",o+1),n.xp6(1),n.Q6J("for","q_"+s+"answer_"+o)("ngClass",t.className)}}function P(e,c){if(1&e&&(n.TgZ(0,"label",34),n._uU(1),n.qZA()),2&e){const t=n.oxw(),o=t.index,s=t.$implicit,r=n.oxw(2).index;n.Q6J("for","q_"+r+"answer_"+o),n.xp6(1),n.Oqu(s.text)}}function x(e,c){if(1&e&&(n.ynx(0),n.YNc(1,P,2,2,"label",33),n.BQk()),2&e){const t=c.$implicit;n.xp6(1),n.Q6J("ngIf",t.text)}}function v(e,c){if(1&e&&(n.TgZ(0,"div",25)(1,"div",26),n.YNc(2,M,2,2,"label",27),n.qZA(),n.TgZ(3,"div",28),n.YNc(4,h,3,4,"div",29),n.qZA(),n.TgZ(5,"div",26),n.YNc(6,x,2,1,"ng-container",29),n.qZA()()),2&e){const t=n.oxw(3);n.xp6(2),n.Q6J("ngForOf",t.answers),n.xp6(2),n.Q6J("ngForOf",t.answers),n.xp6(2),n.Q6J("ngForOf",t.answers)}}function k(e,c){1&e&&n._UZ(0,"textarea",35)}function T(e,c){if(1&e&&(n.TgZ(0,"section",19)(1,"p",20),n._uU(2),n.qZA(),n.TgZ(3,"h4",21),n._uU(4),n.qZA(),n.ynx(5,22),n.YNc(6,v,7,3,"div",23),n.YNc(7,k,1,0,"textarea",24),n.BQk(),n.qZA()),2&e){const t=c.$implicit,o=c.index,s=n.oxw(2);n.Q6J("formArrayName",o),n.xp6(2),n.AsE("",o+1,"/",s.categories[s.activeStepIdx].questions.length,""),n.xp6(2),n.Oqu(t.question),n.xp6(1),n.Q6J("ngSwitch",t.questionType),n.xp6(1),n.Q6J("ngSwitchCase",s.questionTypes.Agree),n.xp6(1),n.Q6J("ngSwitchCase",s.questionTypes.FreeText)}}function y(e,c){if(1&e){const t=n.EpF();n.TgZ(0,"div",4)(1,"section",5),n.YNc(2,f,3,1,"a",6),n.TgZ(3,"nav",7),n.YNc(4,O,4,6,"div",8),n.qZA()(),n.TgZ(5,"div",9)(6,"div",10),n.YNc(7,T,8,7,"section",11),n.TgZ(8,"div",12)(9,"button",13),n.NdJ("click",function(){return n.CHM(t),n.oxw().submitStep()}),n._uU(10,"Submit"),n.qZA()()()()()}if(2&e){const t=n.oxw();n.Q6J("formGroup",t.form),n.xp6(2),n.Q6J("ngIf",t.activeStepIdx),n.xp6(2),n.Q6J("ngForOf",t.categories),n.xp6(2),n.Q6J("formArrayName",t.activeStepIdx),n.xp6(1),n.Q6J("ngForOf",t.categories[t.activeStepIdx].questions)}}function q(e,c){1&e&&n.GkF(0)}function A(e,c){if(1&e&&(n.TgZ(0,"div",36),n.YNc(1,q,1,0,"ng-container",37),n.qZA()),2&e){const t=n.oxw(),o=n.MAs(6),s=n.MAs(4);n.xp6(1),n.Q6J("ngTemplateOutlet",t.isLoading?o:s)}}function S(e,c){if(1&e&&(n.TgZ(0,"h3"),n._uU(1,"Your score is"),n.qZA(),n.TgZ(2,"h4"),n._uU(3),n.qZA()),2&e){const t=n.oxw();n.xp6(3),n.AsE("",t.result,"/",t.total,"")}}function Z(e,c){1&e&&(n.TgZ(0,"div",38)(1,"span",39),n._uU(2,"Loading..."),n.qZA()())}const N=[{path:"",component:(()=>{class e{constructor(t){this.apiService=t,this.activeStepIdx=0,this.answers=[{text:"Strongly disagree",className:"danger"},{className:"semi-danger"},{text:"Neutral",className:"warning"},{className:"semi-success"},{text:"Strongly agree",className:"success"}],this.questionTypes=g,this.isLoading=!0,this.result=0,this.total=0}get prevStepTitle(){return this.categories[this.activeStepIdx-1].title}ngOnInit(){this.getTestData()}initForm(t){this.form=new d.C({answers:new d.Z(t.map(o=>new d.Z(o.questions.map(s=>{const r={};switch(s.questionType){case g.Agree:r.score=new a.NI(0);break;case g.FreeText:r.freeText=new a.NI("")}return new d.C(r)}))))})}getTestData(){this.isLoading=!0,this.apiService.getTestData().subscribe(t=>{this.categories=t,this.initForm(this.categories),this.isLoading=!1})}getStepProgressWidthByIdx(t){if(!this.form)return 0;const o=this.form.controls.answers.controls[t].controls;return o.filter(r=>r.value.score||r.value.freeText).length/o.length*100+"%"}submitStep(){var t;if(!this.categories)return;const o=null===(t=this.categories)||void 0===t?void 0:t.length;this.activeStepIdx===o-1?this.submit():this.goToStep(this.activeStepIdx+1)}submit(){!this.form||!this.categories||(this.isLoading=!0,this.total=this.categories.reduce((t,o)=>t+5*o.questions.filter(s=>s.questionType===g.Agree).length,0),this.result=this.form.controls.answers.controls.reduce((t,o,s)=>t+o.controls.reduce((r,p,J)=>{const b=p.value.score||0;return r+(b?Math.abs(b-(this.categories[s].questions[J].agree?0:6)):0)},0),0),this.isLoading=!1)}backStep(){!this.activeStepIdx||this.goToStep(this.activeStepIdx-1)}goToStep(t){this.activeStepIdx!==t&&(this.activeStepIdx=t,window.scrollTo(0,0))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(w))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-test"]],decls:7,vars:2,consts:[["class","container",3,"formGroup",4,"ngIf","ngIfElse"],["loaderOrResultTmp",""],["resultTmp",""],["loaderTmp",""],[1,"container",3,"formGroup"],[1,"steps","position-sticky","sticky-top"],["class","d-flex align-items-center mb-4","href","javascript:",3,"click",4,"ngIf"],[1,"d-flex"],["class","step",3,"active","click",4,"ngFor","ngForOf"],["formArrayName","answers",1,"row"],[1,"col-lg-8",3,"formArrayName"],["class","question",3,"formArrayName",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","mt-4","mb-5","actions"],[1,"btn","btn-primary","mt-2",3,"click"],["href","javascript:",1,"d-flex","align-items-center","mb-4",3,"click"],["alt","back","src","assets/icons/chevron-left.svg",1,"back-icon","me-2"],[1,"step",3,"click"],[1,"step__name"],[1,"step__progress",3,"ngStyle"],[1,"question",3,"formArrayName"],[1,"question__number"],[1,"question__text"],[3,"ngSwitch"],["class","answers my-50",4,"ngSwitchCase"],["class","form-control my-50","formControlName","freeText","rows","5",4,"ngSwitchCase"],[1,"answers","my-50"],[1,"d-flex","justify-content-between"],["class","answer__number",3,"for",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-between","answer__bar"],[4,"ngFor","ngForOf"],[1,"answer__number",3,"for"],["formControlName","score","type","radio",3,"id","value"],[1,"answer__btn",3,"for","ngClass"],["class","answer__text",3,"for",4,"ngIf"],[1,"answer__text",3,"for"],["formControlName","freeText","rows","5",1,"form-control","my-50"],[1,"vh-100","vw-100","d-flex","flex-column","align-items-center","justify-content-center"],[4,"ngTemplateOutlet"],["role","status",1,"spinner-border",2,"width","5rem","height","5rem"],[1,"visually-hidden"]],template:function(t,o){if(1&t&&(n.YNc(0,y,11,5,"div",0),n.YNc(1,A,2,1,"ng-template",null,1,n.W1O),n.YNc(3,S,4,2,"ng-template",null,2,n.W1O),n.YNc(5,Z,3,0,"ng-template",null,3,n.W1O)),2&t){const s=n.MAs(2);n.Q6J("ngIf",!o.isLoading&&!o.total&&o.categories&&o.form)("ngIfElse",s)}},directives:[i.O5,a.JL,a.sg,i.sg,i.PC,a.CE,i.RF,i.n9,a.Fj,a._,a.JJ,a.u,i.mk,i.tP],styles:['.back-icon[_ngcontent-%COMP%]{width:.75rem}.steps[_ngcontent-%COMP%]{background-color:#fff;margin:20px 0;padding:20px 0}@media (min-width: 768px){.steps[_ngcontent-%COMP%]{margin:40px 0;padding:40px 0}}@media (min-width: 992px){.steps[_ngcontent-%COMP%]{margin:65px 0;padding:65px 0}}.step[_ngcontent-%COMP%]{border-bottom:6px solid #C4C4C4;position:relative;min-width:72px;cursor:pointer}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-inline-start:1rem}.step[_ngcontent-%COMP%]:hover   .step__name[_ngcontent-%COMP%]{transition:all .25s;transform:scale(1.05)}@media (min-width: 992px){.step[_ngcontent-%COMP%]{min-width:92px}.step.active[_ngcontent-%COMP%]{position:relative}.step.active[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-12px;left:0;width:100%;height:3px;background-color:#c4c4c4}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-inline-start:1.5rem}}@media (max-width: 991.98px){.step.active[_ngcontent-%COMP%]{flex-shrink:0}.step[_ngcontent-%COMP%]:not(.active)   .step__name[_ngcontent-%COMP%]{display:none}}@media (max-width: 767.98px){.step[_ngcontent-%COMP%]{min-width:30px}.step[_ngcontent-%COMP%] + .step[_ngcontent-%COMP%]{margin-inline-start:.5rem}}.step__progress[_ngcontent-%COMP%]{transition:all .25s;height:6px;background-color:#22af49;position:absolute;bottom:-6px;left:0}.question[_ngcontent-%COMP%] + .question[_ngcontent-%COMP%]{margin-top:150px}.question__number[_ngcontent-%COMP%]{font-size:18px}.question__text[_ngcontent-%COMP%]{font-size:30px}.my-50[_ngcontent-%COMP%]{margin:50px 0}.answers[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.answer__bar[_ngcontent-%COMP%]{position:relative;margin:20px 0}.answer__bar[_ngcontent-%COMP%]:before{content:"";height:4px;width:100%;background-color:#000;position:absolute;top:50%;left:0;transform:translateY(-50%);z-index:-1}.answer__bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.answer__number[_ngcontent-%COMP%]{width:24px;text-align:center}.answer__btn[_ngcontent-%COMP%]{display:block;height:24px;width:24px;border-radius:50%;border:4px solid;background-color:#fff;cursor:pointer}.answer__btn.primary[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.primary[_ngcontent-%COMP%]:hover{color:#fff;background-color:#000;border-color:#000}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.primary[_ngcontent-%COMP%], .answer__btn.primary[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.primary[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.primary[_ngcontent-%COMP%], .answer__btn.primary[_ngcontent-%COMP%]:active, .answer__btn.primary.active[_ngcontent-%COMP%], .answer__btn.primary.dropdown-toggle.show[_ngcontent-%COMP%]{color:#fff;background-color:#000;border-color:#000}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.primary[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.primary[_ngcontent-%COMP%]:focus, .answer__btn.primary[_ngcontent-%COMP%]:active:focus, .answer__btn.primary.active[_ngcontent-%COMP%]:focus, .answer__btn.primary.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.primary[_ngcontent-%COMP%]:disabled, .answer__btn.primary.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.primary[_ngcontent-%COMP%]{background-color:#000}.answer__btn.success[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.success[_ngcontent-%COMP%]:hover{color:#000;background-color:#22af49;border-color:#22af49}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.success[_ngcontent-%COMP%], .answer__btn.success[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.success[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.success[_ngcontent-%COMP%], .answer__btn.success[_ngcontent-%COMP%]:active, .answer__btn.success.active[_ngcontent-%COMP%], .answer__btn.success.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#22af49;border-color:#22af49}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.success[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.success[_ngcontent-%COMP%]:focus, .answer__btn.success[_ngcontent-%COMP%]:active:focus, .answer__btn.success.active[_ngcontent-%COMP%]:focus, .answer__btn.success.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.success[_ngcontent-%COMP%]:disabled, .answer__btn.success.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.success[_ngcontent-%COMP%]{background-color:#22af49}.answer__btn.semi-success[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.semi-success[_ngcontent-%COMP%]:hover{color:#000;background-color:#a8bf19;border-color:#a8bf19}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.semi-success[_ngcontent-%COMP%], .answer__btn.semi-success[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-success[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-success[_ngcontent-%COMP%], .answer__btn.semi-success[_ngcontent-%COMP%]:active, .answer__btn.semi-success.active[_ngcontent-%COMP%], .answer__btn.semi-success.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#a8bf19;border-color:#a8bf19}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-success[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-success[_ngcontent-%COMP%]:focus, .answer__btn.semi-success[_ngcontent-%COMP%]:active:focus, .answer__btn.semi-success.active[_ngcontent-%COMP%]:focus, .answer__btn.semi-success.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.semi-success[_ngcontent-%COMP%]:disabled, .answer__btn.semi-success.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.semi-success[_ngcontent-%COMP%]{background-color:#a8bf19}.answer__btn.warning[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.warning[_ngcontent-%COMP%]:hover{color:#000;background-color:#fff500;border-color:#fff500}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.warning[_ngcontent-%COMP%], .answer__btn.warning[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.warning[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.warning[_ngcontent-%COMP%], .answer__btn.warning[_ngcontent-%COMP%]:active, .answer__btn.warning.active[_ngcontent-%COMP%], .answer__btn.warning.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#fff500;border-color:#fff500}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.warning[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.warning[_ngcontent-%COMP%]:focus, .answer__btn.warning[_ngcontent-%COMP%]:active:focus, .answer__btn.warning.active[_ngcontent-%COMP%]:focus, .answer__btn.warning.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.warning[_ngcontent-%COMP%]:disabled, .answer__btn.warning.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.warning[_ngcontent-%COMP%]{background-color:#fff500}.answer__btn.semi-danger[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.semi-danger[_ngcontent-%COMP%]:hover{color:#000;background-color:#ff9d47;border-color:#ff9d47}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.semi-danger[_ngcontent-%COMP%], .answer__btn.semi-danger[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-danger[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-danger[_ngcontent-%COMP%], .answer__btn.semi-danger[_ngcontent-%COMP%]:active, .answer__btn.semi-danger.active[_ngcontent-%COMP%], .answer__btn.semi-danger.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#ff9d47;border-color:#ff9d47}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.semi-danger[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.semi-danger[_ngcontent-%COMP%]:focus, .answer__btn.semi-danger[_ngcontent-%COMP%]:active:focus, .answer__btn.semi-danger.active[_ngcontent-%COMP%]:focus, .answer__btn.semi-danger.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.semi-danger[_ngcontent-%COMP%]:disabled, .answer__btn.semi-danger.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.semi-danger[_ngcontent-%COMP%]{background-color:#ff9d47}.answer__btn.danger[_ngcontent-%COMP%]{color:#000;border-color:#000}.answer__btn.danger[_ngcontent-%COMP%]:hover{color:#000;background-color:#ff4740;border-color:#ff4740}.btn-check[_ngcontent-%COMP%]:focus + .answer__btn.danger[_ngcontent-%COMP%], .answer__btn.danger[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.danger[_ngcontent-%COMP%], .btn-check[_ngcontent-%COMP%]:active + .answer__btn.danger[_ngcontent-%COMP%], .answer__btn.danger[_ngcontent-%COMP%]:active, .answer__btn.danger.active[_ngcontent-%COMP%], .answer__btn.danger.dropdown-toggle.show[_ngcontent-%COMP%]{color:#000;background-color:#ff4740;border-color:#ff4740}.btn-check[_ngcontent-%COMP%]:checked + .answer__btn.danger[_ngcontent-%COMP%]:focus, .btn-check[_ngcontent-%COMP%]:active + .answer__btn.danger[_ngcontent-%COMP%]:focus, .answer__btn.danger[_ngcontent-%COMP%]:active:focus, .answer__btn.danger.active[_ngcontent-%COMP%]:focus, .answer__btn.danger.dropdown-toggle.show[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem #00000080}.answer__btn.danger[_ngcontent-%COMP%]:disabled, .answer__btn.danger.disabled[_ngcontent-%COMP%]{color:#000;background-color:transparent}input[_ngcontent-%COMP%]:checked ~ .answer__btn.danger[_ngcontent-%COMP%]{background-color:#ff4740}@media (max-width: 991.98px){.answer__text[_ngcontent-%COMP%]:nth-child(2){display:none}}.answer__text[_ngcontent-%COMP%]:last-child{text-align:end}label[_ngcontent-%COMP%]{cursor:pointer}@media (min-width: 768px){.actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:160px}}']}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.Bz.forChild(N)],u.Bz]}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,F,a.UX]]}),e})()}}]);
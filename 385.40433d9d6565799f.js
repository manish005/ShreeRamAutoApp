"use strict";(self.webpackChunkModernize=self.webpackChunkModernize||[]).push([[385],{5118:(wt,C,r)=>{r.r(C),r.d(C,{UicomponentsModule:()=>At});var S=r(9299),g=r(6895),l=r(4006),I=r(5385),M=r(792),Q=r(5664),q=r(8675),w=r(4004),t=r(4650),v=r(7957),y=r(3238),c=r(9602),u=r(9549),b=r(4144),J=r(4385),p=r(3546),h=r(4859),x=r(7392);function Y(e,o){if(1&e&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a),t.xp6(1),t.hij(" ",a," ")}}function F(e,o){if(1&e&&(t.TgZ(0,"mat-option",27),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.Q6J("value",a),t.xp6(1),t.hij(" ",a," ")}}let O=(()=>{class e{constructor(){this.OldmodelForm=new l.NI(""),this.NewmodelForm=new l.NI(""),this.Oldmodelname=["TZA","XP130","XLTZ4","XLTZ5","KI88"],this.Newmodelname=["XLTZ5","KI88","TZA","XP130","XLTZ4"],this.OldItemSrNum=new l.NI(""),this.TicketNum=new l.NI(""),this.disableSelect=new l.NI(!1),this.hidden=!1}ngOnInit(){this.OldfilteredOptions=this.OldmodelForm.valueChanges.pipe((0,q.O)(""),(0,w.U)(a=>this._Oldfilter(a||""))),this.NewfilteredOptions=this.NewmodelForm.valueChanges.pipe((0,q.O)(""),(0,w.U)(a=>this._Newfilter(a||"")))}toggleBadgeVisibility(){this.hidden=!this.hidden}_Oldfilter(a){const n=a.toLowerCase();return this.Oldmodelname.filter(i=>i.toLowerCase().includes(n))}_Newfilter(a){const n=a.toLowerCase();return this.Newmodelname.filter(i=>i.toLowerCase().includes(n))}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-badge"]],decls:100,vars:18,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"b-1","shadow-none"],[1,"example-form"],[1,"grid2col"],[1,"example-full-width"],["matInput","",3,"matDatepicker"],["matIconSuffix","",3,"for"],["picker1",""],["type","text","placeholder","Pick one","aria-label","Model","matInput","",3,"formControl","matAutocomplete"],["autoActiveFirstOption",""],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["matInput",""],["cellspacing","0",1,"example-full-width"],["cellspacing","0",1,"grid2col"],["matPrefix",""],["type","tel","matInput","","placeholder","800-555-1234"],["matSuffix",""],["picker2",""],["picker",""],["type","text","placeholder","Pick one","aria-label","Replace Model","matInput","",3,"formControl","matAutocomplete"],[3,"disabled"],["value","Yes"],["value","No"],["mat-raised-button","","color","primary"],[3,"value"]],template:function(a,n){if(1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Replace Item"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"mat-card",3)(6,"mat-card-content")(7,"form",4)(8,"div",5)(9,"mat-form-field",6)(10,"mat-label"),t._uU(11,"Current Date"),t.qZA(),t._UZ(12,"input",7),t.TgZ(13,"mat-hint"),t._uU(14,"MM/DD/YYYY"),t.qZA(),t._UZ(15,"mat-datepicker-toggle",8)(16,"mat-datepicker",null,9),t.qZA(),t.TgZ(18,"mat-form-field",6)(19,"mat-label"),t._uU(20,"Model"),t.qZA(),t._UZ(21,"input",10),t.TgZ(22,"mat-autocomplete",11,12),t.YNc(24,Y,2,2,"mat-option",13),t.ALo(25,"async"),t.qZA()()(),t.TgZ(26,"mat-form-field",6)(27,"mat-label"),t._uU(28,"Old Sr.No"),t.qZA(),t._UZ(29,"input",14),t.qZA(),t.TgZ(30,"table",15)(31,"tr")(32,"td")(33,"mat-form-field",6)(34,"mat-label"),t._uU(35,"Client name"),t.qZA(),t._UZ(36,"input",14),t.qZA()()()(),t.TgZ(37,"div",16)(38,"mat-form-field",6)(39,"mat-label"),t._uU(40,"Mobile No"),t.qZA(),t.TgZ(41,"span",17),t._uU(42,"+91 \xa0"),t.qZA(),t._UZ(43,"input",18),t.TgZ(44,"mat-icon",19),t._uU(45,"mode_edit"),t.qZA()(),t.TgZ(46,"mat-form-field",6)(47,"mat-label"),t._uU(48,"Ticket No"),t.qZA(),t._UZ(49,"input",14),t.qZA()(),t.TgZ(50,"mat-form-field",6)(51,"mat-label"),t._uU(52,"Date of Sold"),t.qZA(),t._UZ(53,"input",7),t.TgZ(54,"mat-hint"),t._uU(55,"MM/DD/YYYY"),t.qZA(),t._UZ(56,"mat-datepicker-toggle",8)(57,"mat-datepicker",null,20),t.qZA(),t.TgZ(59,"mat-form-field",6)(60,"mat-label"),t._uU(61,"Replacement Bat Sr.No"),t.qZA(),t._UZ(62,"input",14),t.qZA(),t.TgZ(63,"div",5)(64,"mat-form-field",6)(65,"mat-label"),t._uU(66,"Replacement Date"),t.qZA(),t._UZ(67,"input",7),t.TgZ(68,"mat-hint"),t._uU(69,"MM/DD/YYYY"),t.qZA(),t._UZ(70,"mat-datepicker-toggle",8)(71,"mat-datepicker",null,21),t.qZA(),t.TgZ(73,"mat-form-field",6)(74,"mat-label"),t._uU(75,"Replace Model"),t.qZA(),t._UZ(76,"input",22),t.TgZ(77,"mat-autocomplete",11,12),t.YNc(79,F,2,2,"mat-option",13),t.ALo(80,"async"),t.qZA()()(),t.TgZ(81,"div",5)(82,"mat-form-field")(83,"mat-label"),t._uU(84,"Old Battery Received"),t.qZA(),t.TgZ(85,"mat-select",23)(86,"mat-option",24),t._uU(87,"Yes"),t.qZA(),t.TgZ(88,"mat-option",25),t._uU(89,"No"),t.qZA()()(),t.TgZ(90,"mat-form-field")(91,"mat-label"),t._uU(92,"New Battery Delivered"),t.qZA(),t.TgZ(93,"mat-select",23)(94,"mat-option",24),t._uU(95,"Yes"),t.qZA(),t.TgZ(96,"mat-option",25),t._uU(97,"No"),t.qZA()()()(),t.TgZ(98,"button",26),t._uU(99,"Submit"),t.qZA()()()()()()),2&a){const i=t.MAs(17),s=t.MAs(23),Z=t.MAs(58),_=t.MAs(72);t.xp6(12),t.Q6J("matDatepicker",i),t.xp6(3),t.Q6J("for",i),t.xp6(6),t.Q6J("formControl",n.OldmodelForm)("matAutocomplete",s),t.xp6(3),t.Q6J("ngForOf",t.lcZ(25,14,n.OldfilteredOptions)),t.xp6(29),t.Q6J("matDatepicker",Z),t.xp6(3),t.Q6J("for",Z),t.xp6(11),t.Q6J("matDatepicker",_),t.xp6(3),t.Q6J("for",_),t.xp6(6),t.Q6J("formControl",n.NewmodelForm)("matAutocomplete",s),t.xp6(3),t.Q6J("ngForOf",t.lcZ(80,16,n.NewfilteredOptions)),t.xp6(6),t.Q6J("disabled",n.disableSelect.value),t.xp6(8),t.Q6J("disabled",n.disableSelect.value)}},dependencies:[g.sg,v.XC,y.ey,v.ZL,c.Mq,c.hl,c.nW,u.KE,u.hX,u.bx,u.qo,u.R9,b.Nt,J.gD,p.a8,p.dn,p.dk,p.n5,h.lW,x.Hw,l._Y,l.Fj,l.JJ,l.JL,l.F,l.oH,g.Ov],styles:[".example-full-width[_ngcontent-%COMP%]{width:100%}.grid2col[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,2fr)}"]}),e})();var f=r(8739),d=r(6308),m=r(671);function k(e,o){1&e&&(t.TgZ(0,"th",20),t._uU(1," ID "),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.id," ")}}function L(e,o){1&e&&(t.TgZ(0,"th",20),t._uU(1," Progress "),t.qZA())}function R(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.progress,"% ")}}function P(e,o){1&e&&(t.TgZ(0,"th",20),t._uU(1," Name "),t.qZA())}function H(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.name," ")}}function W(e,o){1&e&&(t.TgZ(0,"th",20),t._uU(1," Fruit "),t.qZA())}function X(e,o){if(1&e&&(t.TgZ(0,"td",21),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.fruit," ")}}function j(e,o){1&e&&t._UZ(0,"tr",22)}function E(e,o){1&e&&t._UZ(0,"tr",23)}function z(e,o){if(1&e&&(t.TgZ(0,"tr",24)(1,"td",25),t._uU(2),t.qZA()()),2&e){t.oxw();const a=t.MAs(16);t.xp6(2),t.hij('No data matching the filter "',a.value,'"')}}const V=function(){return[5,10,25,100]},D=["blueberry","lychee","kiwi","mango","peach","lime","pomegranate","pineapple"],A=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"];let G=(()=>{class e{constructor(){this.displayedColumns=["id","name","progress","fruit"];const a=Array.from({length:100},(n,i)=>function $(e){const o=A[Math.round(Math.random()*(A.length-1))]+" "+A[Math.round(Math.random()*(A.length-1))].charAt(0)+".";return{id:e.toString(),name:o,progress:Math.round(100*Math.random()).toString(),fruit:D[Math.round(Math.random()*(D.length-1))]}}(i+1));this.dataSource=new m.by(a)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(a){this.dataSource.filter=a.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-chips"]],viewQuery:function(a,n){if(1&a&&(t.Gf(f.NW,5),t.Gf(d.YE,5)),2&a){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first),t.iGM(i=t.CRH())&&(n.sort=i.first)}},decls:35,vars:5,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-12"],[1,"b-1","shadow-none"],["matInput","","placeholder","Ex. Mia",3,"keyup"],["input",""],[1,"example-table-container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","progress"],["matColumnDef","name"],["matColumnDef","fruit"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(a,n){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Replacement Data Verification"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Replacement Items"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Filter"),t.qZA(),t.TgZ(15,"input",6,7),t.NdJ("keyup",function(s){return n.applyFilter(s)}),t.qZA()(),t.TgZ(17,"div",8)(18,"table",9),t.ynx(19,10),t.YNc(20,k,2,0,"th",11),t.YNc(21,B,2,1,"td",12),t.BQk(),t.ynx(22,13),t.YNc(23,L,2,0,"th",11),t.YNc(24,R,2,1,"td",12),t.BQk(),t.ynx(25,14),t.YNc(26,P,2,0,"th",11),t.YNc(27,H,2,1,"td",12),t.BQk(),t.ynx(28,15),t.YNc(29,W,2,0,"th",11),t.YNc(30,X,2,1,"td",12),t.BQk(),t.YNc(31,j,1,0,"tr",16),t.YNc(32,E,1,0,"tr",17),t.YNc(33,z,3,1,"tr",18),t.qZA()(),t._UZ(34,"mat-paginator",19),t.qZA()()()()()()),2&a&&(t.xp6(18),t.Q6J("dataSource",n.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,V)))},dependencies:[u.KE,u.hX,b.Nt,p.a8,p.dn,p.dk,p.n5,f.NW,d.YE,d.nU,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,m.Ee],styles:[".example-box.cdk-drag-animating[_ngcontent-%COMP%], .example-chip[_ngcontent-%COMP%]   .cdk-drop-list-dragging[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-table-container[_ngcontent-%COMP%]{position:relative;min-height:200px;max-height:400px;overflow:auto}.example-full-width[_ngcontent-%COMP%]{width:100%}"]}),e})();function K(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," ID "),t.qZA())}function tt(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.id," ")}}function et(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Date "),t.qZA())}function at(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,a.date,"dd/MM/yyyy")," ")}}function ot(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Progress "),t.qZA())}function nt(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.progress,"% ")}}function it(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Name "),t.qZA())}function rt(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.name," ")}}function mt(e,o){1&e&&(t.TgZ(0,"th",23),t._uU(1," Fruit "),t.qZA())}function lt(e,o){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.fruit," ")}}function pt(e,o){1&e&&t._UZ(0,"tr",25)}function ut(e,o){1&e&&t._UZ(0,"tr",26)}const st=function(){return[5,10,25,100]},N=["blueberry","lychee","kiwi","mango","peach","lime","pomegranate","pineapple"],T=["Maia","Asher","Olivia","Atticus","Amelia","Jack","Charlotte","Theodore","Isla","Oliver","Isabella","Jasper","Cora","Levi","Violet","Arthur","Mia","Thomas","Elizabeth"];let ct=(()=>{class e{constructor(){this.displayedColumns=["id","date","name","progress","fruit"];const a=Array.from({length:100},(n,i)=>function dt(e){const o=T[Math.round(Math.random()*(T.length-1))]+" "+T[Math.round(Math.random()*(T.length-1))].charAt(0)+".",a=new Date(1970+Math.round(50*Math.random()),Math.round(11*Math.random()),Math.round(30*Math.random())+1);return{id:e.toString(),name:o,progress:Math.round(100*Math.random()).toString(),fruit:N[Math.round(Math.random()*(N.length-1))],date:a}}(i+1));this.dataSource=new m.by(a)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}applyFilter(a){this.dataSource.filter=a.target.value.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}applyDateFilter(a,n){this.dataSource.filterPredicate=(i,s)=>!s||(new Date(s),i.date>=a&&i.date<=n),this.dataSource.filter=`${a} - ${n}`}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-lists"]],viewQuery:function(a,n){if(1&a&&(t.Gf(f.NW,5),t.Gf(d.YE,5)),2&a){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first),t.iGM(i=t.CRH())&&(n.sort=i.first)}},decls:43,vars:7,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-12"],[1,"b-1","shadow-none"],[3,"rangePicker","keyup"],["matStartDate","","placeholder","Start date"],["matEndDate","","placeholder","End date"],["matIconSuffix","",3,"for"],["picker",""],[1,"example-table-container"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","date"],["matColumnDef","progress"],["matColumnDef","name"],["matColumnDef","fruit"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(a,n){if(1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Lists"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Replacement Items"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"mat-form-field")(13,"mat-label"),t._uU(14,"Filter"),t.qZA(),t.TgZ(15,"mat-date-range-input",6),t.NdJ("keyup",function(s){return n.applyFilter(s)}),t._UZ(16,"input",7)(17,"input",8),t.qZA(),t.TgZ(18,"mat-hint"),t._uU(19,"MM/DD/YYYY \u2013 MM/DD/YYYY"),t.qZA(),t._UZ(20,"mat-datepicker-toggle",9)(21,"mat-date-range-picker",null,10),t.qZA(),t.TgZ(23,"div",11)(24,"table",12),t.ynx(25,13),t.YNc(26,K,2,0,"th",14),t.YNc(27,tt,2,1,"td",15),t.BQk(),t.ynx(28,16),t.YNc(29,et,2,0,"th",14),t.YNc(30,at,3,4,"td",15),t.BQk(),t.ynx(31,17),t.YNc(32,ot,2,0,"th",14),t.YNc(33,nt,2,1,"td",15),t.BQk(),t.ynx(34,18),t.YNc(35,it,2,0,"th",14),t.YNc(36,rt,2,1,"td",15),t.BQk(),t.ynx(37,19),t.YNc(38,mt,2,0,"th",14),t.YNc(39,lt,2,1,"td",15),t.BQk(),t.YNc(40,pt,1,0,"tr",20),t.YNc(41,ut,1,0,"tr",21),t.qZA()(),t._UZ(42,"mat-paginator",22),t.qZA()()()()()()),2&a){const i=t.MAs(22);t.xp6(15),t.Q6J("rangePicker",i),t.xp6(5),t.Q6J("for",i),t.xp6(4),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(6,st))}},dependencies:[c.nW,c.wx,c.zY,c.By,c._g,u.KE,u.hX,u.bx,u.R9,p.a8,p.dn,p.dk,p.n5,f.NW,d.YE,d.nU,m.BZ,m.fO,m.as,m.w1,m.Dz,m.nj,m.ge,m.ev,m.XQ,m.Gk,g.uU],styles:[".example-table-container[_ngcontent-%COMP%]{position:relative;min-height:200px;max-height:400px;overflow:auto}.example-full-width[_ngcontent-%COMP%]{width:100%}"]}),e})();var U=r(8255);let Zt=(()=>{class e{constructor(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-menu"]],decls:165,vars:12,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-sm-6","col-lg-4"],[1,"b-1","shadow-none"],["mat-flat-button","","color","primary",1,"m-t-8",3,"matMenuTriggerFor"],[1,"cardWithShadow"],["menu","matMenu"],["mat-menu-item",""],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["name","dots",1,"icon-20"],["mat-menu-item","","disabled",""],["animals","matMenu"],["mat-menu-item","",3,"matMenuTriggerFor"],["vertebrates","matMenu"],["invertebrates","matMenu"],["fish","matMenu"],["amphibians","matMenu"],["reptiles","matMenu"],[1,"col-12"],[1,"col-sm-3"],["mat-flat-button","","color","primary",1,"w-100",3,"matMenuTriggerFor"],["yPosition","above",1,"cardWithShadow"],["aboveMenu","matMenu"],["mat-flat-button","","color","accent",1,"w-100",3,"matMenuTriggerFor"],["yPosition","below",1,"cardWithShadow"],["belowMenu","matMenu"],["mat-flat-button","","color","warn",1,"w-100",3,"matMenuTriggerFor"],["xPosition","before",1,"cardWithShadow"],["beforeMenu","matMenu"],["xPosition","after",1,"cardWithShadow"],["afterMenu","matMenu"]],template:function(a,n){if(1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Menu"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Basic"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"button",6),t._uU(13," Menu "),t.qZA(),t.TgZ(14,"mat-menu",7,8)(16,"button",9),t._uU(17,"Item 1"),t.qZA(),t.TgZ(18,"button",9),t._uU(19,"Item 2"),t.qZA()()()()(),t.TgZ(20,"div",4)(21,"mat-card",5)(22,"mat-card-header")(23,"mat-card-title"),t._uU(24,"with Icons"),t.qZA()(),t.TgZ(25,"mat-card-content",2)(26,"button",10)(27,"mat-icon"),t._UZ(28,"i-tabler",11),t.qZA()(),t.TgZ(29,"mat-menu",7,8)(31,"button",9)(32,"mat-icon"),t._uU(33,"dialpad"),t.qZA(),t.TgZ(34,"span"),t._uU(35,"Redial"),t.qZA()(),t.TgZ(36,"button",12)(37,"mat-icon"),t._uU(38,"voicemail"),t.qZA(),t.TgZ(39,"span"),t._uU(40,"Check voice mail"),t.qZA()(),t.TgZ(41,"button",9)(42,"mat-icon"),t._uU(43,"notifications_off"),t.qZA(),t.TgZ(44,"span"),t._uU(45,"Disable alerts"),t.qZA()()()()()(),t.TgZ(46,"div",4)(47,"mat-card",5)(48,"mat-card-header")(49,"mat-card-title"),t._uU(50,"Nested Menu"),t.qZA()(),t.TgZ(51,"mat-card-content",2)(52,"button",6),t._uU(53," Animal index "),t.qZA(),t.TgZ(54,"mat-menu",7,13)(56,"button",14),t._uU(57," Vertebrates "),t.qZA(),t.TgZ(58,"button",14),t._uU(59," Invertebrates "),t.qZA()(),t.TgZ(60,"mat-menu",7,15)(62,"button",14),t._uU(63,"Fishes"),t.qZA(),t.TgZ(64,"button",14),t._uU(65," Amphibians "),t.qZA(),t.TgZ(66,"button",14),t._uU(67," Reptiles "),t.qZA(),t.TgZ(68,"button",9),t._uU(69,"Birds"),t.qZA(),t.TgZ(70,"button",9),t._uU(71,"Mammals"),t.qZA()(),t.TgZ(72,"mat-menu",7,16)(74,"button",9),t._uU(75,"Insects"),t.qZA(),t.TgZ(76,"button",9),t._uU(77,"Molluscs"),t.qZA(),t.TgZ(78,"button",9),t._uU(79,"Crustaceans"),t.qZA(),t.TgZ(80,"button",9),t._uU(81,"Corals"),t.qZA(),t.TgZ(82,"button",9),t._uU(83,"Arachnids"),t.qZA(),t.TgZ(84,"button",9),t._uU(85,"Velvet worms"),t.qZA(),t.TgZ(86,"button",9),t._uU(87,"Horseshoe crabs"),t.qZA()(),t.TgZ(88,"mat-menu",7,17)(90,"button",9),t._uU(91,"Baikal oilfish"),t.qZA(),t.TgZ(92,"button",9),t._uU(93,"Bala shark"),t.qZA(),t.TgZ(94,"button",9),t._uU(95,"Ballan wrasse"),t.qZA(),t.TgZ(96,"button",9),t._uU(97,"Bamboo shark"),t.qZA(),t.TgZ(98,"button",9),t._uU(99,"Banded killifish"),t.qZA()(),t.TgZ(100,"mat-menu",7,18)(102,"button",9),t._uU(103,"Sonoran desert toad"),t.qZA(),t.TgZ(104,"button",9),t._uU(105,"Western toad"),t.qZA(),t.TgZ(106,"button",9),t._uU(107,"Arroyo toad"),t.qZA(),t.TgZ(108,"button",9),t._uU(109,"Yosemite toad"),t.qZA()(),t.TgZ(110,"mat-menu",7,19)(112,"button",9),t._uU(113,"Banded Day Gecko"),t.qZA(),t.TgZ(114,"button",9),t._uU(115,"Banded Gila Monster"),t.qZA(),t.TgZ(116,"button",9),t._uU(117,"Black Tree Monitor"),t.qZA(),t.TgZ(118,"button",9),t._uU(119,"Blue Spiny Lizard"),t.qZA(),t.TgZ(120,"button",12),t._uU(121,"Velociraptor"),t.qZA()()()()(),t.TgZ(122,"div",20)(123,"mat-card",5)(124,"mat-card-header")(125,"mat-card-title"),t._uU(126,"Positions"),t.qZA()(),t.TgZ(127,"mat-card-content",2)(128,"div",3)(129,"div",21)(130,"button",22),t._uU(131," Above "),t.qZA(),t.TgZ(132,"mat-menu",23,24)(134,"button",9),t._uU(135,"Item 1"),t.qZA(),t.TgZ(136,"button",9),t._uU(137,"Item 2"),t.qZA()()(),t.TgZ(138,"div",21)(139,"button",25),t._uU(140," Below "),t.qZA(),t.TgZ(141,"mat-menu",26,27)(143,"button",9),t._uU(144,"Item 1"),t.qZA(),t.TgZ(145,"button",9),t._uU(146,"Item 2"),t.qZA()()(),t.TgZ(147,"div",21)(148,"button",28),t._uU(149," Before "),t.qZA(),t.TgZ(150,"mat-menu",29,30)(152,"button",9),t._uU(153,"Item 1"),t.qZA(),t.TgZ(154,"button",9),t._uU(155,"Item 2"),t.qZA()()(),t.TgZ(156,"div",21)(157,"button",22),t._uU(158," After "),t.qZA(),t.TgZ(159,"mat-menu",31,32)(161,"button",9),t._uU(162,"Item 1"),t.qZA(),t.TgZ(163,"button",9),t._uU(164,"Item 2"),t.qZA()()()()()()()()()()),2&a){const i=t.MAs(15),s=t.MAs(55),Z=t.MAs(61),_=t.MAs(73),Tt=t.MAs(89),_t=t.MAs(101),bt=t.MAs(111),Ut=t.MAs(133),Ct=t.MAs(142),Mt=t.MAs(151),qt=t.MAs(160);t.xp6(12),t.Q6J("matMenuTriggerFor",i),t.xp6(14),t.Q6J("matMenuTriggerFor",i),t.xp6(26),t.Q6J("matMenuTriggerFor",s),t.xp6(4),t.Q6J("matMenuTriggerFor",Z),t.xp6(2),t.Q6J("matMenuTriggerFor",_),t.xp6(4),t.Q6J("matMenuTriggerFor",Tt),t.xp6(2),t.Q6J("matMenuTriggerFor",_t),t.xp6(2),t.Q6J("matMenuTriggerFor",bt),t.xp6(64),t.Q6J("matMenuTriggerFor",Ut),t.xp6(9),t.Q6J("matMenuTriggerFor",Ct),t.xp6(9),t.Q6J("matMenuTriggerFor",Mt),t.xp6(9),t.Q6J("matMenuTriggerFor",qt)}},dependencies:[U.VK,U.OP,U.p6,p.a8,p.dn,p.dk,p.n5,h.lW,h.RK,x.Hw,M.b],encapsulation:2}),e})();var gt=r(6709),ht=r(266);const ft=[{path:"",children:[{path:"badge",component:O},{path:"chips",component:G},{path:"lists",component:ct},{path:"menu",component:Zt},{path:"tooltips",component:(()=>{class e{constructor(){this.disabled=new l.NI(!1),this.showDelay=new l.NI(1e3),this.hideDelay=new l.NI(2e3),this.message=new l.NI("Info about the action")}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tooltips"]],decls:86,vars:8,consts:[[1,"cardWithShadow","theme-card"],[1,"m-b-0"],[1,"b-t-1"],[1,"row"],[1,"col-lg-4","col-sm-6"],[1,"b-1","shadow-none"],["mat-flat-button","","color","primary","matTooltip","Info about the action"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipClass","text-uppercase"],["mat-flat-button","","color","primary","matTooltip","Info about the action",1,"m-r-8",3,"matTooltipDisabled"],[1,"example-disabled-checkbox",3,"formControl"],[1,"col-lg-6"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipPosition","below","matTooltipHideDelay","100000"],["tooltip","matTooltip"],["mat-flat-button","","color","accent","matTooltip","Info about the action","matTooltipPosition","above","matTooltipHideDelay","100000",1,"m-l-8"],["mat-flat-button","","color","warn","matTooltip","Info about the action","matTooltipPosition","left","matTooltipHideDelay","100000",1,"m-l-8"],["mat-flat-button","","color","primary","matTooltip","Info about the action","matTooltipPosition","right","matTooltipHideDelay","100000",1,"m-l-8"],[1,"col-sm-4"],["appearance","outline",1,"w-100"],["matInput","","type","number",3,"formControl"],["mat-flat-button","","color","primary","matTooltip","Info about the action",3,"matTooltipShowDelay","matTooltipHideDelay"],["matInput","",3,"formControl"],["mat-flat-button","","color","primary","aria-label","Button that displays a tooltip with a custom message",3,"matTooltip"]],template:function(a,n){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title",1),t._uU(3,"Tooltips"),t.qZA()(),t.TgZ(4,"mat-card-content",2)(5,"div",3)(6,"div",4)(7,"mat-card",5)(8,"mat-card-header")(9,"mat-card-title"),t._uU(10,"Basic"),t.qZA()(),t.TgZ(11,"mat-card-content",2)(12,"button",6),t._uU(13," Button "),t.qZA()()()(),t.TgZ(14,"div",4)(15,"mat-card",5)(16,"mat-card-header")(17,"mat-card-title"),t._uU(18,"Uppercase"),t.qZA()(),t.TgZ(19,"mat-card-content",2)(20,"button",7),t._uU(21," Button "),t.qZA()()()(),t.TgZ(22,"div",4)(23,"mat-card",5)(24,"mat-card-header")(25,"mat-card-title"),t._uU(26,"Disabled on click"),t.qZA()(),t.TgZ(27,"mat-card-content",2)(28,"button",8),t._uU(29," Action "),t.qZA(),t.TgZ(30,"mat-checkbox",9),t._uU(31," Tooltip disabled "),t.qZA()()()(),t.TgZ(32,"div",10)(33,"mat-card",5)(34,"mat-card-header")(35,"mat-card-title"),t._uU(36,"Position"),t.qZA()(),t.TgZ(37,"mat-card-content",2)(38,"button",11,12),t._uU(40," Below "),t.qZA(),t.TgZ(41,"button",13,12),t._uU(43," Above "),t.qZA(),t.TgZ(44,"button",14,12),t._uU(46," Left "),t.qZA(),t.TgZ(47,"button",15,12),t._uU(49," Right "),t.qZA()()()(),t.TgZ(50,"div",10)(51,"mat-card",5)(52,"mat-card-header")(53,"mat-card-title"),t._uU(54,"Show and Hide"),t.qZA()(),t.TgZ(55,"mat-card-content",2)(56,"div",3)(57,"div",16)(58,"mat-form-field",17)(59,"mat-label"),t._uU(60,"Show delay"),t.qZA(),t._UZ(61,"input",18),t.TgZ(62,"mat-hint"),t._uU(63,"milliseconds"),t.qZA()()(),t.TgZ(64,"div",16)(65,"mat-form-field",17)(66,"mat-label"),t._uU(67,"Hide delay"),t.qZA(),t._UZ(68,"input",18),t.TgZ(69,"mat-hint"),t._uU(70,"milliseconds"),t.qZA()()(),t.TgZ(71,"div",16)(72,"button",19),t._uU(73," Action "),t.qZA()()()()()(),t.TgZ(74,"div",4)(75,"mat-card",5)(76,"mat-card-header")(77,"mat-card-title"),t._uU(78,"Change Message"),t.qZA()(),t.TgZ(79,"mat-card-content",2)(80,"mat-form-field",17)(81,"mat-label"),t._uU(82,"Tooltip message"),t.qZA(),t._UZ(83,"input",20),t.qZA(),t.TgZ(84,"button",21),t._uU(85," Action "),t.qZA()()()()()()()),2&a&&(t.xp6(28),t.Q6J("matTooltipDisabled",n.disabled.value),t.xp6(2),t.Q6J("formControl",n.disabled),t.xp6(31),t.Q6J("formControl",n.showDelay),t.xp6(7),t.Q6J("formControl",n.hideDelay),t.xp6(4),t.Q6J("matTooltipShowDelay",n.showDelay.value)("matTooltipHideDelay",n.hideDelay.value),t.xp6(11),t.Q6J("formControl",n.message),t.xp6(1),t.Q6J("matTooltip",n.message.value||""))},dependencies:[gt.oG,u.KE,u.hX,u.bx,b.Nt,p.a8,p.dn,p.dk,p.n5,h.lW,ht.gM,l.Fj,l.wV,l.JJ,l.oH],encapsulation:2}),e})()}]}];let At=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,S.Bz.forChild(ft),I.q,l.u5,l.UX,M.e.pick(Q),y.XK]}),e})()}}]);
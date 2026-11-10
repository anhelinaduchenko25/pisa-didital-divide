(function(){
"use strict";
var T={
uk:{title:"Екранний час і успішність у PISA",lead:"Скільки годин на день ви користуєтесь гаджетами в школі: для навчання і для розваг? Порівняйте себе із середніми результатами PISA 2022.",
calc:"1. Введіть свої години",learn:"Для навчання",leis:"Для розваг",perDay:"годин на день у школі",h:"год",
avg:"Для довідки: у середньому по OECD учні користуються пристроями 2,0 год на день для навчання і 1,1 год для розваг у школі.",
res:"2. Ваш результат",yourCat:"Ваша категорія",avgScore:"Середній бал з математики в цій групі",peak:"Найвищий середній бал",
approx:"наближено",you:"Ви",pts:"бали",xTitle:"годин на день у школі",yTitle:"середній бал з математики",
legend:"Заповнені кружечки: точні значення зі звіту. Порожні: значення зчитані з графіка OECD (±1–2 бали). Кольорова смуга: категорії, де середній бал не більш ніж на 5 пунктів нижчий за найвищий.",
disc:"Це не прогноз вашого балу. Графік показує середні результати груп учнів у країнах OECD, а не вашу оцінку. Дані показують зв’язок, а не причину. Години повідомляли самі учні.",
about:"Дані: OECD (2023), PISA 2022 Results (Volume II), розділ 5, рис. II.5.14: середній бал з математики за кількістю годин на день, які учні проводять на цифрових пристроях у школі. Звіт пов’язує форму кривої з «гіпотезою Златовласки» (Przybylski & Weinstein, 2017): помірне використання не шкодить і навіть пов’язане з вищими балами, а проблемою є надмірне.",
aboutT:"Про дані",limT:"Обмеження",
lim:["Це кореляція, а не причина: ми не знаємо, чи гаджети впливають на бали, чи навпаки, чи є спільні чинники.","Дані лише про використання в школі. Користування вдома тут не показано.","Самозвіт: учні самі оцінювали свій час.","Середнє по країнах OECD не відображає кожну країну чи кожного учня.","Зона балансу орієнтовна, її межі залежать від обраного допуску (5 пунктів)."],
src:"Джерело: https://doi.org/10.1787/a97db61c-en",
cat:["не користуюсь","до 1 год","1–2 год","2–3 год","3–5 год","5–7 год","понад 7 год"],
catShort:["0","≤1","1–2","2–3","3–5","5–7",">7"],
zone:"У зоні найвищих середніх балів",none:"Нижче піку",high:"Вище зони",
m:{learnZone:"Учні з такою кількістю годин для навчання у школі мали в середньому одні з найвищих балів.",
learnNone:"Учні, які зовсім не користувались пристроями для навчання, мали в середньому нижчі бали, ніж ті, хто користувався до кількох годин.",
learnHigh:"Понад 5 годин на день для навчання пов’язані з нижчими середніми балами. Можливе пояснення: втома, але це припущення, а не доведений факт.",
leisZone:"Учні з таким часом розваг мали в середньому найвищі бали серед усіх груп.",
leisNone:"Учні без розваг на пристроях у школі мали трохи нижчі середні бали, ніж ті, хто користувався до години. Причиною це вважати не можна: після поправки на соціально-економічний профіль різниця менша.",
leisHigh:"Понад годину розваг на пристроях у школі пов’язано з нижчими середніми балами. Для категорій 1–2, 2–3, 3–5 і 5–7 годин бали послідовно нижчі."}},
en:{title:"Screen time and academic performance in PISA",lead:"How many hours a day do you use devices at school, for learning and for leisure? Compare yourself with average PISA 2022 results.",
calc:"1. Enter your hours",learn:"For learning",leis:"For leisure",perDay:"hours per day at school",h:"h",
avg:"For reference: on average across OECD countries, students use devices 2.0 h/day for learning and 1.1 h/day for leisure at school.",
res:"2. Your result",yourCat:"Your category",avgScore:"Average maths score in this group",peak:"Highest average score",
approx:"approx.",you:"You",pts:"points",xTitle:"hours per day at school",yTitle:"average maths score",
legend:"Filled circles: exact values from the report. Hollow circles: values read from the OECD chart (±1–2 points). Coloured band: categories where the average score is within 5 points of the highest one.",
disc:"This is not a forecast of your score. The chart shows average results of groups of students in OECD countries, not your grade. The data show an association, not a cause. Hours were reported by the students themselves.",
about:"Data: OECD (2023), PISA 2022 Results (Volume II), chapter 5, Figure II.5.14: average mathematics score by hours per day students spend on digital devices at school. The report links the shape of the curve to the “Goldilocks hypothesis” (Przybylski & Weinstein, 2017): moderate use is not harmful and is even associated with higher scores, while overuse is the problem.",
aboutT:"About the data",limT:"Limitations",
lim:["This is a correlation, not a cause: we do not know if devices affect scores, the reverse, or if shared factors explain both.","Data cover use at school only. Use at home is not shown.","Self-reported: students estimated their own time.","The OECD average does not describe every country or every student.","The balance zone is indicative; its edges depend on the chosen tolerance (5 points)."],
src:"Source: https://doi.org/10.1787/a97db61c-en",
cat:["none","up to 1 h","1–2 h","2–3 h","3–5 h","5–7 h","over 7 h"],
catShort:["0","≤1","1–2","2–3","3–5","5–7",">7"],
zone:"In the highest-score zone",none:"Below the peak",high:"Above the zone",
m:{learnZone:"Students with this much learning time at school had among the highest average scores.",
learnNone:"Students who did not use devices for learning at all had lower average scores than those who used them for up to a few hours.",
learnHigh:"More than 5 hours a day for learning is associated with lower average scores. A possible explanation is fatigue, but this is an assumption, not a proven fact.",
leisZone:"Students with this amount of leisure time had the highest average scores of all groups.",
leisNone:"Students with no leisure use at school had slightly lower average scores than those with up to one hour. This should not be read as a cause: after accounting for socio-economic profile the gap is smaller.",
leisHigh:"More than an hour of leisure on devices at school is associated with lower average scores. For 1–2, 2–3, 3–5 and 5–7 hours the scores are consistently lower."}}
};
var lang="uk", TOL=5, YMIN=420, YMAX=500;
var data=window.SCREEN_DATA||[];
function rowsFor(p){return data.filter(function(r){return r.place==="school"&&r.purpose===p}).sort(function(a,b){return a.order-b.order})}
var R={learning:rowsFor("learning"),leisure:rowsFor("leisure")};
function catIndex(h){return h<=0?0:h<=1?1:h<=2?2:h<=3?3:h<=5?4:h<=7?5:6}
function zoneOf(rows){var mx=Math.max.apply(null,rows.map(function(r){return r.score}));return rows.map(function(r){return r.score>=mx-TOL})}
var st={learning:2,leisure:1};
function $(id){return document.getElementById(id)}
function el(tag,attrs,txt){var e=document.createElement(tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(txt!=null)e.textContent=txt;return e}
function ns(tag,attrs,txt){var e=document.createElementNS("http://www.w3.org/2000/svg",tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(txt!=null)e.textContent=txt;return e}
function fmtH(v){return String(v).replace(".",lang==="uk"?",":".")}

function buildInputs(){
  [["learning","in-learn","learn","--learn"],["leisure","in-leis","leis","--leis"]].forEach(function(c){
    var box=$(c[1]);box.textContent="";
    var row=el("div",{class:"row"});
    var lab=el("div");var dot=el("span",{class:"dot"});dot.style.background="var("+c[3]+")";lab.appendChild(dot);lab.appendChild(el("strong",{},T[lang][c[2]]));
    var val=el("span",{class:"val",id:"val-"+c[0]});row.appendChild(lab);row.appendChild(val);box.appendChild(row);
    var inp=el("input",{type:"range",min:"0",max:"9",step:"0.5",value:st[c[0]],"aria-label":T[lang][c[2]]});
    inp.oninput=function(){st[c[0]]=parseFloat(inp.value);update()};
    box.appendChild(inp);box.appendChild(el("small",{},T[lang].perDay));
  });
}
function chart(rows,color,idx){
  var W=520,H=290,ml=46,mr=14,mt=18,mb=58,pw=W-ml-mr,ph=H-mt-mb,step=pw/7;
  var X=function(i){return ml+(i+.5)*step}, Y=function(v){return mt+ph*(1-(v-YMIN)/(YMAX-YMIN))};
  var s=ns("svg",{viewBox:"0 0 "+W+" "+H,role:"img"});
  [420,440,460,480,500].forEach(function(v){s.appendChild(ns("line",{x1:ml,x2:W-mr,y1:Y(v),y2:Y(v),stroke:"var(--line)"}));s.appendChild(ns("text",{x:ml-6,y:Y(v)+4,"text-anchor":"end"},v))});
  var z=zoneOf(rows),lo=z.indexOf(true),hi=z.lastIndexOf(true);
  if(lo>=0)s.appendChild(ns("rect",{x:X(lo)-step/2,y:mt,width:(hi-lo+1)*step,height:ph,fill:color,"fill-opacity":".14"}));
  rows.forEach(function(r,i){s.appendChild(ns("text",{x:X(i),y:H-mb+16,"text-anchor":"middle"},T[lang].catShort[i]))});
  s.appendChild(ns("text",{x:ml+pw/2,y:H-mb+36,"text-anchor":"middle"},T[lang].xTitle));
  var t=ns("text",{x:12,y:mt+ph/2,"text-anchor":"middle",transform:"rotate(-90 12 "+(mt+ph/2)+")"},T[lang].yTitle);s.appendChild(t);
  s.appendChild(ns("polyline",{points:rows.map(function(r,i){return X(i)+","+Y(r.score)}).join(" "),fill:"none",stroke:color,"stroke-width":2.5}));
  rows.forEach(function(r,i){var c=ns("circle",{cx:X(i),cy:Y(r.score),r:4.5,fill:r.approx?"var(--card)":color,stroke:color,"stroke-width":2});
    c.appendChild(ns("title",{},T[lang].cat[i]+": "+r.score+(r.approx?" ("+T[lang].approx+")":"")));s.appendChild(c)});
  var ux=X(idx),uy=Y(rows[idx].score);
  s.appendChild(ns("line",{x1:ux,x2:ux,y1:mt,y2:mt+ph,stroke:color,"stroke-dasharray":"4 3","stroke-width":1.5}));
  s.appendChild(ns("circle",{cx:ux,cy:uy,r:8,fill:color,stroke:"var(--card)","stroke-width":3}));
  var lab=ns("text",{x:ux,y:Math.max(uy-14,mt+10),"text-anchor":"middle"},T[lang].you);lab.style.fontWeight="700";lab.style.fill=color;s.appendChild(lab);
  return s;
}
function result(p,box,chBox,color){
  var rows=R[p],idx=catIndex(st[p]),r=rows[idx],mx=Math.max.apply(null,rows.map(function(x){return x.score})),z=zoneOf(rows),inZone=z[idx];
  var key,cls,badge;
  if(inZone){key=(p==="learning"?"learnZone":"leisZone");cls="ok";badge=T[lang].zone}
  else if(idx===0){key=(p==="learning"?"learnNone":"leisNone");cls="mid";badge=T[lang].none}
  else{key=(p==="learning"?"learnHigh":"leisHigh");cls="warn";badge=T[lang].high}
  if(p==="learning"&&!inZone&&idx>0&&idx<5){key="learnZone";cls="mid";badge=T[lang].none}
  box.textContent="";
  box.appendChild(el("div",{class:"badge "+cls},badge));
  var h=el("div");h.appendChild(el("strong",{},T[lang][p==="learning"?"learn":"leis"]+": "+fmtH(st[p])+" "+T[lang].h));box.appendChild(h);
  box.appendChild(el("p",{class:"msg"},T[lang].yourCat+": "+T[lang].cat[idx]+". "+T[lang].avgScore+": "+r.score+(r.approx?" ("+T[lang].approx+")":"")+". "+T[lang].peak+": "+mx+"."));
  box.appendChild(el("p",{class:"msg"},T[lang].m[key]));
  chBox.textContent="";chBox.appendChild(chart(rows,color,idx));
}
function update(){
  $("val-learning").textContent=fmtH(st.learning)+" "+T[lang].h;$("val-leisure").textContent=fmtH(st.leisure)+" "+T[lang].h;
  if(!R.learning.length||!R.leisure.length){$("res-learn").textContent="No data in data.js";return}
  result("learning",$("res-learn"),$("ch-learn"),"var(--learn)");result("leisure",$("res-leis"),$("ch-leis"),"var(--leis)");
}
function texts(){
  var t=T[lang];document.documentElement.lang=lang;document.title=t.title;
  $("t-title").textContent=t.title;$("t-lead").textContent=t.lead;$("t-calc").textContent=t.calc;$("t-avg").textContent=t.avg;
  $("t-res").textContent=t.res;$("t-legend").textContent=t.legend;$("t-disc").textContent=t.disc;$("t-about").textContent=t.aboutT;$("about").textContent=t.about;
  $("t-lim").textContent=t.limT;var ul=$("lim");ul.textContent="";t.lim.forEach(function(x){ul.appendChild(el("li",{},x))});$("t-src").textContent=t.src;
  $("lang").textContent=lang==="uk"?"EN":"UA";
}
$("lang").onclick=function(){lang=lang==="uk"?"en":"uk";texts();buildInputs();update()};
texts();buildInputs();update();
})();

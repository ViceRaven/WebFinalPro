import{_ as g,c as o,a as i,F as m,r as x,d as _,w as h,v as w,t as s,o as u,b as E}from"./index-CIgYrE7O.js";const k={name:"MaxExerciseData",data(){return{todayExercises:[{id:1,name:"Running",duration:5,unit:"miles"},{id:2,name:"Cycling",duration:45,unit:"miles"}],weekExercises:[{id:1,name:"Running",duration:25,unit:"miles"},{id:2,name:"Cycling",duration:45,unit:"miles"},{id:3,name:"Swimming",duration:60,unit:"laps"},{id:4,name:"Yoga",duration:40,unit:"mins"}],allTimeExercises:[{id:1,name:"Running",duration:500,unit:"miles"},{id:2,name:"Cycling",duration:45,unit:"miles"},{id:3,name:"Swimming",duration:60,unit:"laps"},{id:4,name:"Yoga",duration:40,unit:"mins"},{id:5,name:"Hiking",duration:120,unit:"mins"},{id:6,name:"Weightlifting",duration:50,unit:"mins"}],newExercise:{name:"",duration:"",unit:""},editIndex:null,editCategory:""}},methods:{addExercise(){if(this.editIndex!==null)this.updateExercise();else{const e={id:this.allTimeExercises.length+1,...this.newExercise,unit:this.getUnit(this.newExercise.name)};this.todayExercises.push(e),this.weekExercises.push(e),this.allTimeExercises.push(e),this.newExercise.name="",this.newExercise.duration="",this.newExercise.unit=""}},editExercise(n,e){this.editCategory=n,this.editIndex=e;const c=this[`${n}Exercises`][e];this.newExercise.name=c.name,this.newExercise.duration=c.duration,this.newExercise.unit=c.unit},updateExercise(){const n={...this.newExercise,id:this[`${this.editCategory}Exercises`][this.editIndex].id,unit:this.getUnit(this.newExercise.name)};this[`${this.editCategory}Exercises`].splice(this.editIndex,1,n),this.newExercise.name="",this.newExercise.duration="",this.newExercise.unit="",this.editIndex=null,this.editCategory=""},deleteExercise(n,e){this[`${n}Exercises`].splice(e,1)},getUnit(n){return n.toLowerCase()==="running"||n.toLowerCase()==="cycling"?"miles":n.toLowerCase()==="swimming"?"laps":"mins"}}},C={class:"container"},p={class:"card"},v={class:"buttons"},y=["onClick"],f=["onClick"],b={class:"card"},T={class:"buttons"},I=["onClick"],D=["onClick"],U={class:"card"},L={class:"buttons"},M=["onClick"],S=["onClick"],V={class:"card"},B={class:"field"},R={class:"field"},q={type:"submit"};function A(n,e,c,F,d,r){return u(),o("div",C,[e[9]||(e[9]=i("h1",null,"Max's Exercise Data",-1)),i("div",p,[e[3]||(e[3]=i("h2",null,"Today",-1)),i("ul",null,[(u(!0),o(m,null,x(d.todayExercises,(t,l)=>(u(),o("li",{key:t.id},[E(s(t.name)+" - "+s(t.duration)+" "+s(t.unit)+" ",1),i("div",v,[i("button",{onClick:a=>r.editExercise("today",l)},"Edit",8,y),i("button",{onClick:a=>r.deleteExercise("today",l)},"Delete",8,f)])]))),128))])]),i("div",b,[e[4]||(e[4]=i("h2",null,"This Week",-1)),i("ul",null,[(u(!0),o(m,null,x(d.weekExercises,(t,l)=>(u(),o("li",{key:t.id},[E(s(t.name)+" - "+s(t.duration)+" "+s(t.unit)+" ",1),i("div",T,[i("button",{onClick:a=>r.editExercise("week",l)},"Edit",8,I),i("button",{onClick:a=>r.deleteExercise("week",l)},"Delete",8,D)])]))),128))])]),i("div",U,[e[5]||(e[5]=i("h2",null,"All Time",-1)),i("ul",null,[(u(!0),o(m,null,x(d.allTimeExercises,(t,l)=>(u(),o("li",{key:t.id},[E(s(t.name)+" - "+s(t.duration)+" "+s(t.unit)+" ",1),i("div",L,[i("button",{onClick:a=>r.editExercise("allTime",l)},"Edit",8,M),i("button",{onClick:a=>r.deleteExercise("allTime",l)},"Delete",8,S)])]))),128))])]),i("div",V,[e[8]||(e[8]=i("h2",null,"Log New Exercise",-1)),i("form",{onSubmit:e[2]||(e[2]=_((...t)=>r.addExercise&&r.addExercise(...t),["prevent"]))},[i("div",B,[e[6]||(e[6]=i("label",{for:"name"},"Exercise Name:",-1)),h(i("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>d.newExercise.name=t),required:""},null,512),[[w,d.newExercise.name]])]),i("div",R,[e[7]||(e[7]=i("label",{for:"duration"},"Duration:",-1)),h(i("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=t=>d.newExercise.duration=t),required:""},null,512),[[w,d.newExercise.duration]])]),i("button",q,s(d.editIndex!==null?"Update Exercise":"Add Exercise"),1)],32)])])}const W=g(k,[["render",A],["__scopeId","data-v-90f3fe01"]]);export{W as default};

import{_,c as o,a as i,F as m,r as E,d as k,w as h,v as w,t as n,o as u,b as x}from"./index-DV8MSYMc.js";const C={name:"ChloeExerciseData",data(){return{todayExercises:[{id:1,name:"Running",duration:5,unit:"miles"},{id:2,name:"Yoga",duration:30,unit:"mins"}],weekExercises:[{id:1,name:"Running",duration:25,unit:"miles"},{id:2,name:"Yoga",duration:180,unit:"mins"},{id:3,name:"Swimming",duration:120,unit:"laps"}],allTimeExercises:[{id:1,name:"Running",duration:500,unit:"miles"},{id:2,name:"Yoga",duration:3e3,unit:"mins"},{id:3,name:"Swimming",duration:1200,unit:"laps"}],newExercise:{name:"",duration:"",unit:""},editIndex:null,editCategory:""}},methods:{addExercise(){if(this.editIndex!==null)this.updateExercise();else{const e={id:this.allTimeExercises.length+1,...this.newExercise,unit:this.getUnit(this.newExercise.name)};this.todayExercises.push(e),this.weekExercises.push(e),this.allTimeExercises.push(e),this.newExercise.name="",this.newExercise.duration="",this.newExercise.unit=""}},editExercise(s,e){this.editCategory=s,this.editIndex=e;const c=this[`${s}Exercises`][e];this.newExercise.name=c.name,this.newExercise.duration=c.duration,this.newExercise.unit=c.unit},updateExercise(){const s={...this.newExercise,id:this[`${this.editCategory}Exercises`][this.editIndex].id,unit:this.getUnit(this.newExercise.name)};this[`${this.editCategory}Exercises`].splice(this.editIndex,1,s),this.newExercise.name="",this.newExercise.duration="",this.newExercise.unit="",this.editIndex=null,this.editCategory=""},deleteExercise(s,e){this[`${s}Exercises`].splice(e,1)},getUnit(s){return s.toLowerCase()==="running"?"miles":s.toLowerCase()==="swimming"?"laps":"mins"}}},g={class:"container"},p={class:"card"},v={class:"buttons"},y=["onClick"],b=["onClick"],f={class:"card"},T={class:"buttons"},I=["onClick"],D=["onClick"],U={class:"card"},L={class:"buttons"},S=["onClick"],V=["onClick"],B={class:"card"},N={class:"field"},R={class:"field"},Y={type:"submit"};function q(s,e,c,A,d,r){return u(),o("div",g,[e[9]||(e[9]=i("h1",null,"Chloe's Exercise Data",-1)),i("div",p,[e[3]||(e[3]=i("h2",null,"Today",-1)),i("ul",null,[(u(!0),o(m,null,E(d.todayExercises,(t,l)=>(u(),o("li",{key:t.id},[x(n(t.name)+" - "+n(t.duration)+" "+n(t.unit)+" ",1),i("div",v,[i("button",{onClick:a=>r.editExercise("today",l)},"Edit",8,y),i("button",{onClick:a=>r.deleteExercise("today",l)},"Delete",8,b)])]))),128))])]),i("div",f,[e[4]||(e[4]=i("h2",null,"This Week",-1)),i("ul",null,[(u(!0),o(m,null,E(d.weekExercises,(t,l)=>(u(),o("li",{key:t.id},[x(n(t.name)+" - "+n(t.duration)+" "+n(t.unit)+" ",1),i("div",T,[i("button",{onClick:a=>r.editExercise("week",l)},"Edit",8,I),i("button",{onClick:a=>r.deleteExercise("week",l)},"Delete",8,D)])]))),128))])]),i("div",U,[e[5]||(e[5]=i("h2",null,"All Time",-1)),i("ul",null,[(u(!0),o(m,null,E(d.allTimeExercises,(t,l)=>(u(),o("li",{key:t.id},[x(n(t.name)+" - "+n(t.duration)+" "+n(t.unit)+" ",1),i("div",L,[i("button",{onClick:a=>r.editExercise("allTime",l)},"Edit",8,S),i("button",{onClick:a=>r.deleteExercise("allTime",l)},"Delete",8,V)])]))),128))])]),i("div",B,[e[8]||(e[8]=i("h2",null,"Log New Exercise",-1)),i("form",{onSubmit:e[2]||(e[2]=k((...t)=>r.addExercise&&r.addExercise(...t),["prevent"]))},[i("div",N,[e[6]||(e[6]=i("label",{for:"name"},"Exercise Name:",-1)),h(i("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>d.newExercise.name=t),required:""},null,512),[[w,d.newExercise.name]])]),i("div",R,[e[7]||(e[7]=i("label",{for:"duration"},"Duration:",-1)),h(i("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=t=>d.newExercise.duration=t),required:""},null,512),[[w,d.newExercise.duration]])]),i("button",Y,n(d.editIndex!==null?"Update Exercise":"Add Exercise"),1)],32)])])}const M=_(C,[["render",q],["__scopeId","data-v-f83e907d"]]);export{M as default};

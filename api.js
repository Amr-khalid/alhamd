let table=document.getElementById("table")  










if(navigator.geolocation)
{
  
navigator.geolocation.getCurrentPosition(

  function gh(p){

 let locx=p.coords.latitude;
 let locy=p.coords.longitude;
console.log(locx,locy);
let apiqu=`http://api.aladhan.com/v1/qibla/:${locx}/:${locy}`

async function get () {
  let respons=await fetch(apiqu)
  let data =await respons.json()
  console.log(data)
}



let apiUrl=`https://api.aladhan.com/v1/timings?latitude=${locx}&longitude=${locy}`;
console.log(locx)
if(locx!=null){
async function g(){

  const res=await fetch(apiUrl)
const data=await res.json()
let datehij=data.data.date.hijri.date;
let datemaldy=data.data.date.readable

console.log(data)
const tim=data.data.timings;
console.log(tim)
console.log(datehij)
console.log(datemaldy)

let dd=document.getElementById("date")

dd.innerHTML=`

<div class="pre">
  <p>التاريخ الهجري</p>
  <p>${datehij}</p>
</div>
<div>

  <h3 class="to"  id="bas">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
</h2>

</div>
<div class="pre">
  <p>التاريخ الملادي</p>
  <p>${datemaldy}</p>
</div>

`


table.innerHTML=`

   <tr class="u">
      <td class="uu">
        <p class="pe">الفجر</p>
        <p>${tim.Fajr}</p>
      </td>
      <td>
        <p class="pe">الشروق</p>
        <p>${tim.Sunrise}</p>
      </td>
      <td>
        <p class="pe">الظهر</p>
        <p>${tim.Dhuhr}</p>
      </td>
      <td>
        <p class="pe">العصر</p>
        <p>${tim.Asr}</p>
      </td>
      <td>
        <p class="pe">المغرب</p>
        <p>${tim.Maghrib}</p>
      </td>
      <td>
        <p class="pe">العشاء</p>
        <p>${tim.Isha}</p>

      </td>
</tr>

`

}
g()
get()
  }
},async function k(error){
  alert("لعدم السماح سيكون خط لاافتراضي 29.91-والدايرة 31.2")
 let locy= 29.91667;
 let  locx= 31.2
 let apiUrl=`https://api.aladhan.com/v1/timings?latitude=${locx}&longitude=${locy}`;
 console.log(locx)
 
   const res=await fetch(apiUrl)
 const data=await res.json()
 let datehij=data.data.date.hijri.date;
 let datemaldy=data.data.date.readable
 
 console.log(data)
 const tim=data.data.timings;
 console.log(tim)
 console.log(datehij)
 console.log(datemaldy)
 
 let dd=document.getElementById("date")
 
 dd.innerHTML=`
 
 <div class="pre">
   <p>التاريخ الهجري</p>
   <p>${datehij}</p>
 </div>
 <div>
 
   <h3 class="to"  id="bas">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
 </h2>
 
 </div>
 <div class="pre">
   <p>التاريخ الملادي</p>
   <p>${datemaldy}</p>
 </div>
 
 `
 
 
 table.innerHTML=`
 
    <tr class="u">
       <td class="uu">
         <p class="pe">الفجر</p>
         <p>${tim.Fajr}</p>
       </td>
       <td>
         <p class="pe">الشروق</p>
         <p>${tim.Sunrise}</p>
       </td>
       <td>
         <p class="pe">الظهر</p>
         <p>${tim.Dhuhr}</p>
       </td>
       <td>
         <p class="pe">العصر</p>
         <p>${tim.Asr}</p>
       </td>
       <td>
         <p class="pe">المغرب</p>
         <p>${tim.Maghrib}</p>
       </td>
       <td>
         <p class="pe">العشاء</p>
         <p>${tim.Isha}</p>
 
       </td>
 </tr>
 
 `
 
 }




)}
//k()







let ts=document.getElementById("ts")
let con=document.getElementById("con")
let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
let b3=document.getElementById("b3")
let b4=document.getElementById("b4")
let com=document.querySelector(".compass")
b3.onclick=()=>{


  ts.style.display="none"
cq.style.display="block"
  con.style.display="none"
}

b4.onclick=()=>{

com.style.display="block"
  ts.style.display="none"
cq.style.display="none"
  con.style.display="none"
}




b1.onclick=()=>{


  ts.style.display="block"
cq.style.display="none"
  con.style.display="none"
}

 let h=document.getElementById("t1")


// let b2=document.getElementById("b2")


 let de=document.getElementById("display")
let bn=document.getElementById("bn")
let bn3=document.getElementById("bn3")
let bn2=document.getElementById("bn2")
bn3.onclick=()=>{
  localStorage.setItem("pp",de.innerHTML)
  de.innerHTML=localStorage.pp
  document.body.style.cssText='background:linear-gradient(346deg, white, white)'
}
onload=()=>{  if(de.innerHTML==0)
if(de.innerHTML==undefined)
{
  de.innerHTML=0
}
else{  de.innerHTML=localStorage.pp}

}

bn2.onclick=()=>{
  de.innerHTML=0
  localStorage.setItem("pp",de.innerHTML)

}

let kk=document.getElementById("kk")

bn.onclick=function ()
{

 de.innerHTML-=-1

}
let bas=document.getElementById("bas")
let root=document.documentElement
bas.onclick=function () {
root.style.setProperty("--color",' #420074')
  root.style.setProperty("--background-color",'rgb(0, 0, 0)')
  root.style.setProperty("--color2",'white')
  lo.style.cssText=`filter: invert(0);
  `
}
let lo=document.getElementById("lo")
lo.onclick=()=>{location.reload()}
//https://json.link/5a6Wf0XswT.json
//let ts=document.getElementById("ts")
//ts.innerHTML+=``
b2.onclick=()=>{
  kk.style.display="flex"
document.body.style.backgroundColor="black"
  con.style.display="none"
cq.style.display="none"
}
////////////////////////////////////////////////////////////////////////
let h1=document.querySelector(".hader")
let b=document.querySelector(".body")
let loc=`https://api.alquran.cloud/v1/quran/ar.asad`
async function get() {
  let res=await fetch(loc)
  let data = await res.json()
  console.log(data)
  let k=data.data.surahs
  g(k)
}
get()
function g(inner)
  {
    h1.innerHTML=`<select onchange="sh(this.value)">
   <option>  <h3 class="rr"  id="bas">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
</option>
  ${inner.map(s=>`<option >${`${s.number}`+"‹  "+s.name  }</option>`)}
    
    </select>`
  }
async function sh(value)
{let res=await fetch(`https://api.alquran.cloud/v1/surah/${value}/ar.asad`)
let data=await res.json();
let h=data.data.ayahs.map(a=>a.text)
console.log(data);
let j=h.map((x,i)=>`${x} ⟨${i+1}⟩`).join('  ')
//let j=h.map((text,i)=>`${text}(${i+1})`).join('  ')
//let j=h.map((text, i) => `${text}(${i + 1})`).join(' '); // Increment index by 1 to start from (1)
b.innerHTML=`<p>${j}</p>`

}
let cq=document.querySelector(".conter")
////////////////////////////////////////////////////////////////
let ss=document.getElementById("s")

        let pp=document.getElementById("p")
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition
    (
        function possion(possion){
            let locx=possion.coords.latitude
            let locy=possion.coords.longitude

let api=`http://api.aladhan.com/v1/qibla/:${locx}/:${locy}`
async function get(){
    let res = await fetch(api)
    let date= await res.json()
    console.log(locx,locy)
    console.log(date)
    console.log("ghada")
console.log(date.data.direction)
ss.innerHTML=`${Math.round(date.data.direction)}`
    pp.style.transform= `rotate(${date.data.direction}deg)`

}
get()
        }

    )
}


if (window.DeviceMotionEvent)
        {window.addEventListener('deviceorientation',function k(even){
            let alph=even.alpha;
            pp.style.transform= `rotate(${alph-58}deg)`
            ss.innerHTML=alph
            console.log("o")
        })}k()
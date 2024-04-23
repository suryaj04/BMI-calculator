
calculate=()=>{
  let height=document.getElementById("height")
  let weight=document.getElementById("weight")
  let meter=height.value/ 100
  let BMI = (weight.value / (meter*meter)).toFixed(2)
  let final=document.getElementById("final")
  final.innerText=BMI
  height.value=""
  weight.value=""
  if(BMI<18.5){
    let range=document.getElementById("range")
    range.innerText="underweight"
  }
  else if(BMI<25.0){
    let range=document.getElementById("range")
    range.innerText="Normal weight"
  }
  else if(BMI<30){
    let range=document.getElementById("range")
    range.innerText="Over weight"
  }
  else if(BMI<35){
    let range=document.getElementById("range")
    range.innerText="Obesity"
  }
  else if(BMI>35){
    let range=document.getElementById("range")
    range.innerText="Severe Obesity"
  }
}
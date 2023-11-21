const displayData=(data)=>{
    result.value+=data
}
const calculatorClear=()=>{
    result.value=""
}
const calculateResult=()=>{
    if(result.value!=""){
   try{result.value= eval(result.value)}
   catch{
    result.value="error!!!"
   }
}
}
const removeLast=()=>{
    result.value=result.value.slice(0,-1)
}
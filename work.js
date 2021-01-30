//  first class function



 function ChangeFirstClass(isIncrease){

    let add_input =  document.getElementById("add_count")
    
    let add_input1 = parseInt(add_input.value )
    let add_new_count = add_input1

    if (isIncrease ==true){

         add_new_count = add_input1 + 1

    }
    if(isIncrease==false){
         add_new_count = add_input1 - 1
    }
   
 
    if (add_new_count>=0){

        add_input.value = add_new_count
      }




      total()

     

 }




//  Economy function


 function changeEconomyClass(isIncreaseEco){

    const add_input =  document.getElementById("add_count_eco")
    const add_input1 = parseInt(add_input.value)

    let  add_new_count = add_input1

    if (isIncreaseEco==true){
        add_new_count = add_input1 + 1

    }
    if (isIncreaseEco==false){
        add_new_count = add_input1 - 1

    }
     
    if(add_new_count>=0){

    add_input.value = add_new_count

 }

 total()
}


// total price function


function total(){
  const firstClassF =  document.getElementById("add_count")
  const firstClassInput =parseInt(firstClassF.value)

  const EcoClassF =  document.getElementById("add_count_eco")
  const EcoClassInput =parseInt(EcoClassF.value)
  


const totalPrice_value = firstClassInput * 150 +  EcoClassInput*100

document.getElementById("totalPrice").innerText = "$"+ totalPrice_value


 let vat_value= (totalPrice_value *10) /100

 document.getElementById("vat_id").innerText ="$" + vat_value

 let last_total_value = totalPrice_value + vat_value


 document.getElementById("lastTotal").innerText ="$" + last_total_value
 
   make_voucher()
   
}

//voucher page 

function make_voucher(){

    const firstClassF =  document.getElementById("add_count")
  const firstClassInput =parseInt(firstClassF.value)

  const EcoClassF =  document.getElementById("add_count_eco")
  const EcoClassInput =parseInt(EcoClassF.value)
  


const totalPrice_value = firstClassInput * 150 +  EcoClassInput*100

document.getElementById("totalPrice1").innerText = "$"+ totalPrice_value


 let vat_value= (totalPrice_value *10) /100

 document.getElementById("vat_id1").innerText ="$" + vat_value

 let last_total_value = totalPrice_value + vat_value
 

 document.getElementById("lastTotal1").innerText ="$" + last_total_value
 
  let first_input =document.getElementById("add_count").value
//   console.log(first_input)
  document.getElementById("first_class_num").innerText = first_input



  let economic_input =document.getElementById("add_count_eco").value
  console.log(economic_input)

  document.getElementById("economic_num").innerText = economic_input
}





// Main page to Voucher page 

const first_display = document.getElementById("login");
first_display.addEventListener("click", function () {
    const login_area = document.getElementById("first_div");
    login_area.style.display = "none";

    const second_display = document.getElementById("second_div");
    second_display.style.display = "block";

    document.getElementById("add_count").value =0


    document.getElementById("add_count_eco").value =0
    

});













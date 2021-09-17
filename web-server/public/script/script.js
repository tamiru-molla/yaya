
 const form = document.querySelector("form")
 const msg1 = document.querySelector(".msg1")
 const msg2 = document.querySelector(".msg2")
 form.addEventListener("submit", e => {
  
  e.preventDefault()
  msg1.innerHTML = "Loading..."
  msg2.innerHTML = " "
  const address = document.querySelector("#address").value
  
  fetch(`/weather?address=${address}`).
  then(response => response.json()).
  then(data => {
   
   if (data.error)msg1.innerHTML=data.error
   else{
    msg1.innerHTML=`Location : ${data.address}`
    msg2.innerHTML=`weather : ${data.forcast}`
   }
   
   
  })
 })


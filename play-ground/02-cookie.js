let cookieIn = document.querySelector('#cookieName')
const iSpan = document.querySelector("#iSpan")
const cookieVal = document.querySelector('#cookieValue')

const cookieGet = document.querySelector('#cookieGet')
const gSpan = document.querySelector('#gSpan')

const cookieDel = document.querySelector('#cookieDelete')
const dSpan = document.querySelector('#dSpan')


document.querySelector("#btnCreate").
addEventListener("click",()=> {
    const cName = cookieIn.value
    
   if (cName.trim() == "") {
     iSpan.innerHTML = "Please, Enter Valid Name !!!"
     return
   }

  iSpan.innerHTML = creatCookie(cName, cookieVal.value, 1)

})
document.querySelector("#btnGet").addEventListener("click",()=> {
   if (cookieGet.value.trim() == "") {
     gSpan.innerHTML = `Please, Enter Valid Name `
     return
   }
  if (getCookie(cookieGet.value)) gSpan.innerHTML = getCookie(cookieGet.value)
  else gSpan.innerHTML = `No Cookie Found !!`
 

})
document.querySelector("#btnDelete").addEventListener("click",()=> {
  dSpan.innerHTML = deleteCookie(cookieDel.value)
 

})

function creatCookie(cName, cValue, expiryDate) {
 
  document.cookie = `${cName}=${cValue};max-age=${expiryDate*24*60*60};path="/"; Secure`
   return ` The cookie with name  : ${cName} is successfully Created !!`

}

function getCookie(cName) {

  const cookie = decodeURIComponent(document.cookie)
  const checkValue = cookie.split(";").filter(cookie => cookie.trim().includes(`${cName}=`))
 
  return (!(checkValue == false))? checkValue[0].split("=")[1]:undefined
  
  
  
}
function deleteCookie(cName) {

 if(getCookie(cName)){
   document.cookie=`${cName}=;max-age=0`
   return  `Cookie with name : ${cName} is successfully delated !!`

 }
 else{
  return `Sorry, there is no such Cookie Name >>  ${cName}`
 }
 
  
}

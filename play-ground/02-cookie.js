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
    creatCookie(cName, cookieVal.value, 1)
   

})
document.querySelector("#btnGet").addEventListener("click",()=> {
  getCookie(cookieGet.value)
 

})
document.querySelector("#btnDelete").addEventListener("click",()=> {
  deleteCookie(cookieDel.value)
 

})

function creatCookie(cName, cValue, expiryDate) {
  if(cName.trim()=="") {
    iSpan.innerHTML = "Please, Enter Valid Name !!!"
    return
  }
  document.cookie = `${cName}=${cValue};max-age=${expiryDate*24*60*60};path="/"; Secure`
   iSpan.innerHTML = ` The cookie with name  : ${cName} is successfully Created !!`

}

function getCookie(cName) {

  const cookie = decodeURIComponent(document.cookie)
  const checkValue = cookie.split(";").filter(cookie => cookie.trim().includes(`${cName}=`))
  if(cookieGet.value.trim()==""){
    gSpan.innerHTML=`Please, Enter Valid Name `
  }
  
  else if (!(checkValue == false)) {
    gSpan.innerHTML = checkValue[0].split("=")[1]
    return true
  }
  else {
    gSpan.innerHTML = ` Sorry, there is no such Cookie Name >>  ${cName} `
    return false
  }
  
}
function deleteCookie(cName) {

 if(getCookie(cName)){
   document.cookie=`${cName}=;max-age=0`
   dSpan.innerHTML = `Cookie with name : ${cName} is successfully delated !!`

 }
 else{
  dSpan.innerHTML= `Sorry, there is no such Cookie Name >>  ${cName}`
 }
 
  
}

window.addEventListener("load", () => {
  // const spoiler = document.querySelector("#spoiler");
  // spoiler.setAttribute("data-orginal-content", spoiler.innerText)
  // spoiler.innerText = "Spoiler Alert: Click to Reveal"
  // spoiler.addEventListener("click", () => {
  //   spoiler.innerText = spoiler.getAttribute("data-orginal-content")
  // })
  // document.querySelector("#box").animate([{
  //   backgroundColor: "red"
  // }, {
  //   backgroundColor: "blue"
  // }], {duration:1000,direction:"alternate",iterations:Infinity})
  //  const box = document.querySelector("#box")
  const box = document.querySelector("#box");
  console.log(box.style.backgroundColor)
  setInterval(() => {
    const bgColor = getComputedStyle(box).backgroundColor;

    switch (bgColor) {
      case "rgb(0, 0, 255)":
        box.style.backgroundColor = "red"
        break;
      case "rgb(255, 0, 0)":
        box.style.backgroundColor = "blue"

    }
  }, 2000)


})
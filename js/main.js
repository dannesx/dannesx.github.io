const btnTop = document.querySelector(".btn-top")
const anchors = document.querySelectorAll("[data-js = 'anchor']")

addEventListener('scroll', () => {
  if (scrollY > 300) {
    btnTop.classList.add("visible")
  } else {
    btnTop.classList.remove("visible")
  }
})

anchors.forEach(item => {
  item.addEventListener('click', event =>{
    setTimeout(()=>{
      history.replaceState('', document.title, location.origin + location.pathname)
    }, 3)
  })
})
const allCodes = document.querySelectorAll('code')

allCodes.forEach(codeEl =>{
  const copybtn = document.createElement('button')
  copybtn.ariaLabel = 'copy to clipboard'
  copybtn.innerHTML = `<img class='icon' src='./copy.svg' alt='copy icon'/>`
  copybtn.addEventListener('click', ()=>{copyToClipboard(codeEl.innerText)})
  codeEl.after(copybtn)
})

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(data => Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Copied to clipboard",
    showConfirmButton: false,
    timer: 2000
  })).catch(err => Swal.fire({
    position: "top-end",
    icon: "error",
    title: "This site is not allowed to see clipboard",
    showConfirmButton: false,
    timer: 2500
  }))
}


const allCodes = document.querySelectorAll('code')

allCodes.forEach(codeEl =>{
  const copyEl = document.createElement('img')
  copyEl.src = './copy.svg'
  copyEl.className = 'icon'
  copyEl.addEventListener('click', ()=>{copyToClipboard(codeEl.innerText)})
  codeEl.after(copyEl)
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


const input = document.querySelector("#user-input")
const button = document.querySelector("#generate")
const qrcode = document.querySelector("#qrcode")

button.addEventListener("click", function () {
    qrcode.innerHTML = ""
    new QRCode("qrcode", input.value)
})
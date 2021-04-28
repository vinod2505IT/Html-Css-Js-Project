let Button = document.querySelector(".btn")
let Output = document.querySelector(".output");
let GettedName = document.querySelector("input");
const showMessage = () => Output.innerHTML = `Hello welcome,${GettedName.value}`;
Button.addEventListener("click", showMessage)
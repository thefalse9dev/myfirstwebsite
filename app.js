// console.log('Hi');
// variables and datatypes
let m = document.getElementById("message");
let user = document.getElementById("email");
console.log(user)
console.log(m)
function btnClick(){
    var nameMatch = user.value.match(/^([^@]*)@/)
    nameMatch = nameMatch ? nameMatch[1] : "user"
    m.innerHTML='Logging '+'<span id="span-1">'+ nameMatch+'</span>'+' in, please wait';
    setTimeout(function(){
        m.innerText=""
    },1500)
}
//      CHAPTERS(58-57)
//         (EVENTS)


// Task1.
// 1-
var main = document.getElementById("main-content")

// 2-
var main_content = document.getElementById("main-content")
console.log(main_content.childNodes)

// 3-
var render = document.getElementsByTagName("p")
console.log(render.innerHTML)


// 4-
var First = document.getElementById("first-name")
First.value = "bilal"

// 5-
var E_mail = document.getElementById("last-name")
E_mail.value = "abc@example.com"


// Task2.
// 1-
// var Type = document.getElementById("form-content")
// console.log(Type.nodeType)

// 2-
var nType = document.getElementById("last-name")
console.log(nType.nodeType)
console.log(nType.childNodes.nodeType)

// 4-
var main = document.getElementById("main-content")
console.log(main.firstChild,main.lastChild)

// 5-
var E_mail = document.getElementById("last-name")
console.log(E_mail.nextSibling,E_mail.previousSibling)

// 6-
var eMail = document.getElementById("email")
console.log(eMail.parentNode,eMail.nodeType)





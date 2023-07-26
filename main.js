input = document.getElementsByTagName("input")[0]
sub = document.getElementsByTagName("button")[0]
after = document.getElementsByClassName("after")[0]
main = document.getElementsByClassName("main")[0]
sec_1 = document.getElementsByClassName("section-1")[0]
sec_2 = document.getElementsByClassName("section-2")[0]

let emailShape = /[a-z0-9]+@[a-z]+\.com/i
let len = main.children.length



input.addEventListener("focus",function() {
    after.style.display="none"
    input.style.backgroundColor="white"
    input.style.border="1px solid black"
})



sub.addEventListener("click",function() {
    if (!emailShape.test(input.value)) {
        after.style.display="block"
        input.style.border="1px solid red"
        input.style.backgroundColor="rgba(255, 0, 0, 0.248)"
    } else {
        main.removeChild(sec_1)
        main.removeChild(sec_2)
        main.removeAttribute("class","main")
        main.setAttribute("class","main2")
        suc=document.createElement("div")
        console.log(suc)
        suc.setAttribute("class","success")
        text = document.createElement("div")
        text.setAttribute("class","tesuccess")
        text.innerHTML=`Thanks for subscribing!`
        text2 = document.createElement("div")
        text2.setAttribute("class","te")
        text2.innerHTML=`A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription`
        butt = document.createElement("button")
        butt.setAttribute("class","but")
        butt.innerHTML = `Dismiss message`
        butt.style.width = "90%"
        main.appendChild(suc)
        main.appendChild(text)
        main.appendChild(text2)
        main.appendChild(butt)
    }
})

document.addEventListener("DOMContentLoaded", function() {
    let elements = Array.from(document.getElementsByClassName("btn_divs"))
    elements.forEach( element => {
        element.addEventListener("mouseover", () => {
            if(element.classList.contains("no")){
                elements.forEach( element => {
                    if(element.classList.contains("no")){
                        element.classList.remove("no")
                        element.classList.add("Si")
                        element.firstChild.innerText = "Si"
                    } else if (element.classList.contains("Si")){
                        element.classList.remove("Si")
                        element.classList.add("no")
                        element.firstChild.innerText = "No"
                    }
                })
                element.classList.remove("no")
                element.classList.add("Si")
            }
        })  
    })

    let btns = Array.from(document.getElementsByClassName("btn"))

    btns.forEach( btn => {
        btn.addEventListener("click", () => {
            if(btn.parentElement.classList.contains("Si")){
                alert("Gracias por perdonar a tu fantástico novio :) ")
            }
        })
    })
})
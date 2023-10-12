const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".special-tabs-content");

console.log(buttons)
buttons.forEach(e => {

    e.onclick = () => {
        buttons.forEach(e => e.classList.remove("active"));
        e.classList.add("active");
        const href = e.getAttribute("data-href");
        contents.forEach(e => {
            e.classList.remove("active");
            e.classList.remove("animate__fadeInUp")
        })
        document.getElementById(href).classList.add("active")
        document.getElementById(href).classList.add("animate__fadeInUp")        
    }

})
window.addEventListener("scroll",reavel)
function reavel() {
    var reavels = document.querySelectorAll(".reavel")

    for(var i = 0; i < reavels.length; i++){
        var windowHeight = window.innerHeight
        var reavelTop = reavels[i].getBoundingClientRect().top
        if(reavelTop < windowHeight - 150) {
            reavels[i].classList.add("reavel-active")
        }
        else{
            reavels[i].classList.remove("reavel-active")
        }
    }
}
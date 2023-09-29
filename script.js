const lists = document.getElementsByClassName("list")
const right = document.getElementById("right")
const left = document.getElementById("left")


for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        right.addEventListener("dragover", function(e){
            e.preventDefault();
        })
    })
}
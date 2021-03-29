let dropDownLinks = document.querySelectorAll(".drop-down-link");

let dropDownLinkArrows = document.querySelectorAll(".arrow");

for( let i = 0; i < dropDownLinks.length ; i++){

    let dropdownBox = dropDownLinks[i].lastElementChild;

    dropDownLinks[i].onclick = function(){


        if(dropdownBox.style.display === "flex"){
            dropdownBox.style.display = "none"
            dropDownLinkArrows[i].classList.remove("arrow-up");
        }else{

            closeDropBoxes()

            dropdownBox.style.display = "flex";
            dropDownLinkArrows[i].classList.add("arrow-up");

            let subLinks = dropdownBox.children
            for(let j = 0 ; j < subLinks.length ; j++){
                let link = subLinks[j]

                setTimeout(function(){
                    link.classList.add("shiny")
                }, j * 100)

                setTimeout(function(){
                    link.classList.remove("shiny")
                }, (j * 100) + 500)
        }

        }
    }

}

function closeDropBoxes(){
    let allBoxes = document.querySelectorAll(".drop-down-box")
    for(let i = 0 ; i < allBoxes.length ; i++){
        allBoxes[i].style.display = "none";
        if(dropDownLinkArrows[i].classList.contains("arrow-up")){
            dropDownLinkArrows[i].classList.remove("arrow-up")
        }
    }
}
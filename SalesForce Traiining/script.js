arrowButton = document.getElementsByClassName("arrow");
answerParagraph = document.getElementsByClassName("answer");

// for(let i=0; i<arrowButton.length; i++){
//     arrowButton[i].addEventListener("click", () => {
//         answerParagraph[i].style.display = "block";
//     });
// }

for(let i=0; i<arrowButton.length; i++){
    arrowButton[i].addEventListener("click", () => {
        if(answerParagraph[i].style.display == "block"){
            answerParagraph[i].style.display = "none";
            arrowButton[i].style.transform = "rotate(0deg)";
        }
        else{
            answerParagraph[i].style.display = "block";
            arrowButton[i].style.transform = "rotate(180deg)";
        }
    });
}
import { gallaryData } from "./data.js";
import { showImages } from "./showImages.js";
// console.log(gallaryData);

let img = document.querySelectorAll(".img-Container");
// console.log(img[0]);
//string concatination
let string = '';
for (let i = 0; i < gallaryData.length; i++) {
    // console.log(gallaryData[i])
    string = string + `<div  class="imgRow"> 
                      <img class="imgSlides" src="${gallaryData[i]['path']}">
                     </div>`
}
img[0].innerHTML = string;

// queryselector All returns array of elements
let showImg = document.querySelectorAll(".img-Container");
// console.log(showImg[0]["children"]);
let imgVar = showImg[0]["children"];
for (let i = 0; i < imgVar.length; i++) {
    imgVar[i].addEventListener('click', function (imgElement) {
        let imgModal = document.getElementById('myModal');
        // console.log(imgModal);
        imgModal.style.display = "flex";
        let modalReel = document.querySelector('#reelContainer');
      
        modalReel.innerHTML = `<img index="${i}"
         class='reelDimension' src="${gallaryData[i]['path']}" >`
    })



};
let closeBtn = document.querySelectorAll('.close');
closeBtn[0].addEventListener('click', function () {
    let imgModal = document.getElementById('myModal');
    imgModal.style.display = "none"


});

let arrowClick = document.querySelectorAll(".action");
arrowClick.forEach(function (element) {
    element.addEventListener('click', function (event) {
        // console.log(event.target.classList)
        if(event.target.classList.contains("prev") == true){
            let img = document.querySelectorAll(".reelDimension");
            let _currentIndex = Number(img[0].attributes[0].value) -1;
            let modalReel = document.querySelector('#reelContainer');
            modalReel.innerHTML = `<img index="${_currentIndex}" class='reelDimension' src="${gallaryData[_currentIndex]['path']}" >`
        } else{
            let img = document.querySelectorAll(".reelDimension");
            let _currentIndex = Number(img[0].attributes[0].value) +1;
            let modalReel = document.querySelector('#reelContainer');
            modalReel.innerHTML = `<img index="${_currentIndex}" class='reelDimension' src="${gallaryData[_currentIndex]['path']}" >`
        }
    
    })
})

let searchBtn = document.querySelector('#search');

let searchedItem = document.querySelectorAll('#search')[0].selectedIndex;
//console.log(searchedItem)
    searchBtn.addEventListener("change", (event) =>{
        console.log("Select tag:",event.target.selectedIndex);
    let searchedItem = document.querySelectorAll('#search')[0].value;
    let searchedValue = document.querySelectorAll('#search')[0].selectedIndex;
    //console.log(searchedItem);
    let extractedNature = [];
    let extractedAnimal = [];
    let extractedAll = [];
       
    for (let i=0; i <gallaryData.length ; ++i) {

      if(searchedValue == 2 && gallaryData[i].category == "nature" ){
        console.log("In");
        extractedNature.push(gallaryData[i])
       // console.log(extractedNature);
        showImages(extractedNature);
     } else if(searchedValue == 1 && gallaryData[i].category == "animal" ){
        console.log("In");
        extractedAnimal.push(gallaryData[i])
        // console.log(extractedAnimal)
        showImages(extractedAnimal);
    }else if (searchedValue == 0 && gallaryData[i] ){
        console.log("In");
        extractedAll.push(gallaryData[i]);
        showImages(extractedAll);
  
    }
}



    // console.log(extractedValue);
     

        
    // }
   

  
});




       





     







  
  


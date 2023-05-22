export function showImages(array) {
    let img = document.querySelectorAll(".img-Container");
    img.innerHTML = "";
    // console.log(img[0]);
    //string concatination
    let string = '';
    for (let i = 0; i < array.length; i++) {
        // console.log(gallaryData[i])
        string = string + `<div  class="imgRow"> 
                      <img class="imgSlides" src="${array[i]['path']}">
                     </div>`
    }
    img[0].innerHTML = string;




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
    }

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

    
}
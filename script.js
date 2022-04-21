function searchToggle(obj, evt) {
    var container = $(obj).closest('.search-wrapper');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
        document.getElementById("cardheader").style.display = "none";
    }
    else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        window.setTimeout(function () {
            document.getElementById("cardheader").style.display = "block";
        }, 400);
    }

}

function swipedestruct(obj,e){
    setTimeout(function(){
        document.querySelector('div.swipe').style.display = 'none';
    }, 6000)
}

// document.getElementsByClassName('search-icon')[0].addEventListener('click', ()=>{
//     console.log("I'm pressed!!");
// })

document.getElementsByClassName('search-icon')[0].addEventListener('click', ()=>{
    let keyword = document.querySelector('input.search-input').value;
    updateDOM(keyword);
})

document.querySelector('span.close').addEventListener('click',()=>{

    const cardNames = document.getElementsByClassName('card');
    let cardsCollection = [...cardNames];
    temp = cardsCollection.map((card) => card.style.display = 'block');
    document.querySelector('.cards').style["flexWrap"] = 'wrap';
    document.querySelector('.cards').style["flexDirection"] = 'column';

})

function updateDOM(key){

    const cardNames = document.getElementsByClassName('card');

    // for (let x in cardNames){
    //     console.log(x);
    //     }
    
    let inp = key.toLowerCase();

    let cardsCollection = [...cardNames];
    cardsArr = cardsCollection.map((card)=> card.textContent);

    let matchIndices = []

    if(inp != ""){

        temp = cardsCollection.map((card) => card.style.display = 'none');

        for(let i=0; i<cardsArr.length; i++){
            if(cardsArr[i].toLowerCase().includes(inp)){
                matchIndices.push(i);
            }
        }
        
        for(let x = 0; x<matchIndices.length; x++){
    
            let t = matchIndices[x] + 3;
            let rem = document.querySelector(`.cards :nth-child(${t})`);
            document.querySelector('.cards').style["flexWrap"] = 'nowrap';
            document.querySelector('.cards').style["flexDirection"] = 'row';
            rem.style.display = 'block';
        }
    }

}


// for (let x in cardNames){
//     console.log(x);
// }

// console.log(cardNames[35].textContent);


// console.log(cardsArr[35]);



// cardsFilt = cardsArr.filter((el)=>{ }) 
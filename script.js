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

};

function swipedestruct(obj,e){

    console.log("swipedestruct activated!!");

    setTimeout(function(){
        document.querySelector('div.swipe').style.display = 'none';
        console.log("swipe destroyed.");
    }, 6000);
    document.querySelector('#par').removeEventListener('mouseover',swipedestruct);
};

document.querySelector('#par').addEventListener('mouseover',swipedestruct);
// document.getElementsByClassName('search-icon')[0].addEventListener('click', ()=>{
//     console.log("I'm pressed!!");
// })

document.getElementsByClassName('search-icon')[0].addEventListener('click',()=>{
    let si = document.querySelector('input.search-input');
    setTimeout(()=>{
        si.focus();
    },500);
    
    setTimeout(()=>{
        document.querySelector('.search-wrapper .input-holder .search-input').style.border = 'solid 3px #c978ee83';
        document.querySelector('.search-wrapper .input-holder .search-input').style.borderBottom = 'none';
    },400)
})

document.querySelector('.search-input').addEventListener('input', ()=>{
    let keyword = document.querySelector('input.search-input').value;
    if (keyword == ''){
        console.log("Empty String Input Test");
        resetDOM();
    }
    updateDOM(keyword);
});

document.querySelector('span.close').addEventListener('click',resetDOM);

function resetDOM (){

    console.log('in resetdom !!');
    const cardNames = document.getElementsByClassName('card');
    let cardsCollection = [...cardNames];
    temp = cardsCollection.map((card) => card.style.display = 'block');
    document.querySelector('.cards').style["flexWrap"] = 'wrap';
    document.querySelector('.cards').style["flexDirection"] = 'column';

};

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
        
        document.querySelector('.cards').style["flexWrap"] = 'nowrap';
        document.querySelector('.cards').style["flexDirection"] = 'row';
        

        for(let x = 0; x<matchIndices.length; x++){
    
            let t = matchIndices[x] + 3;
            let rem = document.querySelector(`.cards :nth-child(${t})`);
            
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
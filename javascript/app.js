// 'use strict';

var busImages = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg.',
    'wine-glass.jpg',
  ];

  var leftBusImage = document.querySelector('#left_bus_img');
  var centerBusImage = document.querySelector('#center_bus_img');
  var rightBusImage = document.querySelector('#right_bus_img');
  var groupImageSection = document.getElementById('all_bus');
  var buses = [];
  var votes = 0;
  var clicks = 0;
  var totalClicks = 1;


function Bus(name){
    this.name = name;
    this.urlImage = `images/${this.name}.jpg`;
    this.votes = votes ;
    this.clicks = clicks;
    buses.push(this);
  }
  console.log(Bus);



  function pickRandomImages(){
    var leftImageRandom =  buses[randomNumber(0 , buses.length-1 )];
    var centerImageRandom =  buses[randomNumber(0 , buses.length-1 )];
    var rightImageRandom =  buses[randomNumber(0 , buses.length-1 )];

    leftBusImage.setAttribute('src' , leftImageRandom.urlImage);
    leftBusImage.setAttribute('alt' , leftImageRandom.name);
    centerBusImage.setAttribute('src' , centerImageRandom.urlImage);
    centerBustImage.setAttribute('alt' , centerImageRandom.name);
    rightBusImage.setAttribute('src' , rightImageRandom.urlImage);
    rightBusImage.setAttribute('alt' ,rightImageRandom.name);
    while(leftBusImage === centerBusImage){
        centerImageRandom = randomNumber();
    }


    while(rightBusImage === centerBusImage){
        rightImageRandom = randomNumber();
    }

    while(rightBusImage === leftBusImage){
        leftImageRandom = randomNumber();
    }
    
}


  for(var i = 0; i< busImages.length ; i++){
    new Bus (busImages[i]);
  }
  pickRandomImages();

  
  function clickImage(j){
if(j.target.id === 'left-img' || j.target.id === 'right-img'){
    pickRandomImages();
    totalClicks();

}
if (totalClicks === 6){
    leftBusImage.remove();
    rightBusImage.remove();
    centerBusImage.remove();
}
  }
  groupImageSection.addEventListener('click' , clickImage);


  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
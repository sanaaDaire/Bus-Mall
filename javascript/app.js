'use strict';

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
  'water-can.jpg',
  'wine-glass.jpg',
];

var leftBusImage = document.querySelector('#left_img');
var centerBusImage = document.querySelector('#center_img');
var rightBusImage = document.querySelector('#right_img');
var groupImageSection = document.getElementById('allProduct');
var buses = [];
var totalClicks = 0;
var leftImageRandom , rightImageRandom , centerImageRandom ;

function Bus(name){
  this.name = name;
  this.targetName= name.split('.')[0];
  this.urlImage = `images/${name}`;
  this.votes = 0 ;
  this.clicks = 0;
  buses.push(this);
}
for(var i = 0; i < busImages.length ; i++){
  new Bus (busImages[i]);
}
pickRandomImages();

function pickRandomImages(){
 leftImageRandom =  buses[randomNumber(0 , buses.length-1 )];
  centerImageRandom =  buses[randomNumber(0 , buses.length-1 )];
  rightImageRandom =  buses[randomNumber(0 , buses.length-1 )];

  
  while(leftImageRandom === centerImageRandom || rightImageRandom === centerImageRandom || rightImageRandom === leftImageRandom){
      leftImageRandom =  buses[randomNumber(0 , buses.length-1 )];
     centerImageRandom =  buses[randomNumber(0 ,buses.length-1 )];
     rightImageRandom =  buses[randomNumber(0 , buses.length-1 )];
  }
  console.log (centerImageRandom);
  leftBusImage.setAttribute('src' , leftImageRandom.urlImage);
  leftBusImage.setAttribute('alt' , leftImageRandom.targetName);
  leftImageRandom.votes++;

  centerBusImage.setAttribute('src' , centerImageRandom.urlImage);
  centerBusImage.setAttribute('alt' , centerImageRandom.targetName);
  centerImageRandom.votes++;


  rightBusImage.setAttribute('src' , rightImageRandom.urlImage);
  rightBusImage.setAttribute('alt' ,rightImageRandom.targetName);
  rightImageRandom.votes++;

}


// for(var i = 0; i< busImages.length ; i++){
//   new Bus (busImages[i]);
// }
// pickRandomImages();


function clickImage(event){
  console.log('hjkhkj')
if(event.target.id === 'left_img')
 { leftImageRandom.votes++;}

 
else if (event.target.id === 'right_img') 
{rightImageRandom.votes++;}

else if ( event.target.id === 'center_img')
  
{centerImageRandom.votes++;}
 
if (totalClicks === 25){
  leftBusImage.remove();
  rightBusImage.remove();
  centerBusImage.remove();
  summary();
}
  pickRandomImages();
  totalClicks++;
}



document.getElementById('allProduct').addEventListener('click' , clickImage);


function summary(){
  var ulEl = document.getElementById('products');
  for (var i =0 ; i<buses.length;i++){
    var liEl = document.createElement(`li`);
    ulEl.appendChild(liEl);
    liEl.textContent = `${buses[i].name} had ${buses[i].click} clicks and ${buses[i].votes} times`;
  }
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

  var leftBusImage = document.querySelector('#left_bus_img');
  var centerBusImage = document.querySelector('#center_bus_img');
  var rightBusImage = document.querySelector('#right_bus_img');
  var groupImageSection = document.getElementById('all_bus');
  var buses = [];
  var totalClicks = 0;
  var label = [];
  var vote = [];
 


function Bus(name){
    this.name = name;
    this.urlImage = `images/${this.name}`;
    this.view = 0;
    this.click = 0;
    buses.push(this);
  }
  console.log(Bus);
  for(var i = 0; i < busImages.length ; i++){
    new Bus (busImages[i]);
  }

  pickRandomImages();

  function pickRandomImages(){
    var leftImageRandom =  buses[randomNumber(0 , buses.length-1 )];
    var centerImageRandom =  buses[randomNumber(0 , buses.length-1 )];
    var rightImageRandom =  buses[randomNumber(0 , buses.length-1 )];

    leftBusImage.setAttribute('src' , leftImageRandom.urlImage);
    leftBusImage.setAttribute('alt' , leftImageRandom.name);
    centerBusImage.setAttribute('src' , centerImageRandom.urlImage);
    centerBusImage.setAttribute('alt' , centerImageRandom.name);
    rightBusImage.setAttribute('src' , rightImageRandom.urlImage);
    rightBusImage.setAttribute('alt' ,rightImageRandom.name); 

    while(leftBusImage === centerBusImage){
        centerImageRandom = randomNumber();
    }


    while(rightBusImage === centerBusImage ){
        rightImageRandom = randomNumber();
    } 
    while(rightBusImage ===leftBusImage){
      leftImageRandom = randomNumber();
    }

  
  console.log(buses);
}

  function clickImage(event){
      console.log('hi');
    if (event.target.id === 'left_bus_img' || event.target.id === 'right_bus_img' || event.target.id=== 'center_bus_img'){
    pickRandomImages();
    totalClicks++ ;
    console.log(clickImage);
}
if (totalClicks === 25){
leftBusImage.remove();
centerBusImage.remove();
rightBusImage.remove();
console.log('done');
}

}
document.getElementById("all_images").addEventListener('click' , clickImage);

function render (){
var ulEl = document.getElementById('result');
// var z = [];
for (var i =0 ; i <busImages.length ; i++){
  var liE1 = document.createElement('li');
  liE1.textContent = `${busImages[i].name} has ${busImages[i].click} click and ${busImages[i].view}`;
  ulEl.appendChild(liE1);
}
render();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function renderChartResults(){
  var busNames = [];
  var busClicks = [];
  for(var i = 0 ; i < buses.length ; i++){
    var busName = buses[i].name;
    busNames.push(busName);
    var busLikes = buses[i].likes;
    busesClicks.push(busLikes);
  }
  console.log(busLikes);

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: label,
    datasets: [{
      label: 'Bus Mall',
      data: vote,
      backgroundColor:'purple' ,
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


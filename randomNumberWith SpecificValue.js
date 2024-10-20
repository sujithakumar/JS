function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

for(let i=0; i< 100; i++){
    console.log(getRandomInt(100,200));
}
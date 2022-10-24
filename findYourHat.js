const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  constructor(array){
      this.array= array;
  }
  print(){
    let gameString;
    for(let i=0; i < this.array.length; i++){
       console.log(this.array[i].join('')) 
    }

  }
   
  
  
}

const newInstance= new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

newInstance.print()
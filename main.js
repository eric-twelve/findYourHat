const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {

  constructor(hatAndHole, field){

      this.hatAndHole= hatAndHole;
      this.field= field;
  }
  
  playGame(){

      let y= 0;
      let x= 0;
      
      this.print()
      

      while(this.hatAndHole[y][x]=== fieldCharacter || this.hatAndHole[y][x]=== pathCharacter ){
        
        const direction= prompt('Hacia donde quieres ir? Introduce una letra sea W para arriba, S para abajo, D derecha y A izquierda ')

        if(direction.toUpperCase() === 'W'){
          if(y === 0){
            console.log('No se puede salir del tablero')
          }else{
            y -=1;
        }
        }else if(direction.toUpperCase() === 'S'){
          if(y === this.field[y].lenght){
            console.log('No se puede salir del tablero')
          }else{
            y += 1;
          }
      }else if(direction.toUpperCase() === 'D'){
          if(x === this.field[y][x].lenght){
            console.log('No se puede salir del tablero')
          }else{
            x += 1;
          }
      }else if(direction.toUpperCase() === 'A'){
          if(x === 0){
            console.log('No se puede salir del tablero')
          }else{
            x -= 1;
          }
      }else{
        console.log('Invalid entry')
      }
    if(this.hatAndHole[y][x] === hat){

      console.log('You have Win, have find a your hat') ;
      
    }else if(this.hatAndHole[y][x] === hole){
      console.log('You have lost, fall in hole') ;
      

    }else if(this.hatAndHole[y][x] === fieldCharacter){
      this.field[y][x] = pathCharacter;
    }
    this.print()
    
    }
  }
  // Print the set field

  print(){

    this.field.forEach(element => {
        console.log(element.join(''))
      
    });
  }
  // Generate a random Value for width and height
  numberRandom(width, height){

    let numRandomWidth= Math.floor(Math.random() * width );
    let numRandomHeight= Math.floor(Math.random()* height);

    console.log(numRandomWidth)
    console.log(numRandomHeight)


  }

// Generate a Blank field array
  static generateBlanckField(height, width){

    let newField= [];
    for(let i= 0; i < height; i++){
      newField.push([]);
      for(let j= 0; j < width; j++){
        newField[i].push(fieldCharacter)
      }
    }
    newField[0][0]= pathCharacter;
    
    return newField;
  }
// Generate a random field static for can access with call 

  static generateRandomHatAndHoles(width, height, holes){

  //  Create a first array with fieldCharacter.
    let randomField= [];
    for(let i= 0; i < height; i++){
      randomField.push([]);
      for(let j= 0; j < width; j++){
        randomField[i].push(fieldCharacter)
      }
    }
  // Create a holes´
    let countHoles= 0;
    
    while(countHoles < holes){
      let holesY= Math.floor(Math.random() * height);
      let holesX= Math.floor(Math.random()* width + 1);
      if(randomField[holesY][holesX] !== hole ){
        randomField[holesY][holesX] === hole;
      }else{
        holesY= Math.floor(Math.random() * height);
        holesX= Math.floor(Math.random()* width + 1);  
      } 
         
      }
    return randomField;
  }
}



const hatAndHole= [
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
];

// Create a field in blank with a field character en [0][0]


const fieldBlank= Field.generateBlanckField(3,3);
const fieldRandom= Field.generateRandomHatAndHoles(3,3,3)

let myField= new Field(hatAndHole, fieldBlank)

myField.playGame()



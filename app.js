const attackShip= () => {
    let alienBullet=document.querySelector('.alien')
    alienBullet.classList.toggle
    ('initiateAttack')
}
/*const jump = () =>{
    let mario = document.querySelector('.plumber')

    mario.classList.toggle('bunnies')

    addPoint()
}*/

let ussAssembly={
    hp: 20,//healthpoints(hull)
    firepower: 5,
    accuracy:0.7,
}
const battle= ()=>{
    let playerOneScore=100

    let alienScore=100


    console.log("Battle has Begun")
}
//establish RoundOne after starting game

let command=prompt('Ready to Attack? or Retreat?')

    if (command=== 'A'){
        let target=document.querySelector('.ufo')
    //signal explosion
        let explosion= document.createElement('img')
            explosion.seeAttributes('src','')
    // decrease alien point value
    }else{
        console.log("PlayerOne has retreated: AND LOSES and is a loser.")
    }


//let USSAssembly={}

//retreat: function(){}


//const battle=()=>{

//attack()
    //if( alien.life = 0){then they attack}




    //playerOne





//playerTwo





//array because there are 6. they attack one at a time.
//wait to see outcome before deploying next strike. 
//USS gets to attack first- attack can  be a general function.
//can only attack them in order.
//may retreat(dodge) should be its own func. 












//let alienShips= []



//----------------------------------------------------------------









/// code for hiding bullet
/*const shootButton = document.querySelector(".shootbutton")
const boom = document.querySelector(".boom")

shootButton.addEventListener("click", function(){
    boom.classList.toggle("boomtoggle");
    shootButton.innerHTML="Reload";
    shootButton.addEventListener("click", function(){
    shootButton.innerHTML="Attack";
    })
});*/

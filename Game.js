class Game
{
    constructor(){

    }

    readState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",(data)=>{
            gameState=data.val();
        });
    }

    updateState(s){
        database.ref('/').update({
            gameState:s
        });

    }
}
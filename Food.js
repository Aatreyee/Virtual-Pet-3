class Food
{
    constructor(){
       this.image=loadImage("Milk.png") ;
       
    }


    getFoodStock(){
        var foodStockRef = database.ref('foodStock');
        foodStockRef.on("value",function(data){
            foodS = data.val();
        });
    }

    updateFoodStock(s){
        database.ref('/').update({
            foodStock: s
        });
    }
    garden(){
        background(gardenImg,550,500);
    }

    bedRoom(){
        background(bedroomImg,550,500);
    }

   

    washRoom(){
        background(washroomImg,550,500);
    }
    
   
    display(){
        var x=80;
        var y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(foodS !== 0){
            for(var i=0;i<foodS;i++){
                if(i%10===0){
                    x=80;
                    y=y+10;
                }
               image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
    
}




   


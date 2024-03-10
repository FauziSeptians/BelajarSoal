let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}
let available = {sugar: 500, flour: 2000, milk: 2000};

function cakes(recipe, available) {
    let min = 1000000000000000;
   for(let val in recipe){
    console.log(!recipe[val])
    if(!available[val]){
        return 0;
    }else{
        if(available[val] >= recipe[val]){
            let res = parseInt(available[val] / recipe[val]);
            if(res < min){
                min = res;
            }
        }else{
            min = 0;
        }
    }
   }

   return min;
}

console.log(cakes(recipe, available));

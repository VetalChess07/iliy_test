var duplicateZeros = function(arr) {
    const newArr = []
   
   for(const el of arr){
       if(el === 0){
           newArr.push(el, el)
       }else{
           newArr.push(el)
       }
   }
   if (newArr.slice(-2).every(el => el === 0)) {
       newArr.pop();        
       newArr.pop();
       newArr.pop();
   }

   return newArr
};
console.log(duplicateZeros([1,0,2,3,0,4,5,0]))
console.log([1,0,0,2,3,0,0,4])

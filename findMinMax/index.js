let value = [1,2,4,56,6,46,3,780,0];
let minValue = value[0];
let maxValue = value[0];

for(let i =0;i<value.length;i++)
{
    if(minValue>value[i]){
      minValue = value[i]  
    }
   if(maxValue<value[i]){
      maxValue = value[i]  
    }
}
console.log('minValue : ', minValue)
console.log('maxValue : ', maxValue)

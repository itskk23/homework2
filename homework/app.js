let arr = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
    [1,2,3]
];
let sum = 0;

//უკეთესი ამოხსნა

function print (array){
    for (let i = 0; i < array.length; i++) {
        if (i==0 || i == array.length - 1) {
            sum += array[i].reduce(function(a,b){
                return a + b
            }, 0)   
            } else {
                 sum += array[i][0] + array[i][array[i].length - 1];
                }
    } alert(sum)
}

print(arr)

//პირველი ცდა

// function perimeterSum(array){
    
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if(i == array.length-1){
//                 sum += array[i][j];
//             }
//             else if(i == 0){
//                 sum += array[i][j];
//                 console.log(sum)  
//             }
//             else{
//                 if(j == 0){
//                     sum += array[i][j]
//                 }
//                 if(j == array[i].length -1){
//                     sum += array[i][j]
//                 }   
//             }   
//         }    
//     } 
//     alert(sum);
// }

// perimeterSum(arr);



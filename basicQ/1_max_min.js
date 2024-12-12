// const maxArr=(arr)=>{
//     let max=arr[0]
//     console.log("max---", max)
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max

// }

// let arr =[12,34,12,78]
// console.log(maxArr(arr))


const minArr = (arr2)=>{
    let min = arr2[0]
    for(let i=0; i<arr2.length; i++)
    {
        console.log("arr2 i", i)
        if(arr2[i] < min){
            min = arr2[i]
        }
    }
    console.log(min)
    return min
}

let arr2 = [12,4,6,87,1]
console.log(minArr(arr2))
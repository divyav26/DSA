

// let arr =[12,45,67,10]
// let revarr =[]


// for(let i = arr.length-1; i>=0; i--){
//     console.log("i", arr[i])
//     revarr.push(arr[i])

// }
// console.log(revarr)

//using two pointer 

let revArr = (arr)=>{
    let left =0
    let right = arr.length -1
    console.log("left---",left)
    console.log("rigth---",right)

   while(left < right)
    {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left ++
        right --
    }
    return arr
  
}

let arr=[12,98,23,90]
console.log(revArr(arr))
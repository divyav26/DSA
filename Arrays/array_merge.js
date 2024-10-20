

const arr1=[10,20,30,40]
const arr2 = [50,60,70]
let arr3=[]

for(let i=0; i<=arr1.length; i++){
     arr3[i]=arr1[i]
}

for(let i=0; i<=arr2.length; i++)
    arr3[arr1.length+i] = arr2[i]
console.log(arr3)

let dummy1=[1,2,43,35]
console.log(dummy1.reverse())

const data1=[12,4,3,23,3]
const data2 = [7,4,23,1,3]

let data3=[...data1,...data2]
console.log(data3)
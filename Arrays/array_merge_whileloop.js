

let data1 = [1,4, 5];
let data2 = [2, 7, 8, 9, 10];
let data3=[]

let d1=0
let d2=0
let d3=0

while(d1<data1.length && d2<data2.length){
    if(data1[d1] < data2[d2]){
        data3[d3] = data1[d1]
        d1++
        console.log("data3", data3)
        console.log("d1",d1)
    }else{
        data3[d3] = data2[d2]
        d2++
        console.log(data3)
        console.log("d2", d2)
    }
    d3++
}
console.log("total length", d2

)
while(d2<data2.length){
    data3[d3] = data2[d2]
    d2++
    d3++
}
console.log(data3)


// const data = [60,50,40,30,90]

// let position=2
// let item=100

// for(let i=data.length-1; i >=0; i--){
//     console.log(data[i])
//     if(i >= position){
//         data[i+1]= data[i]
//         console.log("new element check",data[i+1]= data[i])
//         if(i === position){
//             data[i] = item
//         }
//     }
// }
// console.log("data of instered element",data)
// // console.log(data)

function getElement(){
    data=[60,50,40,30,90]
    let position = document.getElementById('position').value 
    console.log("position", position)
    let newEle = document.getElementById('element').value 
    newEle = parseInt(newEle)
    console.log("element", newEle)

    for(let i=data.length-1; i >=0; i--){
    console.log(data[i])
    if(i >= position){
        data[i+1]= data[i]
        console.log("new element check",data[i+1]= data[i])
        if(i === position){
            data[i] = newEle
        }
    }
}
console.log("data of instered element",data)
}


let data =[1,3,4,1,442,54,90,2]
//terversal
for(let i=0; i<data.length; i++){
    document.write(`array of ${i} is ${data[i]}<br>`)
}

//accessing


let x=4
document.write("accessing element")
document.write(data[x])


function getElement(){
    
    const e1 = document.getElementById('element').value
    if(e1<data.length || parseInt(e1) ){

        console.log(data[e1])
    }else{

        alert("please enter correct number!!")
    }
}


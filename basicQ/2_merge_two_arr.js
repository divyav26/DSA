const mergeArray = (num1, nums2)=>{
    let merge = []
    let index= 0
    for(let i =0; i<num1.length; i++){
        // console.log("nums1", num1[i])
        merge[index] = num1[i]
        index++
        console.log("nums1 index ---", index)
    }
    console.log("merge items nums1---", merge)

    for(let i=0; i<nums2.length; i++){
        console.log("nums2 i", nums2[i])
        // console.log("nums2---", nums2)
        merge[index] = nums2[i]
        index++
        console.log("nums2 index---", index)
        
    }
    console.log("nums2 item---",merge)
    return merge
}

let num1 =[12,45,67,100]
let nums2 = [65,78,120,5]
console.log(mergeArray(num1, nums2))




// 1 way to merge
// let nums1 =[12,45,67,100]
// let nums2 = [65,78,120,5]
// let merge =[]

// for(let i=0; i<nums1.length; i++){
//     merge[i] = nums1[i]
// }

// for(let i = 0; i< nums2.length; i++){
//     merge[nums1.length+i] = nums2[i]
// }
// console.log(merge)
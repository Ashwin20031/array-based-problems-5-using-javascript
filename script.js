//program 1 insert element at particular index
function insertElement(arr,val,index){

    for(let i = 0 ; i < arr.length ; i++){
        if(i+1 ===index){
           arr[i]=val
        } 
    }
    return arr
}

// let input = [ 1,2,3,4,5]

// console.log("to insert element at index 3 for the array "+input)
// result=insertElement(input,8,3)
// console.log(result)

//program 2 to implement queue
function queue(operation,arr,val){

    if(operation==="offer"){
        arr.push(val)
    }

    if(operation==="poll"){
        arr.shift(0)
    }

}
// let input=[]
// queue("offer",input,10)
// queue("offer",input,20)
// queue("offer",input,30)
// queue("poll",input)

// console.log(input)


//program 3 to implement intersection of two array
function intersection(arr1,arr2){

    let inter=[]

    for(let i = 0 ; i < arr1.length ;i++){
        let a=arr2.find(el=>el===arr1[i])
        if (a){
            inter.push(arr1[i])
        }
    }
    return inter

}

// result=intersection([1,2,4],[1,4])
// console.log("the intersection of two array is")
// console.log(result)


//program 4 array slicing 
let arr=[1,2,3,4,5,6]
let narr= arr.slice(1,3)

// console.log(narr)


//program 5  array merging
let arr1=[1,2,45]
let arr2=[19,44,5]
let merged=[...arr1,...arr2]

console.log(merged)
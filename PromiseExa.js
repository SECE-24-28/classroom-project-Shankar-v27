// console.log("Process 1")
// setTimeout(() => {
//     console.log("Process 2 - after 2 seconds")
//     setTimeout(() => {
//         console.log("Process 3 - after 4 seconds")
//     }, 2000);
// }, 2000);

let res=fetch('https://jsonplaceholder.typicode.com/users')


res.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error occured:",error);
});
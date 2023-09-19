
//Q3 Extend the local storage to accept an expiry time and expire the entry after that time.

// let localstorage=
// {
//     setItem:function(key,value,time)
//     {
//         let obj={
//             data:value // this will contain our value
//         }
//         obj.expiry=Date.now()+time; // adding new property in obj
//         // console.log(obj);
//         localStorage.setItem(key,JSON.stringify(obj));
//     },
//     getItem:function(key)
//     {
//         let ans=JSON.parse(window.localStorage.getItem(key))
//         if(ans)
//         {
//             if(ans.expiry<=Date.now())
//             {
//                 localStorage.removeItem(key)
//                 return null;
//             }
//             return ans.data
//         }
//         return null;
//     }
// }
// localstorage.setItem('foo','bar',4000)
// setTimeout(()=>{
//     console.log(localstorage.getItem('foo'));
// },4000)

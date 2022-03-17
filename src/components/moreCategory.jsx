// import Categorys from "./categorys";
// import { click } from "@testing-library/user-event/dist/click";

// document.getElementById("ajax").addEventListener(click,Categorys)

// function MoreCategory(){
//     console.log("hata")
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","https://picsum.photos/v2/list?page=1&limit=8");
//     xhr.onload = function(){
//         // let images = document.getElementsByClassName("average");
//         if (this.status === 200) {
//             const parsedData = JSON.parse(this.responseText);
//             parsedData.forEach((e) => {
//                 <div>
//                     <img src= {e.url} alt={e.author} />
//                     <h4> {e.author}</h4>
//                 </div>
//             });
//         }
//         else{
//             console.log("hata olustu")
//         }
//     }
//     xhr.send();
// }
// export default MoreCategory;
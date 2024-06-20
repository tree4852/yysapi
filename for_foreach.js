// const store = ["사과","파인애플","수박","체리"]; //억ㄱ지로 for
// //변수 존재 여부 , 값 편집
// //변수 const 선언

// for(let x = 0; x < store.length; x ++ ){
//     console.log(store[x]);
// }
// // //forin 으로 하기

// for(x in store){
//     console.log("for문",store[x]);
// }

// store.forEach(function(ele,idx){ 
//     console.log(ele,idx)

// })


// const storetast = [
//  ["사과",10000,7000]
// ,["파인애플",5000, ""]
// ,["수박",15000,""]
// ,["체리",13000,9000]]
// //빈값을 넣어 자릿수를 채운다
// //체리는 원가가 13000원이고 할인해서  9000원에 판매를 합니다,

// console.log(`${storetast[2][0]}는
//     원가가 ${storetast[2][1]}원이고
//     할인해서 ${storetast[2][2]}원에 판매를 합니다`)

// for(x in storetast){
//     console.log(`${storetast[x][0]}는
//             원가가 ${storetast[x][1]}원이고
//             할인해서 ${storetast[x][2]}원에
//             판매중입니다`)

// }
// //하나의 패턴 확인
// //x 가 받아야할 변수확인

// storetast.forEach((vv,ii)=>{
//     console.log(`${vv[0]}는 원가가 ${vv[1]}원이고, 할인해서 ${vv[2]}원에 판매를 합니다`)
// })

// const stringdataapi = "서울ㅣ 종로구ㅣ 명륜3가ㅣ감나무집";
//string [],{} -> JSON,parse
//string -> array 전환 split매서드 
//array -> string 전환 join 매서드

let stringdataapi = "서울 종로구 명륜3가 감나무집";
let ins = stringdataapi.split(" ");
console.log(ins); // 서울종로구



let charArray = ["H", "e", "l", "l", "o"];
let word = charArray.join("");
console.log(word ,typeof word);
// 출력: "Hello"
//join
//string

let characters = "Hello";
let charArray2 = characters.split("");
console.log(charArray, typeof charArray);
// 출력: ["H", "e", "l", "l", "o"]
//split
//object
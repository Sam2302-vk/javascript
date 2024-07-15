//program1//

// for(i=0;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }
//     else if(i%5==0){
//         console.log("Buzz")
//     }
//     else if(i%3==0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i)
//     }

// }

//program2//

// function palindrome(str){
//     let len=str.length-1;
//     let str2="";
//     for(i=0;i<=len;i++){
//         str2+=str.charAt(len-i);
//     }
//       if(str==str2){
//            return "palindrome"
//         }
//         else{
//             return "not palindrome"
//         }
    
// }
// let str="civic";
// console.log(palindrome(str))

//program 3//

// function max(number){
//         let num=0;
//         for(i=0;i<number.length;i++){
//             num=Math.max(number[i],num)
//         }
//         return num;
// }
// let arr=[34,45,60,3,4,20,35]
// console.log(max(arr))

//program 4//

// function repeat(str){
//         var res = {};
//     		for(i = 0; i < str.length; i++){
//     			if(res[str[i]]){
//     				res[str[i]]++;
    
//     			}
//                 else{
//     				res[str[i]] = 1;
//     			}
//     		}
//     		console.log(res);
//     }
//     let str="Tarunvasakam"
//     repeat(str);

// program 5 //

// function max_word(str){
//     let res={},temp={}
//     let max=0,count=0;
//     for(i=0;i<str.length;i++){
//         if(str.charAt(i)==" "){
//             if(count>max){
//                 max=count;
//                 count=0;
//                 res=temp;
//             }
//                 count=0
//                 temp="";
//         }
//         else{
//             temp+=str.charAt(i)
//             count++;
//         }
//     }
//     console.log(res)
// }
// let str="hello everybody im steve roggers"
// max_word(str)

//program 6//

// function factorial(num){
//     let ans=1;
//     if(num==0)
//         return 1;
//     for(let i=1;i<=num;i++)
//         ans=ans*i;
//          return ans;
// }
// let num=6;
// console.log(factorial(num))

//program 7 //

// function celcToFahr(cel) {

//     return ((cel* 9.0 / 5.0) + 32.0);
// }
// let cel=30;
 
// console.log(celcToFahr(cel));

// program 8 //

let arr=[1,2,3,4,5,6,8,9,10]
for(i=0;i<arr.length-1;i++){
    if(arr[i]+1!=arr[i+1]){
        console.log(arr[i]+1)
    }
}


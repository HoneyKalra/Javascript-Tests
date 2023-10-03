//q1//
function firstRepeat(str){
  let strArr=[];//empty aray to store the values //
  for(let i=0;i<str.length;i++){
  //for loop on string which is also index based//
  if (strArr.includes(str[i])){
     return str[i]
  } 
  else{
    strArr.push(str[i])
  }
  
}
  return -1;

}
console.log(firstRepeat("madam"));

//q2//pallindrome or not//
let numToCheck=101;//enter any number to check//
let result=`${numToCheck} is not a pallindrome`;//to avoid else statement//
let strOfNum=String(numToCheck);//we have to loop through elements so converted to string//
let strOfNumCopy="";
for(let i=strOfNum.length-1;i>=0;i--){
  //loop in reverse direction and creating a copy of existing string//
  strOfNumCopy+=strOfNum[i];  
 }
  if(Number(strOfNum)===Number(strOfNumCopy)){//checking primitive values equality
    result=`${numToCheck} is a pallindrome`;
  }
console.log(result);

//q3 Armstorng number //
function armstrongChecker(numberTocheck){
 let message=`${numberTocheck} is not an armstrong number`;
 numArray=String(numberTocheck).split("").map(Number);//converting number to array and storing single digit array elements//
 let lengthOfNum=numArray.length;
 let sum=0;
 numArray.forEach(function(num) {
  sum+=num**lengthOfNum;
    
  });
  if (sum===numberTocheck){
  message=`${numberTocheck} is  an armstrong number`
  }
 return message;
}
console.log(armstrongChecker(12));//function call//

//q4 ternary operator//
let something=12;//u can enter anything here  //
let isValid=typeof(something)!=="undefined" && Boolean(something)===true ? something:"Not a valid Thing"; 
console.log(isValid);

//q5 numbers swap//
let num1=80;
let num2=50;
num2=num1+num2;
num1=num2-num1;
num2-=num1;
console.log(num1,num2);//numbers can be any two numbers//

//q6 leap year//
function leapYearChecker(year){
    if(year%4===0 && year%100!==0||year%400===0){
        return `${year} is a leap year`

    }
    return `${year} is not a leap year`
}
console.log(leapYearChecker(2000));


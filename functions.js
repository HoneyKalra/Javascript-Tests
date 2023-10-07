// q1 starts from here //

function mod(dividend,divisor){
    let remainder;
    for(let i=dividend;i>=0;i--){
        if(Number.isInteger(i/divisor)){
            remainder = dividend -i;
            break;//whenever we find a number like that we can exit the loop//
        }
    }
    return remainder;
}
  console.log(mod(8,4));//function call//
 
  //q2 starts from here--//

  function product(param1,param2){
     return function(param3,param4){
         return function(param5,param6){
             return (param1*param3*param5)+(param2*param4*param6);
              //result we want has been returned by innermost function call//
            }
       }
    }
 console.log(product(1,2)(1,1)(2,3));
 // in 2nd quetion one function call returning another function which then called again to return third func and produce desired result//

 //q3 starts  from here--//

function multiply(arr){
    return function(int){
       let updatedArr = arr.map((num)=>num*int)//map returns an array 
       return updatedArr;
    }     
}
console.log(multiply([10,20,30])(5));

//q-4 starts from here//

 function lambdaDepth(n){
       if(n==0){
           return "hello World"         
       }
       function sayHelloWorld(){
           return "Hello World"; 
        }
       //how many times we need to call sayHelloWorld//   
        for(let i=1;i<=n;i++){
            console.log(sayHelloWorld());// to console how many times sayHelloWorld has been called//      
        }
                
      return sayHelloWorld;//returning say HelooWorld function//     
        
   }
    console.log(lambdaDepth(5)());
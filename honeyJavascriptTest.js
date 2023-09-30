//q-1//
//object with key as element--//
function elementFrequency(array){
    //check of Entered Input//
     if(!Array.isArray(array)) {
        let output="Only Array is Expected Here";
        return output;
      }
     //Early Return has been used//
     //Only Bracket Notation can be used because computation is done here//                           
        let frequencyObject={};//empty object to fill arrayEl as Key//                        
        for(const el of array){
                              if(frequencyObject[el]===undefined){
                                                      frequencyObject[el]=1
                               }
                               else{
                                    frequencyObject[el]+=1;
 
                                }                                 
 
        }                       
       return frequencyObject;   
    }
    console.log(elementFrequency(["A","B","A","B","A","A"]));
  //-------------------------------------------------//
   //q2  starts here//
   const arrayElementFinder= function (arr) {
    let a = arr.flat(Infinity);
    //infinity as depth will flatten to infinite level//
    let elementInArr;
    if (arr.length = 0) {
      elementInArr = 0;
    } 
    else {elementInArr = a.length;
    }
    return elementInArr;
    };
    console.log(arrayElementFinder([1,[2,3]]));
    //-------------------------------//
    //q-3 word object indexes as keys//         
    let word="froggy";//words can be changed like "dodo" "rarar"//
    let wordArr=word.split("");//looping of array is easiar so split used//
    let objOfWords={}//empty object to fill key value pair//
    wordArr.forEach(function(val,ind){
                       
          if(objOfWords[val]===undefined){
           objOfWords[val]=[ind]

           }
           else{
             objOfWords[val].push(ind); 
           }  
                                                   
        }) 
  console.log(objOfWords); 
  //-----------------------------// 
  //q-4 starts here//
  let jewellaryItems= {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
      }
  function mostExpensive(objOfJewellary){
        //check of array//
        if(Array.isArray(objOfJewellary)){
          return("this is an array we expect an object")
        }
        else if(objOfJewellary instanceof Object ){
            if(Object.keys(objOfJewellary).length===0){
              return("No Item exist")
             }
            else{
                let mostExpensiveItem;
                let max=0;
                for(const item in objOfJewellary) {
                    if( objOfJewellary[item] > max){
                    max = objOfJewellary[item];
                    mostExpensiveItem=[item];
                    }
                                            
                }     
               return `${mostExpensiveItem} is tthe most Expensive One with Value ${max}`; 

            } 
        }    
      return "Only Object is allowed as Input"        
   }                    
  console.log(mostExpensive(jewellaryItems));
  //--------------------------------------//
  //q-5//
  //breaking this problem into two parts to increase reusability incase we need sum of num //
function sumCalculator(sum=0,/*args*/){
    let numOfArguments=arguments.length;
     for(let i=1; i<numOfArguments;i++){
         sum+=arguments[i];
         
    }
   return sum;                                                            
}   
  //the oneDigitNumMaker function take sumof Numbers as input which is result of sumCalculator function//                                    
  function oneDigitNumMaker(num){
    let oneDigitNumArray = num.toString().split('').map(Number);//conversion to array of 1 digit number//
    let result;
    let product = 1;
    //while loop will run till condition is true;
    while (oneDigitNumArray.length > 1) {
      console.log(oneDigitNumArray);
      oneDigitNumArray.forEach(digit => product *= digit );
      result=product;
      if(result.length===1){
        result=product;
      }
      else {oneDigitNumArray=product.toString().split('').map(Number);//again if digits are greater than one
       product=1;
           }
    }
     return result;
 }
//we have to call the sumCalculator function first  to get sumof Numbers //
let sumOfNumbers=sumCalculator(11,13,);
console.log(oneDigitNumMaker(sumOfNumbers)); 
//--------------------------------------------------//
//q-6 starts here//
function nameSorter(namesArr){
    let lastNamesArray=[];
     arrOfNames.forEach((val)=>{
                 let fullName=  val.split(" ");
                 lastNamesArray.push((fullName.slice(1).join(" ")));//array to string using join a slice taken as firstName is at 0 index position//
                                                
                 })
                 lastNamesArray.sort().sort(function(a,b){
                       return a.length- b.length;
                                       });       
     
    return (lastNamesArray)                                              
                                     
}               
console.log(nameSorter(arrOfNames)); 
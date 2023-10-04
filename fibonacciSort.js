// q-1 fibonnaci sequence//
function fibonacciSeries(numOfTerms){
    let fiboSequence=[0,1]//we need 0 and 1 to make fibonacci series// 
    for(let i=2; i<numOfTerms;i++){//as we already have 0,1//
        fiboSequence[i]=fiboSequence[i-1]+fiboSequence[i-2];
    } 
    return fiboSequence ;
}
console.log(fibonacciSeries(7));

// q-2 sort an array//
//ascending has been used as default parameter//
function arraySort(arr,orderOfSort="ascending"){
    for (let i = 0; i < arr.length - 1; i++){
         let isSwapped = false
         for (let j = 0; j < arr.length -1; j++){
            // swapping the elements
            if (arr[j] > arr[j+1]){
                console.log(arr[j]);
                arr[j+1]+=arr[j];
                arr[j]=arr[j+1]-arr[j];
                arr[j+1]-=arr[j];
                isSwapped = true;
            }
         }
         if(!isSwapped)//this will help breaking the loop if isSwapped is false{
            break;
         }   
    }

    if (orderOfSort==="descending"){
        arr=arr.reverse();
    }

  return arr;
  
}
console.log(arraySort([1,5,3,8,4],));//function called//
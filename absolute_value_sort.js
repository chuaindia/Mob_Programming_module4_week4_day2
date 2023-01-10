function absSort(arr) {
	
	// your code goes here
  var m = arr.length;
  for(var i = 0; i < m; i++){
    for(var j = i+1; j < m; j++){
   // Swapping of array if needed     
      if (Math.abs(arr[i]) > Math.abs(arr[j])){
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      else if(Math.abs(arr[i]) == Math.abs(arr[j])){
    // Placement of negative number before positive number if the absolute value of the numbers are equal    
        if(arr[i] != arr[j]){
          if (arr[i] > arr[j]){
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      }
    }
    
  }
 return arr; 
}
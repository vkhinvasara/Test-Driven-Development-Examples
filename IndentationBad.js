// Bad Example
function bubbleSort(){
  list = [7,5,4,3,6,32,12]
  for(i = 0; i<list.length-1; i++){
    for(j = 0; j<list.length-i-1; j++){
        if(list[j]>list[j+1]){
          let temp = list[j]
          list[j] = list[j+1]
          list[j+1] = temp
        }
    }
  }
  console.log(list)
}
bubbleSort()
      
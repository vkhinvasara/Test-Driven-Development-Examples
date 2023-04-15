// Better Example
function setup(array){
    this.array = array
}
function bubbleSort(){
    for(i = 0; i<this.array.length-1; i++)
        for(j = 0; j<this.array.length-1-i; j++)
            swap(j, j+1)
    console.log(this.array)
}
function swap(i,j){
    if(this.array[i]>this.array[j]){
        temp = this.array[i]
        this.array[i] = this.array[j]
        this.array[j] = temp
    }
}
setup([4,3,1,35,15])
bubbleSort()
console.log(this.array)
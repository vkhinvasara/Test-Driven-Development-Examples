// Here you can take inputs instead 
// Here calculating rectangle area and perimeter have the same length and breadth
function calulateRectangleArea(){
    let length = 10 // You can take inputs instead
    let breadth = 20
    return length*breadth
}
function calculateRectanglePerimeter(){
    let length = 10
    let breadth = 20
    return 2*(length+breadth)
}
console.log(calulateRectangleArea())
console.log(calculateRectanglePerimeter())

//Instead use this

function setup(){       // This setup function makes the code shorter and less redundant
    this.length = 10
    this.breadth = 20
}
function area(){
    return this.length* this.breadth
}
function perimeter(){
    return 2*(this.length+this.breadth)
}
setup()
console.log(area())
console.log(perimeter())
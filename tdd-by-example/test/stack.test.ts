function sum(a,b){ 
    return a+b 
}

describe("Sum", ()=>{
    it("Adds two numbers",()=>{
        expect(sum(1,2)).toBe(3)
    })
})
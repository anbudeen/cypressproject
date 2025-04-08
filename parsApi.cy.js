/// <reference types="cypress" />

describe("API testing for fakestore",()=>{

    it("Parsing Paramater",()=>{
        
        cy.request(
            {
                method:'GET',
                url:'https://fakestoreapi.com/products',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response)=>{
                expect(response.status).to.equal(200)
                expect(response.body[0].id).to.eq(1)
                expect(response.body[0].title).to.eq('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
                expect(response.body[0].price).to.eq(109.95)
                expect(response.body[0].rating.count).to.eq(120)
                
            })

    })

    it("for getting price from all array",()=>{
       let totalprice=0
        cy.request(
            {
                method:'GET',
                url:'https://fakestoreapi.com/products',
                qs:{limit:5}
            })
            .then((response)=>{
                expect(response.status).to.equal(200)
                response.body.forEach(element => {
                    
                    totalprice=totalprice+element.price
                });
               expect(totalprice).to.equal(899.23)
            })

    })



































})
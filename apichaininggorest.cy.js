

/// <reference types='cypress' />

describe("chaining test",()=>{
    let authtoken='Bearer ad84a3ad83d1b5a9383e980b6b4e871b5974be167a3ab996e5ab6b1906986912'
    const resbody={
        "name":"test123", 
        "gender":"male", 
        "email":Math.random().toString(29).substring(2)+"@gmail.com", 
        "status":"active"
        }

    it("test validation",()=>{
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization:authtoken
            },
            body:resbody
        })
        .then((responsebody)=>{

            expect(responsebody.status).to.eq(201)
            
           let userId = responsebody.body.id; 

            //update userdetaools
            cy.request({
                method:'PUT',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
                body:{
                    "name":"AAAAtest1234", 
                    },
                    headers:{
                        Authorization:authtoken
                    }
            })
            .then((res)=>{

                expect(res.status).to.equal(200)
                expect(res.body.name).to.equal("AAAAtest1234")
            })
           cy.request({
            method:'DELETE',
                url:`https://gorest.co.in/public/v2/users/${userId}`,
            
                    headers:{
                        Authorization:authtoken
                    }

           })
           .then((res)=>{

            expect(res.status).to.equal(204)
      
        })
        })
    })
})

describe("API testing Query parameter",()=>{

    const queryparam={page:2}
    it("Query Parameters",()=>{


        cy.request(
            {
            method:"GET",
            url:"https://reqres.in/api/users",
           // qs:{page:2}
           qs :queryparam
            })
            .then((responsequery)=>{
                expect(responsequery.status).to.eq(200)
                expect(responsequery.status).equal(200)
                expect(responsequery.body.page).to.eq(2)
                expect(responsequery.body.data).has.length(6)

                expect(responsequery.body.data[1]).has.property("id",8)
                expect(responsequery.body.data[1]).has.property("first_name","Lindsay")

    })

            })
    })

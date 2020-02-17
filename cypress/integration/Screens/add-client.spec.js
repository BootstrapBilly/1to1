import login from "../Util/Login" //import the login helper method

describe("Add a client screen", ()=> {

    beforeEach(()=> {

        login()

    })
    
    context("Form inputs accept input", ()=> {

        it("Name accepts input", ()=> {

            cy.get("[test-handle='name-input']")

        })

        it("Phone accepts input", ()=> {

            cy.get("[test-handle='phone-input']")

        })

        it("Notes accepts input", ()=> {

            cy.get("[test-handle='notes-prompt']")

        })

    })
    
})

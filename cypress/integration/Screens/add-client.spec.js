import login from "../Util/Login" //import the login helper method

describe("Add a client screen", ()=> {
    
    context("Form inputs accept input", ()=> {

        const validString = "Some input"
        const validPhone = "03723987230"

        it("Login and go to the new client page", ()=> {

            login()
            cy.get("[test-handle='Add a client']").click()//Click the diary link, expect it to lead to the diary page

        })

        it("Name accepts input", ()=> {

            cy.get("[test-handle='input-box']").first().click().type(validString)
            .should("have.value", validString)

        })

        it("Phone accepts input", ()=> {

            cy.get("[test-handle='input-box']").last().click().type(validPhone)
            .should("have.value", validPhone)

        })

        it("Notes accepts input", ()=> {

            cy.get("[test-handle='notes-input']").click().type(validString)
            .should("have.value", validString)

        })

    })

    context("Form submission", ()=> {

        // it("Valid information submits the information successfully", ()=> {

        //     cy.get("[test-handle='button']").click()

        // })

    })
    
})

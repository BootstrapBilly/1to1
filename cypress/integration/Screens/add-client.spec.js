import login from "../Util/Login" //import the login helper method

//! DONT FORGET TO DELETE the value of validString from the clients in the database

describe("Add a client screen", ()=> {
    
    const validString = "Some input"
    const validPhone = "03723987230"

    context("Form inputs accept input", ()=> {

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

    context("Form submission success", ()=> {

        //this test still has the values from the above tests in the input

        it("Valid values allow a successfull submission", ()=> {

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='notes-input']").should("be.empty")
            cy.get("[test-handle='input-box']").should("be.empty")
            cy.get("[test-handle='input-box']").should("be.empty")

        })

    })

    context("Form submission failure", ()=> {

        beforeEach(()=> {

            //clear the user input
            cy.get("[test-handle='notes-input']").clear()
            cy.get("[test-handle='input-box']").clear()
            cy.get("[test-handle='input-box']").clear()

        })

        it("Inputing an existing user returns a validation error", ()=> {

            cy.get("[test-handle='input-box']").first().click().type(validString)
            cy.get("[test-handle='input-box']").last().click().type(validPhone)

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").first().should("have.text", "That client name is in use")//expect the error message to show

        })

        it("Empty name and input returns a validation vailure", ()=> {

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").first().should("have.text", "Enter a name")//expect the error message to show
            cy.get("[test-handle='form-container']").first().should("have.css", "border-color", 'rgb(255, 0, 0)')

            cy.get("[test-handle='input-error']").last().should("have.text", "Enter a valid phone number")//expect the error message to show
            cy.get("[test-handle='form-container']").last().should("have.css", "border-color", 'rgb(255, 0, 0)')

        })

        it("Empty name alone returns a validation vailure", ()=> {

            cy.get("[test-handle='input-box']").first().click().type(validString)

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").last().should("have.text", "Enter a valid phone number")//expect the error message to show
            cy.get("[test-handle='form-container']").last().should("have.css", "border-color", 'rgb(255, 0, 0)')

        })

        it("Empty phone number returns a validation vailure", ()=> {

            cy.get("[test-handle='input-box']").last().click().type(validPhone)

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").first().should("have.text", "Enter a name")//expect the error message to show
            cy.get("[test-handle='form-container']").first().should("have.css", "border-color", 'rgb(255, 0, 0)')

        })

        it("Phone number with spaces returns a validation error", ()=> {

            cy.get("[test-handle='input-box']").last().click().type("3242342 34")

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").last().should("have.text", "Enter a valid phone number")//expect the error message to show
            cy.get("[test-handle='form-container']").last().should("have.css", "border-color", 'rgb(255, 0, 0)')

        })

        it("Phone number with text characters returns a validation error", ()=> {

            cy.get("[test-handle='input-box']").last().click().type("3232b32443")

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").last().should("have.text", "Enter a valid phone number")//expect the error message to show
            cy.get("[test-handle='form-container']").last().should("have.css", "border-color", 'rgb(255, 0, 0)')

        })

        it("Phone number which is too short returns a validation error", ()=> {

            cy.get("[test-handle='input-box']").last().click().type("21234")

            cy.get("[test-handle='button']").click()

            cy.get("[test-handle='input-error']").last().should("have.text", "Enter a valid phone number")//expect the error message to show
            cy.get("[test-handle='form-container']").last().should("have.css", "border-color", 'rgb(255, 0, 0)')

        })

    })

    
})

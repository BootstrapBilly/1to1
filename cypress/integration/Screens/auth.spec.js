describe("Protected routes deny access unless authenticated", ()=> {

    it("Dashboard", ()=> {

        cy.visit("/dashboard")
        cy.url().should("eq", Cypress.config().baseUrl + "/")
        
    })

    it("Diary date", ()=> {

        cy.visit("/calendar-date/17/02/2020")
        cy.url().should("eq", Cypress.config().baseUrl + "/")

    })

    it("new-client", ()=> {

        cy.visit("/calendar-date/17/02/2020")
        cy.url().should("eq", Cypress.config().baseUrl + "/")

    })

    it("add-appointment", ()=> {

        cy.visit("/calendar-date/17/02/2020")
        cy.url().should("eq", Cypress.config().baseUrl + "/")

    })
    
})

describe("Input form", ()=> {

    beforeEach(()=> {

        cy.visit("/")

    })

    it("Automatically focuses the input on pageload", ()=> {

        cy.focused()
        .should("have.attr", "test-handle", "input")//use have.attr to find it by the test handle

    })

    it("Accepts input", ()=> {

        const input = "Some input"

        cy.get("[test-handle='input']")
        .type(input)
        .should("have.value", input)

    })

    context("Form submission failure", ()=> {

        it("Error message is hidden by default, and visible upon validation", ()=> {

            cy.get("[test-handle='errorMsg']").should("be.empty")//expect the error message to not display anything as default

            const input = "wrong";//store the input to enter

            cy.get("[test-handle='input']").type(input)//get the input field and type the stored input into it
    
            cy.get("[test-handle='button']").click()//get the button and click it

            cy.get("[test-handle='errorMsg']").should("have.text", "The pin you have entered is incorrect")//expect the error message to show
            cy.get("[test-handle='input']").should("have.css", "border-color", "rgb(255, 0, 0)")//and expect the border of the input to be red

        })

        it("On submitting an empty form, nothing happens", ()=> {

            cy.get("[test-handle='errorMsg']").should("be.empty")//expect the error message to not display anything as default

            cy.get("[test-handle='button']").click()//get the button and click it

            cy.get("[test-handle='errorMsg']").should("be.empty")//expect the error message to still be empty
            cy.get("[test-handle='input']").should("not.have.css", "border-color", "rgb(255,0,0)")//and expect the border of the input to not be red

        })

    })

    context("Form submission success", ()=> {

        it("Redirected to the dashboard on successful pin enter", ()=> {

            const pin = "938Bs3_f9Q@1fGhBSp23bA";//store the correcy pin

            cy.get("[test-handle='input']").type(pin)//get the input and enter the correct pin
    
            cy.get("[test-handle='button']").click()//get the button and click it

            cy.url().should("eq", Cypress.config().baseUrl + "/dashboard")//expect the user to be routed to the dashboard on successful login
        })

    })

})

describe("Logout button works and removes token from local storage", ()=> {

    it("Redirects the user to the authentication page on logging out", ()=> {

        cy.get("[test-handle='hamburger-icon']").click()//get the input and enter the correct pin

        cy.get("[test-handle='logout']").click()//get the button and click it

        cy.url().should("eq", Cypress.config().baseUrl + "/")//expect the user to be routed to the dashboard on successful login
    })

    it("The token is removed from local storage, blocking access to all other routes", ()=> {

        cy.visit("/dashboard")

        cy.url().should("eq", Cypress.config().baseUrl + "/")//expect the user to be routed to the dashboard on successful login
        
    })

})

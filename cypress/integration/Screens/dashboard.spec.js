import login from "../Util/Login" //import the login helper method

describe("Dashboard screen", ()=> {

    beforeEach(()=> {

        login()

    })
    
    context("Navigation buttons/boxes lead to the correct page", ()=> {

        it("Diary button leads to diary", ()=> {

            cy.get("[test-handle='Diary']").click()//Click the diary link, expect it to lead to the diary page

            cy.url().should("include", Cypress.config().baseUrl + `/calendar-date/`)//expect the user to be routed to the dashboard on successful login

        })

        it("Add a client button leads to Add a client", ()=> {

            cy.get("[test-handle='Add a client']").click()//Click the diary link, expect it to lead to the diary page

            cy.url().should("eq", Cypress.config().baseUrl + `/new-client`)//expect the user to be routed to the dashboard on successful login

        })

    })
    
})

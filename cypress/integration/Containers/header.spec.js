import login from "../Util/Login"

describe("Header container", () => {

    it("Login", ()=> login())

    context("Side panel",()=>{

        it("Closed as default, then opens on clicking the hamburger menu, then closes again when clicking outside of the menu", ()=> {

            cy.get("[test-handle='side-panel']").should("not.be.visible")

            cy.get("[test-handle='hamburger-icon']").click()
            
            cy.get("[test-handle='side-panel']").should("be.visible")

            cy.get("[test-handle='close-area']").click()

            cy.get("[test-handle='side-panel']").should("not.be.visible")
            
        })

        it("Add client leads to the new-client page, and the back arrow leads back", ()=> {

            cy.get("[test-handle='hamburger-icon']").click()
            
            cy.get("[test-handle='new-client-link']").click()

            cy.url().should("eq", Cypress.config().baseUrl + "/new-client")

            cy.get("[test-handle='back-button']").click()

            cy.url().should("eq", Cypress.config().baseUrl + "/dashboard")
            
        })

        it("Home leads to dashboard", ()=> {

            cy.get("[test-handle='hamburger-icon']").click()
            
            cy.get("[test-handle='home-link']").click()

            cy.url().should("eq", Cypress.config().baseUrl + "/dashboard")
            
        })

    })

})
import login from "../Util/Login"

describe("Header container", () => {

    context("Login and navigate to the grid", () => {

        it("Login", () => login())
        it("Navigate to the grid, then 2nd feb", () => {

            cy.get("[test-handle='Diary']").click()
            
        })

    })

    const clients = ["davve", "knight", "n", "nn"]

    context("Adding appointments", () => {

        const add_appointment = (cell, length, clientName) => {

            cy.get(`[test-handle='${cell}']`).click()//click the first empty cell
            cy.get(`[test-handle='${length}-mins']`).click()//select 15 mins
            cy.get("[test-handle='input-box']").type(clientName)//type the client name into the input box
            cy.get(`[test-handle=${clientName}]`).click()//click on the client to add the appointment
    
            cy.get(`[test-handle=${clientName}]`).should("exist") //check that the appointment was added correctly
    
            cy.get(`[test-handle=${clientName}]`).click()//click the cell where the new appointment is
            cy.url().should("contain", Cypress.config().baseUrl + `/calendar-date`)//make sure that it does not redirect to add a new appointment
            cy.get(`[test-handle=${clientName}]`).click()//revert back to the unselected mode
    
        }    

        it("Adding a 15 min", () => {

            add_appointment("col1-seg1", "15", clients[0])

        })

        it("Adding a 30 min", () => {

            add_appointment("col2-seg1", "30", clients[1])

        })

        it("Adding a 45 min", () => {

            add_appointment("col3-seg4", "45", clients[2])

        })

        it("Adding a 60 min", () => {

            add_appointment("col2-seg6", "60", clients[3])

        })

    })

    context("Selecting appointments", ()=> {

        it("Clicking an appointment selects it", ()=> {

            cy.get(`[test-handle='${clients[0]}']`).click()//click the first empty cell
            cy.get(`[test-handle='${clients[0]}']`).should("have.css", "background-color", "rgb(124, 252, 0)")//and expect the border of the input to be red

        })

        it("Clicking the same appointment again de-selects it", ()=> {

            cy.get(`[test-handle='${clients[0]}']`).click()//click the first empty cell
            cy.get(`[test-handle='${clients[0]}']`).should("not.have.css", "background-color", "rgb(124, 252, 0)")//and expect the border of the input to be red

        })

        it("Select a different another appointment", ()=> {

            cy.get(`[test-handle='${clients[1]}']`).click()//click the first empty cell
            cy.get(`[test-handle='${clients[1]}']`).should("have.css", "background-color", "rgb(124, 252, 0)")//and expect the border of the input to be red

        })

        it("Clicking another appointment while one is selected, selects the new appointment and de-selects the old one ", ()=> {

            cy.get(`[test-handle='${clients[2]}']`).click()
            cy.get(`[test-handle='${clients[1]}']`).should("not.have.css", "background-color", "rgb(124, 252, 0)")
            cy.get(`[test-handle='${clients[2]}']`).should("have.css", "background-color", "rgb(124, 252, 0)")

        })

        it("Clicking an empty cell while an appointment is selected, de-selects it", ()=> {

            cy.get(`[test-handle='col4-seg7']`).click()
            cy.url().should("contain", Cypress.config().baseUrl + `/calendar-date`)//make sure that it does not redirect to add a new appointment
            cy.get(`[test-handle='${clients[2]}']`).should("not.have.css", "background-color", "rgb(124, 252, 0)")

        })

        it("Then clicking an empty cell again still redirects to add new appointment", ()=> {

            cy.get(`[test-handle='col4-seg7']`).click()
            cy.url().should("contain", Cypress.config().baseUrl + `/add-appointment`)//make sure that it does not redirect to add a new appointment
            cy.get("[test-handle='back-button']").click()

        })
        
    })


    context("Deleting appointments", ()=> {

        const delete_appointment = (clientName) => {

            cy.get(`[test-handle='${clientName}']`).click()
            cy.get(`[test-handle='delete-icon']`).click()
            cy.get(`[test-handle='yes-button']`).click()

            cy.get(`[test-handle='${clientName}']`).should("not.exist")

        }

        it("deleting a 15 mins", ()=> {

            delete_appointment(clients[0])
            
        })

        it("deleting a 30 mins", ()=> {

            delete_appointment(clients[1])

        })

        it("deleting a 45 mins", ()=> {

            delete_appointment(clients[2])

        })

        it("deleting a 45 mins", ()=> {

            delete_appointment(clients[3])

        })

    })

})
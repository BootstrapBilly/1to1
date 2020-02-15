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

            cy.location().should(loc => expect(loc.href).to.eq("http://localhost:3000/dashboard"))//expect the user to be routed to the dashboard on successful login
        })

    })

})
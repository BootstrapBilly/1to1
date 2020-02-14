describe("Input form", ()=> {

    it("Automatically focuses the input on pageload", ()=> {

        cy.visit("http://localhost:3000")

        cy.focused()
        .should("have.attr", "test-handle", "input")//use have.attr to find it by the test handle

    })

    it.only("Accepts input", ()=> {

        const input = "Some input"

        cy.visit("http://localhost:3000")

        cy.get("[test-handle='input']")
        .type(input)
        .should("have.value", input)

    })
})
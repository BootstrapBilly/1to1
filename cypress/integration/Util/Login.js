const login = () => {

    cy.visit("/")//visit the home page
    cy.get("[test-handle='input']").type("938Bs3_f9Q@1fGhBSp23bA")//get the input and enter the correct pin
    cy.get("[test-handle='button']").click()//get the button and click it

}

export default login
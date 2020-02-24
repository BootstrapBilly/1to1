const login = () => {

    cy.visit("/")//visit the home page
    cy.get("[test-handle='input']").type("hjgs67216^GjihJHO(*s-0fh73d9yu87^")//get the input and enter the correct pin
    cy.get("[test-handle='button']").click()//get the button and click it

}

export default login
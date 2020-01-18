import React from "react"
import {shallow} from "enzyme"
import Authentication from "./Authentication"
import {findByTestAttribute} from "../../Utils/TestingUtils"

const setComponent = (props={}) => {//set the component to be tested
	//Creates the component to be used in the test along with the props
    const component = shallow(<Authentication {...props} />) 
    return component

}

describe("\n\x1b[36mAuthentication screen", ()=> {

    describe("\nRenders correctly\n", ()=> {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test
    
        })
    
        it("Should render without errors", ()=> {
    
            const wrapper = findByTestAttribute(component, "container")
            expect(wrapper.length).toBe(1)
            
        })
    
        it("Should render a logo", ()=> {
    
            const wrapper = findByTestAttribute(component, "logo")
            expect(wrapper.length).toBe(1)
            
        })

        it("Should render a login input", ()=> {
    
            const wrapper = findByTestAttribute(component, "input")
            expect(wrapper.length).toBe(1)
            
        })

        it("Should render an image", ()=> {
    
            const wrapper = findByTestAttribute(component, "image")
            expect(wrapper.length).toBe(1)
            
        })

    })

})

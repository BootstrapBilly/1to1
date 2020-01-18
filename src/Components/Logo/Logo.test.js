import React from "react"
import {shallow} from "enzyme"
import Logo from "./Logo"
import {findByTestAttribute} from "../../Utils/TestingUtils"

const setComponent = (props={}) => {//set the component to be tested
	//Creates the component to be used in the test along with the props
    const component = shallow(<Logo {...props} />) 
    return component

}

describe("\n\x1b[36mLogo", ()=> {

    describe("\nRenders correctly\n", ()=> {

        let component;
        beforeEach(() => {//run before every test

            component = setComponent();//Sets the component to be used by the test
    
        })
    
        it("Should render a logo image", ()=> {
    
            const wrapper = findByTestAttribute(component, "logo")
            expect(wrapper.length).toBe(1)
            
        })


    })

})

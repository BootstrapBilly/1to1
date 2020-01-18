import checkPropTypes from "check-prop-types"

export const findByTestAttribute = (component, attribute) => {

    const wrapper = component.find(`[test-handle="${attribute}"]`)
    return wrapper
}

export const checkProps = (component, expectedProps) => {

    const propsError = checkPropTypes(component.propTypes, expectedProps, "props", component.name)//check whether the passed props match the required type

    return propsError

}


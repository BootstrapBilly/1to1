import axios from "axios"

//const production = "https://one-to-one-backend.herokuapp.com/"
const production = "http://localhost:4000/"

const sendPost = (url, body, token, refreshToken) => {

    if (typeof body !== "object" || body === null)

        console.log("\nSENDPOSTREQ - INVALID PARAMETER SUPPLIED : \nThe body(second) parameter must be an object")

        console.log(`${production}${url}`)

    return axios.post(`${production}${url}`,

        body,

        {
            headers: {
                Authorization: "Bearer " + token,
                Refresh: "Refresh " + refreshToken
            }
        }
    )

}

export default sendPost
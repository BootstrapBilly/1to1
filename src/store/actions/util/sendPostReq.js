import axios from "axios"

const sendPost = (url, body, token, refreshToken) => {

    if (typeof body !== "object" || body === null)

        console.log("\nSENDPOSTREQ - INVALID PARAMETER SUPPLIED : \nThe body(second) parameter must be an object")

    return axios.post(`http://localhost:4000/${url}`,

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
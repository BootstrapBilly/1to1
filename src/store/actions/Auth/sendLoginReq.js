const sendPostRequest = async (url, data) => {

    if(typeof data !== "object"){//if the second parameter is null

        return console.log("Error : The second param must be an object") //let the user know

    }

    try {
        const request = await axios({
            method:"post",
            url:`http://localhost:4000/${url}`,
            data:data
        })

        const response = await request.data //wait for the response
    
        return response //then return it

    }
    
    catch(err){

        console.log(err)

    }

}

export default sendPostRequest

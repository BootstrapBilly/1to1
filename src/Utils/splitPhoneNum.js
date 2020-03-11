const splitPhoneNumber = (string) => {

    if (string.length > 10) {

        const firstHalf = string.slice(0, 5)

        const secondHalf = string.slice(5, string.length + 1)

        return (firstHalf + " " + secondHalf)

    }

    const firstHalf = string.slice(0, 4)

    const secondHalf = string.slice(4, string.length + 1)

    return (firstHalf + " " + secondHalf)

}

export default splitPhoneNumber
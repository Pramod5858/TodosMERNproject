const otpGenerate = (length) => {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"

    let optss = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length)

        optss += characters[index]
    }
    return optss;
}

export default otpGenerate
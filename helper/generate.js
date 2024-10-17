module.exports.generateRandomString = (length) => {
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
        token += character.charAt(Math.floor(Math.random() * character.length));
    }
    return token;
}

module.exports.generateRandomNumber = (length) => {
    const character = "0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
        token += character.charAt(Math.floor(Math.random() * character.length));
    }
    return token;
}
export const checkValidData = (email, passowrd) => {

    //Used regex from google
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passowrd)

    if (!isEmailValid) return "Please enter valid email address.";
    if(!isPasswordValid) return "Password should contains numbers, special characters & capital letters.";
}


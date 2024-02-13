function generateOTP(length) {
    let OTP="";

    for (let i = 0; i < length; i++) {
        
       let cal= Math.floor(Math.random()*10)
        OTP = OTP+cal.toString();
    }
    return OTP;
}

console.log(generateOTP(6));
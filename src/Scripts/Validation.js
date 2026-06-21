//user form validation

const validationForm = (user,setError)=>{
    let isValid = true;
    let errors = {};

    //validate user name
    if(!user.name){
        isValid =false;
        errors.nameErr = "name is required";
    } else if(!/^[a-zA-Z]+$/.test(user.name)){
        isValid = false;
        errors.emailErr ="invalid name format";
    }

    //validate user email
    if(!user.email){
        isValid = false;
        errors.emailErr = "email is required";
    }else if(!/^[a-zA-Z0-9_-\S]+@[a-zA-Z0-9-]+?\.[a-zA-Z]{2,10}$/.test(user.email)){
      isValid = false;
      errors.emailErr = `Email address is invalid`;
    }


    //validation user mobile
    if(!user.mobile){
        isValid = false;
        errors.mobileErr = "mobile number is required";
    }else if(!/^(0|91|\+91)?[6-9]\d{9}$/.test(user.mobile)){//Example: exactly 10 digits
        isValid = false;
        errors.mobileErr = "Invalid Indian Mobile Number";
    }

    setError(errors)
    return isValid;
}
export{ validationForm}
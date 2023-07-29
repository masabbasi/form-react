export const validation = (values,type) => {
  const errors = {};
  const {userName, email, password, confirmPassword, isAccepted} = values;

	if (!email.trim()) {
		errors.email = "Email is Required!";
	} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
		errors.email = "Email is invalid!";
	} else {
		delete errors.email;
	}

	if (!password.trim()) {
		errors.password = "Password is Required!";
	} else if (password.length < 6) {
		errors.password = "Password need to be 6 characters or more...";
	} else {
		delete errors.password;
	}


	if(type==="signUp") {
		if (!userName.trim()) {
			errors.userName = "userName is Required!";
		} else if (userName.length <=3){
			errors.userName = "UserName need to be 4 characters or more...";
		} 	 else {
			delete errors.userName;
		}
	
		if (!confirmPassword.trim()) {
			errors.confirmPassword = "Confirm the Password!";
		} else if (password !== confirmPassword) {
			errors.confirmPassword = "Password do not match!";
		} else {
			delete errors.confirmPassword;
		}
	
		if (isAccepted) {
			delete errors.isAccepted
		} else {
			errors.isAccepted = "Accept our regulations!"
		}
	}

	return errors;
};

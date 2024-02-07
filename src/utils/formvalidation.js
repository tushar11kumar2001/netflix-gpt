const formValidation = (email,password)=>{
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!validEmail) return "Please enter a valid Email";
  if(!validPassword) return "Please enter a Stronge passwaord"

  return null;
}

export default formValidation;


export const validations =(formData,tabName)=>{
   
    const errors={};
    if(tabName=="Profile"){
        if(!formData.name.trim()){
            errors.name="Name cannot be empty";
        }else if(formData.name.length <3){
            errors.name="Name cannot be less than 3 characters"
        }

        if(formData.age<18){
            errors.age="User cannot be less than 18 years"
        }else if(!formData.age || isNaN(formData.age)){
            errors.age="Age is required"
        }

        if(!formData.email.trim()){
            errors.email="Email cannot be empty"
        }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email="Invalid email"
        }
        if(!formData.gender){
            errors.gender="Gender is required"
        }
    }

    return errors;

    // }else if(tabName=="Settings"){

    // }else if (tabName =="Interests"){

    // }
}
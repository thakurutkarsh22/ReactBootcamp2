import { useState } from "react";
import InputComponent from "../9.useRefHook/Usage/InputComponent";


enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    PLEASE_SELECT = "PLEASE_SELECT"
}

enum IMyForm {
    FIRST_NAME = "firstName",
    LAST_NAME = "lastName",
    EMAIL = "email",
    PHONE = "phone",
    GENDER = "gender",
    DOB = "dob"
}

type MyForm = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    gender: Gender,
    dob: string
}

const FORM_DEFAULT: MyForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: Gender.PLEASE_SELECT,
    dob: "",
}

type MyFormError = {
    firstName: string,
    email: string,
    phone: string
}

const DEFAULT_ERROR_FORM_VALUES: MyFormError = {
    firstName: "",
    email: "",
    phone: "",
}

type MyFormTOUCHED = {
    firstName: boolean,
    lastName: boolean,
    email: boolean,
    phone: boolean
}

const DEFAULT_TOUCHED_VALUES: MyFormTOUCHED = {
    firstName: false,
    lastName: false,
    email: false,
    phone: false
}



function Forms() {
    // SOURCE OF TRUTH OF FORM VALUES
    const [form, setForm] = useState<MyForm>(FORM_DEFAULT);
    console.log(form, 'form')
    // SOURCE OF TRUTH OF FROM ERRORS
    const [error, setError] = useState<MyFormError>(DEFAULT_ERROR_FORM_VALUES);
    // SOURCE OF TRUTH FORM INPUT IS TOUCHED
    const [touched, setTouched] =  useState<MyFormTOUCHED>(DEFAULT_TOUCHED_VALUES);

    // console.log("form", form)
    // console.log("error", error)
    // console.log("touched", touched)


    function formSubmitHandler(event) {

    }


    function validation(value, key:string) {

        const val: string = value.trim();

        const localError: MyFormError = {
            firstName: "",
            phone: "",
            email: ""
            
        };


        // fname,

        if(key === IMyForm.FIRST_NAME) {
            const nameRegex = /^[a-z A-Z]+$/;
            const regecVal = val.match(nameRegex);

            if(!val && touched.firstName) {
                localError[key] = "Rquired**"
            } else if (val && val.length < 3 && touched.firstName) {
                localError[key] = "Name should have min 3 char"
            } else if (val && !regecVal && touched.firstName) {
                localError[key] = "Name should not have special char"
            } else if (val && regecVal) {
                localError[key] = ""
            }
            
        }



        // phone

        if(key === IMyForm.PHONE) {
            const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
            const regecVal = val.match(phoneRegex);

            if(!val) {
                localError[key] = "Rquired**"
            } else if (val && !regecVal) {
                localError[key] = "please enter correct phone number"
            } else if (val && regecVal) {
                localError[key] = ""
            }
        }



        // email

        if(key === IMyForm.EMAIL) {
            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            const regecVal = val.match(emailRegex);


            if(!val) {
                localError[key] = "Rquired**"
            } else if (val && !regecVal) {
                localError[key] = "please enter correct email"
            } else if (val && regecVal) {
                localError[key] = ""
            }
        }

        setError(old => {
            return {
                ...old,
                ...localError
            }
        });

    }



    function changeHandler(event, key: string){
        const val = event.target.value; 
        console.log("value of change handler", val);
        setForm(old => {
            return {
                ...old,
                [key]: val
            }
        } )


        // validate
        validation(val, key)
    }

    function touchedHandler(key: string) {
        setTouched(old => {
            return {
                ...old,
                [key]: true
            }
        })
    }

    function genderHandler(event, key: string){
        const val = event.target.value; 
        const id = event.target.id;
        console.log("value of change handler", id);
        setForm(old => {
            return {
                ...old,
                [key]: id === 'genderMale'? Gender.MALE : id === 'genderFeMale'? Gender.FEMALE : Gender.PLEASE_SELECT
            }
        } )
    }

    return (
        <>
            <h1>Forms</h1>

            <form onSubmit={formSubmitHandler}>
                
                <label htmlFor="firstname">FirstName*: </label>
                <input 
                    onInput={(e) => changeHandler(e, IMyForm.FIRST_NAME)} 
                    type="text" 
                    name="firstname" 
                    id="firstname" 
                    placeholder="firstName" 
                    value={form.firstName}
                    onBlur={() => touchedHandler(IMyForm.FIRST_NAME)}
                />
                
                <p style={{color: "red"}}>{error.firstName}</p>


                <label htmlFor="lastname">LastName*: </label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lastname" 
                    placeholder="lastname" 
                    onInput={(e) => changeHandler(e, IMyForm.LAST_NAME)} 
                    onBlur={() => touchedHandler(IMyForm.LAST_NAME)}
                    value={form.lastName}
                />

                <p style={{color: "red"}}></p>
                

                <label htmlFor="email">Email*: </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="email" 
                    onInput={(e) => changeHandler(e, IMyForm.EMAIL)} 
                    onBlur={() => touchedHandler(IMyForm.EMAIL)}
                    value={form.email}
                />
                <p style={{color: "red"}}>{error.email}</p>

                <label htmlFor="phone">Phone*: </label>
                <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    placeholder="phone" 
                    onInput={(e) => changeHandler(e, IMyForm.PHONE)} 
                    value={form.phone}
                />
                <p style={{color: "red"}}>{error.phone}</p>

                <label htmlFor="genderMale">Male*: </label>
                <input type="radio" name="gender" id="genderMale" placeholder="gender" onChange={(e) => genderHandler(e, IMyForm.GENDER)} />

                <label htmlFor="genderFeMale">Female*: </label>
                <input type="radio" name="gender" id="genderFeMale" placeholder="gender" onChange={(e) => genderHandler(e, IMyForm.GENDER)} />

                <br />

                <label htmlFor="dob">dateOfBirth*: </label>
                <input 
                    type="date" 
                    name="dob" 
                    id="dob" 
                    placeholder="dob" 
                    onChange={(e) => changeHandler(e, IMyForm.DOB)} 
                    value={form.dob} 
                />

            </form>

        
        </>
    )
}

export default Forms;
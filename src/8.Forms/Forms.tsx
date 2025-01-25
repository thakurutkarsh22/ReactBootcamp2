import { useState } from "react";


enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    BLANK = "BLANK"
}

type MyForm = {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    gender: Gender,
    dob: Date
}

const FORM_DEFAULT = {
    firstName: "",
    lastName: "",
    email: "",
    phone: 0,
    gender: Gender.BLANK,
    dob: new Date()
}



function Forms() {

    const [form, setForm] = useState<MyForm>(FORM_DEFAULT);

    console.log(form, 'form')



    function formSubmitHandler(event) {

    }

    function nameChangeHandler(event){
        const val = event.target.value; 
        setForm(old => {
            return {
                ...old,
                firstName: val
            }
        } )

    }


    return (
        <>
            <h1>Forms</h1>

            <form onSubmit={formSubmitHandler}>
                
                <label htmlFor="firstname">FirstName*: </label>
                <input onInput={nameChangeHandler} type="text" name="firstname" id="firstname" placeholder="firstName" onChange={() => {}} />
                
                <p style={{color: "red"}}></p>


                <label htmlFor="lastname">LastName*: </label>
                <input type="text" name="lastname" id="lastname" placeholder="lastname" onChange={() => {}} value={""}/>

                <p style={{color: "red"}}></p>
                

                <label htmlFor="email">Email*: </label>
                <input type="email" name="email" id="email" placeholder="email" onChange={() => {}} value={""}/>
                <p style={{color: "red"}}></p>

                <label htmlFor="phone">Phone*: </label>
                <input type="number" name="phone" id="phone" placeholder="phone" onChange={() => {}} value={""}/>
                <p style={{color: "red"}}></p>

                <label htmlFor="genderMale">Male*: </label>
                <input type="radio" name="gender" id="genderMale" placeholder="gender" onChange={() => {}} value={""} />

                <label htmlFor="genderFeMale">Female*: </label>
                <input type="radio" name="gender" id="genderFeMale" placeholder="gender" onChange={() => {}} value={""} />

                <br />

                <label htmlFor="dob">dateOfBirth*: </label>
                <input type="date" name="dob" id="dob" placeholder="dob" onChange={() => {}} value={""} />

            </form>

        
        </>
    )
}

export default Forms;
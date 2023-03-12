import { useState } from "react";

const Form = () => {
    const [state, setState] = useState({ firstName: "", lastName: "" })

    const Event = (e) => {
        const { name, value } = e.target
        setState(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }
    const greet = () => {
        alert(` Hello  ${state.firstName} ${state.lastName} !`)
    }

    return <div className="">
        <form className="form" onSubmit={greet}>
            <input placeholder="first name" className="form__input" type='text' onChange={Event} value={state.firstName} name='firstName' />
            <input placeholder="Last name" className="form__input" type='text' onChange={Event} value={state.lastName} name='lastName' />
            <button className="btn">Greet Me</button>
        </form>
    </div>;
};

export default Form;

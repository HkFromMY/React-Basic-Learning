import React from 'react';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            };
        });
    }

    function handleSubmit(event) {
        // submitToApi(formData) // if there are any function that submit data to API
        event.preventDefault();
        console.log(formData);

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        });
        
        alert("Form has been submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* by adding value attribute in input tag it becomes controlled component */}
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                onChange={handleChange}
                name="comments"
                value={formData.comments}
            />
            <input 
                type="checkbox" 
                name="isFriendly"
                id="isFriendly"
                onChange={handleChange}
                checked={formData.isFriendly}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === 'unemployed'}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>

                <br />
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === 'part-time'}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>

                <br />
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === 'full-time'}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>

            <label htmlFor="favColor">What is your favourite color?</label>
            <br />
            <select 
                name="favColor" 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <button>Submit here</button>
        </form>
    );
}

export default Form
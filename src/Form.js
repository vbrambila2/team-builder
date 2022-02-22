import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props

    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        update(name, value);
      }

    const onSubmit = e => {
        e.preventDefault();
        submit();
      }

    return (
        <form onSubmit={onSubmit} >
            <label>Name
                <input 
                    name="name"
                    type="text"
                    placeholder="Name"
                    maxLength="30"
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label>Nick Name
                <input 
                    name="nickName"
                    type="text"
                    placeholder="Nick Name"
                    maxLength="30"
                    value={values.nickName}
                    onChange={onChange}
                />
            </label>
            <label>Email
                <input 
                    name="email"
                    type="email"
                    placeholder="Email"
                    maxLength="30"
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Role
                <select name="role" value={values.role} onChange={onChange} >
                    <option value="" >Select Job Role</option>
                    <option value="Manager" >Manager</option>
                    <option value="Supervisor" >Supervisor</option>
                    <option value="Regular Employee" >Regular Employee</option>
                </select>
            </label>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}
import React from 'react'
import { useFormik } from 'formik'
import Dropdown from './Dropdown';
import MultiDropdown from './MultiDropdown';
import { signUpSchema } from '@/schemas';

const initialValues = {
    name: "",
    email: "",
    password: "",
    number: "",
    date: "",
    gender: "",
    single_dropdown: "",
    multi_dropdown: ""

}
function Registration() {
    const options = [
        { value: "single", label: "Single" },
        { value: "married", label: "Married" },
        { value: "willnotmarry", label: "Will Not Marry" },
        { value: "staysingle", label: "Stay single" },

    ];

    const op2 = [
        { value: "10thpass", label: "10th Pass" },
        { value: "8thpass", label: "8th Pass" },
        { value: "12thpass", label: "12th Pass" },
        { value: "graduated", label: "Graduated" },

    ]
    const Formik = useFormik({
        initialValues: initialValues,
        // validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <>
            <div>
                <h1>Register !</h1>
                <p>Fill details to get Registered.</p>
                <form onSubmit={Formik.handleSubmit}>
                    <div className='input-block'>
                        <label className='input-label'>Name</label>
                        <input type='text' autoComplete='off' name='name' id='name' placeholder='Enter Your Name' value={Formik.values.name} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                        {Formik.errors.name && Formik.touched.name ? <p className='form-error'>{Formik.errors.name}</p> : null}
                    </div>

                    <div className='input-block'>
                        <label className='input-label'>Email</label>
                        <input type='email' autoComplete='off' name='email' id='email' placeholder='Enter Your Email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                        {Formik.errors.email && Formik.touched.email ? <p className='form-error'>{Formik.errors.email}</p> : null}
                    </div>

                    <div className='input-block'>
                        <label className='input-label'>Password</label>
                        <input type='password' autoComplete='off' name='password' id='password' placeholder='Enter Your Password' value={Formik.values.password} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                        {Formik.errors.password && Formik.touched.password ? <p className='form-error'>{Formik.errors.password}</p> : null}
                    </div>

                    <div className='input-block'>
                        <label className='input-label'>Number</label>
                        <input type='number' autoComplete='off' name='number' id='number' placeholder='Enter Your Number' value={Formik.values.number} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                        {Formik.errors.number && Formik.touched.number ? <p className='form-error'>{Formik.errors.number}</p> : null}
                    </div>

                    <div className='input-block'>
                        <label className='input-label'>Date</label>
                        <input type='date' autoComplete='off' name='date' id='date' value={Formik.values.date} onChange={Formik.handleChange} onBlur={Formik.handleBlur}></input>
                        {Formik.errors.date && Formik.touched.date ? <p className='form-error'>{Formik.errors.date}</p> : null}
                    </div>

                    <div className='input-block'>
                        <label className='input-label'>Gender</label> {'\u00A0'}
                        Male <input type='radio' name='gender' id='gender' checked={Formik.values.male === 'male'} onChange={() => Formik.setFieldValue("gender", "Male")} onBlur={Formik.handleBlur}></input>
                        Female <input type='radio' name='gender' id='gender' checked={Formik.values.female === 'female'} onChange={() => Formik.setFieldValue("gender", "Female")} onBlur={Formik.handleBlur}></input>
                        Others <input type='radio' name='gender' id='gender' checked={Formik.values.others === 'others'} onChange={() => Formik.setFieldValue("gender", "Others")} onBlur={Formik.handleBlur}></input>
                        {Formik.errors.gender && Formik.touched.gender ? <p className='form-error-gender'>{Formik.errors.gender}</p> : null}
                    </div>
                    <div className='dropdowns'>
                        <p>Multi Dropdown : </p>
                        <MultiDropdown isMulti placeHolder="Select..." options={op2} name="multi_dropdown" value={Formik.values.multi_dropdown} onChange={Formik.handleChange} />

                        {/* {Formik.errors.single_dropdown && Formik.touched.single_dropdown ? <p className='form-error-dropdown'>{Formik.errors.single_dropdown}</p> : null} */}

                        <p className='single-drop-p'>Single Dropdown : </p>
                        <Dropdown placeHolder="Select..." options={options} name="single_dropdown" value={Formik.values.single_dropdown} onChange={Formik.handleChange} />

                        {/* {Formik.errors.multi_dropdown && Formik.touched.multi_dropdown ? <p className='form-error-dropdown'>{Formik.errors.multi_dropdown}</p> : null} */}
                    </div>
                    <br />

                    <button className='input-button' type='submit'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Registration
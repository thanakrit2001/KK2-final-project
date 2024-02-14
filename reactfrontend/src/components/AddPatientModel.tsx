import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const FormPatientModel = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        date_of_birth: '',
        phone_number: '',
        gender: 'Male', // Default value
        weight: '',
        height: '',
        blood_type: 'A+',
        medic_person:1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Data submitted successfully:', formData);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/patient/create/', formData);
            Swal.fire({
                title: "Added!",
                text: "You can see your patient in patients record.",
                icon: "success"
              });
            console.log('Data submitted successfully:', response.data);
            // Optionally, you can reset the form data after successful submission
            setFormData({
                name: '',
                surname: '',
                date_of_birth: '',
                phone_number: '',
                gender: 'Male', // Default value
                weight: '',
                height: '',
                blood_type: 'A+',
                medic_person:1, // Default value
            });
        } catch (error) {
            console.error('Error submitting data:', error);
        }

    };

    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen bg-gray-100/40">
                {/* Modal Container */}
                <div className="bg-white p-6 rounded-lg w-2/3 ">
                    <div className="flex justify-between items-center text-center text-blue-600 text-2xl font-bold py-6 px-6">
                        <div>
                            Add new patients
                        </div>
                        <div>
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                                onClick={() => {
                                    console.log("modal closed ");
                                }}
                            >
                                <path
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Form Content */}

                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap mx-3 mb-6">
                            <button
                                type="button"
                                className="right-0 top-0 absolute rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    onClick={() => {
                                        console.log("modal closed ");
                                    }}
                                >
                                    <path
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase justify-center tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="firstname"
                                >
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="firstname"
                                    type="text"
                                    placeholder="Johhny"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="lastname"
                                >
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="lastname"
                                    type="text"
                                    placeholder="Sins"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-3 mb-6">
                            <div className="w-1/3 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="dateofbirth"
                                >
                                    Date of birth
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    type="date"
                                    placeholder="Please select a date"
                                    id="dateofbirth"
                                    name="date_of_birth"
                                    value={formData.date_of_birth}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="phone"
                                >
                                    Phone number
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="phone"
                                    type="text"
                                    placeholder="(+66)"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="gender"
                                >
                                    Gender
                                </label>
                                <div className="relative">
                                    <select
                                        className="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-1 pointer-events-none flex items-center text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mx-3 mb-8">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="weight"
                                >
                                    Weight
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="weight"
                                    type="text"
                                    placeholder="kg."
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="height"
                                >
                                    Height
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="height"
                                    type="text"
                                    placeholder="cm."
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="blood-type"
                                >
                                    Blood type
                                </label>
                                <div className="relative">
                                    <select
                                        className="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="blood-type"
                                        name="blood_type"
                                        value={formData.blood_type}
                                        onChange={handleChange}
                                    >
                                        <option>A positive (A+)</option>
                                        <option>A negative (A-)</option>
                                        <option>B positive (B+)</option>
                                        <option>B negative (B-)</option>
                                        <option>AB positive (AB+)</option>
                                        <option>AB positive (AB+)</option>
                                        <option>O positive (O+)</option>
                                        <option>O negative (O-)</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-1 pointer-events-none flex items-center text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-4">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>

                        </div>
                    </form>
                    {/* Action Buttons */}

                </div>
            </div>
        </div>
    );
}
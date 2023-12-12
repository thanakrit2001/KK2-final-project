import { React, useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

function Patients() {
  const [patientData, setPatientData] = useState([
    {
      id: 'INV001',
      firstName: 'Eva',
      lastName: 'Mendes',
      gender: 'Female',
      dateOfBirth: 'MM-DD-YYYY',
    },
    {
      id: 'INV005',
      firstName: 'Ricky',
      lastName: 'Crooks',
      gender: 'Male',
      dateOfBirth: 'MM-DD-YYYY',
    },
    {
      id: 'INV002',
      firstName: 'Eric',
      lastName: "D'Amore",
      gender: 'Male',
      dateOfBirth: 'MM-DD-YYYY',
    },
  ])

  const handleDelete = (id) => {
    const updatedPatients = patientData.filter((patient) => patient.id !== id)
    setPatientData(updatedPatients)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div class="relative overflow-x-auto shadow-2xl sm:rounded-lg">
        <table class="w-full text-sm text-center rtl:text-right text-gray-500">
          <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white">
            Patients Record
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" class="px-6 py-3">
                Patients
              </th>
              <th scope="col" class="px-6 py-3">
                ID
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient) => (
              <tr key={patient.id} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {`${patient.firstName} ${patient.lastName}`}
                </th>
                <td className="px-6 py-4">{patient.id}</td>
                <td className="px-6 py-4">{patient.gender}</td>
                <td className="px-6 py-4">{patient.dateOfBirth}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="absolute bottom-5">
        <Popup
          trigger={
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {' '}
              Add Patients{' '}
            </button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="text-center items-center">
              <div className="text-blue-600 text-xl font-bold mb-4">
                {' '}
                Add new patients{' '}
              </div>
              <div className="content">
                <form class="w-full">
                  <div class="flex flex-wrap mx-3 mb-6">
                    <button
                      type="button"
                      class="right-0 top-0 absolute rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        onClick={() => {
                          console.log('modal closed ')
                          close()
                        }}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase justify-center tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="firstname"
                      >
                        First Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="firstname"
                        type="text"
                        placeholder="Johhny"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="lastname"
                      >
                        Last Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="lastname"
                        type="text"
                        placeholder="Sins"
                      />
                    </div>
                  </div>
                  <div class="flex flex-wrap mx-3 mb-6">
                    <div class="w-1/3 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="dateofbirth"
                      >
                        Date of birth
                      </label>
                      <input
                        datetimepicker
                        class="focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
                        type="date"
                        placeholder="Please select a date"
                        id="dateofbirth"
                      />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="phone"
                      >
                        Phone number
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phone"
                        type="text"
                        placeholder="(+66)"
                      />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="gender"
                      >
                        Gender
                      </label>
                      <div class="relative">
                        <select
                          class="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="gender"
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <div class="absolute inset-y-0 right-1 pointer-events-none flex items-center text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap mx-3 mb-8">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="weight"
                      >
                        Weight
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="weight"
                        type="text"
                        placeholder="kg."
                      />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="height"
                      >
                        Height
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="height"
                        type="text"
                        placeholder="cm."
                      />
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="blood-type"
                      >
                        Blood type
                      </label>
                      <div class="relative">
                        <select
                          class="appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="blood-type"
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
                        <div class="absolute inset-y-0 right-1 pointer-events-none flex items-center text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="actions">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mb-4 py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
                  Submit
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default Patients

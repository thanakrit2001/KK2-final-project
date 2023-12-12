import React from 'react'

function Patients() {
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
            <tr class="bg-white border-b">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Eva Mendes
              </th>
              <td class="px-6 py-4">INV001</td>
              <td class="px-6 py-4">Female</td>
              <td class="px-6 py-4">MM-DD-YYYY</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white border-b ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Ricky Crooks
              </th>
              <td class="px-6 py-4">INV005</td>
              <td class="px-6 py-4">Male</td>
              <td class="px-6 py-4">MM-DD-YYYY</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600">
                  Edit
                </a>
              </td>
            </tr>
            <tr class="bg-white ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                Eric D'Amore
              </th>
              <td class="px-6 py-4">INV002</td>
              <td class="px-6 py-4">Male</td>
              <td class="px-6 py-4">MM-DD-YYYY</td>
              <td class="px-6 py-4"></td>
              <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 hover:underline">
                  Edit
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Patients

import React from 'react'

function Diagnosis() {
  return (
    <div className="w-full h-full">
      <div className="pa_information flex w-full m-6 justify-center rounded-md shadow-2xl">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt=""
          className="h-40 w-40 mt-5 mr-10"
        />
        <div className="information">
          <div className="pa_name m-4 text-lg">
            Name: Thatphum Kongnithichalerm
          </div>
          <div className="pa_normal flex">
            <p className="m-4">Gender: Male</p>
            <p className="m-4">Age: 21</p>
            <p className="m-4">Date of Birth: 18 Dec 2001</p>
          </div>
          <div className="pa_medic flex">
            <div className="p-4 border-dashed border-2 border-gray-500 m-4">
              22.4
            </div>
            <div className="p-4 border-dashed border-2 border-gray-500 m-4">
              85
            </div>
            <div className="p-4 border-dashed border-2 border-gray-500 m-4">
              175
            </div>
            <div className="p-4 border-dashed border-2 border-gray-500 m-4">
              124/80
            </div>
            <div className="p-4 border-dashed border-2 border-gray-500 m-4">
              A
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="w-full p-4 rounded-md shadow-2xl m-4">
          <div className="text-3xl text-center p-4">Diagnose</div>
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                JPG (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Diagnosis

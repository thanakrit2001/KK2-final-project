import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Patient } from "./types";
import Swal from "sweetalert2";

export const DetailPatient = () => {
  const { id } = useParams<{ id: string }>();

  const patientId = id ? id : '0';

  const [userData, setUserData] = useState<Patient>();

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/patient/${patientId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log()
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg'];

      if (allowedTypes.includes(file.type)) {
        setSelectedFile(file);
        console.log(file)
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid file type. Please select jpeg or jpg file.",
        });
        console.error('Invalid file type. Please select a valid image file.');
      }
    }
  };

  const handleFileUpload = async () => {
    try {
      console.log(selectedFile)
      if (!selectedFile) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No file selected. Please input file.",
        });
        // console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('patients_id', patientId);

      // Use an API endpoint to handle file upload on the server
      const response = await axios.post('http://127.0.0.1:8000/api/image/upload/', formData);
      if (response.status == 200) {
        if(response.data.predict == 0)
          Swal.fire("pneumonia risk");
        else
          Swal.fire("Normal");
        // Handle success, e.g., show a success message
      } else {
        console.error('File upload failed');
        // Handle failure, e.g., show an error message
      }
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="m-6">
        <div className="flex justify-center rounded-lg shadow-2x bg-white mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
            alt=""
            className="h-40 w-40 mt-5 mr-10"
          />
          <div className="information">
            <div className="pa_name m-4 text-lg flex justify-between">
              <div>
                Name: {userData?.name} {userData?.surname}
              </div>
              {/* <button className="font-medium text-blue-600 hover:underline" onClick={()=>{setIsHidden(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
              </button> */}
            </div>
            <div className="pa_normal flex">
              <p className="m-4">Gender: {userData?.gender}</p>
              {/* <p className="m-4">Age: 21</p> */}
              <p className="m-4">Date of Birth: {userData?.date_of_birth}</p>
            </div>
            <div className="pa_medic flex">
              {/* <div className="p-4 border-dashed border-2 border-gray-500 m-4 rounded-lg">
                {userData?.date_of_birth} BMI
              </div> */}
              <div className="p-4 border-dashed border-2 border-gray-500 m-4 rounded-lg flex flex-col">
                <div>{userData?.weight}</div>
                <div>Weight</div>
              </div>
              <div className="p-4 border-dashed border-2 border-gray-500 m-4 rounded-lg flex flex-col">
                <div>{userData?.height}</div>
                <div>Height</div>
              </div>
              {/* <div className="p-4 border-dashed border-2 border-gray-500 m-4 rounded-lg">
                124/80
              </div> */}
              <div className="p-4 border-dashed border-2 border-gray-500 m-4 rounded-lg flex flex-col">
                <div>{userData?.blood_type}</div>
                <div>Blood pressure</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-4 rounded-md shadow-2xl  bg-white">
          <div className="text-3xl text-center p-4">Diagnose</div>
          <div className="mb-3 flex justify-center items-center gap-3">
            <div className="w-2/3 ">
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600  dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile"
                onChange={handleFileChange}
                 />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-sm"
              onClick={handleFileUpload}
            >
              Upload
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

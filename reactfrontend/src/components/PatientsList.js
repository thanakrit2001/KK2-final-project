import React, { useState, useEffect } from "react";

function PatientsList() {
    const [patients, setPatients] = useState([]);
  
    useEffect(() => {
      // Fetch patients data from the server when the component mounts
      fetchPatients();
    }, []);
  
    const fetchPatients = async () => {
      try {
        // Replace the URL with the actual endpoint to fetch patients from your server
        const response = await fetch("https://your-api-endpoint/patients");
        const data = await response.json();
  
        // Update the state with the fetched patients data
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };
  
    return (
      <div>
        <h2>Patients List</h2>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.firstName} {patient.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PatientsList;
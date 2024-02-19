import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [position, setPosition] = useState('student')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const validateEmailFormat = () => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    return emailPattern.test(email)
  }

  const handleRegister = async () => {
    try {
      // Perform validation, e.g., check if passwords match, etc.
      if (password !== confirmPassword) {
        setError('Passwords do not match')
        return
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match')
        return
      }

      // Validate email format
      if (!validateEmailFormat()) {
        setError('Invalid email format')
        return
      }

      const response = await fetch('your_registration_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          password,
          position,
        }),
      })

      if (!response.ok) {
        navigate('/signin')
        return
      }

      const data = await response.json()
      const newToken = data.token
    } catch (error) {
      console.error('An error occurred during registration', error)
      setError('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="container min-w-full flex flex-col min-h-screen justify-center items-center">
      <div className="form-container rounded-md shadow-lg w-1/3 p-6 bg-white border-solid border-2">
        <div className="form-header text-center pb-4 ">
          <h1 className="text-blue-900 text-3xl font-bold">Register Form</h1>
          <p>Please fill out the form to create an account.</p>
        </div>

        <div className="regis-form grid grid-cols-2">
          <div>
            <h3 className="font-bold">Name:</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-3/4 mt-2 py-2 px-2 border rounded-md"
            />
            <br />
          </div>

          <div>
            <h3 className="font-bold">Surname:</h3>
            <input
              type="text"
              placeholder="Your Surname"
              className="w-3/4 mt-2 py-2 px-2 border rounded-md"
            />
            <br />
          </div>

          <div>
            <h3 className="font-bold">Email:</h3>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className={`w-3/4 mt-2 py-2 px-2 border rounded-md ${
                email && !validateEmailFormat() ? 'border-red-500' : ''
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {!validateEmailFormat() && email && (
              <p className="text-red-500 text-sm">Invalid email format</p>
            )}

            <h3 className="font-bold">Confirm Password:</h3>
            <input
              type="password"
              id="pass"
              placeholder="Input your password again"
              className={`w-3/4 mt-2 py-2 px-2 border rounded-md ${
                password !== confirmPassword ? 'border-red-500' : ''
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p
              className={`text-red-500 text-sm ${
                password !== confirmPassword ? '' : 'hidden'
              }`}
            >
              Passwords do not match
            </p>
            <br />
          </div>

          <div>
            <h3 className="font-bold">Password:</h3>
            <input
              type="password"
              id="pass"
              placeholder="Your password"
              className={`w-3/4 mt-2 py-2 px-2 border rounded-md ${
                password !== confirmPassword ? 'border-red-500' : ''
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>

          <div>
            <h3 className="font-bold">Position:</h3>
            <select
              name="position"
              className="w-3/4 mt-2 py-2 px-2 border rounded-md cursor-pointer"
            >
              <option value="doctor">Doctor</option>
            </select>
            <br />
          </div>
        </div>

        <div className="w-full flex items-center justify-center mt-10">
          <button
            type="submit"
            className="bg-blue-900 text-white rounded-md shadow-lg p-2 m-2"
            onClick={handleRegister}
          >
            Confirm
          </button>
          <button
            type="submit"
            className="bg-gray-400 text-black rounded-md shadow-lg p-2 m-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

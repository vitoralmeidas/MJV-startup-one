import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledLogin, CenteredLogin } from './LoginStyled'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/v1/auth/login/buyer',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      )

      if (response.ok) {
        // Login successful
        const data = await response.json()
        console.log('Login successful:', data)
        navigate('/home')
      } else {
        // Login failed
        const errorData = await response.json()
        console.error('Login failed:', errorData.message)
      }
    } catch (error) {
      console.error('Login error:', error.message)
    }
  }

  return (
    <CenteredLogin>
      <StyledLogin>
        <h2>Login</h2>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('/register')}>Cadastrar</button>
      </StyledLogin>
    </CenteredLogin>
  )
}

export default Login

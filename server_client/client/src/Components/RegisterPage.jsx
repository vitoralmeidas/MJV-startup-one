import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledRegister, CenteredRegister } from './RegisterPageStyled'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async () => {
    try {
      const response = await fetch(
        'http://localhost:3000/api/v1/auth/register/buyer',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            cnpj,
            password
          })
        }
      )

      if (response.ok) {
        alert('Cadastro realizado com sucesso!')
        navigate('/')
        setName('')
        setEmail('')
        setCnpj('')
        setPassword('')
      } else {
        // Registration failed
        const errorData = await response.json()
        console.error('Falha:', errorData.message)
      }
    } catch (error) {
      console.error('Erro:', error.message)
    }
  }

  return (
    <CenteredRegister>
      <StyledRegister>
        <h2>Register</h2>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          CNPJ:
          <input
            type='text'
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
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
        <button onClick={handleRegister}>Cadastrar</button>
        <button onClick={() => navigate('/')}>Login</button>
      </StyledRegister>
    </CenteredRegister>
  )
}

export default RegisterPage

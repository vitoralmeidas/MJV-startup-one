import styled from 'styled-components'

export const CenteredLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const StyledLogin = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 35px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:last-child {
      margin-bottom: 0; // Remove bottom margin for the last button
    }
  }
`

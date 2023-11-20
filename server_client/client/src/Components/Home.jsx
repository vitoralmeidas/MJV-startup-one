import React, { useState, useEffect } from 'react'
import lata from '../images/assets/lata.png'
import garrafa from '../images/assets/garrafa.png'

import {
  HomeContainer,
  Products,
  Product,
  Title,
  Img,
  Transactions,
  SubTotal,
  Total,
  Increse,
  Decrease,
  Button,
  Quantity,
  ButtonsBox,
  Box1,
  Box2,
  TitlePedido,
  TotalTitle,
  ValueTotal,
  Logout
} from './HomeStyled'

const Home = () => {
  const [total, setTotal] = useState(0)
  const [totalKgPlastico, setTotalKgPlastico] = useState(0)
  const [totalKgAluminio, setTotalKgAluminio] = useState(0)
  const [pedidoPlasticoKg, setPedidoPlasticoKg] = useState(0)
  const [pedidoAluminioKg, setPedidoAluminioKg] = useState(0)

  const valorToneladaPlastico = 1100
  const valorToneladaAluminio = 3500
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/products')

        if (response.ok || response.status === 304) {
          const { productsQuantity } = await response.json()

          if (Array.isArray(productsQuantity) && productsQuantity.length >= 2) {
            setTotalKgPlastico(productsQuantity[0])
            setTotalKgAluminio(productsQuantity[1])
          } else {
            console.error('Invalid productsQuantity format:', productsQuantity)
          }
        } else {
          console.error('Failed to fetch products:', response.status)
        }
      } catch (error) {
        console.error('Error fetching products:', error.message)
      }
    }

    fetchData()
  }, [])

  const handleIncreaseQuantidadePlastico = () => {
    setPedidoPlasticoKg(prevState => {
      const increasedValue = 100

      if (totalKgPlastico < 200) {
        return prevState
      }

      const newPedidoPlasticoKg = prevState + increasedValue

      setTotalKgPlastico(
        prevTotalKgPlastico => prevTotalKgPlastico - increasedValue
      )

      console.log(totalKgPlastico)

      return newPedidoPlasticoKg
    })
  }

  const handleDecreaseQuantidadePlastico = () => {
    setPedidoPlasticoKg(prevState => {
      const decreasedValue = Math.min(prevState, 100)
      const newPedidoPlasticoKg = Math.max(0, prevState - decreasedValue)

      setTotalKgPlastico(prevTotalKgPlastico =>
        Math.max(0, prevTotalKgPlastico + decreasedValue)
      )

      return newPedidoPlasticoKg
    })
  }

  const handleIncreaseQuantidadeAluminio = () => {
    setPedidoAluminioKg(prevState => {
      const increasedValue = 100

      if (totalKgAluminio < 200) {
        return prevState
      }

      const newPedidoAluminioKg = prevState + increasedValue

      setTotalKgAluminio(prevTotalKgAluminio =>
        Math.max(0, prevTotalKgAluminio - increasedValue)
      )

      console.log(totalKgAluminio)

      return newPedidoAluminioKg
    })
  }

  const handleDecreaseQuantidadeAluminio = () => {
    setPedidoAluminioKg(prevState => {
      const decreasedValue = Math.min(prevState, 100)
      const newPedidoAluminioKg = Math.max(0, prevState - decreasedValue)

      setTotalKgAluminio(prevTotalKgAluminio =>
        Math.max(0, prevTotalKgAluminio + decreasedValue)
      )

      return newPedidoAluminioKg
    })
  }

  useEffect(() => {
    const plasticoTotal = (pedidoPlasticoKg * valorToneladaPlastico) / 1000

    const aluminioTotal = (pedidoAluminioKg * valorToneladaAluminio) / 1000

    setTotal(plasticoTotal + aluminioTotal)
  }, [
    pedidoPlasticoKg,
    valorToneladaPlastico,
    pedidoAluminioKg,
    valorToneladaAluminio
  ])

  const sendTotal = async () => {
    try {
      if (total > 0) {
        const quantity1 = totalKgPlastico
        const quantity2 = totalKgAluminio
        const response = await fetch(
          'http://localhost:3000/api/v1/products/decrease-quantity',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity1,
              quantity2
            })
          }
        )

        if (response.ok) {
          setTotal(0)
          alert(
            'Resgate efetuado com sucesso',
            `Você resgatou ${total.toFixed(2)}!`
          )
          window.location.reload()
        } else {
          console.error('Redeem request failed:', response.status)
          alert(
            'Transação falhou',
            'Ocorreu um erro inesperado. Tente novamente mais tarde'
          )
        }
      } else {
        alert(
          'Sem saldo suficiente',
          'Adicione a quantidade de produtos que você irá depositar!.'
        )
      }
    } catch (error) {
      console.error('Redeem error:', error.message)
      alert('Falha ao resgatar.', 'Tente novamente mais tarde.')
    }
  }

  const handleLogout = () => {
    // return to login page using react-router-dom

    window.location.href = '/'
  }

  return (
    <div>
      <HomeContainer>
        <Products>
          <Product>
            <Title>Plástico</Title>
            <Img src={garrafa} />
            <Quantity>{totalKgPlastico} Kg</Quantity>
            <ButtonsBox>
              <Increse onClick={handleIncreaseQuantidadePlastico}>+</Increse>
              <Decrease onClick={handleDecreaseQuantidadePlastico}>-</Decrease>
            </ButtonsBox>
          </Product>
          <Product>
            <Title>Alumínio</Title>
            <Img src={lata} />
            <Quantity>{totalKgAluminio} Kg</Quantity>
            <ButtonsBox>
              <Increse onClick={handleIncreaseQuantidadeAluminio}>+</Increse>
              <Decrease onClick={handleDecreaseQuantidadeAluminio}>-</Decrease>
            </ButtonsBox>
          </Product>
        </Products>
        <Transactions>
          <TitlePedido>Pedido</TitlePedido>
          <SubTotal>
            <Box1>
              <p>Material:</p>
              <p>Quantidade (T):</p>
              <p>Valor (T):</p>
            </Box1>
            <Box2>
              <p>Plástico</p>
              <p>{pedidoPlasticoKg}Kg</p>
              <p>R$ {valorToneladaPlastico.toFixed(2)}</p>
            </Box2>
          </SubTotal>
          <SubTotal>
            <Box1>
              <p>Material:</p>
              <p>Quantidade (T):</p>
              <p>Valor (T):</p>
            </Box1>
            <Box2>
              <p>Alumínio</p>
              <p>{pedidoAluminioKg}Kg</p>
              <p>R$ {valorToneladaAluminio.toFixed(2)}</p>
            </Box2>
          </SubTotal>
          <Total>
            <TotalTitle>Total</TotalTitle>
            <ValueTotal>R$ {total.toFixed(2)}</ValueTotal>
          </Total>
          <Button onClick={sendTotal}>Comprar</Button>
          <Logout onClick={handleLogout}>Sair</Logout>
        </Transactions>
      </HomeContainer>
    </div>
  )
}

export default Home

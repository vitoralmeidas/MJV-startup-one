import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  padding: 20px;
  height: 80vh;
`

export const Products = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 0 auto; */
  height: 80vh;
`

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #3b5998;
`

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 40%;
  height: 80vh;
`

export const Img = styled.img`
  width: 200px;
  height: 250px;
`

export const Price = styled.p`
  font-size: 20px;
`
export const Quantity = styled.p`
  font-size: 20px;
`

export const Transactions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  height: 80vh;
`

export const SubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0;
  border-bottom: 1px solid black;
`
export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  align-items: center;
`

export const ButtonsBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`

export const Increse = styled.button`
  background-color: #ffcc41;
  color: white;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin: 5px;
  font-size: 20px;
`

export const Decrease = styled.button`
  background-color: #885fff;
  color: white;
  border: none;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  margin: 5px;
  font-size: 20px;
`

export const Button = styled.button`
  background-color: #8ad4eb;
  color: black;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end;
  letter-spacing: 2px;
`

export const Box1 = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0;
`
export const Box2 = styled.div`
  font-size: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const TitlePedido = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #8ad4eb;
  margin: 10px auto;
  border-bottom: 1px solid black;
`
export const TotalTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
`
export const ValueTotal = styled.p`
  font-size: 18px;
  background-color: #e6e6e6;
  border-radius: 5px;
  padding: 5px;
`
export const Logout = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  width: 40%;
  height: 30px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end;
  letter-spacing: 2px;
`

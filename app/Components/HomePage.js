import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const [quantity1, setQuantity1] = useState(0)
  const [quantity2, setQuantity2] = useState(0)
  const [total, setTotal] = useState(0)
  const navigation = useNavigation()

  const increaseQuantity1 = () => {
    setQuantity1(prevQuantity => prevQuantity + 1)
  }

  const decreaseQuantity1 = () => {
    if (quantity1 > 0) {
      setQuantity1(prevQuantity => prevQuantity - 1)
    }
  }

  const increaseQuantity2 = () => {
    setQuantity2(prevQuantity => prevQuantity + 1)
  }

  const decreaseQuantity2 = () => {
    if (quantity2 > 0) {
      setQuantity2(prevQuantity => prevQuantity - 1)
    }
  }

  const calculateTotal = () => {
    const total = quantity1 * 0.1 + quantity2 * 0.3
    setTotal(total)
  }

  const redeemTotal = async () => {
    try {
      if (total > 0) {
        const response = await fetch(
          'http://10.0.2.2:3000/api/v1/products/update-quantity',
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
          setQuantity1(0)
          setQuantity2(0)
          setTotal(0)
          Alert.alert(
            'Resgate efetuado com sucesso',
            `Você resgatou ${total.toFixed(2)}!`
          )
        } else {
          console.error('Redeem request failed:', response.status)
          Alert.alert(
            'Transação falhou',
            'Ocorreu um erro inesperado. Tente novamente mais tarde'
          )
        }
      } else {
        // Display alert if total is 0
        Alert.alert(
          'Sem saldo suficiente',
          'Adicione a quantidade de produtos que você irá depositar!.'
        )
      }
    } catch (error) {
      console.error('Redeem error:', error.message)
      Alert.alert('Falha ao resgatar.', 'Tente novamente mais tarde.')
    }
  }

  React.useEffect(() => {
    calculateTotal()
  }, [quantity1, quantity2])

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/water.png')} style={styles.image} />
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button} onPress={decreaseQuantity1}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity1}</Text>
            <TouchableOpacity style={styles.button} onPress={increaseQuantity1}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/lata.png')} style={styles.image} />
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button} onPress={decreaseQuantity2}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity2}</Text>
            <TouchableOpacity style={styles.button} onPress={increaseQuantity2}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: </Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.quantityButton} onPress={redeemTotal}>
        <Text style={styles.buttonQText}>Resgatar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonQText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 1,
    alignItems: 'center',
    marginTop: 100
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    marginBottom: 1,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8
  },
  button: {
    backgroundColor: '#a5d6a7',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  quantityText: {
    fontSize: 18
  },

  totalContainer: {
    marginTop: 50,
    backgroundColor: '#a5d6a7',
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  totalText: {
    fontSize: 16
  },

  totalValue: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  quantityButton: {
    backgroundColor: '#91b491',
    padding: 15,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
    margin: 50
  },
  buttonQText: {
    color: 'black',
    fontSize: 18,
    letterSpacing: 2
  },
  logoutButton: {
    backgroundColor: '#e69598',
    padding: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    margin: 50,
    alignSelf: 'flex-end'
  }
})

export default HomePage

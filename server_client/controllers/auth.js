const User = require('../models/User')
const Buyer = require('../models/Buyer')

class authController {
  static register = async (req, res) => {
    // @desc    Register a new user
    // @route   POST /api/v1/auth/register
    // @access  Public

    const { name, email, password } = req.body
    try {
      const user = await User.create({
        name,
        email,
        password
      })

      res.status(200).json({ success: true, data: user })
    } catch (error) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ success: false, error: 'Email já cadastrado' })
      } else {
        res.status(500).json({ success: false, error: error.message })
      }
    }
  }

  static login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, digite um email e uma senha.'
      })
    }

    try {
      const user = await User.findOne({ email }).select('+password')

      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: 'Credenciais inválidas' })
      }

      const isMatch = await user.comparePassword(password)

      if (!isMatch) {
        return res
          .status(404)
          .json({ success: false, error: 'Credenciais inválidas' })
      }

      // get the user name
      const name = user.name

      res.status(200).json({ success: true, token: '1234', name })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }

  static registerBuyer = async (req, res) => {
    // @desc    Register a new user
    // @route   POST /api/v1/auth/register/buyer
    // @access  Public

    const { name, email, password, CNPJ } = req.body
    try {
      const user = await Buyer.create({
        name,
        email,
        password,
        CNPJ
      })

      res.status(200).json({ success: true, data: user })
    } catch (error) {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ success: false, error: 'Email já cadastrado' })
      } else {
        res.status(500).json({ success: false, error: error.message })
      }
    }
  }

  static loginBuyer = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Por favor, digite um email e uma senha.'
      })
    }

    try {
      const user = await Buyer.findOne({ email }).select('+password')

      if (!user) {
        return res
          .status(404)
          .json({ success: false, error: 'Credenciais inválidas' })
      }

      const isMatch = await user.comparePassword(password)

      if (!isMatch) {
        return res
          .status(404)
          .json({ success: false, error: 'Credenciais inválidas' })
      }

      // get the user name
      const name = user.name

      res.status(200).json({ success: true, name })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }
}

module.exports = authController

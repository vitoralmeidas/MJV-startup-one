const Admin = require('../models/Admin')

class adminController {
  static createAdmin = async (req, res) => {
    // @desc    Create a admin
    // @route   POST /api/v1/admins
    // @access  Private

    try {
      const admin = await Admin.create(req.body)
      res.status(201).json({ success: true, data: admin })
    } catch (error) {
      res.status(500).json({ success: false, error: error.message })
    }
  }
}

module.exports = adminController

const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const User = require('../models/User')

router.post('/', (req, res) => {
    const { email, password } = req.body

    //simple verification
    if( !email || !password){
        return res.status(400).json({msg: 'Please enter all fields'})
    }

    //check for existing user
    User.findOne({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User Does not exist'})


            // validate password
           bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

                res.json({
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                })
            })
        })
})

// router.get('/user', auth, (req, res) => {
//     User.findById(req.user.id)
//         .select('-password')
//         .then(user => res.json(user))
// })

module.exports = router
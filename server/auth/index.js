const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const passport = require('../passport')
const path = require('path')

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post('/login',
	function (req, res, next) {
		console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { userName, password, firstName, lastName, email } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': userName }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${userName}`
			})
		}
		const newUser = new User({
			'local.username': userName,
			'local.password': password,
			'firstName': firstName,
			'lastName': lastName,
			'email': email
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

router.post("/update-newUser", (req, res) => {
	User.findByIdAndUpdate(req.user._id, { $set: { newUser: false } }, { new: true }, (err, user) => {
		if (err) console.log(err);
		res.json(user);
	});
})

router.post("/set-passions", (req, res) => {
	console.log("USERS PASSIONS", req.body)

	User.findByIdAndUpdate(req.user._id, { $set: { passions: req.body } }, { new: true }, (err, user) => {
		if (err) console.log(err);
		res.json(user);
	})
})


router.put("/updateCommit", (req,res)=>{

	User.findById(req.user._id).then((user)=>{
		console.log("\n\n\n\n\n User data", user)
	})

	// var currentCommit;
	// if(req.body==="petition"){
	// 	currentCommit= "numOfPetitions"
	// }
	// if(req.body==="charity"){
	// currentCommit="numOfCharity"
	// }
	// if(req.body==="event"){
	// currentCommit="numOfEvents"
	// }
	// if(req.body==="contact"){
	// currentCommit="numOfContacts"
	// }
	// User.findByIdAndUpdate(req.user._id, { $set: { currentCommit: +1 } }, { new: true }, (err, user) => {
	// 	if (err) console.log(err);
	// 	res.json(user);
	// })
	
})




router.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../build/index.html'), function (err) {
		if (err) {
			res.status(500).send(err)
		}
	})
})

module.exports = router

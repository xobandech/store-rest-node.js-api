const express = require('express')

const router = express.Router()

router.route("/api/v1/products").get().post()

router.route("/api/v1/products/:id")
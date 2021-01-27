const express = require('express')
const messageRoute = require('./message-route.js')

const router = express.Router()

const applyRoutes = router => routes => routes.map(route => router.use(route.path, route.route))
const applyToRouter = applyRoutes(router)

const buildRoute = (path, route) => ({
    path,
    route
})

const baseRoutes = [
    buildRoute('/messages', messageRoute)
]

applyToRouter(baseRoutes)

module.exports = router

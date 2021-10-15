import express from 'express'
import { createProxyMiddleware as proxy } from 'http-proxy-middleware'
import { SERVICES } from '../../../config/server-config'
const router = express.Router()

router.use(
  '/shows/*',
  proxy({
    target: SERVICES.SHOW_SERVICE,
    changeOrigin: true,
    pathRewrite: (path, req) => path.replace(/\/shows\//, '/')
  })
)
// swagger redirects
// router.get('/:servicename/swagger', swaggerRedirects())

export default router

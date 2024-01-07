// import * as fs from 'fs'
// import * as path from 'path'
//
// import type { ViteDevServer } from 'vite'
// import commentRouter from './src/router/comment.router'
// import cors from 'cors'
// import { createServer as createViteServer } from 'vite'
// import dotenv from 'dotenv'
// import express from 'express'
// import topicRouter from './src/router/topic.router'
// import helmet from 'helmet'

// dotenv.config()

// const isDev = () => process.env.NODE_ENV === 'development'

// async function startServer() {
// const app = express()
//
// app.use(express.json())
//
// app.use(helmet.contentSecurityPolicy())
// app.use(helmet.xssFilter())
//
// app.use('/api', topicRouter)
// app.use('/api', commentRouter)
//
// app.use(cors())
// const port = Number(process.env.SERVER_PORT) || 3001

// let vite: ViteDevServer | undefined
// const distPath = path.dirname(require.resolve('client/dist/index.html'))
// const srcPath = path.dirname(require.resolve('client/index.html'))
// const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')

// if (isDev()) {
//   vite = await createViteServer({
//     server: { middlewareMode: true },
//     root: srcPath,
//     appType: 'custom',
//   })
//
//   app.use(vite.middlewares)
// }

// app.get('/api', (_, res) => {
//   res.json('👋 Howdy from the server :)')
// })

// if (!isDev()) {
//   app.use('/assets', express.static(path.resolve(distPath, 'assets')))
// }
// app.use('*', async (req, res, next) => {
// const url = req.originalUrl

// try {
//   let template: string
//
//   if (!isDev()) {
//     template = fs.readFileSync(
//       path.resolve(distPath, 'index.html'),
//       'utf-8'
//     )
// } else {
//   template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
// template = await vite!.transformIndexHtml(url, template)
// }

// let render: () => Promise<string>

// if (!isDev()) {
// render = (await import(ssrClientPath)).render(url)
// } else {
// render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
//   .render
// }

// const appHtml = await render()
// eslint-disable-next-line
// const html = template.replace(`<!--ssr-outlet-->`, appHtml)

// res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
// } catch (e) {
//   if (isDev()) {
//     vite!.ssrFixStacktrace(e as Error)
//   }
//   next(e)
// }
// })

// app.listen(port, () => {
//   // eslint-disable-next-line no-console
//   console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
// })
// }
//
// startServer()

import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express } from 'express'
import errorHandler from '~/middleware/errorHandler'
import morganMiddleware from '~/middleware/morganMiddleware'
import router from '~/routes'
import Logger from './middleware/logger'
dotenv.config()
const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Pretty print json
app.set('json spaces', 4)

// Cors
app.use(
    cors({
        origin: '*',
    })
)

// Logger
app.use(morganMiddleware)

app.use(router)

app.listen(port, () => {
    Logger.info(`[server]: Server is running at http://localhost:${port}`)
})

// ErrorHandler
app.use(errorHandler)

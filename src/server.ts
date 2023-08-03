import e from 'express'
import { Database } from './database'
import * as path from 'path'

const app = e()
const database = new Database()
const service = new

const api = e.Router()

app.use('/doc', e.static(path.join(__dirname, '..','static', 'doc')))
app.use('/api', api)



api.get('/List', (req, res)=>{
    await.
})

app.listen(3000, () => {
    database.connect().then(() =>  {
        console.log('Service listening on port 3000')
    })
})
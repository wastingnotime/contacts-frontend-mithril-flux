import m from 'mithril'
import { GET_ALL_CONTACTS, CREATE_CONTACT, UPDATE_CONTACT, GET_CONTACT, DELETE_CONTACT } from './actionsTypes'

const URL_BASE = '/api/contacts'
const isProduction = process.env.NODE_ENV === 'production'

export default function(dispatcher) {
    const store = this

    store.list = []
    store.current = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
    }

    store.dispatcher = dispatcher

    store.dispatchToken = dispatcher.register(action => {
        if (!isProduction)
            console.log(`[dispatch]: (${JSON.stringify(action)})`)

        switch (action.type) {
            case CREATE_CONTACT:
                call({ method: 'POST', url: URL_BASE, body: action.payload, extract: xhr => xhr.getResponseHeader('Location') })
                    .then(result => {
                        result = result.substring(result.lastIndexOf('/') + 1)
                        store.current.id = result
                        store.list.push(store.current)
                        store.current = {}
                    })
                break
            case UPDATE_CONTACT:
                call({ method: 'PUT', url: URL_BASE + '/' + action.payload.id, body: action.payload })
                    .then(() => {
                        store.list[store.list.findIndex(c => c.id === action.payload.id)] = store.current
                        store.current = {}
                    })
                break
            case GET_CONTACT:
                call({ method: 'GET', url: URL_BASE + '/' + action.payload.id })
                    .then(result => store.current = result || {})
                break
            case DELETE_CONTACT:
                call({ method: 'DELETE', url: URL_BASE + '/' + action.payload.id })
                    .then(() => store.list.splice(store.list.findIndex(c => c.id === action.payload.id), 1))
                break
            case GET_ALL_CONTACTS:
                call({ method: 'GET', url: URL_BASE })
                    .then(result => store.list = result || [])
                break
            default:
                console.error(`[store]: (${action.type}) unkown action`)
        }
    })
    return store
}

const call = option => {
    let p = m.request(option)

    if (!isProduction) {
        p.then(result => {
            console.log('[response]', JSON.stringify(result))
            return result
        })
    }

    p.catch(e => console.error('[response]', JSON.stringify(e)))
    return p
}
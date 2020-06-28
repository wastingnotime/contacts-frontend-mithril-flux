import m from "mithril"
import actions from "./actionsTypes"

const URL_BASE = "/contacts"
const isProduction = process.env.NODE_ENV === 'production'

export default function(dispatcher) {
    const store = this

    store.list = []
    store.current = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
    }

    store.dispatcher = dispatcher

    store.dispatchToken = dispatcher.register(payload => {
        if (!isProduction)
            console.log(`[dispatch]: (${JSON.stringify(payload)})`)

        switch (payload.type) {
            case actions.CREATE_CONTACT:
                call({ method: "POST", url: URL_BASE, body: payload.contact, extract: xhr => xhr.getResponseHeader('Location') })
                    .then(result => {
                        result = result.substring(result.lastIndexOf('/') + 1)
                        store.current.id = result
                        store.list.push(store.current)
                        store.current = {}
                    })
                break
            case actions.UPDATE_CONTACT:
                call({ method: "PUT", url: URL_BASE + "/" + payload.contact.id, body: payload.contact })
                    .then(() => {
                        store.list[store.list.findIndex(c => c.id === payload.contact.id)] = store.current
                        store.current = {}
                    })
                break
            case actions.GET_CONTACT:
                call({ method: "GET", url: URL_BASE + "/" + payload.id })
                    .then(result => store.current = result || {})
                break
            case actions.DELETE_CONTACT:
                call({ method: "DELETE", url: URL_BASE + "/" + payload.id })
                    .then(() => store.list.splice(store.list.findIndex(c => c.id === payload.id), 1))
                break
            case actions.GET_ALL_CONTACTS:
                call({ method: "GET", url: URL_BASE })
                    .then(result => store.list = result || [])
                break
            default:
                console.error(`[store]: (${payload.type}) unkown action`)
        }
    })
    return store
}

const call = option => {
    let p = m.request(option)

    if (!isProduction) {
        p.then(result => {
            console.log("[response]", JSON.stringify(result))
            return result
        })
    }

    p.catch(e => console.error("[response]", JSON.stringify(e)))
    return p
}
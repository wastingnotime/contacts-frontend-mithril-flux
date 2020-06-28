import actionTypes from './actionsTypes'
import dispatcher from './dispatcher'

export default {
    getAllContacts() {
        dispatcher.dispatch({
            type: actionTypes.GET_ALL_CONTACTS
        })
    },
    createContact(contact) {
        dispatcher.dispatch({
            type: actionTypes.CREATE_CONTACT,
            contact
        })
    },
    updateContact(contact) {
        dispatcher.dispatch({
            type: actionTypes.UPDATE_CONTACT,
            contact
        })
    },
    getContact(id) {
        dispatcher.dispatch({
            type: actionTypes.GET_CONTACT,
            id,
        })
    },
    deleteContact(id) {
        dispatcher.dispatch({
            type: actionTypes.DELETE_CONTACT,
            id,
        })
    }
}
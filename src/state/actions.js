import { GET_ALL_CONTACTS, CREATE_CONTACT, UPDATE_CONTACT, GET_CONTACT, DELETE_CONTACT } from './actionsTypes'
import dispatcher from './dispatcher'

export const getAllContacts = () =>
    dispatcher.dispatch({
        type: GET_ALL_CONTACTS
    })
export const createContact = contact =>
    dispatcher.dispatch({
        type: CREATE_CONTACT,
        payload: contact
    })
export const updateContact = contact =>
    dispatcher.dispatch({
        type: UPDATE_CONTACT,
        payload: contact
    })
export const getContact = id =>
    dispatcher.dispatch({
        type: GET_CONTACT,
        payload: {id}
    })
export const deleteContact = id =>
    dispatcher.dispatch({
        type: DELETE_CONTACT,
        payload: {id}
    })
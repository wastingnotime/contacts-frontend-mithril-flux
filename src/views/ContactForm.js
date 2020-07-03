import m from 'mithril'
import { createContact, updateContact } from '../state/actions'

let current = {}

export default {
    view: v => {
        current = v.attrs.store.current

        return m('form', {
            onsubmit: e => {
                e.preventDefault()
                let action = (v.attrs.id === undefined) ? createContact : updateContact
                action(current)
                m.route.set('/')
            }
        }, [
            m('label.label', 'First name'),
            m('input.input[type=text][placeholder=First name]', {
                oninput: e => current.firstName = e.target.value,
                value: current.firstName
            }),
            m('label.label', 'Last name'),
            m('input.input[placeholder=Last name]', {
                oninput: e => current.lastName = e.target.value,
                value: current.lastName
            }),
            m('label.label', 'Phone Number'),
            m('input.input[placeholder=Phone Number]', {
                oninput: e => current.phoneNumber = e.target.value,
                value: current.phoneNumber
            }),
            m('button.button[type=submit]', 'Save')
        ])
    }
}
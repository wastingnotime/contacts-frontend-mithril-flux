import m from 'mithril'
import { deleteContact } from '../state/actions'

export default {
    view: v => m('.contact-list', v.attrs.store.list.map(contact =>
        m('o', [
            m(m.route.Link, { class: 'contact-list-item', href: '/edit/' + contact.id }, contact.firstName + ' ' + contact.lastName),
            m('a.button', { onclick: () => deleteContact(contact.id) }, 'X'),
        ])
    ))
}
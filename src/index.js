import "./style.css"
import m from "mithril"
import actions from "./state/actions"
import dispatcher from "./state/dispatcher"
import createStore from "./state/store"
import ContactList from "./views/ContactList"
import ContactForm from "./views/ContactForm"
import Layout from "./views/Layout"

const store = new createStore(dispatcher)

m.route(document.body, "/", {
    "/": {
        onmatch: actions.getAllContacts(),
        render: () => m(Layout, m(ContactList, { store }))
    },
    "/edit/:id": {
        render: v => m(Layout, m(ContactForm, { ...v.attrs, store }))
    },
    "/new": {
        render: v => m(Layout, m(ContactForm, { ...v.attrs, store }))
    }
})
import m from "mithril"
import actions from "../state/actions"

export default {
    view: v => m(".contact-list", v.attrs.store.list.map(o =>
        m("o", [
            m(m.route.Link, { class: 'contact-list-item', href: "/edit/" + o.id }, o.firstName + " " + o.lastName),
            m("a.button", { onclick: () => actions.deleteContact(o.id) }, "X"),
        ])
    ))
}
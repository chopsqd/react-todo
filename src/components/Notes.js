import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {AlertContext} from "../context/alert/alert-context";

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)

    return (
        <TransitionGroup component={"ul"} className="list-group">
            {
                notes.map(note => (
                    <CSSTransition
                        key={note.id}
                        classNames={"note"}
                        timeout={800}
                    >
                        <li className="list-group-item note">
                            <div>
                                <b>{note.title}</b>
                                <small>{note.date}</small>
                            </div>
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={async () => {
                                    await onRemove(note.id)
                                    alert.show('Заметка была удалена', 'warning')
                                }}
                            >
                                &times;
                            </button>
                        </li>
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    )
}
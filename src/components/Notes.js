import React, {useContext} from 'react'
import {AlertContext} from "../context/alert/alert-context";

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext)

    return (
        <ul className="list-group">
            {
                notes.map(note => (
                    <li
                        className="list-group-item note"
                        key={note.id}
                    >
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
                ))
            }
        </ul>
    )
}
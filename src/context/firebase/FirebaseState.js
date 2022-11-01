import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseContext} from "./firebase-context";
import {firebaseReducer} from "./firebase-reducer";

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)


    return (
        <FirebaseContext.Provider value={{

        }}>
            {children}
        </FirebaseContext.Provider>
    )
}
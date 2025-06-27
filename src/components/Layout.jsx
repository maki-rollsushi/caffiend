
import { useState } from "react"

import Authentication from "./Authentication"
import Modal from "./Modal"

export default function Layout(props){
    const {children} = props

    const [showModal, setShowModal] = useState(false)
    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-mug-hot"></i>
                <p>Sign Up Free!</p>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by 
            <a> MakiRoll</a><br/>Using the <a href ='https://www.fantacss.smoljames.com' target="_blank">
            FantaCSS</a> design library</p>
        </footer>
    )
    return (
        <>
            {showModal && (
            <Modal handleCloseModal = {() => {setShowModal(false)}}>
                <Authentication />
            </Modal>)}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}
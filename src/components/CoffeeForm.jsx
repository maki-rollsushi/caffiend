import {coffeeOptions} from "../utils"
import Authentication from "./Authentication"; 
import Modal from "./Modal"
import { useState } from "react"

export default function CoffeeForm(props)  {
    const { isAuth } = props
    const [showModal, setShowModal] = useState(false)
    const [selectedCoffee, setSelectedCoffee] = useState(null)
    const [coffeeTypes, setCoffeeTypes] = useState(false)
    const [cost, setCost] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)

    function submit(){
        if(!isAuth) {
            setShowModal(true)
            return
        }
    }

    return (
        <>
            {showModal && (
            <Modal handleCloseModal = {() => {setShowModal(false)}}>
                <Authentication />
            </Modal>)}
            <div className="section-header">
                <i className="fa-solid fa-pencil"/>
                <h2>Start Tracking Today</h2>
            </div>
            <h4>Select coffee type</h4>
            <div  className="coffee-grid">
                {coffeeOptions.slice(0,5).map((option,optionIndex)=> {
                    return (
                        <button onClick= {() => {
                            setSelectedCoffee(option.name)
                            setCoffeeTypes(false)
                        }}
                        className={"button-card " + (option.name === 
                        selectedCoffee ? ' coffee-button-selected' : ' '  )} key = {optionIndex}>
                            <h4>{option.name}</h4>
                            <p>{option.caffeine} mg</p>
                        </button>
                    )
                })}
                <button onClick= {() => {
                        setCoffeeTypes(true)
                        setSelectedCoffee(null)
                    }}
                    className={"button-card " + (coffeeTypes? ' coffee-button-selected' : ' '  )}>
                    <h4>Other</h4>
                    <p></p>
                </button>
            </div>
            {coffeeTypes&&(
                <select onChange={(e) => {
                    setSelectedCoffee(e.target.value)
                }} id="coffee-list" name="coffee-list">
                <option value={null}> Select Type </option>
                {coffeeOptions.map((option, optionIndex) => {
                    return (
                        <option value={option.name} key={optionIndex}>
                            {option.name} ({option.caffeine}mg) 
                        </option>
                    )
                })}
            </select>)}
            <h4>Add the cost (₱)</h4>
            <input className="w-full" type="number" value= {cost} onChange={(e) => {
                setCost(e.target.value)
            }}/>
            <h4>Time since consumption</h4>
            <div className="time-entry">
                <div>
                    <h6>Hours</h6>
                    <select onChange={(e) => {
                        setHour(e.target.value)
                    }}id="hours-select">
                        {[0,1,2,3,4,5,6,7,8,9,10,11,12,
                        13,14,15,16,17,18,19,20,21,22,23,23].map((hour, hourIndex) => {
                            return (
                                <option key={hourIndex} value={hour}>{hour}</option>
                            )
                        })}

                    </select>
                </div>
                <div>
                    <h6>Mins</h6>
                    <select onChange={(e)=>{
                        setMinute(e.target.value)
                    }}id="mins-select" >
                        {[0, 5, 10, 20, 30, 40, 50].map((min, minIndex) => {
                            return (
                                <option key={minIndex} value={min}>{min}</option>
                            )
                        })}

                    </select>
                </div>
            </div>
            <button
            onClick={submit}
            disabled={
                !selectedCoffee || // nothing selected
                selectedCoffee === '' || // empty string
                selectedCoffee === 'Select Type' // fallback if user hasn't picked anything
            }
            >
            <p>Add Entry</p>
            </button>

        </>
    )
}
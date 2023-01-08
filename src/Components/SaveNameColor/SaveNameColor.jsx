import React, {useState} from "react";

import './SaveNameColor.css'

const SaveNameColor = ({colorBg,setColorBg, colorSave, setColorSave}) => {
const [error, setError] = useState('')
const savePickColor = (e) => {
    e.preventDefault()
    colorBg.name !== '' 
    ? setColorSave ([...colorSave,colorBg]) 
    : setError ('insert name')
}
    return(
        <form >
            <label className="title">Name</label>
            <div>
            <input type="text" name="name-color" id="name-color" placeholder={error ||"Website color scheme"} value={colorBg.name} onChange={e => setColorBg({name: e.target.value, colors: colorBg.colors })}/>
            <button  onClick={savePickColor}>+</button>
            </div>
        </form>
    )
}
export default SaveNameColor

//     const [contentColor,setContentColor] = useState(false)
//     const [saveColorPalette, setSaveColorPalette] = useState()
//     const saveColorPaletteName = (e) =>{
//         e.preventDefault()
//         if(e.target.value !== ""){
//         setContentColor(true)
//         setSaveColorPalette(e.target.value)
//         }else{
//         setContentColor(false)
//     }
// }
//     const savePickColor = (e) => {
//         prop.sendColors(saveColorPalette)
//         setContentColor(false)
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         e.target.reset()
//         setContentColor(false)
//         setSaveColorPalette()
//     }
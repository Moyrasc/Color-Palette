import React from "react";
import styles from './styles.module.css'

const CircleColor = ({colorBg, colorSelect, setColorSelect}) => {
const handlePickColor = (i) => {
setColorSelect(i)
}
    return (
        <div className={styles.circleColor}>
        <ul>
            {
                colorBg.colors.map((color,i)=>{
                    return(
                        <li key={i} onClick={()=>handlePickColor(i)}>
                            <div className={colorSelect === i ? styles.circleActive :styles.circle} style={{ background: `${color}` }}> {color === '' ? '+' : ''} </div>
                        </li>
                    )
                })
            }
        </ul>
        </div>
    )
}
export default CircleColor
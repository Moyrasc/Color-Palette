import React from "react";
import styles from './styles.module.css'
import trash from './trash.svg'

const SaveColor = ({colorSave, setColorSave,setFav}) => {

    const deleteColorFav = (i) => {
        const newColor = colorSave.filter((fav, index)=> index !==i)
        setColorSave(newColor)
    }
    const handleColorFav = (fav) => {
        setFav(fav)
    }
    return(

        <div className={styles.savedColor}>
            <h2> Saved Palette</h2>
            <ul>
        {
        colorSave.map((fav, i) => {
            return (
            <li key={i} onClick={() => handleColorFav(fav)}>
            <div className={styles.title}>
                <p>{fav.name}</p>
                <button onClick={() => deleteColorFav(i)}>
                <img src={trash} alt="icon delete" />
                </button>
            </div>
             <div className={styles.colorsFavs}>
                <ol>
                  {
                    fav.colors.map((favColor, i) => {
                      return (
                        <li key={i}>
                          <div className={styles.color} style={{ background: `${favColor}` }}></div>
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            
            </li>
            )
        })
        }
    </ul>
        </div>
    )
}

export default SaveColor
import { useState, useEffect } from 'react';
import {  CompactPicker } from 'react-color';
import './App.css';
import CircleColor from './Components/CircleColor/CircleColor';
import Header from './Components/Header/Header';
import SaveColor from './Components/SaveColor/SaveColor';
import SaveNameColor from './Components/SaveNameColor/SaveNameColor';


function App() {

  const [colorSelect, setColorSelect] = useState()
  const [colorSave, setColorSave] = useState(JSON.parse(localStorage.getItem('colorsSave')|| '[]'))
  const [colorBg, setColorBg] = useState({name: '', colors: ['','','','','']})
  const [fav, setFav] = useState()

  useEffect(() => {
    localStorage.setItem('colorsSave',JSON.stringify(colorSave))
  }, [colorSave])
  
  useEffect(()=>{
    if(fav) {
      setColorSave(setFav)
    }
  },[fav])

  const handlePickerColor = (color) => {
  const newPalette = [...colorBg.colors]
  newPalette[colorSelect] = color.hex
  setColorBg({name:colorBg.name, colors: newPalette})
}
  return (
    <div className="App">
      <Header/>
      <CircleColor colorBg={colorBg} setColorSelect={setColorSelect} colorSelect={colorSelect}/>
    <div className='container-picker'>
      <CompactPicker onChangeComplete={handlePickerColor} />
      <SaveNameColor colorBg={colorBg} setColorBg={setColorBg} colorSave={colorSave} setColorSave={setColorSave}/>
    </div>
      
 
      <SaveColor colorSave={colorSave} setColorSave={setColorSave} setFav={setFav}/>
    
    </div>
  );
}

export default App;
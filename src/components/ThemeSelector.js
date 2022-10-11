import { useThemeContext } from "../hooks/useThemeContext"
import lightmode from "../assets/lightmode.svg"

// styles 
import "./ThemeSelector.css"

const themeColor = ["purple", "green", "#383f80"]

const ThemeSelector = () => {
    const { color, mode, changeColor, changeMode } = useThemeContext()
  return (
    <div className="themeselector">
      <div className={`mode ${mode}`}>
        <img 
        src={lightmode} 
        alt="light-dark mode" 
        width='30px'
        onClick={() => changeMode(mode === 'light' ? 'dark' : 'light')} 
        />
      </div>

      <div style={{marginLeft: 'auto'}}>
        {themeColor.map((color) => (
              <div key={color} className="colorTheme"
              style={{background: color}}
              onClick={() => changeColor(color)}
              />
          ))}
      </div>
    </div>
  )
}

export default ThemeSelector

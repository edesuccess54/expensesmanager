import "./Header.css"
import { Link } from 'react-router-dom';
import { useThemeContext } from "../hooks/useThemeContext";


export default function Header() {
  const { color } = useThemeContext()
  return (
    <div className='logo-container' style={{background: color}}>
        <img src="https://natujenge.ke/assets/images/logo-wordmark.svg" alt="logo" />
    </div>
  )
}

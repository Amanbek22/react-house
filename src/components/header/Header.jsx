import css from "./Header.module.css";
import { Link } from "react-router-dom";



function Header() {
  return (
    <div className={css.wrapper}> 
        <Link to="/">
          <h1>LOGO</h1>
        </Link>   

        <nav>
            <a className={css.link} href="#">О нас</a>     
            <a className={css.link} href="#">Контакты</a>   
            <Link className={css.link} to="/login">Войти</Link>
        </nav>
    </div>
  )
}

export default Header;
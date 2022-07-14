import css from "./Header.module.css";


function Header() {
  return (
    <div className={css.wrapper}>    
        <h1>LOGO</h1>
        
        <nav>
            <a className={css.link} href="#">О нас</a>     
            <a className={css.link} href="#">Контакты</a>     
            <a className={css.link} href="#">Войти</a>     
        </nav>
    </div>
  )
}

export default Header;
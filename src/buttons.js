import './Css/buttons.css'

export function HeadButton({href,theme, text}){
    return(
        <a className={theme} href={href}>{text}</a>
    )
}
export function SearchButton({searchButtonTheme}){
    return(
        <button className={searchButtonTheme} type='submit'></button>
    );
}
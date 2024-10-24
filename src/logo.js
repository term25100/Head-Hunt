import './Css/logo.css'

export function HeadLogo({themeLogo, themeSpan}){
    return(
        <a href='index.html' className={themeLogo}>
            <span className={themeSpan}>Head</span>
            Hunt
        </a>
    )
}
import './themeToggle.css'
export function ToggleTheme({check,change,theme}){
    return(
        <input className={theme} type="checkbox" checked={check} onChange={change} />
    );
}
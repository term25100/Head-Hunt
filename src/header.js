import './header.css';
import './buttons.js';
import './logo.js';
import { HeadButton } from './buttons.js';
import { HeadLogo } from './logo.js';
import { SearchField } from './search';
export function HeadHeader({ theme, onCheckboxChange }){
    const headerClass=theme ? 'glowingHeader-light' : 'glowingHeader';
    const buttonsClass=theme? 'glowing-light' : 'glowing';
    const logoClass=theme ? 'logo' : 'logo';
    const logoSpan=theme ? 'logoSpan' : 'logoSpan';
    const searchContainer= theme ? 'searchContainer-light' : 'searchContainer';
    const searchTheme= theme ? 'search-light' : 'search';
    const searchImage= theme ? 'searchButton-light' : 'searchButton';
    return(
        <header className={headerClass}>
            <HeadLogo themeLogo={logoClass} themeSpan={logoSpan}/>
            <SearchField container={searchContainer} search={searchTheme} btnTheme={searchImage}/>
            <HeadButton theme={buttonsClass} href="news.html" text="Новости"/>
            <HeadButton theme={buttonsClass} href="workers.html" text="Для рабочих"/>
            <HeadButton theme={buttonsClass} href="employeers.html" text="Для работодателей"/>
            <HeadButton theme={buttonsClass} href="privateRoom.html" text="Личный кабинет"/>
            <input type="checkbox" checked={theme} onChange={onCheckboxChange} /> 
        </header>
    );
}
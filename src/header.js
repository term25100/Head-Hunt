import './Css/header.css';
import './buttons.js';
import './logo.js';
import { HeadButton } from './buttons.js';
import { HeadLogo } from './logo.js';
import { SearchField } from './search';
import { ToggleTheme } from './themeToggle';
export function HeadHeader({ theme, onCheckboxChange }){
    const headerClass=theme ? 'glowingHeader-light' : 'glowingHeader';
    const buttonsClass=theme? 'glowing-light' : 'glowing';
    const logoClass=theme ? 'logo-light' : 'logo';
    const logoSpan=theme ? 'logoSpan-light' : 'logoSpan';
    const searchContainer= theme ? 'searchContainer-light' : 'searchContainer';
    const searchTheme= theme ? 'search-light' : 'search';
    const searchImage= theme ? 'searchButton-light' : 'searchButton';
    const toggleTheme= theme ? 'toggle-light' : 'toggle';
    return(
        <header className={headerClass}>
            <HeadLogo themeLogo={logoClass} themeSpan={logoSpan}/>
            <SearchField container={searchContainer} search={searchTheme} btnTheme={searchImage}/>
            <nav className='navigation'>
                <HeadButton theme={buttonsClass} href="news.html" text="Мое резюме"/>
                <HeadButton theme={buttonsClass} href="workers.html" text="Мои отклики"/>
                <HeadButton theme={buttonsClass} href="employeers.html" text="Мои вакансии"/>
                <HeadButton theme={buttonsClass} href="privateRoom.html" text="Профиль"/> 
            </nav>
            <ToggleTheme theme={toggleTheme} check={theme} change={onCheckboxChange}/>
        </header>
    );
}
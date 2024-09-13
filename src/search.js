import './search.css'
import './buttons'
import { SearchButton } from './buttons';
export function SearchField({container,search, btnTheme}){
    return(
        <form>
            <div className={container}>
                <input className={search} type='text' placeholder='Поиск вакансий'></input>
                <SearchButton searchButtonTheme={btnTheme}/>
            </div>
        </form>
    );
}
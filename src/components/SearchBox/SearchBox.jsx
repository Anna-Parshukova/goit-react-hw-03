import css from './SearchBox.module.css'

export default function SearchBox({value, onFilter}) {
   

    return (
        <div className={css.searhForm}>
            <p>Find contact by name</p>
            <input type="text" value={value} onChange={(e) => onFilter(e.target.value)} />
            
        </div>
    )
}
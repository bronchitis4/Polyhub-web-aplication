import './search-input.css';

const SearchInput = () => {
    return (
        <div className="search-input-container">
        <input
            type="text"
            placeholder="Пошук..."
            className="search-input"
        />
        </div>
    );
}

export default SearchInput;
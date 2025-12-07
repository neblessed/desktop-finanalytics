import "./FeedSearch.css";

function FeedSearch() {
    return (
        <div className="feed__search">
            <input
                className="feed__search__field"
                placeholder="Поиск операции"
            />
            <img className="feed__search__cross" src="./Cross.svg" />
        </div>
    );
}

export default FeedSearch;

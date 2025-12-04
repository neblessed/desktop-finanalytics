import "./Feed.css";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <span className="prev">Прошлый</span>
                <div className="feed__header__categories">
                    <div className="feed__header__item">Траты</div>
                    <div className="feed__header__item">Доходы</div>
                </div>
                <span className="next">Следующий</span>
            </div>
            <div className="feed__search">
                <input
                    className="feed__search__field"
                    placeholder="Поиск операции"
                />
                <span className="feed__search__cross">X</span>
            </div>
            <div className="feed__items">
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </div>
        </div>
    );
}

export default Feed;

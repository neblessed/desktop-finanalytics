import "./FeedHeader.css";

function FeedHeader() {
    return (
        <div className="feed__header">
            <img className="prev" src="./ArrowLeft.svg" alt="<-" />
            <div className="feed__header__categories">
                <div className="feed__header__item">Траты</div>
                <div className="feed__header__item">Доходы</div>
            </div>
            <img className="next" src="./ArrowRight.svg" alt="->" />
        </div>
    );
}

export default FeedHeader;

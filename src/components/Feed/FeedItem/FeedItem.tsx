import "./FeedItem.css";
import type { FeedItemPropType } from "./types/FeedItemPropType";

function FeedItem({
    category_logo,
    category_name,
    category_sum,
}: FeedItemPropType) {
    return (
        <div className="feed_item">
            <div className="feed_item_appearance">
                <img
                    className="feed_item_avatar"
                    alt="item"
                    src={category_logo}
                />
                <span className="feed_item_name">{category_name}</span>
            </div>
            <div className="feed_item_operation">
                <span className="feed_item_sum">{category_sum}</span>
                <span className="feed_item_currency">$</span>
            </div>
            <img className="feed_item_cross" src="./Cross.svg" alt="X" />
        </div>
    );
}

export default FeedItem;

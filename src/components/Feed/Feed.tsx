import "./Feed.css";
import FeedHeader from "./FeedHeader/FeedHeader";
import FeedItem from "./FeedItem/FeedItem";
import FeedSearch from "./FeedSearch/FeedSearch";
import type { FeedPropType } from "./types/FeedPropType";

function Feed({ categories }: FeedPropType) {
    return (
        <div className="feed">
            <FeedHeader />
            <FeedSearch />
            <div className="feed__items">
                {categories.map((category) => (
                    <FeedItem
                        category_logo={category.category_logo}
                        category_name={category.category_name}
                        category_sum={category.category_sum}
                    />
                ))}
            </div>
        </div>
    );
}

export default Feed;

import "./Menu.css";

function Menu() {
    return (
        <div className="menu">
            <img
                className="menu_item selected"
                src="./menu/home.svg"
                alt="home"
            />
            <img
                className="menu_item"
                src="./menu/analytics.svg"
                alt="analytics"
            />
            <img
                className="menu_item"
                src="./menu/expenses.svg"
                alt="expenses"
            />
            <img
                className="menu_item"
                src="./menu/categories.svg"
                alt="categories"
            />
            <img className="menu_item" src="./menu/profile.svg" alt="profile" />
        </div>
    );
}

export default Menu;

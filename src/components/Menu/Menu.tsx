import { useState } from "react";
import "./Menu.css";
import type { MenuItems } from "../../types/MenuItems";

type MenuPropType = {
    onMenuItemClick: any;
};

function Menu({ onMenuItemClick }: MenuPropType) {
    const [selected, setSelected] = useState("home");

    const clickOnItem = (item: MenuItems) => {
        onMenuItemClick(item);
        setSelected(item);
    };

    return (
        <div className="menu">
            <img
                className={`menu_item ${selected === "home" ? "selected" : ""}`}
                src="./menu/home.svg"
                alt="home"
                onClick={() => clickOnItem("home")}
            />
            <img
                className={`menu_item ${
                    selected === "analytics" ? "selected" : ""
                }`}
                src="./menu/analytics.svg"
                alt="analytics"
                onClick={() => clickOnItem("analytics")}
            />
            <img
                className={`menu_item ${
                    selected === "expenses" ? "selected" : ""
                }`}
                src="./menu/expenses.svg"
                alt="expenses"
                onClick={() => clickOnItem("expenses")}
            />
            <img
                className={`menu_item ${
                    selected === "categories" ? "selected" : ""
                }`}
                src="./menu/categories.svg"
                alt="categories"
                onClick={() => clickOnItem("categories")}
            />
            <img
                className={`menu_item ${
                    selected === "profile" ? "selected" : ""
                }`}
                src="./menu/profile.svg"
                alt="profile"
                onClick={() => clickOnItem("profile")}
            />
        </div>
    );
}

export default Menu;

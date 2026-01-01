import "./Menu.css";
import type { MenuItems } from "../../types/MenuItems";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setMenu } from "../../store/slices/menu.slice";

function Menu() {
    const dispatch = useAppDispatch();
    const menu = useAppSelector((store) => store.menuReducer);

    const clickOnItem = (item: MenuItems) => {
        dispatch(setMenu(item));
    };

    return (
        <div className="menu">
            <img
                className={`menu_item ${menu === "home" ? "selected" : ""}`}
                src="./menu/home.svg"
                alt="home"
                onClick={() => clickOnItem("home")}
            />
            <img
                className={`menu_item ${
                    menu === "analytics" ? "selected" : ""
                }`}
                src="./menu/analytics.svg"
                alt="analytics"
                onClick={() => clickOnItem("analytics")}
            />
            <img
                className={`menu_item ${menu === "expenses" ? "selected" : ""}`}
                src="./menu/expenses.svg"
                alt="expenses"
                onClick={() => clickOnItem("expenses")}
            />
            <img
                className={`menu_item ${
                    menu === "categories" ? "selected" : ""
                }`}
                src="./menu/categories.svg"
                alt="categories"
                onClick={() => clickOnItem("categories")}
            />
            <img
                className={`menu_item ${menu === "profile" ? "selected" : ""}`}
                src="./menu/profile.svg"
                alt="profile"
                onClick={() => clickOnItem("profile")}
            />
        </div>
    );
}

export default Menu;

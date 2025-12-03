import "./MainMenu.css";
import SumField from "./SumField/SumField";

function MainMenu() {
    return (
        <div className="main_menu">
            <SumField value="112387" currency="RUB" />
            <div className="main_menu__controls">
                <img className="main_menu__item" src="./Plus.svg" />
                <img className="main_menu__item" src="./Calendar.svg" />
                <img
                    className="main_menu__item"
                    src="./SettingsHorizontal.svg"
                />
            </div>
        </div>
    );
}

export default MainMenu;

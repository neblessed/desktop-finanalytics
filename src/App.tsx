import "./App.css";
import Feed from "./components/Feed/Feed";
import MainMenu from "./components/MainMenu/MainMenu";

const categories = [
    {
        category_logo: "./categories/coffee.svg",
        category_name: "Кофейни",
        category_sum: 3730,
    },
    {
        category_logo: "./categories/fastfood.svg",
        category_name: "Фастфуд",
        category_sum: 7113,
    },
    {
        category_logo: "./categories/medicine.svg",
        category_name: "Здоровье",
        category_sum: 7000,
    },
    {
        category_logo: "./categories/transit.svg",
        category_name: "Переводы",
        category_sum: 1500,
    },
    {
        category_logo: "./categories/invest.svg",
        category_name: "Инвестиции",
        category_sum: 73000,
    },
];

function App() {
    return (
        <>
            <Feed categories={categories} />
            <MainMenu />
        </>
    );
}

export default App;

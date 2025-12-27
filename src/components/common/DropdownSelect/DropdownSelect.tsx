import { useState } from "react";
import "./DropdownSelect.css";
import type { Category } from "../../../types/CategoryType";

type DropdownSelectPropType = {
    label?: string;
    placeholder?: string;
    options: string[] | Category[];
    category: string;
    handleCategoryChange: any;
};

// Гард для проверки, является ли элемент Category
const isCategory = (item: string | Category): item is Category => {
    return (
        typeof item === "object" &&
        item !== null &&
        "name" in item &&
        "iconPath" in item
    );
};

const getItemName = (item: string | Category): string => {
    return isCategory(item) ? item.name : item;
};

// Функция для фильтрации
const filterOptions = (
    options: string[] | Category[],
    searchQuery: string
): (string | Category)[] => {
    return options.filter((item) => {
        const name = getItemName(item);
        return name.toLowerCase().includes(searchQuery.toLowerCase());
    });
};

function DropdownSelect({
    label,
    placeholder = "Select",
    options,
    category,
    handleCategoryChange,
}: DropdownSelectPropType) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    // const [category, setCategory] = useState<null | string>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredOptions = filterOptions(options, searchQuery);

    const handleItemClick = (item: string | Category) => {
        const name = getItemName(item);

        handleCategoryChange(name);
        setSearchQuery("");
        setDropdownVisible(false);
    };

    return (
        <div className="dropdown_block">
            <div className="dropdown_field">
                {label && (
                    <label className="dropdown_field_label">{label}</label>
                )}
                <div
                    className="dropdown_field_area"
                    onClick={() => setDropdownVisible((prev) => !prev)}
                >
                    <span
                        className={category ? "" : "dropdown_field_placeholder"}
                    >
                        {category ? category : placeholder}
                    </span>
                    <img
                        className="dropdown_icon"
                        src={
                            dropdownVisible
                                ? "./chevron_up.svg"
                                : "./chevron_down.svg"
                        }
                        alt={dropdownVisible ? "Collapse" : "Expand"}
                    />
                </div>
            </div>
            {dropdownVisible && (
                <div className="dropdown">
                    <input
                        className="dropdown_search"
                        placeholder="Search for categories"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                    <div className="dropdown_options">
                        {filteredOptions.map((item, index) => {
                            if (isCategory(item)) {
                                return (
                                    <div
                                        key={`category-${item.name}-${index}`}
                                        className="option_category"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <img
                                            className="option_category_icon"
                                            src={item.iconPath}
                                            alt={item.name}
                                        />
                                        <span className="option_category_name">
                                            {item.name}
                                        </span>
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        key={`string-${item}-${index}`}
                                        className="dropdown_text_option"
                                        onClick={() => handleItemClick(item)}
                                    >
                                        {item}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DropdownSelect;

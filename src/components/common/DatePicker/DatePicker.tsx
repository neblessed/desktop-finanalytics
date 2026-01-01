import { useState } from "react";
import "./DatePicker.css";
import { getMonthName } from "./utils/getMonthName";

type DatePickerPropType = {
    label?: string;
    handleDateChange: any;
};

function DatePicker({ label = "Date", handleDateChange }: DatePickerPropType) {
    const currentDate = new Date();
    const [calendarVisible, setCalendarVisible] = useState(false);

    const [day, setDay] = useState<number>(currentDate.getDate());
    const [month, setMonth] = useState(currentDate.getMonth() + 1);
    const [year, setYear] = useState(currentDate.getFullYear());

    const monthSwitchHandler = (operation: "minus" | "plus") => {
        setDay(1);

        if (operation === "minus") {
            if (month === 1) {
                setMonth(12);
                setYear((prev) => prev - 1);
            } else {
                setMonth((prev) => prev - 1);
            }
        } else {
            if (month === 12) {
                setMonth(1);
                setYear((prev) => prev + 1);
            } else {
                setMonth((prev) => prev + 1);
            }
        }
        console.log(month, " | ", year);
    };

    const mostUsableButtonClickHandler = (
        type: "today" | "yesterday" | "2 days ago"
    ) => {
        switch (type) {
            case "today": {
                setDay(currentDate.getDate());
                break;
            }
            case "yesterday": {
                setDay(currentDate.getDate() - 1);
                break;
            }
            case "2 days ago": {
                setDay(currentDate.getDate() - 2);
                break;
            }
        }

        setMonth(currentDate.getMonth() + 1);
        setYear(currentDate.getFullYear());
        setCalendarVisible(false);
    };

    handleDateChange(`${day}/${month}/${year}`);

    return (
        <div className="date_picker">
            <div className="datepicker_field">
                {label && (
                    <label className="datepicker_field_label">{label}</label>
                )}
                <div
                    className="datepicker_field_area"
                    onClick={() => setCalendarVisible((prev) => !prev)}
                >
                    <span>{`${day} ${getMonthName(month)}${
                        year === currentDate.getFullYear() ? "" : ` – ${year}`
                    }`}</span>
                    <img className="calendar_icon" src="./calendar.svg" />
                </div>
            </div>
            {calendarVisible && (
                <div className="calendar">
                    <div className="calendar__head">
                        <img
                            className="arrow"
                            alt="<"
                            src="./arrow-left.svg"
                            onClick={() => monthSwitchHandler("minus")}
                        />
                        <span className="calendar__month_year_current">
                            {getMonthName(month)} {year}
                        </span>
                        <img
                            className="arrow"
                            alt=">"
                            src="./arrow-right.svg"
                            onClick={() => monthSwitchHandler("plus")}
                        />
                    </div>
                    <div className="calendar_most_usable">
                        <button
                            className="calendar_button"
                            onClick={(e) => {
                                e.preventDefault();
                                mostUsableButtonClickHandler("today");
                            }}
                        >
                            Today
                        </button>
                        <button
                            className="calendar_button"
                            onClick={(e) => {
                                e.preventDefault();
                                mostUsableButtonClickHandler("yesterday");
                            }}
                        >
                            Yesterday
                        </button>
                        <button
                            className="calendar_button"
                            onClick={(e) => {
                                e.preventDefault();
                                mostUsableButtonClickHandler("2 days ago");
                            }}
                        >
                            2 days ago
                        </button>
                    </div>
                    <div className="days">
                        {Array.from({ length: 31 }).map((_, index) => {
                            const current = index + 1;

                            return (
                                <button
                                    key={current}
                                    className={`calendar_day_button ${
                                        day === current ? "selected" : ""
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setDay(current);
                                        setCalendarVisible(false);
                                    }}
                                >
                                    {current}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default DatePicker;

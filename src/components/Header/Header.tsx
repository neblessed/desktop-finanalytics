import "./Header.css";

function Header() {
    // Определяем текущий период дня по времени
    const detectDayPeriod = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 && currentHour < 12) {
            return "Morning";
        } else if (currentHour >= 12 && currentHour < 18) {
            return "Day";
        } else if (currentHour >= 18 && currentHour < 22) {
            return "Evening";
        } else {
            return "Night";
        }
    };

    return (
        <div className="header">
            <div className="header_greetings">
                <span className="header_welcome">Hi, Welcome Back</span>
                <span className="header_welcome_day">
                    Good {detectDayPeriod()}
                </span>
            </div>
            <img
                className="notification_btn"
                src="./notification.svg"
                alt="🔔"
            />
        </div>
    );
}

export default Header;

export const formatBalance = (balance: number, currency: string) => {
    const formattedNumber = Math.abs(balance).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    if (balance < 0) {
        return `–${currency}${formattedNumber}`;
    } else {
        return `${currency}${formattedNumber}`;
    }
};

const financials = [
    {
        "id": 1,
        "customer": "King Authur",
        "amount": 160,
        "currency": "$",
        "service": ["Paypal"],
        "created_at": "United States"
    },
    {
        "id": 2,
        "customer": "King Authur",
        "amount": 100,
        "currency": "¥",
        "service": ["Paypal", "Bank"],
        "created_at": "United States"
    },
    {
        "id": 3,
        "customer": "Linda Maya",
        "amount": 500,
        "currency": "€",
        "service": ["Payoneer", "Bitcoin"],
        "created_at": "United States"
    },
    {
        "id": 4,
        "customer": "King Authur",
        "amount": 350,
        "currency": "$",
        "service": ["Paypal", "Bitcoin"],
        "created_at": "United States"
    }
]

const getFinancialList = () => {
    return financials;
}

module.exports = {
    getFinancialList,
}
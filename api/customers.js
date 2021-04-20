let customers = [
    {
        name: "King Authur",
        email: "king@gmail.com",
        phone: "+087337362",
        id: 1,
        address: "United States"
    }, {
        name: "William Tompson",
        email: "king@gmail.com",
        phone: "+33526233453",
        id: 2,
        address: "United Arab"
    }, {
        name: "Linda Maya",
        email: "linda@gmail.com",
        phone: "+12345587894",
        id: 3,
        address: "United Kingdom"
    }
]

const getCustomersList = () => {
    return customers;
}

const addCustomer = (customer) => {
    customer.id = customers.length + 1;
    customers.push(customer);
    return {id: customer.id}
}

const editCustomer = (customer) => {
    customers.map(item => {
        if (item.id == customer.id) {
            item = customer
        }
    })
    return customer;
}

const removeCustomer = (customer) => {
    const filtered = customers.filter(item => item.id != customer.id);
    customers = filtered;
    return filtered;
}

module.exports = {
    getCustomersList,
    addCustomer,
    editCustomer,
    removeCustomer
}
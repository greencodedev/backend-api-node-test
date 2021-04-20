const { getCustomersList, addCustomer, editCustomer, removeCustomer } = require('../api/customers');
const { getFinancialList } = require('../api/finance');

const appRouter = (app) => {    
    // route handlers
    app.get('/api/customers', (req, res) => {
        res.end(JSON.stringify(getCustomersList()));
    });

    app.put('/api/customer', (req, res) => {
        console.log("req => ", req.body);
        res.end(JSON.stringify(addCustomer(req.body.customer)));
    });

    app.post('/api/customer', (req, res) => {
        console.log("req => ", req.body);
        res.end(JSON.stringify(editCustomer(req.body.customer)));
    });

    app.delete('/api/customer', (req, res) => {
        console.log("req => ", req.body);
        res.end(JSON.stringify(removeCustomer(req.body.customer)));
    });

    app.get('/api/finance', (req, res) => {
        res.end(JSON.stringify(getFinancialList()));
    });
};

module.exports = appRouter;
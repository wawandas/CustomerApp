class CustomerService {

    constructor($http) {
        this.$http = $http;
        this.customerData = [];
    }

    fetchData(promise) {
        if (this.customerData.length) {
            promise.resolve();
            return;
        }

        this.$http
            .get(__dirname + 'src/customer.list.json')
            .then((response) => {
                this.customerData = response.data;
                promise.resolve();
            });
    }

    getCustomers() {
        return this.customerData;
    }

    getCustomerById(id) {
        id = parseInt(id);
        //debugger;
        return this.customerData.find(e => id === e.customerID);
    }

    getNewId() {
        let lastArrElement = this.customerData.slice(-1)[0] || {customerID: 0};
        let lastCustomerId = lastArrElement.customerID;

        return lastCustomerId + 1;
    }

    addCustomer(newCustomer) {
        this.customerData.push(newCustomer);
    }

    deleteCustomer(index) {
        this.customerData.splice(index,1);
    }
}

export {CustomerService};
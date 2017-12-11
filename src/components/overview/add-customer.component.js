export const AddCustomerComponent = {
	templateUrl: __dirname + 'src/components/overview/add-customer.html',
	controller: class AddCustomerComponent {
		constructor(CustomerService) {
			this.firstName = '';
			this.lastName = '';
			this.addMode = false;
			this.CustomerService = CustomerService;
		}

		changeMode() {
			this.addMode = true;
		}

		addCustomer() {
			const customerTpl = {
				"customerID": 0,
				"name": {
					"first": "",
					"last": ""
				},
				"birthday": "",
				"gender": "m",
				"lastContact": "",
				"customerLifetimeValue": 0
			};

			customerTpl.customerID = this.CustomerService.getNewId();
			customerTpl.name.first = this.firstName;
			customerTpl.name.last = this.lastName;

			this.CustomerService.addCustomer(customerTpl);
		}
	}
}
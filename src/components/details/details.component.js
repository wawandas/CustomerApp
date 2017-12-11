export const DetailsComponent = {
	templateUrl: __dirname + 'src/components/details/details.html',
	controller: class DetailsComponent {
		constructor(CustomerService, $routeParams) {
			this.CustomerService = CustomerService;
			this.customerId = ($routeParams.customerId.match(/\d+/) || [])[0];
			this.currentCustomer = CustomerService.getCustomerById(this.customerId);
			this.editMode = true;
		}

		letEdit() {
			this.editMode = !this.editMode;
		}

		save() {
			console.log(this.CustomerService.getCustomers());
			console.log(this.currentCustomer);
			this.letEdit();
			console.log('saved')
		}
	}
}
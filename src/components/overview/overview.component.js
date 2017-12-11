export const OverviewComponent = {
	templateUrl: __dirname + 'src/components/overview/overview.html',
	controller: class OverviewComponent {
		constructor(CustomerService) {
			this.listCustomers = CustomerService.getCustomers();
			this.CustomerService = CustomerService;
			this.deleteCustomer = CustomerService.deleteCustomer;
		}
	}
}
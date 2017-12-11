export const NavigationComponent = {
	templateUrl: __dirname + 'src/components/navigation/navigation.html',
	controller: class NavigationComponent {
		constructor($location) {
			this.isOverview = $location.$$url.indexOf('overview') > -1;
			this.isDetails = $location.$$url.indexOf('details') > -1;
		}
	}
}
angular.module( `nodeThree`, [ `ui.router` ] )

.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state( `home`, {
			url: `/`,
			templateUrl: `src/home/home.html`
		} )
		.state( `profile`, {
			url: `/profile`,
			templateUrl: `src/profile/profile.html`
		} );

	$urlRouterProvider.otherwise( `/` );
} );
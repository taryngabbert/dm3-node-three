angular.module( `nodeThree`, [ `ui.router` ] )

.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state( `home`, {
			url: `/`,
			templateUrl: `src/home/home.html`,
			controller: `homeCtrl`
		} )
		.state( `profile`, {
			url: `/profile`,
			templateUrl: `src/profile/profile.html`
		} );

	$urlRouterProvider.otherwise( `/` );
} )

.constant('ref',{
	url: "http://localhost:8020"
});

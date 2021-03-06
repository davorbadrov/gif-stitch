define([
	'backbone',
	'jqbase64',
	'views/InputView',
	'views/GifCollectionView',
	'GifWorker'
], function ( Backbone, $, InputView, GifCollectionView, GifWorker ) {
	var app = {
		views : {},
		init : function () {
			this.views.input = new InputView().render();
			this.views.gitList = new GifCollectionView( { collection : new Backbone.Collection() } );
			this.gifWorker = GifWorker.init();
			this.gifWorker.on( 'error', function ( e ) {
				console.log(e);
				alert( e );
			} );
		}
	};
	return app;
} );
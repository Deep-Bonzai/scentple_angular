'use strict';

function MainController($http) {
	const ctrl = this;
	ctrl.indexClicked = true;
	ctrl.selectionPageClicked = false;
	ctrl.printCard = false;
	ctrl.contentsJSON = {};
	ctrl.pickAPage = 'front_page.html';
	ctrl.selectionPage = 'selection_page.html';

	ctrl.pageOptions = ['front_page.html', 'selection_page.html', 'sample_card.html', 'logo_choices.html']
	ctrl.selection = ctrl.pageOptions[0];

	function goToIndex () {
		ctrl.indexClicked = true;
		ctrl.selectionPageClicked = false;
		ctrl.printCard = false;
	}

	function goToSelectionPage () {
		ctrl.indexClicked = false;
		ctrl.selectionPageClicked = true;
	}

	function sampleFragranceCommercial () {
		ctrl.indexClicked = false;
		ctrl.printCard = true;
	}

	function getJSON() {
		$http.get("fragrances.json")
		.success(function(data) {
			ctrl.contentsJSON = data;
		})
		.error(function(data, status, error, config) {
			ctrl.contentsJSON = [{heading: "Error", description: "Could not load JSON."}];
		})
	}

	

	ctrl.goToIndex = goToIndex;
	ctrl.goToSelectionPage = goToSelectionPage;
	ctrl.getJSON = getJSON;
	ctrl.sampleFragranceCommercial = sampleFragranceCommercial;

	ctrl.getJSON()
}

angular.module('app', [])
	.controller('MainCtrl', MainController);
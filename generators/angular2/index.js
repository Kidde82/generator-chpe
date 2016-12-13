var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

	constructor: function () {
		// Calling the super constructor is important so our generator is correctly set up
		generators.Base.apply(this, arguments);

	},

	initializing: function() {
		this.log("Initializing ng2");
	},

	prompting: function() {
		this.log("prompting ng2");
		return this.prompt([{
				type	: "list",
				name	: "kind",
				message	: "What to generate",
				choices	: [
					"Module",
					"Component",
					"Service",
					"Test"
				]
			}]).then(function (answers) {
				this.log("kind", answers.kind);
			}.bind(this));
	},

	configuring: function() {
		this.log("configuring ng2");
	},

	default: function() {
		this.log("default ng2");
	},

	writing: function() {
		this.log("writing ng2");
	},

	conflicts: function() {
		this.log("conflicts ng2");
	},

	install: function() {
		this.log("install ng2");
	},

	end: function() {
		this.log("end ng2");
	},

});
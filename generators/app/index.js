var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

	constructor: function () {
		// Calling the super constructor is important so our generator is correctly set up
		generators.Base.apply(this, arguments);

		this.helperMethod = function () {
			this.log('won\'t be called automatically');
		};

		installNpmPackages = function () {
			this.log("installnpm");
			this.npmInstall(["lodash"], { "save": true })
		}
	},

	initializing: function() {
		this.log("Initializing");
		this.log(this.config.getAll());
	},

	prompting: function() {
		this.log("prompting it");
		return this.prompt([{
				type	: "input",
				name	: "name",
				message	: "Your project name",
				default	: this.appname,
				store	: true
			}, {
				type	: "list",
				name	: "generator",
				message	: "Choose generator",
				choices	: [
					"Angular2",
					"B",
					"C"
				]
			}]).then(function (answers) {
				this.log("app name", answers.name);
				this.log("generator", answers.generator);
				this.config.set({
					"name": answers.name,
					"generator": answers.generator
				})
				if (answers.generator === "Angular2") {
					this.composeWith("chpe:angular2", {
						options: {
							name: this.config.get("name"),
						}
					});
				}
			}.bind(this));
	},

	configuring: function() {
		this.log("configuring");
	},

	default: function() {
		this.log("default");
	},

	writing: function() {
		this.log("writing");
	},

	conflicts: function() {
		this.log("conflicts");
	},

	install: function() {
		this.log("install");
		// this.installNpmPackages();
	},

	end: function() {
		this.log("end");
	},

	method1: function () {
		this.log('method 1 just ran');
		this.helperMethod();
	},

});
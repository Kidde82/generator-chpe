var generators = require('yeoman-generator');
var helper = require("../helpers/string.js");

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
			},{
				type	: "input",
				name	: "selectorPrefix",
				message	: "Selector prefix",
				default	: this.selectorPrefix,
				store	: true
			}]).then(function (answers) {
				this.log("kind", answers.kind);
				this.config.set({
					"kind": answers.kind,
					"selectorPrefix": answers.selectorPrefix
				})
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
		var kind = this.config.get("kind");
		var selector = this.config.get("selectorPrefix") + "-" + this.options.name.kebab();

		if (kind === "Module") {
			var destination = "./src/client/app/" + this.options.name.kebab();
			var destinationFilename = destination + "/" + this.options.name.kebab();
			var destinationE2e = "./src/e2e/specs/";
			var destinationFilenameE2e = destinationE2e + this.op.name.kebab();

			this.fs.copyTpl(
				this.templatePath("module/_index.ts"),
				this.destinationPath(destination + "/index.ts"),
				{ name: this.options.name }
			);

			this.copy("module/_template.component.css", destinationFilename + ".component.css");

			this.fs.copyTpl(
				this.templatePath("module/_template.component.html"),
				this.destinationPath(destinationFilename + ".component.html"),
				{ name: this.options.name }
			);

			this.fs.copyTpl(
				this.templatePath("module/_template.component.spec.ts"),
				this.destinationPath(destinationFilename + ".component.spec.ts"),
				{
					name: this.options.name,
					selector: selector
				}
			);

			this.fs.copyTpl(
				this.templatePath("module/_template.component.ts"),
				this.destinationPath(destinationFilename + ".component.ts"),
				{
					name: this.options.name,
					selector: selector
				}
			);

			this.fs.copyTpl(
				this.templatePath("module/_template.module.ts"),
				this.destinationPath(destinationFilename + ".module.ts"),
				{ name: this.options.name }
			);

			this.fs.copyTpl(
				this.templatePath("module/_template-routing.module.ts"),
				this.destinationPath(destinationFilename + "-routing.module.ts"),
				{ name: this.options.name }
			);

			this.fs.copyTpl(
				this.templatePath("e2e/_template.component.e2e-spec.ts"),
				this.destinationPath(destinationFilenameE2e + ".component.e2e-spec.ts"),
				{
					name: this.options.name,
					selector: selector
				}
			);
		} else if (kind === "Component") {
			var destination = "./src/client/app/shared/" + this.options.name.kebab();
			var destinationFilename = destination + "/" + this.options.name.kebab();

			this.fs.copyTpl(
				this.templatePath("component/_index.ts"),
				this.destinationPath(destination + "/index.ts"),
				{ name: this.options.name }
			);

			this.copy("component/_template.component.css", destinationFilename + ".component.css");

			this.fs.copyTpl(
				this.templatePath("component/_template.component.html"),
				this.destinationPath(destinationFilename + ".component.html"),
				{ name: this.options.name }
			);

			this.fs.copyTpl(
				this.templatePath("component/_template.component.spec.ts"),
				this.destinationPath(destinationFilename + ".component.spec.ts"),
				{
					name: this.options.name,
					selector: selector
				}
			);

			this.fs.copyTpl(
				this.templatePath("component/_template.component.ts"),
				this.destinationPath(destinationFilename + ".component.ts"),
				{
					name: this.options.name,
					selector: selector
				}
			);
		} else if (kind === "Service") {
			var destination = "./src/client/app/shared/" + this.options.name.kebab();
			var destinationFilename = destination + "/" + this.options.name.kebab();

			this.fs.copyTpl(
				this.templatePath("service/_index.ts"),
				this.destinationPath(destination + "/index.ts"),
				{ name: this.options.name }
			);

			this.fs.copyTpl(
				this.templatePath("service/_template.service.spec.ts"),
				this.destinationPath(destinationFilename + ".service.spec.ts"),
				{ name: this.options.name }
			);

			this.fs.copyTpl(
				this.templatePath("service/_template.service.ts"),
				this.destinationPath(destinationFilename + ".service.ts"),
				{ name: this.options.name }
			);
		}
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
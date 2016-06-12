'use strict';

var BaseWebhook = require('nci-base-webhook').BaseWebhook,
	inherits = require('util').inherits;

var GogsWebhook = function() {
	BaseWebhook.call(this, {name: 'gogs'});
};

inherits(GogsWebhook, BaseWebhook);

GogsWebhook.prototype.check = function(req, project) {
	return req.headers['x-gogs-event'] === 'push' &&
		req.body.ref === 'refs/heads/' + project.scm.rev;
};

exports.register = function(app) {
	var gogsWebhook = new GogsWebhook();

	gogsWebhook.register(app);
};

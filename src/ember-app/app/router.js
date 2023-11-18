import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probnyjj-proekt-город-l');
  this.route('i-i-s-probnyjj-proekt-город-e',
  { path: 'i-i-s-probnyjj-proekt-город-e/:id' });
  this.route('i-i-s-probnyjj-proekt-город-e.new',
  { path: 'i-i-s-probnyjj-proekt-город-e/new' });
  this.route('i-i-s-probnyjj-proekt-здание-l');
  this.route('i-i-s-probnyjj-proekt-здание-e',
  { path: 'i-i-s-probnyjj-proekt-здание-e/:id' });
  this.route('i-i-s-probnyjj-proekt-здание-e.new',
  { path: 'i-i-s-probnyjj-proekt-здание-e/new' });
});

export default Router;

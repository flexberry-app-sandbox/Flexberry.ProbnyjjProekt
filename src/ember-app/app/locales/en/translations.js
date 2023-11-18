import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProbnyjj__proektГородLForm from './forms/i-i-s-probnyjj-proekt-город-l';
import IISProbnyjj__proektЗданиеLForm from './forms/i-i-s-probnyjj-proekt-здание-l';
import IISProbnyjj__proektГородEForm from './forms/i-i-s-probnyjj-proekt-город-e';
import IISProbnyjj__proektЗданиеEForm from './forms/i-i-s-probnyjj-proekt-здание-e';
import IISProbnyjj__proektГородModel from './models/i-i-s-probnyjj-proekt-город';
import IISProbnyjj__proektЗданиеModel from './models/i-i-s-probnyjj-proekt-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probnyjj-proekt-город': IISProbnyjj__proektГородModel,
    'i-i-s-probnyjj-proekt-здание': IISProbnyjj__proektЗданиеModel
  },

  'application-name': 'Probnyjj__proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Probnyjj__proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probnyjj__proekt',
          title: 'Probnyjj__proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'probnyjj-proekt': {
          caption: 'Probnyjj__proekt',
          title: 'Probnyjj__proekt',
          'i-i-s-probnyjj-proekt-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-probnyjj-proekt-здание-l': {
            caption: 'Здание',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-probnyjj-proekt-город-l': IISProbnyjj__proektГородLForm,
    'i-i-s-probnyjj-proekt-здание-l': IISProbnyjj__proektЗданиеLForm,
    'i-i-s-probnyjj-proekt-город-e': IISProbnyjj__proektГородEForm,
    'i-i-s-probnyjj-proekt-здание-e': IISProbnyjj__proektЗданиеEForm
  },

});

export default translations;

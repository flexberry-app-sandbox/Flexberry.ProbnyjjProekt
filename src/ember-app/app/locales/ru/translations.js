import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probnyjj__proekt',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probnyjj__proekt',
          title: 'Probnyjj__proekt'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probnyjj-proekt-город-l': IISProbnyjj__proektГородLForm,
    'i-i-s-probnyjj-proekt-здание-l': IISProbnyjj__proektЗданиеLForm,
    'i-i-s-probnyjj-proekt-город-e': IISProbnyjj__proektГородEForm,
    'i-i-s-probnyjj-proekt-здание-e': IISProbnyjj__proektЗданиеEForm
  },

});

export default translations;
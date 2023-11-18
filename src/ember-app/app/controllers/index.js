import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.probnyjj-proekt.caption'),
          title: i18n.t('forms.application.sitemap.probnyjj-proekt.title'),
          children: [{
            link: 'i-i-s-probnyjj-proekt-город-l',
            caption: i18n.t('forms.application.sitemap.probnyjj-proekt.i-i-s-probnyjj-proekt-город-l.caption'),
            title: i18n.t('forms.application.sitemap.probnyjj-proekt.i-i-s-probnyjj-proekt-город-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-probnyjj-proekt-здание-l',
            caption: i18n.t('forms.application.sitemap.probnyjj-proekt.i-i-s-probnyjj-proekt-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.probnyjj-proekt.i-i-s-probnyjj-proekt-здание-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})
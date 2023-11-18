import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГородMixin
} from '../mixins/regenerated/models/i-i-s-probnyjj-proekt-город';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГородMixin, Validations, {
});

defineProjections(Model);

export default Model;

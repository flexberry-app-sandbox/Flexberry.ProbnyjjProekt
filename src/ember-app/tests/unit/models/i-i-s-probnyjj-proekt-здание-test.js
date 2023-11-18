import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probnyjj-proekt-здание', 'Unit | Model | i-i-s-probnyjj-proekt-здание', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probnyjj-proekt-город',
    'model:i-i-s-probnyjj-proekt-здание',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

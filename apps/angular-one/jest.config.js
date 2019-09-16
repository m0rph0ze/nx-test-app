module.exports = {
  name: 'angular-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

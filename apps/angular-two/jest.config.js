module.exports = {
  name: 'angular-two',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-two',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

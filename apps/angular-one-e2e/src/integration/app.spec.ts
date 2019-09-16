import { getGreeting } from '../support/app.po';

describe('angular-one', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-one!');
  });
});

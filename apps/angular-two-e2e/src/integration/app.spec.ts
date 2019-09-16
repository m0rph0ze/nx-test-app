import { getGreeting } from '../support/app.po';

describe('angular-two', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-two!');
  });
});

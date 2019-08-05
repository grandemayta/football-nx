import { getGreeting } from '../support/app.po';

describe('seriea', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to seriea!');
  });
});

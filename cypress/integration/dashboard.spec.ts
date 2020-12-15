/* eslint-disable no-undef */
/// <reference types="cypress"/>

const search = 'javascript';
let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=12&startIndex=1`;

describe('Dashboard Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should be able access the page home', () => {
    cy.title().should('be.equal', 'Books').and('contain', 'Books');
    cy.get('.sc-dIUggk > h1').should('have.text', 'Encontre seu book aqui!');
    cy.get(':nth-child(1) > .sc-iBPRYJ').focus();
    cy.get(':nth-child(2) > .sc-iBPRYJ').should('not.be.focused');
  });

  it('should be able search by book', () => {
    cy.get('#search').click();
    cy.get('#search').focus();
    cy.get('#search').type(search);
    cy.get('#search').should('have.value', search);
    cy.get('form > button').should('have.text', 'Pesquisar').click();
    cy.request(url);
  });

  it('should be able to change page', () => {
    url = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=24&startIndex=1`;
    cy.get('ul > :nth-child(2) > button').click();
    cy.request(url);
  });

  it('should be able to bookmark', () => {
    cy.get('#favorite9 > svg').click();
    cy.get('#favorite10 > svg').click();

    cy.get(':nth-child(2) > .sc-iBPRYJ').click();
    cy.get('.sc-iwyYcG > h1').should('have.text', 'Seus books favoritos');
  });

  it('should be able delete a favorite', () => {
    cy.get(
      ':nth-child(1) > .sc-iJuUWI > .sc-giIncl > .favorite > svg > path',
    ).click();
  });

  it('should be able change to the dashboard page', () => {
    cy.get(':nth-child(1) > .sc-iBPRYJ').click();
  });

  it('should be able see a describe the book', () => {
    cy.get('#search').click();
    cy.get('#search').focus();
    cy.get('#search').type(search);
    cy.get('#search').should('have.value', search);
    cy.get('form > button').should('have.text', 'Pesquisar').click();
    cy.get(':nth-child(6) > .sc-kfzAmx > .sc-fKFyDc > .detail').click();
  });

  it('should be able close a describe the book', () => {
    cy.get('.sc-fFubgz > h1').should(
      'have.text',
      'Foundations of Object-Oriented Languages',
    );
    cy.get('.sc-fFubgz > button').click();
  });
});

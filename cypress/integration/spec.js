describe('page', () => {
  const username = 'username';
  const password = 'password';
  it('can log in and start a chat', () => {
    cy.visit("/");
    cy.get('input[id="user_email"]').type(username);
    cy.get('input[id="user_password"]').type(password);
    cy.get('input[type="submit"]').click();
    cy.request('/');
    cy.visit('http://my.conversa.local/protocols/PzAhIcX1QIbqfPK2sZtKH64lVkk3OeNHJy5WFi6qxaY?warpspeed=true');
    cy.contains(/choose a color/);
  });

  it('should get login page, but do not', () => {
    cy.visit("/");
    cy.get('input[id="user_email"]').type(username);
    cy.get('input[id="user_password"]').type(password);
    cy.get('input[type="submit"]').click();
  });
});



describe('Pruebas de cypres con CI-GitLab',()=>{


    beforeEach(()=>{

        cy.visit('http://www.automationpractice.pl/index.php');

    })

    it('Realizar busqueda de articulo',()=>{
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
        

    })
     it('Seleccion checkbox en women',()=>{

       cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]').click();
        cy.get('#layered_category_4').check();
        cy.get('#layered_category_4').should('be.checked');
        


     })





})
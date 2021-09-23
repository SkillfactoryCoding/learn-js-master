context('Get wiki', () => {
  beforeEach(() => {
    cy.visit('https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F')
  })

  it('example', () => {
    cy.get('#firstHeading').then(data => {
      const header = data[0]

      console.log(header)
      expect(data[0].innerText).to.deep.eq("Тестирование программного обеспечения")
    })
  })
})

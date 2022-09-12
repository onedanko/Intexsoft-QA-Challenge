const codes = [
  "RUS",
  "UKR",
  "POL",
  "BLR", 
  "USA",
  "FRA"
]; 

describe('RestCountries API', () => {
  codes.forEach((code) => {
    
    it(`Check borders for ${code}`, () => {
      const apiRestCountriesCodesUrl = "https://restcountries.com/v2/alpha?codes=";
      
      cy.request("GET", `${apiRestCountriesCodesUrl}${code}`).then((response)=> {
        expect(response.status).to.eq(200);
        const borders = response.body[0].borders;
        
        borders.forEach(country => {
          cy.request("GET", `${apiRestCountriesCodesUrl}${country}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].borders).to.include(code);
          });          
        });
      });
    });
  });
});
const { il } = require('../srcTwo/il');

describe('Teste a função ', () => {
    it('Teste o tipo da função il', () => {
      expect.assertions(1);
      expect(typeof il).toBe('function');
      });
  
  });
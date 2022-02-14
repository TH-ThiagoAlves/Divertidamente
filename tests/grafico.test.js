const { grafico } = require('../srcTwo/grafico');

describe('Teste a função ', () => {
    it('Teste o tipo da função grafico', () => {
      expect.assertions(1);
      expect(typeof grafico).toBe('function');
      });
  
  });

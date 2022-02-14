const { analise, analise2 } = require('../srcTwo/analise');

describe('Teste a função ', () => {
    it('Teste o tipo de analise()', () => {
      expect.assertions(1);
      expect(typeof analise).toBe('function');
      });
  
      it('Teste o tipo de analise2()', () => {
        expect.assertions(1);
        expect(typeof analise2).toBe('function');
        });

  });
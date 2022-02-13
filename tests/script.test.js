const { guardedFeelings, li, sumEmot} = require('../src/script');

describe('Teste a função ', () => {
    it('Teste o tipo da função guardedFeelings', async () => {
      expect.assertions(1);
      expect(typeof guardedFeelings).toBe('function');
      });
  
  });

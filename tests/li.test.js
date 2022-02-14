const { li } = require('../srcTwo/li');

describe('Teste a função ', () => {
    it('Teste o tipo da função li', () => {
      expect.assertions(1);
      expect(typeof li).toBe('function');
      });
  
  });
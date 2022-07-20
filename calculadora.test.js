const { bhaskara } = require('./calculadora.js');

  describe("Descobrindo as raizes", () => {
    test("a=1 b=-6 c=10 | Sem Raíz", () => {
      expect(bhaskara(1, -6, 10)).toBe("Sem raiz real");
    });
  
    test("a=1 b=6 c=9 | Raízes x1=x2=3", () => {
      expect(bhaskara(1, 6, 9)).toBe(-3);
    });

    test("a=1 b=2 c=-15 | Raízes x1=-5 x2=3", () => {
      expect(bhaskara(1, 2, -15)).toBe(-5, 3);
    });
  });
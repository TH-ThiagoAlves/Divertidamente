const analise2 = () => {
    let emoticon = [0, 0, 0, 0, 0];
    let inx = 0;
    emoticon.forEach((element, index) => {
      if (element == number) inx = index
    });
    switch (inx) {
      case 0:
        return alterarHtml(alegria);
      case 1:
        return alterarHtml(tristeza);
      case 2:
        return alterarHtml(raiva);
      case 3:
        return alterarHtml(medo);
      case 4:
        return alterarHtml(nojo);
    }
  }
  
  const analise = () => {
    let emoticon = [0, 0, 0, 0, 0];
    const verifica = emoticon.filter((element) => element == number);
    if (verifica.length >= 1) alterarHtml(generico);
    return analise2();
  };

  module.exports = { analise, analise2 }
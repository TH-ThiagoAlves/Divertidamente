const il = () => {
    const emotes = document.querySelectorAll('.emoção');
    emotes.forEach(element => {
      element.removeEventListener('click', sumEmot);
    });
   }

   const sumEmot = (event) => {
    let emoticon = [0, 0, 0, 0, 0];
    const armz = event.target.parentNode;
    switch (armz.id) {
      case 'alegria':
        emoticon[0] += 1;
        grafico();
        return il();
      case 'tristeza':
        emoticon[1] += 1;
        grafico();
        return il();
      case 'raiva':
        emoticon[2] += 1;
        grafico();
        return il();
      case 'medo':
        emoticon[3] += 1;
        grafico();
        return il();
      case 'nojo':
        emoticon[4] += 1;
        grafico();
        return il();
    }
  };

  module.exports = { il }
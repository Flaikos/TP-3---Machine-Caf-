const controleDiv = document.getElementById('controle');

// CHAMPS INPUT
const inputQteCafe = document.createElement('input');
inputQteCafe.type = 'number';
inputQteCafe.id = 'quantiteCafe';

// bouton "Calculer"
const boutonCalculer = document.createElement('button');
boutonCalculer.id = 'calculate';
boutonCalculer.textContent = 'Calculer';

controleDiv.insertBefore(inputQteCafe, document.getElementById('start'));
controleDiv.insertBefore(boutonCalculer, document.getElementById('start'));


function calculerIngredients(qteTasses) {
    const qteEau = qteTasses * 200; // 200 ml d'eau par tasse
    const qteLait = qteTasses * 50; // 50 ml de lait par tasse
    const qteCafeMoulu = qteTasses * 15; // 15 g de café moulu par tasse
    return { qteEau, qteLait, qteCafeMoulu };
}

boutonCalculer.addEventListener('click', () => {
    const qteCafeInput = document.getElementById('quantiteCafe');
    const qteTasses = parseInt(qteCafeInput.value);
    const ingredients = calculerIngredients(qteTasses);

    alert(`Pour ${qteTasses} tasses de café, vous aurez besoin de :\nQuantité d'eau : ${ingredients.qteEau} ml\nQuantité de lait : ${ingredients.qteLait} ml\nQuantité de café moulu : ${ingredients.qtezCafeMoulu} g`);
});


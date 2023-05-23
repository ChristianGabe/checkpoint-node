const fs = require('fs');

//  fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt created');
});

// Lire et afficher les données du fichier hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// package generate-password
const generatePassword = require('generate-password');

// Générer un mot de passe aléatoire
const password = generatePassword.generate();

// Afficher le mot de passe généré
console.log('Mot de passe généré :', password);

// Importer le package nodemailer
const nodemailer = require('nodemailer');

// Configurer les informations de connexion au service de messagerie
const transporter = nodemailer.createTransport({
  service: 'smtp',
  auth: {
    user: 'votre_adresse_email',
    pass: 'votre_mot_de_passe'
  }
});

// Définir les détails de l'e-mail à envoyer
const mailOptions = {
  from: 'votre_adresse_email',
  to: 'adresse_email_destinataire',
  subject: 'Test d\'e-mail',
  text: 'Ceci est un e-mail de test envoyé depuis Node.js avec nodemailer.'
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
  } else {
    console.log('E-mail envoyé avec succès. ID du message :', info.messageId);
  }
});

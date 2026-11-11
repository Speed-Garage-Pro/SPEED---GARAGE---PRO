CONFIGURATION PERSONNALISÉE : 08:00–17:00, lundi-samedi, 1 voiture par heure, dimanche fermé. Voir HORAIRES.txt.

SPEED GARAGE PRO — CRENEAUX FIREBASE

CONFIGURATION (installation à réaliser avant utilisation)
1. Créer un projet sur https://console.firebase.google.com et enregistrer une application Web.
2. Activer Authentication > Email/Password, Cloud Firestore et Firebase Hosting.
3. Copier les valeurs de configuration Web dans firebase-config.js.
4. Installer Node.js et Firebase CLI : npm install -g firebase-tools
5. Dans le dossier du projet : firebase login puis firebase use --add (ou firebase init si nécessaire).
6. Dans functions : npm install ; puis revenir au dossier parent.
7. Déployer : firebase deploy --only firestore:rules,functions,hosting
8. Dans Authentication, créer un utilisateur administrateur. Copier son UID.
9. Dans Firestore, créer admins/{UID} (un document avec un champ role = "admin").
10. Se connecter sur /admin.html pour voir, confirmer ou refuser les demandes.

FONCTIONNEMENT
- 1 voiture par créneau d'une heure, du lundi au samedi de 08:00 à 17:00 (dernier début 16:00).
- Fuseau horaire Africa/Conakry (UTC+0) ; réservation entre 5 minutes et 90 jours à l'avance.
- Un créneau est bloqué dès la demande (en_attente), libéré si refusé.
- Transaction Firestore côté serveur : aucune double réservation du même créneau.
- Confirmation du client : bouton WhatsApp dans l'administration ; envoi MANUEL.
- Les clients ne voient que les créneaux occupés, jamais les données personnelles.
- Les rendez-vous ne sont pas automatiquement expirés ni annulables après confirmation.

IMPORTANT
- Déployer les Cloud Functions nécessite généralement le plan Firebase Blaze (facturation à l'usage).
- La fonction publique peut être abusée : avant mise en production, activer App Check, protections anti-spam/rate-limit et surveillance des coûts.
- Les données clients nécessitent une politique de confidentialité et une durée de conservation adaptée.
- Tester deux réservations simultanées du même créneau, les refus et les droits admin.
- Le fichier HTML doit être servi depuis Hosting, pas ouvert directement en file://.
- Les horaires/capacité sont des hypothèses modifiables dans index.html et functions/index.js.

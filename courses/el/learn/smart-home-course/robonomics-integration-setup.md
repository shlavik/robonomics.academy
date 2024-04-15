---
title: "Μάθημα #6, Ρύθμιση ολοκλήρωσης ρομπονομίας"
lastUpdate: Thu May 18 2023 10:46:29 GMT+0400 (Samara Standard Time)
description: μάθημα βοηθού σπιτιού
lessonNumber: 7
metaOptions: [Μάθετε, Κυρίαρχο Έξυπνο Σπίτι με το Robonomics και το Home Assistant]
defaultName: Sovereign Smart Home with Robonomics and Home Assistant
---


## Τι είναι αυτό

Σε αυτό το μάθημα, θα προσθέσετε τα Ρομπονομικά στο Home Assistant και θα δημιουργήσετε ένα λογαριασμό που σχετίζεται με τη συνδρομή. Αυτή η ενσωμάτωση επιτρέπει στο Home Assistant να χρησιμοποιεί τις λειτουργίες της αλυσίδας Robonomics, πρωτίστως, να στέλνει κρυπτογραφημένα δεδομένα έξυπνου σπιτιού σε ένα αποκεντρωμένο νέφος.


## Θεωρία

Τα δεδομένα του έξυπνου σπιτιού σας στέλνονται χρησιμοποιώντας το <code>record()</code> εξωτερικό από το <code>datalog</code> παλέτα που σας επιτρέπει να αποθηκεύετε κρυπτογραφημένα δεδομένα συσκευών στην αλυσίδα. 

Για να είμαστε πιο ακριβείς, η ενσωμάτωση χρησιμοποιεί το IPFS για την αποθήκευση δεδομένων και στη συνέχεια στέλνει τα hashes του IPFS στο εξωτερικό datalog, το οποίο αποθηκεύεται στην αλυσίδα. Αλλά αφού αυτή η λειτουργία καλείται μέσω μιας συνδρομής IoT, ολόκληρη η λειτουργία φαίνεται όπως: <code>rws.call(datalog.record(YOUR_IPFS_HASH))</code>.

## Οδηγίες

<List type="numbers">

<li>

Προσθήκη Ρομπονομικών στο Home Assistant

<List>

<li>

Στην ιστοσελίδα του Home Assistant πηγαίνετε σε <code>Ρυθμίσεις</code>-><code>Συσκευές & Υπηρεσίες</code> και πατήστε <code>ΠΡΟΣΘΗΚΗ ΕΝΣΩΜΑΤΩΣΗΣ</code>. Αναζητήστε τα <code>Ρομπονομικά</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmQp66J943zbF6iFdkKQpBikSbm9jV9La25bivKd7cz6fD', type:'mp4'}]" />

</li>

<li>

Κάντε κλικ στα Ρομπονομικά και συμπληρώστε τη διαμόρφωση: 

\- Προσθέστε το seed από τον λογαριασμό <code>SUB_CONTROLLER</code> στο seed του διαχειριστή λογαριασμού

\- Προσθέστε τη δημόσια διεύθυνση του λογαριασμού <code>SUB_OWNER</code> (τον οποίο προηγουμένως δημιουργήσατε) στη διεύθυνση ιδιοκτήτη της συνδρομής

\- Ορίστε το διάστημα αποστολής δεδομένων (από προεπιλογή είναι 10 λεπτά)

\- (Προαιρετικό) Μπορείτε να προσθέσετε διαπιστευτήρια για την υπηρεσία pinning Pinata για να διαδώσετε τα δεδομένα σας ευρύτερα στο δίκτυο IPFS

</li>

<li>

Πατήστε <code>ΥΠΟΒΟΛΗ</code> μετά την ολοκλήρωση της διαμόρφωσης. Αν συμπληρώσατε όλα σωστά, θα δείτε το παράθυρο Επιτυχία.

</li>
</List>
</li>

<li>

Προσθήκη Χρηστών στο Robonomics Dapp 

<List>

<li>

Χρειάζεται να δημιουργήσετε έναν ξεχωριστό χρήστη για το Home Assistant, ο οποίος θα ελέγχει τις συσκευές του έξυπνου σπιτιού. Δεν μπορείτε να χρησιμοποιήσετε προηγουμένως δημιουργημένους λογαριασμούς επειδή τα <code>SUB_OWNER</code> και <code>SUB_CONTROLLER</code> παρέχουν ασφάλεια, και ο πρώτος χρήστης που δημιουργήσατε όταν πρωτοξεκινήσατε το Home Assistant δεν έχει λογαριασμό Robonomics Parachain.

</li>

<li>
Ξεκινήστε δημιουργώντας έναν λογαριασμό στο Robonomics Parachain, όπως κάνατε στο προηγούμενο μάθημα.
</li>

<li>

Προσθέστε αυτόν τον λογαριασμό στη συνδρομή στο [dapp](https://dapp.robonomics.network/#/subscription/devices). Τώρα θα πρέπει να υπάρχουν τρεις διευθύνσεις στη λίστα πρόσβασης: <code>SUB_OWNER</code>, <code>SUB_CONTROLLER</code> και <code>USER</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmSxzram7CF4SXpVgEyv98XetjYsxNFQY2GY4PfyhJak7H', type:'mp4'}]" />

</li>

<li>

Μεταβείτε στην υπηρεσία dapp που ονομάζεται [Home Assistant Account](https://dapp.robonomics.network/#/home-assistant). Επιλέξτε τον λογαριασμό που μόλις δημιουργήσατε στη δεξιά πλευρά (ελέγξτε ότι έχετε επιλέξει τον επιθυμητό λογαριασμό πατώντας το εικονίδιο προφίλ).

Εισάγετε τον κωδικό σπόρου <code>USER</code> στο απαιτούμενο πεδίο. Προσθέστε τις διευθύνσεις <code>SUB_OWNER</code> και <code>SUB_CONTROLLER</code> στα πεδία διαχειριστή πιστώσεων. Αν όλα είναι σωστά, θα δείτε την κατάσταση επαλήθευσης <code>VERIFIED</code>.

</li>

<li>

Δημιουργήστε έναν κωδικό για έναν νέο χρήστη που μόλις εγγραφήκατε και στη συνέχεια επιβεβαιώστε τη συναλλαγή, η οποία τώρα θα είναι χωρίς χρέωση λόγω της συνδρομής. Αργότερα μπορείτε να ανακτήσετε τον κωδικό στην καρτέλα <code>Restore</code>.

<LessonVideo  :videos="[{src: 'https://crustipfs.info/ipfs/QmW2TXuwCYXzgcRfEUx4imZU5ZerEzkuD5P53u9g2WnxDh', type:'mp4'}]" />

</li>

<li>

Μετά τη διαδικασία εγγραφής, συνδεθείτε στο Home Assistant με τη διεύθυνση χρήστη σας ως σύνδεση και έναν νεοδημιουργημένο κωδικό. Τώρα μπορείτε να χρησιμοποιήσετε το Robonomics dapp για να ελέγξετε το σπίτι σας μέσω του Robonomics.

</li>
</List>
</li>
</List>
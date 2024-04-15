---
title: "Μάθημα #5, Συνδρομές IoT χρησιμοποιώντας το Robonomics Parachain"
lastUpdate: Thu May 04 2023 12:53:55 GMT+0400 (Samara Standard Time)
description: Θα μάθετε πώς να αγοράσετε μια συνδρομή IoT στο Robonomics Parachain χρησιμοποιώντας πραγματικά τα κέρματα του δικτύου μας.
lessonNumber: 5
metaOptions: [Μαθαίνω, Εισαγωγή στις ιδέες του Robonomics]
defaultName:  Introduction to the ideas of Robonomics
---

Το τελευταίο μάθημα του Εισαγωγικού μας μαθήματος είναι πολύ πιθανό να είναι το πιο δύσκολο, γιατί θα απαιτήσει λίγη υπομονή από εσάς. Θα μάθετε πώς να αγοράζετε μια συνδρομή IoT στο Robonomics Parachain χρησιμοποιώντας πραγματικά διακριτικά του δικτύου μας.


## Εισαγωγή

Μια συνδρομή IoT είναι ένα κλειδί πρόσβασης σε όλες τις λειτουργίες που σχετίζονται με την αλλαγή της κατάστασης του Ϩηνωτικού διπλού ενός κυβερνο-φυσικού συστήματος και την αποθήκευση πληροφοριών σχετικά με αυτό χρησιμοποιώντας το οικοσύστημα Polkadot / Kusama. Η κατοχή μιας συνδρομής απαλλάσσει τον χρήστη από την ανάγκη πληρωμής τέλους συναλλαγής. Αντ' αυτού, ο χρήστης μπορεί να στείλει μια δωρεάν συναλλαγή μια φορά σε ένα συγκεκριμένο χρονικό διάστημα.

Ο κύριος τρόπος αγοράς μιας συνδρομής είναι να συμμετέχετε στη δημοπρασία συνδρομής, και γι' αυτό σε αυτό το μάθημα θα πρέπει να αποκτήσετε τα XRT tokens για να κάνετε προσφορές και να υποβάλετε συναλλαγές. Περισσότερες πληροφορίες για αυτή τη διαδικασία είναι επίσης διαθέσιμες στο [wiki μας](https://wiki.robonomics.netwήk/docs/get-subscription).

## Οδηγίες

<List type="numbers">

<li>

Χρειάζεστε περίπου 2 XRT Robonomics Parachain tokens ([σχετικά με το token](https://robonomics.netwήk/xrt/)). Αν δεν τα έχετε, έχετε αρκετές επιλογές:

α) Αν περάσετε και τις δύο δοκιμές μετά το Μάθημα 2 και το Μάθημα 4 με 90% σωστές απαντήσεις, μπορείτε να ζητήσετε δωρεάν tokens για το μάθημα. Ελέγξτε τις βαθμολογίες σας στην [ειδική εφαρμογή ελέγχου](https://lk.robonomics.academy/). Συγκεκριμένα, πρέπει να πετύχετε 15 από 17 για το Μάθημα 2 και 10 από 11 για το Μάθημα 4, και έχετε δύο προσπάθειες για να το κάνετε. Για να λάβετε tokens, επικοινωνήστε με τον Διαχειριστή της Ακαδημίας στο [Discord μας](https://discord.gg/xqDgG3EGm9) (IBerman#5862).

β) Αγοράστε XRT tokens σε μία από τις ανταλλαγές (ελέγξτε τη [λίστα των ανταλλαγών](https://www.coingecko.com/en/coins/robonomics-network#markets/)). Να είστε προσεκτικοί αν δεν είστε εξοικειωμένοι με τις ανταλλαγές κρυπτονομισμάτων, θυμηθείτε ότι όλες οι αγορές σε ανταλλαγές κρυπτονομισμάτων μπορεί να έχουν δυνητικούς κινδύνους, αγοράστε μόνο το απαιτούμενο ποσό token για να περάσετε αυτό το μάθημα. Επίσης, θυμηθείτε ότι το Robonomics υπάρχει σε δύο δίκτυα, Ethereum και Kusama, οπότε κάθε δίκτυο έχει το δικό του XRT token. Χρειάζεστε ένα token που χρησιμοποιείται από το parachain στο δίκτυο Kusama.

γ) Αν έχετε το XRT token στο δίκτυο Ethereum (μορφή ERC-20), χρησιμοποιήστε τη διαδικασία [Exodus](https://old.dapp.robonomics.network/#/exodus) για να μεταφέρετε τα tokens από το δίκτυο Ethereum στο Kusama. Να θυμάστε ότι η μεταφορά των tokens πραγματοποιείται μία φορά την εβδομάδα.

</li>

<li>

Οι συνδρομές IoT αγοράζονται μέσω διαδικασίας δημοπρασίας με τον υψηλότερο προσφέροντα να αποκτά μια συνδρομή.

Πριν προσπαθήσετε να συμμετάσχετε στη δημοπρασία, πρέπει να ελέγξετε αν υπάρχουν διαθέσιμες. Ανοίξτε το Robonomics [Polkadot/Substrate portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/chainstate) με το μενού Chain state. Επιλέξτε το <code>rws</code> ερώτημα με το <code>auctionQueue()</code> και πατήστε το κουμπί '+'. Θα πρέπει να δείτε τα IDs των διαθέσιμων δημοπρασιών· θυμηθείτε το ID ενός από αυτά. Αν δεν εμφανίζονται δημοπρασίες ή δεν υπάρχουν διαθέσιμες, επικοινωνήστε μαζί μας στο Discord μας στο κανάλι "[🎓robonomics-academy](https://discord.com/channels/803947358492557312/803947358492557315)".

Τώρα, στο ίδιο μενού Chain state, επιλέξτε <code>rws</code> με <code>auction(u32): Option&lt;PalletRobonomicsRwsAuctionLedger&gt;</code> και στα πεδία <code>u32</code> εισάγετε το θυμημένο ID της δημοπρασίας. Μετά την πίεση του κουμπιού "+" θα δείτε πληροφορίες για μια ενδιαφέρουσα δημοπρασία. Αν το πεδίο <code>winner</code> έχει τιμή <code>null</code>, τότε κανείς δεν έχει αυτή τη συνδρομή και μπορείτε να προσπαθήσετε να την αποκτήσετε.

</li>

<li>

Κάντε μια προσφορά με τα τοκεν XRT σας.

Πηγαίνετε στο Developer -> Μενού Extrinsic και επιλέξτε για το ίδιο λογαριασμό Polkadot.js που χρησιμοποιήσατε στο προηγούμενο μάθημα το extrinsic <code>rws</code> με <code>bid(index, amount)</code>. Στο πεδίο <code>index</code> εισάγετε το ID της ενδιαφέρουσας δημοπρασίας. Στο πεδίο <code>amount</code> πρέπει να εισάγετε τον αριθμό των τοκεν σας για την προσφορά, μετατραπέντας τον σε "wieners" (1 XRT = 1 000 000 000 Wn). Ελέγξτε την τρέχουσα ελάχιστη τιμή συνδρομής στην [εφαρμογή μας](https://dapp.robonomics.network/#/subscription). 

Υποβάλετε τη συναλλαγή και αν είστε τυχεροί, θα λάβετε τη συνδρομή IoT. Μπορείτε να ελέγξετε ότι η διεύθυνση Polkadot σας κατέχει τη συνδρομή μέσω του ίδιου μενού κατάστασης Αλυσίδας.

</li>

<li>

Το τελευταίο βήμα είναι να προσθέσετε συσκευές για τη συνδρομή σας στο IoT.

Αυτό απλώς σημαίνει ότι αναθέτετε επιπλέον διευθύνσεις Polkadot στη συνδρομή σας ώστε να μπορούν να εκτελούν extrinsics (για παράδειγμα, για να εκκινήσουν συσκευές ή να στείλουν δεδομένα συσκευών στο blockchain).

Πρώτα, δημιουργήστε έναν νέο λογαριασμό για το Robonomics Parachain (οδηγίες στο [wiki μας](https://wiki.robonomics.network/docs/create-account-in-dapp/)), και ονομάστε τον "έξυπνη συσκευή" για ευκολία.

Στη συνέχεια, πηγαίνετε στο Developer -> Μενού Extrinsic, και επιλέξτε <code> rws</code> με <code>setDevices()</code>. Στη λίστα συσκευών χρησιμοποιήστε το κουμπί "Προσθήκη στοιχείου" για να προσθέσετε συσκευές και επιλέξτε έναν πρόσφατα δημιουργημένο λογαριασμό. Έπειτα, υποβάλετε τη συναλλαγή.

Η διεύθυνση της συσκευής πρέπει να προστεθεί στη συνδρομή. Μπορείτε να το ελέγξετε στο μενού κατάστασης Αλυσίδας μέσω του ερωτήματος <code>rws</code> με <code>devices()</code> για τον λογαριασμό Polkadot.js που έχει τη συνδρομή.

</li>

</List>

<Result>

Το μάθημα θα θεωρηθεί ολοκληρωμένο μετά την αποστολή μιας επιτυχημένης συναλλαγής αγοράς μιας συνδρομής IoT και την προσθήκη μιας συσκευής γι' αυτήν. Οι συναλλαγές πρέπει να εμφανιστούν στον εξερευνητή Polkadot για τον λογαριασμό σας.

Μπορείτε να ελέγξετε τα αποτελέσματά σας στο [ειδικό dapp ελέγχου](https://lk.robonomics.academy/). Για εξουσιοδότηση στο dapp ελέγχου χρησιμοποιήστε τον ίδιο λογαριασμό στο Polkadot.js που χρησιμοποιήθηκε κατά τη διάρκεια του μαθήματος.

</Result>
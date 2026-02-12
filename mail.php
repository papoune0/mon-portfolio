<?php

    // Traite uniquement les requêtes POST.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupération et nettoyage des champs du formulaire.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = trim($_POST["subject"]);
        $message = trim($_POST["message"]);

        // Validation des champs obligatoires.
        if ( empty($name) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Merci de compléter tous les champs requis.";
            exit;
        }

        // Destinataire des messages (à personnaliser si besoin).
        $recipient = "ibra.sy005@gmail.com";

        // Sujet de l'email.
        $subject = $subject;

        // Contenu de l'email.
        $email_content = "Nom: $name\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Sujet: $subject\n\n";
        $email_content .= "Message:\n$message\n";

        // En-têtes de l'email.
        $email_headers = "From: $name <$email>";

        // Envoi de l'email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo "Merci ! Votre message a bien été envoyé.";
        } else {
            http_response_code(500);
            echo "Une erreur est survenue, impossible d'envoyer votre message.";
        }

    } else {
        http_response_code(403);
        echo "Requête invalide. Merci de réessayer.";
    }

?>

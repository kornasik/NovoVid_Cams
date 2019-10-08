<?php

require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$label = $_POST['label'];
$phone = $_POST['phone'];
$amount = $_POST['amount'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'webmail.belvideo.by';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'admin@belvideo.by'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '-13121456'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = '';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25; // TCP port to connect to / этот порт может отличаться у других провайдеров

try {
    $mail->setFrom('admin@belvideo.by');
} catch (phpmailerException $e) {
} // от кого будет уходить письмо?
$mail->addAddress('vid4y@yandex.by');     // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на быстрый заказ с сайта BelVideo';
$mail->Body    = 'На товар' .$label . ' оставил заявку на заказ <br> Телефон клиента:'.$phone. '<br>Количество: ' .$amount;
$mail->AltBody = '';

try {
    if (!$mail->send()) {
        echo 'Заказ не оформлен! Свяжитесь с нами по телефну +375(29)166-12-21';
    } else {
        header('Location:/');
    }
} catch (phpmailerException $e) {
}

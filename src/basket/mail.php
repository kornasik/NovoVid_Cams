<?php 

require_once('./phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$basket = $_POST['basket'];
$price = $_POST['basket-price'];
$delivery = $_POST['delivery'];
$promo = $_GET['promo-code'];

echo $delivery;

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

$mail->Subject = 'Заказ с сайта BelVideo';
$mail->Body    = 'Клиент ' .$name . ' оставил заявку на заказ <br> Телефон клиента: '.$tel. '<br>Почта: ' .$email. '<br> Товар в козрине: ' .$basket. '<br> Общая стоимость заказа: ' .$price. ' руб. <br> Доставка: ' .$delivery. '<br> Промо-код' .$promo;
$mail->AltBody = '';

try {
    if (!$mail->send()) {
        echo 'Заказ не оформлен! Свяжитесь с нами по телефну +375(29)166-12-21';
    } else {
        header('Location:/');
    }
} catch (phpmailerException $e) {
}

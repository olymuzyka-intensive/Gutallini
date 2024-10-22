<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$services = $_POST['services'];
$comment = $_POST['comment'];
$to = 'olymuzyka@yandex.ru';
$header = 'Письмо от пользователя'
// Собираем все данные в письмо
$message = "Имя пользователя: $name \nТелефон: $tel \nСервис: $services \nКомментарий: $comment";
// Отправляем письмо
$send = mail($to, $header, $message, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

if(mail($To, $message, $headers)) {
    echo "Спасибо, ".$_POST['name'].", мы свяжемся с вами в самое ближайшее время!"; 
} else {
    echo "Сообщение не отправлено!"; 
}

?>
<?php

$name = $_POST['user_name'];
$company = $_POST['user_company'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$token = "1718988807:AAECno3LEH0AjNFdG4sT9pUCCPhLqO5qQ_s";
$chat_id = "-547236105";
$arr = array(
  'Имя пользователя: ' => $name,
  'Название компании: ' => $company,
  'Телефон: ' => $phone,
  'Сообщение' => $message
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header( 'Location: thankyou.html');
} else {
  echo '';
}
?>
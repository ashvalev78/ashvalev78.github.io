<?php
    $name = $_POST['userName'];
    $phone = $_POST['userPhone'];
    $pay = $_POST['payment'];
    $street = $_POST['userStreet'];
    $home = $_POST['userHome'];
    $block = $_POST['userBlock'];
    $flat = $_POST['userFlat'];
    $flour = $_POST['userFlour'];
    $flour = isset($flour) ? $flour : 'НЕТ';
    $message = $_POST['message'];
    $disturb = $_POST['call']; // 1 или null
    $disturb = isset($disturb) ? 'НЕТ' : 'ДА';
    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Комментарии к заказу: ' . $message . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
                <li>Адрес: ' . $street. ' ' .$home. ' ' .$block. ' ' .$flat. ' ' .$flour. ' </li>
            </ul>
        </body>
    </html>
    ';
    $headers = "From: Ученик школы Loft School\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('shvalev98@mail.ru', 'Заказ', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }
    echo json_encode($data);
?>

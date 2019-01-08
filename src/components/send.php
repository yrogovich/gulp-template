<?
$to = ''; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заявка с сайта '.$_SERVER['SERVER_NAME'];; //Заголовок сообщения
$message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>';
				if(isset($_POST['name']) && $_POST['name'] !== '')
					$message .= '<p>Имя: '.$_POST['name'].'</p>';   
				if(isset($_POST['phone']) && $_POST['phone'] !== '')
					$message .= '<p>Телефон: '.$_POST['phone'].'</p>';   
				if(isset($_POST['email']) && $_POST['email'] !== '')
					$message .= '<p>Email: '.$_POST['email'].'</p>';     
$message .= '                 
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
$headers .= "From: form@".$_SERVER['SERVER_NAME']."\r\n"; //Наименование и почта отправителя
mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

<?php

error_reporting(0);
if (!empty($_POST['username'])) {
echo "no";
exit;
}
$name=$_POST['name'];
$phone=$_POST['phone'];
$mail=$_POST['mail'];
$mm=$_POST['form_message'];
$heading=$_POST['heading'];
$idmes=$_POST['idmes'];


$sendto   = "top-biznesplan.ru@yandex.ru";
$usermail = "no-replay@top-biznesplan.ru";


$name=$_POST['name'];
$phone=$_POST['phone'];
$mail=$_POST['mail'];
$mm=$_POST['form_message'];
$heading=$_POST['heading'];
$idmes=$_POST['idmes'];


// Формирование заголовка письма
$subject  = $heading;
$headers  = "From: " .$usermail. "\r\n";
$headers .= "Reply-To: ".$usermail. "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Новое сообщение с сайта top-biznesplan.ru</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$mail."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$idmes."</p>\r\n";
$msg .= "<p><strong>Из формы:</strong> ".$heading."</p>\r\n";

$msg .= "</body></html>";
if ($mm==''){
// отправка сообщения
	if(@mail($sendto, $subject, $msg, $headers)) {
	}
}

?>
<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <title>Бизнес-план | Написание бизнес-планов без накруток</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/lightbox.css">
	
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-54122936-1', 'auto');
  ga('send', 'pageview');

</script>
        
</head>

<body>

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter27215291 = new Ya.Metrika({id:27215291,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/27215291" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<div class="ooo">
	<div class="otpr">
	<h2>Спасибо!</h2>
	<p>Мы свяжемся с Вами в ближайшее время!</p>
	<a class="tomap" href="index.html">На главную</a>
	</div>
</div>

</body>
</html>

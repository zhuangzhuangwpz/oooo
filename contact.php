<?php
/*
Free Responsive Html5 Templates : #
*/

$text = "<span style='color:red; font-size: 35px; line-height: 40px; magin: 10px;'>Error! Please try again.</span>";

if(isset($_POST['submitcontact']))
{
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];

	$to = "youremail@gmail.com";
	$subject = "Html5xCss3 - Testing Contact Form";
	$message = " Name: " . $name ."\r\n Email: " . $email . "\r\n Message:\r\n" . $message;
	 
	$from = "";
	$headers = "From:" . $from . "\r\n";
	$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
	 
	if(@mail($to,$subject,$message,$headers))
	{
	  $text = "<span style='color:blue; font-size: 35px; line-height: 40px; margin: 10px;'>Your Message was sent successfully !</span>";
	}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Free Bootstrap Themes by Html5xCss3 dot com - Free Responsive Html5 Templates">
    <meta name="author" content="#">
	
    <title>SimplePix | Free Html5 Themes by </title>
	
	
	<link rel="stylesheet" href="css/menu.css">
	
	<!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
	
	<!-- Custom Fonts -->
    <link rel="stylesheet" href="font-awesome-4.4.0/css/font-awesome.min.css"  type="text/css">
	
	<link rel="stylesheet" href="css/lightbox.css">
	
	<!-- Core JavaScript Files -->  	 
    
	
	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>
<body>

	<div class="header">
		<div id='cssmenu' >
			<ul>
			   <li class="active"><a href='index.html'><span>SimplePix</span></a></li>
			   <li class=' has-sub'><a href='#'><span>Category</span></a>
				  <ul>
					 <li class='has-sub'><a href='#'><span>Item 1</span></a>
						<ul>
						   <li><a href='#'><span>Sub Item</span></a></li>
						   <li class='last'><a href='#'><span>Sub Item</span></a></li>
						</ul>
					 </li>
					 <li class='has-sub'><a href='#'><span>Item 2</span></a>
						<ul>
						   <li><a href='#'><span>Sub Item</span></a></li>
						   <li class='last'><a href='#'><span>Sub Item</span></a></li>
						</ul>
					 </li>
				  </ul>
			   </li>
			   <li><a href='#'><span>Gallery</span></a></li>
			   <li><a href='single.html'><span>About</span></a></li>
			   <li class='last'><a href='contact.html'><span>Contact</span></a></li>
			</ul>
		</div>
	</div>
	
    <div id="page-content" class="sub-page">
		<div class="container">
			<center><article>
				<h2 class="center">Contact Form</h2>
				<!--Warning-->
				<center><?php echo $text;?></center>
				<!---->
				<div id="contact_form">
					<form name="form1" id="ff" method="post" action="contact.php">
						<label>
						<span>Enter your name:</span>
						<input type="text"  name="name" id="name" required>
						</label>
						<label>
						<span>Enter your email:</span>
						<input type="email"  name="email" id="email" required>
						</label>
						<label>
						<span>Your message here:</span>
						<textarea name="message" id="message"></textarea>
						</label>
						<center><input class="sendButton" type="submit" name="submitcontact" value="Submit"></center>
					</form>
				</div>
			</article></center>
		</div>
	</div>
	
    <!-- Once the page is loaded, initialized the plugin. -->
    <script type="text/javascript" src="js/jquery-2.1.1.js" ></script>
	<script src="js/bootstrap.min.js"></script>
	
	<!-- SmartMenus jQuery plugin -->
    <script type="text/javascript" src="js/jquery.smartmenus.js"></script>

    <!-- SmartMenus jQuery Bootstrap Addon -->
    <script type="text/javascript" src="js/jquery.smartmenus.bootstrap.js"></script>
	
	<script src="js/lightbox-plus-jquery.min.js"></script>
</body>
</html>
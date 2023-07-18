//Mailing Client
const mailgun = require("mailgun-js");
const mg = mailgun({apiKey: '8818380e706136925fa659d2b787d362-07ec2ba2-af043121', domain: 'msg.renoxroi.com'});

// var domain = require('./efunctions.js').domain;


// Server Unavailable form MAIL ... 
var contact_form = () =>{
const data = {
	from: `RenoxROI Systems <help@renoxroi.com>`,
	
	to: ``,
	
	subject: `Scheduled System Downtime`,
	html: `<body style=' margin:20px;'><img style='width:100%' src="https://i.ibb.co/rs1Z5N0/firewall.jpg"><p>Dear Investor</p>
<p>Please take note that some of our services will be unavailable from 12:00 until 23:59 (GMT+1) on April 29, 2022. During this time, we will be optimizing our systems to serve you better. As always, your investments and profits are secured and we appreciate your patience. Thank you for choosing RenoxROI.</p>
<h4>Services Affected</h4>
<ul>
	<li>Deposits</li>
	<li>Withdrawals</li>
	<li>Support Channels</li>
</ul>
<p>System Administrator</p>
<p style='font-style: italic; color:green; text-align: center;'>This message is sent to you because you are an investor on RenoxROI. This message is automatically generated. Do not reply</p>
</body>`	
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
};

// contact form MAIL ... 
// var contact_form = (x) =>{
// const data = {
// 	from: `RenoxROI Contact Form <contact.form@renoxroi.com>`,
// 	to: `help@renoxroi.com`,
// 	subject: `Message from Contact Form`,
// 	html: `<p>Subject: ${x.subject}</p><p>Name: ${x.name}</p><p>Email: ${x.email}</p><p>Message: ${x.message}</p>`	
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
// };

// withdrawal Req form MAIL ... 
var wd_req = (x) =>{
const data = {
	from: `RenoxROI Withdrawals <withdrawals@renoxroi.com>`,
	to: `help@renoxroi.com`,
	subject: `Withdrawal Request`,
	html: `<p>Name: ${x.username}</p><p>Amount: ${x.amount}USD</p><p>Coin: ${x.coin}</p><p>Network: ${x.network}</p><p>Address: ${x.address}</p>`	
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
};

// WELCOME MAIL ...
var welcome_mail = (user) =>{
const data = {
	from: `RenoxROI <help@renoxroi.com>`,
	to: user.email,
	subject: `Welcome to RenoxROI`,
	html: ``	
};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
};



// INVESTMENT MAIL ...
var inv_confirm = (user, i) =>{
const data = {
	from: `RenoxROI <help@renoxroi.com>`,
	to: user.email,
	subject: `Investment Confirmation`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width">
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}</style>
<style type="text/css" id="media-query">@media(max-width:520px){.block-grid,.col{min-width:320px!important;max-width:100%!important;display:block!important}.block-grid{width:100%!important}.col{width:100%!important}.col_cont{margin:0 auto}img.fullwidth,img.fullwidthOnMobile{max-width:100%!important}.no-stack .col{min-width:0!important;display:table-cell!important}.no-stack.two-up .col{width:50%!important}.no-stack .col.num2{width:16.6%!important}.no-stack .col.num3{width:25%!important}.no-stack .col.num4{width:33%!important}.no-stack .col.num5{width:41.6%!important}.no-stack .col.num6{width:50%!important}.no-stack .col.num7{width:58.3%!important}.no-stack .col.num8{width:66.6%!important}.no-stack .col.num9{width:75%!important}.no-stack .col.num10{width:83.3%!important}.video-block{max-width:none!important}.mobile_hide{min-height:0;max-height:0;max-width:0;display:none;overflow:hidden;font-size:0}.desktop_hide{display:block!important;max-height:none!important}}</style>
</head>
<body class="clean-body" style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#fff">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table class="nl-container" style="table-layout:fixed;vertical-align:top;min-width:320px;border-spacing:0;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;width:100%" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
<tbody>
<tr style="vertical-align:top" valign="top">
<td style="word-break:break-word;vertical-align:top" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
<div style="background-color:#fff">
<div class="block-grid" style="min-width:320px;max-width:500px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;Margin:0 auto;background-color:transparent">
<div style="border-collapse:collapse;display:table;width:100%;background-color:transparent">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eee"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px;border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px"><![endif]-->
<div class="col num12" style="min-width:320px;max-width:500px;display:table-cell;vertical-align:top;width:500px">
<div class="col_cont" style="width:100%!important">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0;padding-left:0">
<!--<![endif]-->
<div class="img-container center fixedwidth" align="center" style="padding-right:0;padding-left:0">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right:0;padding-left:0" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://i.ibb.co/wsvvZpq/logo-talanx-1.png" style="text-decoration:none;-ms-interpolation-mode:bicubic;height:auto;border:0;width:100%;max-width:175px;display:block" width="175">
<!--[if mso]></td></tr></table><![endif]-->
</div>
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<div style="background-color:transparent">
<div class="block-grid" style="min-width:320px;max-width:500px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;Margin:0 auto;background-color:transparent">
<div style="border-collapse:collapse;display:table;width:100%;background-color:transparent">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px;border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px"><![endif]-->
<div class="col num12" style="min-width:320px;max-width:500px;display:table-cell;vertical-align:top;width:500px">
<div class="col_cont" style="width:100%!important">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0;padding-left:0">
<!--<![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:5px;padding-left:5px;padding-top:5px;padding-bottom:5px;font-family:Arial,sans-serif"><![endif]-->
<div style="color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px">
<div class="txtTinyMce-wrapper" style="font-size:12px;line-height:1.2;color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14px">
<p style="font-size:12px;line-height:1.2;word-break:break-word;mso-line-height-alt:14px;margin:0">&nbsp;</p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:10px;padding-left:10px;padding-top:10px;padding-bottom:10px;font-family:Arial,sans-serif"><![endif]-->
<div style="color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">
<div class="txtTinyMce-wrapper" style="line-height:1.2;font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;color:#555;mso-line-height-alt:14px">
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Dear Esteemed Investor,</p>
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p>
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Your investment has been confirmed. See more details below.</p>
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p>
<p style="line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;word-break:break-word;font-size:14px;mso-line-height-alt:17px;margin:0"><span style="font-size:14px">Plan:&nbsp; &nbsp;<strong>${i.plan.toUpperCase()}</strong></span></p>
<p style="line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;word-break:break-word;font-size:14px;mso-line-height-alt:17px;margin:0"><span style="font-size:14px">Amount:&nbsp;&nbsp;<strong>${i.fund}USD</strong></span></p>
<p style="line-height:1.2;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;word-break:break-word;font-size:14px;mso-line-height-alt:17px;margin:0"><span style="font-size:14px">Daily Returns:&nbsp;<strong>${i.rate}%</strong></span></p>
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p>
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Best Regards,</p>
<p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">RenoxROI Team</p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:5px;padding-left:5px;padding-top:5px;padding-bottom:5px;font-family:Arial,sans-serif"><![endif]-->
<div style="color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px">
<div class="txtTinyMce-wrapper" style="font-size:12px;line-height:1.2;color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14px">
<p style="font-size:12px;line-height:1.2;word-break:break-word;mso-line-height-alt:14px;margin:0">&nbsp;</p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>`	
}
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
};



// VERIFICATION MAIL ...
var verify_email = (first_name, email, code, id, domain) =>{
var link = `${domain}/verify/${code}/${id}`;
const data = {
	from: `RenoxROI <help@renoxroi.com>`,
	to: email,
	subject: `Email Verification`,
	html: ``	
};
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });
};

// Password Reset MAIL ...
var reset_mail = (user, dom) =>{
var link = `${dom}/reset/${user.reset_password.code}/${user._id}`;
const data = {
	from: `RenoxROI <help@renoxroi.com>`,
	to: user.email,
	subject: `Password Reset`,
	html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]--><title></title> <!--[if !mso]><!--> <!--<![endif]--><style type="text/css">body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit !important;text-decoration:none !important}</style><style type="text/css" id="media-query">@media (max-width: 520px){.block-grid,.col{min-width:320px !important;max-width:100% !important;display:block !important}.block-grid{width:100% !important}.col{width:100% !important}.col_cont{margin:0 auto}img.fullwidth,img.fullwidthOnMobile{max-width:100% !important}.no-stack .col{min-width:0 !important;display:table-cell !important}.no-stack.two-up .col{width:50% !important}.no-stack .col.num2{width:16.6% !important}.no-stack .col.num3{width:25% !important}.no-stack .col.num4{width:33% !important}.no-stack .col.num5{width:41.6% !important}.no-stack .col.num6{width:50% !important}.no-stack .col.num7{width:58.3% !important}.no-stack .col.num8{width:66.6% !important}.no-stack .col.num9{width:75% !important}.no-stack .col.num10{width:83.3% !important}.video-block{max-width:none !important}.mobile_hide{min-height:0px;max-height:0px;max-width:0px;display:none;overflow:hidden;font-size:0px}.desktop_hide{display:block !important;max-height:none !important}}</style></head><body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;"> <!--[if IE]><div class="ie-browser"><![endif]--><table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top"><tbody><tr style="vertical-align: top;" valign="top"><td style="word-break: break-word; vertical-align: top;" valign="top"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]--><div style="background-color:#fff;"><div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]--><div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;"><div class="col_cont" style="width:100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <!--<![endif]--><div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;"> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://i.ibb.co/wsvvZpq/logo-talanx-1.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 175px; display: block;" width="175"> <!--[if mso]></td></tr></table><![endif]--></div> <!--[if (!mso)&(!IE)]><!--></div> <!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div><div style="background-color:transparent;"><div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]--><div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;"><div class="col_cont" style="width:100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <!--<![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]--><div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;"><div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"><p style="font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">&nbsp;</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]--><div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"><div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; color: #555555; mso-line-height-alt: 14px;"><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Dear Esteemed Investor,</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">You have requested to reset your password. Use the code below to reset your password.</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p><p style="line-height: 1.2; word-break: break-word; text-align: center; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-size: 20px; mso-line-height-alt: 24px; margin: 0;"><span style="font-size: 20px; color: #fff;"><strong>${user.reset_password.code}</strong></span></p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Best Regards,</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">RenoxROI Team</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]--><div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;"><div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"><p style="font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">&nbsp;</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if (!mso)&(!IE)]><!--></div> <!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table> <!--[if (IE)]></div><![endif]--></body></html>`	
};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
};


// Deposit Notification
var deposit_notif = (deposit, user, created, expires) =>{
	const data = {
		from: 'RenoxROI <help@renoxroi.com>',
		to: user.email,
		subject: 'Deposit Notification',
		html: ``
	};
	// mg.messages().send(data, function (error, body) {
	// 	console.log(body);
	// });
};

// Deposit Confirmation
var deposit_confirm = (deposit, user) =>{
	const data = {
		from: 'RenoxROI <help@renoxroi.com>',
		to: user.email,
		subject: 'Deposit Confirmation',
		html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head> <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width"> <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]--><title></title> <!--[if !mso]><!--> <!--<![endif]--><style type="text/css">body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit !important;text-decoration:none !important}</style><style type="text/css" id="media-query">@media (max-width: 520px){.block-grid,.col{min-width:320px !important;max-width:100% !important;display:block !important}.block-grid{width:100% !important}.col{width:100% !important}.col_cont{margin:0 auto}img.fullwidth,img.fullwidthOnMobile{max-width:100% !important}.no-stack .col{min-width:0 !important;display:table-cell !important}.no-stack.two-up .col{width:50% !important}.no-stack .col.num2{width:16.6% !important}.no-stack .col.num3{width:25% !important}.no-stack .col.num4{width:33% !important}.no-stack .col.num5{width:41.6% !important}.no-stack .col.num6{width:50% !important}.no-stack .col.num7{width:58.3% !important}.no-stack .col.num8{width:66.6% !important}.no-stack .col.num9{width:75% !important}.no-stack .col.num10{width:83.3% !important}.video-block{max-width:none !important}.mobile_hide{min-height:0px;max-height:0px;max-width:0px;display:none;overflow:hidden;font-size:0px}.desktop_hide{display:block !important;max-height:none !important}}</style></head><body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;"> <!--[if IE]><div class="ie-browser"><![endif]--><table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top"><tbody><tr style="vertical-align: top;" valign="top"><td style="word-break: break-word; vertical-align: top;" valign="top"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]--><div style="background-color:#fff;"><div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]--><div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;"><div class="col_cont" style="width:100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <!--<![endif]--><div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;"> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://i.ibb.co/wsvvZpq/logo-talanx-1.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 175px; display: block;" width="175"> <!--[if mso]></td></tr></table><![endif]--></div> <!--[if (!mso)&(!IE)]><!--></div> <!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div><div style="background-color:transparent;"><div class="block-grid " style="min-width: 320px; max-width: 500px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;"><div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;"> <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--> <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]--><div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top; width: 500px;"><div class="col_cont" style="width:100% !important;"> <!--[if (!mso)&(!IE)]><!--><div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"> <!--<![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]--><div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;"><div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"><p style="font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">&nbsp;</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]--><div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;"><div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; color: #555555; mso-line-height-alt: 14px;"><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Dear Esteemed Investor,</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Your deposit has been processed and funds credited to your balance.</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Amount:&nbsp;&nbsp;<strong>${parseFloat(deposit.coin_amount).toFixed(6)}${deposit.coin.toUpperCase()} (${deposit.amount}USD)</strong></p><p style="line-height: 1.2; word-break: break-word; text-align: center; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px; margin: 0;">&nbsp;</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">&nbsp;</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">Best Regards,</p><p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: left; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 17px; margin: 0;">RenoxROI Team</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]--><div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;"><div class="txtTinyMce-wrapper" style="font-size: 12px; line-height: 1.2; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;"><p style="font-size: 12px; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px; margin: 0;">&nbsp;</p></div></div> <!--[if mso]></td></tr></table><![endif]--> <!--[if (!mso)&(!IE)]><!--></div> <!--<![endif]--></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--> <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div> <!--[if (mso)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table> <!--[if (IE)]></div><![endif]--></body></html>`
	};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
};


// Withdrawal Confirmation
var wd_confirm = (wd, user) =>{
	const data = {
		from: 'RenoxROI <help@renoxroi.com>',
		to: user.email,
		subject: 'Payment Confirmation',
		html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><!--[if gte mso 9 ]><xml><o:OfficeDocumentSettings><o:AllowPNG /><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><! [endif]--><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><meta name="viewport" content="width=device-width" /><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge" /><!--<![endif]--><title></title><!--[if !mso]><!--><!--<![endif]--><style type="text/css">body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}*{line-height:inherit}a[x-apple-data-detectors='true']{color:inherit!important;text-decoration:none!important}</style><style type="text/css" id="media-query">@media(max-width:520px){.block-grid,.col{min-width:320px!important;max-width:100%!important;display:block!important}.block-grid{width:100%!important}.col{width:100%!important}.col_cont{margin:0 auto}img.fullwidth,img.fullwidthOnMobile{max-width:100%!important}.no-stack .col{min-width:0!important;display:table-cell!important}.no-stack.two-up .col{width:50%!important}.no-stack .col.num2{width:16.6%!important}.no-stack .col.num3{width:25%!important}.no-stack .col.num4{width:33%!important}.no-stack .col.num5{width:41.6%!important}.no-stack .col.num6{width:50%!important}.no-stack .col.num7{width:58.3%!important}.no-stack .col.num8{width:66.6%!important}.no-stack .col.num9{width:75%!important}.no-stack .col.num10{width:83.3%!important}.video-block{max-width:none!important}.mobile_hide{min-height:0;max-height:0;max-width:0;display:none;overflow:hidden;font-size:0}.desktop_hide{display:block!important;max-height:none!important}}</style></head><body class="clean-body" style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#fff"><!--[if IE]><div class="ie-browser"><![endif]--><table class="nl-container" style="table-layout:fixed;vertical-align:top;min-width:320px;border-spacing:0;border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;width:100%" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top"><tbody><tr style="vertical-align:top" valign="top"><td style="word-break:break-word;vertical-align:top" valign="top"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]--><div style="background-color:#fff"><div class="block-grid" style="min-width:320px;max-width:500px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;margin:0 auto;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px;border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px"><![endif]--><div class="col num12" style="min-width:320px;max-width:500px;display:table-cell;vertical-align:top;width:500px"><div class="col_cont" style="width:100%!important"><!--[if (!mso)&(!IE)]><!--><div style="border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0;padding-left:0"><!--<![endif]--><div class="img-container center fixedwidth" align="center" style="padding-right:0;padding-left:0"><!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right:0;padding-left:0" align="center"><! [endif]--><img class="center fixedwidth" align="center" border="0" src="https://i.ibb.co/wsvvZpq/logo-talanx-1.png" style="text-decoration:none;-ms-interpolation-mode:bicubic;height:auto;border:0;width:100%;max-width:175px;display:block" width="175" /><!--[if mso]></td></tr></table><![endif]--></div><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]></td></tr></table><![endif]--><!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div><div style="background-color:transparent"><div class="block-grid" style="min-width:320px;max-width:500px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;margin:0 auto;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px"><tr class="layout-full-width" style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="500" style="background-color:transparent;width:500px;border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px"><![endif]--><div class="col num12" style="min-width:320px;max-width:500px;display:table-cell;vertical-align:top;width:500px"><div class="col_cont" style="width:100%!important"><!--[if (!mso)&(!IE)]><!--><div style="border-top:0 solid transparent;border-left:0 solid transparent;border-bottom:0 solid transparent;border-right:0 solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0;padding-left:0"><!--<![endif]--><!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:5px;padding-left:5px;padding-top:5px;padding-bottom:5px;font-family:Arial,sans-serif"><![endif]--><div style="color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><div class="txtTinyMce-wrapper" style="font-size:12px;line-height:1.2;color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14px"><p style="font-size:12px;line-height:1.2;word-break:break-word;mso-line-height-alt:14px;margin:0">&nbsp;</p></div></div><!--[if mso]></td></tr></table><![endif]--><!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:10px;padding-left:10px;padding-top:10px;padding-bottom:10px;font-family:Arial,sans-serif"><![endif]--><div style="color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px"><div class="txtTinyMce-wrapper" style="line-height:1.2;font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;color:#555;mso-line-height-alt:14px"><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Dear Esteemed Investor,</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Your withdrawal has been processed and funds credited to your${wd.coin.toUpperCase()} wallet.</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Amount:<strong>${parseFloat(wd.coin_amount).toFixed(6)}${wd.coin.toUpperCase()}(${wd.amount}USD)</strong></p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Transaction ID:<strong>${wd.hash}</strong></p><p style="line-height:1.2;word-break:break-word;text-align:center;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14px;margin:0">&nbsp;</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">&nbsp;</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">Best Regards,</p><p style="font-size:14px;line-height:1.2;word-break:break-word;text-align:left;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:17px;margin:0">RenoxROI Team</p></div></div><!--[if mso]></td></tr></table><![endif]--><!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:5px;padding-left:5px;padding-top:5px;padding-bottom:5px;font-family:Arial,sans-serif"><![endif]--><div style="color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;line-height:1.2;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><div class="txtTinyMce-wrapper" style="font-size:12px;line-height:1.2;color:#555;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14px"><p style="font-size:12px;line-height:1.2;word-break:break-word;mso-line-height-alt:14px;margin:0">&nbsp;</p></div></div><!--[if mso]></td></tr></table><![endif]--><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]></td></tr></table><![endif]--><!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]--></div></div></div><!--[if (mso)|(IE)]></td></tr></table><![endif]--></td></tr></tbody></table><!--[if (IE)]></div><![endif]--></body></html>`
	};
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
};


module.exports = {contact_form, verify_email, deposit_notif, deposit_confirm, reset_mail, welcome_mail, inv_confirm, wd_req, wd_confirm};
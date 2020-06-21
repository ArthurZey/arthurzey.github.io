---
title: "Microsoft Account Security"
date: "2020-06-21"
description: "What passes for security at Microsoft is staggeringly disconcerting."
tags:
  - product-management
  - security
  - microsoft
---

I've never fully understood the conceptual model for the security of Microsoft Accounts. Google isn't perfect, but I feel like I basically get it.

Part of what's going on here is that I don't really care about Microsoft Accounts... Every account I have has always been a holdover from years past, with various accounts having gotten automatically migrated over to their new unified system.

So I've got this one account, a pretty old hotmail.com address. About a week ago, I got an email at the associated gmail.com address that someone tried to access the account, and the email contained a security code...one I did not request. So definitely an illegitimate signin request. Alright; time to change the password...one of those "same password for everything" passwords I used to use before I wisened up.

So I went to log in from hotmail.com. They sent me a security code to the associated gmail.com address. So far, so good. I entered the code, and I was immediately prompted to change my password... I guess even Microsoft knew that my password was woefully insecure. So I changed the password. Then I was prompted to add a recovery phone number to send recovery codes to. No problem; I added my Google Voice number, the one primary number that I use for everything. You'd think that Microsoft would want to verify control over a phone number before it could be added to an account for security purposes. Nope.

Now, some years ago, a lot of those short SMS code systems struggled with Google Voice. Even GitHub occasionally struggled with it within the last year or so. But compatibility has definitely improved over time.

So after changing my Microsoft Account password and adding the recovery phone number, I was prompted to log in with my new password. But my account was locked due to suspicious activity. I guess changing a password and entering the security code emailed to the associated secondary email address is suspicious. _Sigh._ So my only option to unlock the account is to enter another security code. But I added a recovery phone number, so now the only way that I can receive the security code is by SMS, and it's asking me to enter the phone number associated with my account. _Whoops! The Microsoft security code SMS system can't send the message to my number._ I'm guessing it's because it's a Google Voice number. No alternative options available, like sending the code to my gmail.com address. _SIGH._

So I figured I was locked out of my account. But on a whim, since I suspected that it was Microsoft's inability to send a message to a Google Voice number, I decided to enter in the number associated with my physical SIM card in my phone. From Microsoft's perspective, this was a random 10-digit US phone number.

_Of course, that worked._ What in the actual fuck!? Microsoft sent the security code to unlock my account to a random phone number provided by someone who could have been trying to illegitimately gain access to the account...as part of a flow to unlock an account that had suspicious behavior on it. OMFGs.

And then later, as I was looking through the options to add additional account security, it prompted me to verify my account by sending a code via SMSing my Google Voice number (telling me the last 4 digits of the number), calling me at my Google Voice number, or sending an email to the associated secondary email address... Out of curiosity, I selected the SMS option, and this time, it sent me an SMS to my Google Voice number without a problem...

So I'm guessing that Microsoft's "unified" system uses multiple different SMS providers for two-factor authentication.

But good heavens, this is a nightmare mess and absolutely violates even common-sense security practices.

Meanwhile, I have some old hotmail.com addresses that I cannot regain access to (and which I care more about) because I get stuck in weird account verification loops, having provided detailed account information like subject lines of emails and previous passwords that only I could have.

So Microsoft simultaneously has impossibly stringent account recovery standards and also laughably lax standards.

I literally can't even with them.

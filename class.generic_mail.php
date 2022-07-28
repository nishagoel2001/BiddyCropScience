<?php
require 'sendgrid/vendor/autoload.php';

class generic_mail
{
    private $email;

    public function __construct()
    {
        $this->email = new \SendGrid\Mail\Mail();
        $this->email->setFrom("biddycrop@gmail.com", "biddycrop");
    }

    //this function is used to add the list of recipients
    //every time function is called, it adds the recipient addr passed in parameter
    public function addRecipient($addr, $name = '')
    {
        $this->email->addTo($addr, $name);
    }

    //used to set the subject of the email
    public function setSubject($sub)
    {
        $this->email->setSubject($sub);
    }

    //used to set the body of the email if it is plain text
    public function setBody($body)
    {
        $this->email->addContent("text/plain", $body);
    }

    //call this function to send the mail after everything is set
    public function send()
    {
        $sendgrid = new \SendGrid('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');
        $response = $sendgrid->send($this->email);
        if ($response->statusCode() == '202')
            return true;
        else
            return false;
    }

    //this function is called if the body of the mail is html
    // $message is the html content
    // $basedir is passed as the base directory for the files used in html
    public function setHTML($message, $basedir = '')
    {
        $this->email->addContent(
            "text/html",
            $message
        );
    }
}

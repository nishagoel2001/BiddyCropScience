<?php
include_once 'conn.php';
include_once 'class.generic_mail.php';
include_once './template/newsletterEmail.php';
try {
    $newsletter = new Newsletter();
    if ($newsletter->addToDB($_POST['email']))
        if ($newsletter->send_mail($_POST['email']))
            echo json_encode(array("status" => true));
} catch (Exception $exp) {
    echo json_encode(array("status" => false, "error" => $exp->getMessage()));
}
class Newsletter
{
    private $db;
    private $table;

    public function __construct()
    {
        $this->db = connect();
        $this->table = new NewsLetterTab();
    }

    public function addToDB($email)
    {
        $sql = "INSERT INTO " . $this->table->TABLE_NAME . " (" . $this->table->COL_EMAIL . ") VALUES ('$email')";
        return $this->db->query($sql);
    }

    public function send_mail($email)
    {
        $mail = new generic_mail();
        $mail->addRecipient($email);
        $mail->setSubject("Thank you for subscribing.");
        $mail->setHTML(getBody(), "./template/");
        return $mail->send();
    }
}

<?php
include_once 'conn.php';
include_once 'class.generic_mail.php';
include_once "./template/contactUsEmail.php";
try {
    $contact = new Contact();
    if ($contact->addToDB($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['msg']))
        if ($contact->send_mail($_POST['name'], $_POST['email']) == true)
            echo json_encode(array("status" => true));
} catch (Exception $exp) {
    echo json_encode(array("status" => false, "error" => $exp->getMessage()));
}
class Contact
{
    private $db;
    private $table;

    public function __construct()
    {
        $this->db = connect();
        $this->table = new ContactUsTab();
    }

    public function addToDB($name, $email, $phone, $msg)
    {
        $sql = "INSERT INTO " . $this->table->TABLE_NAME . " (" . $this->table->COL_NAME . ", " . $this->table->COL_EMAIL . ", " . $this->table->COL_PHONE . ", " . $this->table->COL_MESSAGE . ") VALUES ('$name', '$email', $phone, '$msg')";
        return $this->db->query($sql);
    }

    public function send_mail($name, $email)
    {
        $mail = new generic_mail();
        $mail->addRecipient($email);
        $mail->setSubject("Thank you for contacting Biddy Crop.");
        $mail->setHTML(getBody($name));
        $status = $mail->send();
        return $status;
    }
}

<?php
function connect()
{
    $db = new mysqli("biddycropdb.cow8yyw09tgc.ap-south-1.rds.amazonaws.com", "admin", "123mypassword", "biddycropdb");
    if ($db->connect_error) {
        echo ("Connection failed: " . $db->connect_error);
        exit;
    } else {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        return $db;
    }
}
final class ContactUsTab
{
    public $TABLE_NAME = "contactus_tab";
    public $COL_NAME = "name";      //varchar
    public $COL_PHONE = "phone";    //int
    public $COL_MESSAGE = "msg";    //varchar
    public $COL_EMAIL = "email";    //varchar
}

final class NewsLetterTab
{
    public $TABLE_NAME = "newsletter_tab";
    public $COL_EMAIL = "email";    //varchar
}

<?php
// Check if the form was submitted via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Create or append to the datas.html file
    $file = 'datas.html';
    $data = "<tr><td>$name</td><td>$email</td><td>$phone</td><td>$message</td></tr>\n";

    // Check if file exists
    if (!file_exists($file)) {
        // If file doesn't exist, create with table headers
        $header = "<table border='1'><tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th></tr>\n";
        file_put_contents($file, $header);
    }
    

    // Append the form data in a new row
    file_put_contents($file, $data, FILE_APPEND);

    // Optionally redirect or show a success message
    echo "Thank you, your message has been saved!";
}
?>

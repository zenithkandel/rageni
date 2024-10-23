<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Create or append data to datas.html
$file = 'datas.html';
$data = "
<tr>
    <td>$name</td>
    <td>$email</td>
    <td>$phone</td>
    <td>$message</td>
</tr>";

if (!file_exists($file)) {
    // Create file with table headers if it doesn't exist
    $htmlContent = "
    <html>
    <head>
        <title>Form Data</title>
    </head>
    <body>
        <table border='1'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
            </tr>
            $data
        </table>
    </body>
    </html>";
    file_put_contents($file, $htmlContent);
} else {
    // Append new row if file exists
    $htmlContent = file_get_contents($file);
    $updatedContent = str_replace('</table>', "$data</table>", $htmlContent);
    file_put_contents($file, $updatedContent);
}

// Send email
$to = "zenithkandel0@gmail.com";  // Send to user (or use another address)
$subject = "Form Submission Confirmation";
$body = "Hello $name,\n\nThank you for your submission. Here is a copy of your details:\n\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message\n\nBest regards,\nYour Company";
$headers = "From: info@kushmaartproject.com.np";  // Replace with your sender email

if (mail($to, $subject, $body, $headers)) {
    echo "Form submitted successfully and email sent!";
} else {
    echo "Form submitted, but email could not be sent.";
}
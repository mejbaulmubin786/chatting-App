<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job listings</title>
</head>
<body>
    <h1><?php echo $title; ?></h1>
    <ul>
        <?php foreach ($jobs as $job): ?>
            <li><?php echo $job; ?> </li>
        <!--or-->
        <!--<li><?php echo htmlspecialchars($job, ENT_QUOTES) ?> use for security </li>-->
        <?php endforeach;?>
    </ul>
</body>
</html>

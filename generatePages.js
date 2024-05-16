const fs = require('fs');

// Read the JSON file
const data = fs.readFileSync('reloaded_skulls.json', 'utf8');

// Parse the JSON file
const skulls = JSON.parse(data);

// Get all unique indexes
const indexes = [...new Set(skulls.map(skull => skull.index))];

// For each index, create a new HTML file
indexes.forEach(index => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirect Page</title>
    <script>
        var customUrl = 'algorand://SKULL2LL7O74KEEHTW5OLBO5MNGFA6EMZDIKFSL7QLUXINLARMW5VWV5NA?amount=0&asset=${index}';
        window.location.replace(customUrl);
    </script>
</head>
<body>
    <p>If you are not redirected, <a href="algorand://SKULL2LL7O74KEEHTW5OLBO5MNGFA6EMZDIKFSL7QLUXINLARMW5VWV5NA?amount=0&asset=${index}">click here</a>.</p>
</body>
</html>
    `;

    // Write the HTML file
    fs.writeFileSync(`${index}.html`, html);
});

String hashedPassword = hashPasswordSHA256(password);

// Insert user data into the database
String sql = "INSERT INTO users (username, password) VALUES (?, ?)";
try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
    preparedStatement.setString(1, username);
    preparedStatement.setString(2, hashedPassword);

    int affectedRows = preparedStatement.executeUpdate();
    if (affectedRows > 0) {
        System.out.println("User registered successfully!");
    } else {
        System.out.println("User registration failed.");
    }

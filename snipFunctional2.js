User user = userService.getUserByUsername(username);
        if (user == null) {
            model.addAttribute("error", "Incorrect username");
            return "login";
        }
        if (userService.authenticateUser(username, password)) {
            model.addAttribute("message", "Login successful!");
            return "success";
        } else {
            model.addAttribute("error", "Incorrect password");
            return "login";
        }
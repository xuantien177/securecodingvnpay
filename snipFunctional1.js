

        if (userService.authenticateUser(username, password)) {
            model.addAttribute("message", "Login successful!");
            return "success";
        } else {
            model.addAttribute("error", "Incorrect username or password!");
            return "login";
        }



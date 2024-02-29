protected void configure(HttpSecurity http) throws Exception {
    http
      .csrf(csrf ->
        csrf.enable() 
      );
  }

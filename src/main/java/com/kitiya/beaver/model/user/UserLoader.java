package com.kitiya.beaver.model.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserLoader implements CommandLineRunner {
    private final UserRepository userRepository;

    @Autowired
    public UserLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        this.userRepository.save(new User("Twilight", "Sparkle", "twilight.sparkle@gmail.com"));
        this.userRepository.save(new User("Pinkie", "Pie", "pinkie.pie@gmail.com"));
        this.userRepository.save(new User("Rainbow", "Dash", "rainbow.dash@gmail.com"));
        this.userRepository.save(new User("Apple", "Bloom", "apple.bloom@gmail.com"));
    }
}

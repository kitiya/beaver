package com.kitiya.beaver.dataloader;

import com.kitiya.beaver.data.entity.Role;
import com.kitiya.beaver.data.entity.User;
import com.kitiya.beaver.data.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

//@Component
//@Order(3)
public class UserLoader {//implements CommandLineRunner {
//    private final UserRepository userRepository;
//
//    @Autowired
//    public UserLoader(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        this.userRepository.save(new User("Twilight", "Sparkle", "twilight.sparkle@gmail.com", Role.USER));
//        this.userRepository.save(new User("Pinkie", "Pie", "pinkie.pie@gmail.com", Role.USER));
//        this.userRepository.save(new User("Rainbow", "Dash", "rainbow.dash@gmail.com", Role.USER));
//        this.userRepository.save(new User("Apple", "Bloom", "apple.bloom@gmail.com", Role.USER));
//        this.userRepository.save(new User("Princess", "Anna", "princess.anna@gmail.com", Role.ADMIN));
//        this.userRepository.save(new User("Queen", "Elsa", "queen.else@gmail.com", Role.ADMIN));
//    }
}

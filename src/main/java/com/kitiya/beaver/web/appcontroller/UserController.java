package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.data.entity.User;
import com.kitiya.beaver.data.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    Iterable<User> users() {
        return userRepository.findAll();
    }

    @PostMapping("/users")
    ResponseEntity<User> createUser(@Valid @RequestBody User user) throws URISyntaxException {
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }
}

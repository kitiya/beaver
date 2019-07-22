package com.kitiya.beaver.controller;

import com.kitiya.beaver.model.Provider;
import com.kitiya.beaver.repository.ProviderRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProviderController {
    private ProviderRepository providerRepository;

    public ProviderController(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    @GetMapping("/providers")
    Collection<Provider> providers() {
        return (Collection<Provider>) providerRepository.findAll();
    }

    @GetMapping("/providers/{id}")
    Provider provider(@PathVariable Long id) {
        // returns null if id is invalid. is this okay??
        return providerRepository.findById(id).orElse(null);
    }

    @PostMapping("/providers")
    ResponseEntity<Provider> crateProvider(@Valid @RequestBody Provider provider) {
        Provider result = providerRepository.save(provider);
        return ResponseEntity.ok().body(result);
    }
}

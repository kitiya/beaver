package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.business.service.ProviderService;
import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.repository.ProviderRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProviderController {
    private ProviderRepository providerRepository;
    private ProviderService providerService;

    public ProviderController(ProviderService providerService, ProviderRepository providerRepository) {
        this.providerService = providerService;
        this.providerRepository = providerRepository;
    }

    @GetMapping("/providers")
    Page<Provider> getAllProviders(@RequestParam Optional<Integer> page,
                                   @RequestParam Optional<Integer> size,
                                   @RequestParam Optional<String> sortBy) {
        Pageable pageable = PageRequest.of(
          page.orElse(0),
          size.orElse(3),
          Sort.by(sortBy.orElse("name")).ascending());
        return providerService.getAllProviders(pageable);
    }

    // not used
    @GetMapping("/providers_org")
    Iterable<Provider> getAllProviders_org() {
        return providerService.getAllProviders_org();
    }

    @GetMapping("/providers/{id}")
    Provider getProviderById(@PathVariable Long id) {
        return providerService.getById(id);
    }

    @GetMapping("/providers/names")
    Iterable<Provider> getAllProviderNames() {
        return providerService.getAllProviderNames();
    }

    @PostMapping("/providers")
    ResponseEntity<Provider> crateProvider(@Valid @RequestBody Provider provider) {
        Provider result = providerRepository.save(provider);
        return ResponseEntity.ok().body(result);
    }
}

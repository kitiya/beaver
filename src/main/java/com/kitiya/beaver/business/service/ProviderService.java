package com.kitiya.beaver.business.service;

import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class ProviderService {
    private ProviderRepository providerRepository;

    @Autowired
    public ProviderService(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    public Page<Provider> getAllProviders(Pageable pageable) {
        return providerRepository.findAll(pageable);
    }

    // not used anymore
    public Iterable<Provider> getAllProviders_org() {
        return providerRepository.findAll(Sort.by(Sort.Direction.DESC, "modifiedDate"));
    }

    public Iterable<Provider> getAllProviderNames() {
        return (Iterable<Provider>) providerRepository.getAllProviderNames();
    }

    public Provider getById(Long id) {
        return providerRepository.findById(id).orElse(null);
    }

    public Provider addEditProvider(Provider provider, Optional<Long> id) {
        Provider result = providerRepository.save(provider);
        return result;
    }

    public Boolean deleteProvider(Long id) {
        Provider provider = providerRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No found: provider id# " + id));
        provider.setImageUrls(null);
        providerRepository.delete(provider);
        return true;
    }
}

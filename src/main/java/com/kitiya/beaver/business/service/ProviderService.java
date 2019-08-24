package com.kitiya.beaver.business.service;

import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ProviderService {
    private ProviderRepository providerRepository;

    @Autowired
    public ProviderService(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    public Iterable<Provider> getAllProviders() {
        return providerRepository.findAll(Sort.by(Sort.Direction.DESC, "modifiedDate"));

    }

    public Iterable<Provider> getAllProviderName() {
        return providerRepository.getAllProviderNames();
    }
}

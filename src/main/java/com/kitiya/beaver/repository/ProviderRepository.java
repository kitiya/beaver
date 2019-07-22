package com.kitiya.beaver.repository;

import com.kitiya.beaver.model.Provider;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProviderRepository extends CrudRepository<Provider, Long> {
}

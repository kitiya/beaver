package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProviderRepository extends JpaRepository<Provider, Long> {

}

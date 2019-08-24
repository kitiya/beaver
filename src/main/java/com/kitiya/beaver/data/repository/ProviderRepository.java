package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface ProviderRepository extends JpaRepository<Provider, Long> {
    Provider findByName(String name);

    @Query("select distinct name from provider;")
    List<Provider> getAllProviderNames();
}

package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProviderRepository extends JpaRepository<Provider, Long> {
    Provider findByName(String name);

    @Query("SELECT MIN(id) AS id, name FROM Provider GROUP BY name ORDER BY name")
    Iterable<Provider> getAllProviderNames();
}

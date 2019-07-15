package com.kitiya.beaver.repository;

import com.kitiya.beaver.model.Activity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ActivityRepository extends CrudRepository<Activity, Long> {
}

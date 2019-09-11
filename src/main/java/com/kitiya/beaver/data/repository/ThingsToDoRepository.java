package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.ThingsToDo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface ThingsToDoRepository extends JpaRepository<ThingsToDo, Long> {
    List<ThingsToDo> findAllByOrderByName();
}

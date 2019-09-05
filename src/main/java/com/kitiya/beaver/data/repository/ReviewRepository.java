package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("select r from Review r left join ThingsToDo t on r.thingsToDo = t.id where t.id = :thingsToDoId")
    Iterable<Review> findByThingToDoId(Long thingsToDoId);
}

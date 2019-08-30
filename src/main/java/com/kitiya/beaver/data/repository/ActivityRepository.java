package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import com.kitiya.beaver.data.entity.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    List<Activity> findAllByOrderByModifiedDateDesc();

    List<Activity> findByNameContainingOrderByModifiedDateDesc(String likeName);

    List<Activity> findByDescriptionContainingOrderByModifiedDateDesc(String description);

    List<Activity> findByType(ActivityType type);

    @Query("select a from Activity a where a.fromAge <= :age and :age <= a.toAge")
    List<Activity> findByAge(@Param("age") Integer age);

    @Query("select a,p from Activity a left join Provider p on a.provider = p.id where p.name like concat('%',:likeProvider,'%')")
    List<Activity> findByProviderContaining(String likeProvider);

    @Query("select a,p from Activity a left join Provider p on a.provider = p.id where p.city = :city")
    List<Activity> findByCity(City city);
}

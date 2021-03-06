package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import com.kitiya.beaver.data.entity.City;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    Page<Activity> findAllByOrderByModifiedDateDesc(Pageable pageable);

    Page<Activity> findAll(Pageable pagable);

    List<Activity> findByNameContainingOrderByModifiedDateDesc(String likeName);

    List<Activity> findByDescriptionContainingOrderByModifiedDateDesc(String description);

    List<Activity> findByTypeOrderByModifiedDateDesc(ActivityType type);

    @Transactional
    @Modifying
    @Query("DELETE from Activity a where a.id = :id")
    void deleteActivity(Long id);

    @Query("select a,p from Activity a left join Provider p on a.provider = p.id where p.name like concat('%',:likeProvider,'%')")
    List<Activity> findByProviderContainingOrderByModifiedDateDesc(String likeProvider);

    @Query("select a from Activity a where a.fromAge <= :age and :age <= a.toAge")
    List<Activity> findByAgeOrderByModifiedDateDesc(@Param("age") Integer age);

    @Query("select a,p from Activity a left join Provider p on a.provider = p.id where p.city = :city")
    List<Activity> findByCityOrderByModifiedDateDesc(City city);

    // not used

    @Query("SELECT MIN(id) AS id, type AS type FROM Activity GROUP BY type ORDER BY type")
    List<Object> getAllActivityTypes();

    List<Activity> findByNameOrDescriptionContainingOrderByModifiedDateDesc(String nameKeyword, String descKeyword);
}
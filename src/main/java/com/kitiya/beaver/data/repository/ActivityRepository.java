package com.kitiya.beaver.data.repository;

import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.Date;
import java.util.List;

@RepositoryRestResource
public interface ActivityRepository extends JpaRepository<Activity, Long> {

    List<Activity> findByNameContainingOrderByModifiedDateDesc(String likeName);


    List<Activity> findByProviderContaining(String likeProvider);

    List<Activity> findByType(ActivityType type);

    List<Activity> findByTypeOrProvider(ActivityType type, String Provider);

    @Query("select a from Activity a where a.startDate <= :date and :date <= a.endDate")
    List<Activity> findByDate(@Param("date") Date date);

    List<Activity> findByFromAge(Integer fromAge);
    List<Activity> findByToAge(Integer toAge);

    @Query("select a from Activity a where a.fromAge <= :age and :age <= a.toAge")
    List<Activity> findByAge(@Param("age") Integer age);


}

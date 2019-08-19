package com.kitiya.beaver.service;

import com.kitiya.beaver.model.Activity;
import com.kitiya.beaver.model.ActivityType;
import com.kitiya.beaver.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;

@Service
public class ActivityService {

    private ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public Activity createActivity(@NotBlank String name, ActivityType type, String description) {
        return activityRepository.save(new Activity(name, type,description));
    }

    public Iterable<Activity> lookup() {
        return activityRepository.findAll();
    }

    public long total() {
        return activityRepository.count();
    }
}

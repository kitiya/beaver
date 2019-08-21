package com.kitiya.beaver.business.service;

import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import com.kitiya.beaver.data.repository.ActivityRepository;
import com.kitiya.beaver.data.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;

@Service
public class ActivityService {

    private ActivityRepository activityRepository;
    private ProviderRepository providerRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository, ProviderRepository providerRepository) {
        this.activityRepository = activityRepository;
        this.providerRepository = providerRepository;
    }
//
//    public Activity createActivity(@NotBlank String name, ActivityType type, String description) {
//        return activityRepository.save(new Activity(name, type,description));
//    }

    public Iterable<Activity> lookup() {
        return activityRepository.findAll();
    }

    public long total() {
        return activityRepository.count();
    }
}

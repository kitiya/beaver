package com.kitiya.beaver.business.service;

import com.kitiya.beaver.business.domain.ActivityDomain;
import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.StringJoiner;

@Service
public class ActivityDomainService {
    private ActivityRepository activityRepository;

    @Autowired
    public ActivityDomainService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<ActivityDomain> getAllActivitiesWithProviders() {
        Iterable<Activity> activities = this.activityRepository.findAll();
        List<ActivityDomain> activityDomains = new ArrayList<>();
        activities.forEach(activity -> {
            ActivityDomain activityDomain = new ActivityDomain();
            activityDomain.setActivityId(activity.getId());
            activityDomain.setActivityName(activity.getName());
            activityDomain.setActivityType(activity.getType());
            activityDomain.setActivityDescription(activity.getDescription());

            String ageRange = String.join(
                    " - ",
                    activity.getFromAge().toString(),
                    activity.getToAge().toString());

            activityDomain.setAgeRange(ageRange);
            activityDomain.setProviderId(activity.getProvider().getId());
            activityDomain.setProviderName(activity.getProvider().getDescription());
            activityDomain.setLocation(activity.getProvider().getAddress());
            activityDomain.setStartDate(activity.getSchedule().getStartDate());
            activityDomain.setEndDate(activity.getSchedule().getEndDate());
            activityDomain.setStartTime(activity.getSchedule().getStartTime());
            activityDomain.setEndTime(activity.getSchedule().getEndTime());
            activityDomain.setDayOfWeek(activity.getSchedule().getDayOfWeek());
            activityDomains.add(activityDomain);
        });

        return activityDomains;
    }
}

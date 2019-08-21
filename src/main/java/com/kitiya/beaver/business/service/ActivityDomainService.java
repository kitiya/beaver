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
        activities.forEach(activity ->
            activityDomains.add(getActivityDomain(activity))
        );

        return activityDomains;
    }

    public ActivityDomain getById(Long id) {
        Activity activity = this.activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("ID " + id + " Not found"));

        return getActivityDomain(activity);
    }

    private ActivityDomain getActivityDomain(Activity activity) {
        ActivityDomain activityDomain = new ActivityDomain();

        activityDomain.setActivityId(activity.getId());
        activityDomain.setName(activity.getName());
        activityDomain.setType(activity.getType());
        activityDomain.setDescription(activity.getDescription());

        String ageRange = String.join(
                " - ",
                activity.getFromAge().toString(),
                activity.getToAge().toString());

        activityDomain.setAgeRange(ageRange);

        activityDomain.setCost(activity.getCost());
        activityDomain.setImageUrls(activity.getImageUrls());
        activityDomain.setProviderId(activity.getProvider().getId());
        activityDomain.setProviderName(activity.getProvider().getName());
        activityDomain.setLocation(activity.getProvider().getAddress());
        activityDomain.setStartDate(activity.getSchedule().getStartDate());
        activityDomain.setEndDate(activity.getSchedule().getEndDate());
        activityDomain.setStartTime(activity.getSchedule().getStartTime());
        activityDomain.setEndTime(activity.getSchedule().getEndTime());
        activityDomain.setDayOfWeek(activity.getSchedule().getDayOfWeek());

        return activityDomain;
    }
}

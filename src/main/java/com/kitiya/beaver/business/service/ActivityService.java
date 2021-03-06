package com.kitiya.beaver.business.service;

import com.kitiya.beaver.data.entity.*;
import com.kitiya.beaver.data.repository.ActivityRepository;
import com.kitiya.beaver.data.repository.ProviderRepository;
import com.kitiya.beaver.data.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ActivityService {

    private ActivityRepository activityRepository;
    private ProviderRepository providerRepository;
    private ScheduleRepository scheduleRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository, ProviderRepository providerRepository, ScheduleRepository scheduleRepository) {
        this.activityRepository = activityRepository;
        this.providerRepository = providerRepository;
        this.scheduleRepository = scheduleRepository;
    }

    public Activity addActivity(Activity activity, Optional<Long> id) {
        Schedule schedule;

        if (id.isPresent()) {
            schedule = scheduleRepository.findById(activity.getSchedule().getId()).orElse(null);
        } else {
            schedule = new Schedule();
        }
        schedule.setStartDate(activity.getSchedule().getStartDate());
        schedule.setEndDate(activity.getSchedule().getEndDate());
        schedule.setStartTime(activity.getSchedule().getStartTime());
        schedule.setEndTime(activity.getSchedule().getEndTime());
        schedule.setDayOfWeek(activity.getSchedule().getDayOfWeek());
        activity.setSchedule(schedule);

        Provider lookedUpProvider = providerRepository.findByName(activity.getProvider().getName());

        if (lookedUpProvider != null) {
            activity.setProvider(lookedUpProvider);
        } else {
            lookedUpProvider = providerRepository.findByName("Kitiya Academy");

            if (lookedUpProvider != null) {
                activity.setProvider(lookedUpProvider);
            } else {
                List<String> imageUrls = new ArrayList<>(Arrays.asList(
                        "https://cdn.pixabay.com/photo/2012/10/14/11/20/koala-61189__340.jpg",
                        "https://cdn.pixabay.com/photo/2018/04/07/20/32/swan-3299528__340.jpg",
                        "https://cdn.pixabay.com/photo/2019/07/21/12/02/monkeys-4352588__340.jpg"
                ));

                Provider newProvider = new Provider();
                newProvider.setName("Kitiya Academy");
                newProvider.setDescription("Donut sweet roll I love chocolate I love. Pudding sugar plum pie cotton candy cake marshmallow jelly. Chocolate cake bonbon chupa chups cheesecake cheesecake bonbon.");
                newProvider.setStreetAddress("101 React Street");
                newProvider.setCity(City.SASKATOON);
                newProvider.setProvince(Province.SK);
                newProvider.setWebsite("https://srisuk.com/");
                newProvider.setEmail("info@kitiya.com");
                newProvider.setPhone("306-123-4555");
                newProvider.setImageUrls(imageUrls);
                providerRepository.save(newProvider);
                activity.setProvider(newProvider);
            }
        }

        activity.setModifiedDate(new Date());

        return activityRepository.save(activity);
    }

    public Boolean deleteActivity(Long id) {
        Activity activity = activityRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Activity not found for this id :: " + id));
        activity.setImageUrls(null);

        activityRepository.deleteActivity(id);
        return true;
    }
}
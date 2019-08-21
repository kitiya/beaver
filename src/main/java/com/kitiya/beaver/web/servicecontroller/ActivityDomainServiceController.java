package com.kitiya.beaver.web.servicecontroller;

import com.kitiya.beaver.business.domain.ActivityDomain;
import com.kitiya.beaver.business.service.ActivityDomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActivityDomainServiceController {

    private ActivityDomainService activityDomainService;

    @Autowired
    public ActivityDomainServiceController(ActivityDomainService activityDomainService) {
        this.activityDomainService = activityDomainService;
    }

    @GetMapping(value = "/domain-activities")
    Collection<ActivityDomain> getAllAcivitiesWithProvider() {
        return (Collection<ActivityDomain>) this.activityDomainService.getAllActivitiesWithProviders();
    }

    @GetMapping(value="/domain-activities/{id}")
    ActivityDomain activityDomain(@PathVariable Long id) {
        return activityDomainService.getById(id);
    }
}

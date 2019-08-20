package com.kitiya.beaver.web.servicecontroller;

import com.kitiya.beaver.business.domain.ActivityDomain;
import com.kitiya.beaver.business.service.ActivityDomainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

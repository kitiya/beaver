package com.kitiya.beaver.controller;

import com.kitiya.beaver.model.Activity;
import com.kitiya.beaver.repository.ActivityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActivityController {
    private ActivityRepository activityRepository;

    public ActivityController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @GetMapping("/activities")
    Collection<Activity> activities() {
        return (Collection<Activity>) activityRepository.findAll();
    }

    @PostMapping("/activities")
    ResponseEntity<Activity> createActivity(@Valid @RequestBody Activity activity) throws URISyntaxException {
        Activity result = activityRepository.save(activity);
        return ResponseEntity.ok().body(result);
    }
}

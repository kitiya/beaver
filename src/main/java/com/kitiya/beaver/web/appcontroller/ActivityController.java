package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.business.service.ActivityService;
import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import com.kitiya.beaver.data.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collection;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActivityController {

    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    private ActivityRepository activityRepository;
    private ActivityService activityService;

    @Autowired
    public ActivityController(ActivityRepository activityRepository, ActivityService activityService) {
        this.activityRepository = activityRepository;
        this.activityService = activityService;
    }

    @GetMapping("/activities")
    Iterable<Activity> activities() {
        return activityService.getAllActivities();
    }

    @GetMapping("/activities/{id}")
    Activity activity(@PathVariable Long id) {
        // returns null if id is invalid. is this okay??
        return activityRepository.findById(id).orElse(null);
    }

    @GetMapping(value="/activities/search", params="name")
    @ResponseBody
    Collection<Activity> activityByName(@RequestParam(value="name") String name) {
        return activityRepository.findByNameContainingOrderByModifiedDateDesc(name);
    }
    
    @GetMapping("/activities/type/{type}")
    Collection<Activity> activityByType(@PathVariable ActivityType type) {
        return activityRepository.findByType(type);
    }

//    @GetMapping(value = "/activities/search", params ="provider")
//    Collection<Activity> activityByProvider(@RequestParam (value="provider") String provider) {
//        return activityRepository.findByProviderContaining(provider);
//    }

//    @GetMapping("/activities/date/{dateString}")
//    Collection<Activity> activityByDate(@PathVariable String dateString) {
//        Date date = null;
//        if(dateString != null) {
//            try {
//                date = DATE_FORMAT.parse(dateString);
//            } catch (ParseException e) {
//                date = new Date();
//            }
//        } else {
//            date = new Date();
//        }
//
//        return activityRepository.findByDate(date);
//    }

    @GetMapping("/activities/from-age/{fromAge}")
    Collection<Activity> activitybyFromAge(@PathVariable Integer fromAge) {
        return activityRepository.findByFromAge(fromAge);
    }

    @GetMapping("/activities/to-age/{toAge}")
    Collection<Activity> activityByToAge(@PathVariable Integer toAge) {
        return activityRepository.findByToAge(toAge);
    }

    @GetMapping("/activities/age/{age}")
    Collection<Activity> activityByAge(@PathVariable Integer age) {
        return activityRepository.findByAge(age);
    }

    @PostMapping("/activity")
    ResponseEntity<Activity> addActivity(@Valid @RequestBody Activity activity) throws URISyntaxException {
        Activity result = activityService.addActivity(activity);
        return ResponseEntity.ok().body(result);
    }
}

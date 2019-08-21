package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import com.kitiya.beaver.data.repository.ActivityRepository;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActivityController {

    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    private ActivityRepository activityRepository;

    public ActivityController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @GetMapping("/activities")
    Collection<Activity> activities() {
        return (Collection<Activity>) activityRepository.findAll(Sort.by(Sort.Direction.DESC,"modifiedDate"));
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

    @PostMapping("/activities")
    ResponseEntity<Activity> createActivity(@Valid @RequestBody Activity activity) throws URISyntaxException {
        Activity result = activityRepository.save(activity);
        return ResponseEntity.ok().body(result);
    }
}

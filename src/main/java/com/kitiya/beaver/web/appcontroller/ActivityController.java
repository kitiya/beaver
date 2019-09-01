package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.business.service.ActivityService;
import com.kitiya.beaver.data.entity.Activity;
import com.kitiya.beaver.data.entity.ActivityType;
import com.kitiya.beaver.data.entity.City;
import com.kitiya.beaver.data.repository.ActivityRepository;
import com.kitiya.beaver.search.IActivityDAO;
import com.kitiya.beaver.search.SearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActivityController {

    private ActivityRepository activityRepository;
    private ActivityService activityService;

    private static final DateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    @Autowired
    public ActivityController(ActivityRepository activityRepository, ActivityService activityService) {
        this.activityRepository = activityRepository;
        this.activityService = activityService;
    }

    // implemented in the client side
    @GetMapping("/activities")
    Iterable<Activity> activities() {
        return activityRepository.findAllByOrderByModifiedDateDesc();
    }

    @GetMapping("/activities/{id}")
    Activity activity(@PathVariable Long id) {
        return activityRepository.findById(id).orElse(null);
    }

    @PostMapping("/activities")
    ResponseEntity<Activity> addActivity(@Valid @RequestBody Activity activity) throws URISyntaxException {
        Activity result = activityService.addActivity(activity);
        return ResponseEntity.ok().body(result);
    }

    // working functions but haven't been used on the client side

    @RequestMapping(value="/activities/search", params = "name")
    @ResponseBody
    Collection<Activity> searchByName(@RequestParam(value="name") String name) {
        return activityRepository.findByNameContainingOrderByModifiedDateDesc(name);
    }

    @RequestMapping(value = "/activities/search", params = "description")
    @ResponseBody
    Collection<Activity> searchByDescription(@RequestParam(value="description") String description) {
        return activityRepository.findByDescriptionContainingOrderByModifiedDateDesc(description);
    }

    @RequestMapping(value = "/activities/search", params = "type")
    @ResponseBody
    Collection<Activity> searchByType(@RequestParam(value="type") String type) {
        return activityRepository.findByType(ActivityType.fromCode(type.toUpperCase()));
    }

    @RequestMapping(value = "/activities/search", params = "age")
    @ResponseBody
    Collection<Activity> searchByAge(@RequestParam(value="age") Integer age) {
        return activityRepository.findByAge(age);
    }

    @RequestMapping(value = "/activities/search", params = "provider")
    @ResponseBody
    Collection<Activity> searchByProvider(@RequestParam(value="provider") String provider) {
        return activityRepository.findByProviderContaining(provider);
    }

    @RequestMapping(value = "/activities/search", params = "city")
    @ResponseBody
    Collection<Activity> searchByCity(@RequestParam(value="city") String city) {
        return activityRepository.findByCity(City.fromCode(city.toUpperCase()));
    }

    // =================== //

//    @GetMapping("/date/{dateString}")
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

    @Autowired
    private IActivityDAO api;

    @RequestMapping(method=RequestMethod.GET, value= "/activities/search/{name}")
    @ResponseBody
    public List<Activity> searchAll(@RequestParam(value="q", required = false) String search) {
        List<SearchCriteria> params = new ArrayList<SearchCriteria>();
        if (search != null) {
            Pattern pattern = Pattern.compile("(\\w+?)(:|<|>)(\\w+?),");
            Matcher matcher = pattern.matcher(search + ",");
            while (matcher.find()) {
                params.add(new SearchCriteria(matcher.group(1),
                        matcher.group(2), matcher.group(3)));
            }
        }

        return api.searchActivity(params);
    }
}
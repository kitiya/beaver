package com.kitiya.beaver.dataloader;

import com.kitiya.beaver.model.Activity;
import com.kitiya.beaver.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class ActivityLoader implements CommandLineRunner {
    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityLoader(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Activity activity = new Activity(
                "Chef's Academy",
                "Art and Craft",
                "Want to take your cooking skills to the next level? At this advanced camp, you’ll review food prep, kitchen safety and cooking techniques with expert instructors, then move on up to soups, sauces and braising. Plus, recipe development, layering of flavours, ethnic dishes, decorating and presentation. And, of course, your hat and apron are yours to take home, along with new skills and great recipes.",
                "SaskPoly",
                "Saskatchewan Polytechnic, Saskatoon Campus",
                "1 August 2019",
                "31 August 2019",
                "4:00 PM",
                "5:00 PM",
                new BigDecimal(100)
        );
        this.activityRepository.save(activity);
    }
}

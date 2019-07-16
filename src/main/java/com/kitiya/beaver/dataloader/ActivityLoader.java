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
        this.activityRepository.save(new Activity(
                "Chef's Academy",
                "Art and Craft",
                "Want to take your cooking skills to the next level? At this advanced camp, you’ll review food prep, kitchen safety and cooking techniques with expert instructors, then move on up to soups, sauces and braising. Plus, recipe development, layering of flavours, ethnic dishes, decorating and presentation. And, of course, your hat and apron are yours to take home, along with new skills and great recipes.",
                "SaskPoly",
                "Saskatchewan Polytechnic, Saskatoon Campus",
                "1 August 2019",
                "31 August 2019",
                "4:00 PM",
                "5:00 PM",
                new BigDecimal(250)
        ));

        this.activityRepository.save(new Activity(
                "Tiny Tots Dance Class",
                "Dance",
                "These classes give your little one the ability to be creative while learning musicality, space awareness, group diversity and basic technique to enhance their love of Dance. Your child will have lots and lots of fun while learning steps to help them grow to the next level.",
                "Studio One",
                "1821 Jackson Ave, Saskatoon SK, S7H 2N5 Canada",
                "1 July 2019",
                "31 July 2019",
                "10:00 AM",
                "11:00 AM",
                new BigDecimal(300)

        ));
    }
}

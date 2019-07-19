package com.kitiya.beaver.dataloader;

import com.kitiya.beaver.model.Activity;
import com.kitiya.beaver.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class ActivityLoader implements CommandLineRunner {
    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityLoader(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        List<String> imageUrls;

        imageUrls = new ArrayList<>(Arrays.asList(
                "https://www.atcoblueflamekitchen.com/Classes/Kids-Cooking-Classes/PublishingImages/spring-camp-500x300.jpg",
                "https://miro.medium.com/max/1838/1*xJOHJj5gsN-29OkaG-JzOg.jpeg"
        ));
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
                imageUrls,
                new BigDecimal(250)
        ));

        imageUrls = new ArrayList<>(Arrays.asList(
                "https://s3.amazonaws.com/osmd-wp/wp-content/uploads/2015/05/21170139/leap-n-learn-photo.jpg",
                "http://inmotiondc.com/wp-content/uploads/2018/06/160816twinklestars-069-e1529434735473.jpg?quality=100.3015071716250"
        ));
        this.activityRepository.save(new Activity(
                "Creative Ballet",
                "Dance",
                "This program introduces the child to the primary basics of ballet technique in a dynamic and creative environment.  Children will improve poise, balance, coordination and muscle development. Musicality and individual creativity is encouraged in a safe and nurturing environment.",
                "Studio One",
                "1821 Jackson Ave, Saskatoon SK, S7H 2N5 Canada",
                "1 July 2019",
                "31 July 2019",
                "10:00 AM",
                "11:00 AM",
                imageUrls,
                new BigDecimal(300)

        ));

        imageUrls = new ArrayList<>(Arrays.asList(
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcZfkKfppmb50sWjkg-RryiUcpbcm0Ma2jZ0fIjK6f2toHF_B3w",
                "https://static1.squarespace.com/static/56be3472f8baf34b6af54be7/t/5887f04d197aea163184bdc8/1485303919146/violin+ensemble.jpg?format=1500w"
        ));
        this.activityRepository.save(new Activity(
                "Violin Lessons",
                "Music",
                "One-on-one violin lessons are offered in Suzuki method or Traditional method for ages 5 through adult with one of our highly skilled instructors." ,
                "Studio One",
                "St John's Hall, 816 Spadina Cres E, Saskatoon, Saskatchewan, S7K3H4",
                "3 September 2019",
                "11 June 2020",
                "10:00 AM",
                "9:00 PM",
                imageUrls,
                new BigDecimal(1200)

        ));
    }
}

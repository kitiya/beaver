package com.kitiya.beaver.dataloader;

import com.kitiya.beaver.data.entity.*;
import com.kitiya.beaver.data.repository.ActivityRepository;
import com.kitiya.beaver.data.repository.ProviderRepository;
import com.kitiya.beaver.data.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.util.*;

//@Component
//@Order(2)
public class ActivityLoader { //implements CommandLineRunner {
//    private final ActivityRepository activityRepository;
//    private final ProviderRepository providerRepository;
//    private final ScheduleRepository scheduleRepository;
//
//    @Autowired
//    public ActivityLoader(ActivityRepository activityRepository, ProviderRepository providerRepository, ScheduleRepository scheduleRepository) {
//        this.activityRepository = activityRepository;
//        this.providerRepository = providerRepository;
//        this.scheduleRepository = scheduleRepository;
//    }
//
//    DateFormat dateFormatter = new SimpleDateFormat("dd-MM-yyyy");
//    DateFormat timeFormatter = new SimpleDateFormat("HH:mm");
//
//    @Override
//    public void run(String... args) throws Exception {
//        List<String> imageUrls;
//
//        Provider provider;
//        Schedule schedule;
//
//        Provider lookedUpProvider;
//        String providerName;
//
//        // ---- insert an activity#1---- //
//
//        imageUrls = new ArrayList<>(Arrays.asList(
//                "https://wemovesk.com/wp-content/uploads/2018/07/toddler-kinder-acro-dance-1.jpg",
//                "https://wemovesk.com/wp-content/uploads/2018/08/music-together.jpg",
//                "https://wemovesk.com/wp-content/uploads/2018/07/toddler-kinder-acro-dance.jpg"
//
//        ));
//
//        providerName = "We Move";
//        lookedUpProvider = providerRepository.findByName(providerName);
//        if (lookedUpProvider == null) {
//            provider = new Provider();
//            provider.setName(providerName);
//            provider.setDescription("Join our team of Personal Trainers, Physiotherapists, Nurses, Educated Professionals in Dance, Music, and Fitness as we move you safely through each class. We will aid you with your fitness goals, big or small, while you join our fitness community.");
//            provider.setStreetAddress("123 Main Street");
//            provider.setCity(City.CALGARY);
//            provider.setProvince(Province.AB);
//            provider.setWebsite("https://wemovesk.com/");
//            provider.setEmail("info@wemovesk.com");
//            provider.setPhone("306-123-4555");
//            provider.setImageUrls(imageUrls);
//        } else {
//            provider = lookedUpProvider;
//        }
//
//        schedule = new Schedule();
//        schedule.setStartDate(dateFormatter.parse("01-09-2019"));
//        schedule.setEndDate(dateFormatter.parse("31-12-2019"));
//        schedule.setStartTime(timeFormatter.parse("13:00"));
//        schedule.setEndTime(timeFormatter.parse("14:00"));
//        schedule.setDayOfWeek(DayOfWeek.SUNDAY);
//
//        this.activityRepository.save(new Activity(
//                "Toddler Kinder Acro",
//                ActivityType.SPORT,
//                "Acro Kids is a great way to try a fun new genre, while improving the children’s strength, motor skill development, and body awareness.",
//                2,
//                3,
//                providerRepository.save(provider),
//                schedule,
//                Long.valueOf(200),
//                imageUrls,
//                new Date(),
//                dateFormatter.parse("21-08-2019")
//        ));
//
//        // ---- insert an activity#2 ---- //
//
//        imageUrls = new ArrayList<>(Arrays.asList(
//                "https://uc.uxpin.com/files/1002565/982286/cooking-04-201a2c.jpeg",
//                "https://uc.uxpin.com/files/1002565/982286/cooking-01-f97a54.jpg",
//                "https://uc.uxpin.com/files/1002565/982286/cooking-03-6e4e4a.jpeg"
//        ));
//
//        providerName = "Saskatchewan Polytechnic";
//        lookedUpProvider = providerRepository.findByName(providerName);
//        if (lookedUpProvider == null) {
//            provider = new Provider();
//            provider.setName(providerName);
//            provider.setDescription("Sask Polytech is Saskatchewan's primary public institution for post-secondary technical education and skills training, recognized nationally and internationally for its expertise and innovation. Led by faculty, students and alumni, Sask Polytech camps provide a safe and fun environment for kids to explore new interests, discover new talents and make new friends.");
//            provider.setStreetAddress("1130 Idylwyld Dr N");
//            provider.setCity(City.SASKATOON);
//            provider.setProvince(Province.SK);
//            provider.setWebsite("https://saskpolytech.ca");
//            provider.setEmail("info@saskpolytech.ca");
//            provider.setPhone("306-123-5677");
//            provider.setImageUrls(imageUrls);
//        } else {
//            provider = lookedUpProvider;
//        }
//
//        schedule = new Schedule();
//        schedule.setStartDate(dateFormatter.parse("18-09-2019"));
//        schedule.setEndDate(dateFormatter.parse("31-12-2019"));
//        schedule.setStartTime(timeFormatter.parse("10:30"));
//        schedule.setEndTime(timeFormatter.parse("11:30"));
//        schedule.setDayOfWeek(DayOfWeek.SATURDAY);
//
//        this.activityRepository.save(new Activity(
//                "Chef's Academy",
//                ActivityType.ART_CRAFT,
//                "Want to take your cooking skills to the next level? At this advanced camp, you’ll review food prep, kitchen safety and cooking techniques with expert instructors, then move on up to soups, sauces and braising. Plus, recipe development, layering of flavours, ethnic dishes, decorating and presentation. And, of course, your hat and apron are yours to take home, along with new skills and great recipes.",
//                8,
//                12,
//                //providerRepository.findById(Long.valueOf(1)).orElseThrow(()->new RuntimeException("id not found")),
//                providerRepository.save(provider),
//                schedule,
//                Long.valueOf(300),
//                imageUrls,
//                new Date(),
//                dateFormatter.parse("1-08-2019")
//        ));
//
//        // ---- insert an activity ---- //
//
//        imageUrls = new ArrayList<>(Arrays.asList(
//                "https://dynamicmedia.zuza.com/zz/m/original_/0/3/03c2cc2c-4af9-448e-a63d-9a258d1b5b7b/IYN5_CF___Super_Portrait.jpg",
//                "https://d302e0npexowb4.cloudfront.net/wp-content/uploads/2018/07/17093826/Emaar-kids-vacation-VR-Park.jpg",
//                "https://coursehorse.imgix.net/images/course/1410/main/rolling_robots_5481b52ce8db8.jpeg?auto=format%2Cenhance%2Ccompress&crop=entropy&fit=crop&h=220&ixlib=php-1.2.1&q=90&w=330"
//        ));
//
//        schedule = new Schedule();
//        schedule.setStartDate(dateFormatter.parse("01-10-2019"));
//        schedule.setEndDate(dateFormatter.parse("31-10-2019"));
//        schedule.setStartTime(timeFormatter.parse("16:00"));
//        schedule.setEndTime(timeFormatter.parse("18:00"));
//        schedule.setDayOfWeek(DayOfWeek.WEDNESDAY);
//
//        this.activityRepository.save(new Activity(
//                "VR Camp",
//                ActivityType.SCIENCE_TECH,
//                "Embark on an EPIC adventure in virtual reality! In this cutting-edge class, you’ll learn the foundations of VR design by creating your own virtual world, exploring simulated environments and crafting memorable 3D experiences." ,
//                12,
//                15,
//                providerRepository.findById(Long.valueOf(2)).orElseThrow(()->new RuntimeException("id not found")),
//                schedule,
//                Long.valueOf(150),
//                imageUrls,
//                new Date(),
//                dateFormatter.parse("1-08-2019")
//        ));
//
//        // ---- insert an activity ---- //
//
//        imageUrls = new ArrayList<>(Arrays.asList(
//                "https://static1.squarespace.com/static/550ba261e4b0215d222516fe/t/551ec715e4b06389c8234377/1428080408643/violinteacher.jpg?format=1500w",
//                "https://static1.squarespace.com/static/56be3472f8baf34b6af54be7/t/5887f04d197aea163184bdc8/1485303919146/violin+ensemble.jpg?format=1500w",
//                "https://ofmvc40dolyrl7u9xigg5kyy-wpengine.netdna-ssl.com/wp-content/uploads/2012/09/Kids-Violin-Lesson-at-Sage-Music-School-11.jpg"
//        ));
//
//        providerName = "Wilton Academy of Music";
//        lookedUpProvider = providerRepository.findByName(providerName);
//        if (lookedUpProvider == null) {
//            provider = new Provider();
//            provider.setName(providerName);
//            provider.setDescription("Wilton Academy of Music offers early childhood music education for ages birth to 6 years old. Our curriculum offers age-appropriate classes which target the special ways children learn at various stages in their development.");
//            provider.setStreetAddress("St John's Hall, 816 Spadina Cres E");
//            provider.setCity(City.SASKATOON);
//            provider.setProvince(Province.SK);
//            provider.setWebsite("http://www.wiltonmusic.com/");
//            provider.setEmail("cusotmer.service@wiltonmusic.com");
//            provider.setPhone("306-999-8999");
//            provider.setImageUrls(imageUrls);
//        } else {
//            provider = lookedUpProvider;
//        }
//
//        schedule = new Schedule();
//        schedule.setStartDate(dateFormatter.parse("01-09-2019"));
//        schedule.setEndDate(dateFormatter.parse("30-06-2020"));
//        schedule.setStartTime(timeFormatter.parse("17:30"));
//        schedule.setEndTime(timeFormatter.parse("18:30"));
//        schedule.setDayOfWeek(DayOfWeek.FRIDAY);
//
//        this.activityRepository.save(new Activity(
//                "Violin Lessons",
//                ActivityType.MUSIC,
//                "One-on-one violin lessons are offered in Suzuki method or Traditional method for ages 5 through adult with one of our highly skilled instructors." ,
//                6,
//                12,
//                providerRepository.save(provider),
//                schedule,
//                Long.valueOf(1200),
//                imageUrls,
//                new Date(),
//                dateFormatter.parse("1-06-2019")
//        ));
//
//        // ---- insert an activity ---- //
//
//        imageUrls = new ArrayList<>(Arrays.asList(
//                "https://melodica.ae/wp-content/uploads/2018/09/Untitled-1-1.jpg",
//                "https://s3.amazonaws.com/osmd-wp/wp-content/uploads/2015/05/21170139/leap-n-learn-photo.jpg",
//                "http://inmotiondc.com/wp-content/uploads/2018/06/160816twinklestars-069-e1529434735473.jpg?quality=100.3015071716250"
//        ));
//        providerName = "Aspire Dance Studio";
//        lookedUpProvider = providerRepository.findByName(providerName);
//        if (lookedUpProvider == null) {
//            provider = new Provider();
//            provider.setName(providerName);
//            provider.setDescription("Live performance, health, and child care. Our goal as a school is to focus on these important values when training our families. For our performers, we invite our classes to perform in competitions and recitals as soon as their instructors feel they are ready. For health and fitness, we believe an active life promotes a healthy life and our instructors want to see you succeed in your personal goals.");
//            provider.setStreetAddress("1025 Boychuk Drive");
//            provider.setCity(City.SASKATOON);
//            provider.setProvince(Province.SK);
//            provider.setWebsite("http://www.aspiredanceschool.ca/");
//            provider.setEmail("info@aspiredanceschool.ca");
//            provider.setPhone("306-456-7890");
//            provider.setImageUrls(imageUrls);
//        } else {
//            provider = lookedUpProvider;
//        }
//
//        schedule = new Schedule();
//        schedule.setStartDate(dateFormatter.parse("01-09-2019"));
//        schedule.setEndDate(dateFormatter.parse("30-06-2020"));
//        schedule.setStartTime(timeFormatter.parse("16:00"));
//        schedule.setEndTime(timeFormatter.parse("17:00"));
//        schedule.setDayOfWeek(DayOfWeek.FRIDAY);
//
//        this.activityRepository.save(new Activity(
//                "Creative Ballet",
//                ActivityType.DANCE,
//                "This program introduces the child to the primary basics of ballet technique in a dynamic and creative environment.  Children will improve poise, balance, coordination and muscle development. Musicality and individual creativity is encouraged in a safe and nurturing environment.",
//                3,
//                4,
//                providerRepository.save(provider),
//                schedule,
//                Long.valueOf(950),
//                imageUrls,
//                new Date(),
//                dateFormatter.parse("1-07-2019")
//        ));
//    }
}

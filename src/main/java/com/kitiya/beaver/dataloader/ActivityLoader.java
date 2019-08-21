package com.kitiya.beaver.dataloader;

import com.kitiya.beaver.data.entity.*;
import com.kitiya.beaver.data.repository.ActivityRepository;
import com.kitiya.beaver.data.repository.ProviderRepository;
import com.kitiya.beaver.data.repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.util.*;

@Component
public class ActivityLoader implements CommandLineRunner {
    private final ActivityRepository activityRepository;
    private final ProviderRepository providerRepository;
    private final ScheduleRepository scheduleRepository;

    @Autowired
    public ActivityLoader(ActivityRepository activityRepository, ProviderRepository providerRepository, ScheduleRepository scheduleRepository) {
        this.activityRepository = activityRepository;
        this.providerRepository = providerRepository;
        this.scheduleRepository = scheduleRepository;
    }

    DateFormat dateFormatter = new SimpleDateFormat("dd-MM-yyyy");
    DateFormat timeFormatter = new SimpleDateFormat("HH:mm");

    @Override
    public void run(String... args) throws Exception {
        List<String> imageUrls;

        Provider provider;
        Schedule schedule;

        // ---- insert an activity ---- //

        imageUrls = new ArrayList<>(Arrays.asList(
                "https://wemovesk.com/wp-content/uploads/elementor/thumbs/Winter-Registration-is-open-o0dmpmadt1iekr9nmavzybmc26oxnpo7l9x2tdgsyo.jpg",
                "https://wemovesk.com/wp-content/uploads/elementor/thumbs/Facebook-Template-13-o0dm0f84lx0pd1v7qwt0m6iitcvqbsn8gkdipctpr4.jpg",
                "https://wemovesk.com/wp-content/uploads/elementor/thumbs/Winter-Registration-is-open-o0dmpmadt1iekr9nmavzybmc26oxnpo7l9x2tdgsyo.jpg"

        ));

        provider = new Provider();
        provider.setName("We Move");
        provider.setDescription("Join our team of Personal Trainers, Physiotherapists, Nurses, Educated Professionals in Dance, Music, and Fitness as we move you safely through each class. We will aid you with your fitness goals, big or small, while you join our fitness community.");
        provider.setAddress("123 Main Street");
        provider.setCity(City.EDMONTON);
        provider.setProvince(Province.AB);
        provider.setImageUrls(imageUrls);
        provider.setWebsite("https://wemovesk.com/");

        schedule = new Schedule();
        schedule.setStartDate(dateFormatter.parse("01-09-2019"));
        schedule.setEndDate(dateFormatter.parse("31-12-2019"));
        schedule.setStartTime(timeFormatter.parse("13:00"));
        schedule.setEndTime(timeFormatter.parse("14:00"));
        schedule.setDayOfWeek(DayOfWeek.SUNDAY);

        this.activityRepository.save(new Activity(
                "Toddler Kinder Acro",
                ActivityType.SPORT,
                "Acro Kids is a great way to try a fun new genre, while improving the children’s strength, motor skill development, and body awareness.",
                2,
                3,
                providerRepository.save(provider),
                schedule,
                new Date(),
                dateFormatter.parse("21-08-2019"),
                imageUrls,
                Long.valueOf(250)
        ));
    }
}

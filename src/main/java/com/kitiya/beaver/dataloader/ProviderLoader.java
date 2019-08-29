package com.kitiya.beaver.dataloader;

import com.kitiya.beaver.data.entity.City;
import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.entity.Province;
import com.kitiya.beaver.data.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class ProviderLoader implements CommandLineRunner {
    private final ProviderRepository providerRepository;

    @Autowired
    public ProviderLoader(ProviderRepository providerRepository) {
        this.providerRepository = providerRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        List<String> imageUrls;
        Provider lookedUpProvider;
        String providerName;
        // ----- a new provider ----- //

        imageUrls = new ArrayList<>(Arrays.asList(
           "https://media.chatterblock.com/cache/43/44/434444a8ec86f2fd981ac3a804e686aa.jpg",
           "https://media.chatterblock.com/cache/94/d1/94d1f418de3ffcf1a524398d3734b6de.jpg",
           "https://media.chatterblock.com/cache/a0/52/a052354bff44f18c2c91e41342a7f8cb.jpg"
        ));

        providerName = "Wet Paint Pottery";
        lookedUpProvider = providerRepository.findByName(providerName);
        if (lookedUpProvider == null) {
            this.providerRepository.save(new Provider(
                    providerName,
                    "Our mission at Wet Paint Pottery is to create a relaxed , fun atmosphere where everyone feels welcome. We help the “creatively challenged” find their creative side. Our goal is to provide enough assistance that the customer is delighted with their masterpiece.",
                    "50 632 1st ave north",
                    City.CALGARY,
                    Province.AB,
                    "https://www.wetpaintpottery.com/",
                    "info@wetpaintpottery.com",
                    "306-955-3606",
                    imageUrls
            ));
        }

        // ----- a new provider ----- //
        imageUrls = new ArrayList<>(Arrays.asList(
                "https://media.chatterblock.com/cache/cf/4f/cf4fe89cbb52a7e312227c0688289276.jpg",
                "https://media.chatterblock.com/cache/c1/58/c158fe2cee4e1972c5b7412bd9532056.jpg",
                "https://media.chatterblock.com/cache/a3/20/a3203322873504d5c6e39835222e65cd.png"
        ));

        providerName = "Can-Am Gymnastics Club";
        lookedUpProvider = providerRepository.findByName(providerName);
        if (lookedUpProvider == null) {
            this.providerRepository.save(new Provider(
                    providerName,
                    "Can-Am Gymnastics Club is the largest gymnastics club in Saskatoon and is proud to offer the most programming selection in the city! With classes for babies to adults there is a program suitable for everyone.",
                    "3702 Mitchelmore Ave",
                    City.SASKATOON,
                    Province.SK,
                    "http://canamgymnastics.ca/",
                    "contact@canamgymnastics.ca",
                    "306-955-3606",
                    imageUrls
            ));
        }

        // ----- a new provider ----- //
        imageUrls = new ArrayList<>(Arrays.asList(
                "https://www.icesports.com/Data/SiteImages/ProgramImages/YouthLeagues.jpg",
                "https://www.icesports.com/Data/SiteImages/ProgramImages/bookice2.jpg",
                "https://www.icesports.com/Data/SiteImages/ProgramImages/YouthPrograms.jpg"
        ));

        providerName = "Canlan Ice Sports - Jemini";
        lookedUpProvider = providerRepository.findByName(providerName);
        if (lookedUpProvider == null) {
            this.providerRepository.save(new Provider(
                    providerName,
                    "The Canlan Ice Sports Skating Academy offers a wide selection of skating development programs to meet the needs of any child or adult who wishes to skate. Each level of the Canlan Ice Sports Skating Academy.",
                    "2301 Grasswood East Road",
                    City.SASKATOON,
                    Province.SK,
                    "https://www.icesports.com/jemini/",
                    "connect@jemini.com",
                    "306-955-3606",
                    imageUrls
            ));
        }
    }
}

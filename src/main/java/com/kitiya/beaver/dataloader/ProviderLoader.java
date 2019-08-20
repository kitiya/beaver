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

        imageUrls = new ArrayList<>(Arrays.asList(
           "https://media.chatterblock.com/cache/43/44/434444a8ec86f2fd981ac3a804e686aa.jpg",
           "https://media.chatterblock.com/cache/94/d1/94d1f418de3ffcf1a524398d3734b6de.jpg",
           "https://media.chatterblock.com/cache/a0/52/a052354bff44f18c2c91e41342a7f8cb.jpg"
        ));
        this.providerRepository.save(new Provider(
                "Wet Paint Pottery",
                "Our mission at Wet Paint Pottery is to create a relaxed , fun atmosphere where everyone feels welcome. We help the “creatively challenged” find their creative side. Our goal is to provide enough assistance that the customer is delighted with their masterpiece.",
                "50 632 1st ave north",
                City.OTTAWA,
                Province.ON,
                "https://www.wetpaintpottery.com/",
                imageUrls
        ));


        imageUrls = new ArrayList<>(Arrays.asList(
                "https://media.chatterblock.com/cache/cf/4f/cf4fe89cbb52a7e312227c0688289276.jpg",
                "https://media.chatterblock.com/cache/c1/58/c158fe2cee4e1972c5b7412bd9532056.jpg",
                "https://media.chatterblock.com/cache/a3/20/a3203322873504d5c6e39835222e65cd.png"
        ));
        this.providerRepository.save(new Provider(
                "Can-Am Gymnastics Club",
                "Can-Am Gymnastics Club is the largest gymnastics club in Saskatoon and is proud to offer the most programming selection in the city! With classes for babies to adults there is a program suitable for everyone.",
                "3702 Mitchelmore Ave",
                City.SASKATOON,
                Province.SK,
                "http://canamgymnastics.ca/",
                imageUrls
        ));


        imageUrls = new ArrayList<>(Arrays.asList(
                "https://media.chatterblock.com/cache/20/6b/206b74523d8d2b425d3a76e7d6c9064d.jpg",
                "https://media.chatterblock.com/cache/f8/d5/f8d5a44203095f31656d751dff66fb2e.jpg",
                "https://media.chatterblock.com/cache/a8/eb/a8eb45d19bd24d46bd7221f263f0b9f7.jpg"
        ));
        this.providerRepository.save(new Provider(
                "Saskatchewan Polytechnic",
                "This summer, try something new and experience hands-on learning at Sask Polytech Summer Camps! Sask Polytech is Saskatchewan's primary public institution for post-secondary technical education and skills training, recognized nationally and internationally for its expertise and innovation. ",
                "1130 Idylwyld Dr N",
                City.SASKATOON,
                Province.SK,
                "www.saskpolytech.ca/camps",
                imageUrls
        ));
    }
}

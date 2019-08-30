package com.kitiya.beaver.web.appcontroller;

import com.kitiya.beaver.business.service.ProviderService;
import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.repository.ProviderRepository;
import com.kitiya.beaver.search.ProviderDaoImpl;
import com.kitiya.beaver.search.ProviderPredicatesBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Collection;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ProviderController {
    private ProviderRepository providerRepository;
    private ProviderService providerService;
    private ProviderDaoImpl providerDaoImpl;

    public ProviderController(ProviderRepository providerRepository, ProviderService providerService, ProviderDaoImpl providerDaoImpl) {
        this.providerRepository = providerRepository;
        this.providerService = providerService;
        this.providerDaoImpl = providerDaoImpl;
    }

    @GetMapping("/providers")
    Iterable<Provider> getAllProviders() {
        return providerService.getAllProviders();
    }

    @GetMapping("/providers/{id}")
    Provider getProviderById(@PathVariable Long id) {
        return providerService.getById(id);
    }

    @GetMapping("/providers/names")
    Iterable<Provider> getAllProviderNames() {
        return providerService.getAllProviderNames();
    }

    @PostMapping("/providers")
    ResponseEntity<Provider> crateProvider(@Valid @RequestBody Provider provider) {
        Provider result = providerRepository.save(provider);
        return ResponseEntity.ok().body(result);
    }

    @RequestMapping(method = RequestMethod.GET, value="/providers/search")
    @ResponseBody
    public Iterable<Provider> findAllByQueryDsl(@RequestParam(value="q", required = false) String search) {
        ProviderPredicatesBuilder builder = new ProviderPredicatesBuilder();
        search.replaceAll("\\+", " ");
        if (search != null) {
            Pattern pattern = Pattern.compile("(\\w+?)(:|<|>)(\\w+?(\\s??\\w*?)*?),");
            Matcher matcher = pattern.matcher(search + ",");
            while (matcher.find()) {
                builder.with(matcher.group(1), matcher.group(2), matcher.group(3));
            }
        }
        BooleanExpression exp = builder.build();
        return providerRepository.findAll(exp);
    }
}

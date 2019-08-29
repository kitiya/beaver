package com.kitiya.beaver.data.converter;

import com.kitiya.beaver.data.entity.City;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class CityConverter implements AttributeConverter<City,String> {
    @Override
    public String convertToDatabaseColumn(City city) {
        return city.getCode();
    }

    @Override
    public City convertToEntityAttribute(String dbData) {
        return City.fromCode(dbData);
    }
}

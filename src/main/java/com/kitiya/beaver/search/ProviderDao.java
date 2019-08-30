package com.kitiya.beaver.search;

import com.kitiya.beaver.data.entity.Provider;

import java.util.List;

public interface ProviderDao {
    public Provider save(Provider provider);

    public List<Provider> findProviderByName(String name);

    public List<Provider> findProviderByNameAndDescription(String name);

}

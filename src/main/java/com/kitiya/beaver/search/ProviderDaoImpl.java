package com.kitiya.beaver.search;

import com.kitiya.beaver.data.entity.Provider;
import com.kitiya.beaver.data.entity.QProvider;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class ProviderDaoImpl implements ProviderDao{
    @PersistenceContext
    private EntityManager em;

    @Override
    public Provider save(Provider provider) {
        em.persist(provider);
        return provider;
    }

    @Override
    public List<Provider> findProviderByName(String name) {
        name = "VR Camp";
        final JPAQuery<Provider> query = new JPAQuery<>(em);
        final QProvider provider = QProvider.provider;
        return query.from(provider).where(provider.name.containsIgnoreCase("VR Camp")).fetch();
    }

    @Override
    public List<Provider> findProviderByNameAndDescription(String name) {
        return null;
    }
}

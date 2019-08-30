package com.kitiya.beaver.search;

import com.kitiya.beaver.data.entity.Activity;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.List;

@Repository
public class ActivityDAO implements IActivityDAO{

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Activity> searchActivity(List<SearchCriteria> params) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Activity> query = builder.createQuery(Activity.class);
        Root root = query.from(Activity.class);

        Predicate predicate = builder.conjunction();
        ActivitySearchQueryCriteriaConsumer searchConsumer = new ActivitySearchQueryCriteriaConsumer(predicate, builder, root);
        params.stream().forEach(searchConsumer);
        predicate = searchConsumer.getPredicate();
        query.where(predicate);

        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void save(Activity entity) {

    }
}

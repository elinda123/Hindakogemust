package me.elinda.hindakogemust.repository.search;

import me.elinda.hindakogemust.domain.Place;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Place entity.
 */
public interface PlaceSearchRepository extends ElasticsearchRepository<Place, Long> {
}

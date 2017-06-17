package me.elinda.hindakogemust.repository.search;

import me.elinda.hindakogemust.domain.Feedback;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Feedback entity.
 */
public interface FeedbackSearchRepository extends ElasticsearchRepository<Feedback, Long> {
}

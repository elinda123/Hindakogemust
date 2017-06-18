package me.elinda.hindakogemust.repository;

import me.elinda.hindakogemust.domain.Place;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Place entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlaceRepository extends JpaRepository<Place,Long> {

    @Query(value = "SELECT place.id, " +
        "place.name, " +
        "place.address, " +
        "place.jhi_type, " +
        "ROUND(AVG(CAST(feedback.rating AS DOUBLE)), 1) as average_rating, " +
        "COUNT(feedback.place_id) as count_of_ratings " +
        "FROM place " +
        "\n-- #pageable\n " +
        "LEFT JOIN feedback ON place.id=feedback.place_id " +
        "GROUP BY place.id",
        countQuery = "SELECT COUNT(*) FROM place GROUP BY place.id",
        nativeQuery = true)
    Page<Place> findAll(Pageable pageable);

    @Query(value = "SELECT place.id, " +
        "place.name, " +
        "place.address, " +
        "place.jhi_type, " +
        "ROUND(AVG(CAST(feedback.rating AS DOUBLE)), 1) as average_rating, " +
        "COUNT(feedback.place_id) as count_of_ratings " +
        "FROM place " +
        "\n-- #pageable\n " +
        "LEFT JOIN feedback ON place.id=feedback.place_id " +
        "WHERE LOWER(PLACE.NAME) LIKE LOWER(CONCAT('%',:searchTerm, '%'))" +
        "GROUP BY place.id",
        countQuery = "SELECT COUNT(*) FROM place GROUP BY place.id",
        nativeQuery = true)
    Page<Place> findAllBySearchTerm(@Param("searchTerm") String searchTerm, Pageable pageable);

}

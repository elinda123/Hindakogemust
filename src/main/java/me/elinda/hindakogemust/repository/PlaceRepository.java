package me.elinda.hindakogemust.repository;

import me.elinda.hindakogemust.domain.Place;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Place entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PlaceRepository extends JpaRepository<Place,Long> {
    
}

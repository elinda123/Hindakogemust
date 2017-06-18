package me.elinda.hindakogemust.domain;

import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

import me.elinda.hindakogemust.domain.enumeration.PlaceType;

/**
 * A Place.
 */
@Entity
@Table(name = "place")
@Document(indexName = "place")
public class Place implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "address", nullable = false)
    private String address;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "jhi_type", nullable = false)
    private PlaceType type;

    @Column(name = "average_rating")
    private Double average_rating;

    @Column(name = "count_of_ratings")
    private Long count_of_ratings;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Place name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public Place address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public PlaceType getType() {
        return type;
    }

    public Place type(PlaceType type) {
        this.type = type;
        return this;
    }

    public void setType(PlaceType type) {
        this.type = type;
    }

    public Double getAverage_rating() {
        return average_rating;
    }

    public Place average_rating(Double average_rating) {
        this.average_rating = average_rating;
        return this;
    }

    public void setAverage_rating(Double average_rating) {
        this.average_rating = average_rating;
    }

    public Long getCount_of_ratings() {
        return count_of_ratings;
    }

    public Place count_of_ratings(Long count_of_ratings) {
        this.count_of_ratings = count_of_ratings;
        return this;
    }

    public void setCount_of_ratings(Long count_of_ratings) {
        this.count_of_ratings = count_of_ratings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Place place = (Place) o;
        if (place.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), place.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Place{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", address='" + getAddress() + "'" +
            ", type='" + getType() + "'" +
            ", average_rating='" + getAverage_rating() + "'" +
            ", count_of_ratings='" + getCount_of_ratings() + "'" +
            "}";
    }
}

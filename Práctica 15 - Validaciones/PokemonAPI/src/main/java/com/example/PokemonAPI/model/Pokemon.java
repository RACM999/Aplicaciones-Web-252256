package com.example.PokemonAPI.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


   @NotBlank(message = "No vacio")
   @Size(min= 2, max=50, message ="nombre debe tener mas de dos letras")
    private String nombre;



    @NotBlank(message = "No puede estar vacio")
    private String tipo;


    @NotNull(message="Nivel es requerido")
    @Min(value = 1, message="el minimo es 1")
    @Max(value = 100, message="el maximo es 100")
    private Integer nivel;
    @NotNull(message="ataque es requerido")
    @Min(value = 1, message="el minimo es 1")

    private Integer ataque;

    @NotNull(message="Nivel es requerido")
    @Min(value = 0, message="No puede tener defensa negativa")

    private Integer defensa;

    @Size (max= 255, message = "La longitud no debe exceder los 255 caracteres")
    private String descripcion;


    @URL(message="Imagen debe ser una url")
    private String imagenUrl;


    @Email(message = "El formato debe ser un correo")
    private String correoEntrenador;

    @PastOrPresent(message = "La fecha no debe superar la actual")
    private LocalDate fechaNacimiento;


    @Positive(message = "El peso deb ser mayor a 0")
    private Double peso;


    @Pattern(regexp =  "^(\\+?\\d{1,3}[- ]?)?\\d{10}$" ,  message ="El formato del telefono esta mal")
    private String telefonoEntrenador;

    @AssertTrue(message = "El Pokemon debe estar sano")
    private Boolean estaSano;

}

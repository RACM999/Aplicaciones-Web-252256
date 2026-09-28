package com.example.NebulaMusic.Model;

public class Usuario {
    private String nombre;
    private String correo;
    private String contrasenia;
    private String pseudonimo;
    private String genero;
    private String suscripcion;
    private String fechaNacimiento;
    private String terminos;
    private String comentarios;


    public Usuario() {
    }



    public Usuario(String nombre, String correo, String contrasenia, String pseudonimo, String genero, String suscripcion, String fechaNacimiento, String terminos, String comentarios) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasenia = contrasenia;
        this.pseudonimo = pseudonimo;
        this.genero = genero;
        this.suscripcion = suscripcion;
        this.fechaNacimiento = fechaNacimiento;
        this.terminos = terminos;
        this.comentarios = comentarios;
    }

    public String getNombre() {
        return nombre;
    }

    public String getCorreo() {
        return correo;
    }

    public String getContrasenia() {
        return contrasenia;
    }

    public String getPseudonimo() {
        return pseudonimo;
    }

    public String getGenero() {
        return genero;
    }

    public String getSuscripcion() {
        return suscripcion;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public String getTerminos() {
        return terminos;
    }

    public String getComentarios() {
        return comentarios;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setContrasenia(String contrasenia) {
        this.contrasenia = contrasenia;
    }

    public void setPseudonimo(String pseudonimo) {
        this.pseudonimo = pseudonimo;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public void setSuscripcion(String suscripcion) {
        this.suscripcion = suscripcion;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public void setTerminos(String terminos) {
        this.terminos = terminos;
    }

    public void setComentarios(String comentarios) {
        this.comentarios = comentarios;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "nombre='" + nombre + '\'' +
                ", correo='" + correo + '\'' +
                ", contrasenia='" + contrasenia + '\'' +
                ", pseudonimo='" + pseudonimo + '\'' +
                ", genero='" + genero + '\'' +
                ", suscripcion='" + suscripcion + '\'' +
                ", fechaNacimiento='" + fechaNacimiento + '\'' +
                ", terminos='" + terminos + '\'' +
                ", comentarios='" + comentarios + '\'' +
                '}';
    }
}

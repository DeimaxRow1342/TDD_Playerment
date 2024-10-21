class Metrica {
    constructor(numeroCommit, explicacion, tipo = 'convencional') {
        this.numeroCommit = numeroCommit;
        this.puntaje = 0;
        this.explicacion = explicacion;
        this.pruebas = null;
        this.cobertura = null;
        this.cantidadLineas = null;
        this.complejidad = null;
        this.frecuencia = null;
        this.tipo = tipo;
    }

    getNumeroCommit() {
        return this.numeroCommit;
    }

    getPuntaje() {
        return this.puntaje;
    }

    getExplicacion() {
        return this.explicacion;
    }

    getFrecuencia(){
        return this.frecuencia;
    }

    getTipo() {
        return this.tipo;
    }
    
    cargarMetricas(pruebas, cantidadLineas, cobertura, complejidad, frecuencia){
        if(this.tipo == 'convencional'){
            this.pruebas = pruebas;
            this.cobertura = cobertura;
            this.cantidadLineas = cantidadLineas;
            this.complejidad = complejidad;
            this.frecuencia = frecuencia;
            this.puntaje = this.calcularPuntaje(cobertura, cantidadLineas, pruebas, complejidad, frecuencia);
        } else {
            this.pruebas = null;
            this.cobertura = null;
            this.cantidadLineas = null;
            this.complejidad = null;
            this.frecuencia = null;
            this.puntaje = 0;
        }
    }

    calcularPuntaje(cobertura, cantidadLineas, pruebas, complejidad, frecuencia){
        const puntajePruebas = this.calcularPuntajePorPruebas(pruebas);
        const puntajeCobertura = this.calcularPuntajePorCobertura(cobertura);
        const puntajeCantidadDeLineas = this.calcularPuntajePorCantidadLineas(cantidadLineas);
        const puntajeComplejidad = this.calcularPuntajePorComplejidad(complejidad);
        const puntajeFrecuencia = this.calcularPuntajePorFrecuencia(frecuencia);
        return puntajePruebas + puntajeCobertura + puntajeCantidadDeLineas + puntajeComplejidad + puntajeFrecuencia;
    }

    calcularPuntajePorCantidadLineas(cantidadLineas) {
        if (cantidadLineas >=0 && cantidadLineas < 20) {
            return 20;
        } else if (cantidadLineas >= 20 && cantidadLineas <= 40) {
            return 16;
        } else if (cantidadLineas > 40 && cantidadLineas <= 60) {
            return 12;
        } else if (cantidadLineas > 60){
            return 8;
        }
        return 0;
    }

    calcularPuntajePorPruebas(pruebas) {
            const porcentajeConPruebas = (pruebas / this.numeroCommit) * 100;
            if (porcentajeConPruebas < 60) {
                return 8;
            } else if (porcentajeConPruebas >= 60 && porcentajeConPruebas < 80) {
                return 12;
            } else if (porcentajeConPruebas >= 80 && porcentajeConPruebas < 100) {
                return 16;
            }else if (porcentajeConPruebas === 100) {
                return 20;
            } else {
                return 0;
            
        }
    }

    calcularPuntajePorCobertura(cobertura){
        if(cobertura < 70 && cobertura > 0)
            return 8;
        else if(cobertura >= 70 && cobertura < 80)
            return 12;
        else if(cobertura >= 80 && cobertura <= 90)
            return 16;
        else if(cobertura > 90)
            return 20;
        else
            return 0;
    }

    calcularPuntajePorComplejidad(complejidad){
        if(complejidad === "Excelente"){
            return 20;
        } else if (complejidad === "Bueno"){
            return 16;
        } else if(complejidad === "Regular"){
            return 12;
        } else if(complejidad === "Deficiente"){
            return 8;
        }
        return 0;
    }

    calcularPuntajePorFrecuencia(frecuencia){
        if(frecuencia <= 2){
            return 20;
        } else if(frecuencia == 3){
            return 16;
        } else if(frecuencia <= 7){ //Commits poco regulares o frecuentes
            return 12;
        } else if(frecuencia > 7){ //Commits irregulares
            return 8;
        }
        return 0;
    }

    contarDias(fechaInicio, fechaFin) {
        const partesInicio = fechaInicio.split('/');
        const partesFin = fechaFin.split('/');
        const fechaInicioObj = new Date(partesInicio[2], partesInicio[1] - 1, partesInicio[0]); 
        const fechaFinObj = new Date(partesFin[2], partesFin[1] - 1, partesFin[0]);
    
        const diferencia = fechaFinObj.getTime() - fechaInicioObj.getTime();
    
        const dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    
        return dias;
    }
}
export default Metrica;
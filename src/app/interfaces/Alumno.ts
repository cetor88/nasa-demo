export interface Alumno {
    payload: Payload[];
    code:    number;
    message: string;
}

export interface Payload {
    id_alu:     number;
    nombre_alu: string;
    ap_alu:     string;
    am_alu:     string;
    edad_alu:   number;
    sexo_alu:   SexoALU;
    foto:       string;
}

export enum SexoALU {
    Femenino = "Femenino",
    Masculino = "Masculino",
}

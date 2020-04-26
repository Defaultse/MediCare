export interface Doctor {
    id: number;
    name: string;
    // image: File;
    type_of_activity: string;
    awards: string;
}

export interface Patient {
    id: number;
    name: string;
    status: string;
    drugs: string;
    details: string;
    doctor_id: number;
}

export class LoginResponse {
    token: string;
  }
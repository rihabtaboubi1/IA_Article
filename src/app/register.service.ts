import { Injectable } from '@angular/core';
import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  
  constructor(private http: HttpClient) {}

  // getAllRegisters (optional)
  getAllRegisters(): Observable<Register[]> {
    return this.http.get<Register[]>(BASE_URL);
  }

  // registerUser
  registerUser(register: Register): Observable<Register> {
    return this.http.post<Register>(BASE_URL, register);
  }

  // getRegisterById (optional)
  getRegisterById(id: number): Observable<Register> {
    return this.http.get<Register>(`${BASE_URL}/${id}`);
  }

  // deleteRegister (optional)
  deleteRegister(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }
}

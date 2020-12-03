import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
        
  /**
   * Save a new Customer object in the Backend server data base.
   * @param book
   */
   saveCustomer(customer: Customer): Observable<Customer>{
       return this.http.post<Customer>(environment.apiUrl+'/rest/customer/api/addCustomer', customer);
   }
   
   /**
    * Update an existing Customer object in the Backend server data base.
    * @param customer
    */
    updateCustomer(customer: Customer): Observable<Customer>{
        return this.http.put<Customer>(environment.apiUrl+'/rest/customer/api/updateCustomer', customer);
    }
    
    /**
     * Delete an existing Customer object in the Backend server data base.
     * @param customer
     */
     deleteCustomer(customer: Customer): Observable<string>{
         return this.http.delete<string>(environment.apiUrl+'/rest/customer/api/deleteCustomer/'+customer.id);
     }
   
   /**
    * Search customer by email
    * @param email
    */
   searchCustomerByEmail(email: string): Observable<Customer>{
       return  this.http.get<Customer>(environment.apiUrl+'/rest/customer/api/searchByEmail?email='+email);
   }
   
  /**
   * Search books by pagination
   * @param beginPage
   * @param endPage, 
   */
   searchCustomerByLastName(lastName: string): Observable<Customer[]>{
           return this.http.get<Customer[]>(environment.apiUrl+'/rest/customer/api/searchByLastName?lastName='+lastName);
   }
}

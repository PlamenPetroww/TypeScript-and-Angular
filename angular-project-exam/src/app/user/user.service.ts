import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { filter, from, map, Observable, of, switchMap } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore,
    private authService: AuthService) {}

    get currentUser$(): Observable<User | null> {
      return this.authService.currentUser$.pipe(
        switchMap((user) => {
          if(!user?.uid) {
            return of(null)
          }

          const ref = doc(this.firestore, 'users', user?.uid);
          return docData(ref) as Observable<User>
        })
      )
    }

    addUser(user: User): Observable<void> {
      const ref = doc(this.firestore, 'users', user.uid);
      return from(setDoc(ref, user))
    }
}

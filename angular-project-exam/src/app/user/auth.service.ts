import { Injectable } from '@angular/core';
import { concatMap, from, Observable, of, switchMap, tap } from 'rxjs';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  UserInfo,
} from '@firebase/auth';
import { Auth, authState } from '@angular/fire/auth';
import { HotToastService } from '@ngneat/hot-toast';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth,
    private fireAuth: AngularFireAuth,
    private router: Router) {}

    user$ = this.fireAuth.authState;

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  

  /* updateProfile(profileData: Partial<UserInfo>): Observable<any> {
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap((user) => {
        if (!user) throw new Error('Not authenticated');

        return updateProfile(user, profileData);
      })
    );
  } */

  logout(): Observable<any> {
    return from(this.auth.signOut())
  }

}

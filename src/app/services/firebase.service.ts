import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/firestore';

import { Url } from '../url';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private fireservices: AngularFirestore) {}
  addUrl(objUrl) {
    this.fireservices.collection('urls').add(objUrl);
  }
  getData() {
    return this.fireservices
      .collection('urls')
      .get()
      .forEach((t) => console.log(t));
  }
}

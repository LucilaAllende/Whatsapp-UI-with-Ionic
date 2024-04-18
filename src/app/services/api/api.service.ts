import { Injectable } from '@angular/core';
import { doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) { }

  docRef(path: string) {
    return doc(this.firestore, path);
  }

  setDocument(path: string, data: any) {
    const dataRef = this.docRef(path);
    return setDoc(dataRef, data);
  }

  getDocById(path: string) {
    const dataRef = this.docRef(path);
    return getDoc(dataRef);
  }
}

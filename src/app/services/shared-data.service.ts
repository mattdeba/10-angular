import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  sharedString: string = '';

  setSharedString(newString: string) {
    this.sharedString = newString;
  }
}

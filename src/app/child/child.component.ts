import { Component } from '@angular/core'
import {SharedDataService} from "../services/shared-data.service";

@Component({
  selector: 'child',
  templateUrl: 'child.component.html'
})
export class ChildComponent {
  constructor(private dataService: SharedDataService) {}

  get myString() {
    return this.dataService.sharedString;
  }

}

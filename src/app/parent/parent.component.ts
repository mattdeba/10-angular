import { Component } from '@angular/core'
import {SharedDataService} from "../services/shared-data.service";

@Component({
  selector: 'parent',
  templateUrl: 'parent.component.html'
})
export class ParentComponent {
  constructor(private dataService: SharedDataService) {
  }

  setSharedString() {
    this.dataService.setSharedString('data defined by the parent !');
  }
}

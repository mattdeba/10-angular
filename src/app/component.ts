import { Component } from "@angular/core";
import * as XLSX from "xlsx";
@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {

  arrayBuffer: any;
  file: File | null = null;
  excelData: any[][] = [];
  dataLoaded = false;

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  uploadFile() {
    if (this.file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const binaryString: string = e.target.result;
        const workbook: XLSX.WorkBook = XLSX.read(binaryString, {
          type: 'binary',
        });
        const sheetName: string = workbook.SheetNames[0];
        const worksheet: XLSX.WorkSheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        this.dataLoaded = true;
        if (!this.verifyData()) {
          console.log("Invalid data");
          return;
        }
        console.log(this.excelData);
      };
      reader.readAsArrayBuffer(this.file);
    }
  }

  verifyData() {
    return true;
  }
}

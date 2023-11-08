import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  files: File[] = [];

  onFileSelected(event: any): void {
    this.files = event.target.files;
  }

  onSubmit(): void {
    if (this.files.length === 0) {
      return;
    }

    // Here, you can add the logic to upload files to your backend.
    // You can use a service to send the files to your Go backend.
    // Example: this.uploadService.uploadFiles(this.files);
  }
}

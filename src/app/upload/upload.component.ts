import { Component } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  constructor(private uploadService: UploadService) {}

  fileToUpload: File | null = null;

  onFileSelected(event: any): void {
    console.log("onFileSelected called");

    if (event.target.files && event.target.files.length > 0) {
      this.fileToUpload = event.target.files[0];
    }
  }

  onDragOver(event: DragEvent): void {
    console.log("onDragOver called");

    event.preventDefault();
  }

  onDrop(event: DragEvent): void {
    console.log("onDrop called");

    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.fileToUpload = event.dataTransfer.files[0];
    }
  }

  async onSubmit(): Promise<void> {
    console.log("onSubmit called");

    if (!this.fileToUpload) {
      return;
    }

    try {
      const response: any = await this.uploadService.uploadFile(this.fileToUpload);
      console.log("Response from the server:", response);
      if (response.success) {
        console.log("Upload was successful.");
      } else {
        console.error("Upload error:", response.error);
      }

      // Reset the file input field after successful upload
      this.fileToUpload = null;
    } catch (error) {
      console.error("Error from the backend:", error);
    }
  }
}

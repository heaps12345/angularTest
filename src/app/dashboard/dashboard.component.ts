import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FileService } from '../auth/file.service';
import { File } from '../auth/file.model';
import { FolderService } from '../auth/folder.service';
import { Folder } from '../auth/folder.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  files: Observable<any>;
  folders: Observable<any>;
  openFileModal: false;
  constructor(
    private authService: AuthService,
    private fileService: FileService,
    private folderService: FolderService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
   
    this.files = this.db.collection('myFiles').valueChanges();
    this.folders = this.db.collection('myFolders').valueChanges();

    // const db = this.db.collection('myFiles').valueChanges();

    // db.subscribe(result => {
    //   console.log(result);
    // });
    // this.folders = this.folderService.getMyFolders();
  //   this.files = this.fileService.getMyFiles();
  }

  ngAfterContentChecked() {
    // this.files = this.fileService.getMyFiles();
  }

  addFolder() {
    this.folderService.addFolder();
  }

  addFile(form) {
    debugger;
    this.fileService.addFile(form);
  }

  onLogout() {
    this.authService.logout();
  }

  openUploadModal() {
    document.getElementById('upload-modal-overlay').classList.add('modalOpen');
  }

  closeUploadModal() {
    document.getElementById('upload-modal-overlay').classList.remove('modalOpen');
  }

  openShareModal() {
    document.getElementById('share-modal-overlay').classList.add('modalOpen');
  }

  closeShareModal() {
    document.getElementById('share-modal-overlay').classList.remove('modalOpen');
  }

  deleteFile(file) {
    this.fileService.deleteFile(file);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FileService } from '../files/file.service';
import { File } from '../files/file.model';
import { FolderService } from '../folders/folder.service';
import { Folder } from '../folders/folder.model';
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
  email: string;
  constructor(
    private authService: AuthService,
    private fileService: FileService,
    private folderService: FolderService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
   
    // this.files = this.db.collection('myFiles').valueChanges();
    // this.folders = this.db.collection('myFolders').valueChanges();

    console.log(this.email);
    const fileDb = this.db.collection('myFiles').snapshotChanges();
    this.files = fileDb.pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
    );

    const folderDb = this.db.collection('myFolders').snapshotChanges();
    this.folders = folderDb.pipe(
      map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
          };
        });
      })
    );

    // DB.subscribe(result => {
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
   
    this.fileService.addFile(form);
  }

  getUser(userData) {
    this.authService.getUser();
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
  deleteFolder(folder) {
    this.folderService.deleteFolder(folder);
  }
}

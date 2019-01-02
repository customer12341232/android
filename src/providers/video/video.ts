import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File, Flags, DirectoryEntry } from '@ionic-native/file';
import videos from './videoLinks';

@Injectable()
export class VideoProvider {

  flags: Flags;

  constructor(
    private file: File,
    private transfer: FileTransfer
  ) { }

  /**
   * @description get videos by indicating a set
   * @param {number} set
   */
  get(set: number) {
    return new Promise<any>((resolve, reject) => {
      let result = [];
      Promise.all([videos[set].map((video) => {
        this.fetch(video)
          .then((file) => result.push({ metadata: video, file: file }))
          .catch(err => console.log(err));
      })]).then(res => resolve(result));
    });
  }

  /**
   * @description fetch a single video
   * @param {string} url
   */
  private fetch(video) {
    return new Promise<any>((resolve, reject) => {
      this.file.checkFile(this.file.externalDataDirectory, video.name)
        .then(exists => {
          // fetch file from storage
          this.file.resolveDirectoryUrl(this.file.externalDataDirectory)
            .then((directoryEntry: DirectoryEntry) => {
              this.file.getFile(directoryEntry, video.name, this.flags)
                .then(fileEntry => resolve(fileEntry))
                .catch(err => console.log(err));
            });
        })
        .catch(err => {
          // download file
          const fileTransfer: FileTransferObject = this.transfer.create();
          fileTransfer.download(video.url, this.file.externalDataDirectory + video.name).then((entry) => {
            this.save(video.name, entry);
            resolve(entry);
          }).catch(err => console.log(err));
        });
    });
  }

  /**
 * @description save a video
 * @param {string} url
 */
  private save(name: string, file) {
    this.file.writeFile(this.file.dataDirectory, name, file, { replace: true })
      .catch(err => console.log(err));
  }

}

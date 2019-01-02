import { Component, Input } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'video-play',
  templateUrl: 'video.html'
})
export class VideoComponent {

  @Input() video: any;

  constructor(private streamingMedia: StreamingMedia) {
  }

  /**
   * @description play video on media stream player
   */
  play() {
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log(e) },
      shouldAutoClose: true,
      controls: true
    };
    this.streamingMedia.playVideo(this.video.file.nativeURL, options);
  }

}

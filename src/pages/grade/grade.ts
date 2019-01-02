import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoProvider } from '../../providers/video/video';

@IonicPage({
  name: 'GradePage'
})
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {

  videos: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public video: VideoProvider
  ) {
  }

  ionViewDidLoad() {
    let grade = this.navParams.get('grade');
    this.getVideos(grade);
  }

/**
 * @description fetch videos by indicating a set
 * @param {number} set
 */
  getVideos(set: number) {
    this.video.get(set)
      .then(videos => { this.videos = videos; console.log(this.videos) })
      .catch(err => console.log(err));
  }

}
 

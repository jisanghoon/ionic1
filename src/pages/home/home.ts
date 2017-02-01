import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FileChooser, MediaPlugin } from 'ionic-native';
import * as ID3 from 'id3js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nativepath: string;
  file;
  constructor(public navCtrl: NavController) {

  }

  filechooser() {
    FileChooser.open()
      .then(uri => {
        (<any>window).FilePath.resolveNativePath(uri, (result) => {
          this.nativepath = result;
         
          this.audioplay();
        }, (err) => {
          alert(err);
        })

      })
      .catch(e => console.log(e));
  }

  audioplay() {
     ID3("http://192.168.0.16/1.mp3", function (err, tags) {
            alert(tags.artist);
          });

    var pathalone = this.nativepath.substring(8);
    this.file = new MediaPlugin(pathalone, (status) => {

    });

    this.file.play();
  }
}

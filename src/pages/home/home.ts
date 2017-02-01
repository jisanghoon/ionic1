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
          ID3(uri, function(err, tags) {
   alert(tags.artist);
   
});
          this.audioplay();
        }, (err) => {
          alert(err);
        })

      })
      .catch(e => console.log(e));
  }

  audioplay() {
    var pathalone = this.nativepath.substring(8);
    

  

    this.file = new MediaPlugin(pathalone, (status) => {

    });

    ID3.
    this.file.play();
  }
}

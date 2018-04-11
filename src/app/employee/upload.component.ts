import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: File = null;  
  private id: string;
  constructor(private http: HttpClient, private route: Router, private router: ActivatedRoute) {
    this.id = router.snapshot.params['id'];
    console.log(this.id);
   }

  ngOnInit() {

  }

  onFileSelected(event){
      this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    var d = new Date();
    var n = d.getTime();
    var res = this.selectedFile.name.split(".");
    var name = this.id+"_"+n+"."+res[1];
    fd.append('image', this.selectedFile, name);
    this.http.post("http://www.softwareon.com.br/upload/image.php",fd)
        .subscribe(res => {
          this.route.navigate(['employee']);
           console.log(res);
    });
  }


}

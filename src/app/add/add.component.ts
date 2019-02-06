import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { Router, Params, ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file_src:string = "assets/demo.jpg";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  imageUploaded(file :any) 
  {
    $("img").hide();
  }
  imageRemoved(file :any) 
  {
    $("img").show();
  }
  goBack()
  {
    this.router.navigate(['/home']);
  }
  model = new Profile();
}

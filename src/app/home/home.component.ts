import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Blog } from '../Model/Blog';
import { HttpErrorResponse } from '@angular/common/http';
import { errorHandler } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

isError = false;
errorMessage="";
  BlogList:Blog[]=[];
  constructor(private homeservice:HomeService) { }

  ngOnInit() {
    this.getallBlogs();
  }

  onSubmit(frm){
    
    this.homeservice.createBlog(frm.value).subscribe(res=>{
      
      this.BlogList.push(res)
      this.isError=false;
    },
    (err)=>{
     
      this.isError=true;
      this.errorMessage=err;
    })
    
  }

  getallBlogs(){
    this.homeservice.getallBlogs().subscribe(res=>{
      
      this.BlogList=res
    },
   ( err)=>{
     
    this.isError=true;
    this.errorMessage=err

    })
  }

  deleteitem(id){
    this.homeservice.deletebyid(33).subscribe(res=>{
     
      this.getallBlogs();
    },
    err=>{
      this.isError=true;
      this.errorMessage=err;
    })

  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector:'app-applied-jobs',
  standalone:true,
  imports:[CommonModule],
  templateUrl:'./applied-jobs.html',
  styleUrl:'./applied-jobs.css'
})

export class AppliedJobs{
  appliedJobs:any[] = []

}
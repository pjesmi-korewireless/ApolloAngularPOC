import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {MutationService} from '../mutation.service';

@Component({
  selector: 'nxangular-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit {

  constructor(private apollo: Apollo,private mutationService: MutationService) {}
  upvote() {
    this.mutationService
      .mutate({
        //postId: this.postId,
      })
      .subscribe(({ data }) => {
        console.log('got data', data);
      },(error) => {
        console.log('there was an error sending the query', error);
      });
  }

  ngOnInit() {
    debugger;
    this.upvote();
  }

}

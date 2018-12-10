import { Injectable } from '@angular/core';
import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MutationService extends Mutation {
  document = gql`   
    mutation assignHardware {
        client {
       assignHardware(
         client:{
           id: 1050
         },
        hardwareList: [
                   {id: 45 }, { id: 46 }
                 ])
           {
           id,
           name
         }
       }
    }



  `;
}
import { ChangeDetectorRef, ViewChild, Component, Input, Output, EventEmitter, OnInit, ViewContainerRef } from '../../../../node_modules/@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '../../../../node_modules/@angular/router'
import { Pipe, HostListener } from '../../../../node_modules/@angular/core'
import * as Autolinker from 'autolinker'
import { Cookie } from './../../../../node_modules/ng2-cookies/ng2-cookies'
declare const gapi: any;

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    styleUrls: ['root.component.css']
})

export class RootComponent {
    public auth2: any;
    public googleInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: '64608908455-m68n9u472dc6srpjug5femnfnndjlv8d.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            this.attachSignin(document.getElementById('googleBtn'));
        });
    }
    public attachSignin(element: any) {
        this.auth2.attachClickHandler(element, {},
            (googleUser: any) => {

                let profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                //YOUR CODE HERE


            }, (error: any) => {
                alert(JSON.stringify(error, undefined, 2));
            });
    }

    ngAfterViewInit() {
        this.googleInit();
    }

}

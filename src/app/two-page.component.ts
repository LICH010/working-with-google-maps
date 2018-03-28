import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MapService } from './mapService'
import { MatTableDataSource } from '@angular/material';
import { infoMarker } from './infoMarker'

declare var google: any;

@Component({
    selector: 'two-page',
    templateUrl: './two-page.component.html',
    styleUrls: ['./app.component.css']
})

export class TwoPageComponent implements OnInit {

    chooseNumberMarkers: number = 3;
    numberMarkersPerSide: number[] = [3, 4, 5, 6]

    max = 100;
    min = 0;
    step = 1;
    thumbLabel = true;

    distanceValue: string = '0 m';
    lat: number = 0;
    lng: number = 0;
    map: any;
    marker: any;
    value: string;

    arrayInfoAboutMarkers: dataMarker[] = [];
    displayedColumns = ['No', 'Coordinates', 'Location'];
    dataSource = new MatTableDataSource<dataMarker>(this.arrayInfoAboutMarkers);;

    constructor(
        private globalRef: ApplicationRef,
        private ref: ChangeDetectorRef,
        private mapService: MapService,
        private snackBar: MatSnackBar
    ) {
        this.setCoordinates = this.setCoordinates.bind(this);
        this.fillTable = this.fillTable.bind(this);
    }



    ngOnInit() {
        this.map = this.mapService.creatMap('gmap')
        this.mapService.onClickMap(this.setCoordinates);
    }

    setComment(comment) {
        debugger
        this.mapService.attachMessage(this.marker, comment)

        this.fillTable(comment)
        this.value = '';
    }

    setCoordinates(event) {
        this.lat = event.latLng.lat();
        this.lng = event.latLng.lng();
        this.marker = new google.maps.Marker({
            position: {lat:this.lat,lng:this.lng},
            map: this.map})
        this.ref.detectChanges();
    }


    fillTable(comment: any) {
        let geocoder = new google.maps.Geocoder;
        let that = this;

        geocoder.geocode({ location: this.marker.getPosition() }, function (results, status) {
            if (status === 'OK') {
                that.arrayInfoAboutMarkers.push({ no: comment, location: results[0].formatted_address, coordinates: 'lat: ' + that.marker.getPosition().lat() + " lng: " + that.marker.getPosition().lng() });
                that.dataSource.data = that.arrayInfoAboutMarkers;
                that.globalRef.tick();
            }
        });
        
       
    }
    

}
interface dataMarker  {
    location: string;
    no: string;
    coordinates: string;
};
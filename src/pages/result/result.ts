import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import * as moment from 'moment';

/**
 * Generated class for the ResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ResultPage');

    function newDate(days) {
      moment.locale('th');
      let timeFormat = moment().add(days, 'd').add(543, 'years');
      return timeFormat.format('DD/MM/YYYY');
    }

    var canvas = <HTMLCanvasElement>document.getElementById("myChart");
    var ctx = canvas.getContext("2d");
    var myBarChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [newDate(0),
        newDate(1),
        newDate(2),
        newDate(3),
        newDate(4),
        newDate(5),
        newDate(6)],
        datasets: [
          {
            label: 'UF',
            fill: false,
            data: [500, 500, -400, -500, 100, 300],
            backgroundColor: [
              'rgb(255, 99, 132)'
            ],
            borderColor: [
              'rgb(255, 99, 132)'
            ],
            borderWidth: 2,
            pointStyle: 'star',
          }
          ,
          {
            label: 'Urine',
            fill: false,
            data: [200, 'none', 500, 300, 'none', 400],
            backgroundColor: [
              'rgb(54, 162, 235)'
            ],
            borderColor: [
              'rgb(54, 162, 235)'
            ],
            borderWidth: 2,
            pointStyle: 'star',
          }
        ]
      },
      options: {
        responsive: true,
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          xAxes: [{
            // unit: 'day',
            // unitStepSize: 1,
            
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: -1000,
              max: 1000,

              // forces step size to be 5 units
              stepSize: 200
            }
          }]
        }
      }
    });
    // Define a plugin to provide data labels
    Chart.plugins.register({
      afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function (element, index) {
              // Draw the text in black, with the specified font
              ctx.fillStyle = 'rgb(75, 192, 192)';

              var fontSize = 14;
              var fontStyle = 'normal';
              ctx.font = Chart.helpers.fontString(fontSize, fontStyle);

              // Just naively convert to string for now
              var dataString = dataset.data[index].toString();

              // Make sure alignment settings are correct
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              var padding = 5;
              var position = element.tooltipPosition();
              ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            });
          }
        });
      }
    });

  }



}

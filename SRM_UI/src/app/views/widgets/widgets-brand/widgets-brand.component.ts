import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-widgets-brand',
  templateUrl: './widgets-brand.component.html',
  styleUrls: ['./widgets-brand.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsBrandComponent implements AfterContentInit {
  currentPage = 1;
  itemsPerPage = 15;
  maxSize = 5;
  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @Input() withCharts?: boolean;
  // @ts-ignore
  chartOptions = {
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  datasets = {
    borderWidth: 2,
    fill: true
  };
  colors = {
    backgroundColor: 'rgba(255,255,255,.1)',
    borderColor: 'rgba(255,255,255,.55)',
    pointHoverBackgroundColor: '#fff',
    pointBackgroundColor: 'rgba(255,255,255,.55)'
  };
  brandData = [
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/bag.png',
      values: [{ title: 'Smart LapTop Bag', value: '2000 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [65, 59, 84, 84, 51, 55, 40], label: 'Facebook', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitabottle.png',
      values: [{ title: 'Smart Bottle', value: '1500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [1, 13, 9, 17, 34, 41, 38], label: 'Twitter', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/T-shirt.png',
      values: [{ title: 'Smart T-Shirt', value: '500 Points' }],
      capBg: { '--cui-card-cap-bg': '#fffff' },
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [78, 81, 80, 45, 34, 12, 40], label: 'LinkedIn', ...this.colors }]
      }
    },
    {
      icon: '../assets/img/products/digitlpen.png',
      values: [{ title: 'Smart Pen', value: '300 Points' }],
      color: '#fffff',
      data: {
        labels: [...this.labels],
        datasets: [{ ...this.datasets, data: [35, 23, 56, 22, 97, 23, 64], label: 'Events', ...this.colors }]
      }
    }
  ];

 

  capStyle(value: string) {
    return !!value ? { '--cui-card-cap-bg': value } : {};
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}

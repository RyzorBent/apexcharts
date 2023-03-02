const bestCarsData = {
    series: [
      {
        data: [20, 15, 12, 10, 8, 5],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai'],
      },
      yaxis: {
        title: {
          text: '% (percentage)',
        },
      },
      fill: {
        colors: ['#1abc9c'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + '%';
          },
        },
      },
    },
  };
  
  const topAttractionsData = {
    series: [
      {
        data: [350, 270, 220, 180, 150],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + ' million';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: ['Pyramids of Giza', 'Table Mountain', 'Victoria Falls', 'Kruger National Park', 'Maasai Mara'],
      },
      yaxis: {
        title: {
          text: 'Visitors (in millions)',
        },
      },
      fill: {
        colors: ['#3498db'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' million';
          },
        },
      },
    },
  };
  
  const linuxVersionsData = {
    series: [
      {
        data: [45, 30, 15, 5, 5],
      },
    ],
    options: {
      chart: {
        type: 'pie',
        height: 350,
      },
      labels: ['Ubuntu', 'Debian', 'CentOS', 'Red Hat Enterprise Linux', 'Fedora'],
      colors: ['#9b59b6', '#e74c3c', '#f1c40f', '#2ecc71', '#3498db'],
      tooltip: {
        y: {
          formatter: function (val) {
            return val + '%';
          },
        },
      },
    },
  };

  export  {linuxVersionsData, topAttractionsData, bestCarsData}
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");

//--------------------------Chart for Orders----------
const ordersLabels = [
  "Aug 1",
  "",
  "Aug 3",
  "",
  "Aug 5",
  "",
  "Aug 7",
  "",
  "Aug 9",
  "",
  "Aug 11",
  "",
  "Aug 13",
];
const ordersData = {
  labels: ordersLabels,
  datasets: [
    {
      backgroundColor: "rgb(55, 49, 94,0.4)",
      borderColor: "rgba(218, 65, 103, 1)",
      data: [
        9000, 30000, 25000, 20000, 20000, 27000, 32000, 35000, 30000, 30000,
        20000, 37000, 40000,
      ],
      tension: 0.5,
      fill: true,
      borderWidth: 3,
    },
  ],
};
const orderConfig = {
  type: "line",
  data: ordersData,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 40000,
        min: 0,
        ticks: {
          stepSize: 10000,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};
const myChart1 = new Chart(ordersChart, orderConfig);

//--------------------------Chart for Visitor----------
const visitorLabels = [
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const VisitorData = {
  labels: visitorLabels,
  datasets: [
    {
      label: "Man",
      data: [4000, 4500, 13000, 5000, 6500, 9000, 12000],
      backgroundColor: ["#37315e"],
      borderWidth: 1,
    },
    {
      label: "Women",
      data: [5500, 5500, 15000, 6500, 9800, 13000, 14000],
      backgroundColor: ["rgba(220, 92, 124, 1)"],
      borderWidth: 1,
    },
  ],
};

const visitorConfig = {
  type: "bar",
  data: VisitorData,
  options: {
    scales: {
      y: {
        max: 15000,
        min: 0,
        ticks: {
          stepSize: 5000,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
};

const myChart2 = new Chart(visitorChart, visitorConfig);

//--------------------------Chart for Cities----------

const citiesLabels = ["Riyadh", "Jeddah", "Sharqia", "mecca"];

const citiesData = {
  labels: citiesLabels,
  datasets: [
    {
      data: [150, 70, 40, 100],
      backgroundColor: [
        "rgba(220, 92, 124, 1)",
        "#645d81",
        "rgba(220, 92, 124, 1)",
        "#4a4279",
      ],
      hoverOffset: 4,
    },
  ],
};
const citiesConfig = {
  type: "pie",
  data: citiesData,
  options: {
    responsive: false,
  },
};

const myChart3 = new Chart(citiesChart, citiesConfig);

//--------------------------Chart for Rat----------
const ratLabels = ["January", "Februray", "March", "April", "May", "June"];
const ratData = {
  labels: ratLabels,
  datasets: [
    {
      backgroundColor: "rgba(120, 120, 120, 0.2)",
      borderColor: "rgba(218, 65, 103, 1)",
      borderWidth: "3",
      fill: true,
      tension: 0.5,

      data: [1, 1.5, 2.5, 4, 4.9, 3.2],
    },
  ],
};

const ratConfig = {
  type: "line",
  data: ratData,
  options: {
    scales: {
      y: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};
const myCart4 = new Chart(myLinearChart, ratConfig);

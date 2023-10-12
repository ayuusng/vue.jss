var app = new Vue({
    el: '#app',
    data: {
      laundryOrders: [
        // laundry orders data here
      ],
      currentPage: 1,
      pageSize: 10,
      searchQuery: '',
    },
    computed: {
      filteredLaundryOrders: function() {
        var self = this;
        return this.laundryOrders.filter(function(laundryOrder) {
          return laundryOrder.customerName.toLowerCase().indexOf(self.searchQuery.toLowerCase()) !== -1;
        });
      },
      paginatedLaundryOrders: function() {
        var startIndex = (this.currentPage - 1) * this.pageSize;
        return this.filteredLaundryOrders.slice(startIndex, startIndex + this.pageSize);
      },
    },
    methods: {
      addLaundryOrder: function(laundryOrder) {
        // add laundry order logic here
      },
      subtractLaundryOrder: function(laundryOrder) {
        // subtract laundry order logic here
      },
      deleteLaundryOrder: function(laundryOrder) {
        // delete laundry order logic here
      },
      saveOrder: function() {
        // save order logic here
      },
      changePage: function(page) {
        this.currentPage = page;
      },
    },
  });
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
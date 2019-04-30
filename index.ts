
constructor () {
 login(x: string) {
  if(status == administrators) {
  this.router.page(["DashboardPage"]);
  }else{
   this.router.page(["BookingPage"]);
  }
 }
}

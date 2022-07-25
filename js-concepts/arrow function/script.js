class demo {
  constructor(val) {
    this.val = val
    //console.log(this)
  }
  
  f() {
    console.log(this.val, this);
  }
  
  a = () => {
    console.log(this.val, this)
  }
}

const x = new demo(10)
// x.f()
// x.a()

// does not create a new scope
var obj = {
  val: 10,
  a: () => console.log(this.val, this),
  f: function() {
    console.log(this.val, this);
  },
  lf: function() {
    setTimeout(function() {
      console.log("Later function: ", this.val, this)
    }, 300)
  },
  la: function() {
    setTimeout(() => {
      console.log("Later arrow: ", this.val, this)
    }, 200)
  }
}

obj.f()
obj.a()
obj.lf()
obj.la()
class Blockz {
  constructor(diviv) {
    this.diviv = diviv;
  }

  doublez() {
    let firsT = document.querySelector(".div-first");
    let item = document.querySelector(this.diviv);
    item.innerHTML = `<h3>Create an account</h3> <h1>Create/login to an existing <br> account to get started</h1> <p>An account is created with your email <br>
        and a desired password</p> `;
    firsT.innerHTML = `<img src="./icons/phoneeee.png" alt="">`;
    firsT.append(item);
  }
}

const blockz = new Blockz(".div-txt");
blockz.doublez();

class SecondBlock extends Blockz {
  constructor(diviv) {
    super(diviv);
  }
  doublez() {
    let firsT = document.querySelector(".div-second");
    let item = document.querySelector(this.diviv);
    let imgdiv = document.querySelector(".img-for-div");
    imgdiv.innerHTML = `<img src="./icons/phoneeee.png" alt="">`;
    item.innerHTML = `<h3>Explore varieties</h3> <h1>Shop for your favorites <br> meal as e dey hot.</h1> <p>Shop for your favorite meals or drinks <br>
    and enjoy while doing it.</p> `;
    firsT.append(item);
    firsT.append(imgdiv);
  }
}

const secondblock = new SecondBlock(".div-txt2");
secondblock.doublez();

class ThirdBlock extends Blockz {
  constructor(diviv) {
    super(diviv);
  }
  doublez() {
    let firsT = document.querySelector(".div-third");
    let item = document.querySelector(this.diviv);
    firsT.innerHTML = `<img src="./icons/phhohohene.png" alt="">`;
    item.innerHTML = `<h3>Checkout</h3>  <h1>When you done check out <br>
    and get it delivered.</h1> <p>When you done check out and get it <br>
    delivered with ease.</p>  `;
    firsT.append(item);
  }
}

const thirdlock = new ThirdBlock(".div-txt3");
thirdlock.doublez();

/* class Header {
  constructor(itemSelect, element, classList) {
    this.itemSelect = itemSelect;
    this.element = element;
    this.classList = classList;
  }
  header() {
    let item = document.querySelector(this.itemSelect);
    console.log(item);
    let burger = document.createElement(this.element);
    burger.setAttribute("class", this.classList);
    console.log(burger);
    item.prepend(burger);
    let list = document.querySelector(".list");
    burger.addEventListener("click", function () {
      list.classList.add("remove");
    });
  }
}

const header = new Header(".header", "SPAN", "element");

class Main extends Header {
  constructor(itemSelect, element) {
    super(itemSelect, element);
  }
}

const main = new Main(".main", "H1");
console.log(main, "main");
main.header();
console.log(header);
header.header(); */

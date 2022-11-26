import 
class Header extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback() {
        //this.innerHTML = '<style>nav {height: 40px;display: flex;align-items: center;justify-content: center;background-color:  #0a0a23; }ul {padding: 0;}a {font-weight: 700;margin: 0 25px;color: #fff;text-decoration: none;}a:hover {padding-bottom: 5px;box-shadow: inset 0 -2px 0 0 #fff;}</style><header><nav><ul><li><a href="about.html">About</a></li><li><a href="work.html">Work</a></li><li><a href="contact.html">Contact</a></li></ul></nav></header>';
        this.innerHTML = '<div>Helooo</div>';
      } 


//     connectedCallback(){
//         this.innerHTML = '<header class="header padding-on-mobile"><div><div class="header__topbar hide-on-mobile-tablet"><div class="header__infomation"><p class="header__info-phone">
// +84776974310</p>
//                         <ul class="header__info-list">
//                             <li class="header__info-item">
//                                 <a href="https://www.facebook.com/nhathvng/" target="_blank"
//                                     class="header__info-link white-text">
//                                     <i class="fa-brands fa-facebook"></i>
//                                 </a>
//                             </li>
//                             <li class="header__info-item">
//                                 <a href="https://www.instagram.com/nhathvng/" target="_blank"
//                                     class="header__info-link white-text">
//                                     <i class="fa-brands fa-instagram"></i>
//                                 </a>
//                             </li>
//                             <li class="header__info-item">
//                                 <a href="#!" class="header__info-link white-text">
//                                     <i class="fa-brands fa-twitter"></i>
//                                 </a>
//                             </li>
//                             <li class="header__info-item">
//                                 <a href="#!" class="header__info-link white-text">
//                                     <i class="fa-brands fa-linkedin-in"></i>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
    
//                     <div class="header__action">
//                         <div class="header__action-item header__action-item-first">
//                             <a href="/login.html" class="header__action-link">LOGIN </a>
//                         </div>
//                         <div class="header__action-item">
//                             <a href="/register.html" class="header__action-link">REGISTER</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="header__navigation">
//                     <div class="header__logo">
//                         <a href="#!" class="header__logo-link">
//                             <img src="./assets/img/logo.png" alt="logo_travelix" class="header__logo-img">
//                             <p class="header__logo-lable">Bookang</p>
//                         </a>
//                     </div>
    
//                     <div class="header__navbar hide-on-mobile-tablet">
//                         <ul class="header__navbar-list">
//                             <li class="header__navbar-item header__navbar-item--active">
//                                 <a href="#header" class="header__navbar-link">HOME</a>
//                             </li>
//                             <li class="header__navbar-item">
//                                 <a href="#!" class="header__navbar-link">ABOUT US</a>
//                             </li>
//                             <li class="header__navbar-item">
//                                 <a href="#!" class="header__navbar-link">OFFERS</a>
//                             </li>
//                             <li class="header__navbar-item">
//                                 <a href="#!" class="header__navbar-link">NEWS</a>
//                             </li>
//                             <li class="header__navbar-item">
//                                 <a href="#!" class="header__navbar-link">CONTACT</a>
//                             </li>
//                         </ul>
//                     </div>
    
//                     <div class="header__search">
//                         <label for="header__search-form-check" class="header__search-lable">
//                             <i class="header__search-icon fa-solid fa-magnifying-glass"></i>
//                         </label>
    
//                         <label for="header__subNavbar-form-check" class="header__subNavbar">
//                             <i class="header__subNavbar-icon fa-solid fa-bars"></i>
//                         </label>
    
//                         <input type="checkbox" hidden class="header__search-form-checked" id="header__search-form-check">
//                         <form class="header__search-form">
//                             <input type="search" class="header__search-input" placeholder="Search...">
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <input type="checkbox" hidden class="header__subNavbar-form-checked" id="header__subNavbar-form-check">
//             <div class="header__subNavbar--layout">
//                 <div class="header__subNavbar--layout-img">
//                     <img src="./assets/img/logo.png" alt="logo_travelix">
//                 </div>
//                 <div class="header__subNavbar--layout-content">
//                     <ul class="header__subNavbar--layout-list">
//                         <li class="header__subNavbar--layout-item">home</li>
//                         <li class="header__subNavbar--layout-item">about us</li>
//                         <li class="header__subNavbar--layout-item">offers</li>
//                         <li class="header__subNavbar--layout-item">news</li>
//                         <li class="header__subNavbar--layout-item">contact</li>
//                     </ul>
//                 </div><input type="checkbox" hidden class="header__subNavbar-form-checked" id="header__subNavbar-form-check">
//                 <label for="header__subNavbar-form-check" class="header__subNavbar">
//                     <i class="header__subNavbar--layout-icon fa-solid fa-xmark"></i>
//                 </label>
//             </div></header>
//         ';
//     }
}

customElements.define('header-component', Header);
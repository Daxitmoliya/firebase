import React from 'react';

const Sidebar = () => {
  return (
    <div className="pagebody-wrapper d-flex ">
      <div className="slidebar vh-100">
        <ul>
          <li className="menu-title list-unstyled">Main</li>
          <li>
            <a href="loginform.html">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Login Form</span>
            </a>
          </li>
          <li>
            <a href="signup.html">
              <i className="fa-solid fa-user-plus"></i>
              <span>Sign up</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-grid-3x2-gap-fill"></i>
              <span>Dashboard</span>
              <span className="badge rounded-pill bg-primary float-end mt-2">2</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="bi bi-envelope"></i>
              <span>Email</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li>
                  <a href="#">inbox</a>
                </li>
                <li>
                  <a href="#">Email-read</a>
                </li>
                <li>
                  <a href="#">Email Compose</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-chat-dots"></i>
              <span>Chat</span>
              <span className="badge rounded-pill bg-danger float-end mt-3">Hot</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-kanban"></i>
              <span>Kanban Board</span>
              <span className="badge rounded-pill bg-success float-end mt-3">New</span>
            </a>
          </li>
          <li className="menu-title list-unstyled">Components</li>
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="bi bi-grid-3x2-gap-fill"></i>
              <span>UI Elements</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li><a href="#">Alerts</a></li>
                <li><a href="#">Buttons</a></li>
                <li><a href="#">Badge</a></li>
                <li><a href="#">Cards</a></li>
                <li><a href="#">Carousel</a></li>
                <li><a href="#">Dropdowns</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Grid</a></li>
                <li><a href="#">Images</a></li>
                <li><a href="#">Lightbox</a></li>
                <li><a href="#">Modals</a></li>
                <li><a href="#">Colors</a></li>
                <li><a href="#">Offcanvas</a></li>
                <li><a href="#">Pagination</a></li>
                <li><a href="#">Popover &amp; Tooltips</a></li>
                <li><a href="#">Range Slider</a></li>
                <li><a href="#">Session Timeout</a></li>
                <li><a href="#">Progress Bars</a></li>
                <li><a href="#">Sweet-Alert</a></li>
                <li><a href="#">Tabs &amp; Accordions</a></li>
                <li><a href="#">Typography</a></li>
                <li><a href="#">Video</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard"></i>
              <span>Forms</span>
            </a>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="bi bi-graph-up"></i>
              <span>Charts</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li><a href="#">Morris Chart</a></li>
                <li><a href="#">Chartist Chart</a></li>
                <li><a href="#">Chartjs Chart</a></li>
                <li><a href="#">Flot Chart</a></li>
                <li><a href="#">C3 Chart</a></li>
                <li><a href="#">Jquery Knob Chart</a></li>
              </ul>
            </div>
          </li>
          <li className="sidebar-dropdown">
            <a href="#">
              <i className="bi bi-grid-3x2-gap-fill"></i>
              <span>Table</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li><a href="#">Basic Tables</a></li>
                <li><a href="#">Data Table</a></li>
                <li><a href="#">Responsive Table</a></li>
                <li><a href="#">Editable Table</a></li>
              </ul>
            </div>
          </li>
          <li className="sidebar-submenu">
            <a href="#">
              <i className="bi bi-journal-album"></i>
              <span>Icons</span>
            </a>
            <div className="sidebar-submenu">
              <ul>
                <li><a href="#">Material Design</a></li>
                <li><a href="#">Ion Icons</a></li>
                <li><a href="#">Font Awesome</a></li>
                <li><a href="#">Themify Icons</a></li>
                <li><a href="#">Dripicons</a></li>
                <li><a href="#">Typicons Icons</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-geo-alt-fill"></i>
              <span>Maps</span>
              <span className="badge rounded-pill bg-danger float-end mt-3">2</span>
            </a>
          </li>
          <li className="menu-title list-unstyled">Extras</li>
          <li>
            <a href="#">
              <i className="bi bi-layout-sidebar-inset"></i>
              <span> Layouts </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-square"></i>
              <span> Authentication </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-stickies"></i>
              <span> Extra Pages </span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-share-fill"></i>
              <span>Multi Level</span>
            </a>
          </li>
        </ul>
      </div>
      </div>
  );
};

export default Sidebar;

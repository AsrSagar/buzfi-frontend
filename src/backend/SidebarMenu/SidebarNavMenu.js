import { Link } from 'react-router-dom';
import { 
  FaHome,
  FaSolarPanel,
} from "react-icons/fa";
import './sidebarNavMenu.scss';
import logo from '../../assets/img/logo.png';
import { useState } from 'react';
const SidebarNavMenu = () => {
    
    // const [dropdownVisible, setDropdownVisible] = useState(false);

    // const toggleDropdown = () => {
    //   setDropdownVisible(!dropdownVisible);
    // };

    const [isActive, setIsActive]   = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);
    const [isActive11, setIsActive11] = useState(false);
    const [isActive12, setIsActive12] = useState(false);

    const toggleDropdown = () => {
        setIsActive(!isActive);
    };

    const toggleDropdown2 = () => {
        setIsActive2(!isActive2);
    };
    const toggleDropdown3 = () => {
        setIsActive3(!isActive3);
    };
    const toggleDropdown4 = () => {
        setIsActive4(!isActive4);
    };
    const toggleDropdown5 = () => {
        setIsActive5(!isActive5);
    };
    const toggleDropdown6 = () => {
        setIsActive6(!isActive6);
    };
    const toggleDropdown7 = () => {
        setIsActive7(!isActive7);
    };
    const toggleDropdown8 = () => {
        setIsActive8(!isActive8);
    };
    const toggleDropdown9 = () => {
        setIsActive9(!isActive9);
    };
    const toggleDropdown10 = () => {
        setIsActive10(!isActive10);
    };
    const toggleDropdown11 = () => {
        setIsActive11(!isActive11);
    };
    const toggleDropdown12 = () => {
        setIsActive12(!isActive12);
    };

    return(
        <>
            <div class="col-md-3 col-sm-4 col-lg-2 px-0 d-none d-sm-block sidebar navbar-expand-sm flex-column">
                <div class="d-flex flex-column flex-shrink-0">
                  <Link to="/buzfi/admin" class="d-flex align-items-center logo-bg link-dark text-decoration-none">
                    <img src={logo} alt="Buzfi" />
                  </Link>
                  <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                      <Link to="#" class="nav-link link-dark" onClick={toggleDropdown}>
                      <FaHome /> Modules and Functions 
                        <i className={`fas fa-chevron-right ${isActive ? 'fa-chevron-down' : ''}`}></i>
                        <ul className={`dropdown ${isActive ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Modules</Link>
                          <Link className="dropdown-item">Functions</Link>
                          <Link className="dropdown-item">Add-on</Link>
                          <Link className="dropdown-item">Plugins</Link>
                        </ul>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/buzfi/admin" class="nav-link link-dark">
                      <FaHome /> Dashboard 
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown2}>
                        <FaSolarPanel /> User Management 
                        <i className={`fas fa-chevron-down ${setIsActive2 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive2 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Users</Link>
                          <Link className="dropdown-item">User Types</Link>
                          <Link className="dropdown-item">Access Levels</Link>
                          <Link className="dropdown-item">Roles Manager</Link>
                          <Link className="dropdown-item">Permission Manager</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown3}>
                        <FaSolarPanel /> Catalog 
                        <i className={`fas fa-chevron-down ${setIsActive3 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive3 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item" to="#">Categories</Link>
                          <Link className="dropdown-item" to="/products">Products</Link>
                          <Link className="dropdown-item" to="#">Attributes</Link>
                          <Link className="dropdown-item" to="#">Options</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown4}>
                        <FaSolarPanel /> Sales & Customers 
                        <i className={`fas fa-chevron-down ${setIsActive4 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive4 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Orders</Link>
                          <Link className="dropdown-item">Delivery Pipelines</Link>
                          <Link className="dropdown-item">Shipments</Link>
                          <Link className="dropdown-item">Customers</Link>
                          <Link className="dropdown-item">Supports</Link>
                          <Link className="dropdown-item">Return and Refund</Link>
                          <Link className="dropdown-item">Replacement</Link>
                          <Link className="dropdown-item">Channels Management</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown5}>
                        <FaSolarPanel /> Channels & Partners
                        <i className={`fas fa-chevron-down ${setIsActive5 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive5 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Vendors/Sellers management</Link>
                          <Link className="dropdown-item">Manufacturers Management</Link>
                          <Link className="dropdown-item">Drop shippers Management</Link>
                          <Link className="dropdown-item">Affiliates Management</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown6}>
                        <FaSolarPanel /> Marketing and Campaigns
                        <i className={`fas fa-chevron-down ${setIsActive6 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive6 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Market Information</Link>
                          <Link className="dropdown-item">Campaign Information</Link>
                          <Link className="dropdown-item">Promotions</Link>
                          <Link className="dropdown-item">Affiliate System</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown7}>
                        <FaSolarPanel /> Finance & Accounts
                        <i className={`fas fa-chevron-down ${setIsActive7 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive7 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Invoices</Link>
                          <Link className="dropdown-item">Financial Reporting</Link>
                          <Link className="dropdown-item">Financial Statistics</Link>
                          <Link className="dropdown-item">Financial Analytics</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown8}>
                        <FaSolarPanel /> Inventory System
                        <i className={`fas fa-chevron-down ${setIsActive8 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive8 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Forecasting and Plan</Link>
                          <Link className="dropdown-item">Warehouse</Link>
                          <Link className="dropdown-item">Supplier/Vendors</Link>
                          <Link className="dropdown-item">Inventory Controlling</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown9}>
                        <FaSolarPanel /> Employee Information
                        <i className={`fas fa-chevron-down ${setIsActive9 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive9 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Employees</Link>
                          <Link className="dropdown-item">Task and Duties</Link>
                          <Link className="dropdown-item">Activity Logs</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown10}>
                        <FaSolarPanel /> Tools
                        <i className={`fas fa-chevron-down ${setIsActive10 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive10 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Data Backup</Link>
                          <Link className="dropdown-item">Data Export/Import</Link>
                          <Link className="dropdown-item">Data Synchronization</Link>
                          <Link className="dropdown-item">Integration System</Link>
                          <Link className="dropdown-item">Business Intelligence</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown11}>
                        <FaSolarPanel /> Settings
                        <i className={`fas fa-chevron-down ${setIsActive11 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive11 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Store Settings</Link>
                          <Link className="dropdown-item">File Server</Link>
                          <Link className="dropdown-item">Email Server</Link>
                          <Link className="dropdown-item">Chat Server</Link>
                        </ul>
                      </Link>
                    </li>
                    <li>
                      <Link href="#" class="nav-link link-dark" onClick={toggleDropdown12}>
                        <FaSolarPanel /> Security & Compliances
                        <i className={`fas fa-chevron-down ${setIsActive12 ? 'rotate-icon' : ''}`}></i>
                        <ul className={`dropdown ${isActive12 ? 'activeClass' : ''}`}>
                          <Link className="dropdown-item">Audit Trails</Link>
                          <Link className="dropdown-item">Suspiciousness</Link>
                          <Link className="dropdown-item">Treats Detection</Link>
                          <Link className="dropdown-item">System threat</Link>
                          <Link className="dropdown-item">OWASP threats</Link>
                          <Link className="dropdown-item">Disaster Manager</Link>
                        </ul>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
        </>
    );

}
export default SidebarNavMenu;
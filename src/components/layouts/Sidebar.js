import React, {Component} from "react";
import { Link } from "react-router-dom";



class Sidebar extends Component{
    render(){
        return(
           <div>
                < aside className="menu-sidebar d-none d-lg-block" >
                    <div className="logo">
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li>
                                    <Link to="/product">
                                        <i className="fas fa-chart-bar" />Produk</Link>
                                </li>
                                <li>
                                    <Link to="/transaksi">
                                        <i className="fas fa-table" />Transaksi</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside >
           </div>
        )
    }
}

export default Sidebar;
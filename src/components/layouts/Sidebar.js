import React, {Component} from "react";



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
                                    <a href="chart.html">
                                        <i className="fas fa-chart-bar" />Produk</a>
                                </li>
                                <li>
                                    <a href="table.html">
                                        <i className="fas fa-table" />Transaksi</a>
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
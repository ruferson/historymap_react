import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import './styles.css'

function Menu(props) {

    const [location, setLocation] = useLocation();
    const [selected, setSelected] = useState(["", "", "", ""])

    function cambiarSelect (){
        switch (location){
            case "/":
                setSelected(["select", "", "", ""])
                break;
            case "/dashboard":
                setSelected(["", "select", "", ""])
                break;
            case "/crear":
                setSelected(["", "", "select", ""])
                break;
            case "/config":
                setSelected(["","","", "select"])
                break;
            default:
                setSelected(["select", "", "", ""])
                break;
        }
    }
    useEffect(cambiarSelect, [location])
    
    return (<>
        
        <div className={"vertical-nav "+props.isActive} id="sidebar">
            <div className="py-4 px-3 mb-1">
                <div className="media d-flex align-items-center">
                    <div className="media-body">
                        <h2 className="m-0 float-right">Menú</h2>
                    </div>
                </div>
            </div>

            <ul className="nav flex-column mb-0">
                <li className="nav-item border-top" onClick={() => {setLocation("/")}}>
                <a href="#" className={"nav-link text-white "+selected[0]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong>Mapas</strong>
                        </a>
                </li>
                <li className="nav-item border-top"  onClick={() => {setLocation("/dashboard")}}>
                <a href="#" className={"nav-link text-white "+selected[1]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong>Perfil</strong>
                        </a>
                </li>
                <li className="nav-item border-top" onClick={() => {setLocation("/crear")}}>
                <a href="#" className={"nav-link text-white "+selected[2]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong>Crear mapa</strong>
                        </a>
                </li>
                <li className="nav-item border-bottom border-top" onClick={() => {setLocation("/config")}}>
                <a href="#" className={"nav-link text-white "+selected[3]}>
                            <i className="fa mr-3 fa-fw"></i>
                            <strong>Configuración</strong>
                        </a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Menu;
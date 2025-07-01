import './sidebar.css'

function Sidebar() {

    function closeSideBar(){
        const sideBar = document.getElementsByClassName('sideBar')[0];
        const main = document.getElementsByClassName('main')[0];
        sideBar.classList.toggle('close'); 
        if(sideBar.classList.length>1){
            main.style.marginLeft="0px"
        }else {
            main.style.marginLeft="306px"
        }
    }

    return (
        <div className='sideBar'>
            <h1 className='hk'><i className="fa-solid fa-gear"></i>Dashboards<span>v.01</span></h1>
            <button className='sideBarBtn' onClick={closeSideBar}><i class="fa-solid fa-left-right"></i></button>
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Income</a></li>
                    <li><a href="#">Promote</a></li>
                    <li><a href="#"> Help</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
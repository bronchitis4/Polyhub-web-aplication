import {NavLink} from "react-router-dom";
import { useState } from "react";
import './side-bar.css';

const Sidebar = ({onSetCategory}) => {
    const menuItems = [
        {key: 1, title: "Категорії", link: 'сategories', subtopics: [{title: "Викладачі", categoryName: "teachers"}, {title: "Університети", categoryName: "universities"}]},
        {key: 2, title: "Ресурси", link: 'resources', subtopics: [{title: "subtopicB", categoryName: "categoryB2"}, {title: "subtopicB", categoryName: "categoryB2"}]},
    ];

    return (
        <div className="sidenav">
           {menuItems.map(item => {
                return <>
                        <DropdownItem key={item.key} title={item.title} link={item.link}  subtopics={item.subtopics} onSetCategory={onSetCategory}/>
                       </>
           })}
        </div>
    );
}


const DropdownItem = ({title, link, subtopics, onSetCategory}) => {
    
    const [isOpen, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(state => !state);
    }


    return(
        <>
            <button className="dropdown-btn" onClick={toggleOpen}>
                {title}
                <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-container" style={{display: isOpen ? 'block': 'none'}}>
                {subtopics.map(item => {
                    return <button onClick={() => onSetCategory(item.categoryName)}>
                        {item.title} 
                    </button>
                })}
            </div>
        </>
    );
}
export default Sidebar;
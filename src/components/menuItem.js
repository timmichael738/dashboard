import React from 'react';
import Icons from '../assets/icons/Icons.js';


// import MenuItemComponent from './menuItemComponent'


const menu = [
  { title: "Dashboard", src: Icons.dashboard },
  { title: "Apps", src: Icons.apps }
];
const kitMenu = [
  { title: "Component", src: Icons.components },
  { title: "UI Element", src: Icons.UIElements },
  { title: "Chart", src: Icons.chart },
  { title: "Font Icons", src: Icons.fontIcon },
  { title: "drag & drop", src: Icons.dragAndDrop }
];
const tableAndFormsMenu = [
  { title: "Forms", src: Icons.forms },
  { title: "Tables", src: Icons.tables }
];
const userAndPagesmenu = [
  { title: "Users", src: Icons.users },
  { title: "Pages", src: Icons.pages },
  { title: "Layout", src: Icons.layout },
  { title: "Authentication", src: Icons.authentication }
];
const supportsMenu = [
  { title: "Changelog", src: Icons.changeLog },
  { title: "Documentation", src: Icons.documentation }
];

function MenuItem(props) {
  const { open } = props;
  return (
    <div className="block py-15 px-5">
      <span className={`${!open && 'hidden'} text-slate-400 text-sm py-5`}>Menu</span>
      <ul>
        {menu.map((menu, index) => (
          <li key={index} className='text-sm flex items-center gap-x-1 cursor-pointer py-2.5 px-1.5 hover:bg-light-white rounded-md items-center'>
          <menu.src />
          <span className={`${!open && 'hidden'}`}>{menu.title}</span>
        </li>
        
        ))}
      </ul>
      <span className={`${!open && 'hidden'} text-slate-400 text-sm py-5`}>UI Kit</span>
      <ul>
        {kitMenu.map((menu1, index) => (
          <li key={index} className='text-sm flex items-center gap-x-1 cursor-pointer py-2.5 px-1.5 hover:bg-light-white rounded-md items-center'>
          <menu1.src />
          <span className={`${!open && 'hidden'}`}>{menu1.title}</span>
        </li>
        
        ))}
      </ul>
      <span className={`${!open && 'hidden'} text-slate-400 text-sm py-5`}>Table & Forms</span>
      <ul>
        {tableAndFormsMenu.map((menu2, index) => (
               <li key={index} className='text-sm flex items-center gap-x-1 cursor-pointer py-2.5 px-1.5 hover:bg-light-white rounded-md items-center'>
               <menu2.src />
               <span className={`${!open && 'hidden'}`}>{menu2.title}</span>
             </li>
        ))}
      </ul>
      <span className={`${!open && 'hidden'} text-slate-400 text-sm py-5`}>Users & Pages</span>
      <ul>
        {userAndPagesmenu.map((menu3, index) => (
               <li key={index} className='text-sm flex items-center gap-x-1 cursor-pointer py-2.5 px-1.5 hover:bg-light-white rounded-md items-center'>
               <menu3.src />
               <span className={`${!open && 'hidden'}`}>{menu3.title}</span>
             </li>
        ))}
      </ul>
      <span className={`${!open && 'hidden'} text-slate-400 text-sm py-5`}>Supports</span>
      <ul>
        {supportsMenu.map((menu4, index) => (
               <li key={index} className='text-sm flex items-center gap-x-1 cursor-pointer py-2.5 px-1.5 hover:bg-light-white rounded-md items-center'>
               <menu4.src className="block"/>
               <span className={`${!open && 'hidden'}`}>{menu4.title}</span>
             </li>
        ))}
      </ul>
    </div>
  );
}


export default MenuItem;

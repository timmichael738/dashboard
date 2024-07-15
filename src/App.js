import { useState } from 'react';
import SideBar from './components/sideBar';
import TableComponent from './components/TableComponent';
import NavBar from './NavBar';
import Footer from './components/footer';

function App() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
<div className="flex bg-gray-50">
  <div className="flex">
    <SideBar open={open} style={{ flexBasis: '300px' }} />
    <div className="flex-1">
      <NavBar open={open} handleClick={handleToggle} />
      <TableComponent />
    <Footer />
    </div>
  </div>
</div>

  );
}

export default App;

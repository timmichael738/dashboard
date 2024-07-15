
import Logo from '../assets/Logo'
import MenuItem from './menuItem';

function SideBar(props) {
  const { open } = props
  return (
    <>
       <style>
                {`
          .scrollbar {
            scrollbar-width: 10px;
            scrollbar-color: #ffe;
            
            background-color: #fff;
          }
          .scrollbar::-webkit-scrollbar {
            width: 5px;
          }
          .scrollbar::-webkit-scrollbar-thumb {
            background-color: #e5e7eb;
            border-radius: 5px;
            border: none;
          }
          .scrollbar::-webkit-scrollbar-track {
            background-color: #fff;
            border-radius: 5px;
          }
        `}
            </style>

      <div
        className={`${open ? "w-60" : "w-30"} scrollbar overflow-y-auto px-0 duration-500 bg-white`}
      >
        <div
          className="h-auto overflow-y-auto scrollbar"
          style={{
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <div className="flex justify-center">
            <Logo
              logoStyle={`${open ? "w-72" : "w-30"} mb-10 mx-auto cursor-pointer duration-500`}
            />
          </div>
          <MenuItem open={open} />
        </div>
      </div>
    </>
  );
}

export default SideBar;

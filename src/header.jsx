import pageTitle from '../public/arusa.png'

function Header() {

    const bagCountStyle = {
        position: 'absolute',
        // top: '50%',
        left: '98%',
        transform: 'translate(-50%, -50%)',
        // fontSize: '2rem',
        // fontWeight: 'bold',
        backgroundColor: '#343A40',
        color: '#fff',
        borderRadius: '50%',
        // padding: '0.5rem',
        // zIndex: 1000
    }

  return (
    <>
      <header>
        <nav className="nav p-3 d-flex flex-row justify-content-between">
            <li className='d-flex align-items-center'>
              <i className='bi bi-list text-white' style={{fontSize: '1.5rem'}}></i>
              <a href="#" className="nav-link text-white" style={{fontSize: '1.5rem', cursor: 'pointer'}}>SHOP</a>
            </li>
            <li>
              <a href="#" className="page-title nav-link text-white"><img src={pageTitle} alt="" /></a>
            </li>
            <li className='d-flex flex-row align-items-center gap-0'>
              <a href="#" className="nav-link text-white" style={{fontSize: '1.5rem', cursor: 'pointer'}}><i className='bi bi-bag'></i></a>
              <span className='badge bg-secondary' style={bagCountStyle}>0</span>
            </li>
        </nav>
      </header>
    </>
  );
}

export default Header;

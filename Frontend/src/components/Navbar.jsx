import React, {useState} from 'react'

export default function Navbar(props) {

  const [prodBarcode, setProdBarcode] = useState('')
 
  return (
    <div>
      <navBar className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white fs-4" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white fs-4" aria-current="page" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white fs-4" aria-current="page" href="/about">About</a>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Enter Barcode" value={prodBarcode} onChange={e => setProdBarcode(e.target.value)} aria-label="Search" />
              <a href={`/getproduct/${prodBarcode}`}>
                <button className="btn btn-primary fs-5" type="button">
                  Search
                </button>
              </a>
            </div>
          </div>
        </div>

      </navBar>
    </div>
  )
}

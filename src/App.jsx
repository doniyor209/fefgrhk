import data from '../public/data.js'
import './App.css'
import Sidebar from './components/Sidebar.jsx'


function App() {
  return (
    <div>
      <Sidebar></Sidebar>
      <main className='main'>
        <h1>Hello Evano 👋🏼</h1>
        <div className="box">
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Country</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((o, i) => {
                return <tr key={i}>
                  <td>{o.customer_name}</td>
                  <td>{o.Company}</td>
                  <td>{o.phoneNumber}</td>
                  <td>{o.Email}</td>
                  <td>{o.Country}</td>
                  <td><button style={{ backgroundColor: o.Status == "Inactive" ? "#FFC5C5" : "16C09861", color: o.Status == "Inactive" ? "#DF0404" : "#008767", borderColor: o.Status == "Inactive" ? "#DF0404" : "#008767"  }}>{o.Status}
                  </button></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default App

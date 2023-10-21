import Header from './Header'
import Counter from './Counter'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


function App() {

  return (
    <>
      <Header 
        title = { 'Counter' }  
      />
      <Counter />
      <Footer
        copyright = { '© Eunice Javier 2023' }
      />
    </>
  )
}

export default App

import './App.scss';
import './styles/_reset.scss';
import Header from "./layout/header/header";
import Content from "./layout/content/content";
import Footer from "./layout/footer/footer";

function App() {
  return (
      <div className='root'>
        <Header/>
        <Content/>
        <Footer/>
      </div>
  );
}

export default App;

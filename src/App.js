import './App.scss';
import About from './sections/about/About';
import Reasons from './sections/reasons/Reasons';
import reasonImg from './assets/image/reasonpagebg.png';
import StartPage from './sections/startPage/StartPage';
import cardImage from './assets/image/advantage.png'
import SmallCard from './components/smallCard/SmallCard';
import BigCard from './components/bigCard/BigCard';
import Description from './components/description/Description';
import statsBg from './assets/image/statspage.png';
import Stats from './sections/stats/Stats';
import ContactUs from './sections/contactUs/ContactUs';
import contactUsBg from './assets/image/contactpage.png';
import Footer from './sections/footer/Footer';



function App() {
  return (
    <div className="gridContainer">
      <StartPage/>
      <Reasons/>
      <img id='reasonImg' src={reasonImg} alt=""/>
      <About/>
      <SmallCard
      idGrid = 'card1'
      bgColor = {{backgroundColor: '#FFE2DE'}} 
      title = "Weight Lifting"
      />
      <SmallCard
      idGrid = 'card2'
      bgColor = {{backgroundColor: '#C4E769'}} 
      title = "Running & Spinning"
      />
      <SmallCard
      idGrid = 'card3'
      bgColor = {{backgroundColor: '#62D0DF'}} 
      title = "Pumping Iron"
      />
      <SmallCard
      idGrid = 'card4'
      bgColor = {{backgroundColor: '#0052C1'}} 
      title = "Pumping Iron"
      />
      <BigCard
      idGrid = 'card5'
      bgColor = {{backgroundColor: '#22356F'}}
      title = "Physical Health"
      />
      <BigCard
      idGrid = 'card6'
      bgColor = {{backgroundColor: '#0052C1'}}
      title = "Mental Health"
      />
      <BigCard
      idGrid = 'card7'
      title = "Nutrition"
      />
      <BigCard
      idGrid = 'card8'
      bgColor = {{backgroundColor: '#62D0DF'}}
      title = "Gymnastics"
      />
      <BigCard
      idGrid = 'card9'
      bgColor = {{backgroundColor: '#DEE1FF'}}
      title = "Crossfit"
      />
      <BigCard
      idGrid = 'card10'
      bgColor = {{backgroundColor: '#8F00FF'}}
      title = "Aerobics"
      />
      <Description
      idDescription = 'Description1'
      title = "Nutritional Plans"
      text = "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
      />
      <Description
      idDescription = 'Description2'
      title = "Weight Loss"
      text = "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
      />
      <Description
      idDescription = 'Description3'
      title = "Mental Peace"
      text = "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
      />
      <Description
      idDescription = 'Description4'
      title = "Home Training"
      text = "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
      />
      <Description
      idDescription = 'Description5'
      title = "Work/Life Balance"
      text = "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
      />
      <Description
      idDescription = 'Description6'
      title = "Cardio"
      text = "Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy."
      />
      <img id='statsBg' src={statsBg} alt=""/>
      <Stats/>
      <ContactUs/>
      <img src={contactUsBg} id='gridContactBg' alt=""/>
      <Footer/>

    </div>
  );
}

export default App;

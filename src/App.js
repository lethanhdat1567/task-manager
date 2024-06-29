import Header from './templates/Header';
import Hero from './layouts/Hero/Hero';
import Service from './layouts/Service/Service';
import Task from './layouts/Task/Task';
import Features from './layouts/Features/Features';
import About from './layouts/About';
import Choices from './layouts/Choices/Choices';
import Blog from './layouts/Blog';
import Comment from './layouts/Comment/Comment';
import Footer from './templates/Footer/Footer';
function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Service />
            <Task />
            <Features />
            <About />
            <Choices />
            <Blog />
            <Comment />
            <Footer />
        </div>
    );
}

export default App;

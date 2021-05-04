import Navbar from './Navbar'
import Home from './Home'
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/create' exact>
                <Create />
              </Route>
              <Route path='/blogs/:id' exact>
                <BlogDetail />
              </Route>
              <Route path='*' exact>
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;


// Step1: Create Repo in Github
// Step 2: Install npm install gh-pages --save-dev
// Step 3: Add in package.json "homepage":"http://cena-vs.github.io/cena-vs-blog",
// Step 4: Add these in package.json->scripts, "predeploy":"npm run build", and "deploy":"gh-pages -d build".
// Step 5: Enter git init in terminal
// Step 6: Enter git remote add origin https://github.com/cena-vs/cena-vs-blog.git in terminal
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Index from "./pages/index";
import AddPage from "./pages/add";
import EditPage from "./pages/edit";
import Register from "./pages/register";
import NotFound from "./pages/notfound";
import FileUploadPage from "./pages/fileupload";
import Timer from "./pages/timer";
import Timer2 from "./pages/timer2";


class App extends Component {

    render() {
        return (
            <div className="App" style={{ 
                backgroundImage: `url("https://wallpaperaccess.com/full/952192.jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'
              }}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/dashboard' component={Dashboard} />
                        <Route path='/index' component={Index}/>
                        <Route path='/register' component={Register} />
                        <Route path='/add' component={AddPage} />
                        <Route path='/edit/' component={EditPage} />
                        <Route path='/fileupload/' component={FileUploadPage} />
                        <Route path='/timer/' component={Timer} />
                        <Route path='/timer2/' component={Timer2} />
                        <Route path='*' component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

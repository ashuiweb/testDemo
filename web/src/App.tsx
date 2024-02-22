import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import UniteRouter from "./UniteRouter";
import { AppState } from "./store";
import { AuthReducersType } from "./store/auth/reducer";
import Login from "./views/login/login";

const AuthorizedRoute = (props) => {
    const { isLogined } = useSelector<AppState, AuthReducersType>((state) => state.authReducer);
    const { component: Component, ...rest } = props;
    return <Route {...rest} render={(props) => (isLogined ? <Component {...props} /> : <Redirect to="/login" />)} />;
};
const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={["/login"]} component={Login} />

            <AuthorizedRoute component={UniteRouter} />
        </Switch>
    </BrowserRouter>
);
const App: React.FC = () => {
    return <AppRoutes />;
};

export default App;

import {useRouteError} from 'react-router-dom';

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);
    

    return <div id = "error-page">
    <h1>Ooss..</h1>
    <p>Sorry,an unexpected erroe occured!!!</p>
    <p>
        <i>{error.statusText || error.message}</i>
    </p>
    </div>

}
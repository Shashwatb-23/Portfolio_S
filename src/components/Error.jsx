import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <>
            <div className="flex justify-center mt-40">
                <h1 className="px-3">Oops!</h1>
                <h2 className="">Something went wrong</h2>
            </div>
                <h2 className="ml-3 flex justify-center mt-4">{err.status + " : " + err.statusText }</h2>
        </>
    )
}

export default Error;
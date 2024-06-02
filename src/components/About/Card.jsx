
function Card(props) {
    return(
            <>
                <div className="grid justify-center justify-items-center grid-cols-1 ">
                

                    <div className="bg-slate-600 mx-20 p-3 pl-7 mt-8 bg-opacity-70 rounded-md mb-6">
                            <div className="flex justify-center">
                                {props.img}    
                            </div>

                            <div className="grid justify-items-center">
                                <h2 className="text-2xl font-bold text-blue-400">{props.title}</h2>
                                <p className="">{props.desc}</p>
                            </div>
                        </div>
                    
                        
                </div>
            </>
    )
}

export default Card;
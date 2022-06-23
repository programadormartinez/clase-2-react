import ItemCount from "./ItemCount";

const Body = () =>  {
    return(
        <div className="container mt-4">
            <ItemCount stock={5} initial={1} ></ItemCount>
        </div>
    );
}



export default Body;
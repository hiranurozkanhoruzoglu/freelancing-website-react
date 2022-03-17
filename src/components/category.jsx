import "../styles/category.css";


function Category(props) {
    return (
        <div className="average">
            <img src={props.image} alt={props.alt} />
            <h4>{props.subTitle}</h4>
        </div>
    )
}

export default Category;
import React, { useState, useEffect } from 'react';
import Category from "./category";

function Categorys(props) {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadMoreCategory();
    }, []);

    function loadMoreCategory() {
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=4`)
            .then((response) => response.json())
            .then((response) => {
                const newCategories = [...categories, ...response];
                setCategories(newCategories);
            });
            setPage(page + 1);
    }

    return (
        <div className="container category">
            <div className='categories'>
                <h3>Choose Different<span className="active" > {props.categoryName} </span></h3>
                <div className="top">
                    {categories.map((category) => {
                        return (
                            <Category
                                key={category.id}
                                image={category.download_url}
                                alt={category.author}
                                subTitle={category.author}
                            />
                        )
                    })}
                </div>
                <button className="more-btn" onClick={loadMoreCategory}>More Categories</button>
            </div>
        </div>
    )
}

export default Categorys;
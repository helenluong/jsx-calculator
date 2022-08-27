import React, { useState } from 'react';

const Index = () => {
    const [myArr, setMyArr] = useState(
        // [1,2,3,4,5,6]
        [
            {
                productName: 'Iphone 11',
                price: '$1000',
                imgULR: 'https://znews-photo.zingcdn.me/w660/Uploaded/yqdlcqrwq/2022_08_08/07607082022.jpeg'
            },
            {
                productName: 'Iphone 13',
                price: '$1000',
                imgULR: 'https://znews-photo.zingcdn.me/w660/Uploaded/yqdlcqrwq/2022_08_08/07607082022.jpeg'

            },
            {
                productName: 'Iphone 15',
                price: '$1000',
                imgULR: 'https://znews-photo.zingcdn.me/w660/Uploaded/yqdlcqrwq/2022_08_08/07607082022.jpeg'

            }
        ]
    )
    return (
        <div>
            <div className="row">
                {
                    myArr.map((item, index) => {
                        return (
                            <div className="col-3 m-1 bg-primary p-3">
                                <h2>{item.productName}</h2>
                                <img className="w-100" src="https://znews-photo.zingcdn.me/w660/Uploaded/yqdlcqrwq/2022_08_08/07607082022.jpeg" alt="" />
                                <h3>{item.price}</h3>
                                <button className="btn btn-success">Add to cart</button>
                                
                            </div>
                        )
                    })
                }

                <button className="btn btn-primary">Add a new item </button>
            </div>

        </div>
    );
};

export default Index
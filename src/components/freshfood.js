import React from 'react';

import { AudioOutlined } from '@ant-design/icons';
import "../styles/freshfood.css";
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

const Freshfood= ()=>{
    return(
        <div>
        <div className="Freshfood">
            <h1>Fresh food that deserve to eat</h1>
            <p>Fresh food that deserve to eat</p>
    <Search placeholder="What are you looking..." allowClear enterButton="Search" size="medium" onSearch={onSearch} className="search"/>
    <p className='text'>Popular Search: Coconut, Meat, Vegetable, Apple, Orange</p>
        </div>

        <div className='Vegetables'>
            <section>
                <img className='images' src="https://borobazar.vercel.app/assets/images/category/icon/fresh-vegetables.svg" alt="vegetables"></img>
                <p>Fresh Vegetables</p>
            </section>
            <section>
                <img className='images' src="https://borobazar.vercel.app/assets/images/category/icon/diet-foods.svg"></img>
                <p>Diet Food</p>
            </section>
            <section>
                <img className='images' src="https://borobazar.vercel.app/assets/images/category/icon/diet-nutrition.svg"></img>
                <p>Diet Nutrition</p>
            </section>
            <section>
                <img className='images' src="https://borobazar.vercel.app/assets/images/category/icon/fast-food.svg"></img>
                <p>Fast Food Items</p>
            </section>
            <section>
                <img className='images' src="https://borobazar.vercel.app/assets/images/category/icon/fruits-items.svg"></img>
                <p>Fruit Items</p>
            </section>
        </div>

        </div>
        
    )
}

export default Freshfood;
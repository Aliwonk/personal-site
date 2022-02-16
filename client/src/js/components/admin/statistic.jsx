import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { deleteDataFetch, sendDataFetch } from '../../modules/ajax.jsx';



export function Statistic() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/admin/statistic")
        .then(res => res.json())
        .then(
            (result) => {
            setIsLoaded(true);
            setItems(result);
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, []);

    function deleteStatistic(e) {
        let idStatistics = e.target.parentElement.firstChild.textContent
        deleteDataFetch('/admin/' + idStatistics)
            .then(res => res.text())
            .then(result => {
                if(result === 'ok') {

                e.target.parentElement.remove();            
                console.log(1);
        
            }else{

                console.log('fail delete statistics');

            };
        });
        e.preventDefault();
    };

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="statisticBlock">
                {/* {items.length} */}
                <div className="caption">cтатистика сайта</div>
                <a href="/" className="btnBack">Назад в главную</a>
                <div className="statistic">
                    {items.map(item => (
                    <div className="statistic__card" key={item._id}>
                        <div className="statistic__card__el idStatistic">{item._id}</div>
                        <div className="statistic__card__el">Дата: {item.date}</div>
                        <div className="statistic__card__el">Время: {item.time}</div>
                        <div className="statistic__card__el">Страна: {item.fullInfo.countryName}</div>
                        <div className="statistic__card__el">Регион: {item.fullInfo.stateProv}</div>
                        <div className="statistic__card__el">Город: {item.fullInfo.city}</div>
                        <button className="statistic__card__btn" onClick={deleteStatistic}>Удалить</button>
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}
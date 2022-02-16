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
            {items.length}
            {items.map(item => (
            <div className="statistic" key={item._id}>
                <div>{item._id}</div>
                <div>{item.date}</div>
                <div>{item.time}</div>
                <button onClick={deleteStatistic}>Удалить</button>
            </div>
            ))}
            
        </div>
        );
    }
}
import React from "react";
import {io, Manager, Socket} from 'socket.io-client';

const socket = io();

export function Chat(){

    socket.on('online', (client) => {
        let blockOnline = document.querySelector('.online');
        blockOnline.textContent = `Сейчас онлайн: ${client}`;
    });



    socket.on('message', (message) => {
        let blockMessage = document.querySelector('.message');
        blockMessage.innerHTML += `
            <div>
                <p><strong>Имя</strong>: ${message.name}</p>
                <p><strong>Сообщение</strong>: ${message.message}</p>
            </div>
        `;
    });

    function sendMessage(e){
        let form = document.forms.userMessage;
        let name = form.elements.name.value;
        let message = form.elements.message.value;
        socket.emit('mess', {
            name,
            message
        });
        form.reset();
        e.preventDefault();
    }

    return(
        <div className="chat">
            <div className="message">
                <p className="online"></p>
            </div>
            <form name="userMessage" className="sendMessage">
                <p>Имя</p>
                <input type="text" name="name" id="" />
                <p>Сообщение</p>
                <input type="text" name="message" id="" />
                <input type="submit" value="Отправить" onClick={sendMessage}/>
            </form>
        </div>
    )
};
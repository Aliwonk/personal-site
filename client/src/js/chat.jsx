import React from 'react';
import { render } from 'react-dom';
import '../sass/chat.sass';
import { Chat } from './components/chat/chat.jsx';

render(
    <Chat />,
    document.getElementById('chat')
);
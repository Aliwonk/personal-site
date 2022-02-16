import React from 'react';
import { render } from 'react-dom';
import '../sass/admin.sass'
import { Statistic } from './components/admin/statistic.jsx';

render(
    <Statistic />,
    document.getElementById('admin')
)
import axios from 'axios';

axios.get('/api/demo01').then(res => {
    console.log(res.data);
});
axios.get('/api/demo02').then(res => {
    console.log(res.data);
});
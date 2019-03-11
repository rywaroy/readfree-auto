const schedule = require('node-schedule');
const axios = require('axios');

schedule.scheduleJob('0 0 1 * * *', function(){
        
  request(true)

});

function request(next = false) {
  axios({
    method: 'get',
    url: 'https://readfree.me',
    headers: {
      Cookie: 'Hm_lvt_375aa6d601368176e50751c1c6bf0e82=1551693879; csrftoken=8c0PUCuz6p4wH3QO76arwldvuJLGYwjlUw8OfBt1wFqt969eTua6gwoCCnR6E0kK; sessionid=xwldunpssfywqbvtqqlul28xk4tij9z8; Hm_lpvt_375aa6d601368176e50751c1c6bf0e82=1552297969',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36'
    }
  }).then(() => {
    if (next) {
      setTimeout(() => {
        request(false)
      }, 10000)
    }
  });
}


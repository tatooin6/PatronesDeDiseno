// Se lo usa para simplificar el llamado a una funcion
const https = require('https')

const get = url => new Promise((resolve, reject) => {
  const comp = url.split('/')
  const host = comp.shift()

  const options = {
    hostname: host, // 'jsonplaceholder.typicode.com',
    path: `/${comp.join('/')}`,
    method: 'GET'
  };

  const req = https.request(options, res => {
    res.setEncoding('utf8')
    let body = ''
    res.on('data', d => {
      body += d
    });

    res.on('end', d => {
      const parsed = JSON.parse(body)
      resolve(parsed)
    });
  });

  req.on('error', (e) => {
    reject(e)
  });

  req.end();
});

const main = async () => {
  const resultado = await get('jsonplaceholder.typicode.com/users');
  console.log("Resultado: ", resultado)
}

main()

/*
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/users',
  method: 'GET'
};

const req = https.request(options, res => {
  res.setEncoding('utf8')
  let body = ''
  res.on('data', d => {
    body += d
  });

  res.on('end', d => {
    const parsed = JSON.parse(body)
    console.log(parsed)
  });
});

req.on('error', (e) => {
  console.error(e)
});
req.end();
*/

 const https = require('https')

// FACADE
 const get = url => new Promise((resolve, reject) => {
   const comp = url.split('/')
   const host = comp.shift()
   const options = {
     hostname: host,
     path: `/${comp.join('/')}`,
     method: 'GET'
   }


   const req = https.request(options, res => {
     res.setEncoding('utf8')
     let body = ''
     res.on('data', d => {
       body += d
     });

     res.on('end', d => {
       const parsed = JSON.parse(body)
       console.log(parsed)
       resolve(parsed);
     });
   });

   req.on('error', (e) => {
     reject(e);
   })

   req.end();

 })

 const main = async () => {
   const resultado = await get('jsonplaceholder.typicode.com/users')
   console.log('Resultado: ', resultado)
 }

 main()

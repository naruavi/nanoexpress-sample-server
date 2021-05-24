const nanoexpess = require('nanoexpress');

const server = nanoexpess();

server.get('/test/:OTP', (req, res) => {

    res.json({
        "status": 200,
        "OTP": req.params.OTP || 'No OTP Found'
    });

});

server.listen(3000);
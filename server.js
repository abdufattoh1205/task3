const express = require('express');

const app = express();

app.get('/abdufattoh1205_gmail_com', (req, res) => {
    const { x, y } = req.query;
    
    if(/^[1-9]\d*$/.test(x) && /^[1-9]\d*$/.test(y)){
        let bigX = BigInt(x);
        let bigY = BigInt(y);
        
        const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));
        
        let gcdn = gcd(bigX, bigY)
        let lcm = bigX * bigY / gcdn
            
        res.send(lcm.toString());
    }else{
        res.send("NaN");
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

module.exports = app;


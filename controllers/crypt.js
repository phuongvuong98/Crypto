const path = require('path');

// const p = path.join(path.dirname(process.mainModule.filename),
//     'data',
//     'products.json');


exports.getBlowfish = (req, res, next) => {
    res.render('algo', {
        path: '/cryptBlowfish',
        algo: "Blowfish",
        otherAlgo: {
            p0: "RSA",
            p1: "AES"
        }
    });
}

exports.postBlowfish = (req, res, next) => {
    

    option = null;
    pathFile = null;
    pathFileKey = null;

    console.log(typeof req.body.fileEn)
    console.log(req.body.fileEn.toString())

    if (req.body.fileEn !== "" && req.body.fileEn.indexOf(".enc") < 0) {
        option = 0;
        pathFile = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileEn
        );
        pathFileKey = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileKeyEn
        );
    }
    else if (req.body.fileDe !== "") {
        option = 1;
        pathFile = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileDe
        );
        pathFileKey = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileKeyDe
        );
    }

    
    console.log(pathFile);
    console.log(pathFileKey);
    console.log(option);

    var PythonShell = require('python-shell');
    
    var options = {
        mode: 'text',
        //args: [pathFileEn, pathFileKeyEn, '--option=123']
        args: [pathFile, pathFileKey, option]
    };


    PythonShell.run('python/Blowfish.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
    
    res.render('algo', {
        path: '/cryptBlowfish',
        algo: "Blowfish",
        otherAlgo: {
            p0: "RSA",
            p1: "AES"
        }
    });
    
}

exports.getRSA = (req, res, next) => {
    res.render('algo', {
        path: '/cryptRSA',
        algo: "RSA",
        otherAlgo: {
            p0: "Blowfish",
            p1: "AES"
        }
    });
}
exports.postRSA = (req, res, next) => {
    option = null;
    pathFile = null;
    pathFileKey = null;

    console.log(typeof req.body.fileEn)
    console.log(req.body.fileEn.toString())

    if (req.body.fileEn !== "" && req.body.fileEn.indexOf(".enc") < 0) {
        option = 0;
        pathFile = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileEn
        );
        pathFileKey = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileKeyEn
        );
    }
    else if (req.body.fileDe !== "") {
        option = 1;
        pathFile = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileDe
        );
        pathFileKey = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileKeyDe
        );
    }

    
    console.log(pathFile);
    console.log(pathFileKey);
    console.log(option);

    var PythonShell = require('python-shell');
    
    var options = {
        mode: 'text',
        //args: [pathFileEn, pathFileKeyEn, '--option=123']
        args: [pathFile, pathFileKey, option]
    };


    PythonShell.run('python/RSA.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
    
    res.render('algo', {
        path: '/cryptRSA',
        algo: "RSA",
        otherAlgo: {
            p0: "Blowfish",
            p1: "AES"
        }
    });
}

exports.getAES = (req, res, next) => {
    res.render('algo', {
        path: '/cryptAES',
        algo: "AES",
        otherAlgo: {
            p0: "RSA",
            p1: "Blowfish"
        }
    });
}

exports.postAES = (req, res, next) => {
    option = null;
    pathFile = null;
    pathFileKey = null;

    console.log(typeof req.body.fileEn)
    console.log(req.body.fileEn.toString())

    if (req.body.fileEn !== "" && req.body.fileEn.indexOf(".enc") < 0) {
        option = 0;
        pathFile = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileEn
        );
        pathFileKey = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileKeyEn
        );
    }
    else if (req.body.fileDe !== "") {
        option = 1;
        pathFile = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileDe
        );
        pathFileKey = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            req.body.fileKeyDe
        );
    }

    
    console.log(pathFile);
    console.log(pathFileKey);
    console.log(option);

    var PythonShell = require('python-shell');
    
    var options = {
        mode: 'text',
        //args: [pathFileEn, pathFileKeyEn, '--option=123']
        args: [pathFile, pathFileKey, option]
    };


    PythonShell.run('python/AES.py', options, function (err, results) {
        if (err) throw err;
        // results is an array consisting of messages collected during execution
        console.log('results: %j', results);
    });
    
    res.render('algo', {
        path: '/cryptAES',
        algo: "AES",
        otherAlgo: {
            p0: "RSA",
            p1: "Blowfish"
        }
    });
}
 
// exports.getProduct = (req, res, next) => {
//     // params object received productId.
//     const prodId = req.params.productId;
//     Product.findById(prodId, product => {
//         //console.log(product);
//         res.render('shop/product-detail', {
//             pageTitle: product.title,
//             path: '/products',
//             product: product
//         })
//     });
// }

// exports.getIndex = (req, res, next) => {
//     //console.log(Product);
//     Product.fetchAll(products => {
//         res.render('shop/index', {
//             prods: products,
//             pageTitle: 'Shop',
//             path: '/'
//         });
//     });
// }
// exports.getCart = (req, res, next) => {
//     //console.log(Product);
//     Product.fetchAll(products => {
//         res.render('shop/cart', {
//             prods: products,
//             pageTitle: 'Your cart',
//             path: '/cart'
//         });
//     });
// }

// exports.postCart = (req, res, next) => {
//     // productId stores into name field of input (add to cart button)
//     const prodId = req.body.productId;
//     console.log("[prodId]:", prodId);
//     Product.findById(prodId, (product) => {
//         console.log("In here!", product.price);
//         Cart.addProduct(prodId, product.price);
//     })
//     res.redirect('/cart');
// }

// exports.getOrders = (req, res, next) => {
//     //console.log(Product);
//     Product.fetchAll(products => {
//         res.render('shop/orders', {
//             prods: products,
//             pageTitle: 'Your Orders',
//             path: '/orders',
//             hasProduct: products.length > 0,
//             formCSS: false,
//             productCSS: true
//         });
//     });
// }
// exports.getCheckout = (req, res, next) => {
//     //console.log(Product);
//     Product.fetchAll(products => {
//         res.render('shop/checkout', {
//             prods: products,
//             pageTitle: 'Shop',
//             path: '/checkout',
//             hasProduct: products.length > 0,
//             formCSS: false,
//             productCSS: true
//         });
//     });
// }


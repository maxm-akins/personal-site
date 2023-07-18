const express = require("express");
const router = express.Router();
require("dotenv").config();
const verifyJWT = require("../middleware/verifyJWT");
const PropTypeModel = require("../models/PropTypeModel");
const InvestmentBasisModel = require("../models/InvestmentBasisModel");
const EstimateTypeModel = require("../models/EstimateTypeModel");
const CustomersModel = require("../models/CustomersModel");
const PathModel = require("../models/PathModel");
const CurrencyModel = require("../models/CurrencyModel");
const OtherOptionsModel = require("../models/OtherOptionsModel");


// PROP TYPE END POINTS


router.get('/propTypes', verifyJWT, async (req, res) => {
    try {
        const propTypes = await PropTypeModel.find({}, { _id: 0 });
        const result = {};
        const temp = propTypes.map((item) => {
            result[item.name] = item;
            return item;
            // return item.name;
        });
        console.log(result);
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});

router.get('/propTypes/limited', verifyJWT, async (req, res) => {
    try {
        const propTypes = await PropTypeModel.find({}, { _id: 0, name: 1 })
        const result = propTypes.map((item) => {
            return item.name;
        });
        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/propTypes/update/:propType', verifyJWT, async (req, res) => {
    console.log(req.params.propType);
    const q = req.params.propType;
    const data = req.body;
    try {
        const propType = await PropTypeModel.findOne({ name: q });
        if (!propType) return res.status(204).json({ message: "Proposal Template Data Not Found." });

        propType.docId_base = data.docId_base;
        propType.docId_sigPage = data.docId_sigPage;
        propType.docId_tc = data.docId_tc;
        propType.docId_sigPage_tc = data.docId_sigPage_tc;
        propType.name = data.name;

        propType.save();
        console.log(propType);
        res.status(200).json({ message: "Proposal Template Data Successfully Updated." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/propTypes/create/:propType', verifyJWT, async (req, res) => {
    console.log(req.params.propType);
    const q = req.params.propType;
    const data = req.body;
    try {
        const propType = new PropTypeModel({});

        propType.name = q;
        propType.docId_base = data.docId_base;
        propType.docId_sigPage = data.docId_sigPage;
        propType.docId_tc = data.docId_tc;
        propType.docId_sigPage_tc = data.docId_sigPage_tc;


        propType.save();
        console.log(propType);
        res.status(200).json({ message: "Proposal Template Data Successfully Created." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});




router.delete('/propTypes/delete/:propType', verifyJWT, async (req, res) => {
    console.log(req.params.propType);
    const q = req.params.propType;
    try {
        const propType = await PropTypeModel.deleteOne({ name: q });
        console.log(propType);
        res.status(200).json({ message: "Proposal Template Data Successfully Deleted." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});



router.post('/propTypes/update/:propType', verifyJWT, async (req, res) => {
    console.log(req.params.propType);
    const q = req.params.propType;
    const data = req.body;
    try {
        const propType = await PropTypeModel.findOne({ name: q });
        if (!propType) return res.status(204).json({ message: "Proposal Template Data Not Found." });

        propType.docId_base = data.docId_base;
        propType.docId_sigPage = data.docId_sigPage;
        propType.docId_tc = data.docId_tc;
        propType.docId_sigPage_tc = data.docId_sigPage_tc;
        propType.name = data.name;

        propType.save();
        console.log(propType);
        res.status(200).json({ message: "Proposal Template Data Successfully Updated." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/propTypes/create/:propType', verifyJWT, async (req, res) => {
    console.log(req.params.propType);
    const q = req.params.propType;
    const data = req.body;
    try {
        const propType = new PropTypeModel({});

        propType.name = q;
        propType.docId_base = data.docId_base;
        propType.docId_sigPage = data.docId_sigPage;
        propType.docId_tc = data.docId_tc;
        propType.docId_sigPage_tc = data.docId_sigPage_tc;


        propType.save();
        console.log(propType);
        res.status(200).json({ message: "Proposal Template Data Successfully Created." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});







// INVESTMENT BASIS END POINTS



router.get('/investmentTypes', verifyJWT, async (req, res) => {
    try {
        const investTypes = await InvestmentBasisModel.find({}, { _id: 0 })
        const result = {};
        const temp = investTypes.map((item) => {
            result[item.name] = item;
            return item;
            // return item.name;
        });
        console.log(result);
        res.status(200).json(result);

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.get('/investmentTypes/limited', verifyJWT, async (req, res) => {
    try {
        const investTypes = await InvestmentBasisModel.find({}, { _id: 0, name: 1 })
        const result = investTypes.map((item) => {
            return item.name;
        });

        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});


router.delete('/investmentTypes/delete/:investType', verifyJWT, async (req, res) => {
    console.log(req.params.investType);
    const q = req.params.investType;
    try {
        const investType = await InvestmentBasisModel.deleteOne({ name: q });
        console.log(investType);
        res.status(200).json({ message: "Investment Basis Data Successfully Deleted." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});


router.post('/investmentTypes/update/:investType', verifyJWT, async (req, res) => {
    console.log(req.params.investType);
    const q = req.params.investType;
    const data = req.body;
    try {
        const investType = await InvestmentBasisModel.findOne({ name: q });
        if (!investType) return res.status(204).json({ message: "Investment Basis Data Not Found." });

        investType.name = data.name;
        investType.language = data.language;


        investType.save();
        console.log(investType);
        res.status(200).json({ message: "Investment Basis Data Successfully Updated." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/investmentTypes/create/:investType', verifyJWT, async (req, res) => {
    console.log(req.params.investType);
    const q = req.params.investType;
    const data = req.body;
    try {
        const investType = new InvestmentBasisModel({});

        investType.name = q;
        investType.language = data.language;


        investType.save();
        console.log(investType);
        res.status(200).json({ message: "Investment Basis Data Successfully Created." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});













// ESTIMATE TYPE ENDPOINTS


router.get('/estimateTypes', verifyJWT, async (req, res) => {
    try {
        const estimateTypes = await EstimateTypeModel.find({}, { _id: 0 })
        const result = {};
        const temp = estimateTypes.map((item) => {
            result[item.name] = item;
            return item;
            // return item.name;
        });
        console.log(result);
        res.status(200).json(result);

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.get('/estimateTypes/limited', verifyJWT, async (req, res) => {
    try {
        const estimateTypes = await EstimateTypeModel.find({}, { _id: 0, name: 1 })
        const result = estimateTypes.map((item) => {
            return item.name;
        });

        return res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});


router.post('/estimateTypes/update/:estimateType', verifyJWT, async (req, res) => {
    console.log(req.params.estimateType);
    const q = req.params.estimateType;
    const data = req.body;
    try {
        const estimateType = await EstimateTypeModel.findOne({ name: q });
        if (!estimateType) return res.status(204).json({ message: "Estimate Template Data Not Found." });

        estimateType.name = data.name;
        estimateType.docId = data.docId;


        propType.save();
        console.log(propType);
        res.status(200).json({ message: "Estimate Template Data Successfully Updated." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/estimateTypes/create/:estimateType', verifyJWT, async (req, res) => {
    console.log(req.params.estimateType);
    const q = req.params.estimateType;
    const data = req.body;
    try {
        const estimateType = new EstimateTypeModel({});

        estimateType.name = q;
        estimateType.docId = data.docId;

        estimateType.save();
        console.log(estimateType);
        res.status(200).json({ message: "Estimate Template Data Successfully Created." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});




router.delete('/estimateTypes/delete/:estimateType', verifyJWT, async (req, res) => {
    console.log(req.params.estimateType);
    const q = req.params.estimateType;
    try {
        const estimateType = await EstimateTypeModel.deleteOne({ name: q });
        console.log(estimateType);
        res.status(200).json({ message: "Estimate Template Data Successfully Deleted." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});




// CURRNECY  END POINTS 

router.get('/currency', verifyJWT, async (req, res) => {
    try {
        const currencies = await CurrencyModel.find({}, { _id: 0 })
        const result = {};
        const temp = currencies.map((item) => {
            result[item.currency] = item;
            return item;
            // return item.name;
        });

        console.log(result);
        res.status(200).json(result);

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.get('/currency/limited', verifyJWT, async (req, res) => {
    try {
        const currencies = await CurrencyModel.find({}, { _id: 0, currency: 1 })
        const result = currencies.map((item) => {
            return item.currency;
        });

        return res.status(200).json(result);

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});


router.post('/currency/update/:currency', verifyJWT, async (req, res) => {
    console.log(req.params.currency);
    const q = req.params.currency;
    const data = req.body;
    try {
        const currency = await CurrencyModel.findOne({ currency: q });
        if (!currency) return res.status(204).json({ message: "CurrencyData Not Found." });

        currency.currency = data.currency;
        currency.companyTitle = data.companyTitle;
        currency.address = data.address;
        currency.city = data.city;
        currency.state = data.state;
        currency.zip = data.zip;


        currency.save();
        console.log(currency);
        res.status(200).json({ message: "Currency Data Successfully Updated." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/currency/create/:currency', verifyJWT, async (req, res) => {
    console.log(req.params.currency);
    const q = req.params.currency;
    const data = req.body;
    try {
        const currency = new CurrencyModel({});

        currency.currency = data.currency;
        currency.companyTitle = data.companyTitle;
        currency.address = data.address;
        currency.city = data.city;
        currency.state = data.state;
        currency.zip = data.zip;

        currency.save();
        console.log(currency);
        res.status(200).json({ message: "Currency Data Successfully Created." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});




router.delete('/currency/delete/:currency', verifyJWT, async (req, res) => {
    console.log(req.params.currency);
    const q = req.params.currency;
    try {
        const currency = await CurrencyModel.deleteOne({ currency: q });
        console.log(currency);
        res.status(200).json({ message: "Currency Data Successfully Deleted." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});



// OTHER OPTION ENDPOINTS

router.get('/otherOptions/:option', verifyJWT, async (req, res) => {
    try {
        const q = req.params.option
        const options = await OtherOptionsModel.findOne({ name: q }, { _id: 0 })



        console.log(options);
        res.status(200).json(options);

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});
router.get('/otherOptions', verifyJWT, async (req, res) => {
    try {
        const options = await OtherOptionsModel.find({}, { _id: 0 })
        const result = {};
        const temp = options.map((item) => {
            result[item.name] = item;
            return item;
            // return item.name;
        });


        console.log(result);
        res.status(200).json(result);

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});


router.post('/otherOptions/update/:option', verifyJWT, async (req, res) => {
    console.log(req.params.option);
    const q = req.params.option;
    const data = req.body;
    try {
        const option = await OtherOptionsModel.findOne({ name: q });
        if (!option) return res.status(204).json({ message: "CurrencyData Not Found." });

        option.name = data.name;
        option.options = data.options;

        option.save();
        console.log(option);
        res.status(200).json({ message: "Data Successfully Updated." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});

router.post('/otherOptions/create/:option', verifyJWT, async (req, res) => {
    console.log(req.params.option);
    const q = req.params.option;
    const data = req.body;
    try {
        const option = new OtherOptionsModel({});

        option.name = q;
        option.options = data.options;

        option.save();
        console.log(option);
        res.status(200).json({ message: "Data Successfully Created." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});




router.delete('/otherOptions/delete/:option', verifyJWT, async (req, res) => {
    console.log(req.params.option);
    const q = req.params.option;
    try {
        const option = await OtherOptionsModel.deleteOne({ name: q });
        console.log(option);
        res.status(200).json({ message: "Data Successfully Deleted." });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ err, message: "There was an internal server error." });
    }
});





// PATHS END POINTS


router.post('/paths', async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const paths = await PathModel.find({ name: data.name });
        console.log(paths);
        if (paths.length > 0) return res.sendStatus(200);
        else {
            const newPath = new PathModel(data);
            newPath.save();
            console.log(newPath);
        }


        res.status(200).json({ data });

    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});


router.get('/paths/search/:search', async (req, res) => {

    console.log(req.params.search);
    const q = req.params.search;

    console.log("customer search endpoint found!");
    try {
        let paths = await PathModel.find({ name: { $regex: q, $options: "xi" } }, { _id: 0 }).limit(10);

        console.log(paths);
        res.status(200).json(paths);

    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});








// CUSTOMERS END POINTS


router.get('/customers', verifyJWT, async (req, res) => {

    console.log("customers endpoint found!");
    try {
        const customers = await CustomersModel.find({}, { accountName: 1, _id: 0 })
        const result = customers.map((item) => {
            // return item.name;
            return item.accountName;
        });
        console.log(customers);
        res.status(200).json({ result });

    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});


router.get('/customers/:customer', verifyJWT, async (req, res) => {

    console.log(process.env.ACCESS_TOKEN_SECRET);

    console.log("customer endpoint found!");
    try {
        const customer = await CustomersModel.findOne({ accountName: req.params.customer }, { _id: 0 })

        console.log(customer);
        res.status(200).json(customer);

    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});


router.post('/customers/:customer', verifyJWT, async (req, res) => {

    console.log(req.body);
    const data = req.body;

    console.log("customer endpoint found!");
    try {
        let customer = await CustomersModel.findOne({ accountName: data.accountName })
        if (customer) {
            for (const key in data) {
                customer[key] = data[key];
            }
        }
        else {
            customer = new CustomersModel(data);
        }

        customer.save()
        console.log(customer);
        res.status(200).json(customer);

    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});



router.get('/customers/search/:search', verifyJWT, async (req, res) => {

    console.log(req.params.search);
    const q = req.params.search;

    console.log("customer search endpoint found!");
    try {
        let customers = await CustomersModel.find({ accountName: { $regex: q, $options: "i" } }, { accountName: 1, _id: 0 }).limit(10);

        console.log(customers);
        res.status(200).json(customers);

    }
    catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
});


module.exports = router;

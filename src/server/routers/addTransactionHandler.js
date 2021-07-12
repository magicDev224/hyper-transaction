/**
 * fileName: addTransactionHandler.js
 * made by: Plakos
 */
const fabricNetwork = require('../fabricNetwork');

const addTransactionHandler = async (req, res) => {
    try {
        //get tuna detail
        const { tuna } = req.body;

        //get contract with fabric network
        const contract = await fabricNetwork.connectNetwork('connection-producer.json', 'wallet/wallet-producer');

        //make transaction
        await contract.submitTransaction('addAsset', JSON.stringify(tuna));

        return res.status(200).send({ status: true, result: 'success' });
    } catch (error) {
        console.log(error);
        res.status(500).json(`something broken!:, ${error}`);
    }
};

module.exports = addTransactionHandler;
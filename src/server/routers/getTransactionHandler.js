/**
 * fileName: getTransactionHandler.js
 * created By: Plakos
 */

const getTransactionHandler = async (req, res) => {
    try {
        //get envelopid
        const { envelopId } = req.body;

        //get contract
        const contract = await fabricNetwork.connectNetwork('connection-retailer.json', 'wallet/wallet-retailer');

        //get transaction & original hashdata
        const tran_response = await contract.evaluateTransaction('queryAsset', envelopId);

        const transaction = JSON.parse(tran_response.toString());

        const origin_hash = transaction.hashdata;

        return res.status(200).send({ stauts: true, origin_hash: origin_hash });
    } catch (error) {
        console.log(error);
        res.status(500).json(`something broken!:, ${error}`);
    }
};

module.exports = getTransactionHandler;
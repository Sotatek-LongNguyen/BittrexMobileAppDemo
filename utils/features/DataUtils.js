//Bittrex API v1.1
const summaryMarketApi = 'https://bittrex.com/api/v1.1/public/getmarketsummaries';
const specificSummaryMarketApi = 'https://bittrex.com/api/v1.1/public/getmarketsummary?market='; 
const marketHistoryApi = 'https://bittrex.com/api/v1.1/public/getmarkethistory?market=';

export default class DataUtils {

    //Round Number in React-native, nodejs
    static RoundNumber(value, exp) {
        if (typeof exp === 'undefined' || +exp === 0)
            return Math.round(value);

        value = +value;
        exp = +exp;

        if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
            return NaN;

        // Shift
        value = value.toString().split('e');
        value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

        // Shift back
        value = value.toString().split('e');
        return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
    }

    static async getSummaryMarketWithFilter(context, filterStr) {
        try {
            //Fetch Data
            let response = await fetch(summaryMarketApi);
            let responseJson = await response.json();
            context.setState({
                isLoading: false,
                dataAsset: responseJson.result,
            });
            context.arrayDataAsset = responseJson.result;

            //Filter data with key
            var dataFiltered = context.arrayDataAsset.filter((item) => {
                var itemData = item.MarketName.toLowerCase();
                return itemData.indexOf(filterStr.toLowerCase()) > -1
            });

            //Return Data Filtered
            context.setState({
                dataAsset: dataFiltered,
            });

        } catch (Err) {
            console.error(Err)
        }
    }

    //get market summary
    static async getSpecificMarketSummary(context, coinName) {
        try {
            //Fetch Data
            let response = await fetch(specificSummaryMarketApi + coinName);
            let responseJson = await response.json();
            context.setState({
                isLoading: false,
                marketSummaryData: responseJson.result[0],
            });

        } catch (Err) {
            console.error(Err)
        }
    }

    //get market history
    static async getMarketHistory(context, coinName, sellOrBuy) {
        try {
            let response = await fetch(marketHistoryApi + coinName);
            let responseJson = await response.json();
            context.setState({
                isLoading: false,
                historyData: responseJson.result,
            });

            //Filter data to get buy/sell history
            var arrayDataForFilter = responseJson.result;
            var dataFiltered = arrayDataForFilter.filter((item) => {
                var itemData = item.OrderType.toLowerCase();
                return itemData.indexOf(sellOrBuy.toLowerCase()) > -1;
            });
            context.setState({
                historyData: dataFiltered,
            });

        } catch (Err) {
            console.error(Err);
        }
    }

    static getTimeFromTimeStamp(timeStamp) {
        return ((new Date(timeStamp)).toLocaleTimeString())
    }

}